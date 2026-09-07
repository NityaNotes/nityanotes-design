import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

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
    return html`
      <section class="layout-page layout-section-end design-section layout-stack layout-stack-lg" id="element-boundaries">
        <p class="type-eyebrow">05 · Boundaries</p>
        <h2 class="type-section">Elements compose; they do not invent.</h2>
        <p class="type-lede">Elements take their colour, geometry, type, and behaviour from the grammars that own those decisions.</p>
        <div class="layout-row"><a class="element-badge" href="/design/color">Colour</a><a class="element-badge" href="/design/layout">Layout</a><a class="element-badge" href="/design/english">Typography</a><a class="element-badge" href="/design/interaction">Interaction</a><a class="element-badge" href="/design/button">Buttons</a></div>
      </section>
    `;
  }
}
