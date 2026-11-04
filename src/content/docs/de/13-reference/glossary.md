---
title: Glossar / Kompaktwissen
description: Vierzig zentrale Begriffe zu Frontend-Architektur, Inhaltsbeschaffung, Extraktion, Retrieval und generativen Antworten.
---

Diese Referenz erklärt Begriffe; sie ist **kein Beleg dafür, dass eine Implementierung GEO/AEO verbessert**. Die englischen Fachbegriffe bleiben in beiden Sprachen die Eintragsnamen. Anbieterbeschreibungen fassen öffentliche Dokumentation zusammen, geprüft am **2026-11-04**; sie beschreiben weder unabhängig beobachtetes Verhalten noch unbekannte interne Abläufe.

## Nutzung und Erweiterung

Das Startvokabular priorisiert Inhaltsverfügbarkeit, Repräsentation, Retrieval und Antwortprovenienz. Alle Einträge folgen demselben Format: **englischer Fachbegriff** als Überschrift, **deutscher Begriff**, **Kurzdefinition**, **Erklärung**, **Forschungsrelevanz**, **verwandte Begriffe** und **Referenzen**. Der umgebende Abschnitt legt die **Kategorie** fest. Deutsche Entsprechungen dienen der Erklärung und sind keine neu eingeführten Standards. Identische Begriffsüberschriften halten die Sprungmarken beider Sprachversionen konsistent.

Begriffe lassen sich über das Seiteninhaltsverzeichnis oder die Suche finden. Neue Einträge zunächst hier ergänzen; erst aufteilen, wenn die Seite zu unübersichtlich wird. Mehrdeutige Begriffe werden ausdrücklich für dieses Projekt eingegrenzt. Anbieterdokumentation und Implementierungsbeispiele sind keine universellen Spezifikationen.

Vertiefung: [Literaturrecherche](/de/02-literature/), [Architekturbeobachtungen](/de/03-notes/architecture-observations/), [technische Notizen](/de/03-notes/technical-notes/), [Experimente](/de/05-experiments/), [Evidenz](/de/06-evidence/) und [Leitlinien](/de/07-guidelines/).

## Frontend-Architektur

### Semantic HTML

- **Deutscher Begriff:** Semantisches HTML.
- **Kurzdefinition:** HTML, das Elemente und Attribute entsprechend ihrer definierten Bedeutung statt nur nach ihrer visuellen Darstellung einsetzt.
- **Erklärung:** Ein Überschriftenelement kennzeichnet eine Überschrift; groß formatierter Text allein tut dies nicht.
- **Forschungsrelevanz:** Definiert den Markup-Kontrast in [H-001](/de/04-hypotheses/h-001/); Vorteile für die Extraktion müssen noch untersucht werden.
- **Verwandte Begriffe:** [DOM](#dom-document-object-model), [Heading Hierarchy](#heading-hierarchy).
- **Referenzen:** [MDN: Semantik in HTML](https://developer.mozilla.org/en-US/docs/Glossary/Semantics).

### DOM (Document Object Model)

- **Deutscher Begriff:** Dokumentobjektmodell.
- **Kurzdefinition:** Dokumentmodell und API, die ein Dokument als Baum aus Knoten darstellen, darunter Elemente, Text und Kommentare.
- **Erklärung:** Der DOM Tree ist die Knotenhierarchie, nicht die ursprüngliche HTML-Zeichenfolge. Browserskripte können ihn nach dem Parsing verändern; auch Parser außerhalb des Browsers können DOMs erzeugen.
- **Forschungsrelevanz:** [H-002](/de/04-hypotheses/h-002/) untersucht Hierarchien; festhalten, ob Quell-HTML oder der DOM nach Skriptausführung betrachtet wird.
- **Verwandte Begriffe:** [HTML Parsing](#html-parsing), [Content Representation](#content-representation).
- **Referenzen:** [MDN: DOM](https://developer.mozilla.org/en-US/docs/Glossary/DOM).

### Heading Hierarchy

- **Deutscher Begriff:** Überschriftenhierarchie.
- **Kurzdefinition:** Gliederung von Überschriften nach Rang, in HTML durch `h1`–`h6` ausgedrückt.
- **Erklärung:** Der Rang beschreibt Abschnittsbeziehungen, nicht die Schriftgröße. Er ist nicht mit der DOM-Verschachtelungstiefe gleichzusetzen.
- **Forschungsrelevanz:** Mögliche Quellstrukturvariable in [EXP-004](/de/05-experiments/exp-004/), kein Nachweis einer späteren Chunk-Grenze.
- **Verwandte Begriffe:** [Semantic HTML](#semantic-html), [Structure-Aware Chunking](#structure-aware-chunking).
- **Referenzen:** [MDN: Überschriftenelemente](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements).

### CSR (Client-Side Rendering)

- **Deutscher Begriff:** Clientseitiges Rendering.
- **Kurzdefinition:** Erzeugen oder wesentliches Ergänzen von Seiteninhalten durch JavaScript auf dem Client.
- **Erklärung:** Eine Antwort kann zunächst nur ein Gerüst enthalten; relevante Inhalte erscheinen nach Skriptausführung. CSR und SSR können kombiniert werden.
- **Forschungsrelevanz:** [EXP-002](/de/05-experiments/exp-002/) trennt die ursprüngliche Antwort vom später gerenderten Inhalt; Crawlerfähigkeiten sind systemspezifisch zu messen.
- **Verwandte Begriffe:** [SSR](#ssr-server-side-rendering), [Hydration](#hydration).
- **Referenzen:** [MDN: CSR](https://developer.mozilla.org/en-US/docs/Glossary/CSR).

### SSR (Server-Side Rendering)

- **Deutscher Begriff:** Serverseitiges Rendering.
- **Kurzdefinition:** In den Rendering-Vergleichen dieses Projekts: Erzeugung von HTML auf dem Server für eine Anfrage vor der Auslieferung.
- **Erklärung:** Weiter gefasste Verwendungen schließen teilweise Prerendering ein. Hier wird anfragebezogenes SSR von buildbezogenem SSG getrennt; gecachte Antworten sind gesondert zu dokumentieren.
- **Forschungsrelevanz:** Definiert eine Auslieferungsbedingung in [H-003](/de/04-hypotheses/h-003/), keine Garantie für Indexierung oder Zitierung.
- **Verwandte Begriffe:** [CSR](#csr-client-side-rendering), [SSG](#ssg-static-site-generation).
- **Referenzen:** [MDN: SSR](https://developer.mozilla.org/en-US/docs/Glossary/SSR).

### SSG (Static Site Generation)

- **Deutscher Begriff:** Statische Seitengenerierung.
- **Kurzdefinition:** Erzeugen von Seitendateien vor den Anfragen, üblicherweise während eines Builds.
- **Erklärung:** SSG bezeichnet auch den „Static Site Generator“, also das erzeugende Werkzeug. Statische Auslieferung schließt spätere clientseitige Aktualisierungen nicht aus.
- **Forschungsrelevanz:** Der Workspace nutzt statische Generierung; [EXP-002](/de/05-experiments/exp-002/) schlägt einen kontrollierten Rendering-Vergleich vor.
- **Verwandte Begriffe:** [SSR](#ssr-server-side-rendering), [Progressive Enhancement](#progressive-enhancement).
- **Referenzen:** [MDN: SSG](https://developer.mozilla.org/en-US/docs/Glossary/SSG).

### Hydration

- **Deutscher Begriff:** Hydrierung; meist „Hydration“.
- **Kurzdefinition:** Verbinden clientseitiger Anwendungslogik mit zuvor erzeugtem HTML, um eine interaktive Anwendung daraus zu machen.
- **Erklärung:** Frameworkdetails unterscheiden sich; Hydration verwendet vorhandenes Markup und erzeugt nicht zwingend alle Ausgangsinhalte erst auf dem Client.
- **Forschungsrelevanz:** Verfügbarkeit vor der Hydration von Interaktionen oder Inhalten trennen, die diese voraussetzen.
- **Verwandte Begriffe:** [CSR](#csr-client-side-rendering), [SSR](#ssr-server-side-rendering).
- **Referenzen:** [React: hydrateRoot](https://react.dev/reference/react-dom/client/hydrateRoot) (Implementierungsbeispiel, keine frameworkunabhängige Spezifikation).

### Progressive Enhancement

- **Deutscher Begriff:** Progressive Verbesserung.
- **Kurzdefinition:** Gestaltungsansatz mit einer nutzbaren Basis und zusätzlichen Fähigkeiten, sofern diese unterstützt werden.
- **Erklärung:** Wesentliche Inhalte oder Aktionen sollen nicht ausschließlich von optionalen Erweiterungen abhängen; der Ansatz ist umfassender als eine Rendering-Strategie.
- **Forschungsrelevanz:** Hilft bei Tests von Basis- und erweitertem Inhalt, ohne automatische Retrieval-Vorteile vorauszusetzen.
- **Verwandte Begriffe:** [Hydration](#hydration), [Semantic HTML](#semantic-html).
- **Referenzen:** [MDN: Progressive Enhancement](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement).

## Web-Crawling und Indexierung

### Crawling

- **Deutscher Begriff:** Automatisiertes Abrufen von Webseiten.
- **Kurzdefinition:** Automatisierter Abruf von Webressourcen durch einen Crawler, häufig anhand zuvor entdeckter URLs.
- **Erklärung:** Ein Search Engine Crawler unterstützt Suchfunktionen; „AI Crawler“ ist ein Sammelbegriff für unterschiedliche Zwecke, etwa Training oder Suche. Rendering verarbeitet eine Seite zur Darstellung und kann Skripte ausführen; es ist nicht mit dem Abruf gleichzusetzen.
- **Forschungsrelevanz:** Ein erfolgreicher Abruf belegt weder Indexierung noch Verwendung in einer Antwort.
- **Verwandte Begriffe:** [Indexing](#indexing), [Content Acquisition](#content-acquisition), [CSR](#csr-client-side-rendering).
- **Referenzen:** [Google: Funktionsweise der Suche](https://developers.google.com/search/docs/fundamentals/how-search-works).

### Indexing

- **Deutscher Begriff:** Indexierung.
- **Kurzdefinition:** Verarbeitung von Inhalten zu einer geordneten Repräsentation, die spätere Suche unterstützt.
- **Erklärung:** Der Search Index ist diese durchsuchbare Datenstruktur, nicht die aktuelle Website. Ranking ordnet Kandidaten für eine Anfrage und ist ein eigener Vorgang.
- **Forschungsrelevanz:** Auffindbarkeit, Crawlbarkeit, Indexaufnahme, Retrieval und Ranking als getrennte Ergebnisse behandeln.
- **Verwandte Begriffe:** [Crawling](#crawling), [Information Retrieval](#information-retrieval-ir).
- **Referenzen:** [Google: Indexierung](https://developers.google.com/search/docs/fundamentals/how-search-works#indexing).

### robots.txt

- **Deutscher Begriff:** robots.txt; Regeln für automatisierte Clients.
- **Kurzdefinition:** Datei unter `/robots.txt` eines Dienstes, die Crawlerzugriffsregeln nach dem Robots Exclusion Protocol ausdrückt.
- **Erklärung:** Sie ist weder Authentifizierung noch ein universeller Mechanismus zur Indexentfernung. Für Produkttoken und nutzerinitiierte Abrufe können unterschiedliche dokumentierte Regeln gelten.
- **Forschungsrelevanz:** Regeln und Clientzweck festhalten; Trainingsbeschränkungen beschränken nicht automatisch Suchzugriffe.
- **Verwandte Begriffe:** [Crawling](#crawling), [OAI-SearchBot](#oai-searchbot), [Google-Extended](#google-extended).
- **Referenzen:** [RFC 9309](https://www.rfc-editor.org/rfc/rfc9309.html).

### XML Sitemap

- **Deutscher Begriff:** XML-Sitemap.
- **Kurzdefinition:** XML-Dokument mit URLs und optionalen Metadaten nach dem Sitemap-Protokoll.
- **Erklärung:** Kann unterstützenden Crawlern bei der URL-Entdeckung helfen; garantiert weder Crawling, Indexierung, Ranking noch Zitierung.
- **Forschungsrelevanz:** Discovery-Variable, getrennt von der Extrahierbarkeit abgerufener Seiteninhalte.
- **Verwandte Begriffe:** [Crawling](#crawling), [Indexing](#indexing).
- **Referenzen:** [Sitemap-Protokoll](https://www.sitemaps.org/protocol.html).

## Inhaltsbeschaffung und Discovery

### Content Acquisition

- **Deutscher Begriff:** Inhaltsbeschaffung.
- **Kurzdefinition:** Projektbezogener Oberbegriff für das Beschaffen von Inhalten zur Verarbeitung, Indexierung, zum Retrieval oder zur Modellversorgung.
- **Erklärung:** Wege sind Suchindex-Crawling, Trainingssammlung, Live-Retrieval, direkte nutzerinitiierte Zugriffe, APIs, Uploads und verbundene Quellen. Discovery identifiziert mögliche Ressourcen; Acquisition beschafft deren Inhalte.
- **Forschungsrelevanz:** Zugangsweg benennen, statt für alle KI-Systeme dasselbe Web-Crawling anzunehmen.
- **Verwandte Begriffe:** [Crawling](#crawling), [Live Web Search](#live-web-search).
- **Referenzen:** [Google: Crawler und Fetcher](https://developers.google.com/crawling/docs/crawlers-fetchers/overview-google-crawlers), [OpenAI-Bots](https://developers.openai.com/api/docs/bots).

### Live Web Search

- **Deutscher Begriff:** Websuche zur Anfragezeit.
- **Kurzdefinition:** Suche in webbezogenen Quellen während der Bearbeitung einer Nutzeranfrage, statt ausschließlich Modellparameter zu verwenden.
- **Erklärung:** „Live“ garantiert keinen neuen Abruf jeder Seite. Ergebnisse können aus einem bestehenden Index oder einer externen Such-API stammen; verbundene Quellen können nicht öffentliche Inhalte liefern.
- **Forschungsrelevanz:** Produkt, Funktion, Datum und dokumentierten Zugangsweg festhalten; keine private Retrieval-Architektur unterstellen.
- **Verwandte Begriffe:** [Content Acquisition](#content-acquisition), [RAG](#retrieval-augmented-generation-rag).
- **Referenzen:** [OpenAI: Suche und nutzerinitiierte Zugriffe](https://developers.openai.com/api/docs/bots).

### llms.txt

- **Deutscher Begriff:** llms.txt; vorgeschlagene Inhaltsübersicht für LLMs.
- **Kurzdefinition:** Community-Vorschlag für eine Markdown-Datei mit Kontext und Links zu Inhalten für die LLM-Nutzung.
- **Erklärung:** Weder Robots Exclusion Protocol noch Zugriffsschutz oder Nachweis, dass ein bestimmter Anbieter die Datei verarbeitet.
- **Forschungsrelevanz:** Mögliche experimentelle Variable, keine etablierte GEO/AEO-Empfehlung. Dieses Glossar führt keine solche Datei ein.
- **Verwandte Begriffe:** [robots.txt](#robotstxt), [Content Representation](#content-representation).
- **Referenzen:** [llms.txt-Vorschlag](https://llmstxt.org/) (Beschreibung des Vorschlagsautors, kein unabhängiger Wirksamkeitsnachweis).

### OAI-SearchBot

- **Deutscher Begriff:** Eigenname; OpenAI-Suchcrawler.
- **Kurzdefinition:** Von OpenAI dokumentierter Crawler, um Websites in ChatGPT-Suchergebnissen anzuzeigen.
- **Erklärung:** Seine robots.txt-Steuerung ist von GPTBot unabhängig. ChatGPT-User führt bestimmte nutzerinitiierte Besuche aus und ist ein anderer Agent.
- **Forschungsrelevanz:** Suchzugriff darf nicht aus einer Erlaubnis zur Trainingssammlung abgeleitet werden.
- **Verwandte Begriffe:** [GPTBot](#gptbot), [robots.txt](#robotstxt).
- **Referenzen:** [OpenAI-Botdokumentation](https://developers.openai.com/api/docs/bots), geprüft am 2026-11-04.

### GPTBot

- **Deutscher Begriff:** Eigenname; OpenAI-Trainingscrawler.
- **Kurzdefinition:** Von OpenAI dokumentierter Crawler für Inhalte, die zum Training generativer Foundation Models verwendet werden können.
- **Erklärung:** Der Name macht ihn nicht zum Agenten für ChatGPT-Suche oder nutzerinitiierte Seitenbesuche.
- **Forschungsrelevanz:** Ein GPTBot-Besuch belegt keinen Abruf einer Seite für eine Live-Antwort.
- **Verwandte Begriffe:** [OAI-SearchBot](#oai-searchbot), [Content Acquisition](#content-acquisition).
- **Referenzen:** [OpenAI-Botdokumentation](https://developers.openai.com/api/docs/bots), geprüft am 2026-11-04.

### Google-Extended

- **Deutscher Begriff:** Eigenname; Google-Produktsteuerungstoken.
- **Kurzdefinition:** robots.txt-Produkttoken zur Steuerung bestimmter Nutzungen von Google gecrawlter Inhalte, kein separater HTTP-Crawler-User-Agent.
- **Erklärung:** Google dokumentiert Steuerungen für künftiges Gemini-Modelltraining und Grounding in bestimmten Gemini-/Vertex-AI-Produkten. Das Token steuert weder die Aufnahme in Google Search noch dient es dort als Rankingsignal.
- **Forschungsrelevanz:** Eine Inhaltsnutzungssteuerung nicht mit einem eigenen Crawler oder universellen Gemini-Zugriffsschalter verwechseln.
- **Verwandte Begriffe:** [robots.txt](#robotstxt), [Grounding](#grounding).
- **Referenzen:** [Google: Google-Extended](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers#google-extended), geprüft am 2026-11-04.

### PerplexityBot

- **Deutscher Begriff:** Eigenname; Perplexity-Suchcrawler.
- **Kurzdefinition:** Von Perplexity dokumentierter Bot zur Anzeige und Verlinkung von Websites in seinen Suchergebnissen.
- **Erklärung:** Laut Perplexity crawlt er nicht für das Training von Foundation Models. Perplexity-User ist der gesonderte Agent für nutzerinitiierte Zugriffe.
- **Forschungsrelevanz:** Such-Crawling von Besuchen zur Antwortzeit trennen; beides allein belegt keine Zitierqualität.
- **Verwandte Begriffe:** [Live Web Search](#live-web-search), [Source Attribution](#source-attribution).
- **Referenzen:** [Perplexity-Crawlerdokumentation](https://docs.perplexity.ai/docs/resources/perplexity-crawlers), geprüft am 2026-11-04.

### ClaudeBot

- **Deutscher Begriff:** Eigenname; Anthropic-Trainingscrawler.
- **Kurzdefinition:** Von Anthropic dokumentierter Bot, der Webinhalte sammelt, die zum Modelltraining beitragen können.
- **Erklärung:** Claude-SearchBot unterstützt Suche; Claude-User unterstützt nutzerinitiierte Zugriffe. Diese Zwecke sind nicht mit dem von ClaudeBot austauschbar.
- **Forschungsrelevanz:** Eine Trainingscrawler-Beobachtung zeigt nicht, wie Claude Quellen für eine bestimmte Antwort beschafft.
- **Verwandte Begriffe:** [GPTBot](#gptbot), [Content Acquisition](#content-acquisition).
- **Referenzen:** [Anthropic-Crawlerdokumentation](https://privacy.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler), geprüft am 2026-11-04.

## Inhaltsextraktion und Repräsentation

### Content Extraction

- **Deutscher Begriff:** Inhaltsextraktion.
- **Kurzdefinition:** Identifizieren und Gewinnen relevanter Inhalte oder Informationen aus einem Quelldokument.
- **Erklärung:** Im Projekt wird Hauptinhaltsextraktion von der Extraktion einzelner Fakten oder Entitäten getrennt. Navigation, Werbung und Artikeltext können unterschiedliche Behandlung erfordern.
- **Forschungsrelevanz:** [EXP-001](/de/05-experiments/exp-001/) benötigt ein explizites Ziel und Referenzannotationen, bevor Extraktionsvollständigkeit messbar ist.
- **Verwandte Begriffe:** [HTML Parsing](#html-parsing), [HTML Cleaning](#html-cleaning), [Chunking](#chunking).
- **Referenzen:** [Mozilla Readability](https://github.com/mozilla/readability) (Implementierung zur Hauptinhaltsextraktion).

### HTML Parsing

- **Deutscher Begriff:** HTML-Parsing; syntaktische Analyse von HTML.
- **Kurzdefinition:** Verarbeitung von HTML-Eingaben zu einer Dokumentstruktur nach den Regeln eines Parsers.
- **Erklärung:** Parsing erzeugt Knoten und Beziehungen, identifiziert aber nicht allein die wichtigen Inhalte. Browser-Parsing ist spezifiziert; andere Werkzeuge können abweichen.
- **Forschungsrelevanz:** Parser und Version dokumentieren, da rekonstruierte Struktur vom Quell-Markup abweichen kann.
- **Verwandte Begriffe:** [DOM](#dom-document-object-model), [Content Extraction](#content-extraction).
- **Referenzen:** [WHATWG: Parsing von HTML-Dokumenten](https://html.spec.whatwg.org/multipage/parsing.html).

### HTML Cleaning

- **Deutscher Begriff:** HTML-Bereinigung.
- **Kurzdefinition:** Kontextabhängige Vorverarbeitung, die ausgewählte HTML-Bestandteile entfernt oder normalisiert.
- **Erklärung:** Beispielsweise werden Skripte oder redundantes Markup entfernt. Boilerplate Removal zielt auf wiederholte oder nicht zum Hauptinhalt gehörende Inhalte; Security Sanitization auf unsichere Inhalte. Beides ist nicht automatisch Bereinigung für Retrieval.
- **Forschungsrelevanz:** Transformationen benennen und Strukturverluste prüfen; Cleaning ist kein Chunking.
- **Verwandte Begriffe:** [Content Extraction](#content-extraction), [HTML-to-Text Conversion](#html-to-text-conversion).
- **Referenzen:** [Mozilla Readability](https://github.com/mozilla/readability) (konkrete Verarbeitungsimplementierung, keine universelle Definition).

### HTML-to-Text Conversion

- **Deutscher Begriff:** HTML-zu-Text-Konvertierung.
- **Kurzdefinition:** Umwandlung von HTML-Inhalten in Text ohne das ursprüngliche HTML-Markup.
- **Erklärung:** Plain Text kann Wörter und Zeilenumbrüche bewahren, kodiert aber nicht von sich aus HTML-Elementrollen, Linkziele oder Tabellenbeziehungen. Verluste hängen vom Konverter ab.
- **Forschungsrelevanz:** Informationsgleichheit und Zwischenausgaben prüfen, bevor Retrieval-Unterschiede der Quellstruktur zugeschrieben werden.
- **Verwandte Begriffe:** [Content Representation](#content-representation), [HTML Cleaning](#html-cleaning).
- **Referenzen:** [Mozilla Readability: Ausgabe-API](https://github.com/mozilla/readability#api-reference) unterscheidet HTML-`content` von `textContent`.

### Content Representation

- **Deutscher Begriff:** Inhaltsrepräsentation.
- **Kurzdefinition:** Form, in der eine Verarbeitungsstufe Inhalte speichert oder empfängt.
- **Erklärung:** Beispiele sind Quell-HTML, DOM nach Rendering, bereinigtes HTML, Plain Text, Markdown und strukturierte Datensätze. Markdown kodiert Textstruktur, ist aber weder DOM noch verlustloser HTML-Ersatz.
- **Forschungsrelevanz:** Repräsentationen zwischen Stufen festhalten; Quellwebsite und tatsächliche Modelleingabe können erheblich voneinander abweichen.
- **Verwandte Begriffe:** [DOM](#dom-document-object-model), [HTML-to-Text Conversion](#html-to-text-conversion), [RAG](#retrieval-augmented-generation-rag).
- **Referenzen:** [WHATWG HTML-Parsing](https://html.spec.whatwg.org/multipage/parsing.html), [CommonMark-Spezifikation](https://spec.commonmark.org/).

### Structured Data

- **Deutscher Begriff:** Strukturierte Daten.
- **Kurzdefinition:** Daten mit expliziten Feldern, Typen oder Beziehungen; in der Webforschung häufig maschinenlesbare Entitätsbeschreibungen.
- **Erklärung:** Schema.org stellt ein Vokabular bereit. JSON-LD ist ein Serialisierungsformat für Linked Data, nicht das Vokabular selbst. Strukturierte Daten müssen nicht in JSON-LD vorliegen.
- **Forschungsrelevanz:** [EXP-003](/de/05-experiments/exp-003/) trennt Formatänderungen von zusätzlichen Fakten. Valides Markup belegt allein keine Antwort- oder Zitiervorteile.
- **Verwandte Begriffe:** [Semantic HTML](#semantic-html), [Content Representation](#content-representation).
- **Referenzen:** [Schema.org-Einführung](https://schema.org/docs/gs.html), [W3C JSON-LD 1.1](https://www.w3.org/TR/json-ld11/).

## Information Retrieval und RAG

### Information Retrieval (IR)

- **Deutscher Begriff:** Informationsretrieval; Informationsabruf.
- **Kurzdefinition:** Finden von Einträgen in einer Sammlung, die für einen Informationsbedarf relevant sind.
- **Erklärung:** Ein Retriever wählt Kandidaten aus, häufig anhand von Scores. Retrieval erzeugt selbst keine Antwort und garantiert nicht, dass die Auswahl eine solche stützt.
- **Forschungsrelevanz:** Retrieval in [EXP-004](/de/05-experiments/exp-004/) getrennt von Generierung auswerten.
- **Verwandte Begriffe:** [Vector Search](#vector-search), [Reranking](#reranking).
- **Referenzen:** [Microsoft: Retrieval in RAG](https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview) (Implementierungskontext).

### Retrieval-Augmented Generation (RAG)

- **Deutscher Begriff:** Abrufgestützte Generierung.
- **Kurzdefinition:** Systemmuster, das einem generativen Modell abgerufene Informationen zur Erzeugung einer Ausgabe bereitstellt.
- **Erklärung:** Eine Knowledge Base liefert abrufbares Material; Ingestion bereitet es vor. RAG erfordert weder öffentliches Web noch eine bestimmte Vektordatenbank oder erneutes Generatortraining bei jeder Dokumentänderung.
- **Forschungsrelevanz:** Ursprüngliches Forschungsmodell von heutiger breiterer Verwendung unterscheiden; siehe [RAG-Literaturthemen](/de/02-literature/rag-retrieval/).
- **Verwandte Begriffe:** [Information Retrieval](#information-retrieval-ir), [Grounding](#grounding).
- **Referenzen:** [Lewis et al.: ursprüngliches RAG-Paper](https://arxiv.org/abs/2005.11401), [Microsoft: RAG-Übersicht](https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview).

### Chunking

- **Deutscher Begriff:** Aufteilung in Dokumentabschnitte.
- **Kurzdefinition:** Aufteilen von Inhalten in Einheiten zur Verarbeitung, Indexierung, zum Retrieval oder als Modelleingabe.
- **Erklärung:** Fixed-Size Chunking folgt einer Größenregel, oft in Tokens oder Zeichen. Semantic Chunking nutzt bedeutungsbezogene Grenzen; Implementierungen unterscheiden sich. Beides ist nicht gleichbedeutend mit HTML Cleaning.
- **Forschungsrelevanz:** Einheit, Größe, Überlappung und Grenzregeln in [EXP-004](/de/05-experiments/exp-004/) festhalten.
- **Verwandte Begriffe:** [Structure-Aware Chunking](#structure-aware-chunking), [Context Window](#context-window).
- **Referenzen:** [Microsoft: Chunking-Strategien](https://learn.microsoft.com/en-us/azure/search/vector-search-how-to-chunk-documents).

### Structure-Aware Chunking

- **Deutscher Begriff:** Strukturberücksichtigende Segmentierung.
- **Kurzdefinition:** Chunking, das Dokumentorganisation wie Überschriften, Abschnitte, Listen oder Tabellen für Grenzen oder erhaltenen Kontext berücksichtigt.
- **Erklärung:** HTML-Aware Chunking ist eine Variante mit HTML-Struktur. Der Ansatz unterscheidet sich von ausschließlich festen Längen oder embeddingbasierter semantischer Ähnlichkeit.
- **Forschungsrelevanz:** [H-005](/de/04-hypotheses/h-005/) ist ungetestet; ein Parser kann Struktur bereits vor dem Chunking verwerfen.
- **Verwandte Begriffe:** [Heading Hierarchy](#heading-hierarchy), [Chunking](#chunking).
- **Referenzen:** [Microsoft: inhaltsbezogenes Chunking](https://learn.microsoft.com/en-us/azure/search/vector-search-how-to-chunk-documents).

### Embeddings

- **Deutscher Begriff:** Vektoreinbettungen.
- **Kurzdefinition:** Erlernte numerische Vektorrepräsentationen von Objekten, etwa Textpassagen oder Anfragen.
- **Erklärung:** Ein Modell bildet Einträge in einen Vektorraum ab. Ähnlichkeit hängt von Modell und Aufgabe ab und ist kein universelles Maß für Bedeutung oder Wahrheit.
- **Forschungsrelevanz:** Embeddingmodell und Eingaberepräsentation beim Testen der Frontend-Struktur konstant halten.
- **Verwandte Begriffe:** [Vector Search](#vector-search), [Chunking](#chunking).
- **Referenzen:** [Google: Embeddings](https://developers.google.com/machine-learning/crash-course/embeddings).

### Vector Search

- **Deutscher Begriff:** Vektorsuche.
- **Kurzdefinition:** Abruf von Einträgen durch Vergleich ihrer Vektorrepräsentationen anhand eines festgelegten Ähnlichkeits- oder Distanzmaßes.
- **Erklärung:** Die Suche kann exakt oder approximativ sein. Ähnliche Vektoren sind nicht zwangsläufig faktisch korrekt oder für eine Antwort ausreichend.
- **Forschungsrelevanz:** Metrik, Index, Filterung und Trefferzahl vor dem Vergleich der Retrieval-Qualität dokumentieren.
- **Verwandte Begriffe:** [Embeddings](#embeddings), [Hybrid Search](#hybrid-search).
- **Referenzen:** [Microsoft: Vektorsuche](https://learn.microsoft.com/en-us/azure/search/vector-search-overview).

### Hybrid Search

- **Deutscher Begriff:** Hybride Suche.
- **Kurzdefinition:** Hier: Retrieval, das lexikalische beziehungsweise Textsuche mit Vektorsuche kombiniert.
- **Erklärung:** Kandidatenauswahl, Gewichtung und Zusammenführung unterscheiden sich je Implementierung. „Hybrid“ bezeichnet keinen einzelnen standardisierten Algorithmus.
- **Forschungsrelevanz:** Kombination offenlegen; veränderte Retrieval-Konfiguration kann einen Markup-Vergleich verfälschen.
- **Verwandte Begriffe:** [Vector Search](#vector-search), [Reranking](#reranking).
- **Referenzen:** [Microsoft: hybride Suche](https://learn.microsoft.com/en-us/azure/search/hybrid-search-overview) (eine Implementierung).

### Reranking

- **Deutscher Begriff:** Neusortierung von Suchkandidaten.
- **Kurzdefinition:** Zusätzliche Bewertung oder Sortierung bereits abgerufener Kandidaten.
- **Erklärung:** Unterscheidet sich vom ersten Retrieval. „Retrieval Refinement“ ist umfassender und kann auch Filtern oder Auswählen von Material meinen; den konkreten Vorgang je Paper bestimmen.
- **Forschungsrelevanz:** Eine andere Endreihenfolge kann vom Reranker statt von der Frontend-Repräsentation stammen.
- **Verwandte Begriffe:** [Information Retrieval](#information-retrieval-ir), [Hybrid Search](#hybrid-search).
- **Referenzen:** [Microsoft: semantisches Reranking](https://learn.microsoft.com/en-us/azure/search/semantic-search-overview) (eine Implementierung).

### Context Window

- **Deutscher Begriff:** Kontextfenster.
- **Kurzdefinition:** Modellspezifische Tokenkapazität für die Verarbeitung des Kontexts und gegebenenfalls für die erzeugte Ausgabe.
- **Erklärung:** Tokens sind vom Tokenizer bestimmte Einheiten, nicht unbedingt Wörter. Context Construction wählt Anweisungen, Verlauf und abgerufenes Material aus und ordnet sie innerhalb der jeweiligen Grenzen an.
- **Forschungsrelevanz:** Modellgrenzen, Kürzung, Reihenfolge und Ein-/Ausgabebudget dokumentieren; passende Länge belegt keine korrekte Nutzung durch das Modell.
- **Verwandte Begriffe:** [Chunking](#chunking), [LLM](#large-language-model-llm).
- **Referenzen:** [Google-ML-Glossar](https://developers.google.com/machine-learning/glossary#context-window).

## GEO und AEO

### Generative Engine Optimization (GEO)

- **Deutscher Begriff:** Optimierung für generative Suchsysteme.
- **Kurzdefinition:** Forschungs- und Praxisbegriff für Interventionen, die Sichtbarkeit oder Nutzung von Inhalten in Antworten generativer Systeme beeinflussen sollen.
- **Erklärung:** Sichtbarkeit kann Erwähnungen, Quellenzuordnung, Zitationen oder andere erklärte Maße meinen. Der Begriff belegt keine Wirksamkeit einer Intervention.
- **Forschungsrelevanz:** System und Ergebnis definieren; die [GEO-Literaturfragen](/de/02-literature/geo-aeo/) trennen Terminologie von Mechanismen.
- **Verwandte Begriffe:** [AEO](#answer-engine-optimization-aeo), [Source Attribution](#source-attribution).
- **Referenzen:** [GEO: Generative Engine Optimization](https://arxiv.org/abs/2311.09735) (eine Forschungsformulierung, keine universelle Frontend-Empfehlung).

### Answer Engine Optimization (AEO)

- **Deutscher Begriff:** Optimierung für antwortorientierte Systeme.
- **Kurzdefinition:** Kontextabhängiger Sammelbegriff für Maßnahmen, die Inhalte in antwortorientierten Systemen verfügbar oder nutzbar machen sollen.
- **Erklärung:** Hier ist kein einzelner technischer Mechanismus gemeint. Direkte Antwortextraktion, Passagenabruf und Antwortgenerierung sind unterschiedliche Aufgaben.
- **Forschungsrelevanz:** Arbeitsdefinition des Projekts; Antwortqualität, Extraktion oder Sichtbarkeit operationalisieren, statt „AEO“ als einen Score zu messen.
- **Verwandte Begriffe:** [GEO](#generative-engine-optimization-geo), [Content Extraction](#content-extraction).
- **Referenzen:** [GEO/AEO-Reviewfragen des Projekts](/de/02-literature/geo-aeo/) (Kontext dieser Arbeitsdefinition, kein externer Standard).

### Source Attribution

- **Deutscher Begriff:** Quellenzuordnung.
- **Kurzdefinition:** Angabe der Quelle, der ein Inhalt oder eine Aussage zugeschrieben wird.
- **Erklärung:** Eine Zitation ist eine Form der Zuordnung. Citation Behavior beschreibt, wann und wie Systeme zitieren; Citation Accuracy prüft, ob die zitierte Quelle die Aussage tatsächlich stützt.
- **Forschungsrelevanz:** Quellenpräsenz von Belegkraft und Antwortkorrektheit trennen; siehe [Evaluation](/de/02-literature/evaluation/) und [Evidenzmatrix](/de/06-evidence/matrix/).
- **Verwandte Begriffe:** [GEO](#generative-engine-optimization-geo), [Grounding](#grounding).
- **Referenzen:** [Projektdefinition der Zitiergenauigkeit](/de/01-foundation/terminology/), [RAG-Paper: Provenienz als Motivation](https://arxiv.org/abs/2005.11401).

## KI und Sprachmodelle

### Large Language Model (LLM)

- **Deutscher Begriff:** Großes Sprachmodell.
- **Kurzdefinition:** Großes erlerntes Sprachmodell, das Muster in Tokensequenzen repräsentiert; generative LLMs verwenden diese Muster zur Texterzeugung.
- **Erklärung:** Training verändert Modellparameter; Inferenz wendet ein trainiertes Modell auf eine Eingabe an. Eine Webseite im Prompt bereitzustellen ist allein kein Modelltraining.
- **Forschungsrelevanz:** Parameterwissen von durch Retrieval beschafften Informationen trennen; nicht jedes Foundation Model ist ein reines Text-LLM.
- **Verwandte Begriffe:** [RAG](#retrieval-augmented-generation-rag), [Context Window](#context-window).
- **Referenzen:** [Google: Einführung in LLMs](https://developers.google.com/machine-learning/crash-course/llm).

### Grounding

- **Deutscher Begriff:** Verankerung in Quellen oder Daten.
- **Kurzdefinition:** Im Projekt: Verknüpfen generierter Antworten mit bereitgestellten oder abgerufenen Informationen, statt ausschließlich Modellparameter zu nutzen.
- **Erklärung:** Die Verwendung variiert je Anbieter. Grounding garantiert weder faktische Korrektheit noch Halluzinationsfreiheit oder korrekte Zitationen; Halluzination bezeichnet häufig plausibel klingende, aber unbelegte oder falsche generierte Inhalte.
- **Forschungsrelevanz:** Quellenstützung getrennt von Retrieval-Erfolg und Antwortqualität bewerten.
- **Verwandte Begriffe:** [RAG](#retrieval-augmented-generation-rag), [Source Attribution](#source-attribution).
- **Referenzen:** [Google-ML-Glossar: Grounding](https://developers.google.com/machine-learning/glossary#grounding).

## Weiteres Referenzmaterial

Vorhandene Inhalte statt paralleler Register nutzen: [Paper-Analysevorlage](/de/03-notes/paper-notes/), [Journalvorlage](/de/03-notes/templates/journal-entry/), [Leitlinienvorlage](/de/07-guidelines/templates/guideline/), [technische Notizen](/de/03-notes/technical-notes/) und [Literaturregister](/de/02-literature/). Ein eigener Vorlagenhub, ein technischer Referenzkatalog und eine Bibliografie können unter Referenz ergänzt werden, sobald substanzielle Inhalte dies rechtfertigen.
