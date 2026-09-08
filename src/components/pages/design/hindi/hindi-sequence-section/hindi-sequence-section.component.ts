import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designHindiContent } from "@app/data/design-hindi-content.ts";

/**
 * Demonstrates the fixed verse presentation sequence in the Hindi interface.
 *
 * The specimen renders श्लोक, अनुलिपि (IAST), भावार्थ, and स्रोत in that order,
 * closing with the citation exactly as the English route does.
 *
 * Selector: `hindi-sequence-section`.
 */
@Component({ selector: "hindi-sequence-section", shadow: false })
export class HindiSequenceSectionComponent extends BaseElement {
  /** Creates the framework element before Dota renders the static verse specimen. */
  constructor() {
    super();
  }

  /** Renders the verse sequence specimen without reading or changing application state. */
  render() {
    const copy = designHindiContent.copy["hindi/hindi-sequence-section/hindi-sequence-section"];
    return html`
      <section class="layout-page layout-section hindi-section design-section" id="hindi-sequence" aria-label="${copy[0]}" lang="hi">
          <p class="type-eyebrow design-specimen-eyebrow">${copy[1]}</p>
          <h2 class="type-subsection">${copy[2]}</h2>
          <p class="type-lede">${copy[3]}</p>
          <div class="design-specimen">
            <p class="type-verse-display" lang="sa">${copy[4]}<br />${copy[5]}</p>
            <p class="type-iast" lang="sa-Latn">${copy[6]}</p>
            <p class="type-gloss">${copy[7]}</p>
            <p class="type-source">${copy[8]}</p>
          </div>
          <p>${copy[9]}</p>
      </section>
    `;
  }
}
