import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

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
    return html`
      <section class="layout-page layout-section design-section layout-stack layout-stack-sm">
        <p class="type-eyebrow">01 · Surface</p>
        <h2 class="type-subsection">Elements belong to one material system.</h2>
        <p>Cards, fields, badges, and callouts are composed from the same surface, border, and radius roles. Related specimens on this page cross-reference each other so a reader can follow one building block to the next.</p>
      </section>
    `;
  }
}
