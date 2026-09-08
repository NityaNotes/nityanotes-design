import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designEnglishContent } from "@app/data/design-english-content.ts";

/**
 * Demonstrates the shared layout system as the typography page consumes it.
 *
 * The specimens show the page container with a grid, then the reading and
 * content measures, each framed so its width is visible against its neighbours.
 *
 * Selector: `english-layout-section`.
 */
@Component({ selector: "english-layout-section", shadow: false })
export class EnglishLayoutSectionComponent extends BaseElement {
  /** Creates the framework element before Dota renders the static layout specimens. */
  constructor() {
    super();
  }

  /** Renders the layout specimens without reading or changing application state. */
  render() {
    const copy = designEnglishContent.copy["english/english-layout-section/english-layout-section"];
    return html`
      <section class="layout-page layout-section english-section design-section" id="english-layout" aria-label="${copy[0]}">
          <p class="type-eyebrow design-specimen-eyebrow">${copy[1]}</p>
          <h2 class="type-subsection">${copy[2]}<code>${copy[3]}</code>${copy[4]}</h2>
          <p class="type-lede">${copy[5]}<code>${copy[6]}</code>${copy[7]}</p>
          <div class="design-specimen english-layout-section__specimens">
            <div class="english-layout-section__frame">
              <p class="type-eyebrow">${copy[8]}<code>${copy[9]}</code></p>
              <p class="type-prose">${copy[10]}<code>${copy[11]}</code>${copy[12]}</p>
              <div class="layout-grid-2">
                <div class="english-layout-section__cell">
                  <p class="type-card-title">${copy[13]}</p>
                  <p class="type-compact english-layout-section__cell-note">${copy[14]}</p>
                </div>
                <div class="english-layout-section__cell">
                  <p class="type-card-title">${copy[15]}</p>
                  <p class="type-compact english-layout-section__cell-note">${copy[16]}</p>
                </div>
              </div>
            </div>
            <div class="english-layout-section__measures">
              <p class="type-eyebrow">${copy[17]}</p>
              <div class="english-layout-section__frame english-layout-section__frame--reading">
                <p class="type-prose"><strong>${copy[18]}</strong>${copy[19]}</p>
              </div>
              <div class="english-layout-section__frame english-layout-section__frame--content">
                <p class="type-prose"><strong>${copy[20]}</strong>${copy[21]}</p>
              </div>
            </div>
          </div>
          <p class="type-compact">${copy[22]}</p>
      </section>
    `;
  }
}
