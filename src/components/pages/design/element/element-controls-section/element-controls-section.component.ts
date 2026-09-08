import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designElementPageContent } from "@app/data/design-element-page-content.ts";

/**
 * Demonstrates the semantic control groups from the element reference.
 *
 * The `/design/element` route places this before the card and form specimens so a
 * maintainer chooses the correct HTML control before applying shared visual tokens.
 * Selector: `element-controls-section`.
 */
@Component({ selector: "element-controls-section", shadow: false })
export class ElementControlsSectionComponent extends BaseElement {
  constructor() {
    super();
  }

  /** Renders semantic control choices and the shared button hierarchy without side effects. */
  render() {
    const copy = designElementPageContent.copy["element/element-controls-section/element-controls-section"];
    return html`
      <section class="layout-page layout-section design-section" id="element-controls">
        <p class="type-eyebrow">${copy[9]}</p>
        <h2 class="type-section">${copy[10]}</h2>
        <p class="type-lede">${copy[11]}</p>
        <div class="layout-grid-2" style="margin-block-start:var(--layout-space-7)">
          <article class="element-card">
            <h3 class="type-card-title">${copy[12]}</h3>
            <p class="type-compact">${copy[13]}<code>${copy[14]}</code>${copy[15]}</p>
            <div class="layout-row" aria-label="${copy[0]}">
              <app-button label="${copy[1]}" tone="primary" state="busy"></app-button>
              <app-button label="${copy[2]}" state="done"></app-button>
            </div>
          </article>
          <article class="element-card">
            <h3 class="type-card-title">${copy[16]}</h3>
            <p class="type-compact">${copy[17]}<code>${copy[18]}</code>${copy[19]}</p>
            <div class="layout-row">
              <app-button label="${copy[3]}" tone="link" interaction="shift" href="/design/button"></app-button>
            </div>
          </article>
          <article class="element-card">
            <h3 class="type-card-title">${copy[20]}</h3>
            <p class="type-compact">${copy[21]}</p>
            <div class="layout-row" role="group" aria-label="${copy[4]}">
              <label class="button button-secondary"><input type="radio" name="element-practice-frequency" value="daily" checked>${copy[22]}</label>
              <label class="button button-secondary"><input type="radio" name="element-practice-frequency" value="weekly">${copy[23]}</label>
            </div>
          </article>
          <article class="element-card">
            <h3 class="type-card-title">${copy[24]}</h3>
            <p class="type-compact">${copy[25]}</p>
            <details class="layout-stack layout-stack-sm" open>
              <summary class="button button-secondary">${copy[26]}</summary>
              <p class="type-compact">${copy[27]}</p>
            </details>
          </article>
        </div>
        <div class="element-card layout-stack layout-stack-sm" style="margin-block-start:var(--layout-space-5)"><p class="type-eyebrow">${copy[28]}</p><h3 class="type-card-title">${copy[29]}</h3><div class="layout-row"><app-button label="${copy[5]}" tone="primary"></app-button><app-button label="${copy[6]}"></app-button><app-button label="${copy[7]}" tone="quiet"></app-button><app-button label="${copy[8]}" tone="quiet" disabled="true"></app-button></div></div>
      </section>
    `;
  }
}
