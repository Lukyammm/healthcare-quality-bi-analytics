-- Data quality checks for healthcare quality analytics.
-- These checks are intended to be run before publishing dashboard metrics.

-- 1. Safety walk observation totals must reconcile.
SELECT
    safety_walk_id,
    observations,
    compliant_observations,
    non_compliant_observations
FROM fact_safety_walks
WHERE compliant_observations + non_compliant_observations <> observations;

-- 2. Safety walk facts must have valid unit keys.
SELECT fsw.*
FROM fact_safety_walks fsw
LEFT JOIN dim_unit du
    ON fsw.unit_id = du.unit_id
WHERE du.unit_id IS NULL;

-- 3. Safety walk facts must have valid target keys.
SELECT fsw.*
FROM fact_safety_walks fsw
LEFT JOIN dim_safety_target dst
    ON fsw.target_id = dst.target_id
WHERE dst.target_id IS NULL;

-- 4. Notification facts must have valid unit keys.
SELECT fn.*
FROM fact_notifications fn
LEFT JOIN dim_unit du
    ON fn.unit_id = du.unit_id
WHERE du.unit_id IS NULL;

-- 5. Completed notifications should have response days populated.
SELECT *
FROM fact_notifications
WHERE response_status = 'Completed'
  AND days_to_response IS NULL;

-- 6. Pending notifications should not have completed response timing.
SELECT *
FROM fact_notifications
WHERE response_status = 'Pending'
  AND days_to_response IS NOT NULL;

-- 7. Duplicate notification identifiers.
SELECT
    notification_id,
    COUNT(*) AS duplicate_count
FROM fact_notifications
GROUP BY notification_id
HAVING COUNT(*) > 1;

-- 8. Invalid future dates for a frozen portfolio dataset.
SELECT 'fact_safety_walks' AS table_name, safety_walk_id AS record_id, walk_date AS record_date
FROM fact_safety_walks
WHERE walk_date > CURRENT_DATE
UNION ALL
SELECT 'fact_notifications' AS table_name, notification_id AS record_id, event_date AS record_date
FROM fact_notifications
WHERE event_date > CURRENT_DATE;
