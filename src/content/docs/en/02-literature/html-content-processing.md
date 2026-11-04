---
title: HTML Content Processing
description: Parsing, cleaning, conversion, and structural preservation as distinct stages in AI and RAG pipelines.
---

## Scope and source status

This conceptual review separates processing operations, using the HTML specification, a concrete extraction implementation, and [PAPER-001 — HtmlRAG](/en/03-notes/paper-notes/htmlrag/). It is not a description of every AI provider's pipeline. Sources were checked on **2026-11-04**; no project experiment has been executed.

## From acquired page to model context

A useful analytical model is:

`acquisition → parsing → optional cleaning/extraction → representation → chunking/selection → retrieval refinement → context construction → generation`

Actual pipelines may reorder, combine, or omit stages. Retrieval can precede HTML acquisition when a search API supplies candidate URLs, and occur again over processed documents. Browser rendering is an additional possible step, not an automatic consequence of fetching HTML.

| Operation               | Purpose                                                              | What it does not establish                              |
| ----------------------- | -------------------------------------------------------------------- | ------------------------------------------------------- |
| HTML parsing            | Interpret markup as a node structure using defined parser rules      | Which content is relevant or visible                    |
| HTML cleaning           | Remove or normalize specified markup, attributes, scripts, or styles | That all task-relevant information survived             |
| Main-content extraction | Select material considered the primary content                       | Complete coverage of every relevant fact or sidebar     |
| HTML-to-text conversion | Serialize selected content without original HTML markup              | Preservation of headings, links, or table relationships |
| Chunking                | Divide content into processing or retrieval units                    | Relevance to a particular query                         |
| Retrieval refinement    | Filter, rerank, compress, or prune retrieved material                | A synonym for cleaning or chunking                      |
| Context construction    | Arrange selected material and instructions for the model             | Correct use of that material in the answer              |

These are analytical distinctions; individual libraries may use overlapping names.

## Parsing is not extraction or rendering

The [WHATWG parsing specification](https://html.spec.whatwg.org/multipage/parsing.html) describes tokenization and tree construction, including error handling. The resulting tree need not reproduce the literal source nesting. A DOM snapshot after JavaScript execution is a different observation from a tree parsed from the original response.

An extractor chooses relevant content from such a representation. [Mozilla Readability's API](https://github.com/mozilla/readability#api-reference), for example, returns both processed article HTML (`content`) and text without HTML tags (`textContent`). This illustrates distinct outputs, not a guarantee of extraction accuracy or an assertion that AI providers use Readability.

## Cleaning and structural preservation

Removing scripts, CSS, comments, empty nodes, or redundant wrappers can reduce the input. The exact policy matters: script data may contain content, attributes may encode relationships, and CSS may determine visibility. Cleaning for retrieval is also different from security sanitization.

HtmlRAG §3.2 proposes query-independent cleaning and structural compression; §3.3 constructs a coarser block tree from the DOM; §3.4 prunes blocks using query relevance. The authors describe their cleaning as almost lossless, but this is not a general guarantee for arbitrary websites. Query-based pruning deliberately discards material.

Preservation can mean retaining words, section ancestry, list membership, table associations, link destinations, or provenance. A process can preserve text while losing relationships. Record which properties matter before judging it successful.

## Representations and research implications

Source HTML, rendered DOM, cleaned HTML, plain text, Markdown, and structured records are not interchangeable. Markdown can represent headings, lists, and links, but a converter chooses what to retain. Structured data can add another representation without proving that a downstream consumer uses it.

For [EXP-001](/en/05-experiments/exp-001/) and [EXP-004](/en/05-experiments/exp-004/), a future evaluation should preserve intermediate artifacts and document parser version, visibility rules, extraction target, retained metadata, tokenization, chunk boundaries, and context limits. This is a measurement proposal, not a completed procedure or new experiment.

The research question is whether preserved relationships improve declared extraction, retrieval, or answer outcomes under controlled conditions. Availability, extraction, retrieval, answer quality, and citation support must remain separate.

## Sources and related reading

- [WHATWG: parsing HTML documents](https://html.spec.whatwg.org/multipage/parsing.html) — normative browser parsing model.
- [Mozilla Readability](https://github.com/mozilla/readability) — extraction implementation and output contract.
- [HtmlRAG, §§3–4](https://arxiv.org/html/2411.02959v2#S3) — published processing approach; limitations and results are appraised in [PAPER-001](/en/03-notes/paper-notes/htmlrag/).
- [HTML vs. Plain Text](/en/02-literature/html-vs-plain-text/), [RAG literature themes](/en/02-literature/rag-retrieval/), and [glossary](/en/13-reference/glossary/#content-extraction).
