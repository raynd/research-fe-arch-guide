# Project Changelog

Summary of changes since project initialization.

> **Source of this changelog.** Phases 1–7 below preceded the initial commit and were reconstructed from documented work history. The initial commit is now `899d7c9` (`Initial commit: bilingual research workspace`) on `main`, pushed to [raynd/research-fe-arch-guide](https://github.com/raynd/research-fe-arch-guide). Subsequent local changes can be compared against that baseline. No Git history was rewritten.

---

## HTML semantics and document structure glossary — 2026-11-04

- Extended both existing glossary pages with 47 new terms each: 87 entries across eight categories. Expanded Semantic HTML and Heading Hierarchy without duplicating entries; retained all existing term names and fragments.
- Added document/landmark distinctions, heading semantics, tabular and other content structures, and native HTML/ARIA relationships. Kept canonical English term headings aligned while localizing descriptions, examples, field labels, and supporting headings.
- Added an eight-element comparison, a complete illustrative table with caption and row/column `scope`, and the five-stage source HTML → rendered DOM → cleaning → text conversion → retrieval distinction. Linked existing literature, architecture/technical notes, and PAPER-001; explicitly separated established semantics from unverified retrieval, visibility, or citation effects.
- Checked primary WHATWG and W3C WAI/ARIA references, including contextual header/footer roles, table associations, and accessible naming. No new research pages, navigation/configuration changes, IDs, dependencies, lockfiles, README files, or research-status changes.
- Updated the project map's glossary description and corrected the earlier additions' Git baseline to pushed commit `afbdea2`. Page counts remain 70 per locale, 140 total.
- Validation: `pnpm run validate` passed Biome, Prettier, Astro/TypeScript (0 errors, warnings, hints), and the production build. Verified 87 unique matching EN/DE term fragments, all original glossary headings, all requested terminology and entry fields, 25 HTML snippets per language, and the complete table's header scopes. All 13,440 rendered internal documentation/fragment links across 140 pages resolve. All 55 newly introduced source URLs/fragments resolve across 18 primary-source documents; EN/DE source sets match. Existing build warnings remain: no custom 404 content entry and sitemap skipped without `SITE_URL`.

## HtmlRAG, HTML processing, and AI content discovery — 2026-11-04

- Inspected actual `main` at `27bfa28` and preserved the uncommitted glossary/navigation/terminology/report work. `pnpm-lock.yaml` is present and tracked; no lockfile discrepancy, removal, restoration, or dependency change.
- Added five Markdown research pages per locale: `02-literature/html-content-processing.md`, `02-literature/html-vs-plain-text.md`, `03-notes/crawlers-content-acquisition.md`, `03-notes/ai-search-provider-access.md`, and `03-notes/paper-notes/htmlrag.md`.
- Checked that `PAPER-001` was unused, then registered HtmlRAG in both literature registers and Paper Notes indexes. Verified bibliographic metadata against publisher-deposited Crossref data and arXiv; appraised full-text arXiv v2 methods/results, including table-level counterexamples to blanket superiority. Kept published results, project interpretation, transfer limits, and open questions separate.
- Added native localized AI Content Discovery and Paper Notes sidebar groups, at no more than three levels. Preserved existing Architecture, Journal, Templates, Reference, URLs, and research IDs; the existing Paper Notes URL remains the template/index.
- Used official provider documentation for purpose-specific bots, Google-Extended, search tools, external search APIs, attribution, and an authorized connected-source example. Recorded review date and unknown internals; llms.txt remains a proposal, not an implemented recommendation.
- Updated research-note indexes, dashboards, and evidence-matrix introductions to reflect a targeted source appraisal without claiming systematic synthesis, new project findings, completed experiments, supported hypotheses, or validated guidelines.
- Project map now lists 70 pages per locale, 140 source pages (116 Markdown, 24 Markdoc). No schema, UI component, custom JavaScript, README, lockfile, or hook change.
- Validation: `pnpm run validate` passed Biome, Prettier, Astro/TypeScript (0 errors, warnings, hints), and the production build (141 reported pages; 142 HTML files including the redirect). All 140 documentation sidebars contain 70 unique locale-specific links, exactly one correct active link, correct localized research groups, and no more than three levels. All 12,888 internal documentation/fragment references resolve; both Paper Notes indexes link PAPER-001. All eight cited HtmlRAG section/table fragments exist in the primary-source HTML, and the five EN/DE page pairs share source links, research IDs, and section counts. Existing documentation paths and hypothesis/experiment files remain unchanged. Existing build warnings remain: no custom 404 content entry and sitemap skipped without `SITE_URL`.

## Glossary addition — 2026-11-04

- Added one bilingual `13-reference/glossary.md` page with 40 essential entries across seven categories. Entry headings use English technical terms in both locales; definitions, explanations, relevance, German equivalents, and field labels are localized. Each entry links related terms and reference sources.
- Added the native localized `13 — Reference` / `13 — Referenz` sidebar group. Existing URLs and research IDs remain unchanged; templates, technical notes, and the literature register are linked rather than duplicated into empty reference pages.
- Made the glossary the central technical reference; existing foundation terminology pages retain measurement/evidence vocabulary and link to it.
- Distinguished training crawlers, search crawlers, user-triggered access, and Google-Extended's product control token using official provider documentation checked on 2026-11-04. Marked llms.txt as a proposal and GEO/AEO language as scoped terminology, not evidence of efficacy.
- Updated the project map to 65 pages per locale, 130 source pages (106 Markdown, 24 Markdoc). No dependency, schema, component, hook, or research-status changes.
- Validation: `pnpm run validate` passed Biome, Prettier, Astro/TypeScript (0 errors, warnings, hints), and the production build (131 reported pages; 132 HTML files including the root redirect). Both glossaries have 40 unique matching English term headings and rendered fragment IDs, all six entry fields, and localized Reference navigation. All 226 internal documentation/fragment links in the glossaries and foundation terminology pages resolve. Existing warnings remain: no custom 404 content entry and sitemap skipped without `SITE_URL`.

## Pre-glossary baseline (Git view)

| Status                            | Paths                                                                                                                                   |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Initial commit                    | `899d7c9` (`Initial commit: bilingual research workspace`)                                                                              |
| Baseline commit                   | `27bfa28` (`docs(workflow): document lightweight trunk-based development`); local `main` and `origin/main` matched before glossary work |
| Modified (tracked, not committed) | none at the start of glossary work                                                                                                      |
| Deleted (tracked, not committed)  | none                                                                                                                                    |
| Untracked (`??`)                  | none                                                                                                                                    |
| Ignored                           | `node_modules/`, `dist/`, `.astro/`, `.notes/`, `*.log`, `.DS_Store`                                                                    |

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
- The literature register and findings matrix are intentionally empty. All hypotheses and experiments are marked _Proposed_, evidence level D.

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

| File                    | Change since initialization                                                                                                                  |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `astro.config.mjs`      | `SITE_URL`-driven `site`; `/` → `/en/` redirect; EN/DE locales; localized title and sidebar group labels; layered `customCss` list (7 files) |
| `markdoc.config.mjs`    | `starlightMarkdoc()` preset; document/table node overrides; 12 project tags with attribute validation                                        |
| `src/content.config.ts` | `docs` + `i18n` collections; i18n schema extended with one project key                                                                       |

## Dependencies

The initial dependency set was:

- `astro`
- `@astrojs/starlight`
- `@astrojs/markdoc`
- `@astrojs/starlight-markdoc`
- dev: `@astrojs/check`, `typescript`

Initially, `package-lock.json` and `pnpm-lock.yaml` coexisted. The consolidation below resolves this.

## Package manager consolidation

Committed as `ca53748`. The local `origin/main` reference still points to `899d7c9`; no push was performed during this review.

- Removed `package-lock.json`; retained `pnpm-lock.yaml` as the only dependency lockfile.
- Pinned pnpm `11.25.0` via `packageManager` in `package.json`.
- Updated English/German setup instructions, architecture documentation and agent instructions to use pnpm.
- Preserved the vendored Google skill unchanged; project instructions select `pnpm dlx` for on-demand CLIs.

## Technical stabilization review — 2026-11-04

Committed as `39d3071`.

- Inspected both commits and the current working tree. The npm lockfile was already deleted by `ca53748`; inspected its initial-commit version without restoring or deleting any lockfile.
- Confirmed pnpm `11.25.0` as authoritative (`packageManager`, existing lockfile and documented commands). The historical npm lockfile and pnpm importer declare the same direct dependencies.
- `pnpm install --frozen-lockfile` succeeded without modifying the lockfile or adding dependencies. This verifies installation consistency in the existing environment, not a clean-room installation.
- Restored separate German H-001 sections for supporting literature and existing evidence, including the missing instruction to add verified paper IDs. This is translation/template alignment only; the hypothesis, ID, status and evidence level are unchanged.
- Replaced raw subgroup names with localized Starlight groups: Research Journal/Forschungstagebuch and Templates/Vorlagen. Sections 03 and 07 now list their direct pages explicitly; subgroup contents remain autogenerated. All 64 routes per locale remain in the sidebar.
- Reviewed the status legend: EN/DE meanings agree and remain scope-limited. No status definitions or scientific claims changed; researcher approval remains outstanding.
- Confirmed Starlight's own sitemap integration and `SITE_URL`-controlled canonical/alternate generation. No second generator, JSON-LD or `llms.txt` was added.
- `pnpm run check`: 0 errors, 0 warnings, 0 hints. Both builds succeeded (129 pages reported).
- Test-origin build (`https://research.example.org`, temporary only): 128 sitemap URLs, 256 sitemap language alternates; correct self-canonicals, EN/DE/x-default alternates and HTML language on all 128 documentation pages. No broken documentation links or fragment targets; canonical status/evidence attributes match between locales.
- Warnings: the built-in 404 has no content entry; without `SITE_URL`, sitemap generation is skipped. The test-origin build also exposes four unresolved canonical/alternate targets on the built-in 404 page (`/404/`, `/en/404/`, `/de/404/`, with the English alternate repeated for x-default). These are not documentation navigation failures.
- Rebuilt without `SITE_URL` after verification: no test origin persists in configuration or final output. No Python tooling or additional dependencies were installed.

## Third-level sidebar navigation — 2026-11-04

- Confirmed native Starlight nesting through recursive `items`; existing Journal/Templates already provided three levels.
- Added Architecture/Architektur under Research Notes/Forschungsnotizen, containing the existing Architecture Observations and Technical Notes pages. The hierarchy is main area → subsection → individual page, shared by both locales.
- `sectionItems` now accepts group objects alongside section-relative page names. Starlight handles nested lists, disclosures, indentation, active-link highlighting and mobile behavior. No custom navigation component, CSS, JavaScript or dependency was added.
- No documentation content, source path, URL or stable research ID changed.
- Changed files: `astro.config.mjs`, `PROJECT_MAP.md`, `PROJECT_CHANGELOG.md`. The separate pending `.gitignore` change was preserved.
- `pnpm run check`: 0 errors, 0 warnings, 0 hints. `pnpm run build`: succeeded (129 pages); existing warnings about the missing custom 404 content entry and unset `SITE_URL` remain.
- Verified all 128 generated documentation sidebars: 64 locale-specific links each, no duplicates or missing routes, and exactly one correct `aria-current="page"` link, including dashboard, direct pages and third-level pages.
- Browser verification using existing external Playwright and system Chrome, against a production preview: EN/DE at 1440, 390 and 320 px passed three-level nesting, translated ancestor labels, increasing indentation, active styling, open active ancestors, Enter/Space disclosure, Tab/Shift+Tab traversal and Enter link navigation. Mobile menu opens with Enter and closes with Escape; no horizontal page overflow.
- Browser checks cover Chrome desktop and mobile-sized viewports, not physical devices or a screen-reader audit. Preview and temporary test files were removed after verification.

## Repository README consolidation — 2026-11-04

- Removed `README.de.md` and its link from `README.md`; bilingual site documentation remains unchanged.
- Added Shields.io badges for the project start date, research planning phase and workspace development status.
- Clarified that experiments have not been executed and research recommendations remain provisional.

## Code quality and Conventional Commits — 2026-11-04

- Added pinned dev dependencies: Biome `2.6.4`, Husky `9.1.7`, lint-staged `17.6.0`, commitlint CLI/config-conventional `21.2.4`, Prettier `3.9.10` and prettier-plugin-astro `1.1.2`.
- Selected Biome 2.6.4 because 2.6.5 was too recent for the active pnpm release-age policy. Removed the automatically generated exceptions and regenerated the tooling lockfile without weakening that policy.
- Added `biome.json`, `.prettierrc.json`, `.prettierignore`, `commitlint.config.mjs` and Husky hooks. `prepare` installs hooks after dependency installation.
- Pre-commit uses lint-staged: Biome safely fixes staged JS/TS, JSON and CSS; Prettier formats staged Astro, Markdown/Markdoc and YAML. File ownership does not overlap.
- Commit-msg requires Conventional Commits. Pre-push runs the complete lint, formatting, Astro/TypeScript and build pipeline (`pnpm run validate`).
- Applied a mechanical formatting baseline and import organization. All 24 Markdoc source ASTs remain equivalent to HEAD after excluding source locations and list-marker spelling. No hypotheses, statuses, evidence classifications or application behavior intentionally changed.
- Kept the vendored Google skill, generated artifacts, lockfile formatting and local notes outside formatter ownership. Biome's duplicate-property rule has two line-specific suppressions for existing progressive CSS subgrid fallbacks.
- Updated README and agent instructions. Hook behavior was exercised in an isolated temporary Git repository, including valid commits, staged TS/Astro formatting and rejection of invalid commit messages and invalid TypeScript.
- Frozen-lockfile installation and the actual pre-push validation passed: Biome, Prettier, Astro check (0 errors/warnings/hints) and production build (129 pages). A failing lint check also blocked the isolated pre-push test. Existing 404-entry and unset-`SITE_URL` build warnings remain.
- Hooks are local and bypassable. CI, branch protection and a permanent test suite remain unconfigured.

## Dependency review and updates — 2026-11-04

- Reviewed all 13 direct dependencies against registry latest versions, Node engine requirements and peer ranges; inspected transitive packages with `pnpm outdated --depth Infinity`.
- Updated TypeScript from 5.9.3 to exact-pinned 6.0.3, the latest supported release. Registry latest 7.0.2 is outside `@astrojs/check`'s `^5.0.0 || ^6.0.0` and Volar's `<7` peer constraints, so it was not forced.
- Retained Biome 2.6.4: 2.6.5 is newer but still blocked by the active pnpm release-age policy. The other 11 direct dependencies already match their latest registry tags.
- Refreshed transitive resolution within declared ranges using `pnpm update --depth Infinity`; no dependency overrides or policy exceptions were introduced.
- Final strict-peer installation and frozen-lockfile installation passed. `pnpm run validate` passed Biome, Prettier, Astro/TypeScript (0 errors, warnings or hints) and the 129-page production build. pnpm audit reported no known vulnerabilities. Existing 404-entry and unset-site build warnings are unchanged.

## Lightweight trunk-based workflow — 2026-11-04

- Reviewed branches, repository configuration, pinned pnpm dependencies/lockfile, Husky hooks, lint-staged, commitlint, Biome, Prettier, validation scripts, ignore rules and documentation. `README.de.md` was previously removed; the single English README remains authoritative for repository instructions.
- Confirmed `main` as the only local/remote branch and GitHub default. GitHub reports no classic branch protection or effective rules on `main`; no Actions workflow exists. Remote configuration was not changed.
- Documented direct commits on `main` for small, coherent research-content, evidence, reference, guideline and translation updates. Larger architecture/components/navigation, substantial refactoring, experimental tooling and work benefiting from review use short-lived branches and PRs to `main`.
- Documented temporary `feature/...`, `experiment/...`, `refactor/...` and `fix/...` naming, fast-forward synchronization, Conventional Commits, paired EN/DE traceability, no force-push to shared `main`, and cleanup after merge. No permanent branches or mandatory PRs for routine content edits.
- Preserved all dependencies, scripts and hooks unchanged. No duplicate gate, branch-enforcement hook or CI workflow was added.
- Verified in an isolated temporary Git repository: valid direct commits on `main`; lint-staged ignores invalid unstaged files; partial staging preserves unstaged content while formatting the index; invalid commit messages and staged syntax errors are rejected; pre-push rejects invalid source.
- Frozen-lockfile installation succeeded. The actual pre-push hook passed Biome, Prettier, Astro/TypeScript (0 errors, warnings or hints) and the 129-page build. Existing build warnings remain: no custom 404 content entry, and sitemap skipped without `SITE_URL`. Temporary test repositories and scripts were removed.

## Known open items

- Trunk-based workflow documentation is committed and pushed as `27bfa28`; the glossary addition is subsequent work.
- `SITE_URL` (production origin) is not configured.
- The built-in 404 emits canonical/alternate targets that do not correspond to generated routes.
- The researcher still needs to review the status legend wording.
