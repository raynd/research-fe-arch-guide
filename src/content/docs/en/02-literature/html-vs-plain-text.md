---
title: HTML vs. Plain Text
description: Representation trade-offs, potentially lost relationships, and the limits of transferring HtmlRAG results to frontend architecture.
---

## The comparison is representation-specific

HTML encodes text together with elements, attributes, and nested relationships. Plain text does not intrinsically encode those HTML constructs, but a conversion can express selected relationships through labels, delimiters, indentation, or explicit URLs. Therefore “HTML versus text” is not a complete experimental specification.

The [HTML specification](https://html.spec.whatwg.org/multipage/) defines markup semantics and parsing; it does not establish a retrieval or citation advantage. [PAPER-001 — HtmlRAG](/en/03-notes/paper-notes/htmlrag/) supplies empirical results for particular RAG representations and refiners, not universal evidence about website visibility.

## What conversion may lose

| Relationship       | Available in suitable HTML              | Potential conversion loss or alternative                                            |
| ------------------ | --------------------------------------- | ----------------------------------------------------------------------------------- |
| Section ancestry   | Heading ranks and nested sections       | Flattening can detach a passage from its heading; prepend heading paths             |
| Table associations | Rows, cells, headers, captions          | Sequential text may obscure which header describes a value; serialize labeled cells |
| List membership    | List/item boundaries and nesting        | Items can become an undifferentiated paragraph; retain bullets and depth            |
| Link relationships | Anchor text and `href`                  | Anchor text can survive without its destination; include explicit URLs              |
| Content roles      | Elements such as `code` or `blockquote` | Words remain but their role may disappear; retain role labels or delimiters         |
| Provenance         | Page URL plus extraction metadata       | Merging documents can detach passages from sources; carry source identifiers        |

These are possible failure modes and design alternatives, not measured effects in this project. Invalid markup, CSS layout, script-generated content, and converter policies complicate what can actually be recovered. HTML itself does not guarantee complete or correct semantics.

## What HtmlRAG demonstrates, and what it does not

The authors motivate plain text as a common interface for feeding retrieved passages to LLMs (§§1–2). Its simpler form avoids some markup overhead, while HTML can preserve structure at a token cost. Their method cleans HTML, forms block trees, and prunes them before generation (§3).

The experiments compare a complete processing pipeline at short context and representations without pruning at long context (§4). These are different contrasts. A pipeline improvement cannot be attributed entirely to HTML syntax, semantic elements, or DOM hierarchy.

Results are mixed at individual metric level. In Table 2, using Llama-3.1-70B-Instruct at 128K, cleaned HTML without pruning scores **42.25 Hotpot-QA EM** versus **41.00** for plain text, but **43.65 NQ EM** versus **44.11** for plain text. The [paper note](/en/03-notes/paper-notes/htmlrag/) records further counterexamples. These are author-reported scores, not replicated project results.

The study does **not** establish that crawlers prefer HTML, semantic HTML receives higher search rankings, or websites gain AI citations. It evaluates retrieved knowledge processing and QA, not a website-level GEO intervention.

## Implications to investigate

For future work linked to [H-005](/en/04-hypotheses/h-005/), [H-006](/en/04-hypotheses/h-006/), and the already proposed [EXP-004](/en/05-experiments/exp-004/), record content parity, converter behavior, parser output, chunk boundaries, context budget, retriever, generator, and provenance.

Compare both equal-token-budget and equal-information conditions when appropriate: HTML markup can reduce how much source material fits into a fixed window. A carefully labeled text representation is a stronger comparator than indiscriminate tag stripping. These are appraisal considerations, not a newly registered or executed experiment.

## Open research questions

1. Which relationships survive each conversion, and which are needed for a specific query?
2. Do explicit textual labels recover an apparent HTML advantage?
3. Does structure help initial retrieval, evidence selection, generation, or more than one stage?
4. How do token overhead and truncation change the trade-off?
5. Does preserving provenance affect claim-level citation support independently of answer correctness?
6. Would controlled semantic-element changes matter when facts, depth, ordering, and delivery remain fixed?

No existing hypothesis is marked supported. Any transfer to frontend recommendations remains an unverified inference requiring claim-specific evidence appraisal.

## Sources and related reading

- [HtmlRAG v2, §§1, 3, 4 and Table 2](https://arxiv.org/html/2411.02959v2#S4.T2), reviewed 2026-11-04.
- [WHATWG HTML](https://html.spec.whatwg.org/multipage/) — element meanings and processing rules.
- [Readability output API](https://github.com/mozilla/readability#api-reference) — concrete HTML/text distinction.
- [HTML Content Processing](/en/02-literature/html-content-processing/), [evaluation](/en/02-literature/evaluation/), and [evidence classification](/en/06-evidence/).
