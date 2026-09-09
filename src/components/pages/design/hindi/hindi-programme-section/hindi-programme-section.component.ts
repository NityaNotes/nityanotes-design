import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designHindiContent } from "@app/data/design-hindi-content.ts";

/**
 * Shows Karma as the shared family for Hindi text and scripture.
 *
 * The specimen names which family carries which run of Devanagari text and why
 * Monospace remains separate for verse IDs and code.
 *
 * Selector: `hindi-programme-section`.
 */
@Component({ selector: "hindi-programme-section", shadow: false })
export class HindiProgrammeSectionComponent extends BaseElement {
  /** Creates the framework element before Dota renders the static register badges. */
  constructor() {
    super();
  }

  /** Renders the register programme without reading or changing application state. */
  render() {
    const copy = designHindiContent.copy["hindi/hindi-programme-section/hindi-programme-section"];
    return html`
      <section class="layout-page layout-section hindi-section design-section" id="hindi-programme" aria-label="${copy[0]}" lang="hi">
          <p class="type-eyebrow design-specimen-eyebrow">${copy[1]}</p>
          <h2 class="type-subsection">${copy[2]}</h2>
          <p class="type-lede">${copy[3]}</p>
          <div class="layout-row">
            <span class="element-badge">${copy[4]}</span>
            <span class="element-badge">${copy[5]}</span>
            <span class="element-badge">${copy[6]}</span>
          </div>
          <p>${copy[7]}</p>
      </section>
    `;
  }
}
