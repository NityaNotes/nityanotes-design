import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designElementPageContent } from "@app/data/design-element-page-content.ts";

/**
 * Introduces the element grammar contract on `/design/element`.
 *
 * The section states that cards, fields, badges, and callouts reuse the shared
 * surface, border, and radius roles instead of inventing local geometry, so the
 * specimens that follow read as one material system.
 *
 * Selector: `element-material-section`.
 */
@Component({ selector: "element-material-section", shadow: false })
export class ElementMaterialSectionComponent extends BaseElement {
  /** Creates the framework element before Dota renders its static copy. */
  constructor() {
    super();
  }

  /** Renders the material-system statement without changing application state. */
  render() {
    const copy = designElementPageContent.copy["element/element-material-section/element-material-section"];
    return html`
      <section class="layout-page layout-section design-section layout-stack layout-stack-sm">
        <p class="type-eyebrow">${copy[0]}</p>
        <h2 class="type-subsection">${copy[1]}</h2>
        <p>${copy[2]}</p>
      </section>
    `;
  }
}
