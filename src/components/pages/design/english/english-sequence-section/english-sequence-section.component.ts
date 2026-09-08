import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designEnglishContent } from "@app/data/design-english-content.ts";

/**
 * Demonstrates the fixed verse presentation sequence on the English route.
 *
 * The specimen renders verse, IAST, gloss, and source in that order so the
 * citation closes the block instead of opening it.
 *
 * Selector: `english-sequence-section`.
 */
@Component({ selector: "english-sequence-section", shadow: false })
export class EnglishSequenceSectionComponent extends BaseElement {
  /** Creates the framework element before Dota renders the static verse specimen. */
  constructor() {
    super();
  }

  /** Renders the verse sequence specimen without reading or changing application state. */
  render() {
    const copy = designEnglishContent.copy["english/english-sequence-section/english-sequence-section"];
    return html`
      <section class="layout-page layout-section english-section design-section" id="english-sequence" aria-label="${copy[0]}">
          <p class="type-eyebrow design-specimen-eyebrow">${copy[1]}</p>
          <h2 class="type-subsection">${copy[2]}</h2>
          <p class="type-lede">${copy[3]}</p>
          <div class="design-specimen">
            <p class="type-verse-display">${copy[4]}<br />${copy[5]}</p>
            <p class="type-iast">${copy[6]}</p>
            <p class="type-gloss">${copy[7]}</p>
            <p class="type-source">${copy[8]}</p>
          </div>
          <p>${copy[9]}</p>
      </section>
    `;
  }
}
