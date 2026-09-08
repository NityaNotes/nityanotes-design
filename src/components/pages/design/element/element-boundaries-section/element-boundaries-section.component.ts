import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designElementPageContent } from "@app/data/design-element-page-content.ts";

/**
 * Closes `/design/element` with the boundaries of the element grammar.
 *
 * The section anchors the page's cross-references (`#element-boundaries`) and routes
 * readers to the typography, interaction, and button grammars that each element
 * composes, so the element page stays free of duplicated rules.
 *
 * Selector: `element-boundaries-section`.
 */
@Component({ selector: "element-boundaries-section", shadow: false })
export class ElementBoundariesSectionComponent extends BaseElement {
  /** Creates the framework element before Dota renders its static links. */
  constructor() {
    super();
  }

  /** Renders the boundary statement and onward route links without side effects. */
  render() {
    const copy = designElementPageContent.copy["element/element-boundaries-section/element-boundaries-section"];
    return html`
      <section class="layout-page layout-section-end design-section layout-stack layout-stack-lg" id="element-boundaries">
        <p class="type-eyebrow">${copy[0]}</p>
        <h2 class="type-section">${copy[1]}</h2>
        <p class="type-lede">${copy[2]}</p>
        <div class="layout-row"><a class="element-badge" href="/design/color">${copy[3]}</a><a class="element-badge" href="/design/layout">${copy[4]}</a><a class="element-badge" href="/design/english">${copy[5]}</a><a class="element-badge" href="/design/interaction">${copy[6]}</a><a class="element-badge" href="/design/button">${copy[7]}</a></div>
      </section>
    `;
  }
}
