import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designTypographyContent } from "@app/data/design-typography-content.ts";

/**
 * Shows the one-serif rule: Tiro carries every śloka, the interface stays sans.
 *
 * The specimen names the family per register so a second serif is visibly
 * absent from the apparatus, in either language.
 *
 * Selector: `typography-serif-section`.
 */
@Component({ selector: "typography-serif-section", shadow: false })
export class TypographySerifSectionComponent extends BaseElement {
  /** Creates the framework element before Dota renders the static register badges. */
  constructor() {
    super();
  }

  /** Renders the serif rule without reading or changing application state. */
  render() {
    const { serif } = designTypographyContent;

    return html`
      <section class="layout-page layout-section typography-section design-section" id="typography-serif" aria-label="${serif.label}">
        <p class="type-eyebrow design-specimen-eyebrow">${serif.eyebrow}</p>
        <h2 class="type-subsection">${serif.title}</h2>
        <p class="type-lede">${serif.lede}</p>
        <div class="layout-row">
          ${serif.registers.map((register) => html`<span class="element-badge">${register}</span>`)}
        </div>
        <p>${serif.conclusion}</p>
      </section>
    `;
  }
}
