---
title: Glossar / Kompaktwissen
description: Fachbegriffe zu HTML-Semantik, Dokumentstruktur, Barrierefreiheit, Inhaltsbeschaffung, Extraktion und RAG.
---

Diese Referenz erklärt Begriffe; sie ist **kein Beleg dafür, dass eine Implementierung GEO/AEO verbessert**. Die englischen Fachbegriffe bleiben in beiden Sprachen die Eintragsnamen. Anbieterbeschreibungen fassen öffentliche Dokumentation zusammen, geprüft am **2026-11-04**; sie beschreiben weder unabhängig beobachtetes Verhalten noch unbekannte interne Abläufe.

## Nutzung und Erweiterung

Das Startvokabular priorisiert Inhaltsverfügbarkeit, Repräsentation, Retrieval und Antwortprovenienz. Alle Einträge folgen demselben Format: **englischer Fachbegriff** als Überschrift, **deutscher Begriff**, **Kurzdefinition**, **Erklärung**, **Forschungsrelevanz**, **verwandte Begriffe** und **Referenzen**. Der umgebende Abschnitt legt die **Kategorie** fest. Deutsche Entsprechungen dienen der Erklärung und sind keine neu eingeführten Standards. Identische Begriffsüberschriften halten die Sprungmarken beider Sprachversionen konsistent.

HTML-Einträge ergänzen bei Bedarf **semantische Bedeutung**, **Barrierefreiheitsrelevanz** und kleine **HTML-Beispiele**. Die Beispiele veranschaulichen Markup, keine gemessenen Forschungsergebnisse. Element- und Rollendefinitionen folgen WHATWG und W3C; die Quellen dieser Erweiterung wurden am **2026-11-04** geprüft.

Begriffe lassen sich über das Seiteninhaltsverzeichnis oder die Suche finden. Neue Einträge zunächst hier ergänzen; erst aufteilen, wenn die Seite zu unübersichtlich wird. Mehrdeutige Begriffe werden ausdrücklich für dieses Projekt eingegrenzt. Anbieterdokumentation und Implementierungsbeispiele sind keine universellen Spezifikationen.

Vertiefung: [Literaturrecherche](/de/02-literature/), [Architekturbeobachtungen](/de/03-notes/architecture-observations/), [technische Notizen](/de/03-notes/technical-notes/), [Experimente](/de/05-experiments/), [Evidenz](/de/06-evidence/) und [Leitlinien](/de/07-guidelines/).

## HTML-Semantik und Dokumentstruktur

Einstieg über [Dokumentstruktur](#html-document-structure), [Elementvergleich](#semantischer-elementvergleich), [Überschriften](#heading-hierarchy), [Tabellensemantik](#beispiel-zur-html-tabellensemantik) oder [Barrierefreiheit](#accessibility-tree). Die folgenden Einträge gehören zu dieser Kategorie; verwandte Konzepte werden verlinkt statt doppelt definiert.

### Semantic HTML

- **Deutscher Begriff:** Semantisches HTML.
- **Kurzdefinition:** HTML, das Elemente und Attribute entsprechend ihrer definierten Bedeutung statt nur nach ihrer visuellen Darstellung einsetzt.
- **Erklärung:** Ein Überschriftenelement kennzeichnet eine Überschrift; groß formatierter Text allein tut dies nicht.
- **Semantische Bedeutung:** Elementtypen und Attribute beschreiben Inhaltszweck und Beziehungen unabhängig vom CSS-Layout.
- **Barrierefreiheitsrelevanz:** Native Elemente liefern Semantik, die Browser über Accessibility-APIs bereitstellen können; nicht jedes semantische Element ist eine Landmark.
- **Forschungsrelevanz:** Definiert den Markup-Kontrast in [H-001](/de/04-hypotheses/h-001/); Vorteile für die Extraktion müssen noch untersucht werden.
- **Verwandte Begriffe:** [DOM](#dom-document-object-model), [Heading Hierarchy](#heading-hierarchy).
- **Referenzen:** [WHATWG: Semantik](https://html.spec.whatwg.org/multipage/dom.html#semantics-2), [MDN-Erklärung](https://developer.mozilla.org/en-US/docs/Glossary/Semantics).

### DOM (Document Object Model)

- **Deutscher Begriff:** Dokumentobjektmodell.
- **Kurzdefinition:** Dokumentmodell und API, die ein Dokument als Baum aus Knoten darstellen, darunter Elemente, Text und Kommentare.
- **Erklärung:** Der DOM Tree ist die Knotenhierarchie, nicht die ursprüngliche HTML-Zeichenfolge. Browserskripte können ihn nach dem Parsing verändern; auch Parser außerhalb des Browsers können DOMs erzeugen.
- **Forschungsrelevanz:** [H-002](/de/04-hypotheses/h-002/) untersucht Hierarchien; festhalten, ob Quell-HTML oder der DOM nach Skriptausführung betrachtet wird.
- **Verwandte Begriffe:** [HTML Parsing](#html-parsing), [Content Representation](#content-representation).
- **Referenzen:** [MDN: DOM](https://developer.mozilla.org/en-US/docs/Glossary/DOM).

### Heading Hierarchy

- **Deutscher Begriff:** Überschriftenhierarchie.
- **Kurzdefinition:** Gliederung von Überschriften nach Rang, in HTML durch `h1`–`h6` ausgedrückt.
- **Erklärung:** Der Rang beschreibt Abschnittsbeziehungen, nicht die Schriftgröße. Er ist nicht mit der DOM-Verschachtelungstiefe gleichzusetzen.
- **Semantische Bedeutung:** Ränge ordnen Themen und Unterthemen; ein verschachteltes `section` macht aus einem `h1` nicht automatisch ein `h2`.
- **Barrierefreiheitsrelevanz:** Screenreader können Überschriftenlisten zur Navigation anbieten. Ränge nach der Inhaltshierarchie wählen, nicht nach einer vereinfachten SEO-Formel.
- **Forschungsrelevanz:** Mögliche Quellstrukturvariable in [EXP-004](/de/05-experiments/exp-004/), kein Nachweis einer späteren Chunk-Grenze.
- **Verwandte Begriffe:** [Semantic HTML](#semantic-html), [Structure-Aware Chunking](#structure-aware-chunking).
- **Referenzen:** [WHATWG: Überschriften](https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements), [WAI-Überschriftenhinweise](https://www.w3.org/WAI/tutorials/page-structure/headings/).

### HTML Document Structure

- **Deutscher Begriff:** HTML-Dokumentstruktur.
- **Kurzdefinition:** Organisation eines HTML-Dokuments aus Elementen, Text, Metadaten und deren Beziehungen.
- **Erklärung:** `html` enthält Metadaten in `head` und Inhalte in `body`; die Dokumentstruktur umfasst verschachtelte Inhalte, nicht nur Seitenbereiche.
- **HTML-Beispiel:** `<body><main><h1>Forschung</h1><p>Umfang der Recherche.</p></main></body>` (Body-Fragment).
- **Semantische Bedeutung:** Eltern-Kind-Beziehungen und Elementbedeutungen bilden ein Dokument; CSS bestimmt die Darstellung.
- **Barrierefreiheitsrelevanz:** Logische Quellreihenfolge, Überschriften und Landmarks unterstützen die Navigation; DOM-Struktur und Accessibility-Struktur sind nicht identisch.
- **Forschungsrelevanz:** Festlegen, welche ursprüngliche oder verarbeitete Repräsentation untersucht wird.
- **Verwandte Begriffe:** [DOM](#dom-document-object-model), [Document Outline](#document-outline), [HTML Parsing](#html-parsing).
- **Referenzen:** [WHATWG: Dokumentelement](https://html.spec.whatwg.org/multipage/semantics.html#the-html-element).

### Document Outline

- **Deutscher Begriff:** Dokumentgliederung.
- **Kurzdefinition:** Hierarchische Sicht auf Themen und Unterthemen eines Dokuments anhand von Überschriften und Abschnittsbeziehungen.
- **Erklärung:** Nicht auf historische Vorschläge zur automatischen HTML-Gliederung vertrauen, um Ränge aus verschachtelten Abschnitten neu zu berechnen; explizite Überschriftenebenen verwenden.
- **Barrierefreiheitsrelevanz:** Eine Überschriftenliste im Screenreader ist weder der gesamte DOM noch eine Liste aller Landmarks.
- **Forschungsrelevanz:** Beabsichtigte Gliederung von der tatsächlich durch Parser oder assistive Technologien bereitgestellten Struktur unterscheiden.
- **Verwandte Begriffe:** [Heading Hierarchy](#heading-hierarchy), [Heading Levels (H1–H6)](#heading-levels-h1h6).
- **Referenzen:** [WHATWG: Überschriften und Gliederung](https://html.spec.whatwg.org/multipage/sections.html#headings-and-outlines-2), [WAI: Überschriften](https://www.w3.org/WAI/tutorials/page-structure/headings/).

### HTML Landmark

- **Deutscher Begriff:** HTML-Landmark; navigierbarer Seitenbereich.
- **Kurzdefinition:** Bedeutender Seitenbereich, der mit Landmark-Semantik bereitgestellt wird, häufig durch natives HTML.
- **Erklärung:** Landmark bezeichnet ein Navigationskonzept der Barrierefreiheit, nicht jedes abschnittsbildende Element oder sichtbare Rechteck.
- **Semantische Bedeutung:** Kennzeichnet den Zweck eines Bereichs, etwa Hauptinhalt oder Navigation.
- **Barrierefreiheitsrelevanz:** Screenreader können Bereichsnavigation anbieten; Namen unterscheiden mehrere Landmarks derselben Art.
- **Forschungsrelevanz:** Eine Landmark-Zuordnung belegt nicht, dass ein Extraktor oder KI-Anbieter diese Zuordnung nutzt.
- **Verwandte Begriffe:** [Landmark Roles](#landmark-roles), [Section](#section), [Accessibility Tree](#accessibility-tree).
- **Referenzen:** [WAI APG: Landmark-Bereiche](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/).

### Main Landmark

- **Deutscher Begriff:** Hauptinhalts-Landmark.
- **Kurzdefinition:** Landmark mit der Rolle `main`, die den Hauptinhalt eines Dokuments kennzeichnet.
- **Erklärung:** Das native `main`-Element bevorzugen. Eine Seite stellt normalerweise eine Main-Landmark bereit; separate eingebettete Dokumente haben einen eigenen Kontext.
- **Barrierefreiheitsrelevanz:** Ziel für die Landmark-Navigation und mögliches Sprunglinkziel.
- **Forschungsrelevanz:** Hauptinhaltsextraktion kann anderen Regeln folgen; eine Main-Landmark garantiert kein bestimmtes Extraktionsergebnis.
- **Verwandte Begriffe:** [Main](#main), [HTML Landmark](#html-landmark), [Content Extraction](#content-extraction).
- **Referenzen:** [WAI APG: Landmarks](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/), [WAI-ARIA: main](https://www.w3.org/TR/wai-aria/#main).

### Header

- **Deutscher Begriff:** Einleitender Bereich.
- **Kurzdefinition:** Das `header`-Element beschreibt einleitende Inhalte für den nächstgelegenen relevanten Abschnitt oder die Seite.
- **Erklärung:** Es kann eine Überschrift, Einleitung oder Navigation enthalten. Ein Artikel-Header ist nicht automatisch der Website-Header.
- **HTML-Beispiel:** `<article><header><h2>Review-Protokoll</h2><p>Entwurf</p></header><p>Protokolltext.</p></article>`.
- **Semantische Bedeutung:** Kontextbezogene Einleitung, nicht zwingend visuell oben fixierter Inhalt.
- **Barrierefreiheitsrelevanz:** Seitenweite Header können `banner` zugeordnet werden; ein Header innerhalb von `article`, `aside`, `main`, `nav` oder `section` hat diese implizite Landmark-Rolle nicht. Auch ARIA-Kontext kann die Zuordnung beeinflussen.
- **Forschungsrelevanz:** Vorfahrenkontext erhalten, bevor ein Header als wiederholter Seitenrahmen klassifiziert wird.
- **Verwandte Begriffe:** [Footer](#footer), [Article](#article), [Implicit ARIA Role](#implicit-aria-role).
- **Referenzen:** [WHATWG: header](https://html.spec.whatwg.org/multipage/sections.html#the-header-element), [ARIA in HTML](https://www.w3.org/TR/html-aria/#el-header).

### Footer

- **Deutscher Begriff:** Abschlussbereich; Fußbereich.
- **Kurzdefinition:** Das `footer`-Element beschreibt Abschlussinformationen für den nächstgelegenen relevanten Abschnitt oder die Seite.
- **Erklärung:** Es kann Urheberschaft oder verwandte Dokumente nennen und muss nicht am visuellen unteren Rand eines Viewports liegen.
- **HTML-Beispiel:** `<article><h2>Review-Protokoll</h2><p>Protokolltext.</p><footer><p>Autor: Forschungsteam</p></footer></article>`.
- **Barrierefreiheitsrelevanz:** Seitenweite Footer können `contentinfo` zugeordnet werden; Nachfahren von `article`, `aside`, `main`, `nav` oder `section` erhalten diese Rolle nicht implizit. Den vollständigen Zuordnungskontext prüfen.
- **Forschungsrelevanz:** Ein Dokument-Footer kann relevante Provenienz enthalten und darf nicht automatisch verworfen werden.
- **Verwandte Begriffe:** [Header](#header), [Source Attribution](#source-attribution).
- **Referenzen:** [WHATWG: footer](https://html.spec.whatwg.org/multipage/sections.html#the-footer-element), [ARIA in HTML](https://www.w3.org/TR/html-aria/#el-footer).

### Main

- **Deutscher Begriff:** Hauptinhalt; `main`-Element.
- **Kurzdefinition:** Das `main`-Element beschreibt den dominierenden Inhalt des Dokument-Body.
- **Erklärung:** Für den zentralen Seiteninhalt verwenden, nicht für wiederholte websiteweite Navigation. HTML erlaubt höchstens ein `main` ohne `hidden`-Attribut.
- **HTML-Beispiel:** `<main><h1>Literaturrecherche</h1><p>Umfang der Recherche.</p></main>`.
- **Barrierefreiheitsrelevanz:** Liefert die implizite Landmark `main` ohne redundantes `role="main"`.
- **Forschungsrelevanz:** Kodiert eine vom Autor angegebene Inhaltsgrenze, keinen universellen Extraktionsvertrag.
- **Verwandte Begriffe:** [Main Landmark](#main-landmark), [Nav](#nav), [Content Extraction](#content-extraction).
- **Referenzen:** [WHATWG: main](https://html.spec.whatwg.org/multipage/grouping-content.html#the-main-element).

### Nav

- **Deutscher Begriff:** Navigationsbereich.
- **Kurzdefinition:** Das `nav`-Element beschreibt einen Abschnitt mit Navigationslinks zu Seiten oder Seitenabschnitten.
- **Erklärung:** Für wichtige Navigationsblöcke verwenden, nicht zwingend für jede Linksammlung.
- **HTML-Beispiel:** `<nav aria-label="Forschung"><a href="/de/02-literature/">Literatur</a></nav>`.
- **Barrierefreiheitsrelevanz:** Implizite Landmark `navigation`; unterschiedliche Navigationsgruppen durch aussagekräftige Namen unterscheiden.
- **Forschungsrelevanz:** Navigation ist ein strukturelles Signal, nicht für jede Anfrage automatisch irrelevanter Text.
- **Verwandte Begriffe:** [Link](#link), [Accessible Name](#accessible-name).
- **Referenzen:** [WHATWG: nav](https://html.spec.whatwg.org/multipage/sections.html#the-nav-element), [WAI: Landmarks](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/).

### Aside

- **Deutscher Begriff:** Ergänzender, indirekt verwandter Inhalt.
- **Kurzdefinition:** Das `aside`-Element beschreibt nur indirekt mit dem umgebenden Inhalt verbundenes Material, das separat betrachtet werden kann.
- **Erklärung:** Ein Kasten mit weiterführender Literatur kann passen; eine visuelle Seitenleiste wird nicht allein durch ihre Position zum Aside.
- **HTML-Beispiel:** `<aside><h2>Verwandte Fachbegriffe</h2><p>Definitionen stehen im Glossar.</p></aside>`.
- **Barrierefreiheitsrelevanz:** Hat implizite `complementary`-Semantik; prüfen, ob der Bereich die Navigation tatsächlich unterstützt.
- **Forschungsrelevanz:** Ergänzendes Material kann relevante Fakten enthalten; sein Ausschluss erfordert ein definiertes Extraktionsziel.
- **Verwandte Begriffe:** [Section](#section), [HTML Landmark](#html-landmark).
- **Referenzen:** [WHATWG: aside](https://html.spec.whatwg.org/multipage/sections.html#the-aside-element), [ARIA in HTML](https://www.w3.org/TR/html-aria/#el-aside).

### Section

- **Deutscher Begriff:** Thematischer Abschnitt.
- **Kurzdefinition:** Das `section`-Element beschreibt eine thematische Inhaltsgruppe, typischerweise mit einer Überschrift.
- **Erklärung:** Verwenden, wenn die Gruppe ein sinnvolles Thema hat, nicht allein zum Anbringen von CSS. Eine Überschrift liefert nicht automatisch den zugänglichen Namen des Abschnitts.
- **HTML-Beispiel:** `<section><h2>Grenzen</h2><p>Der Umfang ist eingeschränkt.</p></section>`.
- **Barrierefreiheitsrelevanz:** Eine Section wird mit einem zugänglichen Namen, etwa über `aria-labelledby`, zur `region`-Landmark; nicht jeden Abschnitt allein zur Landmark-Erzeugung benennen.
- **Forschungsrelevanz:** Abschnittsgrenzen können beim Parsing und Chunking erhalten bleiben oder verloren gehen.
- **Verwandte Begriffe:** [Section Heading](#section-heading), [Div](#div), [Accessible Name](#accessible-name).
- **Referenzen:** [WHATWG: section](https://html.spec.whatwg.org/multipage/sections.html#the-section-element), [ARIA in HTML](https://www.w3.org/TR/html-aria/#el-section).

### Article

- **Deutscher Begriff:** Eigenständiger Beitrag.
- **Kurzdefinition:** Das `article`-Element beschreibt eine vollständige, eigenständige Inhaltseinheit, die grundsätzlich unabhängig verbreitet oder wiederverwendet werden kann.
- **Erklärung:** Beispiele sind eine Paper-Zusammenfassung, ein Beitrag oder Kommentar; nicht jede visuell umrahmte Karte ist ein Artikel.
- **HTML-Beispiel:** `<article><h2>Paper-Bewertung</h2><p>Geltungsbereich und Grenzen einer Quelle.</p></article>`.
- **Barrierefreiheitsrelevanz:** Die native Article-Semantik gehört zur Dokumentstruktur, nicht zu den ARIA-Landmark-Rollen.
- **Forschungsrelevanz:** Kennzeichnet eine beabsichtigte Inhaltseinheit, nicht zwingend eine spätere Retrieval-Einheit.
- **Verwandte Begriffe:** [Section](#section), [Header](#header), [Structure-Aware Chunking](#structure-aware-chunking).
- **Referenzen:** [WHATWG: article](https://html.spec.whatwg.org/multipage/sections.html#the-article-element).

### Div

- **Deutscher Begriff:** Generisches Block-Container-Element.
- **Kurzdefinition:** Das `div`-Element gruppiert Inhalt, ohne ihm eine spezielle inhaltliche Bedeutung zu geben.
- **Erklärung:** Geeignet für Styling oder Skripte, wenn kein spezifischeres Element zum Zweck passt.
- **HTML-Beispiel:** `<div class="columns"><p>Erster Eintrag.</p><p>Zweiter Eintrag.</p></div>`.
- **Barrierefreiheitsrelevanz:** Erzeugt nicht von sich aus Überschrift, Landmark oder Bedienelement; generische Container können in Accessibility-APIs entfallen oder abgeflacht werden.
- **Forschungsrelevanz:** Generisches Markup kann Text und Verschachtelung auch ohne spezifischere Elementsemantik erhalten.
- **Verwandte Begriffe:** [Generic Container](#generic-container), [Semantic HTML](#semantic-html).
- **Referenzen:** [WHATWG: div](https://html.spec.whatwg.org/multipage/grouping-content.html#the-div-element).

### Generic Container

- **Deutscher Begriff:** Generischer Container.
- **Kurzdefinition:** Gruppierung ohne spezifische inhaltliche oder interaktive Bedeutung, häufig durch `div` oder `span` dargestellt.
- **Erklärung:** Ein reiner Layout-Wrapper ist zulässig; eine ARIA-Rolle verändert bereitgestellte Semantik nur innerhalb der geltenden Autorenregeln, nicht das zugrunde liegende Verhalten.
- **Barrierefreiheitsrelevanz:** Native Überschriften oder Bedienelemente nicht unnötig mit generischen Containern nachbauen.
- **Forschungsrelevanz:** Generische Wrapper vom vollständigen Fehlen einer Dokumentstruktur unterscheiden.
- **Verwandte Begriffe:** [Div](#div), [Explicit ARIA Role](#explicit-aria-role).
- **Referenzen:** [WHATWG: div](https://html.spec.whatwg.org/multipage/grouping-content.html#the-div-element), [ARIA in HTML](https://www.w3.org/TR/html-aria/).

### Landmark Roles

- **Deutscher Begriff:** Landmark-Rollen.
- **Kurzdefinition:** Rollen für bedeutende navigierbare Seitenbereiche; dieses Glossar verwendet den WAI-ARIA-Begriff.
- **Erklärung:** Beispiele sind `banner`, `main`, `navigation`, `complementary`, `contentinfo`, `search`, `form` und `region`; Namensanforderungen und Kontext unterscheiden sich.
- **Barrierefreiheitsrelevanz:** Passende native Elemente bevorzugen und redundante Rollen oder zu viele Bereiche vermeiden. Eine visuelle Spalte hat nicht automatisch eine Landmark-Rolle.
- **Forschungsrelevanz:** HTML-Struktur und Accessibility-Zuordnungen sind unterschiedliche mögliche Eingaben eines Verarbeitungssystems.
- **Verwandte Begriffe:** [ARIA Landmark Roles](#aria-landmark-roles), [HTML Landmark](#html-landmark).
- **Referenzen:** [WAI-ARIA: Landmark-Rollen](https://www.w3.org/TR/wai-aria/#landmark_roles), [WAI APG: Landmarks](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/).

### Heading Levels (H1–H6)

- **Deutscher Begriff:** Überschriftenebenen H1–H6.
- **Kurzdefinition:** Die sechs nativen Überschriftenränge `h1` bis `h6`, wobei `h1` der höchste ist.
- **Erklärung:** Explizite Ränge entsprechend der Themenverschachtelung verwenden; die CSS-Schriftgröße bestimmt die Ebene nicht.
- **HTML-Beispiel:** `<h1>Forschung</h1><h2>Methode</h2><h3>Stichprobe</h3>`.
- **Barrierefreiheitsrelevanz:** Native Überschriften stellen Rolle und Ebene bereit und ermöglichen ebenenbezogene Navigation.
- **Forschungsrelevanz:** Ränge getrennt von DOM-Tiefe und visueller Hervorhebung erfassen.
- **Verwandte Begriffe:** [Heading Order](#heading-order), [Heading Semantics](#heading-semantics).
- **Referenzen:** [WHATWG: Überschriften](https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements).

### Heading Order

- **Deutscher Begriff:** Überschriftenreihenfolge.
- **Kurzdefinition:** Abfolge von Überschriftenrängen und Themen in der Lesereihenfolge des Dokuments.
- **Erklärung:** Beim Öffnen von Unterabschnitten möglichst keine Ränge überspringen; ein Wechsel von `h4` zurück zu `h2` kann Unterabschnitte korrekt abschließen.
- **Barrierefreiheitsrelevanz:** Logische Abfolgen unterstützen Navigation; nicht jeder numerische Sprung ist pauschal ungültiges HTML.
- **Forschungsrelevanz:** Quellreihenfolge mit visueller Reihenfolge und verarbeitetem Ergebnis vergleichen, nicht nur Überschriften zählen.
- **Verwandte Begriffe:** [Heading Hierarchy](#heading-hierarchy), [Document Outline](#document-outline).
- **Referenzen:** [WAI: Überschriften](https://www.w3.org/WAI/tutorials/page-structure/headings/).

### Section Heading

- **Deutscher Begriff:** Abschnittsüberschrift.
- **Kurzdefinition:** Überschrift, die das Thema eines Abschnitts oder einer Textpassage benennt.
- **Erklärung:** Sie muss nicht in einem expliziten `section` stehen. Umgekehrt ersetzt ein Abschnitts-Wrapper keine Überschrift.
- **HTML-Beispiel:** `<section><h2>Forschungsfragen</h2><p>Zu untersuchende Fragen.</p></section>`.
- **Barrierefreiheitsrelevanz:** Überschriftennavigation und Landmark-Benennung sind getrennte Mechanismen.
- **Forschungsrelevanz:** Ein Parser kann Überschriftentext erhalten, aber dessen Zuordnung zu nachfolgenden Passagen verlieren.
- **Verwandte Begriffe:** [Section](#section), [Accessible Name](#accessible-name).
- **Referenzen:** [WHATWG: section](https://html.spec.whatwg.org/multipage/sections.html#the-section-element), [WAI: Überschriften](https://www.w3.org/WAI/tutorials/page-structure/headings/).

### Page Title

- **Deutscher Begriff:** Seitentitel.
- **Kurzdefinition:** Der durch `title` in `head` angegebene Dokumenttitel, getrennt von einer sichtbaren Hauptüberschrift.
- **Erklärung:** Browser identifizieren damit Tabs oder Fenster. Aussagekräftiger Seitentitel und aussagekräftiges `h1` erfüllen verwandte, aber unterschiedliche Zwecke.
- **HTML-Beispiel:** `<title>Literaturrecherche | Forschungsworkspace</title>` (innerhalb von `head`).
- **Barrierefreiheitsrelevanz:** Hilft beim Erkennen und Unterscheiden von Seiten; ist kein `h1` der Überschriftennavigation.
- **Forschungsrelevanz:** Titelmetadaten bei der Bewertung extrahierter Body-Inhalte getrennt erhalten.
- **Verwandte Begriffe:** [HTML Document Structure](#html-document-structure), [Heading Semantics](#heading-semantics).
- **Referenzen:** [WHATWG: title](https://html.spec.whatwg.org/multipage/semantics.html#the-title-element), [WAI: Seitentitel](https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html).

### Heading Semantics

- **Deutscher Begriff:** Überschriftensemantik.
- **Kurzdefinition:** Die Bedeutung, dass Inhalt eine Überschrift mit definiertem Rang ist, nicht bloß hervorgehobener Text.
- **Erklärung:** Ein großes, fettes `div` ist keine native Überschrift. `role="heading"` benötigt ein geeignetes `aria-level` und sollte verfügbares natives Markup nicht grundlos ersetzen.
- **Barrierefreiheitsrelevanz:** Schriftformatierung allein liefert nicht Rolle und Ebene nativer Überschriften.
- **Forschungsrelevanz:** Semantik und Typografie beim Vergleich inhaltsgleicher Varianten isolieren.
- **Verwandte Begriffe:** [Heading Levels (H1–H6)](#heading-levels-h1h6), [Semantic Role](#semantic-role).
- **Referenzen:** [WHATWG: Überschriften](https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements), [WAI-ARIA: heading](https://www.w3.org/TR/wai-aria/#heading).

### Accessible Name

- **Deutscher Begriff:** Zugänglicher Name.
- **Kurzdefinition:** Text zur Identifikation eines zugänglichen Objekts, berechnet aus anwendbaren nativen und ARIA-Benennungsmechanismen.
- **Erklärung:** Quellen können sichtbarer Inhalt, eine native Beschriftung oder `aria-labelledby` sein; die Benennung ist rollenabhängig. Eine Überschrift in einem Bereich benennt ihn ohne passende Zuordnung nicht.
- **HTML-Beispiel:** `<nav aria-labelledby="topics"><h2 id="topics">Themen</h2><a href="/de/02-literature/">Literatur</a></nav>`.
- **Barrierefreiheitsrelevanz:** Sichtbare/native Beschriftungen bevorzugen; kein `aria-label` an generischen Elementen verwenden, deren Rolle Benennung verbietet.
- **Forschungsrelevanz:** Sichtbarer Text, DOM-Attribute und berechnete Namen können abweichen; untersuchte Repräsentation angeben.
- **Verwandte Begriffe:** [Accessible Description](#accessible-description), [Section](#section).
- **Referenzen:** [Accessible Name and Description Computation 1.1](https://www.w3.org/TR/accname-1.1/), [APG: Benennung](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/).

### HTML Table

- **Deutscher Begriff:** HTML-Datentabelle.
- **Kurzdefinition:** `table` beschreibt Daten mit Beziehungen in einem zweidimensionalen Raster aus Zeilen und Spalten.
- **Erklärung:** Für echte tabellarische Daten, nicht für visuelles Layout verwenden; Seitenspalten mit CSS gestalten. Siehe das [vollständige Beispiel](#beispiel-zur-html-tabellensemantik).
- **Semantische Bedeutung:** Zellen und Kopfzellen drücken Beziehungen aus, nicht nur Positionen.
- **Barrierefreiheitsrelevanz:** Natives Tabellenmarkup unterstützt Zellnavigation und zugeordnete Kopfzellen.
- **Forschungsrelevanz:** Erhalt der Zuordnungen bewerten, nicht nur Extraktion von Zelltext.
- **Verwandte Begriffe:** [Table Headers and Scope](#table-headers-and-scope), [Table Caption](#table-caption).
- **Referenzen:** [WHATWG: table](https://html.spec.whatwg.org/multipage/tables.html#the-table-element), [WAI: Tabellen](https://www.w3.org/WAI/tutorials/tables/).

### Table Caption

- **Deutscher Begriff:** Tabellenbeschriftung.
- **Kurzdefinition:** `caption` benennt das Thema seiner übergeordneten Tabelle.
- **Erklärung:** Als erstes Elementkind der Tabelle platzieren; weder Spaltenkopf noch Ersatz für Anleitungen zu komplexen Tabellen.
- **HTML-Beispiel:** `<table><caption>Protokollphasen</caption><tbody><tr><td>Planung</td></tr></tbody></table>`.
- **Barrierefreiheitsrelevanz:** Kann den zugänglichen Namen der Tabelle liefern und vor der Zellnavigation Orientierung geben.
- **Forschungsrelevanz:** Beschriftung der Tabelle zugeordnet halten, statt sie als unabhängigen Absatz auszugeben.
- **Verwandte Begriffe:** [HTML Table](#html-table), [Accessible Name](#accessible-name).
- **Referenzen:** [WHATWG: caption](https://html.spec.whatwg.org/multipage/tables.html#the-caption-element), [WAI: Beschriftungen](https://www.w3.org/WAI/tutorials/tables/caption-summary/).

### Table Header

- **Deutscher Begriff:** Tabellenkopf; mehrdeutiger Begriff.
- **Kurzdefinition:** Häufig die Zeilengruppe `thead`, umgangssprachlich aber auch eine einzelne Kopfzelle.
- **Erklärung:** Hier wird die Kopfzeilengruppe (`thead`) von Kopfzellen (`th`) unterschieden. `thead` kann mehrere Zeilen enthalten und macht aus `td` keine Kopfzellen.
- **Barrierefreiheitsrelevanz:** Zeilengruppierung ersetzt keine korrekten Kopfzellenzuordnungen.
- **Forschungsrelevanz:** Angeben, ob eine Extraktion eine Zeilengruppe oder einzelne Kopfzellenbeziehungen erhält.
- **Verwandte Begriffe:** [Header Cell](#header-cell), [Table Body](#table-body).
- **Referenzen:** [WHATWG: thead](https://html.spec.whatwg.org/multipage/tables.html#the-thead-element).

### Table Body

- **Deutscher Begriff:** Tabellenkörper.
- **Kurzdefinition:** Das `tbody`-Element gruppiert die Zeilen des Tabellenkörpers.
- **Erklärung:** Eine Tabelle kann mehrere Tabellenkörper haben; `tbody` kann sowohl `th`-Zeilenköpfe als auch `td`-Datenzellen enthalten.
- **Barrierefreiheitsrelevanz:** Liefert Zeilengruppenstruktur, benennt aber nicht automatisch jeden Datenwert.
- **Forschungsrelevanz:** Parser können ein im Quell-HTML ausgelassenes `tbody` einfügen; den tatsächlich geparsten Baum untersuchen.
- **Verwandte Begriffe:** [Table Row](#table-row), [Table Header](#table-header).
- **Referenzen:** [WHATWG: tbody](https://html.spec.whatwg.org/multipage/tables.html#the-tbody-element).

### Table Row

- **Deutscher Begriff:** Tabellenzeile.
- **Kurzdefinition:** `tr` gruppiert Zellen zu einer Tabellenzeile.
- **Erklärung:** Zellen können mehrere Zeilen oder Spalten überspannen; die DOM-Kindposition ist daher nicht immer die endgültige Rasterkoordinate.
- **Barrierefreiheitsrelevanz:** Zeilenstruktur hilft bei der kontextbezogenen Zellnavigation.
- **Forschungsrelevanz:** Zeilengrenzen beim Serialisieren von Datensätzen erhalten.
- **Verwandte Begriffe:** [Table Cell](#table-cell), [Table Body](#table-body).
- **Referenzen:** [WHATWG: tr](https://html.spec.whatwg.org/multipage/tables.html#the-tr-element).

### Table Cell

- **Deutscher Begriff:** Tabellenzelle.
- **Kurzdefinition:** Einheit tabellarischen Inhalts, dargestellt durch `th` oder `td`.
- **Erklärung:** „Zelle“ allein sagt nicht aus, ob sie andere Zellen beschriftet oder Daten enthält.
- **Barrierefreiheitsrelevanz:** Die Unterscheidung von Kopf- und Datenzellen sowie deren Zuordnung liefern Navigationskontext.
- **Forschungsrelevanz:** Ein isolierter Zellwert kann ohne Zeilen- und Spalteninformation mehrdeutig sein.
- **Verwandte Begriffe:** [Header Cell](#header-cell), [Data Cell](#data-cell).
- **Referenzen:** [WHATWG: Tabellenmodell](https://html.spec.whatwg.org/multipage/tables.html#table-processing-model).

### Header Cell

- **Deutscher Begriff:** Kopfzelle.
- **Kurzdefinition:** Eine `th`-Zelle beschreibt eine Kopfzelle für eine Gruppe von Tabellenzellen.
- **Erklärung:** Sie kann Zeile, Spalte oder Gruppe benennen und ist nicht auf die erste Zeile beschränkt.
- **HTML-Beispiel:** `<th scope="row">Planung</th>` (innerhalb einer Tabellenzeile).
- **Barrierefreiheitsrelevanz:** Korrekte Zuordnung ermöglicht Screenreadern, bei der Datennavigation Kopfzellen anzusagen.
- **Forschungsrelevanz:** Ein fett formatiertes `td` ist nicht semantisch gleichwertig mit einem zugeordneten `th`.
- **Verwandte Begriffe:** [Table Headers and Scope](#table-headers-and-scope), [Data Cell](#data-cell).
- **Referenzen:** [WHATWG: th](https://html.spec.whatwg.org/multipage/tables.html#the-th-element).

### Data Cell

- **Deutscher Begriff:** Datenzelle.
- **Kurzdefinition:** `td` beschreibt eine Datenzelle in einer Tabelle.
- **Erklärung:** Ihre Bedeutung kann von mehreren Kopfzellen, Einheiten und einer Tabellenbeschriftung abhängen.
- **HTML-Beispiel:** `<td>Vorgeschlagen</td>` (innerhalb einer Tabellenzeile).
- **Barrierefreiheitsrelevanz:** Visuelle Hervorhebung macht eine Datenzelle nicht zur Kopfzelle.
- **Forschungsrelevanz:** Beschriftungen und Einheiten bei der Umwandlung von Zellen in eigenständigen Text mitführen.
- **Verwandte Begriffe:** [Header Cell](#header-cell), [Table Caption](#table-caption).
- **Referenzen:** [WHATWG: td](https://html.spec.whatwg.org/multipage/tables.html#the-td-element).

### Table Headers and Scope

- **Deutscher Begriff:** Tabellenkopfzuordnungen und Geltungsbereich.
- **Kurzdefinition:** Beziehungen zwischen Datenzellen und relevanten `th`-Zellen; `scope` legt den Zeilen-, Spalten- oder Gruppenbereich einer Kopfzelle fest.
- **Erklärung:** `scope="row"` und `scope="col"` decken einfache Fälle ab. Komplexe Tabellen können explizite `id`/`headers`-Zuordnungen oder eine Vereinfachung erfordern.
- **Barrierefreiheitsrelevanz:** Kopfzellenzuordnungen erhalten den Kontext, wenn Screenreader jeweils nur eine Zelle ausgeben; `thead` allein reicht nicht aus.
- **Forschungsrelevanz:** Prüfen, ob Bereinigung oder Konvertierung diese Beziehungen erhalten; keine universelle KI-Interpretation voraussetzen.
- **Verwandte Begriffe:** [HTML Table](#html-table), [Header Cell](#header-cell), [HTML-to-Text Conversion](#html-to-text-conversion).
- **Referenzen:** [WHATWG: Kopfzellenzuordnungen](https://html.spec.whatwg.org/multipage/tables.html#header-and-data-cell-semantics), [WAI: Tabellen](https://www.w3.org/WAI/tutorials/tables/).

### Ordered List

- **Deutscher Begriff:** Geordnete Liste.
- **Kurzdefinition:** `ol` enthält `li`-Einträge, deren Reihenfolge die Bedeutung beeinflusst.
- **Erklärung:** Geeignet für Arbeitsschritte oder Rangfolgen, nicht bloß für eine nummerierte Darstellung.
- **HTML-Beispiel:** `<ol><li>HTML parsen.</li><li>Ergebnis untersuchen.</li></ol>`.
- **Barrierefreiheitsrelevanz:** Stellt Listen- und Eintragsstruktur bereit; visuelle Nummerierung allein ist nicht gleichwertig.
- **Forschungsrelevanz:** Reihenfolge und Verschachtelung bei der Konvertierung von Abläufen erhalten.
- **Verwandte Begriffe:** [Unordered List](#unordered-list), [Description List](#description-list).
- **Referenzen:** [WHATWG: ol](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ol-element).

### Unordered List

- **Deutscher Begriff:** Ungeordnete Liste.
- **Kurzdefinition:** `ul` enthält `li`-Einträge, deren Reihenfolge die Bedeutung nicht wesentlich verändert.
- **Erklärung:** Geeignet für zusammengehörige Referenzen oder Merkmale.
- **HTML-Beispiel:** `<ul><li>Überschriften</li><li>Tabellen</li></ul>`.
- **Barrierefreiheitsrelevanz:** Unterstützt Listennavigation und Eintragsanzahl; bei starker Umgestaltung die tatsächlich bereitgestellte Semantik prüfen.
- **Forschungsrelevanz:** Zugehörigkeit und Verschachtelung erhalten, statt alle Einträge in einen Satz zu verschmelzen.
- **Verwandte Begriffe:** [Ordered List](#ordered-list), [Semantic HTML](#semantic-html).
- **Referenzen:** [WHATWG: ul](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element).

### Description List

- **Deutscher Begriff:** Beschreibungsliste; Zuordnungsliste.
- **Kurzdefinition:** `dl` beschreibt Gruppen aus Namen (`dt`) und Werten oder Beschreibungen (`dd`).
- **Erklärung:** Geeignet für Metadaten oder Begriffe; Gruppen dürfen mehrere Namen oder Beschreibungen haben. Nicht auf Wörterbuchdefinitionen beschränkt.
- **HTML-Beispiel:** `<dl><dt>Paper-ID</dt><dd>PAPER-001</dd></dl>`.
- **Barrierefreiheitsrelevanz:** Kodiert Name-Wert-Beziehungen; die konkrete Ansage unterscheidet sich nach Browser und assistiver Technologie.
- **Forschungsrelevanz:** Erhalten, welche Beschreibung zu welchem Namen gehört.
- **Verwandte Begriffe:** [Content Representation](#content-representation), [Unordered List](#unordered-list).
- **Referenzen:** [WHATWG: dl](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element).

### Figure

- **Deutscher Begriff:** Eigenständige Abbildung oder Inhaltseinheit.
- **Kurzdefinition:** `figure` gruppiert eigenständigen Inhalt, optional mit Beschriftung, auf den üblicherweise als Einheit aus dem Haupttext verwiesen wird.
- **Erklärung:** Kann Code, Diagramm, Tabelle oder Zitat enthalten; nicht jedes Bild benötigt eine Figure.
- **Barrierefreiheitsrelevanz:** Eine Beschriftung hilft bei der Identifikation der Gruppe, ersetzt aber nicht die passende Textalternative eines Bildes.
- **Forschungsrelevanz:** Gruppierung zwischen Material und zugehöriger Erklärung erhalten.
- **Verwandte Begriffe:** [Figcaption](#figcaption), [HTML Table](#html-table).
- **Referenzen:** [WHATWG: figure](https://html.spec.whatwg.org/multipage/grouping-content.html#the-figure-element).

### Figcaption

- **Deutscher Begriff:** Abbildungsbeschriftung.
- **Kurzdefinition:** `figcaption` ist die Beschriftung oder Legende des übergeordneten `figure`.
- **Erklärung:** Höchstens einmal und als erstes oder letztes Kind der Figure verwenden.
- **HTML-Beispiel:** `<figure><pre><code>&lt;main&gt;</code></pre><figcaption>Ein Hauptinhaltselement.</figcaption></figure>`.
- **Barrierefreiheitsrelevanz:** Kann die Figure benennen; ausführliche Bildalternativen sind ein eigenes Anliegen.
- **Forschungsrelevanz:** Beschriftungen bei der Extraktion nicht vom referenzierten Inhalt trennen.
- **Verwandte Begriffe:** [Figure](#figure), [Table Caption](#table-caption).
- **Referenzen:** [WHATWG: figcaption](https://html.spec.whatwg.org/multipage/grouping-content.html#the-figcaption-element).

### Blockquote

- **Deutscher Begriff:** Blockzitat.
- **Kurzdefinition:** `blockquote` beschreibt Inhalt, der aus einer anderen Quelle zitiert wird.
- **Erklärung:** Für Zitate, nicht für Einrückung verwenden. Das optionale `cite`-Attribut liefert eine Quell-URL; sichtbare Zuschreibung ist separat und gehört außerhalb des zitierten Inhalts.
- **Barrierefreiheitsrelevanz:** Kennzeichnet zitierten Inhalt; ein `cite`-Attribut allein ist kein verlässlich zugänglicher sichtbarer Quellenlink.
- **Forschungsrelevanz:** Unterschied zwischen zitierten Aussagen und eigenen Aussagen des Dokumentautors erhalten.
- **Verwandte Begriffe:** [Source Attribution](#source-attribution), [Paragraph](#paragraph).
- **Referenzen:** [WHATWG: blockquote](https://html.spec.whatwg.org/multipage/grouping-content.html#the-blockquote-element).

### Paragraph

- **Deutscher Begriff:** Absatz.
- **Kurzdefinition:** Das `p`-Element beschreibt einen Absatz.
- **Erklärung:** Gruppiert Phrasing Content; kein Wrapper für beliebige Blockstrukturen wie Tabellen oder Sections.
- **HTML-Beispiel:** `<p>Die Recherche hat einen definierten Umfang.</p>`.
- **Barrierefreiheitsrelevanz:** Sinnvolle Absätze unterstützen das Lesen; wiederholte Zeilenumbrüche sind nicht dasselbe Strukturmarkup.
- **Forschungsrelevanz:** Absatzgrenzen können Segmentierung beeinflussen, müssen aber nicht den endgültigen Chunks entsprechen.
- **Verwandte Begriffe:** [Chunking](#chunking), [Section](#section).
- **Referenzen:** [WHATWG: p](https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element).

### Link

- **Deutscher Begriff:** Verknüpfung; Hyperlink.
- **Kurzdefinition:** Verbindung von einer Ressource oder Position zu einer anderen; hier vor allem ein navigierbarer HTML-Hyperlink.
- **Erklärung:** Ein Texthyperlink nutzt üblicherweise `a` mit `href`. Das Metadatenelement `link` in `head` ist ein anderes Element; keines mit einer Button-Aktion verwechseln.
- **Barrierefreiheitsrelevanz:** Aussagekräftiger Linktext vermittelt Ziel oder Zweck unabhängig von Farbe.
- **Forschungsrelevanz:** Ankertext und Ziel sind unterschiedliche Informationen, die bei der Konvertierung getrennt werden können.
- **Verwandte Begriffe:** [Anchor Element](#anchor-element), [Source Attribution](#source-attribution).
- **Referenzen:** [WHATWG: Links](https://html.spec.whatwg.org/multipage/links.html#links).

### Anchor Element

- **Deutscher Begriff:** Ankerelement.
- **Kurzdefinition:** `a` beschreibt mit `href` einen Hyperlink; ohne dieses Attribut einen Platzhalter für einen möglichen Link.
- **Erklärung:** Ein `id` an jedem geeigneten Element kann Fragmentziel sein; dafür ist kein leerer benannter Anker nötig.
- **HTML-Beispiel:** `<a href="/de/03-notes/paper-notes/htmlrag/">PAPER-001 lesen</a>`.
- **Barrierefreiheitsrelevanz:** `a` mit `href` liefert natives Linkverhalten; `role="link"` allein erzeugt keine Navigation.
- **Forschungsrelevanz:** Bei Bedarf aufgelöste URL und ihre Beziehung zum Ankertext erhalten.
- **Verwandte Begriffe:** [Link](#link), [Native HTML Semantics](#native-html-semantics).
- **Referenzen:** [WHATWG: a](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element).

### Accessibility Tree

- **Deutscher Begriff:** Barrierefreiheitsbaum; Accessibility Tree.
- **Kurzdefinition:** Vom Browser bereitgestellte Repräsentation zugänglicher Objekte einschließlich Rollen, Namen, Zuständen und Beziehungen.
- **Erklärung:** Entsteht aus Dokumentsemantik, Rendering, ARIA und Zuordnungsregeln, nicht als Kopie jedes DOM-Knotens. Verborgene oder generische Knoten können entfallen oder abgeflacht werden.
- **Barrierefreiheitsrelevanz:** Assistive Technologien nutzen Accessibility-APIs; die tatsächliche Bereitstellung im Zielbrowser und mit der Zieltechnologie prüfen.
- **Forschungsrelevanz:** Nicht annehmen, dass ein HTML-Extraktor oder KI-Anbieter diesen Baum statt HTML oder DOM liest.
- **Verwandte Begriffe:** [DOM](#dom-document-object-model), [Accessible Name](#accessible-name), [Accessibility Semantics](#accessibility-semantics).
- **Referenzen:** [HTML-Accessibility-Zuordnungen](https://www.w3.org/TR/html-aam-1.0/), [WAI-ARIA: Accessibility Tree](https://www.w3.org/TR/wai-aria/#dfn-accessibility-tree).

### Accessible Description

- **Deutscher Begriff:** Zugängliche Beschreibung.
- **Kurzdefinition:** Ergänzender Text, der ein zugängliches Objekt über seinen identifizierenden Namen hinaus erklärt.
- **Erklärung:** Beispielsweise kann `aria-describedby` sichtbare Hinweise einem Bedienelement zuordnen; es ersetzt dessen Beschriftung nicht.
- **HTML-Beispiel:** `<label for="query">Anfrage</label><p id="query-hint">Einen Forschungsbegriff verwenden.</p><input id="query" aria-describedby="query-hint">`.
- **Barrierefreiheitsrelevanz:** Identifikation und zusätzliche Hinweise bleiben getrennt; nicht alle Anleitungen in den Namen packen.
- **Forschungsrelevanz:** Beschreibungszuordnungen können verloren gehen, selbst wenn beide Texte die Konvertierung überstehen.
- **Verwandte Begriffe:** [Accessible Name](#accessible-name), [ARIA](#aria).
- **Referenzen:** [Accessible Name and Description Computation 1.1](https://www.w3.org/TR/accname-1.1/).

### ARIA

- **Deutscher Begriff:** Accessible Rich Internet Applications; ARIA.
- **Kurzdefinition:** WAI-ARIA definiert Rollen, Zustände und Eigenschaften, die Accessibility-Semantik von Hostsprachen wie HTML ergänzen.
- **Erklärung:** Gleichwertige native Elemente bevorzugen. ARIA allein ergänzt weder Tastatursteuerung noch Navigation, Fokussierbarkeit oder natives Verhalten.
- **HTML-Beispiel:** `<button type="button" aria-describedby="save-help">Speichern</button><p id="save-help">Behält einen lokalen Entwurf.</p>` (Markup-Beispiel ohne Speicherimplementierung).
- **Barrierefreiheitsrelevanz:** Fehlerhaftes oder widersprüchliches ARIA kann eine Oberfläche falsch beschreiben; Rolle und Verhalten müssen übereinstimmen.
- **Forschungsrelevanz:** ARIA-Attribute, sichtbare Fakten und nachgelagerte Nutzung sind getrennte Variablen.
- **Verwandte Begriffe:** [Native HTML Semantics](#native-html-semantics), [Explicit ARIA Role](#explicit-aria-role).
- **Referenzen:** [WAI-ARIA](https://www.w3.org/TR/wai-aria/), [APG: zuerst lesen](https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/).

### ARIA Landmark Roles

- **Deutscher Begriff:** ARIA-Landmark-Rollen.
- **Kurzdefinition:** WAI-ARIA-Kategorie zur Formalisierung navigierbarer Seitenbereiche, erläutert unter [Landmark Roles](#landmark-roles).
- **Erklärung:** Spezifikationsbezogener Name derselben Rollenfamilie, kein zweiter Satz von HTML-Elementen.
- **Barrierefreiheitsrelevanz:** `article` und `heading` sind keine Landmark-Rollen; `region`- und `form`-Landmarks benötigen geeignete Namen.
- **Forschungsrelevanz:** HTML-Element, berechnete Rolle und Interpretation des Verarbeitungssystems auseinanderhalten.
- **Verwandte Begriffe:** [HTML Landmark](#html-landmark), [Implicit ARIA Role](#implicit-aria-role).
- **Referenzen:** [WAI-ARIA: Landmark-Rollen](https://www.w3.org/TR/wai-aria/#landmark_roles).

### Native HTML Semantics

- **Deutscher Begriff:** Native HTML-Semantik.
- **Kurzdefinition:** Durch HTML-Elemente und Attribute bereitgestellte Bedeutungen und Verhaltensweisen, ohne sie durch ARIA nachzubauen.
- **Erklärung:** `button` liefert natives Aktivierungsverhalten, `a href` Hyperlinkverhalten. Native Dokumentelemente vermitteln ebenfalls Struktur.
- **Barrierefreiheitsrelevanz:** Native Semantik generell generischen Elementen mit Rollen vorziehen; nur bei Bedarf und im erlaubten Rahmen ergänzen.
- **Forschungsrelevanz:** Wirkung der Elementwahl von ergänztem ARIA, Styling und Interaktionsänderungen trennen.
- **Verwandte Begriffe:** [Semantic HTML](#semantic-html), [ARIA](#aria).
- **Referenzen:** [WHATWG: Semantik](https://html.spec.whatwg.org/multipage/dom.html#semantics-2), [ARIA in HTML](https://www.w3.org/TR/html-aria/).

### Semantic Role

- **Deutscher Begriff:** Semantische Rolle.
- **Kurzdefinition:** Klassifikation, die den Zweck eines Elements vermittelt; im Accessibility-Kontext etwa Überschrift, Link oder Navigation.
- **Erklärung:** Inhaltliche HTML-Bedeutung geht über eine Accessibility-Rolle hinaus. Eine Rolle ist keine CSS-Klasse oder visuelle Position.
- **Barrierefreiheitsrelevanz:** Rolle, Name, Zustand und Beziehungen beschreiben unterschiedliche Aspekte eines zugänglichen Objekts.
- **Forschungsrelevanz:** HTML-Tags und bereitgestellte Rollen nicht als austauschbare Messgrößen behandeln.
- **Verwandte Begriffe:** [Implicit ARIA Role](#implicit-aria-role), [Explicit ARIA Role](#explicit-aria-role).
- **Referenzen:** [WAI-ARIA: Rollen](https://www.w3.org/TR/wai-aria/#roles), [ARIA in HTML](https://www.w3.org/TR/html-aria/).

### Implicit ARIA Role

- **Deutscher Begriff:** Implizite ARIA-Rolle.
- **Kurzdefinition:** Standardmäßige Accessibility-Rolle aus nativer Elementsemantik und Kontext, ohne explizites `role`-Attribut.
- **Erklärung:** `nav` impliziert `navigation`; `a` nur mit `href` die Rolle `link`; Header-/Footer-Zuordnungen hängen von Vorfahren ab.
- **Barrierefreiheitsrelevanz:** Redundante explizite Rollen vermeiden und kontextabhängige Zuordnungen prüfen.
- **Forschungsrelevanz:** Tag-Anzahlen allein bestimmen die bereitgestellten Rollen nicht vollständig.
- **Verwandte Begriffe:** [Header](#header), [Explicit ARIA Role](#explicit-aria-role).
- **Referenzen:** [ARIA in HTML: Rollentabelle](https://www.w3.org/TR/html-aria/#docconformance).

### Explicit ARIA Role

- **Deutscher Begriff:** Explizite ARIA-Rolle.
- **Kurzdefinition:** Über das Attribut `role` deklarierte Rolle, gebunden an die erlaubten Rollen der Hostsprache.
- **Erklärung:** Eine erlaubte Überschreibung verändert bereitgestellte Semantik, nicht automatisch Verhalten. Ungültige oder widersprüchliche Rollen können die beabsichtigte Wirkung verfehlen.
- **Barrierefreiheitsrelevanz:** Native Semantik nicht leichtfertig ersetzen; eigene interaktive Rollen benötigen entsprechendes Tastatur- und Interaktionsverhalten.
- **Forschungsrelevanz:** Explizite Rollen getrennt von Elementtypen und beobachteten Zuordnungen erfassen.
- **Verwandte Begriffe:** [Implicit ARIA Role](#implicit-aria-role), [ARIA](#aria).
- **Referenzen:** [ARIA in HTML](https://www.w3.org/TR/html-aria/), [WAI-ARIA: Rollen](https://www.w3.org/TR/wai-aria/#roles).

### Accessibility Semantics

- **Deutscher Begriff:** Barrierefreiheitssemantik.
- **Kurzdefinition:** Programmatisch bereitgestellte Bedeutung einschließlich Rollen, Namen, Zuständen, Eigenschaften und Beziehungen für assistive Technologien.
- **Erklärung:** Natives HTML und gültiges ARIA tragen dazu bei; CSS-Erscheinungsbild allein bestimmt diese Semantik nicht. Semantik allein gewährleistet auch keine vollständige Barrierefreiheit.
- **Barrierefreiheitsrelevanz:** Korrekte Beziehungen, Bedienbarkeit, Fokus und tatsächliches Verhalten assistiver Technologien müssen zusammenwirken.
- **Forschungsrelevanz:** Etablierte Accessibility-Zuordnungen belegen weder GEO/AEO-Effekte noch die Nutzung eines Accessibility Tree durch Anbieter.
- **Verwandte Begriffe:** [Accessibility Tree](#accessibility-tree), [Native HTML Semantics](#native-html-semantics).
- **Referenzen:** [WAI-ARIA](https://www.w3.org/TR/wai-aria/), [HTML-Accessibility-Zuordnungen](https://www.w3.org/TR/html-aam-1.0/).

## Beispiele und Forschungskontext

### Semantischer Elementvergleich

Die Bedeutung vor dem Layout wählen. Ein generisches `div` passt, wenn ein Wrapper nur für Styling oder Skripte existiert und keine spezifischere Bedeutung zutrifft.

| Element   | Semantischer Zweck und passende Verwendung                                | Accessibility-Unterscheidung                                                                |
| --------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `main`    | Dominierender Dokumentinhalt                                              | Implizite Landmark `main`                                                                   |
| `header`  | Einleitung einer Seite oder eines kontextbezogenen Abschnitts             | `banner` nur im passenden Kontext                                                           |
| `footer`  | Abschlussinformationen einer Seite oder eines kontextbezogenen Abschnitts | `contentinfo` nur im passenden Kontext                                                      |
| `nav`     | Abschnitt mit Navigationslinks                                            | Implizite Landmark `navigation`                                                             |
| `aside`   | Indirekt verwandter, separat verständlicher Inhalt                        | Implizite `complementary`-Semantik, keine visuelle Seitenleistenregel                       |
| `section` | Thematische Inhaltsgruppe, typischerweise mit Überschrift                 | Benannte Sections können `region`-Landmarks sein; nicht jeder Abschnitt braucht einen Namen |
| `article` | Eigenständige, unabhängig wiederverwendbare Inhaltseinheit                | Artikelstruktur, keine Landmark-Rolle                                                       |
| `div`     | Generische Gruppierung ohne spezielle Bedeutung                           | Keine inhärente Landmark- oder Überschriftensemantik                                        |

Quellen: [WHATWG: Sections](https://html.spec.whatwg.org/multipage/sections.html), [Inhaltsgruppierung](https://html.spec.whatwg.org/multipage/grouping-content.html) und [ARIA in HTML](https://www.w3.org/TR/html-aria/). Screenreader-Navigation folgt bereitgestellter Semantik, nicht der CSS-Position eines Bereichs oben, seitlich oder unten.

### Beispiel zur HTML-Tabellensemantik

Die folgenden Angaben sind **illustrative Referenzdaten, keine experimentellen Ergebnisse**:

```html
<table>
  <caption>Repräsentationsbeispiele und erhaltene Beziehungen</caption>
  <thead>
    <tr>
      <th scope="col">Repräsentation</th>
      <th scope="col">Beispielbeziehung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">HTML-Tabelle</th>
      <td>Kopfzelle einer Datenzelle zugeordnet</td>
    </tr>
    <tr>
      <th scope="row">Beschrifteter Text</th>
      <td>Beziehung als explizite Beschriftung formuliert</td>
    </tr>
  </tbody>
</table>
```

`caption` liefert Themenkontext und kann die Tabelle benennen. `thead` und `tbody` gruppieren Zeilen, machen Zellen aber nicht selbst zu Kopfzellen. `tr` gruppiert Zellen, `th` kennzeichnet Kopfzellen und `td` enthält Daten. Hier ordnet `scope="col"` Spaltenköpfe ihren Spalten zu; `scope="row"` verbindet jede Repräsentationsbeschriftung mit den Daten ihrer Zeile.

Diese Beziehungen ermöglichen Screenreadern die Ansage relevanter Kopfzellen während der Zellnavigation. Bei komplexen mehrstufigen Tabellen passende Gruppen und bei Bedarf explizite `id`/`headers`-Zuordnungen verwenden oder die Tabelle vereinfachen. Datentabellenmarkup nicht für rein visuelles Layout einsetzen.

Ein Extraktor kann Raster und Kopfzellenbeziehungen erhalten oder sie zu mehrdeutigem Text abflachen. Die Zeichenfolge „HTML-Tabelle Kopfzelle einer Datenzelle zugeordnet“ verliert das explizite Zeilen-/Spaltenmodell, sofern der Konverter es nicht anders ausdrückt. Weder gültiges Markup noch dieses Beispiel belegt, dass jedes KI-System Tabellen erhält oder versteht.

Quellen: [WHATWG: Tabellen](https://html.spec.whatwg.org/multipage/tables.html) und [WAI-Tabellen-Tutorial](https://www.w3.org/WAI/tutorials/tables/).

### Von HTML-Semantik zu abgerufenem Wissen

Fünf Beobachtungen getrennt halten:

1. **Ursprüngliches HTML:** vom Autor kodierte Elemente, Attribute und Beziehungen.
2. **Gerenderter DOM:** geparster und gegebenenfalls skriptveränderter Knotenbaum, nicht der ursprüngliche Quelltext oder Accessibility Tree.
3. **Bereinigtes HTML:** Struktur, die die angegebene Bereinigungsstrategie erhält; entfernte Attribute oder Wrapper können Beziehungen verändern.
4. **Konvertierter Text:** verbleibende Wörter und gezielt serialisierte Beschriftungen; Überschriften-, Tabellen- und Linkzuordnungen bleiben nicht automatisch erhalten.
5. **Retrieval-Eingabe:** die tatsächlich indexierte, gechunkte, eingebettete, ausgewählte oder in den Modellkontext übernommene Repräsentation.

[HTML Parsing](#html-parsing), [HTML Cleaning](#html-cleaning), [Content Extraction](#content-extraction), [HTML-to-Text Conversion](#html-to-text-conversion) und [Structure-Aware Chunking](#structure-aware-chunking) sind unterschiedliche Operationen. Semantische Elemente können Signale liefern; ob ein nachgelagertes System sie erhält und nutzt, ist eine empirische Frage.

[PAPER-001 — HtmlRAG](/de/03-notes/paper-notes/htmlrag/) untersucht Repräsentation und Block-Tree-Pruning in einer bestimmten RAG-Pipeline. Die Arbeit isoliert weder den kausalen Nutzen jedes semantischen Elements noch belegt sie anbieterspezifische Ranking-, Sichtbarkeits- oder Zitierungseffekte. Forschungskontext liefern [HTML-Inhaltsverarbeitung](/de/02-literature/html-content-processing/), [HTML vs. Plain Text](/de/02-literature/html-vs-plain-text/), [Architekturbeobachtungen](/de/03-notes/architecture-observations/) und [technische Notizen](/de/03-notes/technical-notes/). Die Definitionen ändern keine Hypothese und kein Evidenzniveau.

**Offene Forschungsfragen:** Welche Zuordnungen bleiben unter einer konkreten Bereinigungs- und Konvertierungsstrategie erhalten? Verbessert ihr Erhalt bei gleichem Fakteninhalt die Retrieval- oder Antwortqualität? Effekte auf Sichtbarkeit und Zitierung erfordern separate Evidenz; aus Elementdefinitionen lassen sie sich nicht ableiten.

## Frontend-Architektur

### CSR (Client-Side Rendering)

- **Deutscher Begriff:** Clientseitiges Rendering.
- **Kurzdefinition:** Erzeugen oder wesentliches Ergänzen von Seiteninhalten durch JavaScript auf dem Client.
- **Erklärung:** Eine Antwort kann zunächst nur ein Gerüst enthalten; relevante Inhalte erscheinen nach Skriptausführung. CSR und SSR können kombiniert werden.
- **Forschungsrelevanz:** [EXP-002](/de/05-experiments/exp-002/) trennt die ursprüngliche Antwort vom später gerenderten Inhalt; Crawlerfähigkeiten sind systemspezifisch zu messen.
- **Verwandte Begriffe:** [SSR](#ssr-server-side-rendering), [Hydration](#hydration).
- **Referenzen:** [MDN: CSR](https://developer.mozilla.org/en-US/docs/Glossary/CSR).

### SSR (Server-Side Rendering)

- **Deutscher Begriff:** Serverseitiges Rendering.
- **Kurzdefinition:** In den Rendering-Vergleichen dieses Projekts: Erzeugung von HTML auf dem Server für eine Anfrage vor der Auslieferung.
- **Erklärung:** Weiter gefasste Verwendungen schließen teilweise Prerendering ein. Hier wird anfragebezogenes SSR von buildbezogenem SSG getrennt; gecachte Antworten sind gesondert zu dokumentieren.
- **Forschungsrelevanz:** Definiert eine Auslieferungsbedingung in [H-003](/de/04-hypotheses/h-003/), keine Garantie für Indexierung oder Zitierung.
- **Verwandte Begriffe:** [CSR](#csr-client-side-rendering), [SSG](#ssg-static-site-generation).
- **Referenzen:** [MDN: SSR](https://developer.mozilla.org/en-US/docs/Glossary/SSR).

### SSG (Static Site Generation)

- **Deutscher Begriff:** Statische Seitengenerierung.
- **Kurzdefinition:** Erzeugen von Seitendateien vor den Anfragen, üblicherweise während eines Builds.
- **Erklärung:** SSG bezeichnet auch den „Static Site Generator“, also das erzeugende Werkzeug. Statische Auslieferung schließt spätere clientseitige Aktualisierungen nicht aus.
- **Forschungsrelevanz:** Der Workspace nutzt statische Generierung; [EXP-002](/de/05-experiments/exp-002/) schlägt einen kontrollierten Rendering-Vergleich vor.
- **Verwandte Begriffe:** [SSR](#ssr-server-side-rendering), [Progressive Enhancement](#progressive-enhancement).
- **Referenzen:** [MDN: SSG](https://developer.mozilla.org/en-US/docs/Glossary/SSG).

### Hydration

- **Deutscher Begriff:** Hydrierung; meist „Hydration“.
- **Kurzdefinition:** Verbinden clientseitiger Anwendungslogik mit zuvor erzeugtem HTML, um eine interaktive Anwendung daraus zu machen.
- **Erklärung:** Frameworkdetails unterscheiden sich; Hydration verwendet vorhandenes Markup und erzeugt nicht zwingend alle Ausgangsinhalte erst auf dem Client.
- **Forschungsrelevanz:** Verfügbarkeit vor der Hydration von Interaktionen oder Inhalten trennen, die diese voraussetzen.
- **Verwandte Begriffe:** [CSR](#csr-client-side-rendering), [SSR](#ssr-server-side-rendering).
- **Referenzen:** [React: hydrateRoot](https://react.dev/reference/react-dom/client/hydrateRoot) (Implementierungsbeispiel, keine frameworkunabhängige Spezifikation).

### Progressive Enhancement

- **Deutscher Begriff:** Progressive Verbesserung.
- **Kurzdefinition:** Gestaltungsansatz mit einer nutzbaren Basis und zusätzlichen Fähigkeiten, sofern diese unterstützt werden.
- **Erklärung:** Wesentliche Inhalte oder Aktionen sollen nicht ausschließlich von optionalen Erweiterungen abhängen; der Ansatz ist umfassender als eine Rendering-Strategie.
- **Forschungsrelevanz:** Hilft bei Tests von Basis- und erweitertem Inhalt, ohne automatische Retrieval-Vorteile vorauszusetzen.
- **Verwandte Begriffe:** [Hydration](#hydration), [Semantic HTML](#semantic-html).
- **Referenzen:** [MDN: Progressive Enhancement](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement).

## Web-Crawling und Indexierung

### Crawling

- **Deutscher Begriff:** Automatisiertes Abrufen von Webseiten.
- **Kurzdefinition:** Automatisierter Abruf von Webressourcen durch einen Crawler, häufig anhand zuvor entdeckter URLs.
- **Erklärung:** Ein Search Engine Crawler unterstützt Suchfunktionen; „AI Crawler“ ist ein Sammelbegriff für unterschiedliche Zwecke, etwa Training oder Suche. Rendering verarbeitet eine Seite zur Darstellung und kann Skripte ausführen; es ist nicht mit dem Abruf gleichzusetzen.
- **Forschungsrelevanz:** Ein erfolgreicher Abruf belegt weder Indexierung noch Verwendung in einer Antwort.
- **Verwandte Begriffe:** [Indexing](#indexing), [Content Acquisition](#content-acquisition), [CSR](#csr-client-side-rendering).
- **Referenzen:** [Google: Funktionsweise der Suche](https://developers.google.com/search/docs/fundamentals/how-search-works).

### Indexing

- **Deutscher Begriff:** Indexierung.
- **Kurzdefinition:** Verarbeitung von Inhalten zu einer geordneten Repräsentation, die spätere Suche unterstützt.
- **Erklärung:** Der Search Index ist diese durchsuchbare Datenstruktur, nicht die aktuelle Website. Ranking ordnet Kandidaten für eine Anfrage und ist ein eigener Vorgang.
- **Forschungsrelevanz:** Auffindbarkeit, Crawlbarkeit, Indexaufnahme, Retrieval und Ranking als getrennte Ergebnisse behandeln.
- **Verwandte Begriffe:** [Crawling](#crawling), [Information Retrieval](#information-retrieval-ir).
- **Referenzen:** [Google: Indexierung](https://developers.google.com/search/docs/fundamentals/how-search-works#indexing).

### robots.txt

- **Deutscher Begriff:** robots.txt; Regeln für automatisierte Clients.
- **Kurzdefinition:** Datei unter `/robots.txt` eines Dienstes, die Crawlerzugriffsregeln nach dem Robots Exclusion Protocol ausdrückt.
- **Erklärung:** Sie ist weder Authentifizierung noch ein universeller Mechanismus zur Indexentfernung. Für Produkttoken und nutzerinitiierte Abrufe können unterschiedliche dokumentierte Regeln gelten.
- **Forschungsrelevanz:** Regeln und Clientzweck festhalten; Trainingsbeschränkungen beschränken nicht automatisch Suchzugriffe.
- **Verwandte Begriffe:** [Crawling](#crawling), [OAI-SearchBot](#oai-searchbot), [Google-Extended](#google-extended).
- **Referenzen:** [RFC 9309](https://www.rfc-editor.org/rfc/rfc9309.html).

### XML Sitemap

- **Deutscher Begriff:** XML-Sitemap.
- **Kurzdefinition:** XML-Dokument mit URLs und optionalen Metadaten nach dem Sitemap-Protokoll.
- **Erklärung:** Kann unterstützenden Crawlern bei der URL-Entdeckung helfen; garantiert weder Crawling, Indexierung, Ranking noch Zitierung.
- **Forschungsrelevanz:** Discovery-Variable, getrennt von der Extrahierbarkeit abgerufener Seiteninhalte.
- **Verwandte Begriffe:** [Crawling](#crawling), [Indexing](#indexing).
- **Referenzen:** [Sitemap-Protokoll](https://www.sitemaps.org/protocol.html).

## Inhaltsbeschaffung und Discovery

### Content Acquisition

- **Deutscher Begriff:** Inhaltsbeschaffung.
- **Kurzdefinition:** Projektbezogener Oberbegriff für das Beschaffen von Inhalten zur Verarbeitung, Indexierung, zum Retrieval oder zur Modellversorgung.
- **Erklärung:** Wege sind Suchindex-Crawling, Trainingssammlung, Live-Retrieval, direkte nutzerinitiierte Zugriffe, APIs, Uploads und verbundene Quellen. Discovery identifiziert mögliche Ressourcen; Acquisition beschafft deren Inhalte.
- **Forschungsrelevanz:** Zugangsweg benennen, statt für alle KI-Systeme dasselbe Web-Crawling anzunehmen.
- **Verwandte Begriffe:** [Crawling](#crawling), [Live Web Search](#live-web-search).
- **Referenzen:** [Google: Crawler und Fetcher](https://developers.google.com/crawling/docs/crawlers-fetchers/overview-google-crawlers), [OpenAI-Bots](https://developers.openai.com/api/docs/bots).

### Live Web Search

- **Deutscher Begriff:** Websuche zur Anfragezeit.
- **Kurzdefinition:** Suche in webbezogenen Quellen während der Bearbeitung einer Nutzeranfrage, statt ausschließlich Modellparameter zu verwenden.
- **Erklärung:** „Live“ garantiert keinen neuen Abruf jeder Seite. Ergebnisse können aus einem bestehenden Index oder einer externen Such-API stammen; verbundene Quellen können nicht öffentliche Inhalte liefern.
- **Forschungsrelevanz:** Produkt, Funktion, Datum und dokumentierten Zugangsweg festhalten; keine private Retrieval-Architektur unterstellen.
- **Verwandte Begriffe:** [Content Acquisition](#content-acquisition), [RAG](#retrieval-augmented-generation-rag).
- **Referenzen:** [OpenAI: Suche und nutzerinitiierte Zugriffe](https://developers.openai.com/api/docs/bots).

### llms.txt

- **Deutscher Begriff:** llms.txt; vorgeschlagene Inhaltsübersicht für LLMs.
- **Kurzdefinition:** Community-Vorschlag für eine Markdown-Datei mit Kontext und Links zu Inhalten für die LLM-Nutzung.
- **Erklärung:** Weder Robots Exclusion Protocol noch Zugriffsschutz oder Nachweis, dass ein bestimmter Anbieter die Datei verarbeitet.
- **Forschungsrelevanz:** Mögliche experimentelle Variable, keine etablierte GEO/AEO-Empfehlung. Dieses Glossar führt keine solche Datei ein.
- **Verwandte Begriffe:** [robots.txt](#robotstxt), [Content Representation](#content-representation).
- **Referenzen:** [llms.txt-Vorschlag](https://llmstxt.org/) (Beschreibung des Vorschlagsautors, kein unabhängiger Wirksamkeitsnachweis).

### OAI-SearchBot

- **Deutscher Begriff:** Eigenname; OpenAI-Suchcrawler.
- **Kurzdefinition:** Von OpenAI dokumentierter Crawler, um Websites in ChatGPT-Suchergebnissen anzuzeigen.
- **Erklärung:** Seine robots.txt-Steuerung ist von GPTBot unabhängig. ChatGPT-User führt bestimmte nutzerinitiierte Besuche aus und ist ein anderer Agent.
- **Forschungsrelevanz:** Suchzugriff darf nicht aus einer Erlaubnis zur Trainingssammlung abgeleitet werden.
- **Verwandte Begriffe:** [GPTBot](#gptbot), [robots.txt](#robotstxt).
- **Referenzen:** [OpenAI-Botdokumentation](https://developers.openai.com/api/docs/bots), geprüft am 2026-11-04.

### GPTBot

- **Deutscher Begriff:** Eigenname; OpenAI-Trainingscrawler.
- **Kurzdefinition:** Von OpenAI dokumentierter Crawler für Inhalte, die zum Training generativer Foundation Models verwendet werden können.
- **Erklärung:** Der Name macht ihn nicht zum Agenten für ChatGPT-Suche oder nutzerinitiierte Seitenbesuche.
- **Forschungsrelevanz:** Ein GPTBot-Besuch belegt keinen Abruf einer Seite für eine Live-Antwort.
- **Verwandte Begriffe:** [OAI-SearchBot](#oai-searchbot), [Content Acquisition](#content-acquisition).
- **Referenzen:** [OpenAI-Botdokumentation](https://developers.openai.com/api/docs/bots), geprüft am 2026-11-04.

### Google-Extended

- **Deutscher Begriff:** Eigenname; Google-Produktsteuerungstoken.
- **Kurzdefinition:** robots.txt-Produkttoken zur Steuerung bestimmter Nutzungen von Google gecrawlter Inhalte, kein separater HTTP-Crawler-User-Agent.
- **Erklärung:** Google dokumentiert Steuerungen für künftiges Gemini-Modelltraining und Grounding in bestimmten Gemini-/Vertex-AI-Produkten. Das Token steuert weder die Aufnahme in Google Search noch dient es dort als Rankingsignal.
- **Forschungsrelevanz:** Eine Inhaltsnutzungssteuerung nicht mit einem eigenen Crawler oder universellen Gemini-Zugriffsschalter verwechseln.
- **Verwandte Begriffe:** [robots.txt](#robotstxt), [Grounding](#grounding).
- **Referenzen:** [Google: Google-Extended](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers#google-extended), geprüft am 2026-11-04.

### PerplexityBot

- **Deutscher Begriff:** Eigenname; Perplexity-Suchcrawler.
- **Kurzdefinition:** Von Perplexity dokumentierter Bot zur Anzeige und Verlinkung von Websites in seinen Suchergebnissen.
- **Erklärung:** Laut Perplexity crawlt er nicht für das Training von Foundation Models. Perplexity-User ist der gesonderte Agent für nutzerinitiierte Zugriffe.
- **Forschungsrelevanz:** Such-Crawling von Besuchen zur Antwortzeit trennen; beides allein belegt keine Zitierqualität.
- **Verwandte Begriffe:** [Live Web Search](#live-web-search), [Source Attribution](#source-attribution).
- **Referenzen:** [Perplexity-Crawlerdokumentation](https://docs.perplexity.ai/docs/resources/perplexity-crawlers), geprüft am 2026-11-04.

### ClaudeBot

- **Deutscher Begriff:** Eigenname; Anthropic-Trainingscrawler.
- **Kurzdefinition:** Von Anthropic dokumentierter Bot, der Webinhalte sammelt, die zum Modelltraining beitragen können.
- **Erklärung:** Claude-SearchBot unterstützt Suche; Claude-User unterstützt nutzerinitiierte Zugriffe. Diese Zwecke sind nicht mit dem von ClaudeBot austauschbar.
- **Forschungsrelevanz:** Eine Trainingscrawler-Beobachtung zeigt nicht, wie Claude Quellen für eine bestimmte Antwort beschafft.
- **Verwandte Begriffe:** [GPTBot](#gptbot), [Content Acquisition](#content-acquisition).
- **Referenzen:** [Anthropic-Crawlerdokumentation](https://privacy.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler), geprüft am 2026-11-04.

## Inhaltsextraktion und Repräsentation

### Content Extraction

- **Deutscher Begriff:** Inhaltsextraktion.
- **Kurzdefinition:** Identifizieren und Gewinnen relevanter Inhalte oder Informationen aus einem Quelldokument.
- **Erklärung:** Im Projekt wird Hauptinhaltsextraktion von der Extraktion einzelner Fakten oder Entitäten getrennt. Navigation, Werbung und Artikeltext können unterschiedliche Behandlung erfordern.
- **Forschungsrelevanz:** [EXP-001](/de/05-experiments/exp-001/) benötigt ein explizites Ziel und Referenzannotationen, bevor Extraktionsvollständigkeit messbar ist.
- **Verwandte Begriffe:** [HTML Parsing](#html-parsing), [HTML Cleaning](#html-cleaning), [Chunking](#chunking).
- **Referenzen:** [Mozilla Readability](https://github.com/mozilla/readability) (Implementierung zur Hauptinhaltsextraktion).

### HTML Parsing

- **Deutscher Begriff:** HTML-Parsing; syntaktische Analyse von HTML.
- **Kurzdefinition:** Verarbeitung von HTML-Eingaben zu einer Dokumentstruktur nach den Regeln eines Parsers.
- **Erklärung:** Parsing erzeugt Knoten und Beziehungen, identifiziert aber nicht allein die wichtigen Inhalte. Browser-Parsing ist spezifiziert; andere Werkzeuge können abweichen.
- **Forschungsrelevanz:** Parser und Version dokumentieren, da rekonstruierte Struktur vom Quell-Markup abweichen kann.
- **Verwandte Begriffe:** [DOM](#dom-document-object-model), [Content Extraction](#content-extraction).
- **Referenzen:** [WHATWG: Parsing von HTML-Dokumenten](https://html.spec.whatwg.org/multipage/parsing.html).

### HTML Cleaning

- **Deutscher Begriff:** HTML-Bereinigung.
- **Kurzdefinition:** Kontextabhängige Vorverarbeitung, die ausgewählte HTML-Bestandteile entfernt oder normalisiert.
- **Erklärung:** Beispielsweise werden Skripte oder redundantes Markup entfernt. Boilerplate Removal zielt auf wiederholte oder nicht zum Hauptinhalt gehörende Inhalte; Security Sanitization auf unsichere Inhalte. Beides ist nicht automatisch Bereinigung für Retrieval.
- **Forschungsrelevanz:** Transformationen benennen und Strukturverluste prüfen; Cleaning ist kein Chunking.
- **Verwandte Begriffe:** [Content Extraction](#content-extraction), [HTML-to-Text Conversion](#html-to-text-conversion).
- **Referenzen:** [Mozilla Readability](https://github.com/mozilla/readability) (konkrete Verarbeitungsimplementierung, keine universelle Definition).

### HTML-to-Text Conversion

- **Deutscher Begriff:** HTML-zu-Text-Konvertierung.
- **Kurzdefinition:** Umwandlung von HTML-Inhalten in Text ohne das ursprüngliche HTML-Markup.
- **Erklärung:** Plain Text kann Wörter und Zeilenumbrüche bewahren, kodiert aber nicht von sich aus HTML-Elementrollen, Linkziele oder Tabellenbeziehungen. Verluste hängen vom Konverter ab.
- **Forschungsrelevanz:** Informationsgleichheit und Zwischenausgaben prüfen, bevor Retrieval-Unterschiede der Quellstruktur zugeschrieben werden.
- **Verwandte Begriffe:** [Content Representation](#content-representation), [HTML Cleaning](#html-cleaning).
- **Referenzen:** [Mozilla Readability: Ausgabe-API](https://github.com/mozilla/readability#api-reference) unterscheidet HTML-`content` von `textContent`.

### Content Representation

- **Deutscher Begriff:** Inhaltsrepräsentation.
- **Kurzdefinition:** Form, in der eine Verarbeitungsstufe Inhalte speichert oder empfängt.
- **Erklärung:** Beispiele sind Quell-HTML, DOM nach Rendering, bereinigtes HTML, Plain Text, Markdown und strukturierte Datensätze. Markdown kodiert Textstruktur, ist aber weder DOM noch verlustloser HTML-Ersatz.
- **Forschungsrelevanz:** Repräsentationen zwischen Stufen festhalten; Quellwebsite und tatsächliche Modelleingabe können erheblich voneinander abweichen.
- **Verwandte Begriffe:** [DOM](#dom-document-object-model), [HTML-to-Text Conversion](#html-to-text-conversion), [RAG](#retrieval-augmented-generation-rag).
- **Referenzen:** [WHATWG HTML-Parsing](https://html.spec.whatwg.org/multipage/parsing.html), [CommonMark-Spezifikation](https://spec.commonmark.org/).

### Structured Data

- **Deutscher Begriff:** Strukturierte Daten.
- **Kurzdefinition:** Daten mit expliziten Feldern, Typen oder Beziehungen; in der Webforschung häufig maschinenlesbare Entitätsbeschreibungen.
- **Erklärung:** Schema.org stellt ein Vokabular bereit. JSON-LD ist ein Serialisierungsformat für Linked Data, nicht das Vokabular selbst. Strukturierte Daten müssen nicht in JSON-LD vorliegen.
- **Forschungsrelevanz:** [EXP-003](/de/05-experiments/exp-003/) trennt Formatänderungen von zusätzlichen Fakten. Valides Markup belegt allein keine Antwort- oder Zitiervorteile.
- **Verwandte Begriffe:** [Semantic HTML](#semantic-html), [Content Representation](#content-representation).
- **Referenzen:** [Schema.org-Einführung](https://schema.org/docs/gs.html), [W3C JSON-LD 1.1](https://www.w3.org/TR/json-ld11/).

## Information Retrieval und RAG

### Information Retrieval (IR)

- **Deutscher Begriff:** Informationsretrieval; Informationsabruf.
- **Kurzdefinition:** Finden von Einträgen in einer Sammlung, die für einen Informationsbedarf relevant sind.
- **Erklärung:** Ein Retriever wählt Kandidaten aus, häufig anhand von Scores. Retrieval erzeugt selbst keine Antwort und garantiert nicht, dass die Auswahl eine solche stützt.
- **Forschungsrelevanz:** Retrieval in [EXP-004](/de/05-experiments/exp-004/) getrennt von Generierung auswerten.
- **Verwandte Begriffe:** [Vector Search](#vector-search), [Reranking](#reranking).
- **Referenzen:** [Microsoft: Retrieval in RAG](https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview) (Implementierungskontext).

### Retrieval-Augmented Generation (RAG)

- **Deutscher Begriff:** Abrufgestützte Generierung.
- **Kurzdefinition:** Systemmuster, das einem generativen Modell abgerufene Informationen zur Erzeugung einer Ausgabe bereitstellt.
- **Erklärung:** Eine Knowledge Base liefert abrufbares Material; Ingestion bereitet es vor. RAG erfordert weder öffentliches Web noch eine bestimmte Vektordatenbank oder erneutes Generatortraining bei jeder Dokumentänderung.
- **Forschungsrelevanz:** Ursprüngliches Forschungsmodell von heutiger breiterer Verwendung unterscheiden; siehe [RAG-Literaturthemen](/de/02-literature/rag-retrieval/).
- **Verwandte Begriffe:** [Information Retrieval](#information-retrieval-ir), [Grounding](#grounding).
- **Referenzen:** [Lewis et al.: ursprüngliches RAG-Paper](https://arxiv.org/abs/2005.11401), [Microsoft: RAG-Übersicht](https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview).

### Chunking

- **Deutscher Begriff:** Aufteilung in Dokumentabschnitte.
- **Kurzdefinition:** Aufteilen von Inhalten in Einheiten zur Verarbeitung, Indexierung, zum Retrieval oder als Modelleingabe.
- **Erklärung:** Fixed-Size Chunking folgt einer Größenregel, oft in Tokens oder Zeichen. Semantic Chunking nutzt bedeutungsbezogene Grenzen; Implementierungen unterscheiden sich. Beides ist nicht gleichbedeutend mit HTML Cleaning.
- **Forschungsrelevanz:** Einheit, Größe, Überlappung und Grenzregeln in [EXP-004](/de/05-experiments/exp-004/) festhalten.
- **Verwandte Begriffe:** [Structure-Aware Chunking](#structure-aware-chunking), [Context Window](#context-window).
- **Referenzen:** [Microsoft: Chunking-Strategien](https://learn.microsoft.com/en-us/azure/search/vector-search-how-to-chunk-documents).

### Structure-Aware Chunking

- **Deutscher Begriff:** Strukturberücksichtigende Segmentierung.
- **Kurzdefinition:** Chunking, das Dokumentorganisation wie Überschriften, Abschnitte, Listen oder Tabellen für Grenzen oder erhaltenen Kontext berücksichtigt.
- **Erklärung:** HTML-Aware Chunking ist eine Variante mit HTML-Struktur. Der Ansatz unterscheidet sich von ausschließlich festen Längen oder embeddingbasierter semantischer Ähnlichkeit.
- **Forschungsrelevanz:** [H-005](/de/04-hypotheses/h-005/) ist ungetestet; ein Parser kann Struktur bereits vor dem Chunking verwerfen.
- **Verwandte Begriffe:** [Heading Hierarchy](#heading-hierarchy), [Chunking](#chunking).
- **Referenzen:** [Microsoft: inhaltsbezogenes Chunking](https://learn.microsoft.com/en-us/azure/search/vector-search-how-to-chunk-documents).

### Embeddings

- **Deutscher Begriff:** Vektoreinbettungen.
- **Kurzdefinition:** Erlernte numerische Vektorrepräsentationen von Objekten, etwa Textpassagen oder Anfragen.
- **Erklärung:** Ein Modell bildet Einträge in einen Vektorraum ab. Ähnlichkeit hängt von Modell und Aufgabe ab und ist kein universelles Maß für Bedeutung oder Wahrheit.
- **Forschungsrelevanz:** Embeddingmodell und Eingaberepräsentation beim Testen der Frontend-Struktur konstant halten.
- **Verwandte Begriffe:** [Vector Search](#vector-search), [Chunking](#chunking).
- **Referenzen:** [Google: Embeddings](https://developers.google.com/machine-learning/crash-course/embeddings).

### Vector Search

- **Deutscher Begriff:** Vektorsuche.
- **Kurzdefinition:** Abruf von Einträgen durch Vergleich ihrer Vektorrepräsentationen anhand eines festgelegten Ähnlichkeits- oder Distanzmaßes.
- **Erklärung:** Die Suche kann exakt oder approximativ sein. Ähnliche Vektoren sind nicht zwangsläufig faktisch korrekt oder für eine Antwort ausreichend.
- **Forschungsrelevanz:** Metrik, Index, Filterung und Trefferzahl vor dem Vergleich der Retrieval-Qualität dokumentieren.
- **Verwandte Begriffe:** [Embeddings](#embeddings), [Hybrid Search](#hybrid-search).
- **Referenzen:** [Microsoft: Vektorsuche](https://learn.microsoft.com/en-us/azure/search/vector-search-overview).

### Hybrid Search

- **Deutscher Begriff:** Hybride Suche.
- **Kurzdefinition:** Hier: Retrieval, das lexikalische beziehungsweise Textsuche mit Vektorsuche kombiniert.
- **Erklärung:** Kandidatenauswahl, Gewichtung und Zusammenführung unterscheiden sich je Implementierung. „Hybrid“ bezeichnet keinen einzelnen standardisierten Algorithmus.
- **Forschungsrelevanz:** Kombination offenlegen; veränderte Retrieval-Konfiguration kann einen Markup-Vergleich verfälschen.
- **Verwandte Begriffe:** [Vector Search](#vector-search), [Reranking](#reranking).
- **Referenzen:** [Microsoft: hybride Suche](https://learn.microsoft.com/en-us/azure/search/hybrid-search-overview) (eine Implementierung).

### Reranking

- **Deutscher Begriff:** Neusortierung von Suchkandidaten.
- **Kurzdefinition:** Zusätzliche Bewertung oder Sortierung bereits abgerufener Kandidaten.
- **Erklärung:** Unterscheidet sich vom ersten Retrieval. „Retrieval Refinement“ ist umfassender und kann auch Filtern oder Auswählen von Material meinen; den konkreten Vorgang je Paper bestimmen.
- **Forschungsrelevanz:** Eine andere Endreihenfolge kann vom Reranker statt von der Frontend-Repräsentation stammen.
- **Verwandte Begriffe:** [Information Retrieval](#information-retrieval-ir), [Hybrid Search](#hybrid-search).
- **Referenzen:** [Microsoft: semantisches Reranking](https://learn.microsoft.com/en-us/azure/search/semantic-search-overview) (eine Implementierung).

### Context Window

- **Deutscher Begriff:** Kontextfenster.
- **Kurzdefinition:** Modellspezifische Tokenkapazität für die Verarbeitung des Kontexts und gegebenenfalls für die erzeugte Ausgabe.
- **Erklärung:** Tokens sind vom Tokenizer bestimmte Einheiten, nicht unbedingt Wörter. Context Construction wählt Anweisungen, Verlauf und abgerufenes Material aus und ordnet sie innerhalb der jeweiligen Grenzen an.
- **Forschungsrelevanz:** Modellgrenzen, Kürzung, Reihenfolge und Ein-/Ausgabebudget dokumentieren; passende Länge belegt keine korrekte Nutzung durch das Modell.
- **Verwandte Begriffe:** [Chunking](#chunking), [LLM](#large-language-model-llm).
- **Referenzen:** [Google-ML-Glossar](https://developers.google.com/machine-learning/glossary#context-window).

## GEO und AEO

### Generative Engine Optimization (GEO)

- **Deutscher Begriff:** Optimierung für generative Suchsysteme.
- **Kurzdefinition:** Forschungs- und Praxisbegriff für Interventionen, die Sichtbarkeit oder Nutzung von Inhalten in Antworten generativer Systeme beeinflussen sollen.
- **Erklärung:** Sichtbarkeit kann Erwähnungen, Quellenzuordnung, Zitationen oder andere erklärte Maße meinen. Der Begriff belegt keine Wirksamkeit einer Intervention.
- **Forschungsrelevanz:** System und Ergebnis definieren; die [GEO-Literaturfragen](/de/02-literature/geo-aeo/) trennen Terminologie von Mechanismen.
- **Verwandte Begriffe:** [AEO](#answer-engine-optimization-aeo), [Source Attribution](#source-attribution).
- **Referenzen:** [GEO: Generative Engine Optimization](https://arxiv.org/abs/2311.09735) (eine Forschungsformulierung, keine universelle Frontend-Empfehlung).

### Answer Engine Optimization (AEO)

- **Deutscher Begriff:** Optimierung für antwortorientierte Systeme.
- **Kurzdefinition:** Kontextabhängiger Sammelbegriff für Maßnahmen, die Inhalte in antwortorientierten Systemen verfügbar oder nutzbar machen sollen.
- **Erklärung:** Hier ist kein einzelner technischer Mechanismus gemeint. Direkte Antwortextraktion, Passagenabruf und Antwortgenerierung sind unterschiedliche Aufgaben.
- **Forschungsrelevanz:** Arbeitsdefinition des Projekts; Antwortqualität, Extraktion oder Sichtbarkeit operationalisieren, statt „AEO“ als einen Score zu messen.
- **Verwandte Begriffe:** [GEO](#generative-engine-optimization-geo), [Content Extraction](#content-extraction).
- **Referenzen:** [GEO/AEO-Reviewfragen des Projekts](/de/02-literature/geo-aeo/) (Kontext dieser Arbeitsdefinition, kein externer Standard).

### Source Attribution

- **Deutscher Begriff:** Quellenzuordnung.
- **Kurzdefinition:** Angabe der Quelle, der ein Inhalt oder eine Aussage zugeschrieben wird.
- **Erklärung:** Eine Zitation ist eine Form der Zuordnung. Citation Behavior beschreibt, wann und wie Systeme zitieren; Citation Accuracy prüft, ob die zitierte Quelle die Aussage tatsächlich stützt.
- **Forschungsrelevanz:** Quellenpräsenz von Belegkraft und Antwortkorrektheit trennen; siehe [Evaluation](/de/02-literature/evaluation/) und [Evidenzmatrix](/de/06-evidence/matrix/).
- **Verwandte Begriffe:** [GEO](#generative-engine-optimization-geo), [Grounding](#grounding).
- **Referenzen:** [Projektdefinition der Zitiergenauigkeit](/de/01-foundation/terminology/), [RAG-Paper: Provenienz als Motivation](https://arxiv.org/abs/2005.11401).

## KI und Sprachmodelle

### Large Language Model (LLM)

- **Deutscher Begriff:** Großes Sprachmodell.
- **Kurzdefinition:** Großes erlerntes Sprachmodell, das Muster in Tokensequenzen repräsentiert; generative LLMs verwenden diese Muster zur Texterzeugung.
- **Erklärung:** Training verändert Modellparameter; Inferenz wendet ein trainiertes Modell auf eine Eingabe an. Eine Webseite im Prompt bereitzustellen ist allein kein Modelltraining.
- **Forschungsrelevanz:** Parameterwissen von durch Retrieval beschafften Informationen trennen; nicht jedes Foundation Model ist ein reines Text-LLM.
- **Verwandte Begriffe:** [RAG](#retrieval-augmented-generation-rag), [Context Window](#context-window).
- **Referenzen:** [Google: Einführung in LLMs](https://developers.google.com/machine-learning/crash-course/llm).

### Grounding

- **Deutscher Begriff:** Verankerung in Quellen oder Daten.
- **Kurzdefinition:** Im Projekt: Verknüpfen generierter Antworten mit bereitgestellten oder abgerufenen Informationen, statt ausschließlich Modellparameter zu nutzen.
- **Erklärung:** Die Verwendung variiert je Anbieter. Grounding garantiert weder faktische Korrektheit noch Halluzinationsfreiheit oder korrekte Zitationen; Halluzination bezeichnet häufig plausibel klingende, aber unbelegte oder falsche generierte Inhalte.
- **Forschungsrelevanz:** Quellenstützung getrennt von Retrieval-Erfolg und Antwortqualität bewerten.
- **Verwandte Begriffe:** [RAG](#retrieval-augmented-generation-rag), [Source Attribution](#source-attribution).
- **Referenzen:** [Google-ML-Glossar: Grounding](https://developers.google.com/machine-learning/glossary#grounding).

## Weiteres Referenzmaterial

Vorhandene Inhalte statt paralleler Register nutzen: [Paper-Analysevorlage](/de/03-notes/paper-notes/), [Journalvorlage](/de/03-notes/templates/journal-entry/), [Leitlinienvorlage](/de/07-guidelines/templates/guideline/), [technische Notizen](/de/03-notes/technical-notes/) und [Literaturregister](/de/02-literature/). Ein eigener Vorlagenhub, ein technischer Referenzkatalog und eine Bibliografie können unter Referenz ergänzt werden, sobald substanzielle Inhalte dies rechtfertigen.
