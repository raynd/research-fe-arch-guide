---
title: Glossary / Quick Knowledge
description: Forty essential terms for frontend architecture, content acquisition, extraction, retrieval, and generative answers.
---

This reference explains terminology; it is **not evidence that an implementation improves GEO/AEO**. English terms remain the entry names in both languages. Provider descriptions summarize public documentation checked on **2026-11-04**, not independently observed behavior or undisclosed internals.

## How to use and extend

The initial vocabulary prioritizes source availability, representation, retrieval, and answer provenance. Each entry uses the same format: **English term** as the heading, **German term**, **quick definition**, **explanation**, **research relevance**, **related terms**, and **references**. Its enclosing section supplies the **category**. German equivalents are explanatory, not new standardized terminology. Keep term headings identical across locales so term fragments remain aligned.

Use the page contents or site search to find a term. Add entries here before creating separate pages; split only when content becomes too large to scan. Definitions of ambiguous terms are explicitly scoped to this project. Provider documentation and implementation examples are not universal specifications.

Detailed research: [literature review](/en/02-literature/), [architecture observations](/en/03-notes/architecture-observations/), [technical notes](/en/03-notes/technical-notes/), [experiments](/en/05-experiments/), [evidence](/en/06-evidence/), and [guidelines](/en/07-guidelines/).

## Frontend Architecture

### Semantic HTML

- **German term:** Semantisches HTML.
- **Quick definition:** HTML that uses elements and attributes according to their defined meaning, rather than only their visual appearance.
- **Explanation:** A heading element identifies a heading; large styled text alone does not.
- **Research relevance:** Defines the markup contrast in [H-001](/en/04-hypotheses/h-001/); extraction benefits remain to be tested.
- **Related terms:** [DOM](#dom-document-object-model), [Heading Hierarchy](#heading-hierarchy).
- **References:** [MDN: semantics in HTML](https://developer.mozilla.org/en-US/docs/Glossary/Semantics).

### DOM (Document Object Model)

- **German term:** Dokumentobjektmodell.
- **Quick definition:** A document model and API representing a document as a tree of nodes, including elements, text, and comments.
- **Explanation:** A DOM tree is the node hierarchy, not the original HTML string. Browser scripts can change it after parsing; parsers outside browsers can also construct DOMs.
- **Research relevance:** [H-002](/en/04-hypotheses/h-002/) concerns hierarchy; record whether an experiment inspects source HTML or the DOM after script execution.
- **Related terms:** [HTML Parsing](#html-parsing), [Content Representation](#content-representation).
- **References:** [MDN: DOM](https://developer.mozilla.org/en-US/docs/Glossary/DOM).

### Heading Hierarchy

- **German term:** Überschriftenhierarchie.
- **Quick definition:** The organization of headings by rank, expressed in HTML through `h1`–`h6`.
- **Explanation:** Heading rank describes section relationships, not font size. It is not identical to DOM nesting depth.
- **Research relevance:** A potential source-structure variable in [EXP-004](/en/05-experiments/exp-004/), not proof of a downstream chunk boundary.
- **Related terms:** [Semantic HTML](#semantic-html), [Structure-Aware Chunking](#structure-aware-chunking).
- **References:** [MDN: heading elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements).

### CSR (Client-Side Rendering)

- **German term:** Clientseitiges Rendering.
- **Quick definition:** Generating or substantially populating page content using JavaScript on the client.
- **Explanation:** A response may contain a shell while meaningful content appears only after scripts run. CSR and SSR can coexist.
- **Research relevance:** [EXP-002](/en/05-experiments/exp-002/) separates initial-response content from later rendered content; crawler capabilities must be measured per system.
- **Related terms:** [SSR](#ssr-server-side-rendering), [Hydration](#hydration).
- **References:** [MDN: CSR](https://developer.mozilla.org/en-US/docs/Glossary/CSR).

### SSR (Server-Side Rendering)

- **German term:** Serverseitiges Rendering.
- **Quick definition:** In this project's rendering comparisons, generating HTML on the server for a request before delivery to the client.
- **Explanation:** Broader usage sometimes includes prerendering. Here, request-time SSR is distinguished from build-time SSG; cached responses need separate documentation.
- **Research relevance:** Defines a delivery condition in [H-003](/en/04-hypotheses/h-003/), not a guarantee of indexing or citation.
- **Related terms:** [CSR](#csr-client-side-rendering), [SSG](#ssg-static-site-generation).
- **References:** [MDN: SSR](https://developer.mozilla.org/en-US/docs/Glossary/SSR).

### SSG (Static Site Generation)

- **German term:** Statische Seitengenerierung.
- **Quick definition:** Generating page files ahead of requests, commonly during a build.
- **Explanation:** SSG also abbreviates “static site generator,” the tool performing generation. Static delivery does not prohibit later client-side updates.
- **Research relevance:** The workspace uses static generation; [EXP-002](/en/05-experiments/exp-002/) proposes a controlled rendering comparison.
- **Related terms:** [SSR](#ssr-server-side-rendering), [Progressive Enhancement](#progressive-enhancement).
- **References:** [MDN: SSG](https://developer.mozilla.org/en-US/docs/Glossary/SSG).

### Hydration

- **German term:** Hydrierung; meist „Hydration“.
- **Quick definition:** Connecting client-side application logic to previously generated HTML so it becomes an interactive application.
- **Explanation:** Framework details vary; hydration reuses existing markup rather than necessarily creating all initial content on the client.
- **Research relevance:** Separate availability before hydration from interactions or content that require it.
- **Related terms:** [CSR](#csr-client-side-rendering), [SSR](#ssr-server-side-rendering).
- **References:** [React: hydrateRoot](https://react.dev/reference/react-dom/client/hydrateRoot) (implementation example, not a framework-independent specification).

### Progressive Enhancement

- **German term:** Progressive Verbesserung.
- **Quick definition:** A design approach that provides a usable baseline and adds capabilities where supported.
- **Explanation:** Essential content or actions should not depend solely on optional enhancements; this is broader than a rendering mode.
- **Research relevance:** Helps define baseline-versus-enhanced content tests, without implying automatic retrieval improvements.
- **Related terms:** [Hydration](#hydration), [Semantic HTML](#semantic-html).
- **References:** [MDN: progressive enhancement](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement).

## Web Crawling and Indexing

### Crawling

- **German term:** Automatisiertes Abrufen von Webseiten.
- **Quick definition:** Automated fetching of web resources by a crawler, often using discovered URLs.
- **Explanation:** A search engine crawler supports search; an “AI crawler” is a broad label whose actual purpose may be training, search, or another task. Rendering means processing a page for presentation, potentially executing scripts; it is not the same as fetching it.
- **Research relevance:** A successful fetch proves neither indexing nor use in an answer.
- **Related terms:** [Indexing](#indexing), [Content Acquisition](#content-acquisition), [CSR](#csr-client-side-rendering).
- **References:** [Google: how Search works](https://developers.google.com/search/docs/fundamentals/how-search-works).

### Indexing

- **German term:** Indexierung.
- **Quick definition:** Processing content into an organized representation that supports later search.
- **Explanation:** A search index is that searchable data structure, not the live website. Ranking orders candidates for a query; it is a separate operation.
- **Research relevance:** Distinguish discoverability, crawlability, index inclusion, retrieval, and ranking as separate outcomes.
- **Related terms:** [Crawling](#crawling), [Information Retrieval](#information-retrieval-ir).
- **References:** [Google: indexing](https://developers.google.com/search/docs/fundamentals/how-search-works#indexing).

### robots.txt

- **German term:** robots.txt; Regeln für automatisierte Clients.
- **Quick definition:** A file at a service's `/robots.txt` location expressing crawler access rules under the Robots Exclusion Protocol.
- **Explanation:** It is not authentication or a universal removal-from-index mechanism. Different product tokens and user-triggered fetchers may have different documented policies.
- **Research relevance:** Record rules and the evaluated client's purpose; training restrictions do not automatically restrict search access.
- **Related terms:** [Crawling](#crawling), [OAI-SearchBot](#oai-searchbot), [Google-Extended](#google-extended).
- **References:** [RFC 9309](https://www.rfc-editor.org/rfc/rfc9309.html).

### XML Sitemap

- **German term:** XML-Sitemap.
- **Quick definition:** An XML document listing URLs and optional metadata according to the Sitemap protocol.
- **Explanation:** It can help a supporting crawler discover URLs; it does not guarantee crawling, indexing, ranking, or citation.
- **Research relevance:** A discovery variable, separate from whether acquired page content is extractable.
- **Related terms:** [Crawling](#crawling), [Indexing](#indexing).
- **References:** [Sitemap protocol](https://www.sitemaps.org/protocol.html).

## Content Acquisition and Discovery

### Content Acquisition

- **German term:** Inhaltsbeschaffung.
- **Quick definition:** Project umbrella term for obtaining content to process, index, retrieve, or supply to a model.
- **Explanation:** Paths include search-index crawling, training collection, live retrieval, direct user-requested access, APIs, uploads, and connected sources. Discovery identifies candidate resources; acquisition obtains their content.
- **Research relevance:** Declare the access path instead of assuming every AI system crawls the web in the same way.
- **Related terms:** [Crawling](#crawling), [Live Web Search](#live-web-search).
- **References:** [Google crawler/fetcher distinctions](https://developers.google.com/crawling/docs/crawlers-fetchers/overview-google-crawlers), [OpenAI bots](https://developers.openai.com/api/docs/bots).

### Live Web Search

- **German term:** Websuche zur Anfragezeit.
- **Quick definition:** Searching web-related sources while handling a user's request, rather than relying only on model parameters.
- **Explanation:** “Live” does not guarantee a fresh fetch of every page. Results may come from an existing index or an external search API; connected sources may provide non-public content.
- **Research relevance:** Record the product, function, date, and documented access route; do not infer private retrieval architecture.
- **Related terms:** [Content Acquisition](#content-acquisition), [RAG](#retrieval-augmented-generation-rag).
- **References:** [OpenAI: search and user-triggered access](https://developers.openai.com/api/docs/bots).

### llms.txt

- **German term:** llms.txt; vorgeschlagene Inhaltsübersicht für LLMs.
- **Quick definition:** A community proposal for a Markdown file providing context and links to content intended for LLM use.
- **Explanation:** It is not the Robots Exclusion Protocol, an access-control mechanism, or proof that a particular provider consumes it.
- **Research relevance:** A possible experimental variable, not an established GEO/AEO recommendation. No file is introduced by this glossary.
- **Related terms:** [robots.txt](#robotstxt), [Content Representation](#content-representation).
- **References:** [llms.txt proposal](https://llmstxt.org/) (proposal author's description, not independent efficacy evidence).

### OAI-SearchBot

- **German term:** Eigenname; OpenAI-Suchcrawler.
- **Quick definition:** OpenAI's documented crawler for surfacing websites in ChatGPT search results.
- **Explanation:** Its robots.txt control is independent of GPTBot. ChatGPT-User handles certain user-triggered visits and is a different agent.
- **Research relevance:** Search access must not be inferred from permission for model-training collection.
- **Related terms:** [GPTBot](#gptbot), [robots.txt](#robotstxt).
- **References:** [OpenAI bot documentation](https://developers.openai.com/api/docs/bots), checked 2026-11-04.

### GPTBot

- **German term:** Eigenname; OpenAI-Trainingscrawler.
- **Quick definition:** OpenAI's documented crawler collecting content that may be used to train its generative foundation models.
- **Explanation:** Its name does not make it the agent for ChatGPT search or user-requested page visits.
- **Research relevance:** A GPTBot visit is not evidence that a page was retrieved for a live answer.
- **Related terms:** [OAI-SearchBot](#oai-searchbot), [Content Acquisition](#content-acquisition).
- **References:** [OpenAI bot documentation](https://developers.openai.com/api/docs/bots), checked 2026-11-04.

### Google-Extended

- **German term:** Eigenname; Google-Produktsteuerungstoken.
- **Quick definition:** A robots.txt product token controlling specified uses of content crawled by Google, not a separate HTTP crawler user-agent.
- **Explanation:** Google documents controls for future Gemini model training and grounding in specified Gemini/Vertex AI products. It does not control Google Search inclusion or act as a Google Search ranking signal.
- **Research relevance:** Do not mistake a content-use control for a separate crawler or a universal Gemini access switch.
- **Related terms:** [robots.txt](#robotstxt), [Grounding](#grounding).
- **References:** [Google: Google-Extended](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers#google-extended), checked 2026-11-04.

### PerplexityBot

- **German term:** Eigenname; Perplexity-Suchcrawler.
- **Quick definition:** Perplexity's documented bot for surfacing and linking websites in its search results.
- **Explanation:** Perplexity states that it is not used to crawl for foundation-model training. Perplexity-User is the separate user-triggered access agent.
- **Research relevance:** Separate search crawling from answer-time visits; neither alone demonstrates citation quality.
- **Related terms:** [Live Web Search](#live-web-search), [Source Attribution](#source-attribution).
- **References:** [Perplexity crawler documentation](https://docs.perplexity.ai/docs/resources/perplexity-crawlers), checked 2026-11-04.

### ClaudeBot

- **German term:** Eigenname; Anthropic-Trainingscrawler.
- **Quick definition:** Anthropic's documented bot collecting web content that could contribute to model training.
- **Explanation:** Claude-SearchBot supports search; Claude-User supports user-initiated access. These purposes are not interchangeable with ClaudeBot's.
- **Research relevance:** A training-crawler observation does not identify how Claude obtains sources for a particular response.
- **Related terms:** [GPTBot](#gptbot), [Content Acquisition](#content-acquisition).
- **References:** [Anthropic crawler documentation](https://privacy.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler), checked 2026-11-04.

## Content Extraction and Representation

### Content Extraction

- **German term:** Inhaltsextraktion.
- **Quick definition:** Identifying and obtaining relevant content or information from a source document.
- **Explanation:** In this project, distinguish main-content extraction from extracting specific facts or entities. Navigation, advertisements, and article text may need different treatment.
- **Research relevance:** [EXP-001](/en/05-experiments/exp-001/) needs an explicit target and reference annotation before measuring extraction completeness.
- **Related terms:** [HTML Parsing](#html-parsing), [HTML Cleaning](#html-cleaning), [Chunking](#chunking).
- **References:** [Mozilla Readability](https://github.com/mozilla/readability) (main-content extraction implementation).

### HTML Parsing

- **German term:** HTML-Parsing; syntaktische Analyse von HTML.
- **Quick definition:** Processing HTML input into a document structure according to a parser's rules.
- **Explanation:** Parsing establishes nodes and relationships; it does not by itself identify the important content. Browser parsing is specified; other tools may differ.
- **Research relevance:** Record parser and version because recovered structure can differ from the source markup.
- **Related terms:** [DOM](#dom-document-object-model), [Content Extraction](#content-extraction).
- **References:** [WHATWG: parsing HTML documents](https://html.spec.whatwg.org/multipage/parsing.html).

### HTML Cleaning

- **German term:** HTML-Bereinigung.
- **Quick definition:** A context-dependent preprocessing step that removes or normalizes selected HTML material.
- **Explanation:** It may remove scripts or redundant markup. Boilerplate removal targets repeated or non-main content; security sanitization addresses unsafe content. Neither is automatically equivalent to cleaning for retrieval.
- **Research relevance:** Declare exact transformations and inspect lost structure; cleaning is not chunking.
- **Related terms:** [Content Extraction](#content-extraction), [HTML-to-Text Conversion](#html-to-text-conversion).
- **References:** [Mozilla Readability](https://github.com/mozilla/readability) (one concrete processing implementation, not a universal definition).

### HTML-to-Text Conversion

- **German term:** HTML-zu-Text-Konvertierung.
- **Quick definition:** Transforming HTML content into text without the original HTML markup.
- **Explanation:** Plain text may retain words and line breaks but does not intrinsically encode HTML element roles, link targets, or table relationships. What is lost depends on the converter.
- **Research relevance:** Compare equivalent information and inspect intermediate output before attributing retrieval differences to source structure.
- **Related terms:** [Content Representation](#content-representation), [HTML Cleaning](#html-cleaning).
- **References:** [Mozilla Readability output API](https://github.com/mozilla/readability#api-reference) distinguishes HTML `content` from `textContent`.

### Content Representation

- **German term:** Inhaltsrepräsentation.
- **Quick definition:** The form in which a processing stage stores or receives content.
- **Explanation:** Examples include source HTML, a DOM after rendering, cleaned HTML, plain text, Markdown, and structured records. Markdown encodes text structure but is not a DOM or a lossless HTML replacement.
- **Research relevance:** Record representations between stages; the source website and the model's actual input may differ substantially.
- **Related terms:** [DOM](#dom-document-object-model), [HTML-to-Text Conversion](#html-to-text-conversion), [RAG](#retrieval-augmented-generation-rag).
- **References:** [WHATWG HTML parsing](https://html.spec.whatwg.org/multipage/parsing.html), [CommonMark specification](https://spec.commonmark.org/).

### Structured Data

- **German term:** Strukturierte Daten.
- **Quick definition:** Data organized using explicit fields, types, or relationships; in web research, often machine-readable descriptions of entities.
- **Explanation:** Schema.org supplies a vocabulary. JSON-LD is a Linked Data serialization format; it is not the vocabulary itself. Structured data need not be JSON-LD.
- **Research relevance:** [EXP-003](/en/05-experiments/exp-003/) separates format changes from adding facts. Valid markup alone does not establish answer or citation benefits.
- **Related terms:** [Semantic HTML](#semantic-html), [Content Representation](#content-representation).
- **References:** [Schema.org introduction](https://schema.org/docs/gs.html), [W3C JSON-LD 1.1](https://www.w3.org/TR/json-ld11/).

## Information Retrieval and RAG

### Information Retrieval (IR)

- **German term:** Informationsretrieval; Informationsabruf.
- **Quick definition:** Finding items relevant to an information need within a collection.
- **Explanation:** A retriever selects candidates, often with scores. Retrieval does not itself generate an answer or guarantee that selected material supports one.
- **Research relevance:** Evaluate retrieval separately from generation in [EXP-004](/en/05-experiments/exp-004/).
- **Related terms:** [Vector Search](#vector-search), [Reranking](#reranking).
- **References:** [Microsoft: retrieval in RAG](https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview) (implementation context).

### Retrieval-Augmented Generation (RAG)

- **German term:** Abrufgestützte Generierung.
- **Quick definition:** A system pattern that supplies retrieved information to a generative model when producing an output.
- **Explanation:** A knowledge base supplies retrievable material; ingestion prepares it. RAG does not require the public web, a particular vector database, or retraining the generator for every document update.
- **Research relevance:** Distinguish the original research model from broader contemporary usage; see [RAG literature themes](/en/02-literature/rag-retrieval/).
- **Related terms:** [Information Retrieval](#information-retrieval-ir), [Grounding](#grounding).
- **References:** [Lewis et al.: original RAG paper](https://arxiv.org/abs/2005.11401), [Microsoft: RAG overview](https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview).

### Chunking

- **German term:** Aufteilung in Dokumentabschnitte.
- **Quick definition:** Dividing content into units for processing, indexing, retrieval, or model input.
- **Explanation:** Fixed-size chunking uses a size rule, often tokens or characters. Semantic chunking uses meaning-related boundaries; implementations vary. Neither is synonymous with HTML cleaning.
- **Research relevance:** Record unit, size, overlap, and boundary rules in [EXP-004](/en/05-experiments/exp-004/).
- **Related terms:** [Structure-Aware Chunking](#structure-aware-chunking), [Context Window](#context-window).
- **References:** [Microsoft: chunking strategies](https://learn.microsoft.com/en-us/azure/search/vector-search-how-to-chunk-documents).

### Structure-Aware Chunking

- **German term:** Strukturberücksichtigende Segmentierung.
- **Quick definition:** Chunking that uses document organization, such as headings, sections, lists, or tables, to guide boundaries or retained context.
- **Explanation:** HTML-aware chunking is a specific variant using HTML structure. It differs from relying only on fixed length or embedding-based semantic similarity.
- **Research relevance:** [H-005](/en/04-hypotheses/h-005/) remains untested; a parser may discard structure before chunking begins.
- **Related terms:** [Heading Hierarchy](#heading-hierarchy), [Chunking](#chunking).
- **References:** [Microsoft: content-based chunking](https://learn.microsoft.com/en-us/azure/search/vector-search-how-to-chunk-documents).

### Embeddings

- **German term:** Vektoreinbettungen.
- **Quick definition:** Learned numerical vector representations of items such as text passages or queries.
- **Explanation:** A model maps items into a vector space. Similarity reflects the model and task, not a universal measure of meaning or truth.
- **Research relevance:** Keep the embedding model and input representation fixed when testing frontend structure.
- **Related terms:** [Vector Search](#vector-search), [Chunking](#chunking).
- **References:** [Google: embeddings](https://developers.google.com/machine-learning/crash-course/embeddings).

### Vector Search

- **German term:** Vektorsuche.
- **Quick definition:** Retrieving items by comparing vector representations using a specified similarity or distance measure.
- **Explanation:** Search may be exact or approximate. Similar vectors are not necessarily factually correct or sufficient to answer a question.
- **Research relevance:** Record metric, index, filtering, and retrieved count before comparing retrieval quality.
- **Related terms:** [Embeddings](#embeddings), [Hybrid Search](#hybrid-search).
- **References:** [Microsoft: vector search](https://learn.microsoft.com/en-us/azure/search/vector-search-overview).

### Hybrid Search

- **German term:** Hybride Suche.
- **Quick definition:** Here, retrieval combining lexical/text search with vector search.
- **Explanation:** Implementations differ in candidate generation, weighting, and fusion. “Hybrid” is not a single standardized algorithm.
- **Research relevance:** Declare the combination; changing retrieval configuration can confound a markup comparison.
- **Related terms:** [Vector Search](#vector-search), [Reranking](#reranking).
- **References:** [Microsoft: hybrid search](https://learn.microsoft.com/en-us/azure/search/hybrid-search-overview) (one implementation).

### Reranking

- **German term:** Neusortierung von Suchkandidaten.
- **Quick definition:** Applying an additional scoring or ordering stage to candidates already retrieved.
- **Explanation:** It differs from initial retrieval. “Retrieval refinement” is broader and can also mean filtering or selecting material; define its exact operation in each paper.
- **Research relevance:** A changed final order may result from the reranker, not the frontend representation.
- **Related terms:** [Information Retrieval](#information-retrieval-ir), [Hybrid Search](#hybrid-search).
- **References:** [Microsoft: semantic reranking](https://learn.microsoft.com/en-us/azure/search/semantic-search-overview) (one implementation).

### Context Window

- **German term:** Kontextfenster.
- **Quick definition:** The model-specific token capacity available for processing context and, where applicable, generated output.
- **Explanation:** Tokens are tokenizer-defined units, not necessarily words. Context construction selects and arranges instructions, history, and retrieved material within the applicable limits.
- **Research relevance:** Record model limits, truncation, ordering, and input/output budget; fitting content does not prove that the model uses it correctly.
- **Related terms:** [Chunking](#chunking), [LLM](#large-language-model-llm).
- **References:** [Google ML glossary](https://developers.google.com/machine-learning/glossary#context-window).

## GEO and AEO

### Generative Engine Optimization (GEO)

- **German term:** Optimierung für generative Suchsysteme.
- **Quick definition:** Research and practitioner terminology for interventions intended to affect content visibility or use in generative engine responses.
- **Explanation:** Visibility can mean mentions, attribution, citations, or other declared measures. The term does not establish that an intervention works.
- **Research relevance:** Define the measured system and outcome; [GEO literature questions](/en/02-literature/geo-aeo/) separate terminology from mechanism.
- **Related terms:** [AEO](#answer-engine-optimization-aeo), [Source Attribution](#source-attribution).
- **References:** [GEO: Generative Engine Optimization](https://arxiv.org/abs/2311.09735) (one research formulation, not universal frontend guidance).

### Answer Engine Optimization (AEO)

- **German term:** Optimierung für antwortorientierte Systeme.
- **Quick definition:** A context-dependent umbrella term for practices intended to make content available or usable in answer-oriented systems.
- **Explanation:** There is no single technical mechanism implied here. Extracting a direct answer, retrieving a passage, and generating a response are distinct tasks.
- **Research relevance:** This is the project's working definition; operationalize answer quality, extraction, or visibility rather than measuring “AEO” as one score.
- **Related terms:** [GEO](#generative-engine-optimization-geo), [Content Extraction](#content-extraction).
- **References:** [Project GEO/AEO review questions](/en/02-literature/geo-aeo/) (context for this working definition, not an external standard).

### Source Attribution

- **German term:** Quellenzuordnung.
- **Quick definition:** Indicating the source to which content or a claim is attributed.
- **Explanation:** A citation is one way to express attribution. Citation behavior describes when and how systems cite; citation accuracy asks whether a cited source actually supports the claim.
- **Research relevance:** Keep source presence separate from support and answer correctness; see [evaluation](/en/02-literature/evaluation/) and the [evidence matrix](/en/06-evidence/matrix/).
- **Related terms:** [GEO](#generative-engine-optimization-geo), [Grounding](#grounding).
- **References:** [Project citation-accuracy definition](/en/01-foundation/terminology/), [RAG paper: provenance motivation](https://arxiv.org/abs/2005.11401).

## AI and Language Models

### Large Language Model (LLM)

- **German term:** Großes Sprachmodell.
- **Quick definition:** A large learned language model that represents patterns in token sequences; generative LLMs use these patterns to produce text.
- **Explanation:** Training changes model parameters; inference applies a trained model to an input. Supplying a webpage in a prompt is not by itself model training.
- **Research relevance:** Separate information in model parameters from information obtained through retrieval; do not equate every foundation model with a text-only LLM.
- **Related terms:** [RAG](#retrieval-augmented-generation-rag), [Context Window](#context-window).
- **References:** [Google: introduction to LLMs](https://developers.google.com/machine-learning/crash-course/llm).

### Grounding

- **German term:** Verankerung in Quellen oder Daten.
- **Quick definition:** In this project, connecting generated responses to supplied or retrieved information rather than relying solely on model parameters.
- **Explanation:** Usage varies by provider. Grounding does not guarantee factual correctness, absence of hallucination, or accurate citations; hallucination commonly denotes plausible but unsupported or incorrect generated content.
- **Research relevance:** Assess source support separately from retrieval success and answer quality.
- **Related terms:** [RAG](#retrieval-augmented-generation-rag), [Source Attribution](#source-attribution).
- **References:** [Google ML glossary: grounding](https://developers.google.com/machine-learning/glossary#grounding).

## Further reference material

Use existing material rather than parallel registers: [paper-analysis template](/en/03-notes/paper-notes/), [journal template](/en/03-notes/templates/journal-entry/), [guideline template](/en/07-guidelines/templates/guideline/), [technical notes](/en/03-notes/technical-notes/), and the [literature register](/en/02-literature/). A separate templates hub, technical-reference catalogue, and bibliography can be added under Reference when substantive content warrants them.
