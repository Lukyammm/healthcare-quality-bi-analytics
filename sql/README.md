# SQL Assets

The SQL files are written in portable PostgreSQL-style syntax and can be adapted to SQL Server, BigQuery, or SQLite.

Files:

- `schema.sql`: table definitions for the synthetic star schema.
- `kpi_queries.sql`: reusable BI queries for dashboard metrics.
- `data_quality_checks.sql`: validation checks for analyst workflow.

Recommended interview talking point:

> I modeled the operational workflow as two fact tables with shared unit and target dimensions, then wrote SQL checks to validate metric reliability before building the dashboard layer.
