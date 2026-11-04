import markdoc from '@astrojs/markdoc';
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

const sections = [
  ['01-foundation', '01 — Research Foundation', '01 — Forschungsgrundlagen'],
  ['02-literature', '02 — Literature Review', '02 — Literaturrecherche'],
  ['03-notes', '03 — Research Notes', '03 — Forschungsnotizen'],
  ['04-hypotheses', '04 — Hypotheses', '04 — Hypothesen'],
  ['05-experiments', '05 — Experiments', '05 — Experimente'],
  ['06-evidence', '06 — Findings & Evidence', '06 — Erkenntnisse & Evidenz'],
  [
    '07-guidelines',
    '07 — Frontend Architecture Guidelines',
    '07 — Frontend-Architektur-Leitlinien',
  ],
  ['13-reference', '13 — Reference', '13 — Referenz'],
];

const sectionItems = {
  '03-notes': [
    'index',
    {
      label: 'Architecture',
      translations: { de: 'Architektur' },
      items: ['03-notes/architecture-observations', '03-notes/technical-notes'],
    },
    {
      label: 'AI Content Discovery',
      translations: { de: 'KI-Inhaltserschließung' },
      items: ['03-notes/crawlers-content-acquisition', '03-notes/ai-search-provider-access'],
    },
    {
      label: 'Paper Notes',
      translations: { de: 'Paper-Notizen' },
      items: ['03-notes/paper-notes', '03-notes/paper-notes/htmlrag'],
    },
    'ideas-questions',
    'meeting-notes',
    'research-journal',
  ],
  '07-guidelines': [
    'index',
    'accessibility',
    'content-architecture',
    'entities',
    'extractability',
    'performance',
    'rendering',
    'semantics-dom',
    'structured-data',
    'validation',
  ],
};

const subgroups = {
  '03-notes': [
    ['research-journal', 'Research Journal', 'Forschungstagebuch'],
    ['templates', 'Templates', 'Vorlagen'],
  ],
  '07-guidelines': [['templates', 'Templates', 'Vorlagen']],
};

export default defineConfig({
  site: process.env.SITE_URL,
  redirects: {
    '/': '/en/',
  },
  integrations: [
    markdoc(),
    starlight({
      title: {
        en: 'Frontend Architecture for GEO & AEO',
        de: 'Frontend-Architektur für GEO & AEO',
      },
      description:
        'An evidence-led research workspace on frontend architecture and generative search.',
      defaultLocale: 'en',
      locales: {
        en: { label: 'English' },
        de: { label: 'Deutsch' },
      },
      customCss: [
        './src/styles/layers.css',
        './src/styles/custom.css',
        './src/styles/components/badge.css',
        './src/styles/components/dashboard.css',
        './src/styles/components/data-table.css',
        './src/styles/components/research-card.css',
        './src/styles/components/toggletip.css',
      ],
      sidebar: [
        {
          slug: 'index',
          label: '00 — Research Dashboard',
          translations: { de: '00 — Forschungs-Dashboard' },
        },
        ...sections.map(([directory, label, germanLabel]) => ({
          label,
          translations: { de: germanLabel },
          items: sectionItems[directory]
            ? [
                ...sectionItems[directory].map((page) =>
                  typeof page === 'string'
                    ? { slug: page === 'index' ? directory : `${directory}/${page}` }
                    : page,
                ),
                ...subgroups[directory].map(([subdirectory, label, germanLabel]) => ({
                  label,
                  translations: { de: germanLabel },
                  items: [{ autogenerate: { directory: `${directory}/${subdirectory}` } }],
                })),
              ]
            : [{ autogenerate: { directory } }],
        })),
      ],
    }),
  ],
});
