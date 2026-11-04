---
title: Crawler und Inhaltsbeschaffung
description: Forschungsnotiz zur Trennung von Discovery, Suchindexierung, Modelltraining, Live-Retrieval und verbundenen Quellen.
---

## Status der Notiz

**2026-11-04 — dokumentationsbasierte konzeptionelle Notiz.** Kein Crawlerexperiment und keine verifizierte Beschreibung privater Anbieterimplementierungen. Der [Anbietervergleich](/de/03-notes/ai-search-provider-access/) enthält datierte, produktspezifische Quellen.

## Discovery, Crawling, Indexierung und Ranking

Discovery identifiziert mögliche Ressourcen, etwa über Links oder XML-Sitemaps. Crawling ruft Ressourcen ab. Rendering verarbeitet eine Seite und führt gegebenenfalls JavaScript aus. Indexierung analysiert und organisiert Inhalte für späteres Retrieval. Ranking ordnet Kandidaten für eine Anfrage. Keine dieser Stufen garantiert den Abschluss der nächsten.

[Googles Suchdokumentation](https://developers.google.com/search/docs/fundamentals/how-search-works) beschreibt eigene Crawling-, Indexierungs- und Auslieferungsstufen sowie JavaScript-Rendering. Sie belegt nicht, dass jeder KI-Crawler Googles Rendering-Verhalten implementiert. Ebenso zeigt eine erfolgreiche HTTP-Antwort nicht, dass wichtige Inhalte extrahiert, indexiert oder zitiert wurden.

## Fünf Beschaffungszwecke

| Zweck                              | Typische Beobachtung oder Dokumentation                       | Schlussfolgerungsgrenze                                                            |
| ---------------------------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Crawling für Suchindexierung       | Ein dokumentierter Suchcrawler ruft URLs für Suche ab         | Besuch belegt weder Indexaufnahme noch Rang                                        |
| Sammlung für Modelltraining        | Anbieter dokumentiert mögliche Trainingsnutzung               | Kein Nachweis einer bestimmten Trainingsaufnahme oder Live-Antwort                 |
| Live-Suche/Retrieval               | Produkt sucht während einer Anfragebearbeitung                | Kann vorhandene Indizes durchsuchen; „live“ bedeutet nicht zwingend neues Crawling |
| Direkter nutzerinitiierter Zugriff | Fetcher greift auf eine angefragte Seite zu                   | Nicht automatisch Hintergrund-Crawling oder Training                               |
| APIs, Uploads, verbundene Quellen  | Inhalte werden über Integration bereitgestellt oder abgerufen | Öffentliche Crawlbarkeit kann irrelevant sein; Berechtigungen bleiben wichtig      |

„AI Crawler“ ist ein unpräziser Sammelbegriff. Agent und dokumentierten Zweck erfassen, statt den Zweck aus dem Anbieternamen abzuleiten.

## Suchindizes und externe APIs

Ein System kann URLs, Snippets oder extrahierten Text von einer Such-API erhalten, statt jede Seite selbst zu entdecken. API-Anfrage, Seitendownload und Passagenretrieval sind getrennte Ereignisse. API-Inhalte können sowohl von aktuellem HTML als auch vom gerenderten DOM abweichen.

OpenAI dokumentiert, dass ChatGPT-Suche teilweise andere Suchanbieter nutzt; Perplexity dokumentiert eine API für gerankte Ergebnisse. Diese Angaben legen nicht sämtliche Indexzusammensetzungen, Ranking-, Parser- oder Routingdetails offen. Die Verfügbarkeit einer API belegt nicht, dass der Consumer-Assistent des Anbieters intern dieselbe API verwendet.

## Verbundene Quellen und Zugriffsregeln

Verbundene Dienste können private Dokumente oder Nachrichten entsprechend Konto- und Workspace-Berechtigungen liefern. [OpenAIs Dokumentation verbundener Apps](https://help.openai.com/en/articles/11487775-connected-apps-in-chatgpt) ist ein konkretes Beispiel. Zugriff über eine autorisierte Integration ist nicht mit anonymem Web-Crawling gleichzusetzen; ihre Regeln gelten nicht automatisch für alle Anbieter.

[RFC 9309](https://www.rfc-editor.org/rfc/rfc9309.html) spezifiziert robots.txt-Crawlerregeln, keine Authentifizierung. Produktsteuerungen und nutzerinitiierte Zugriffe erfordern die Prüfung der jeweiligen Anbieterrichtlinie. XML-Sitemaps beschreiben mögliche URLs nach dem [Sitemap-Protokoll](https://www.sitemaps.org/protocol.html), keine Aufnahmegarantie.

## llms.txt: dokumentierter Vorschlag, keine bewiesene Intervention

Der [llms.txt-Vorschlag](https://llmstxt.org/) beschreibt eine Markdown-Übersicht mit Kontext und Links zu LLM-freundlichen Inhalten. Dies ist die Zweckbeschreibung des Vorschlagsautors, kein unabhängiger Nachweis besserer Retrieval- oder Zitationsergebnisse. Die Datei ersetzt weder robots.txt noch belegt sie, dass ein bestimmter Anbieter sie verarbeitet.

Tatsächliche Nutzung, unterstützter Umfang, Entdeckungsmechanismus und nachgelagerte Effekte benötigen anbieterspezifische Dokumentation oder ein explizites Experiment. Diese Notiz führt weder llms.txt noch Crawlerregeln oder Sitemap-Konfiguration ein.

## Festzuhaltende Fragen

- Welcher Client rief die Ressource tatsächlich ab, und lässt sich seine Identität über einen fälschbaren User-Agent hinaus verifizieren?
- Stammten Inhalte aus Index, frischem Abruf, Cache, API oder Connector?
- Welche Repräsentation mit welchem Zeitstempel erreichte das nachgelagerte System?
- Welche zweckspezifische Regel galt, und was bleibt unbekannt?
- Erfolgten Extraktion, Retrieval oder Zitierung statt lediglich eines HTTP-Besuchs?

Für spätere Beobachtungen zu [EXP-002](/de/05-experiments/exp-002/) Produkt/Funktion, Datum, URL, Antwort, Agentverifikation, Rendering-Bedingungen, Berechtigungen und genaues Ergebnis erfassen. Der vorgeschlagene Experimentstatus bleibt unverändert.

## Vertiefung

[Anbietervergleich](/de/03-notes/ai-search-provider-access/), [Literatur zu Rendering und Crawling](/de/02-literature/rendering-crawling/), [HTML-Verarbeitung](/de/02-literature/html-content-processing/) und [Beschaffungsglossar](/de/13-reference/glossary/#content-acquisition).
