# Frontend-Architektur für GEO & AEO

Ein lokal verfügbarer, zweisprachiger Forschungsbereich (Englisch/Deutsch) zur Untersuchung, wie Frontend-Architektur die maschinelle Lesbarkeit, Inhaltsextraktion, den Informationsabruf, die Antwortqualität und das Zitierverhalten in generativen Suchsystemen beeinflusst.

## Lokal starten

Voraussetzungen sind Node.js `>=22.23.4` und pnpm `11.25.0` (in `package.json` festgelegt).

Ausschließlich pnpm verwenden; `pnpm-lock.yaml` ist die maßgebliche Lockdatei.

```sh
pnpm install
pnpm run dev
```

Produktionsbuild und Vorschau:

```sh
pnpm run build
pnpm run preview
```

## Forschungsablauf und Lokalisierung

Die Markdown- und Markdoc-Dateien in `src/content/docs/` sind die maßgebliche Datenquelle. Englisch ist die Standardsprache unter `/en/`, Deutsch ist unter `/de/` erreichbar. Der eingebaute Starlight-Sprachumschalter navigiert zur entsprechenden Übersetzung, sofern sie existiert. Fehlt eine Übersetzung, stellt Starlight den englischen Inhalt mit einem sichtbaren Hinweis bereit.

Englische Seiten liegen in `src/content/docs/en/`; die deutsche Entsprechung erhält denselben relativen Dateipfad unter `src/content/docs/de/`. Bestehende IDs (`H-001`–`H-006` und `EXP-001`–`EXP-004`) bleiben erhalten. Neue Objekte verwenden `PAPER-###`, `HYP-###`, `EXP-###`, `FIND-###` und `FE-###`; IDs, Statuswerte und Evidenzklassifikationen bleiben sprachübergreifend gleich. Im deutschen Markdoc-Inhalt werden sichtbare Labels übersetzt, nicht aber die validierten kanonischen Werte.

Das Literaturregister und die Evidenzmatrix bleiben leer, bis Quellen oder Ergebnisse verifiziert sind. Ausgangshypothesen und Experimentdesigns sind Vorschläge, keine Erkenntnisse. Es werden keine Forschungsergebnisse erfunden.

## Neue Seiten und Forschungsobjekte

1. Englische Seite als `.md` (freie Notiz) oder `.mdoc` (strukturiertes Objekt) unter `src/content/docs/en/` ergänzen.
2. Inhalt in natürliches, technisch präzises Deutsch übersetzen und unter demselben relativen Pfad in `src/content/docs/de/` ablegen.
3. Forschungs-IDs wie `PAPER-###`, `HYP-###`, `EXP-###`, `FIND-###` und `FE-###` in beiden Sprachfassungen identisch halten; bestehende IDs unverändert beibehalten.
4. Für deutsche Markdoc-Badges `value="Proposed"` und `level="D"` beibehalten, aber mit `label="Vorgeschlagen"` beziehungsweise `label="Evidenz-Level D"` lokalisieren.
5. Interne Links mit dem Sprachpräfix der jeweiligen Seite versehen (`/en/...` beziehungsweise `/de/...`) und `pnpm run check` sowie `pnpm run build` ausführen.

Es gibt eine gemeinsame `markdoc.config.mjs` mit sprachunabhängigen Validierungsschemas. Die Sidebar wird je Abschnitt automatisch aus den lokalisierten Seitentiteln erzeugt; Gruppenbezeichnungen und Starlight-Oberflächentexte sind übersetzt.

## Agent-Skill für moderne Frontend-Entwicklung

Das Projekt enthält Googles [Modern Web Guidance](https://github.com/GoogleChrome/modern-web-guidance) als GitHub-Copilot-Projekt-Skill unter `.github/skills/modern-web-guidance/`. Er weist Agents an, bei passenden Änderungen an HTML, CSS, Accessibility, Performance und clientseitigem JavaScript aktuelle Browser-Platform-Empfehlungen abzurufen. Dafür wird Googles veröffentlichte CLI bei Bedarf verwendet; dem Projekt wird keine Abhängigkeit hinzugefügt. Quellrevision, Attribution und Lizenz sind beim Skill dokumentiert.

Die CLI kann anonyme Nutzungsdaten – darunter Guide-IDs und generierte Suchanfragen – an Google senden. Zum Deaktivieren für eine Shell-Sitzung vor dem CLI-Aufruf `DISABLE_TELEMETRY=1` setzen.

## SEO und Deployment

Beim Produktionsbuild `SITE_URL` auf den kanonischen Ursprung setzen, zum Beispiel:

```sh
SITE_URL=https://research.example.org pnpm run build
```

Starlight erstellt dann absolute kanonische URLs und `hreflang`-Alternativen; die Sitemap verwendet denselben Astro-`site`-Wert. Für lokale Entwicklung wird kein Deployment-Hostname vorgegeben.

Die Python-basierte Experiment-Toolchain (möglicherweise Python, PyTorch, BeautifulSoup und Playwright) folgt in einer späteren Forschungsphase. Diese Tools oder Python-Infrastruktur sind noch nicht installiert.

## KI-Agenten-Konfiguration

Die dauerhaft geltenden GitHub-Copilot-Projektregeln stehen in `.github/copilot-instructions.md`. Für gezielte Aufgaben in diesem Forschungsbereich im Copilot-Agentenmenü **Frontend Research Architect** auswählen; das Profil liegt unter `.github/agents/frontend-research-architect.agent.md`. Es baut auf dem Google-Modern-Web-Guidance-Skill unter `.github/skills/modern-web-guidance/` auf, statt dessen Inhalte zu duplizieren. Eine separate Prompt-Datei ist für diese dauerhafte Projektrolle nicht nötig; `.github/prompts/*.prompt.md` eignet sich für wiederverwendbare, explizit aufrufbare Aufgaben-Prompts.

## Technischer Stack

- Astro `7.4.5`
- Astro Starlight `0.42.8`
- `@astrojs/markdoc` `2.1.2`
- Starlight Markdoc Preset `0.7.0`
- TypeScript

Offizielle Dokumentation: [Astro Markdoc](https://docs.astro.build/en/guides/integrations-guide/markdoc/), [Starlight Internationalisierung](https://starlight.astro.build/guides/i18n/), [Starlight Markdoc](https://starlight.astro.build/guides/authoring-content/#markdoc).
