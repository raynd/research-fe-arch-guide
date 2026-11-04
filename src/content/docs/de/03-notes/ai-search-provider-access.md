---
title: Inhaltszugriff von KI-Suchanbietern
description: Datierter Vergleich öffentlich dokumentierter Inhaltszugriffe von Perplexity, Gemini, ChatGPT und Claude.
---

## Status und Einordnung

**Dokumentationsprüfung: 2026-11-04.** „Dokumentiert“ bedeutet hier: in der verlinkten offiziellen Quelle angegeben, nicht unabhängig getestet. Produkte, APIs, Tarife und Werkzeugversionen unterscheiden sich. Unbekannt bedeutet **durch die hier geprüften Quellen nicht belegt**, nicht grundsätzlich unveröffentlicht.

Es wird keine vollständige interne Pipeline abgeleitet. Crawlererlaubnis, Suchtreffer oder Zitation belegen nicht, wie eine bestimmte Antwort zusammengestellt wurde.

## Zweckbezogene Clients und Steuerungen

| Anbieter           | Dokumentierter Suchzugriff                                                                  | Trainingssammlung/-steuerung                                                                                                                                | Nutzerinitiierter Zugriff                                                                                             | Offizielle Quelle                                                                                                                                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Perplexity         | PerplexityBot zeigt und verlinkt Websites in Suchergebnissen                                | Laut Perplexity dient dieser Bot nicht dem Foundation-Model-Training; dies beschreibt nicht alle Trainingsquellen des Unternehmens                          | Perplexity-User unterstützt Nutzeranfragen und ist nicht der Hintergrund-Suchcrawler                                  | [Crawlerdokumentation](https://docs.perplexity.ai/docs/resources/perplexity-crawlers)                                                                                                                            |
| Google / Gemini    | Googlebot unterstützt Google Search; Gemini API bietet ein Google-Search-Grounding-Werkzeug | Google-Extended steuert bestimmte Trainings- und Grounding-Nutzungen in benannten Gemini-/Vertex-AI-Produkten; Produkttoken, kein separater HTTP-User-Agent | Google trennt nutzerinitiierte Fetcher von allgemeinen Crawlern; nicht jede Gemini-Anfrage mit Googlebot gleichsetzen | [Crawlerliste](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers), [Clientkategorien](https://developers.google.com/crawling/docs/crawlers-fetchers/overview-google-crawlers) |
| OpenAI / ChatGPT   | OAI-SearchBot ist für ChatGPT-Suche dokumentiert                                            | GPTBot sammelt potenziell für Training verwendbare Inhalte; seine Steuerung ist von OAI-SearchBot unabhängig                                                | ChatGPT-User unterstützt bestimmte Nutzeraktionen und ist kein automatisches Web-Crawling                             | [OpenAI-Bots](https://developers.openai.com/api/docs/bots)                                                                                                                                                       |
| Anthropic / Claude | Claude-SearchBot unterstützt Suchergebnisqualität und Indexierung für Suche                 | ClaudeBot sammelt potenziell zum Modelltraining beitragende Inhalte                                                                                         | Claude-User unterstützt nutzerinitiierte Zugriffe                                                                     | [Anthropic-Crawlerrichtlinie](https://privacy.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler)                                                   |

Google erklärt ausdrücklich, dass Google-Extended weder die Aufnahme in Google Search beeinflusst noch dort als Rankingsignal dient. Es ist keine universelle Steuerung jeder Google-KI-Funktion.

Laut OpenAI können nutzerinitiierte ChatGPT-User-Zugriffe von robots.txt abweichen; laut Perplexity ignoriert Perplexity-User sie im Allgemeinen. Dies sind dokumentierte zweckbezogene Regeln, keine Aussagen über sämtliche Bots. Anthropic dokumentiert robots.txt-Steuerungen für die aufgeführten Bots. Vor Loginterpretationen oder Zugriffsänderungen aktuelle Regeln prüfen.

## Suche, APIs und Quellenzuordnung

### Perplexity

Die Crawlerdokumentation unterscheidet Sucherschließung von nutzerinitiierten Besuchen. Die [Search API](https://docs.perplexity.ai/docs/search/quickstart) liefert Entwicklern gerankte Webtreffer als strukturierte Daten mit Steuerungen für extrahierten Text. Ihre Existenz legt weder vollständige Indexzusammensetzung noch externe Zulieferer, internen Parser oder Reranking-Pipeline des Consumer-Produkts offen.

Links in Suchergebnissen sind von für generierte Antworten verwendeten Quellen zu unterscheiden. Ein Link allein belegt nicht jede zugeordnete Aussage.

### Gemini

Die [Gemini-API-Dokumentation zu Google-Search-Grounding](https://aistudio.google.com/docs/google-search) beschreibt optionale Suchwerkzeugnutzung, Anfrageerzeugung, Ergebnisverarbeitung und zurückgegebene Zitationsinformationen. Sie trennt Such-Grounding zudem von einem URL-Context-Werkzeug. Dies beschreibt eine API-Funktion, nicht den exakten Ablauf jeder Gemini-Apps-Antwort.

Google-Search-Indexierung, Google-Extended-Steuerung und Gemini-API-Grounding sind unterschiedliche Oberflächen. Die Quellen belegen keine vollständige HTML-Extraktions-, Chunking- oder Ranking-Pipeline für sämtliche Gemini-Produkte.

### ChatGPT

Die [Dokumentation der ChatGPT-Suche](https://help.openai.com/en/articles/9237897-searching-the-web-with-chatgpt) beschreibt automatische oder manuell gewählte Suche, mögliche Quellenlinks/Zitationen und teilweise externe Suchanbieter mit umformulierten Anfragen. Die geprüfte Dokumentation verlinkt Anbieter-Datenschutzrichtlinien, begründet aber keine feste vollständige Zulieferer- oder Indexkarte für alle Anfragen.

[Verbundene Apps](https://help.openai.com/en/articles/11487775-connected-apps-in-chatgpt) können autorisierte Dienstinformationen etwa aus Drive oder Slack liefern. Dies ist von öffentlichem Website-Crawling zu trennen. Weder ein verbundenes Dokument noch ein OAI-SearchBot-Besuch belegt Aufnahme ins Modelltraining.

### Claude

Das [Websuchwerkzeug der Claude API](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool) dokumentiert Suche während einer Anfrage und Zitationen aus Suchergebnissen. Manche Werkzeugversionen unterstützen dynamisches Filtern vor der Kontextaufnahme; dies gilt nicht automatisch für alle Versionen oder Claude-Oberflächen.

Die Crawlerrichtlinie trennt ClaudeBot, Claude-SearchBot und Claude-User. Diese Quellen belegen nicht sämtliche vorgeschalteten Suchzulieferer oder vollständige interne Index-, HTML-Parser-, Chunking- und Ranking-Verfahren. Hier wird kein Zulieferer unterstellt.

## Was unbekannt bleibt

Für jedes Produkt und jede Funktion bleibt zu prüfen, welcher Seitensnapshot verwendet wurde, ob JavaScript lief, welche Repräsentation die Extraktion überstand, welche Retrieval-/Refinement-Regeln galten und warum eine konkrete Quelle zitiert wurde. Öffentliche Quellenlinks beantworten nicht alle diese Fragen.

Auch Verfügbarkeit und Regeln verbundener Quellen benötigen produktspezifische Prüfung; das ChatGPT-Beispiel behauptet keine gleichwertigen Connectoren bei allen vier Anbietern. Ebenso belegt die Veröffentlichung von Entwicklerdokumentation im llms.txt-Format nicht, dass ein Suchassistent beliebige Website-llms.txt-Dateien verarbeitet.

## Forschungsnutzung und Pflege

Die Seite ist eine datierte Dokumentationskarte, kein Plattformbenchmark oder Frontend-Rat. Bei Aktualisierungen Produkt, Funktion, Quellen-URL, Prüfdatum, dokumentierte Aussage und offene Frage erfassen. Vor Experimenten oder Richtlinienentscheidungen Quellen erneut prüfen.

Verwandt: [Beschaffungsmodell und llms.txt](/de/03-notes/crawlers-content-acquisition/), [HTML-Repräsentationen](/de/02-literature/html-vs-plain-text/), [Zitationsevaluation](/de/02-literature/evaluation/) und [technisches Glossar](/de/13-reference/glossary/).
