---
title: PAPER-001 — HtmlRAG
description: Kritische Quellenbewertung von HTML-Repräsentation, Bereinigung und Block-Tree-Pruning in HtmlRAG, getrennt von GEO/AEO-Aussagen.
date: 2026-11-04
paperId: PAPER-001
---

## Bibliografische Angaben

- **Paper-ID:** PAPER-001. Beim Anlegen dieses Datensatzes war keine frühere Vergabe vorhanden.
- **Titel:** HtmlRAG: HTML is Better Than Plain Text for Modeling Retrieved Knowledge in RAG Systems.
- **Autoren:** Jiejun Tan, Zhicheng Dou, Wen Wang, Mang Wang, Weipeng Chen, Ji-Rong Wen.
- **Jahr / Publikationsort:** 2025, Proceedings of the ACM Web Conference 2025 (WWW ’25), S. 1733–1746.
- **DOI:** [10.1145/3696410.3714546](https://doi.org/10.1145/3696410.3714546).
- **arXiv:** [2411.02959](https://arxiv.org/abs/2411.02959); die geprüfte [HTML-v2](https://arxiv.org/html/2411.02959v2) wurde am 2025-02-07 eingereicht. Der erste Preprint stammt aus 2024; 2025 ist das Konferenzpublikationsjahr.
- **Publikationsstatus:** Veröffentlichtes Konferenzpaper; Titel, Autoren, Jahr, Publikationsort und Seiten anhand der [vom Verlag hinterlegten Crossref-Metadaten](https://api.crossref.org/works/10.1145/3696410.3714546) geprüft. Diese Bewertung betrifft arXiv v2, keinen behaupteten zeilenweisen Vergleich mit dem Verlags-PDF.
- **Prüfdatum / Auswahl:** 2026-11-04; direkt vom Nutzer benannte Quelle, ausgewählt wegen HTML-Wissensrepräsentation und Strukturverarbeitung. Keine systematische Suche oder Replikation behauptet.
- **Artefakte:** [Code- und Datenrepository der Autoren](https://github.com/plageon/HtmlRAG). Keine Forschungssoftware installiert oder ausgeführt.

## Thema und Forschungsfrage

Kann HTML als Repräsentation abgerufenen externen Wissens die RAG-Fragenbeantwortung gegenüber Plain Text verbessern, während Bereinigung und Pruning die Eingaben innerhalb der Kontextgrenzen halten?

Dies betrifft **Wissensverarbeitung nach Retrieval**. Die Einleitung nennt kommerzielle Systeme als Motivation; die Experimente belegen nicht deren private Implementierungen.

## Von HTMLCleaner adressiertes Problem

„HTMLCleaner“ bezeichnet hier das **HTML-Cleaning-Modul / HTML-Clean** des Papers (§3.2), keinen separat validierten allgemeinen Webstandard. Rohes abgerufenes HTML enthält Markup, Stile, Skripte, Kommentare und redundante Struktur, die Tokens beanspruchen. Textkonvertierung reduziert Overhead, kann aber nützliche Beziehungen entfernen.

Die anfrageunabhängige Bereinigung entfernt CSS, Kommentare, JavaScript und lange Attribute, komprimiert einfach verschachtelte Tags und entfernt leere Tags. Die Autoren beschreiben dies als nahezu verlustfreie strukturelle Kompression. Diese Einordnung bezieht sich auf ihre beabsichtigte Inhaltsverarbeitung: Attribut-, Skript- oder CSS-Entfernung ist nicht universell informationserhaltend, insbesondere für dynamische Inhalte, Sichtbarkeit oder Barrierefreiheitsbeziehungen.

## Methodik und Verarbeitungspipeline

1. Webtreffer abrufen und statisches HTML herunterladen.
2. HTML ohne Bezug zur Frage bereinigen (§3.2).
3. Abgerufenes HTML zusammenführen, mit Beautiful Soup parsen und fragmentierte DOM-Knoten zu einem **Block Tree** mit einstellbarer Granularität zusammenfassen (§3.3).
4. Mit **BGE-Large-EN**-Embeddings von Blocktext und Anfrage gering relevante Blöcke gierig entfernen (§3.4.1).
5. Feineren Block Tree aufbauen; ein feinabgestimmtes generatives Modell auf Basis von Phi-3.5-Mini-Instruct bewertet Blockpfade. Gieriges Pruning erzeugt kürzeres HTML (§3.4.2).
6. Das verfeinerte HTML dem Reader-LLM zur Antwortgenerierung übergeben.

Die experimentellen Blockgranularitäten betragen 256 Wörter vor Embedding-Pruning und 128 vor generativem Pruning (§4.4). Der generative Pruner nutzt 2.635 automatisch erzeugte überwachte Beispiele mit 2K–32K Eingabelänge. Die Trainingskonstruktion verwendet Goldantwort-Matching und schließt Beispiele ohne passenden Block aus (§3.4.2); diese Auswahl begrenzt die Repräsentativität der Supervision.

Bereinigung, Blockaufbau, Pruning und Antwortgenerierung sind unterschiedliche Vorgänge. Obwohl HTML für den Reader erhalten bleibt, verwendet die erste Pruning-Stufe **Plain Text innerhalb der Blöcke für Embeddings**. Die Pipeline vermeidet Textrepräsentationen also nicht vollständig.

## HTML versus Plain-Text-Repräsentation

Plain-Text-Passagen werden als häufige Schnittstelle zwischen Retrieval und Generierung beschrieben (§§1–2). Laut Autoren kann Abflachen Überschriften, Tabellenorganisation, Coderollen und Linkinformationen verlieren (Abbildung 1). „HTML ist besser“ betrifft die untersuchten Repräsentationen, Kontextbudgets, Refiner und QA-Ergebnisse.

Kurzkontextvergleiche bewerten vollständige Pipelines einschließlich gelerntem Pruning. Der Langkontextvergleich ohne Pruning stellt Vanilla HTML, Beautiful-Soup-Plain-Text, Markdownify-Markdown und bereinigtes HTML direkter gegenüber; Konverterregeln und Tokenbudget bleiben relevant. Keiner der Vergleiche isoliert semantische HTML-Elemente gegenüber generischen `div`-Strukturen.

## Rolle der DOM-Struktur

Der DOM liefert Eltern-Kind-Beziehungen und Tagpfade. Der Block Tree fasst feingranulare Knoten zusammen, um Kosten zu senken und ausreichend Text für Relevanzschätzung bereitzustellen. Generative Bewertung identifiziert Blöcke über Pfade und Inhalte; Token-Tree-Inferenz nutzt gemeinsame Präfixe und überspringt deterministische Einzelkindschritte (§3.4.2).

Dies ist weder bloß Fixed-Size Chunking noch direktes Beschneiden eines unveränderten Browser-DOMs. Ausgangspunkt ist heruntergeladenes statisches HTML; die geparste und komprimierte Struktur wird vor der Bewertung transformiert. Die DOM-Tree-Ablation prüft die Gruppierungsentscheidung innerhalb dieser Pipeline, nicht den kausalen Effekt der ursprünglichen Website-Verschachtelungstiefe.

## Experimente und Datensätze

| Datensatz | Von den Autoren beschriebener Fragetyp    | Berichtete Metrik |
| --------- | ----------------------------------------- | ----------------- |
| ASQA      | Mehrdeutige Fragen mit mehreren Antworten | EM und Hit@1      |
| Hotpot-QA | Multi-Hop-Fragen                          | EM                |
| NQ        | Natürliche Nutzeranfragen                 | EM und Hit@1      |
| Trivia-QA | Wissensfragen                             | EM und Hit@1      |
| MuSiQue   | Zusammengesetzte Multi-Hop-Fragen         | EM                |
| ELI5      | Lange Antworten                           | ROUGE-L und BLEU  |

Abschnitt 4.1 berichtet **400 Fragen je Datensatz**, aus dem Testsplit, sofern vorhanden, sonst aus der Validierung. Retrieval erfolgt über **Bing Search API, US-EN**, gefolgt von statischen HTML-Downloads; dies ist kein SSR-/CSR-Crawlervergleich.

Kurzkontext-Reader sind Llama-3.1-8B-Instruct und Llama-3.1-70B-Instruct mit 4K-Kontexteinstellung. Baselines umfassen Chunking/Reranking mit BM25, BGE oder E5-Mistral sowie LongLLMLingua und JinaAI Reader (§§4.3–4.4). Der Bereinigungsvergleich verwendet Llama-3.1-70B-Instruct bei 128K (Tabelle 2). Ablationen untersuchen Block Trees und beide Pruning-Stufen; zusätzlich werden Granularität und Inferenzkosten analysiert (§4.6).

EM, das von den Autoren verwendete Hit@1 und lexikalische Überlappungsmaße sind unterschiedliche Ergebnisse. Hit@1 bedeutet hier, dass mindestens eine annotierte Kurzantwort in der Antwort übereinstimmt; es ist nicht als allgemeine Retrieval-Ranking-Metrik zu lesen.

## Hauptergebnisse laut Autoren

Die Autoren berichten günstige QA-Ergebnisse und kleinere Eingaben und führen Vorteile auf Strukturerhalt und zweistufiges Pruning zurück. Abschnitt 4.6.1 nennt **94,07 %** entfernte Tokens des ursprünglichen HTML durch Cleaning, gegenüber **96,71 %** bei Text- und **90,32 %** bei Markdown-Konvertierung. Dies beschreibt ihren Korpus, nicht beliebige Websites.

**Direkte Tabellenlektüre relativiert die Zusammenfassung.** Abschnitt 4.5 behauptet breit, das Verfahren erreiche oder übertreffe Baselines über die Metriken hinweg; einzelne Zellen zeigen Gegenbeispiele:

| Einstellung und Quelle | Ergebnis     | HtmlRAG-Variante    | Vergleich         |
| ---------------------- | ------------ | ------------------- | ----------------- |
| Tabelle 1, 70B, 4K     | Hotpot-QA EM | HtmlRAG: 46,25      | BGE: 41,75        |
| Tabelle 1, 70B, 4K     | ASQA EM      | HtmlRAG: 30,53      | BGE: 30,57        |
| Tabelle 1, 8B, 4K      | MuSiQue EM   | HtmlRAG: 8,75       | BGE: 10,00        |
| Tabelle 2, 70B, 128K   | Hotpot-QA EM | Ohne Pruning: 42,25 | Plain Text: 41,00 |
| Tabelle 2, 70B, 128K   | NQ EM        | Ohne Pruning: 43,65 | Plain Text: 44,11 |
| Tabelle 2, 70B, 128K   | ELI5 ROUGE-L | Ohne Pruning: 16,57 | Plain Text: 16,88 |

Scores werden in der berichteten Tabellenskala wiedergegeben, nicht als relative prozentuale Verbesserungen. Dies sind **publizierte Studienergebnisse, keine Projektmessungen**. Tabelle 3 berichtet in der geprüften Einstellung niedrigere Scores ohne Block-Tree-Gruppierung oder eine der Pruning-Stufen. Tabellenbeschriftungen markieren von den Autoren berichtete t-Tests bei p < 0,05; hier werden weder unabhängige Signifikanzanalyse noch Unsicherheitsschätzung ergänzt.

## Einschränkungen und Bewertung

**Von den Autoren diskutierte Verfahrensgrenzen:** HTML-Token-Overhead; schwache Embeddings feingranularer Blöcke; lange Eingaben und Rechenaufwand des generativen Pruners; Granularitätsabwägungen (§§3.4, 4.6).

**Projektbewertung:** Suchkorpus der englischen Region, ausgewählte QA-Aufgaben und Modelle, Konverter, Kontextlimits und Antwort-Matching-Supervision begrenzen die Übertragbarkeit. Statische Downloads belegen weder JavaScript-Rendering noch Live-Crawlerverhalten. End-to-End-QA isoliert weder Parserqualität noch ursprüngliche Retrieval-Qualität oder den kausalen Beitrag einzelner HTML-Beziehungen. Lexikalische Metriken belegen keine faktische Vollständigkeit oder Quellenstützung einzelner Aussagen.

Als „verlustfrei“ bezeichnetes Cleaning ist keine universelle Semantik-/Barrierefreiheitsgarantie. Aktueller Quellcode kann vom Paper abweichen; Reproduktionen müssen Daten-, Modell- und Codeversionen fixieren. Die beschriebene Abweichung zwischen Zusammenfassung und Tabellen muss sichtbar bleiben, statt zu universeller Überlegenheit vereinfacht zu werden.

Das Paper nennt öffentliche beziehungsweise Forschungsförderung in der Danksagung und die teilweise Arbeit während eines Praktikums bei Baichuan in einer Autorenanmerkung. Affiliation und Förderung belegen weder methodische Unabhängigkeit noch widerlegen sie Ergebnisse. Unabhängige Replikation und aussagenspezifische Biasbewertung bleiben offen.

## Relevanz für Frontend-Architekturforschung

**Projektinterpretation, kein ursprünglicher Paperbefund:** HTML-Beziehungen könnten nützlich sein, wenn nachgelagerte Verarbeitung sie bewahrt und nutzt. Dies motiviert die Untersuchung von Zwischenrepräsentationen zu [H-005](/de/04-hypotheses/h-005/), [H-006](/de/04-hypotheses/h-006/) und dem bereits vorgeschlagenen [EXP-004](/de/05-experiments/exp-004/).

Für solche Frontend-Aussagen ist die Übertragung **indirekt**; eine spätere aussagenspezifische Bewertung könnte Level C rechtfertigen. Dem Paper wird kein pauschales Evidenz-Level zugewiesen, und kein Hypothesenstatus ändert sich.

**Nicht nachgewiesen:** höhere Suchrankings für semantisches HTML, Crawlerpräferenz für HTML gegenüber Text, mehr KI-Zitationen für Websites mit semantischen Elementen oder automatische GEO/AEO-Verbesserung. Diese Notiz erzeugt weder Projekt-Finding noch Guideline oder abgeschlossenes Experiment.

## Zitierte Aussagen und Quellenstellen

- [§3.2](https://arxiv.org/html/2411.02959v2#S3.SS2): Bereinigung und strukturelle Kompression.
- [§§3.3–3.4](https://arxiv.org/html/2411.02959v2#S3.SS3): Block-Tree-Aufbau und Pruning.
- [§§4.1–4.4](https://arxiv.org/html/2411.02959v2#S4): Datensätze, Metriken, Baselines, Einstellungen.
- [Tabelle 1](https://arxiv.org/html/2411.02959v2#S3.T1), [Tabelle 2](https://arxiv.org/html/2411.02959v2#S4.T2), [Tabelle 3](https://arxiv.org/html/2411.02959v2#S4.T3): berichtete Ergebnisse und Ablationen.
- [§4.6](https://arxiv.org/html/2411.02959v2#S4.SS6): Bereinigungs-, Granularitäts- und Kostenanalysen.

## Bewertung und Anschlussfragen

1. Welche konkreten Überschriften-, Tabellen-, Link- oder Vorfahrenbeziehungen erklären einen möglichen Vorteil?
2. Würden gelabelter Text oder ein anderer Konverter dieselbe Information bewahren?
3. Bleibt ein Effekt bei gleichem Informationsumfang und gleichen Tokenbudgets bestehen?
4. Welche Effekte stammen von Repräsentation, welche von Training und Pruning?
5. Was ändert sich bei gerendertem DOM, dynamischen Inhalten, anderen Sprachen und aktuellen Modellen?
6. Können Antworten korrekt bleiben, während Evidenzauswahl oder Quellenstützung schlechter werden?

Verwandt: [HTML-Verarbeitung](/de/02-literature/html-content-processing/), [HTML vs. Plain Text](/de/02-literature/html-vs-plain-text/), [Literaturregister](/de/02-literature/) und [Paper-Notizvorlage](/de/03-notes/paper-notes/).
