-- Healthcare Quality BI Analytics
-- Synthetic portfolio schema for patient safety and quality reporting.

CREATE TABLE dim_unit (
    unit_id VARCHAR(10) PRIMARY KEY,
    unit_name VARCHAR(100) NOT NULL,
    service_line VARCHAR(100) NOT NULL,
    bed_count INTEGER NOT NULL CHECK (bed_count >= 0),
    active_flag BOOLEAN NOT NULL
);

CREATE TABLE dim_safety_target (
    target_id VARCHAR(10) PRIMARY KEY,
    target_domain VARCHAR(100) NOT NULL,
    target_name VARCHAR(150) NOT NULL,
    target_threshold_pct NUMERIC(5,4) NOT NULL CHECK (target_threshold_pct BETWEEN 0 AND 1)
);

CREATE TABLE fact_safety_walks (
    safety_walk_id VARCHAR(20) PRIMARY KEY,
    walk_date DATE NOT NULL,
    unit_id VARCHAR(10) NOT NULL REFERENCES dim_unit(unit_id),
    target_id VARCHAR(10) NOT NULL REFERENCES dim_safety_target(target_id),
    observations INTEGER NOT NULL CHECK (observations >= 0),
    compliant_observations INTEGER NOT NULL CHECK (compliant_observations >= 0),
    non_compliant_observations INTEGER NOT NULL CHECK (non_compliant_observations >= 0),
    CHECK (compliant_observations + non_compliant_observations = observations)
);

CREATE TABLE fact_notifications (
    notification_id VARCHAR(20) PRIMARY KEY,
    event_date DATE NOT NULL,
    unit_id VARCHAR(10) NOT NULL REFERENCES dim_unit(unit_id),
    event_type VARCHAR(100) NOT NULL,
    severity VARCHAR(20) NOT NULL CHECK (severity IN ('Low', 'Moderate', 'High', 'Critical')),
    affected_patient_flag BOOLEAN NOT NULL,
    response_status VARCHAR(20) NOT NULL CHECK (response_status IN ('Completed', 'In Review', 'Pending', 'Overdue')),
    days_to_response INTEGER NULL CHECK (days_to_response IS NULL OR days_to_response >= 0)
);

CREATE INDEX idx_fact_safety_walks_date_unit
    ON fact_safety_walks (walk_date, unit_id);

CREATE INDEX idx_fact_safety_walks_target
    ON fact_safety_walks (target_id);

CREATE INDEX idx_fact_notifications_date_unit
    ON fact_notifications (event_date, unit_id);

CREATE INDEX idx_fact_notifications_severity_status
    ON fact_notifications (severity, response_status);
