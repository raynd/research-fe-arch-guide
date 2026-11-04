---
title: Research Questions
description: Initial central and sub research questions, open to revision.
---

## Central research question

> How can frontend architecture improve the machine readability, retrievability, and answerability of web content in generative search systems?

This is the initial framing and may be refined as the literature review and pilot studies reveal scope or measurement constraints.

## Initial subquestions

**RQ1 — Semantic HTML:** How does semantic HTML influence the extraction and interpretation of web content compared to generic DOM structures?

**RQ2 — Rendering:** How do CSR, SSR, and SSG affect the availability of meaningful content to search crawlers and AI-based retrieval systems?

**RQ3 — Structured Data:** Does structured data improve answer quality and entity understanding when the same information is already available in visible HTML content?

**RQ4 — Content Architecture:** How does the original frontend content structure influence downstream document segmentation and RAG retrieval?

**RQ5 — Architecture Guidelines:** Which frontend architecture patterns can be derived from the available empirical evidence to improve GEO and AEO?

## Operationalization and inference boundaries

| Question | Primary contrast or synthesis task                                                      | Outcomes to keep separate                                                                     | Unit / inference boundary                                                                                     |
| -------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| RQ1      | Content-equivalent semantic vs. generic markup                                          | Extraction completeness; structural interpretation                                            | Fixture × extraction pipeline. Does not alone imply improved retrieval or answers.                            |
| RQ2      | CSR, SSR, and SSG with equivalent content                                               | Initial response; rendered DOM; observed client extraction; retrieval, if directly measurable | Fixture × client/system × time. Crawl access is not proof of indexing.                                        |
| RQ3      | Visible content only vs. the same visible content plus equivalent JSON-LD               | Entity/property extraction; answers; claim-level citation support                             | Entity/query × system × time. Keep additional facts/relationships out of the format contrast.                 |
| RQ4      | Equivalent facts with predeclared source-structure variants in a fixed parser/retriever | Parsing; chunk/context preservation; retrieval; generated answer                              | Content item × query × pipeline configuration. Local RAG results do not establish external-provider behavior. |
| RQ5      | Evidence synthesis across reviewed sources and completed experiments                    | Strength, applicability, trade-offs, and gaps                                                 | A synthesis question, not a standalone causal experiment.                                                     |

These are operational starting points, not finalized estimands. Confirm exact variables, primary outcomes, sampling, and inference boundaries in the relevant versioned protocol before data collection. The [literature search protocol](/en/01-foundation/literature-search/) defines source discovery; the [analysis plan](/en/05-experiments/analysis-plan/) defines confirmatory comparisons.

## Revision record

Treat these questions as editable starting points. Record material revisions in the [research journal](/en/03-notes/research-journal/) with rationale, date, and implications for existing hypotheses or experiment designs.
