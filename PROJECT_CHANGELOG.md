# Project Changelog

Summary of changes since project initialization.

> **Source of this changelog.** Phases 1–7 below preceded the initial commit and were reconstructed from documented work history. The initial commit is now `899d7c9` (`Initial commit: bilingual research workspace`) on `main`, pushed to [raynd/research-fe-arch-guide](https://github.com/raynd/research-fe-arch-guide). Subsequent local changes can be compared against that baseline. No Git history was rewritten.

---

## Current working tree (Git view)

| Status | Paths |
|---|---|
| Baseline | `899d7c9` on `main`; local `origin/main` matches the initial commit |
| Modified (tracked, not committed) | `.github/agents/frontend-research-architect.agent.md`, `.github/copilot-instructions.md`, `PROJECT_MAP.md`, `PROJECT_CHANGELOG.md`, `README.md`, `README.de.md`, `package.json` |
| Deleted (tracked, not committed) | `package-lock.json` |
| Untracked (`??`) | `.notes/` (not part of these changes; left untouched) |
| Ignored | `node_modules/`, `dist/`, `.astro/`, `*.log`, `.DS_Store` |

---

## Phase 1 — Initial research workspace

**Added**

- Astro 7.4.5 + Starlight 0.42.8 + `@astrojs/markdoc` 2.1.2 + `@astrojs/starlight-markdoc` 0.7.0 project (`package.json`, `astro.config.mjs`, `markdoc.config.mjs`, `tsconfig.json`, `src/content.config.ts`).
- Information architecture `00`–`07`:
  - dashboard
  - research foundation
  - literature review
  - research notes, including a dated journal and template
  - hypotheses H-001–H-006
  - experiments EXP-001–EXP-004
  - findings & evidence
  - frontend architecture guidelines, including a guideline template
- Components `StatusBadge.astro`, `EvidenceBadge.astro`, and an initial dashboard component (later removed).
- `public/favicon.svg`.
- The literature register and findings matrix are intentionally empty. All hypotheses and experiments are marked *Proposed*, evidence level D.

**Dev dependencies:** `@astrojs/check`, `typescript`.

## Phase 2 — English/German internationalization

**Changed structure**

- Moved the English content to `src/content/docs/en/` and added a full German mirror under `src/content/docs/de/` (same relative paths, stable IDs).

**Configuration**

- `defaultLocale: 'en'` with `en`/`de` locales.
- Localized site title.
- German sidebar group labels.
- `site: process.env.SITE_URL`, which enables canonical URLs, `hreflang` and the sitemap only when the variable is set.

**Added**

- `src/content/i18n/en.json` and `de.json`.
- `README.de.md`.

**Unchanged by design:** research IDs, statuses and evidence levels. German pages pass localized `label`s to the shared Markdoc schemas.

## Phase 3 — Research strategy enhancements (EN + DE)

**Changed**

- Methodology: scoping-review protocol, causal chain, randomization, analysis rigor.
- Approach: lifecycle stage gates and the ID scheme `PAPER/HYP/EXP/FIND/FE-###`.
- Research questions: operationalization table; RQ5 framed as a synthesis question.
- Metrics.
- EXP-001–EXP-004: isolated contrasts, parity checks, candidate primary outcomes.
- Evidence index and matrix columns, the guideline template, the dashboard next steps and the experiments index.

**Added (paired EN/DE)**

- `01-foundation/literature-search.md`: draft protocol, marked as not yet run.
- `05-experiments/analysis-plan.md`: pre-registration-style analysis plan.

**Not changed:** hypothesis statements and evidence classifications. No citations or results were added.

## Phase 4 — AI agent guidance

**Added**

- `.github/skills/modern-web-guidance/`:
  - Google Modern Web Guidance `SKILL.md` and Apache-2.0 `LICENSE`, vendored unmodified at commit `341268561baaff256927c931ec8215dbd30e3cee`
  - `UPSTREAM.md` attribution
- `.github/copilot-instructions.md`: always-on repository rules.
- `.github/agents/frontend-research-architect.agent.md`: selectable custom agent.
- README sections (EN/DE) on the skill, telemetry opt-out and agent setup.

No project dependency was added; the skill's CLI is fetched on demand. Current project instructions use `pnpm dlx`.

## Phase 5 — Reusable grid/subgrid research cards

**Added**

- `src/components/ResearchCard.astro`
- `src/components/ResearchCardGrid.astro`
- `src/styles/layers.css`, which declares the cascade layer order
- `src/styles/components/research-card.css`

**Removed**

- `DashboardCard.astro` and `DashboardGrid.astro`
- The interim JavaScript "Show more" line-clamp toggle

**Changed**

- Design tokens moved into the `research.tokens` layer.
- The Markdoc tag `research-cards` was introduced.
- Redirect `/` → `/en/` added to `astro.config.mjs`.

## Phase 6 — Semantic, accessible dashboard

**Changed `markdoc.config.mjs`**

- Removed the default `<article>` document wrapper.
- Table node: `caption`, `scope`, row headers and `data-label`.
- New tags: `hero`, `section`, `nav`, `time`, `progress`, `terms`/`term`, `toggletip`, `research-card` validation.
- Removed the `dashboard` tag.

**Added**

- `src/components/Toggletip.astro` (Popover API).
- `src/styles/components/{badge,dashboard,data-table,toggletip}.css`.
- i18n key `research.popover.close`, with the `i18nSchema` extension in `src/content.config.ts`.

**Changed content**

- `en/index.mdoc` and `de/index.mdoc` were rewritten with structurally identical semantic markup.
- New status legend definitions in EN/DE. These need review by the researcher.

**Removed:** `src/components/ResearchDashboard.astro`.

**Fixed:** centred the main content next to the table of contents (`--sl-content-margin-inline: auto` in `custom.css`).

## Phase 7 — Architecture documentation

**Added:** `PROJECT_MAP.md` and `PROJECT_CHANGELOG.md`. No application code was changed.

---

## Summary of major configuration changes

| File | Change since initialization |
|---|---|
| `astro.config.mjs` | `SITE_URL`-driven `site`; `/` → `/en/` redirect; EN/DE locales; localized title and sidebar group labels; layered `customCss` list (7 files) |
| `markdoc.config.mjs` | `starlightMarkdoc()` preset; document/table node overrides; 12 project tags with attribute validation |
| `src/content.config.ts` | `docs` + `i18n` collections; i18n schema extended with one project key |

## Dependencies

There were **no new dependencies after initialization**. The dependency set is the initial one:

- `astro`
- `@astrojs/starlight`
- `@astrojs/markdoc`
- `@astrojs/starlight-markdoc`
- dev: `@astrojs/check`, `typescript`

Initially, `package-lock.json` and `pnpm-lock.yaml` coexisted. The consolidation below resolves this.

## Package manager consolidation

These changes are local and have not yet been committed or pushed.

- Removed `package-lock.json`; retained `pnpm-lock.yaml` as the only dependency lockfile.
- Pinned pnpm `11.25.0` via `packageManager` in `package.json`.
- Updated English/German setup instructions, architecture documentation and agent instructions to use pnpm.
- Preserved the vendored Google skill unchanged; project instructions select `pnpm dlx` for on-demand CLIs.

## Known open items

- The pnpm consolidation and documentation updates have not yet been committed or pushed.
- `SITE_URL` (production origin) is not configured.
- `de/04-hypotheses/h-001.mdoc` merges two template sections that are separate in English.
- Sidebar sub-groups `research-journal` and `templates` are not localized.
- The researcher still needs to review the status legend wording.
