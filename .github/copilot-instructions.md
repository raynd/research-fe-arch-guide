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

- Use pnpm exclusively. Keep `pnpm-lock.yaml` as the only dependency lockfile; use `pnpm dlx` for on-demand CLIs.

- Extend the existing Astro, Starlight, and Markdoc architecture; avoid unnecessary dependencies and unrelated refactors.
- Use Markdown for free-form notes and Markdoc for validated research objects. Keep shared Markdoc schemas language-independent.
- Keep internal links locale-prefixed (`/en/...` or `/de/...`) and update both language versions for user-facing documentation changes.
- For frontend UI, HTML, CSS, accessibility, performance, or client-side JavaScript work, consult the project skill `.github/skills/modern-web-guidance/SKILL.md` before implementation.
- Do not install or add the deferred Python research toolchain unless explicitly requested.

## Git workflow

- Use lightweight trunk-based development: `main` is the primary and normally active branch. Small, coherent research-content and translation changes may go directly to `main`; do not require a branch or PR for every content edit.
- Use short-lived `feature/...`, `experiment/...`, `refactor/...` or `fix/...` branches and PRs targeting `main` for larger architectural changes, new components/navigation, substantial refactoring, experimental tooling or changes benefiting from review. Do not introduce permanent `develop` or `release` branches.
- Preserve the existing pnpm/Husky quality gates on every branch. Use Conventional Commits, stage relevant files only, preserve bilingual research traceability, and never force-push shared `main`.

## Validation

Use Conventional Commits for new commit messages. Run `pnpm run validate` for Biome, Prettier, Astro/TypeScript diagnostics and production-build validation. Biome owns JS/TS, JSON and CSS formatting; Prettier owns Astro, Markdown/Markdoc and YAML. Do not format the vendored Google skill or generated files. Report any checks that could not be run.
