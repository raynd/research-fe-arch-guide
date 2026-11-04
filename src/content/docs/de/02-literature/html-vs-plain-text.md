---
title: HTML vs. Plain Text
description: Repräsentationsabwägungen, mögliche Beziehungsverluste und Grenzen der Übertragung von HtmlRAG auf Frontend-Architektur.
---

## Der Vergleich hängt von der Repräsentation ab

HTML kodiert Text zusammen mit Elementen, Attributen und verschachtelten Beziehungen. Plain Text kodiert diese HTML-Konstrukte nicht von sich aus; eine Konvertierung kann ausgewählte Beziehungen jedoch mit Labels, Trennzeichen, Einrückungen oder expliziten URLs ausdrücken. „HTML versus Text“ ist deshalb keine vollständige experimentelle Spezifikation.

Die [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/) definiert Markup-Semantik und Parsing, belegt aber keinen Retrieval- oder Zitiervorteil. [PAPER-001 — HtmlRAG](/de/03-notes/paper-notes/htmlrag/) liefert empirische Ergebnisse für bestimmte RAG-Repräsentationen und Refiner, keine universelle Evidenz zur Sichtbarkeit von Websites.

## Was bei Konvertierung verloren gehen kann

| Beziehung               | In geeignetem HTML verfügbar                     | Möglicher Verlust oder Alternative                                                                     |
| ----------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| Abschnittszugehörigkeit | Überschriftenränge und verschachtelte Abschnitte | Abflachen kann Passagen von Überschriften lösen; Überschriftenpfade voranstellen                       |
| Tabellenzuordnung       | Zeilen, Zellen, Header und Beschriftungen        | Sequenzieller Text kann die Zuordnung von Header und Wert verdecken; beschriftete Zellen serialisieren |
| Listenmitgliedschaft    | Listen-/Elementgrenzen und Verschachtelung       | Elemente können zu einem undifferenzierten Absatz werden; Aufzählung und Tiefe bewahren                |
| Linkbeziehungen         | Ankertext und `href`                             | Ankertext kann ohne Ziel erhalten bleiben; explizite URLs ergänzen                                     |
| Inhaltsrollen           | Elemente wie `code` oder `blockquote`            | Wörter bleiben erhalten, ihre Rolle geht verloren; Rollenlabels oder Trennzeichen bewahren             |
| Provenienz              | Seiten-URL und Extraktionsmetadaten              | Dokumentzusammenführung kann Passagen von Quellen lösen; Quellenkennungen mitführen                    |

Dies sind mögliche Fehlerbilder und Gestaltungsalternativen, keine im Projekt gemessenen Effekte. Ungültiges Markup, CSS-Layout, skriptgenerierte Inhalte und Konverterregeln erschweren die Rekonstruktion. HTML selbst garantiert keine vollständige oder korrekte Semantik.

## Was HtmlRAG zeigt und was nicht

Die Autorenschaft beschreibt Plain Text als häufige Schnittstelle, um abgerufene Passagen an LLMs zu übergeben (§§1–2). Die einfachere Form vermeidet einen Teil des Markup-Overheads; HTML kann Struktur gegen zusätzliche Tokens bewahren. Das Verfahren bereinigt HTML, bildet Block Trees und beschneidet diese vor der Generierung (§3).

Die Experimente vergleichen bei kurzem Kontext eine vollständige Verarbeitungspipeline und bei langem Kontext Repräsentationen ohne Pruning (§4). Dies sind verschiedene Kontraste. Eine Pipelineverbesserung lässt sich nicht vollständig HTML-Syntax, semantischen Elementen oder DOM-Hierarchie zuschreiben.

Einzelne Metriken zeigen gemischte Ergebnisse. In Tabelle 2 mit Llama-3.1-70B-Instruct bei 128K erzielt bereinigtes HTML ohne Pruning **42,25 Hotpot-QA EM** gegenüber **41,00** für Plain Text, aber **43,65 NQ EM** gegenüber **44,11** für Plain Text. Die [Paper-Notiz](/de/03-notes/paper-notes/htmlrag/) dokumentiert weitere Gegenbeispiele. Dies sind berichtete Scores, keine im Projekt replizierten Ergebnisse.

Die Studie belegt **nicht**, dass Crawler HTML bevorzugen, semantisches HTML höhere Suchrankings erhält oder Websites mehr KI-Zitationen bekommen. Sie untersucht Verarbeitung abgerufenen Wissens und QA, keine GEO-Intervention auf Website-Ebene.

## Zu untersuchende Implikationen

Für spätere Arbeiten zu [H-005](/de/04-hypotheses/h-005/), [H-006](/de/04-hypotheses/h-006/) und dem bereits vorgeschlagenen [EXP-004](/de/05-experiments/exp-004/) sind Informationsgleichheit, Konverterverhalten, Parserausgabe, Chunk-Grenzen, Kontextbudget, Retriever, Generator und Provenienz festzuhalten.

Bei Bedarf sowohl gleiche Tokenbudgets als auch gleichen Informationsumfang vergleichen: HTML-Markup kann die Menge des in ein festes Fenster passenden Quellmaterials reduzieren. Sorgfältig gelabelter Text ist ein stärkerer Vergleich als ungezieltes Entfernen von Tags. Dies sind Bewertungskriterien, kein neu registriertes oder ausgeführtes Experiment.

## Offene Forschungsfragen

1. Welche Beziehungen überleben die jeweilige Konvertierung, und welche benötigt eine konkrete Anfrage?
2. Können explizite Textlabels einen scheinbaren HTML-Vorteil ausgleichen?
3. Hilft Struktur beim ersten Retrieval, bei der Evidenzauswahl, bei der Generierung oder auf mehreren Stufen?
4. Wie verändern Token-Overhead und Kürzung die Abwägung?
5. Beeinflusst erhaltene Provenienz die Quellenstützung einzelner Aussagen unabhängig von Antwortkorrektheit?
6. Wirken kontrollierte Änderungen semantischer Elemente, wenn Fakten, Tiefe, Reihenfolge und Auslieferung konstant bleiben?

Keine bestehende Hypothese wird als unterstützt markiert. Eine Übertragung auf Frontend-Empfehlungen bleibt eine ungeprüfte Ableitung, die aussagenspezifische Evidenzbewertung benötigt.

## Quellen und Vertiefung

- [HtmlRAG v2, §§1, 3, 4 und Tabelle 2](https://arxiv.org/html/2411.02959v2#S4.T2), geprüft am 2026-11-04.
- [WHATWG HTML](https://html.spec.whatwg.org/multipage/) — Elementbedeutungen und Verarbeitungsregeln.
- [Readability-Ausgabe-API](https://github.com/mozilla/readability#api-reference) — konkrete HTML-/Text-Unterscheidung.
- [HTML-Inhaltsverarbeitung](/de/02-literature/html-content-processing/), [Evaluation](/de/02-literature/evaluation/) und [Evidenzklassifikation](/de/06-evidence/).
