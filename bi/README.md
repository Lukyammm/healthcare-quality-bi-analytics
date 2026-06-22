# BI Layer

This folder documents the intended Power BI layer for the portfolio case.

No production `.pbix` file is included. The repository keeps the BI logic reviewable through DAX measures, SQL queries, screenshots, and synthetic sample data.

## Recommended Power BI Pages

### 1. Executive Overview

Purpose: give leaders a fast read on quality performance.

Suggested visuals:

- KPI cards: compliance rate, target gap, critical notifications, response SLA rate.
- Line chart: monthly compliance trend.
- Bar chart: units below target.
- Matrix: safety domain by unit.

### 2. Unit Performance

Purpose: help quality teams prioritize follow-up.

Suggested visuals:

- Ranked bar chart by risk priority score.
- Unit slicer and service line slicer.
- Compliance by target domain.
- Overdue response table.

### 3. Data Quality and Follow-up

Purpose: show analyst discipline before publishing metrics.

Suggested visuals:

- Count of failed quality checks.
- Missing response timing.
- Duplicate notification IDs.
- Orphan key validation.

## Interview Talking Points

- The model separates operational facts from descriptive dimensions.
- SQL is used for KPI logic and validation before dashboarding.
- DAX measures are written to keep Power BI calculations transparent.
- The dataset is synthetic and privacy-safe for portfolio review.
