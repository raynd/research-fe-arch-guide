---
title: Metrics & Evaluation
description: Candidate measures and evaluation safeguards for experiments.
---

Choose metrics to match each research question. These are candidates, not a finalized protocol.

| Outcome | Candidate measures | Required caveat |
|---|---|---|
| Content availability | Target facts found in initial HTML and rendered output; report numerator/denominator and stage | Availability is not proof of indexing or use. |
| Extraction | Field precision/recall/F1; text or structure completeness against annotated reference | Define fields, normalization, matching rules, and exact-match tolerance. |
| Structural interpretation | Section association or heading-context accuracy | Define the unit and annotation rubric; report adjudication and agreement. |
| Retrieval | Recall@k, precision@k, MRR, nDCG where appropriate | Freeze relevant units, queries, corpus, k, and tie handling. |
| Answer quality | Rubric-based correctness, completeness, and faithfulness | Score dimensions separately; report rubric, blinded review, and annotator agreement. |
| Citation behavior | Citation coverage, claim-level support accuracy, and attribution precision | A cited URL is not automatically a supporting citation; evaluate at claim level. |
| Technical quality | Validation, accessibility, performance, and error measures | These do not alone demonstrate GEO/AEO effects. |

For each metric, specify the formula, unit, denominator, direction of benefit, aggregation, annotation, and missing/failure handling. Report results per content/query and processing stage before summaries. Document sampling, baselines, repeated-run policy, uncertainty, multiplicity, and interpretation thresholds in the [analysis plan](/en/05-experiments/analysis-plan/) before execution. Avoid composite scores unless their construction is justified and prespecified.
