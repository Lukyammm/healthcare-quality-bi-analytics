-- KPI query set for healthcare quality BI dashboards.
-- Syntax targets PostgreSQL-style SQL and can be adapted to other engines.

-- 1. Monthly safety compliance trend by unit.
SELECT
    DATE_TRUNC('month', fsw.walk_date)::date AS report_month,
    du.unit_name,
    du.service_line,
    SUM(fsw.observations) AS total_observations,
    SUM(fsw.compliant_observations) AS compliant_observations,
    ROUND(
        SUM(fsw.compliant_observations)::numeric / NULLIF(SUM(fsw.observations), 0),
        4
    ) AS compliance_rate
FROM fact_safety_walks fsw
JOIN dim_unit du
    ON fsw.unit_id = du.unit_id
GROUP BY 1, 2, 3
ORDER BY report_month, compliance_rate;

-- 2. Safety target gap by unit and domain.
WITH compliance AS (
    SELECT
        du.unit_name,
        dst.target_domain,
        dst.target_name,
        dst.target_threshold_pct,
        SUM(fsw.observations) AS observations,
        SUM(fsw.compliant_observations) AS compliant_observations,
        SUM(fsw.compliant_observations)::numeric / NULLIF(SUM(fsw.observations), 0) AS compliance_rate
    FROM fact_safety_walks fsw
    JOIN dim_unit du
        ON fsw.unit_id = du.unit_id
    JOIN dim_safety_target dst
        ON fsw.target_id = dst.target_id
    GROUP BY 1, 2, 3, 4
)
SELECT
    unit_name,
    target_domain,
    target_name,
    ROUND(compliance_rate, 4) AS compliance_rate,
    target_threshold_pct,
    ROUND(compliance_rate - target_threshold_pct, 4) AS target_gap,
    CASE
        WHEN compliance_rate >= target_threshold_pct THEN 'Meets target'
        WHEN compliance_rate >= target_threshold_pct - 0.05 THEN 'Near target'
        ELSE 'Below target'
    END AS target_status
FROM compliance
ORDER BY target_gap ASC;

-- 3. Notification severity and response summary.
SELECT
    du.unit_name,
    fn.severity,
    COUNT(*) AS notification_count,
    SUM(CASE WHEN fn.affected_patient_flag THEN 1 ELSE 0 END) AS affected_patient_count,
    SUM(CASE WHEN fn.response_status = 'Completed' THEN 1 ELSE 0 END) AS completed_count,
    SUM(CASE WHEN fn.response_status = 'Overdue' THEN 1 ELSE 0 END) AS overdue_count,
    ROUND(AVG(fn.days_to_response)::numeric, 2) AS avg_days_to_response
FROM fact_notifications fn
JOIN dim_unit du
    ON fn.unit_id = du.unit_id
GROUP BY 1, 2
ORDER BY du.unit_name, fn.severity;

-- 4. Response SLA rate by month.
SELECT
    DATE_TRUNC('month', event_date)::date AS report_month,
    COUNT(*) AS notification_count,
    SUM(CASE WHEN response_status = 'Completed' THEN 1 ELSE 0 END) AS completed_count,
    SUM(CASE WHEN response_status = 'Completed' AND days_to_response <= 7 THEN 1 ELSE 0 END) AS completed_within_sla_count,
    ROUND(
        SUM(CASE WHEN response_status = 'Completed' AND days_to_response <= 7 THEN 1 ELSE 0 END)::numeric
        / NULLIF(COUNT(*), 0),
        4
    ) AS response_sla_rate
FROM fact_notifications
GROUP BY 1
ORDER BY report_month;

-- 5. Unit risk priority score for operational follow-up.
WITH compliance_gap AS (
    SELECT
        fsw.unit_id,
        AVG(dst.target_threshold_pct - (
            fsw.compliant_observations::numeric / NULLIF(fsw.observations, 0)
        )) AS avg_target_gap
    FROM fact_safety_walks fsw
    JOIN dim_safety_target dst
        ON fsw.target_id = dst.target_id
    GROUP BY fsw.unit_id
),
notification_pressure AS (
    SELECT
        unit_id,
        SUM(CASE severity WHEN 'Critical' THEN 4 WHEN 'High' THEN 3 WHEN 'Moderate' THEN 2 ELSE 1 END) AS severity_weight,
        SUM(CASE WHEN response_status = 'Overdue' THEN 1 ELSE 0 END) AS overdue_count,
        COUNT(*) AS notification_count
    FROM fact_notifications
    GROUP BY unit_id
)
SELECT
    du.unit_name,
    du.service_line,
    ROUND(COALESCE(cg.avg_target_gap, 0), 4) AS avg_target_gap,
    COALESCE(np.severity_weight, 0) AS severity_weight,
    COALESCE(np.overdue_count, 0) AS overdue_count,
    ROUND(
        (GREATEST(COALESCE(cg.avg_target_gap, 0), 0) * 100)
        + COALESCE(np.severity_weight, 0)
        + (COALESCE(np.overdue_count, 0) * 5),
        2
    ) AS risk_priority_score
FROM dim_unit du
LEFT JOIN compliance_gap cg
    ON du.unit_id = cg.unit_id
LEFT JOIN notification_pressure np
    ON du.unit_id = np.unit_id
ORDER BY risk_priority_score DESC;
