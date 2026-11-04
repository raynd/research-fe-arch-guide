# Repository instructions

## Project context

This repository is a local-first Astro Starlight and Markdoc research workspace on how frontend architecture relates to machine readability, content extraction, retrieval, answerability, and citation behavior in generative search systems. Research pages are the source of truth; do not introduce a database or external CMS.

The documentation is bilingual: English is under `src/content/docs/en/` and German under `src/content/docs/de/`. Keep corresponding page paths, information architecture, scientific meaning, and research object IDs aligned. Preserve canonical IDs, statuses, and evidence levels across locales; localize only their displayed labels and prose.

## Research integrity

- Never invent papers, citations, results, metrics, or publication details.
- Distinguish published evidence, project observations, proposed hypotheses, and unverified assumptions.
- Do not describe a proposed or unexecuted experiment as completed or present unsupported recommendations as established findings.
- Preserve research claims and IDs when translating; use natural, technically accurate German.

## Implementation conventions

- Extend the existing Astro, Starlight, and Markdoc architecture; avoid unnecessary dependencies and unrelated refactors.
- Use Markdown for free-form notes and Markdoc for validated research objects. Keep shared Markdoc schemas language-independent.
- Keep internal links locale-prefixed (`/en/...` or `/de/...`) and update both language versions for user-facing documentation changes.
- For frontend UI, HTML, CSS, accessibility, performance, or client-side JavaScript work, consult the project skill `.github/skills/modern-web-guidance/SKILL.md` before implementation.
- Do not install or add the deferred Python research toolchain unless explicitly requested.

## Validation

Run `npm run check` for Astro and TypeScript diagnostics and `npm run build` for production-build validation when changes affect source or configuration. Report any checks that could not be run.
