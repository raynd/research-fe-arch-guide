---
title: Literature Search Protocol
description: Reproducible search, screening, and source-appraisal protocol for the literature review.
---

## Status

**Protocol status: Draft — search not yet run.** This is a protocol template, not a claim that a comprehensive or systematic review has been completed. Do not invent databases, search dates, hit counts, or screened sources. Record the version and approval date before beginning formal screening.

## Review objective

Map empirical and theoretical work relevant to whether frontend implementation affects content availability, extraction, interpretation, retrieval, answer quality, or citation behavior in search and generative systems. Identify direct evidence, adjacent evidence, and gaps separately.

## Sources and search log

Select appropriate scholarly indexes, publisher libraries, and standards or system documentation before searching. Search scholarly sources separately from practitioner material and official technical documentation. Record each source in a dated log:

| Search ID | Source/index and coverage | Exact query and fields | Search date | Limits | Export and hit count | Notes |
|---|---|---|---|---|---|---|
| Not run | | | | | | |

Build query families around: (1) generative/answer search, (2) semantic HTML and content extraction, (3) JavaScript rendering and crawling, (4) structured data and entities, (5) document parsing, chunking and RAG, and (6) retrieval/answer/citation evaluation. Save the exact query per source; syntax and coverage differ. Use backward and forward citation searching only with a recorded seed source and search date.

## Eligibility criteria

Before screening, specify:

- **Population/context:** public web content, controlled web fixtures, search crawlers, parsers, retrieval systems, or generative answer systems.
- **Intervention/exposure:** identifiable frontend, rendering, markup, metadata, or content-structure characteristic.
- **Comparator:** explicit alternative, baseline, or no-comparator rationale.
- **Outcomes:** a measured availability, extraction, structural, retrieval, answer, citation, accessibility, or technical outcome.
- **Study types:** empirical and conceptual sources may both inform the map, but must be labeled by design and not treated as equivalent evidence.
- **Exclusions:** unrelated optimization claims without a separable frontend factor; unverifiable records; duplicate reports (retain the most complete record and cross-link).
- **Language/date limits:** decide and justify before searching; do not silently infer absence from excluded languages.

## Screening and source flow

Export records with stable identifiers and provenance; deduplicate while retaining merge decisions. Screen title/abstract and then full text against the frozen criteria. Log a reason for every full-text exclusion. If one reviewer screens, state this limitation; if a second reviewer is available, independently screen a planned subset and record agreement and resolution. Report counts at each step, including unavailable full text and duplicate records. A flow diagram may be added after real counts exist.

## Extraction and appraisal

Use the [paper-note template](/en/03-notes/paper-notes/) and capture source ID, research question, design, data/sample, frontend exposure, comparator, system and version/date, measurement stage, metric definition, results and uncertainty, confounders, limitations, funding/conflicts when reported, and direct relevance. Record exact page/section for claims.

Appraise internal validity and applicability with design-appropriate questions: Was the comparison controlled? Was content parity demonstrated? Were outcome measures valid and assessed independently? Were selection, confounding, missingness, repeated measures, and system drift addressed? Avoid a single numeric quality score unless a justified instrument is selected.

## Synthesis rules

Group evidence by the measured stage in the processing chain, not only by topic. Do not combine crawler accessibility, extraction, retrieval, answer correctness, and citation support into one outcome. Avoid vote counting; compare direction, magnitude, uncertainty, study design, and applicability. Document protocol changes and their impact on screening or synthesis.
