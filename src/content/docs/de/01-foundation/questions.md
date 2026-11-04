---
title: Forschungsfragen
description: Vorläufige zentrale Forschungsfrage und Unterfragen.
---

## Zentrale Forschungsfrage

> Wie kann Frontend-Architektur die maschinelle Lesbarkeit, den Informationsabruf und die Beantwortbarkeit von Webinhalten in generativen Suchsystemen verbessern?

Dies ist die erste Formulierung und kann anhand der Literaturauswertung und Pilotstudien präzisiert werden.

## Vorläufige Unterfragen

**RQ1 — Semantisches HTML:** Wie beeinflusst semantisches HTML die Extraktion und Interpretation von Webinhalten im Vergleich zu generischen DOM-Strukturen?

**RQ2 — Rendering:** Wie wirken sich CSR, SSR und SSG auf die Verfügbarkeit relevanter Inhalte für Such-Crawler und KI-basierte Retrieval-Systeme aus?

**RQ3 — Strukturierte Daten:** Verbessern strukturierte Daten die Antwortqualität und das Verständnis von Entitäten, wenn dieselben Informationen bereits im sichtbaren HTML enthalten sind?

**RQ4 — Content-Architektur:** Wie beeinflusst die ursprüngliche Frontend-Struktur nachgelagerte Dokumentsegmentierung und RAG-Retrieval?

**RQ5 — Architektur-Leitlinien:** Welche Frontend-Architekturmuster lassen sich aus verfügbarer empirischer Evidenz für GEO und AEO ableiten?

## Operationalisierung und Schlussfolgerungsgrenzen

| Frage | Primärer Vergleich oder Syntheseaufgabe | Getrennt zu betrachtende Ergebnisse | Einheit / Schlussfolgerungsgrenze |
|---|---|---|---|
| RQ1 | Inhaltsgleiches semantisches und generisches Markup | Vollständigkeit der Extraktion; strukturelle Interpretation | Fixture × Extraktionspipeline. Belegt für sich kein verbessertes Retrieval oder Antworten. |
| RQ2 | CSR, SSR und SSG bei äquivalenten Inhalten | Initiale Antwort; gerendertes DOM; beobachtete Client-Extraktion; Retrieval, sofern direkt messbar | Fixture × Client/System × Zeitpunkt. Crawler-Zugriff beweist keine Indexierung. |
| RQ3 | Sichtbare Inhalte allein vs. dieselben Inhalte plus gleichwertiges JSON-LD | Entitäts-/Eigenschaftsextraktion; Antworten; aussagenbezogener Zitierbeleg | Entität/Query × System × Zeitpunkt. Zusätzliche Fakten/Beziehungen vom Formatvergleich trennen. |
| RQ4 | Gleichwertige Fakten mit vorab definierten Quellstruktur-Varianten in festem Parser/Retriever | Parsing; Chunk-/Kontexterhalt; Retrieval; generierte Antwort | Inhaltselement × Query × Pipeline-Konfiguration. Lokale RAG-Ergebnisse belegen kein Verhalten externer Anbieter. |
| RQ5 | Evidenzsynthese aus ausgewerteten Quellen und abgeschlossenen Experimenten | Aussagekraft, Anwendbarkeit, Zielkonflikte und Lücken | Synthesefrage, kein eigenständiges Kausalexperiment. |

Dies sind Ausgangspunkte der Operationalisierung, keine finalen Zielparameter. Konkrete Variablen, primäre Endpunkte, Stichproben und Schlussfolgerungsgrenzen im jeweils versionierten Protokoll vor der Datenerhebung festlegen. Das [Suchprotokoll für die Literaturrecherche](/de/01-foundation/literature-search/) beschreibt die Quellensuche; der [Analyseplan](/de/05-experiments/analysis-plan/) definiert bestätigende Vergleiche.

## Änderungsprotokoll

Diese Fragen sind anpassbare Ausgangspunkte. Wesentliche Änderungen mit Begründung und Auswirkungen auf bestehende Hypothesen oder Versuchsdesigns im [Forschungstagebuch](/de/03-notes/research-journal/) dokumentieren.
