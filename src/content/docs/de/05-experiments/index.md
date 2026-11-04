---
title: Experimente
description: Vorgeschlagene Versuchsdesigns, gemeinsame Ressourcen und Ergebnisprotokolle.
---

Alle vier Ausgangsexperimente haben den Status **Vorgeschlagen** und wurden nicht abgeschlossen. Ergebnisse, Interpretationen und Schlussfolgerungen liegen nicht vor.

| ID      | Titel               | Kernvergleich                                                                                   | Zugehörige Hypothesen | Status        |
| ------- | ------------------- | ----------------------------------------------------------------------------------------------- | --------------------- | ------------- |
| EXP-001 | HTML-Struktur       | Inhaltsgleicher Vergleich generischer und semantischer Elemente; explorative Varianten getrennt | H-001, H-002          | Vorgeschlagen |
| EXP-002 | Rendering-Strategie | CSR, SSR, SSG                                                                                   | H-003                 | Vorgeschlagen |
| EXP-003 | Strukturierte Daten | Sichtbares HTML und JSON-LD-Varianten                                                           | H-004                 | Vorgeschlagen |
| EXP-004 | Content-Architektur | Quellstruktur, anschließend Retrieval mit eingefrorenen nachgelagerten Einstellungen            | H-005, H-006          | Vorgeschlagen |

## Gemeinsame Design-Dokumente

- [Versuchsdesign](/de/05-experiments/design/)
- [Testfälle und Testdaten](/de/05-experiments/test-cases-data/)
- [Testumgebungen](/de/05-experiments/environments/)
- [Metriken und Evaluation](/de/05-experiments/metrics/)
- [Analyseplan vor Datenerhebung](/de/05-experiments/analysis-plan/)
- [Experiment-Ergebnisse](/de/05-experiments/results/)
- [Reproduzierbarkeit](/de/05-experiments/reproducibility/)

Vor der Datenerhebung Protokoll und Analyseplan versionieren sowie primären Endpunkt, Zuweisungs- und Analyseeinheiten, Annotationsverfahren, Abbruchregel und Umgang mit fehlenden Daten festlegen. Vor der Verwendung für Erkenntnisse muss die Experimentdokumentation Inhaltsparität, Kontrollen, Tool-Versionen, Laufzeitpunkte, Rohdaten, Abweichungen und Einschränkungen enthalten.

## Zukünftige Toolchain

Eine Python-basierte Toolchain für HTML-Extraktion, DOM-Analyse, Crawler-Verhalten, Dokument-Parsing, RAG-Chunking, Retrieval- und Antwortqualität wird in einer späteren Forschungsphase eingeführt. Tools werden erst nach Festlegung der konkreten Versuchsanforderungen ausgewählt.
