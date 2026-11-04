---
title: PAPER-001 — HtmlRAG
description: Critical source appraisal of HTML representation, cleaning, and block-tree pruning in HtmlRAG, distinct from GEO/AEO claims.
date: 2026-11-04
paperId: PAPER-001
---

## Bibliographic record

- **Paper ID:** PAPER-001. No earlier assignment was present when this record was created.
- **Title:** HtmlRAG: HTML is Better Than Plain Text for Modeling Retrieved Knowledge in RAG Systems.
- **Authors:** Jiejun Tan, Zhicheng Dou, Wen Wang, Mang Wang, Weipeng Chen, Ji-Rong Wen.
- **Year / venue:** 2025, Proceedings of the ACM Web Conference 2025 (WWW ’25), pp. 1733–1746.
- **DOI:** [10.1145/3696410.3714546](https://doi.org/10.1145/3696410.3714546).
- **arXiv:** [2411.02959](https://arxiv.org/abs/2411.02959); the reviewed [HTML v2](https://arxiv.org/html/2411.02959v2) was submitted on 2025-02-07. The first preprint was submitted in 2024; 2025 is the conference publication year.
- **Publication status:** Published conference paper; title, authors, year, venue, and pages checked against [publisher-deposited Crossref metadata](https://api.crossref.org/works/10.1145/3696410.3714546). The appraisal below is of arXiv v2, not a claim of line-for-line comparison with the publisher PDF.
- **Review date / selection:** 2026-11-04; direct user-nominated source, selected for HTML knowledge representation and structural processing. No systematic search or replication is claimed.
- **Artifacts:** [Authors' code and data repository](https://github.com/plageon/HtmlRAG). No research software was installed or run.

## Research topic and question

Can retaining HTML as the representation of retrieved external knowledge improve RAG question answering compared with plain text, while cleaning and pruning keep inputs within context limits?

This concerns **post-retrieval knowledge processing**. The paper's introduction discusses commercial systems as motivation, but the experiments do not establish their private implementations.

## Problem addressed by HTMLCleaner

Here, “HTMLCleaner” refers to the paper's **HTML cleaning module / HTML-Clean** (§3.2), not a separately validated general web standard. Raw retrieved HTML contains markup, styles, scripts, comments, and redundant structure that consume tokens. Text conversion reduces overhead but may remove useful relationships.

The query-independent cleaning removes CSS, comments, JavaScript, and lengthy attributes, compresses single-nested tags, and removes empty tags. The authors describe this as almost lossless structural compression. That characterization is scoped to their intended content processing: removing attributes, scripts, or CSS is not universally information-preserving, particularly for dynamic content, visibility, or accessibility relationships.

## Methodology and processing pipeline

1. Retrieve web results and download static HTML.
2. Clean HTML without conditioning on the question (§3.2).
3. Concatenate retrieved HTML, parse it using Beautiful Soup, and merge fragmented DOM nodes into a granularity-adjustable **block tree** (§3.3).
4. Use **BGE-Large-EN** embeddings of block text and the query to greedily remove low-relevance blocks (§3.4.1).
5. Build a finer block tree; a fine-tuned, Phi-3.5-Mini-Instruct-based generative model scores block paths. Greedy pruning produces shorter HTML (§3.4.2).
6. Supply the refined HTML to the reader LLM to generate an answer.

The experimental block granularities are 256 words before embedding pruning and 128 before generative pruning (§4.4). The generative pruner uses 2,635 automatically constructed supervised examples, with 2K–32K input lengths. Training construction uses gold-answer matching and excludes examples without a matching block (§3.4.2); this selection limits what that supervision represents.

Cleaning, block construction, pruning, and answer generation are different operations. Despite retaining HTML for the reader, the first pruning stage uses **plain text within blocks for embeddings**. This is not a pipeline that avoids text representations altogether.

## HTML versus plain-text representation

Plain-text passages are described as a common interface between retrieval and generation (§§1–2). The authors argue that flattening can lose headings, table organization, code roles, and link information (Figure 1). The claim “HTML is better” concerns the studied representations, context budgets, refiners, and QA outcomes.

Short-context comparisons evaluate whole pipelines, including learned pruning. The long-context comparison without pruning more directly contrasts vanilla HTML, Beautiful Soup plain text, Markdownify Markdown, and cleaned HTML, but conversion policy and token budget still matter. Neither comparison independently isolates semantic HTML elements versus generic `div` structures.

## Role of DOM structure

The DOM provides parent/child relationships and tag paths. The block tree merges fine-grained nodes to reduce cost and give blocks enough text for relevance estimation. Generative scoring identifies blocks through paths and their content; token-tree inference reuses shared prefixes and skips deterministic single-child steps (§3.4.2).

This is not simply fixed-size chunking or direct pruning of an unchanged browser DOM. The source is downloaded static HTML, and the parsed and compressed structure is transformed before scoring. The DOM-tree ablation tests the authors' grouping choice within this pipeline, not the causal effect of a site's original nesting depth.

## Experiments and datasets

| Dataset   | Question type described by authors        | Reported metric  |
| --------- | ----------------------------------------- | ---------------- |
| ASQA      | Ambiguous questions with multiple answers | EM and Hit@1     |
| Hotpot-QA | Multi-hop questions                       | EM               |
| NQ        | Natural user queries                      | EM and Hit@1     |
| Trivia-QA | Trivia questions                          | EM and Hit@1     |
| MuSiQue   | Composed multi-hop questions              | EM               |
| ELI5      | Long-form answers                         | ROUGE-L and BLEU |

Section 4.1 reports sampling **400 questions per dataset**, using the test split where available, otherwise validation. Retrieval uses **Bing Search API, US-EN**, followed by static HTML downloads; this is not an SSR/CSR crawler comparison.

Short-context readers are Llama-3.1-8B-Instruct and Llama-3.1-70B-Instruct with a 4K context setting. Baselines include chunking/reranking with BM25, BGE, or E5-Mistral, plus LongLLMLingua and JinaAI Reader (§§4.3–4.4). The cleaning comparison uses Llama-3.1-70B-Instruct at 128K (Table 2). Ablations examine block trees and both pruning stages; granularity and inference cost are also analyzed (§4.6).

EM, the authors' Hit@1, and lexical-overlap scores are distinct outcomes. Here Hit@1 means at least one annotated short answer matches the response; it must not be read as a general retrieval-ranking metric.

## Main findings as stated by the authors

The authors report favorable QA performance and reduced input size, attributing benefits to preserved structure and two-stage pruning. Section 4.6.1 reports removal of **94.07%** of original HTML tokens by cleaning, compared with **96.71%** for text and **90.32%** for Markdown conversion. These describe their sampled corpus, not arbitrary websites.

**Direct table reading qualifies the narrative.** Section 4.5 broadly says the method meets or exceeds baselines across metrics; individual cells show counterexamples:

| Setting and source | Outcome      | HtmlRAG variant        | Comparator        |
| ------------------ | ------------ | ---------------------- | ----------------- |
| Table 1, 70B, 4K   | Hotpot-QA EM | HtmlRAG: 46.25         | BGE: 41.75        |
| Table 1, 70B, 4K   | ASQA EM      | HtmlRAG: 30.53         | BGE: 30.57        |
| Table 1, 8B, 4K    | MuSiQue EM   | HtmlRAG: 8.75          | BGE: 10.00        |
| Table 2, 70B, 128K | Hotpot-QA EM | Without pruning: 42.25 | Plain text: 41.00 |
| Table 2, 70B, 128K | NQ EM        | Without pruning: 43.65 | Plain text: 44.11 |
| Table 2, 70B, 128K | ELI5 ROUGE-L | Without pruning: 16.57 | Plain text: 16.88 |

Scores are transcribed in the tables' reported scale, not relative percentage improvements. They are **published study results, not project measurements**. Table 3 reports lower scores when removing block-tree grouping or either pruning stage in its tested setting. Table captions mark author-reported t-tests at p < 0.05; no independent significance analysis or uncertainty estimate is supplied here.

## Limitations and appraisal

**Method constraints discussed by the authors:** HTML token overhead; weak fine-grained block embeddings; long inputs and computation for the generative pruner; trade-offs in granularity (§§3.4, 4.6).

**Project appraisal:** The English-region search corpus, sampled QA tasks, selected models, converter choices, context limits, and answer-matching supervision bound generalization. Static downloads do not establish JavaScript rendering or live crawler behavior. End-to-end QA does not isolate parser quality, initial retrieval quality, or the causal contribution of each HTML relationship. Lexical metrics do not establish factual completeness or claim-level citation support.

Reported “lossless” cleaning is not a universal semantic/accessibility guarantee. Current source code can differ from the paper; reproductions must pin data, model, and code versions. The narrative/table discrepancy above must remain visible rather than being simplified into universal superiority.

The paper discloses public/research funding in its acknowledgements and partial work during an internship at Baichuan in an author note; affiliation and funding do not establish methodological independence or invalidate the results. Independent replication and claim-specific risk-of-bias assessment remain open.

## Relevance to frontend architecture research

**Project interpretation, not an original paper finding:** HTML relationships may be useful when downstream processing retains and uses them. This motivates examining intermediate representations in [H-005](/en/04-hypotheses/h-005/), [H-006](/en/04-hypotheses/h-006/), and the existing proposed [EXP-004](/en/05-experiments/exp-004/).

For such frontend claims the transfer is **indirect**; a future claim-specific assessment may justify level C, but no blanket evidence level is assigned to the paper and no hypothesis status is changed.

**Not demonstrated:** higher search rankings for semantic HTML, crawler preference for HTML over text, more AI citations for websites using semantic elements, or automatic GEO/AEO improvement. No project finding, guideline, or completed experiment is created by this note.

## Claims cited and source locations

- [§3.2](https://arxiv.org/html/2411.02959v2#S3.SS2): cleaning and structural compression.
- [§§3.3–3.4](https://arxiv.org/html/2411.02959v2#S3.SS3): block-tree construction and pruning.
- [§§4.1–4.4](https://arxiv.org/html/2411.02959v2#S4): datasets, metrics, baselines, settings.
- [Table 1](https://arxiv.org/html/2411.02959v2#S3.T1), [Table 2](https://arxiv.org/html/2411.02959v2#S4.T2), [Table 3](https://arxiv.org/html/2411.02959v2#S4.T3): reported results and ablations.
- [§4.6](https://arxiv.org/html/2411.02959v2#S4.SS6): cleaning, granularity, and cost analyses.

## Appraisal and follow-up questions

1. Which specific heading, table, link, or ancestor relationships explain any advantage?
2. Would labeled text or a different converter recover the same information?
3. Does an effect remain under equal information and equal token budgets?
4. Which effects arise from representation versus training and pruning?
5. What changes for rendered DOM, dynamic content, other languages, and current models?
6. Can answers remain correct while evidence selection or citation support deteriorates?

Related: [HTML processing](/en/02-literature/html-content-processing/), [HTML vs. Plain Text](/en/02-literature/html-vs-plain-text/), [literature register](/en/02-literature/), and [Paper Notes template](/en/03-notes/paper-notes/).
