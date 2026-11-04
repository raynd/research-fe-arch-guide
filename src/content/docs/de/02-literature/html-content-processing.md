---
title: HTML-Inhaltsverarbeitung
description: Parsing, Bereinigung, Konvertierung und Strukturerhalt als getrennte Stufen in KI- und RAG-Pipelines.
---

## Umfang und Quellenstatus

Diese konzeptionelle Übersicht trennt Verarbeitungsschritte anhand der HTML-Spezifikation, einer konkreten Extraktionsimplementierung und [PAPER-001 — HtmlRAG](/de/03-notes/paper-notes/htmlrag/). Sie beschreibt nicht die Pipeline jedes KI-Anbieters. Quellen wurden am **2026-11-04** geprüft; es wurde kein Projektexperiment durchgeführt.

## Von der beschafften Seite zum Modellkontext

Ein hilfreiches Analysemodell ist:

`Beschaffung → Parsing → optionale Bereinigung/Extraktion → Repräsentation → Chunking/Auswahl → Retrieval Refinement → Kontextaufbau → Generierung`

Reale Pipelines können Stufen anders anordnen, kombinieren oder auslassen. Retrieval kann der HTML-Beschaffung vorausgehen, wenn eine Such-API Kandidaten-URLs liefert, und später über verarbeitete Dokumente erneut erfolgen. Browser-Rendering ist ein möglicher zusätzlicher Schritt, keine automatische Folge eines HTML-Abrufs.

| Vorgang                    | Zweck                                                                           | Was er nicht belegt                                                |
| -------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| HTML Parsing               | Markup nach definierten Parserregeln als Knotenstruktur interpretieren          | Welche Inhalte relevant oder sichtbar sind                         |
| HTML Cleaning              | Festgelegtes Markup, Attribute, Skripte oder Stile entfernen oder normalisieren | Dass alle aufgabenrelevanten Informationen erhalten bleiben        |
| Hauptinhaltsextraktion     | Als Hauptinhalt bewertetes Material auswählen                                   | Vollständige Abdeckung aller relevanten Fakten oder Seitenbereiche |
| HTML-zu-Text-Konvertierung | Ausgewählte Inhalte ohne ursprüngliches HTML-Markup serialisieren               | Erhalt von Überschriften-, Link- oder Tabellenbeziehungen          |
| Chunking                   | Inhalte in Verarbeitungs- oder Retrieval-Einheiten teilen                       | Relevanz für eine bestimmte Anfrage                                |
| Retrieval Refinement       | Abgerufenes Material filtern, neu sortieren, komprimieren oder beschneiden      | Gleichbedeutung mit Cleaning oder Chunking                         |
| Kontextaufbau              | Ausgewähltes Material und Anweisungen für das Modell anordnen                   | Korrekte Nutzung dieses Materials in der Antwort                   |

Dies sind analytische Abgrenzungen; Bibliotheken können Begriffe überlappend verwenden.

## Parsing ist weder Extraktion noch Rendering

Die [WHATWG-Parsing-Spezifikation](https://html.spec.whatwg.org/multipage/parsing.html) beschreibt Tokenisierung und Baumaufbau einschließlich Fehlerbehandlung. Der erzeugte Baum muss nicht die wörtliche Verschachtelung der Quelle wiedergeben. Ein DOM-Snapshot nach JavaScript-Ausführung ist eine andere Beobachtung als ein aus der ursprünglichen Antwort geparster Baum.

Ein Extraktor wählt relevante Inhalte aus einer solchen Repräsentation. Die [API von Mozilla Readability](https://github.com/mozilla/readability#api-reference) liefert beispielsweise verarbeitetes Artikel-HTML (`content`) und Text ohne HTML-Tags (`textContent`). Das veranschaulicht unterschiedliche Ausgaben, garantiert aber weder Extraktionsgenauigkeit noch die Verwendung von Readability durch KI-Anbieter.

## Bereinigung und Strukturerhalt

Das Entfernen von Skripten, CSS, Kommentaren, leeren Knoten oder redundanten Wrappern kann Eingaben verkürzen. Die genaue Regel ist entscheidend: Skriptdaten können Inhalte enthalten, Attribute Beziehungen kodieren und CSS Sichtbarkeit bestimmen. Retrieval-Bereinigung unterscheidet sich zudem von Security Sanitization.

HtmlRAG §3.2 schlägt anfrageunabhängige Bereinigung und strukturelle Kompression vor; §3.3 erzeugt einen gröberen Block Tree aus dem DOM; §3.4 beschneidet Blöcke nach Anfragerelevanz. Die Autorenschaft bezeichnet ihre Bereinigung als nahezu verlustfrei; dies ist keine allgemeine Garantie für beliebige Websites. Anfrageabhängiges Pruning verwirft bewusst Material.

Erhalt kann Wörter, Abschnittszugehörigkeit, Listenmitgliedschaft, Tabellenzuordnungen, Linkziele oder Provenienz betreffen. Ein Verfahren kann Text bewahren und Beziehungen verlieren. Vor der Erfolgsbewertung festlegen, welche Eigenschaften relevant sind.

## Repräsentationen und Forschungsbezug

Quell-HTML, gerenderter DOM, bereinigtes HTML, Plain Text, Markdown und strukturierte Datensätze sind nicht austauschbar. Markdown kann Überschriften, Listen und Links darstellen; der Konverter entscheidet jedoch, was erhalten bleibt. Strukturierte Daten können eine weitere Repräsentation ergänzen, ohne deren Nutzung durch nachgelagerte Systeme zu belegen.

Für [EXP-001](/de/05-experiments/exp-001/) und [EXP-004](/de/05-experiments/exp-004/) sollte eine spätere Auswertung Zwischenartefakte sichern und Parserversion, Sichtbarkeitsregeln, Extraktionsziel, erhaltene Metadaten, Tokenisierung, Chunk-Grenzen und Kontextlimits dokumentieren. Dies ist ein Messvorschlag, kein durchgeführtes Verfahren oder neues Experiment.

Die Forschungsfrage lautet, ob erhaltene Beziehungen definierte Extraktions-, Retrieval- oder Antwortergebnisse unter kontrollierten Bedingungen verbessern. Verfügbarkeit, Extraktion, Retrieval, Antwortqualität und Quellenstützung bleiben getrennt.

## Quellen und Vertiefung

- [WHATWG: Parsing von HTML-Dokumenten](https://html.spec.whatwg.org/multipage/parsing.html) — normatives Browser-Parsing-Modell.
- [Mozilla Readability](https://github.com/mozilla/readability) — Extraktionsimplementierung und Ausgabevertrag.
- [HtmlRAG, §§3–4](https://arxiv.org/html/2411.02959v2#S3) — publizierter Verarbeitungsansatz; Einschränkungen und Ergebnisse werden in [PAPER-001](/de/03-notes/paper-notes/htmlrag/) bewertet.
- [HTML vs. Plain Text](/de/02-literature/html-vs-plain-text/), [RAG-Literaturthemen](/de/02-literature/rag-retrieval/) und [Glossar](/de/13-reference/glossary/#content-extraction).
