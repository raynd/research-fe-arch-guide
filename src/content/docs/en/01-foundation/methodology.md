---
title: Research Methodology
description: Evidence review and empirical methods for the research lifecycle.
---

## Evidence review

Use a transparent scoping-review workflow for this interdisciplinary topic; do not call it a systematic review unless the protocol, search coverage, screening, and reporting meet that standard. Freeze and version the search protocol before formal screening. Record each database or source index, exact query, fields searched, date, limits, export format, and result count in the [literature search protocol](/en/01-foundation/literature-search/).

Deduplicate records, retain a screening log with inclusion/exclusion reasons, and record full-text availability. Have a second reviewer independently screen a sample when feasible; resolve disagreements explicitly and report when screening is single-reviewer. For each included source, record complete bibliographic details, publication status, research question, study design, sample, system and date, measures, findings as stated by the authors, limitations, and relevance. Separate quotations, paraphrases, and this project's interpretation. Do not populate a claim without a verifiable source.

Assess source quality and applicability by design-specific criteria; publication venue or citation count alone is not a quality score. Treat independent studies as independent only when their data, system, or analysis are not substantially shared. Preserve null and conflicting evidence.

## Empirical evaluation

Model the causal path explicitly: frontend treatment → delivered response → rendered DOM → extraction/parsing → segmentation/chunking → retrieval → generated answer → citation. Record which transitions are directly observed. A downstream answer change cannot identify which hidden stage changed.

For causal claims, compare matched content under a predeclared intervention and vary one factor at a time unless a factorial design is justified. Randomize run order and block comparisons by content/query and time where feasible. Treat pages, queries, repeated runs, and annotators as potentially clustered observations; do not count correlated outputs as independent samples. Distinguish controlled, locally observable pipelines from black-box external services. Capture raw outputs, environment metadata, run dates, and tool versions.

Before confirmatory runs, version a protocol and analysis plan covering the target estimand, primary outcome, unit of analysis, sampling, exclusion rules, annotation, uncertainty, missing data, multiplicity, and stopping rule. Use a pilot to estimate feasibility and variance before justifying sample size; do not select a sample or threshold after seeing preferred results. The [experiment analysis plan](/en/05-experiments/analysis-plan/) provides a checklist.

## Synthesis

Assess evidence quality based on the actual source and methodology, including risk of bias, independence, replication, precision, confounding, and applicability. Do not calculate an evidence level by counting papers. Link every finding to the exact source passage or experiment artifact, outcome stage, and limitations; link each recommendation to the findings that support it. Report effect direction and magnitude with uncertainty where estimable, alongside null, mixed, and contradictory results. Separate exploratory from confirmatory analysis.

## Research ethics and integrity

Respect system terms and rate limits; do not collect personal data unnecessarily. Preserve provenance, licenses, and version history for datasets and outputs. Log protocol deviations before interpreting affected outcomes. Report unsuccessful runs and exclusions, and avoid presenting exploratory observations as confirmatory evidence.
