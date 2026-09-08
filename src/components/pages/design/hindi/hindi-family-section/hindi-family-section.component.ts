import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designHindiContent } from "@app/data/design-hindi-content.ts";

/**
 * Demonstrates that language, not a fallback chain, decides the family.
 *
 * The specimen shows an English word inside a Hindi sentence rendered in the
 * Devanagari family, and explains why tracking breaks the shirorekha.
 *
 * Selector: `hindi-family-section`.
 */
@Component({ selector: "hindi-family-section", shadow: false })
export class HindiFamilySectionComponent extends BaseElement {
  /** Creates the framework element before Dota renders the static family specimen. */
  constructor() {
    super();
  }

  /** Renders the family rule without reading or changing application state. */
  render() {
    const copy = designHindiContent.copy["hindi/hindi-family-section/hindi-family-section"];
    return html`
      <section class="layout-page layout-section hindi-section design-section" id="hindi-family" aria-label="${copy[0]}" lang="hi">
          <p class="type-eyebrow design-specimen-eyebrow">${copy[1]}</p>
          <h2 class="type-subsection">${copy[2]}</h2>
          <p class="type-lede">${copy[3]}</p>
          <div class="design-specimen">
            <p class="type-card-title">${copy[4]}<span lang="en">${copy[5]}</span>${copy[6]}</p>
            <p class="type-compact">${copy[7]}<span lang="en">${copy[8]}</span>${copy[9]}</p>
          </div>
          <p>${copy[10]}</p>
      </section>
    `;
  }
}
