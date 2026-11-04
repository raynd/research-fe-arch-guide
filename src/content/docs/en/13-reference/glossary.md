---
title: Glossary / Quick Knowledge
description: Technical terminology for HTML semantics, document structure, accessibility, content acquisition, extraction, and RAG.
---

This reference explains terminology; it is **not evidence that an implementation improves GEO/AEO**. English terms remain the entry names in both languages. Provider descriptions summarize public documentation checked on **2026-11-04**, not independently observed behavior or undisclosed internals.

## How to use and extend

The initial vocabulary prioritizes source availability, representation, retrieval, and answer provenance. Each entry uses the same format: **English term** as the heading, **German term**, **quick definition**, **explanation**, **research relevance**, **related terms**, and **references**. Its enclosing section supplies the **category**. German equivalents are explanatory, not new standardized terminology. Keep term headings identical across locales so term fragments remain aligned.

HTML entries additionally give **semantic meaning**, **accessibility relevance**, and small **HTML examples** where useful. Examples illustrate markup, not measured research outcomes. Element and role definitions follow WHATWG and W3C; sources for this extension were checked on **2026-11-04**.

Use the page contents or site search to find a term. Add entries here before creating separate pages; split only when content becomes too large to scan. Definitions of ambiguous terms are explicitly scoped to this project. Provider documentation and implementation examples are not universal specifications.

Detailed research: [literature review](/en/02-literature/), [architecture observations](/en/03-notes/architecture-observations/), [technical notes](/en/03-notes/technical-notes/), [experiments](/en/05-experiments/), [evidence](/en/06-evidence/), and [guidelines](/en/07-guidelines/).

## HTML Semantics & Document Structure

Start with [document structure](#html-document-structure), [element comparison](#semantic-element-comparison), [headings](#heading-hierarchy), [table semantics](#html-table-semantics-example), or [accessibility](#accessibility-tree). The entries below share this category; related concepts are linked rather than defined twice.

### Semantic HTML

- **German term:** Semantisches HTML.
- **Quick definition:** HTML that uses elements and attributes according to their defined meaning, rather than only their visual appearance.
- **Explanation:** A heading element identifies a heading; large styled text alone does not.
- **Semantic meaning:** Element types and attributes express content purpose and relationships, independently of CSS layout.
- **Accessibility relevance:** Native elements supply semantics that browsers can expose through accessibility APIs; not every semantic element is a landmark.
- **Research relevance:** Defines the markup contrast in [H-001](/en/04-hypotheses/h-001/); extraction benefits remain to be tested.
- **Related terms:** [DOM](#dom-document-object-model), [Heading Hierarchy](#heading-hierarchy).
- **References:** [WHATWG: semantics](https://html.spec.whatwg.org/multipage/dom.html#semantics-2), [MDN explanation](https://developer.mozilla.org/en-US/docs/Glossary/Semantics).

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
- **Semantic meaning:** Ranks organize topics and subtopics; a nested `section` does not automatically make an `h1` an `h2`.
- **Accessibility relevance:** Screen readers can navigate heading lists. Choose ranks for the content hierarchy, not a simplistic SEO formula.
- **Research relevance:** A potential source-structure variable in [EXP-004](/en/05-experiments/exp-004/), not proof of a downstream chunk boundary.
- **Related terms:** [Semantic HTML](#semantic-html), [Structure-Aware Chunking](#structure-aware-chunking).
- **References:** [WHATWG headings](https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements), [WAI heading guidance](https://www.w3.org/WAI/tutorials/page-structure/headings/).

### HTML Document Structure

- **German term:** HTML-Dokumentstruktur.
- **Quick definition:** The organization of an HTML document into elements, text, metadata, and their relationships.
- **Explanation:** `html` contains `head` metadata and `body` content; document structure includes nested content, not just page regions.
- **HTML example:** `<body><main><h1>Research</h1><p>Scope of the review.</p></main></body>` (body fragment).
- **Semantic meaning:** Parent/child relationships and element meanings form a document, while CSS determines presentation.
- **Accessibility relevance:** Logical source order, headings, and landmarks support navigation; DOM structure and accessibility structure are not identical.
- **Research relevance:** Establish which source or processed representation is being evaluated.
- **Related terms:** [DOM](#dom-document-object-model), [Document Outline](#document-outline), [HTML Parsing](#html-parsing).
- **References:** [WHATWG document element](https://html.spec.whatwg.org/multipage/semantics.html#the-html-element).

### Document Outline

- **German term:** Dokumentgliederung.
- **Quick definition:** A hierarchical view of a document's topics and subtopics expressed through headings and section relationships.
- **Explanation:** Do not rely on historical automatic HTML outlining proposals to recalculate ranks from nested sections; use explicit heading levels.
- **Accessibility relevance:** A screen reader's heading list is not the whole DOM or a list of all landmarks.
- **Research relevance:** Distinguish an intended outline from what a parser or assistive technology actually exposes.
- **Related terms:** [Heading Hierarchy](#heading-hierarchy), [Heading Levels (H1–H6)](#heading-levels-h1h6).
- **References:** [WHATWG headings and outlines](https://html.spec.whatwg.org/multipage/sections.html#headings-and-outlines-2), [WAI headings](https://www.w3.org/WAI/tutorials/page-structure/headings/).

### HTML Landmark

- **German term:** HTML-Landmark; navigierbarer Seitenbereich.
- **Quick definition:** A significant page region exposed with landmark semantics, often through native HTML.
- **Explanation:** A landmark is an accessibility navigation concept, not a synonym for every sectioning element or visible rectangle.
- **Semantic meaning:** It identifies the purpose of a region, such as primary content or navigation.
- **Accessibility relevance:** Screen readers can offer region navigation; labels distinguish multiple landmarks of the same kind.
- **Research relevance:** A landmark mapping does not prove that an extractor or AI provider uses that mapping.
- **Related terms:** [Landmark Roles](#landmark-roles), [Section](#section), [Accessibility Tree](#accessibility-tree).
- **References:** [WAI APG: landmark regions](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/).

### Main Landmark

- **German term:** Hauptinhalts-Landmark.
- **Quick definition:** The landmark with the `main` role identifying a document's primary content.
- **Explanation:** Prefer the native `main` element. A page normally exposes one main landmark; separate embedded documents have their own context.
- **Accessibility relevance:** Provides a target for landmark navigation and can be the destination of a skip link.
- **Research relevance:** Main-content extraction may use different rules; a main landmark is not a guaranteed extraction result.
- **Related terms:** [Main](#main), [HTML Landmark](#html-landmark), [Content Extraction](#content-extraction).
- **References:** [WAI APG landmarks](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/), [WAI-ARIA main](https://www.w3.org/TR/wai-aria/#main).

### Header

- **German term:** Einleitender Bereich.
- **Quick definition:** The `header` element represents introductory content for its nearest relevant section or the page.
- **Explanation:** It may contain a heading, introduction, or navigation. An article header is not automatically the site's header.
- **HTML example:** `<article><header><h2>Review protocol</h2><p>Draft</p></header><p>Protocol text.</p></article>`.
- **Semantic meaning:** Contextual introduction, not necessarily content visually fixed at the top.
- **Accessibility relevance:** Page-level headers can map to `banner`; a header descended from `article`, `aside`, `main`, `nav`, or `section` does not have that implicit landmark role. ARIA context can also affect mappings.
- **Research relevance:** Preserve ancestor context before classifying a header as page boilerplate.
- **Related terms:** [Footer](#footer), [Article](#article), [Implicit ARIA Role](#implicit-aria-role).
- **References:** [WHATWG header](https://html.spec.whatwg.org/multipage/sections.html#the-header-element), [ARIA in HTML](https://www.w3.org/TR/html-aria/#el-header).

### Footer

- **German term:** Abschlussbereich; Fußbereich.
- **Quick definition:** The `footer` element represents footer information for its nearest relevant section or the page.
- **Explanation:** It may identify authorship or related documents; it need not appear at the visual bottom of a viewport.
- **HTML example:** `<article><h2>Review protocol</h2><p>Protocol text.</p><footer><p>Author: Research team</p></footer></article>`.
- **Accessibility relevance:** Page-level footers can map to `contentinfo`; descendants of `article`, `aside`, `main`, `nav`, or `section` do not implicitly do so. Check the full mapping context.
- **Research relevance:** A document footer can contain relevant provenance and must not automatically be discarded.
- **Related terms:** [Header](#header), [Source Attribution](#source-attribution).
- **References:** [WHATWG footer](https://html.spec.whatwg.org/multipage/sections.html#the-footer-element), [ARIA in HTML](https://www.w3.org/TR/html-aria/#el-footer).

### Main

- **German term:** Hauptinhalt; `main`-Element.
- **Quick definition:** The `main` element represents the dominant content of the document's body.
- **Explanation:** Use it for content central to the page, rather than repeated site-wide navigation. HTML permits no more than one `main` without the `hidden` attribute.
- **HTML example:** `<main><h1>Literature review</h1><p>Review scope.</p></main>`.
- **Accessibility relevance:** Provides the implicit `main` landmark without redundant `role="main"`.
- **Research relevance:** Encodes an author-declared content boundary, not a universal extractor contract.
- **Related terms:** [Main Landmark](#main-landmark), [Nav](#nav), [Content Extraction](#content-extraction).
- **References:** [WHATWG main](https://html.spec.whatwg.org/multipage/grouping-content.html#the-main-element).

### Nav

- **German term:** Navigationsbereich.
- **Quick definition:** The `nav` element represents a section with navigation links to pages or parts of a page.
- **Explanation:** Use for major navigation blocks, not necessarily every collection of links.
- **HTML example:** `<nav aria-label="Research"><a href="/en/02-literature/">Literature</a></nav>`.
- **Accessibility relevance:** Implicit `navigation` landmark; distinguish different navigation sets with meaningful names.
- **Research relevance:** Navigation is a structural signal, not automatically irrelevant text for every query.
- **Related terms:** [Link](#link), [Accessible Name](#accessible-name).
- **References:** [WHATWG nav](https://html.spec.whatwg.org/multipage/sections.html#the-nav-element), [WAI landmarks](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/).

### Aside

- **German term:** Ergänzender, indirekt verwandter Inhalt.
- **Quick definition:** The `aside` element represents content tangentially related to surrounding content that can be considered separately.
- **Explanation:** A related-reading box may qualify; a visually positioned sidebar is not an aside merely because of its position.
- **HTML example:** `<aside><h2>Related terminology</h2><p>See the glossary for definitions.</p></aside>`.
- **Accessibility relevance:** Has implicit `complementary` semantics; decide whether that region genuinely helps navigation.
- **Research relevance:** Ancillary material may contain relevant facts; excluding it requires a declared extraction target.
- **Related terms:** [Section](#section), [HTML Landmark](#html-landmark).
- **References:** [WHATWG aside](https://html.spec.whatwg.org/multipage/sections.html#the-aside-element), [ARIA in HTML](https://www.w3.org/TR/html-aria/#el-aside).

### Section

- **German term:** Thematischer Abschnitt.
- **Quick definition:** The `section` element represents a thematic grouping of content, typically with a heading.
- **Explanation:** Use it when the group has a meaningful topic, not solely to attach CSS. A heading does not automatically provide the section's accessible name.
- **HTML example:** `<section><h2>Limitations</h2><p>The scope is restricted.</p></section>`.
- **Accessibility relevance:** A section becomes a `region` landmark when accessibly named, for example with `aria-labelledby`; do not name every section just to create landmarks.
- **Research relevance:** Section boundaries may be retained or lost by parsing and chunking.
- **Related terms:** [Section Heading](#section-heading), [Div](#div), [Accessible Name](#accessible-name).
- **References:** [WHATWG section](https://html.spec.whatwg.org/multipage/sections.html#the-section-element), [ARIA in HTML](https://www.w3.org/TR/html-aria/#el-section).

### Article

- **German term:** Eigenständiger Beitrag.
- **Quick definition:** The `article` element represents a complete, self-contained composition that is independently distributable or reusable in principle.
- **Explanation:** Examples include a paper summary, post, or comment; not every visually boxed card is an article.
- **HTML example:** `<article><h2>Paper appraisal</h2><p>Scope and limitations of a source.</p></article>`.
- **Accessibility relevance:** Its native article semantics are document structure, not an ARIA landmark role.
- **Research relevance:** Marks an intended content unit, not necessarily a downstream retrieval unit.
- **Related terms:** [Section](#section), [Header](#header), [Structure-Aware Chunking](#structure-aware-chunking).
- **References:** [WHATWG article](https://html.spec.whatwg.org/multipage/sections.html#the-article-element).

### Div

- **German term:** Generisches Block-Container-Element.
- **Quick definition:** The `div` element groups content without assigning a special content meaning.
- **Explanation:** Appropriate for styling or scripting when no more specific element matches the purpose.
- **HTML example:** `<div class="columns"><p>First item.</p><p>Second item.</p></div>`.
- **Accessibility relevance:** Does not inherently create a heading, landmark, or control; generic containers may be omitted or flattened in accessibility APIs.
- **Research relevance:** Generic markup can preserve text and nesting even without domain-specific element semantics.
- **Related terms:** [Generic Container](#generic-container), [Semantic HTML](#semantic-html).
- **References:** [WHATWG div](https://html.spec.whatwg.org/multipage/grouping-content.html#the-div-element).

### Generic Container

- **German term:** Generischer Container.
- **Quick definition:** A grouping without a specific subject-matter or interaction meaning, commonly represented by `div` or `span`.
- **Explanation:** A layout-only wrapper is valid; adding an ARIA role changes exposed semantics only within applicable authoring rules, not the underlying behavior.
- **Accessibility relevance:** Do not recreate native headings or controls with generic containers unnecessarily.
- **Research relevance:** Distinguish generic wrappers from absence of all document structure.
- **Related terms:** [Div](#div), [Explicit ARIA Role](#explicit-aria-role).
- **References:** [WHATWG div](https://html.spec.whatwg.org/multipage/grouping-content.html#the-div-element), [ARIA in HTML](https://www.w3.org/TR/html-aria/).

### Landmark Roles

- **German term:** Landmark-Rollen.
- **Quick definition:** Roles identifying significant navigable page regions; this glossary uses the WAI-ARIA meaning.
- **Explanation:** Examples include `banner`, `main`, `navigation`, `complementary`, `contentinfo`, `search`, `form`, and `region`; naming requirements and context vary.
- **Accessibility relevance:** Prefer suitable native elements and avoid redundant roles or excessive regions. A visual column has no automatic landmark role.
- **Research relevance:** HTML structure and accessibility mappings are distinct possible inputs to a processing system.
- **Related terms:** [ARIA Landmark Roles](#aria-landmark-roles), [HTML Landmark](#html-landmark).
- **References:** [WAI-ARIA landmark roles](https://www.w3.org/TR/wai-aria/#landmark_roles), [WAI APG landmarks](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/).

### Heading Levels (H1–H6)

- **German term:** Überschriftenebenen H1–H6.
- **Quick definition:** The six native heading ranks represented by `h1` through `h6`, with `h1` the highest.
- **Explanation:** Use explicit ranks reflecting topic nesting; CSS size does not determine the level.
- **HTML example:** `<h1>Research</h1><h2>Method</h2><h3>Sampling</h3>`.
- **Accessibility relevance:** Native headings expose a heading role and level, enabling level-based navigation.
- **Research relevance:** Record ranks separately from DOM depth and displayed prominence.
- **Related terms:** [Heading Order](#heading-order), [Heading Semantics](#heading-semantics).
- **References:** [WHATWG headings](https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements).

### Heading Order

- **German term:** Überschriftenreihenfolge.
- **Quick definition:** The sequence of heading ranks and topics encountered in document reading order.
- **Explanation:** Avoid skipping ranks when opening subsections; returning from `h4` to `h2` can correctly close subsections.
- **Accessibility relevance:** Logical progression supports navigation; this is not a blanket rule that every numerical jump is invalid HTML.
- **Research relevance:** Compare source order with visual order and processed output, not merely a heading-count score.
- **Related terms:** [Heading Hierarchy](#heading-hierarchy), [Document Outline](#document-outline).
- **References:** [WAI headings](https://www.w3.org/WAI/tutorials/page-structure/headings/).

### Section Heading

- **German term:** Abschnittsüberschrift.
- **Quick definition:** A heading identifying the topic of a section or passage.
- **Explanation:** It need not be inside an explicit `section`. Conversely, a section wrapper does not replace a heading.
- **HTML example:** `<section><h2>Research questions</h2><p>Questions under review.</p></section>`.
- **Accessibility relevance:** Heading navigation and landmark naming are separate mechanisms.
- **Research relevance:** A parser may retain the heading text but lose its association with following passages.
- **Related terms:** [Section](#section), [Accessible Name](#accessible-name).
- **References:** [WHATWG section](https://html.spec.whatwg.org/multipage/sections.html#the-section-element), [WAI headings](https://www.w3.org/WAI/tutorials/page-structure/headings/).

### Page Title

- **German term:** Seitentitel.
- **Quick definition:** The document title supplied by `title` in `head`, distinct from a visible main heading.
- **Explanation:** Browsers use it to identify tabs or windows. A descriptive page title and a descriptive `h1` serve related but different purposes.
- **HTML example:** `<title>Literature review | Research workspace</title>` (inside `head`).
- **Accessibility relevance:** Helps users identify and distinguish pages; it is not an `h1` in heading navigation.
- **Research relevance:** Preserve title metadata separately when evaluating extracted body content.
- **Related terms:** [HTML Document Structure](#html-document-structure), [Heading Semantics](#heading-semantics).
- **References:** [WHATWG title](https://html.spec.whatwg.org/multipage/semantics.html#the-title-element), [WAI page titles](https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html).

### Heading Semantics

- **German term:** Überschriftensemantik.
- **Quick definition:** The meaning that content is a heading with a defined rank, rather than simply emphasized text.
- **Explanation:** A large bold `div` is not a native heading. `role="heading"` requires an appropriate `aria-level` and should not replace available native markup without reason.
- **Accessibility relevance:** Font styling alone does not provide the role and level exposed by native headings.
- **Research relevance:** Isolate semantics from typography when comparing content-equivalent variants.
- **Related terms:** [Heading Levels (H1–H6)](#heading-levels-h1h6), [Semantic Role](#semantic-role).
- **References:** [WHATWG headings](https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements), [WAI-ARIA heading](https://www.w3.org/TR/wai-aria/#heading).

### Accessible Name

- **German term:** Zugänglicher Name.
- **Quick definition:** The text identifying an accessible object, computed from applicable native and ARIA naming mechanisms.
- **Explanation:** Sources can include visible content, a native label, or `aria-labelledby`; naming is role-dependent. A heading inside a region does not name it without an applicable association.
- **HTML example:** `<nav aria-labelledby="topics"><h2 id="topics">Topics</h2><a href="/en/02-literature/">Literature</a></nav>`.
- **Accessibility relevance:** Prefer visible/native labels; do not add `aria-label` to generic elements whose role prohibits naming.
- **Research relevance:** Visible text, DOM attributes, and computed names may differ; specify which is inspected.
- **Related terms:** [Accessible Description](#accessible-description), [Section](#section).
- **References:** [Accessible Name and Description Computation 1.1](https://www.w3.org/TR/accname-1.1/), [APG naming guidance](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/).

### HTML Table

- **German term:** HTML-Datentabelle.
- **Quick definition:** A `table` represents data with relationships in a two-dimensional grid of rows and columns.
- **Explanation:** Use for genuine tabular data, not visual layout; use CSS for page columns. See the [complete example](#html-table-semantics-example).
- **Semantic meaning:** Cells and headers express relationships, not just positions.
- **Accessibility relevance:** Native table markup supports cell navigation and associated headers.
- **Research relevance:** Evaluate retention of associations, not only extraction of cell text.
- **Related terms:** [Table Headers and Scope](#table-headers-and-scope), [Table Caption](#table-caption).
- **References:** [WHATWG table](https://html.spec.whatwg.org/multipage/tables.html#the-table-element), [WAI tables](https://www.w3.org/WAI/tutorials/tables/).

### Table Caption

- **German term:** Tabellenbeschriftung.
- **Quick definition:** A `caption` identifies the topic of its containing table.
- **Explanation:** Place it as the table's first element child; it is not a column header or a substitute for complex-table instructions.
- **HTML example:** `<table><caption>Protocol stages</caption><tbody><tr><td>Planning</td></tr></tbody></table>`.
- **Accessibility relevance:** Can provide the table's accessible name and orient users before cell navigation.
- **Research relevance:** Keep the caption associated with the table rather than an unrelated paragraph.
- **Related terms:** [HTML Table](#html-table), [Accessible Name](#accessible-name).
- **References:** [WHATWG caption](https://html.spec.whatwg.org/multipage/tables.html#the-caption-element), [WAI captions](https://www.w3.org/WAI/tutorials/tables/caption-summary/).

### Table Header

- **German term:** Tabellenkopf; mehrdeutiger Begriff.
- **Quick definition:** Often the `thead` row group, but sometimes used informally for an individual header cell.
- **Explanation:** Here distinguish the header row group (`thead`) from `th` header cells. `thead` can contain several rows and does not turn `td` into headers.
- **Accessibility relevance:** Row grouping does not replace correct header-cell associations.
- **Research relevance:** State whether an extraction preserves a row group or individual header relationships.
- **Related terms:** [Header Cell](#header-cell), [Table Body](#table-body).
- **References:** [WHATWG thead](https://html.spec.whatwg.org/multipage/tables.html#the-thead-element).

### Table Body

- **German term:** Tabellenkörper.
- **Quick definition:** The `tbody` element groups rows forming a table's body.
- **Explanation:** A table can have multiple bodies; `tbody` can contain both `th` row headers and `td` data cells.
- **Accessibility relevance:** Provides row-group structure but does not automatically name each data value.
- **Research relevance:** Parsing may insert a `tbody` omitted in source HTML; inspect the actual parsed tree.
- **Related terms:** [Table Row](#table-row), [Table Header](#table-header).
- **References:** [WHATWG tbody](https://html.spec.whatwg.org/multipage/tables.html#the-tbody-element).

### Table Row

- **German term:** Tabellenzeile.
- **Quick definition:** A `tr` groups cells into a row of a table.
- **Explanation:** Cells can span rows or columns, so DOM child position alone is not always the final grid coordinate.
- **Accessibility relevance:** Row structure helps users navigate cells in context.
- **Research relevance:** Preserve row boundaries when serializing records.
- **Related terms:** [Table Cell](#table-cell), [Table Body](#table-body).
- **References:** [WHATWG tr](https://html.spec.whatwg.org/multipage/tables.html#the-tr-element).

### Table Cell

- **German term:** Tabellenzelle.
- **Quick definition:** A unit of tabular content represented by `th` or `td`.
- **Explanation:** “Cell” alone does not identify whether it labels other cells or contains data.
- **Accessibility relevance:** Header/data distinctions and associations supply context to cell navigation.
- **Research relevance:** A detached cell value may be ambiguous without row and column information.
- **Related terms:** [Header Cell](#header-cell), [Data Cell](#data-cell).
- **References:** [WHATWG table model](https://html.spec.whatwg.org/multipage/tables.html#table-processing-model).

### Header Cell

- **German term:** Kopfzelle.
- **Quick definition:** A `th` cell representing a header for a group of table cells.
- **Explanation:** It can label a row, column, or group; it is not restricted to the first row.
- **HTML example:** `<th scope="row">Planning</th>` (inside a table row).
- **Accessibility relevance:** Correct association enables screen readers to announce headers while moving through data.
- **Research relevance:** A bold `td` is not semantically equivalent to an associated `th`.
- **Related terms:** [Table Headers and Scope](#table-headers-and-scope), [Data Cell](#data-cell).
- **References:** [WHATWG th](https://html.spec.whatwg.org/multipage/tables.html#the-th-element).

### Data Cell

- **German term:** Datenzelle.
- **Quick definition:** A `td` represents a data cell in a table.
- **Explanation:** Its meaning may depend on several headers, units, and a caption.
- **HTML example:** `<td>Proposed</td>` (inside a table row).
- **Accessibility relevance:** A data cell does not become a header just because it is styled prominently.
- **Research relevance:** Carry labels and units when converting cells to standalone text.
- **Related terms:** [Header Cell](#header-cell), [Table Caption](#table-caption).
- **References:** [WHATWG td](https://html.spec.whatwg.org/multipage/tables.html#the-td-element).

### Table Headers and Scope

- **German term:** Tabellenkopfzuordnungen und Geltungsbereich.
- **Quick definition:** Associations connecting data cells to relevant `th` cells; `scope` specifies a header's row, column, or group scope.
- **Explanation:** `scope="row"` and `scope="col"` cover simple cases. Complex tables can require explicit `id`/`headers` associations or simplification.
- **Accessibility relevance:** Header associations preserve context when a screen reader presents one cell at a time; `thead` alone is insufficient.
- **Research relevance:** Test whether cleaning or conversion preserves these relationships; no universal AI interpretation is assumed.
- **Related terms:** [HTML Table](#html-table), [Header Cell](#header-cell), [HTML-to-Text Conversion](#html-to-text-conversion).
- **References:** [WHATWG header associations](https://html.spec.whatwg.org/multipage/tables.html#header-and-data-cell-semantics), [WAI tables](https://www.w3.org/WAI/tutorials/tables/).

### Ordered List

- **German term:** Geordnete Liste.
- **Quick definition:** An `ol` contains `li` items whose order affects meaning.
- **Explanation:** Suitable for procedural steps or rankings, not just to obtain numeric styling.
- **HTML example:** `<ol><li>Parse HTML.</li><li>Inspect the result.</li></ol>`.
- **Accessibility relevance:** Exposes list/item structure; visual numbering alone is not equivalent.
- **Research relevance:** Preserve ordering and nesting when converting procedures.
- **Related terms:** [Unordered List](#unordered-list), [Description List](#description-list).
- **References:** [WHATWG ol](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ol-element).

### Unordered List

- **German term:** Ungeordnete Liste.
- **Quick definition:** A `ul` contains `li` items whose ordering does not materially change meaning.
- **Explanation:** Suitable for a set of related references or features.
- **HTML example:** `<ul><li>Headings</li><li>Tables</li></ul>`.
- **Accessibility relevance:** Supports list navigation and item counts; verify semantics when heavily restyling lists.
- **Research relevance:** Retain membership and nesting rather than merging all items into one sentence.
- **Related terms:** [Ordered List](#ordered-list), [Semantic HTML](#semantic-html).
- **References:** [WHATWG ul](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element).

### Description List

- **German term:** Beschreibungsliste; Zuordnungsliste.
- **Quick definition:** A `dl` represents groups of names (`dt`) and values or descriptions (`dd`).
- **Explanation:** It can describe metadata or terms; groups may have multiple names or descriptions. It is not limited to dictionary definitions.
- **HTML example:** `<dl><dt>Paper ID</dt><dd>PAPER-001</dd></dl>`.
- **Accessibility relevance:** Encodes name/value relationships; announcement details vary by browser and assistive technology.
- **Research relevance:** Preserve which description belongs to which name.
- **Related terms:** [Content Representation](#content-representation), [Unordered List](#unordered-list).
- **References:** [WHATWG dl](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element).

### Figure

- **German term:** Eigenständige Abbildung oder Inhaltseinheit.
- **Quick definition:** A `figure` groups self-contained content, optionally captioned, typically referenced as a unit from the main flow.
- **Explanation:** It can contain code, a diagram, a table, or a quotation; not every image needs a figure.
- **Accessibility relevance:** A caption helps identify the group but does not replace an image's appropriate text alternative.
- **Research relevance:** Preserve grouping between material and its explanation.
- **Related terms:** [Figcaption](#figcaption), [HTML Table](#html-table).
- **References:** [WHATWG figure](https://html.spec.whatwg.org/multipage/grouping-content.html#the-figure-element).

### Figcaption

- **German term:** Abbildungsbeschriftung.
- **Quick definition:** A `figcaption` is the caption or legend for its containing `figure`.
- **Explanation:** Use at most one, as the first or last child of the figure.
- **HTML example:** `<figure><pre><code>&lt;main&gt;</code></pre><figcaption>A main-content element.</figcaption></figure>`.
- **Accessibility relevance:** Can name the figure; detailed image alternatives remain a separate concern.
- **Research relevance:** Avoid detaching captions from referenced content during extraction.
- **Related terms:** [Figure](#figure), [Table Caption](#table-caption).
- **References:** [WHATWG figcaption](https://html.spec.whatwg.org/multipage/grouping-content.html#the-figcaption-element).

### Blockquote

- **German term:** Blockzitat.
- **Quick definition:** A `blockquote` represents content quoted from another source.
- **Explanation:** Use it for quotation, not indentation. An optional `cite` attribute supplies a source URL; visible attribution is separate and belongs outside the quoted content.
- **Accessibility relevance:** Encodes quoted content, but a `cite` attribute alone is not a reliably user-visible source link.
- **Research relevance:** Preserve the distinction between quoted claims and the document author's own assertions.
- **Related terms:** [Source Attribution](#source-attribution), [Paragraph](#paragraph).
- **References:** [WHATWG blockquote](https://html.spec.whatwg.org/multipage/grouping-content.html#the-blockquote-element).

### Paragraph

- **German term:** Absatz.
- **Quick definition:** The `p` element represents a paragraph.
- **Explanation:** It groups phrasing content; it is not a wrapper for arbitrary block structures such as tables or sections.
- **HTML example:** `<p>The review has a defined scope.</p>`.
- **Accessibility relevance:** Meaningful paragraphs support reading; repeated line breaks are not the same structural markup.
- **Research relevance:** Paragraph boundaries can affect segmentation but need not equal final chunks.
- **Related terms:** [Chunking](#chunking), [Section](#section).
- **References:** [WHATWG p](https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element).

### Link

- **German term:** Verknüpfung; Hyperlink.
- **Quick definition:** A connection from one resource or location to another; here primarily a navigable HTML hyperlink.
- **Explanation:** A text hyperlink usually uses `a` with `href`. The metadata `link` element in `head` is a different element; neither should be confused with a button action.
- **Accessibility relevance:** Descriptive link text communicates destination or purpose independently of color.
- **Research relevance:** Anchor text and destination are distinct information that conversion may separate.
- **Related terms:** [Anchor Element](#anchor-element), [Source Attribution](#source-attribution).
- **References:** [WHATWG links](https://html.spec.whatwg.org/multipage/links.html#links).

### Anchor Element

- **German term:** Ankerelement.
- **Quick definition:** The `a` element represents a hyperlink when it has `href`; without it, it is a placeholder for a possible link.
- **Explanation:** An `id` on any suitable element can be a fragment target; a target does not need an empty named anchor.
- **HTML example:** `<a href="/en/03-notes/paper-notes/htmlrag/">Read PAPER-001</a>`.
- **Accessibility relevance:** `a` with `href` provides native link behavior; `role="link"` alone does not supply navigation.
- **Research relevance:** Preserve the resolved URL and its relation to the anchor text when relevant.
- **Related terms:** [Link](#link), [Native HTML Semantics](#native-html-semantics).
- **References:** [WHATWG a](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element).

### Accessibility Tree

- **German term:** Barrierefreiheitsbaum; Accessibility Tree.
- **Quick definition:** A browser-exposed representation of accessible objects, including their roles, names, states, and relationships.
- **Explanation:** It is derived from document semantics, rendering, ARIA, and mapping rules, not a copy of every DOM node. Hidden or generic nodes may be excluded or flattened.
- **Accessibility relevance:** Assistive technologies consume accessibility APIs; actual exposure must be checked in the target browser/technology.
- **Research relevance:** Do not assume an HTML extractor or AI provider reads this tree rather than HTML or DOM.
- **Related terms:** [DOM](#dom-document-object-model), [Accessible Name](#accessible-name), [Accessibility Semantics](#accessibility-semantics).
- **References:** [HTML accessibility mappings](https://www.w3.org/TR/html-aam-1.0/), [WAI-ARIA accessibility tree](https://www.w3.org/TR/wai-aria/#dfn-accessibility-tree).

### Accessible Description

- **German term:** Zugängliche Beschreibung.
- **Quick definition:** Supplementary text explaining an accessible object beyond its identifying name.
- **Explanation:** For example, `aria-describedby` can associate visible instructions with a control; it does not replace its label.
- **HTML example:** `<label for="query">Query</label><p id="query-hint">Use a research term.</p><input id="query" aria-describedby="query-hint">`.
- **Accessibility relevance:** Keeps identification and extra instructions distinct; do not pack all guidance into the name.
- **Research relevance:** Description associations can disappear even if both text strings survive conversion.
- **Related terms:** [Accessible Name](#accessible-name), [ARIA](#aria).
- **References:** [Accessible Name and Description Computation 1.1](https://www.w3.org/TR/accname-1.1/).

### ARIA

- **German term:** Accessible Rich Internet Applications; ARIA.
- **Quick definition:** WAI-ARIA specifies roles, states, and properties that supplement accessibility semantics of host languages such as HTML.
- **Explanation:** Prefer equivalent native elements. ARIA does not add keyboard handling, navigation, focusability, or native behavior by itself.
- **HTML example:** `<button type="button" aria-describedby="save-help">Save</button><p id="save-help">Keeps a local draft.</p>` (markup example, no save implementation).
- **Accessibility relevance:** Incorrect or conflicting ARIA can misrepresent an interface; role and behavior must agree.
- **Research relevance:** ARIA attributes, visible facts, and downstream use are separate variables.
- **Related terms:** [Native HTML Semantics](#native-html-semantics), [Explicit ARIA Role](#explicit-aria-role).
- **References:** [WAI-ARIA](https://www.w3.org/TR/wai-aria/), [APG: read me first](https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/).

### ARIA Landmark Roles

- **German term:** ARIA-Landmark-Rollen.
- **Quick definition:** The WAI-ARIA category formalizing navigable page regions described under [Landmark Roles](#landmark-roles).
- **Explanation:** This is the specification-specific name for the same role family, not a second set of HTML elements.
- **Accessibility relevance:** `article` and `heading` roles are not landmark roles; named `region` and `form` landmarks require suitable names.
- **Research relevance:** Keep the HTML element, computed role, and processing-system interpretation distinct.
- **Related terms:** [HTML Landmark](#html-landmark), [Implicit ARIA Role](#implicit-aria-role).
- **References:** [WAI-ARIA landmark roles](https://www.w3.org/TR/wai-aria/#landmark_roles).

### Native HTML Semantics

- **German term:** Native HTML-Semantik.
- **Quick definition:** Meanings and behaviors supplied by HTML elements and attributes without recreating them through ARIA.
- **Explanation:** `button` supplies native activation behavior; `a href` supplies hyperlink behavior. Native document elements likewise communicate structure.
- **Accessibility relevance:** Generally prefer native semantics over generic elements with roles; supplement only where needed and permitted.
- **Research relevance:** Separate the effect of element choice from added ARIA, styling, and interaction changes.
- **Related terms:** [Semantic HTML](#semantic-html), [ARIA](#aria).
- **References:** [WHATWG semantics](https://html.spec.whatwg.org/multipage/dom.html#semantics-2), [ARIA in HTML](https://www.w3.org/TR/html-aria/).

### Semantic Role

- **German term:** Semantische Rolle.
- **Quick definition:** A classification communicating an element's purpose; in accessibility, a role such as heading, link, or navigation.
- **Explanation:** HTML content meaning is broader than an accessibility role. A role is not a CSS class or visual position.
- **Accessibility relevance:** Role, name, state, and relationships describe different aspects of an accessible object.
- **Research relevance:** Avoid treating HTML tags and exposed roles as interchangeable measurements.
- **Related terms:** [Implicit ARIA Role](#implicit-aria-role), [Explicit ARIA Role](#explicit-aria-role).
- **References:** [WAI-ARIA roles](https://www.w3.org/TR/wai-aria/#roles), [ARIA in HTML](https://www.w3.org/TR/html-aria/).

### Implicit ARIA Role

- **German term:** Implizite ARIA-Rolle.
- **Quick definition:** A default accessibility role supplied by an element's native semantics and context, without an explicit `role` attribute.
- **Explanation:** `nav` implies `navigation`; `a` implies `link` only with `href`; header/footer mappings depend on ancestors.
- **Accessibility relevance:** Avoid redundant explicit roles and inspect context-sensitive mappings.
- **Research relevance:** Tag counts alone do not fully identify exposed roles.
- **Related terms:** [Header](#header), [Explicit ARIA Role](#explicit-aria-role).
- **References:** [ARIA in HTML role table](https://www.w3.org/TR/html-aria/#docconformance).

### Explicit ARIA Role

- **German term:** Explizite ARIA-Rolle.
- **Quick definition:** A role declared using the `role` attribute, subject to the host language's allowed-role rules.
- **Explanation:** A permitted override changes exposed semantics, not automatically behavior. Invalid or conflicting roles may not have the intended effect.
- **Accessibility relevance:** Do not replace native semantics casually; custom interactive roles require corresponding keyboard and interaction behavior.
- **Research relevance:** Record explicit roles separately from element types and observed mappings.
- **Related terms:** [Implicit ARIA Role](#implicit-aria-role), [ARIA](#aria).
- **References:** [ARIA in HTML](https://www.w3.org/TR/html-aria/), [WAI-ARIA roles](https://www.w3.org/TR/wai-aria/#roles).

### Accessibility Semantics

- **German term:** Barrierefreiheitssemantik.
- **Quick definition:** Programmatically exposed meaning, including roles, names, states, properties, and relationships used by assistive technologies.
- **Explanation:** Native HTML and valid ARIA contribute; CSS appearance alone does not determine these semantics. Semantics alone also do not ensure complete accessibility.
- **Accessibility relevance:** Correct relationships, operability, focus, and actual assistive-technology behavior must work together.
- **Research relevance:** Established accessibility mappings do not establish GEO/AEO effects or provider use of an accessibility tree.
- **Related terms:** [Accessibility Tree](#accessibility-tree), [Native HTML Semantics](#native-html-semantics).
- **References:** [WAI-ARIA](https://www.w3.org/TR/wai-aria/), [HTML accessibility mappings](https://www.w3.org/TR/html-aam-1.0/).

## Examples and Research Context

### Semantic element comparison

Choose meaning before layout. A generic `div` is appropriate when a wrapper exists only for styling or scripting and no more specific meaning applies.

| Element   | Semantic purpose and appropriate use                | Accessibility distinction                                                |
| --------- | --------------------------------------------------- | ------------------------------------------------------------------------ |
| `main`    | Dominant document content                           | Implicit `main` landmark                                                 |
| `header`  | Introduction for a page or contextual section       | `banner` only in the appropriate context                                 |
| `footer`  | Footer information for a page or contextual section | `contentinfo` only in the appropriate context                            |
| `nav`     | Section of navigation links                         | Implicit `navigation` landmark                                           |
| `aside`   | Tangential, separately understandable content       | Implicit `complementary` semantics, not a visual sidebar rule            |
| `section` | Thematic content grouping, typically headed         | Named sections can be `region` landmarks; not every section needs naming |
| `article` | Self-contained, independently reusable composition  | Article structure, not a landmark role                                   |
| `div`     | Generic grouping with no special meaning            | No inherent landmark or heading semantics                                |

Sources: [WHATWG sections](https://html.spec.whatwg.org/multipage/sections.html), [grouping content](https://html.spec.whatwg.org/multipage/grouping-content.html), and [ARIA in HTML](https://www.w3.org/TR/html-aria/). Screen-reader navigation follows exposed semantics, not whether CSS places a region at the top, side, or bottom.

### HTML table semantics example

The following is **illustrative reference data, not experimental results**:

```html
<table>
  <caption>Representation examples and retained relationships</caption>
  <thead>
    <tr>
      <th scope="col">Representation</th>
      <th scope="col">Example relationship</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">HTML table</th>
      <td>Header associated with a data cell</td>
    </tr>
    <tr>
      <th scope="row">Labeled text</th>
      <td>Relationship written as an explicit label</td>
    </tr>
  </tbody>
</table>
```

`caption` provides topic context and can name the table. `thead` and `tbody` group rows; they do not themselves make cells headers. `tr` groups cells, `th` identifies headers, and `td` holds data. Here `scope="col"` associates column headers with their columns, and `scope="row"` associates each representation label with its row's data.

These relationships enable screen readers to announce relevant headers during cell navigation. For complex multi-level tables, use appropriate groups and, when needed, explicit `id`/`headers` associations, or simplify the table. Do not use data-table markup for purely visual layout.

An extractor may retain the grid and header associations, or flatten it into ambiguous text. The string “HTML table Header associated with a data cell” loses the explicit row/column model unless the converter expresses it another way. Neither valid markup nor this example proves that every AI system preserves or understands tables.

Sources: [WHATWG tables](https://html.spec.whatwg.org/multipage/tables.html) and [WAI tables tutorial](https://www.w3.org/WAI/tutorials/tables/).

### From HTML semantics to retrieved knowledge

Keep five observations separate:

1. **Original HTML:** author-encoded elements, attributes, and relationships.
2. **Rendered DOM:** the parsed and possibly script-modified node tree, not the original source or the accessibility tree.
3. **Cleaned HTML:** whatever structure survives the declared cleaning policy; removed attributes or wrappers can alter relationships.
4. **Converted text:** remaining words and any deliberately serialized labels; heading, table, and link associations are not automatically retained.
5. **Retrieval input:** the representation actually indexed, chunked, embedded, selected, or placed in model context.

[HTML Parsing](#html-parsing), [HTML Cleaning](#html-cleaning), [Content Extraction](#content-extraction), [HTML-to-Text Conversion](#html-to-text-conversion), and [Structure-Aware Chunking](#structure-aware-chunking) are different operations. Semantic elements can supply signals, but whether a downstream system retains and uses them is an empirical question.

[PAPER-001 — HtmlRAG](/en/03-notes/paper-notes/htmlrag/) studies representation and block-tree pruning in a specific RAG pipeline. It does not isolate a causal benefit of every semantic element or establish provider-specific ranking, visibility, or citation effects. See [HTML Content Processing](/en/02-literature/html-content-processing/), [HTML vs. Plain Text](/en/02-literature/html-vs-plain-text/), [Architecture Observations](/en/03-notes/architecture-observations/), and [Technical Notes](/en/03-notes/technical-notes/) for research context. No hypothesis or evidence level is changed by these definitions.

**Open research questions:** Which associations survive a particular cleaning and conversion policy? Does retaining them improve retrieval or answer quality with factual content held constant? Visibility and citation effects require separate evidence and cannot be inferred from element definitions.

## Frontend Architecture

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
