import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designTypographyContent } from "@app/data/design-typography-content.ts";

/**
 * States the order of things: the śloka is the subject, the rest is apparatus.
 *
 * The specimen renders the fixed verse sequence once so the reader sees the
 * hierarchy the whole type system protects.
 *
 * Selector: `typography-order-section`.
 */
@Component({ selector: "typography-order-section", shadow: false })
export class TypographyOrderSectionComponent extends BaseElement {
  /** Creates the framework element before Dota renders the static order specimen. */
  constructor() {
    super();
  }

  /** Renders the order specimen without reading or changing application state. */
  render() {
    const { order } = designTypographyContent;

    return html`
      <section class="layout-page layout-section typography-section design-section" id="typography-order" aria-label="${order.label}">
        <p class="type-eyebrow design-specimen-eyebrow">${order.eyebrow}</p>
        <h2 class="type-subsection">${order.title}</h2>
        <p class="type-lede">${order.lede}</p>
        <reading-specimen language="en"></reading-specimen>
        <p>${order.conclusion}</p>
      </section>
    `;
  }
}
