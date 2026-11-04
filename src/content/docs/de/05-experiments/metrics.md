---
title: Metriken und Evaluation
description: Mögliche Messgrößen und Schutzmaßnahmen für die Evaluation.
---

Metriken müssen zur jeweiligen Forschungsfrage passen. Die folgenden Vorschläge sind noch kein endgültiges Protokoll.

| Ergebnis | Mögliche Metriken | Zu beachtender Aspekt |
|---|---|---|
| Inhaltsverfügbarkeit | Zielfakten im initialen HTML und gerenderten Ergebnis; Zähler/Nenner und Stufe berichten | Verfügbarkeit belegt weder Indexierung noch Verwendung. |
| Extraktion | Precision/Recall/F1 für Felder; Text- oder Strukturvollständigkeit gegenüber annotierter Referenz | Felder, Normalisierung, Matching-Regeln und Exaktheitstoleranz festlegen. |
| Strukturelle Interpretation | Genauigkeit der Abschnitts- oder Überschriftenzuordnung | Einheit und Annotationsraster festlegen; Schlichtung und Übereinstimmung berichten. |
| Retrieval | Recall@k, Precision@k, MRR, nDCG, sofern geeignet | Relevante Einheiten, Queries, Korpus, k und Gleichstände festlegen. |
| Antwortqualität | Bewertungsraster für Korrektheit, Vollständigkeit und Faithfulness | Dimensionen getrennt bewerten; Raster, verblindete Prüfung und Übereinstimmung berichten. |
| Zitierverhalten | Zitierabdeckung, aussagenbezogene Beleggenauigkeit und Attributionspräzision | Eine zitierte URL stützt die Aussage nicht automatisch; auf Aussageebene bewerten. |
| Technische Qualität | Validierung, Barrierefreiheit, Performance und Fehlermessungen | Belegt allein keine GEO-/AEO-Wirkung. |

Für jede Metrik Formel, Einheit, Nenner, gewünschte Richtung, Aggregation, Annotation und Umgang mit fehlenden Werten/Fehlern festlegen. Ergebnisse zunächst je Inhalt/Query und Prozessstufe berichten. Stichprobe, Baselines, Wiederholungen, Unsicherheit, Mehrfachtests und Interpretationsschwellen vor Durchführung im [Analyseplan](/de/05-experiments/analysis-plan/) dokumentieren. Zusammengesetzte Scores nur mit Begründung und vorab festgelegter Konstruktion verwenden.
