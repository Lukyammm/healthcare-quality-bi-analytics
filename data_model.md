# Data Model

## Modeling Goal

The model is designed for healthcare quality and patient safety analytics. It separates descriptive dimensions from event-level facts so BI tools can aggregate consistently by month, unit, service line, safety domain, target, severity, and response status.

## Grain

`fact_safety_walks`

- One row per unit, safety target, and safety walk date.
- Measures include observed items, compliant observations, and non-compliant observations.

`fact_notifications`

- One row per patient safety notification event.
- Measures include event count, response status, days to response, severity, and whether the event affected a patient.

## Tables

### dim_unit

Healthcare unit reference table.

| Column | Description |
| --- | --- |
| unit_id | Surrogate unit key |
| unit_name | Friendly unit name |
| service_line | Operational grouping |
| bed_count | Approximate synthetic capacity |
| active_flag | Active/inactive unit flag |

### dim_safety_target

Patient safety target reference table.

| Column | Description |
| --- | --- |
| target_id | Surrogate safety target key |
| target_domain | Safety domain |
| target_name | Specific target or checklist area |
| target_threshold_pct | Expected compliance threshold |

### fact_safety_walks

Safety walk observation fact table.

| Column | Description |
| --- | --- |
| safety_walk_id | Unique observation batch key |
| walk_date | Safety walk date |
| unit_id | Foreign key to dim_unit |
| target_id | Foreign key to dim_safety_target |
| observations | Total observed checklist items |
| compliant_observations | Count of compliant observations |
| non_compliant_observations | Count of non-compliant observations |

### fact_notifications

Patient safety notification fact table.

| Column | Description |
| --- | --- |
| notification_id | Unique notification key |
| event_date | Notification date |
| unit_id | Foreign key to dim_unit |
| event_type | Event category |
| severity | Low, Moderate, High, or Critical |
| affected_patient_flag | Whether a patient was affected |
| response_status | Completed, In Review, Pending, or Overdue |
| days_to_response | Number of days from notification to response |

## Relationships

- `fact_safety_walks.unit_id` -> `dim_unit.unit_id`
- `fact_safety_walks.target_id` -> `dim_safety_target.target_id`
- `fact_notifications.unit_id` -> `dim_unit.unit_id`

## Core Metrics

Safety compliance rate:

```text
compliant_observations / observations
```

Compliance gap:

```text
target_threshold_pct - compliance_rate
```

Response SLA rate:

```text
completed notifications within 7 days / total notifications
```

Affected patient rate:

```text
notifications affecting patients / total notifications
```

Risk priority score:

```text
weighted severity + compliance gap + overdue response pressure
```

## BI Assumptions

- Synthetic response SLA target: 7 days.
- Safety compliance thresholds vary by target.
- Critical and high severity notifications have stronger priority weight.
- Units below target and with overdue events should be reviewed first.
