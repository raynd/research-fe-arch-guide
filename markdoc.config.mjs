import { component, defineMarkdocConfig, Markdoc, nodes } from '@astrojs/markdoc/config';
import starlightMarkdoc from '@astrojs/starlight-markdoc';

const { Tag } = Markdoc;

/** Wraps children in a single semantic element without an extra component. */
const element = (name, className) => ({
  transform(node, config) {
    return new Tag(name, className ? { class: className } : {}, node.transformChildren(config));
  },
});

const textOf = (node) =>
  typeof node === 'string' ? node : Tag.isTag(node) ? node.children.map(textOf).join('') : '';

/**
 * Adds `scope` to column headers, promotes the first cell of each body row to a row header,
 * and copies the column header text to `data-label` for the narrow, stacked table layout.
 */
function addTableHeaderSemantics(sections) {
  const head = sections.find((section) => Tag.isTag(section) && section.name === 'thead');
  const labels = (head?.children.find(Tag.isTag)?.children ?? []).map((cell) =>
    textOf(cell).trim(),
  );
  for (const section of sections) {
    if (!Tag.isTag(section)) continue;
    for (const row of section.children) {
      if (!Tag.isTag(row)) continue;
      row.children.filter(Tag.isTag).forEach((cell, index) => {
        if (section.name === 'thead') {
          cell.attributes.scope = 'col';
          return;
        }
        if (index === 0) {
          cell.name = 'th';
          cell.attributes.scope = 'row';
        } else if (labels[index]) {
          cell.attributes['data-label'] = labels[index];
        }
      });
    }
  }
  return sections;
}

export default defineMarkdocConfig({
  extends: [starlightMarkdoc()],
  nodes: {
    // Starlight's <main> already wraps the page; Markdoc's default <article> would exclude the page <h1>.
    document: { ...nodes.document, render: null },
    table: {
      ...nodes.table,
      attributes: { ...nodes.table.attributes, caption: { type: String } },
      transform(node, config) {
        const { caption, ...attributes } = node.transformAttributes(config);
        const sections = addTableHeaderSemantics(node.transformChildren(config));
        return new Tag(
          'table',
          attributes,
          caption ? [new Tag('caption', {}, [caption]), ...sections] : sections,
        );
      },
    },
  },
  tags: {
    hero: element('header', 'research-hero'),
    section: element('section'),
    nav: {
      render: 'nav',
      attributes: {
        labelledby: { type: String, required: true, render: 'aria-labelledby' },
      },
    },
    time: {
      render: 'time',
      inline: true,
      attributes: {
        datetime: { type: String, required: true, matches: /^\d{4}-\d{2}-\d{2}$/ },
      },
    },
    progress: {
      render: 'progress',
      inline: true,
      selfClosing: true,
      attributes: {
        value: { type: Number, required: true },
        max: { type: Number, required: true },
        label: { type: String, required: true, render: 'aria-label' },
      },
    },
    terms: {
      transform(node, config) {
        // Term tags written on consecutive lines are parsed as one paragraph; a <dl> may only hold <dt>/<dd>.
        const items = node
          .transformChildren(config)
          .flatMap((child) => (Tag.isTag(child) && child.name === 'p' ? child.children : [child]))
          .filter((child) => Tag.isTag(child) && ['dt', 'dd'].includes(child.name));
        return new Tag('dl', { class: 'research-terms' }, items);
      },
    },
    term: {
      attributes: { name: { type: String, required: true } },
      transform(node, config) {
        return [
          new Tag('dt', {}, [node.attributes.name]),
          new Tag('dd', {}, node.transformChildren(config)),
        ];
      },
    },
    toggletip: {
      render: component('./src/components/Toggletip.astro'),
      attributes: {
        id: { type: String, required: true, matches: /^[a-z][a-z0-9-]*$/ },
        label: { type: String, required: true },
      },
    },
    'research-cards': {
      render: component('./src/components/ResearchCardGrid.astro'),
    },
    'research-card': {
      render: component('./src/components/ResearchCard.astro'),
      attributes: {
        title: { type: String, required: true },
        lead: { type: String },
      },
      validate(node) {
        if (node.children.length === 1) return [];
        return [
          {
            id: 'research-card-content',
            level: 'error',
            message:
              'A research-card needs exactly one content element (one paragraph, list, or table) so it fits its subgrid track.',
          },
        ];
      },
    },
    evidence: {
      render: component('./src/components/EvidenceBadge.astro'),
      attributes: {
        level: {
          type: String,
          required: true,
          enum: ['A', 'B', 'C', 'D'],
        },
        label: { type: String },
      },
    },
    'research-status': {
      render: component('./src/components/StatusBadge.astro'),
      attributes: {
        value: {
          type: String,
          required: true,
          enum: ['Proposed', 'Under Investigation', 'Supported', 'Rejected', 'Inconclusive'],
        },
        label: { type: String },
      },
    },
  },
});
