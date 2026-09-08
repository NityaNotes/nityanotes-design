import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designEnglishContent } from "@app/data/design-english-content.ts";

/**
 * Shows the three English registers: scripture, interface, and data.
 *
 * The specimen names which family carries which run of text and why a second
 * serif would put the apparatus in argument with the scripture.
 *
 * Selector: `english-programme-section`.
 */
@Component({ selector: "english-programme-section", shadow: false })
export class EnglishProgrammeSectionComponent extends BaseElement {
  /** Creates the framework element before Dota renders the static register badges. */
  constructor() {
    super();
  }

  /** Renders the register programme without reading or changing application state. */
  render() {
    const copy = designEnglishContent.copy["english/english-programme-section/english-programme-section"];
    return html`
      <section class="layout-page layout-section english-section design-section" id="english-programme" aria-label="${copy[0]}">
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
