---
title: AI Search Provider Access
description: Dated comparison of publicly documented content access by Perplexity, Gemini, ChatGPT, and Claude.
---

## Status and interpretation

**Documentation review: 2026-11-04.** “Documented” below means stated in the linked official source, not independently tested. Products, APIs, plans, and tool versions differ. Unknown means **not established by the sources reviewed here**, not that the provider never discloses it elsewhere.

No complete internal pipeline is inferred. A crawler permission, search result, or citation is not proof of how a particular answer was assembled.

## Purpose-specific clients and controls

| Provider           | Documented search access                                                        | Training collection/control                                                                                                                              | User-triggered access                                                                                                  | Official source                                                                                                                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Perplexity         | PerplexityBot surfaces and links websites in search results                     | Perplexity states that this bot is not for foundation-model training; this does not establish all company training sources                               | Perplexity-User supports user requests and is not the background search crawler                                        | [Crawler documentation](https://docs.perplexity.ai/docs/resources/perplexity-crawlers)                                                                                                                            |
| Google / Gemini    | Googlebot supports Google Search; Gemini API has a Google Search grounding tool | Google-Extended controls specified training and grounding uses in named Gemini/Vertex AI products; it is a product token, not a separate HTTP user-agent | Google distinguishes user-triggered fetchers from common crawlers; do not identify every Gemini request with Googlebot | [Crawler list](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers), [client categories](https://developers.google.com/crawling/docs/crawlers-fetchers/overview-google-crawlers) |
| OpenAI / ChatGPT   | OAI-SearchBot is documented for ChatGPT search                                  | GPTBot collects content that may be used for training; its control is independent of OAI-SearchBot                                                       | ChatGPT-User supports certain user actions and is not automatic web crawling                                           | [OpenAI bots](https://developers.openai.com/api/docs/bots)                                                                                                                                                        |
| Anthropic / Claude | Claude-SearchBot supports search-result quality and indexing for search         | ClaudeBot collects content that could contribute to model training                                                                                       | Claude-User supports user-initiated access                                                                             | [Anthropic crawler policy](https://privacy.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler)                                                       |

Google explicitly states that Google-Extended does not affect inclusion in Google Search or serve as a Google Search ranking signal. It is not a universal control over every Google AI feature.

OpenAI says user-initiated ChatGPT-User access may not follow robots.txt; Perplexity says Perplexity-User generally ignores it. These are purpose-specific documented policies, not statements about all bots. Anthropic documents robots.txt controls for its listed bots. Check current policies before interpreting logs or access changes.

## Search, APIs, and attribution

### Perplexity

The crawler documentation distinguishes search discovery from user-requested visits. Its [Search API](https://docs.perplexity.ai/docs/search/quickstart) returns ranked web results as structured data for developers, with extracted text controls. The API's existence does not disclose the consumer product's full index composition, external suppliers, internal parser, or reranking pipeline.

Links in search results and sources used in generated responses should be distinguished. A link does not by itself establish support for every attributed claim.

### Gemini

The [Gemini API Google Search grounding documentation](https://aistudio.google.com/docs/google-search) describes optional search-tool use, query generation, processing of results, and returned citation information. It also distinguishes search grounding from a URL-context tool. This is an API feature description, not a claim that every Gemini Apps response uses this exact workflow.

Google Search indexing, the Google-Extended control, and Gemini API grounding are different surfaces. The sources do not establish a complete HTML extraction, chunking, or ranking pipeline for every Gemini product.

### ChatGPT

[ChatGPT search documentation](https://help.openai.com/en/articles/9237897-searching-the-web-with-chatgpt) states that search may run automatically or be selected by the user, can return source links/citations, and sometimes uses third-party search providers with rewritten queries. The reviewed documentation links provider privacy policies but does not justify a fixed, exhaustive supplier or index map for all queries.

[Connected apps](https://help.openai.com/en/articles/11487775-connected-apps-in-chatgpt) can provide authorized service information, for example from Drive or Slack. This is separate from public website crawling. Neither a connected document nor an OAI-SearchBot visit proves inclusion in model training.

### Claude

The [Claude API web search tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool) documents searches during a request and citations from search results. Some tool versions support dynamic filtering before results enter context; this should not be generalized to all versions or Claude interfaces.

The crawler policy separates ClaudeBot, Claude-SearchBot, and Claude-User. These sources do not establish all upstream search suppliers or the full internal index, HTML parser, chunking, and ranking processes. No supplier is assumed here.

## What remains unknown

For each product/function, further evidence is needed to establish which page snapshot was used, whether JavaScript ran, what representation survived extraction, which retrieval/refinement rules applied, and why a particular source was cited. Public source links do not answer all these questions.

Connected-source availability and policies also need product-specific review; the ChatGPT example above is not a claim of equivalent connectors across all four providers. Likewise, publishing developer documentation in llms.txt format is not evidence that a provider's search assistant consumes arbitrary website llms.txt files.

## Research use and maintenance

Treat this page as a dated documentation map, not a platform benchmark or frontend recommendation. Record product, feature, source URL, review date, documented claim, and unresolved question when updating it. Re-check sources before experiments or policy decisions.

Related: [acquisition model and llms.txt](/en/03-notes/crawlers-content-acquisition/), [HTML representations](/en/02-literature/html-vs-plain-text/), [citation evaluation](/en/02-literature/evaluation/), and [technical glossary](/en/13-reference/glossary/).
