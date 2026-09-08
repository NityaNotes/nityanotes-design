import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designEnglishContent } from "@app/data/design-english-content.ts";

/**
 * Demonstrates the standard pairing patterns between type roles.
 *
 * The settings specimen shows the four pairings live: section with lede,
 * card title with body, metric with word, and label with a real field built
 * from the shared input grammar.
 *
 * Selector: `english-pairings-section`.
 */
@Component({ selector: "english-pairings-section", shadow: false })
export class EnglishPairingsSectionComponent extends BaseElement {
  /** Creates the framework element before Dota renders the static pairing specimens. */
  constructor() {
    super();
  }

  /** Renders the pairing patterns without reading or changing application state. */
  render() {
    const copy = designEnglishContent.copy["english/english-pairings-section/english-pairings-section"];
    return html`
      <section class="layout-page layout-section english-section design-section" id="english-pairings" aria-label="${copy[0]}">
          <p class="type-eyebrow design-specimen-eyebrow">${copy[2]}</p>
          <h2 class="type-subsection">${copy[3]}</h2>
          <p class="type-lede">${copy[4]}</p>
          <div class="layout-row">
            <span class="element-badge">${copy[5]}</span>
            <span class="element-badge">${copy[6]}</span>
            <span class="element-badge">${copy[7]}</span>
            <span class="element-badge">${copy[8]}</span>
          </div>
          <div class="design-specimen english-pairings-section__specimen" aria-label="${copy[1]}">
            <h3 class="type-section">${copy[9]}</h3>
            <p class="type-lede">${copy[10]}</p>
            <div class="layout-grid-2 english-pairings-section__fields">
              <div class="element-field">
                <label class="type-label" for="english-daily-goal">${copy[11]}</label>
                <div class="input-select">
                  <select class="input" id="english-daily-goal">
                    <option>${copy[12]}</option>
                    <option>${copy[13]}</option>
                    <option>${copy[14]}</option>
                  </select>
                </div>
              </div>
              <div class="element-field">
                <label class="type-label" for="english-reminder-time">${copy[15]}</label>
                <input class="input" id="english-reminder-time" type="time" />
              </div>
            </div>
          </div>
      </section>
    `;
  }
}
