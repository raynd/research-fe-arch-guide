---
title: Crawlers & Content Acquisition
description: Research note separating discovery, search indexing, model training, live retrieval, and connected sources.
---

## Note status

**2026-11-04 — documentation-based conceptual note.** This is not a crawler experiment or a verified account of private provider implementations. See the [provider comparison](/en/03-notes/ai-search-provider-access/) for dated, product-specific sources.

## Discovery, crawling, indexing, and ranking

Discovery identifies candidate resources, for example through links or XML sitemaps. Crawling fetches resources. Rendering processes a page, potentially executing JavaScript. Indexing analyzes and organizes content for later retrieval. Ranking orders candidates for a query. None of these stages guarantees completion of the next.

[Google's Search documentation](https://developers.google.com/search/docs/fundamentals/how-search-works) describes its own crawling, indexing, and serving stages and JavaScript rendering. It is not evidence that every AI crawler implements Google's rendering behavior. Likewise, a successful HTTP response does not demonstrate that the important content was extracted, indexed, or cited.

## Five acquisition purposes

| Purpose                          | Typical observation or documentation                    | Inference boundary                                                  |
| -------------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------- |
| Search-index crawling            | A documented search crawler fetches URLs for search     | A visit is not proof of index inclusion or rank                     |
| Model-training collection        | A provider documents possible training use              | Not proof of inclusion in a particular training run or live answer  |
| Live search/retrieval            | A product searches while handling an inquiry            | May search existing indexes; “live” is not necessarily a new crawl  |
| Direct user-triggered access     | A fetcher accesses a requested page                     | Not automatically background crawling or training                   |
| APIs, uploads, connected sources | Content is supplied or retrieved through an integration | Public web crawlability may be irrelevant; permissions still matter |

“AI crawler” is an imprecise umbrella term. Record the agent and its documented purpose rather than inferring purpose from the vendor name.

## Search indexes and external APIs

A system may receive URLs, snippets, or extracted text from a search API instead of independently discovering every page. An API request, a page download, and passage retrieval are separate events. The content supplied by an API may differ from both current HTML and rendered DOM.

OpenAI documents that ChatGPT search sometimes uses other search providers; Perplexity documents an API returning ranked results. These disclosures do not reveal all index composition, ranking, parser, or routing details. API availability alone does not establish that a provider's consumer assistant uses the same API internally.

## Connected sources and access policies

Connected services can supply private documents or messages under account and workspace permissions. [OpenAI's connected-app documentation](https://help.openai.com/en/articles/11487775-connected-apps-in-chatgpt) provides a concrete example. Do not equate access through an authorized integration with anonymous web crawling, or generalize its policies to every provider.

[RFC 9309](https://www.rfc-editor.org/rfc/rfc9309.html) specifies robots.txt crawler rules; it is not authentication. Product controls and user-triggered access require checking the relevant provider policy. XML sitemaps describe candidate URLs using the [Sitemap protocol](https://www.sitemaps.org/protocol.html), not an inclusion guarantee.

## llms.txt: documented proposal, not a proven intervention

The [llms.txt proposal](https://llmstxt.org/) describes a Markdown overview with context and links to LLM-friendly material. This is the proposal author's stated purpose, not independent evidence of retrieval or citation improvement. It is not a replacement for robots.txt or proof that any named provider consumes a site's file.

Actual use, supported scope, discovery mechanism, and downstream effects need provider-specific documentation or an explicit experiment. No llms.txt, crawler rule, or sitemap configuration is introduced by this note.

## Questions to retain

- Which client actually fetched the resource, and can its identity be verified beyond a spoofable user-agent string?
- Was content obtained from an index, a fresh fetch, a cache, an API, or a connector?
- Which representation and timestamp reached the downstream system?
- Which purpose-specific policy applied, and what remains unknown?
- Did extraction, retrieval, or citation occur, rather than merely an HTTP visit?

For future observations linked to [EXP-002](/en/05-experiments/exp-002/), record product/function, date, URL, response, agent verification, rendering conditions, permissions, and the exact observed outcome. This does not alter that experiment's proposed status.

## Further reading

[Provider access comparison](/en/03-notes/ai-search-provider-access/), [rendering and crawling literature](/en/02-literature/rendering-crawling/), [HTML processing](/en/02-literature/html-content-processing/), and the [acquisition glossary](/en/13-reference/glossary/#content-acquisition).
