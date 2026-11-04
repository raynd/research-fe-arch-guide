---
title: Experiment Analysis Plan
description: Pre-run checklist for estimands, sampling, annotation, and statistical interpretation.
---

## Status

This is a planning template, not a finalized analysis plan. Each experiment must specify its own choices before confirmatory data collection. Record a protocol version, timestamp, repository revision, and any amendments.

## Protocol fields

| Field                            | Specify before the run                                                                  |
| -------------------------------- | --------------------------------------------------------------------------------------- |
| Research question and hypothesis | Exact question; confirmatory or exploratory                                             |
| Treatment/comparator             | One declared contrast; variants not part of the contrast are exploratory                |
| Target estimand                  | Population and outcome contrast the study intends to estimate                           |
| Primary outcome                  | One outcome, definition, direction, unit, and measurement stage                         |
| Secondary outcomes               | Ordered list; label exploratory outcomes                                                |
| Unit of assignment and analysis  | Page/content item, query, run, system, or annotation; explain clustering                |
| Sampling frame                   | How pages, facts, queries, systems, and time windows are selected                       |
| Randomization/blocking           | Run order, matched content/query blocks, seeds, and time blocks                         |
| Exclusions and missingness       | Objective reasons, denominator, failed runs, and unavailable observations               |
| Annotation                       | Rubric, blinding, number of annotators, agreement and adjudication                      |
| Sample-size rationale            | Pilot-based variance/feasibility or simulation; document assumptions and precision goal |
| Analysis                         | Per-unit summaries, contrast, uncertainty interval, and sensitivity checks              |
| Multiplicity                     | How multiple outcomes, queries, and variants will be handled                            |
| Stopping rule                    | Fixed repetitions/window or explicit sequential method; no outcome-driven stopping      |

## Interpretation safeguards

Report effect estimates and uncertainty, not only thresholded significance. Do not treat repeated outputs from the same page, query, or system as independent observations. A large number of correlated queries does not substitute for independent content or system replications. If sample size cannot be justified, describe the study as exploratory and avoid strong null-effect claims.

Separate the measured stages. An effect on a parser's extraction output does not establish an effect on an external search index, answer quality, or citations. State the smallest effect considered practically relevant before looking at results if a decision threshold is needed.

## Results record

Preserve the frozen protocol, amendments, raw and processed data, analysis code/version, exclusions, failed runs, deviations, estimates, uncertainty, and sensitivity analyses. Label post-hoc analyses and report them alongside—not in place of—the planned analysis.
