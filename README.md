# Healthcare Quality BI Analytics

Repository: `healthcare-quality-bi-analytics`

## Overview

Healthcare Quality BI Analytics is a portfolio case study for a junior Data Analyst or BI Analyst role. It expands a patient safety dashboard into a full analytics project with synthetic data, SQL transformations, dimensional modeling, data quality checks, and Power BI-ready measures.

The project focuses on hospital quality operations: safety walks, compliance targets, patient safety notifications, response follow-up, and unit-level risk prioritization.

## Business Problem

Healthcare quality teams often collect operational safety data in forms and spreadsheets, but the data is hard to use when it stays fragmented across manual reports. Leaders need a reliable way to answer questions such as:

- Which units are below patient safety compliance targets?
- Which safety domains have the highest gap against target?
- Are critical notifications being followed up within expected response windows?
- Which units should be prioritized for review or intervention?

## BI Deliverables

- Synthetic healthcare quality datasets in `sample_data/`.
- A star-schema style data model documented in `data_model.md`.
- SQL schema, KPI queries, and data quality checks in `sql/`.
- Power BI-ready DAX measures and dashboard guidance in `bi/`.
- Original Google Apps Script dashboard prototype for web reporting.
- Privacy statement for portfolio use in `DATA_PRIVACY.md`.

## Analytics Skills Demonstrated

- SQL table design and KPI aggregation.
- Dimensional modeling with fact and dimension tables.
- Data quality validation for missing values, invalid rates, orphan keys, and duplicates.
- Healthcare operations metrics: compliance rate, target gap, response SLA, notification severity, affected patient rate, and risk priority.
- Dashboard design for executive, operational, and quality improvement audiences.
- Privacy-aware portfolio packaging with synthetic data only.

## Project Structure

```text
.
├── sample_data/
│   ├── dim_unit.csv
│   ├── dim_safety_target.csv
│   ├── fact_safety_walks.csv
│   └── fact_notifications.csv
├── sql/
│   ├── schema.sql
│   ├── kpi_queries.sql
│   └── data_quality_checks.sql
├── bi/
│   ├── README.md
│   └── powerbi_measures.dax
├── data_model.md
├── DATA_PRIVACY.md
├── Code.gs
├── Index.html
└── docs/screenshots/
```

## Key Metrics

- Safety compliance rate
- Compliance target gap
- Low-performing unit count
- Critical notification count
- Response completion rate
- Response SLA rate
- Average days to response
- Affected patient rate
- Unit risk priority score

## Dashboard Concept

The BI layer is designed around three views:

1. Executive Overview: compliance trend, target gap, critical notifications, SLA response.
2. Unit Performance: unit ranking, under-target units, safety domain breakdown.
3. Data Quality and Follow-up: missing responses, duplicate checks, unresolved events.

## Data Privacy

This project uses synthetic and fictitious portfolio data only. It does not intentionally include production records, patient identifiers, employee identifiers, credentials, internal exports, PHI, or PII.

See `DATA_PRIVACY.md` for the full privacy statement.

## Technologies

- SQL
- Power BI / DAX concepts
- Google Apps Script
- Google Sheets
- HTML/CSS/JavaScript
- Chart.js

## Status

Portfolio BI case study.


---

## 🤝 Contato e Contribuição

Feito com dedicação por **Lukyam Madeira**.
Sinta-se à vontade para explorar, abrir *issues* para dúvidas ou sugerir melhorias.

<div align="center">
  <a href="https://github.com/Lukyammm">
    <img src="https://img.shields.io/badge/GitHub-Lukyammm-181717?style=flat-square&logo=github" alt="GitHub" />
  </a>
</div>
