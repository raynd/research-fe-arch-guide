---
title: Versuchsdesign
description: Gemeinsame Anforderungen an kontrollierte Frontend-Forschungsversuche.
---

## Grundsätze des Designs

- Ziel, Forschungsfrage und Hypothese vor der Durchführung angeben.
- Unabhängige, abhängige und kontrollierte Variablen ausdrücklich benennen.
- Quellinhalte zwischen Varianten konstant halten, außer bei der untersuchten Variable.
- Test-Queries, Ground Truth, Annotationsregeln, Metriken und Auswertung vorab festlegen.
- Bei Bedarf HTML der ersten Antwort, gerendertes DOM und Zwischenstände der Pipeline erfassen.
- Durchläufe bei nichtdeterministischen Systemen oder Messungen wiederholen und Streuung berichten.
- Rohdaten sichern und Abweichungen vom Protokoll dokumentieren.

## Checkliste zur Designprüfung

- Lässt sich die Änderung zwischen Varianten isolieren?
- Sind Zielsystem, Version/Konfiguration und Beobachtungsstufe bekannt?
- Passen Ergebnismessungen zur geprüften Aussage?
- Sind Baseline sowie mögliche Null-/Negativergebnisse festgelegt?
- Sind Stichprobengröße, Query-Auswahl und Einschränkungen menschlicher Annotation berücksichtigt?
- Ist das Design durchführbar und mit den Nutzungsbedingungen vereinbar?

Konkrete Versuchsprotokolle sind bis zu Prüfung und Pilotierung Vorschläge.
