import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designButtonContent } from "@app/data/design-button-content.ts";

/**
 * Defines the linked-button grammar for destinations.
 * These specimens stay anchors so a visual button never changes the navigation contract.
 */
@Component({ selector: "button-destinations", shadow: false })
export class ButtonDestinationsComponent extends BaseElement {
  /** Creates the destination grammar section element. */
  constructor() { super(); }

  /** Renders destination treatments from a primary route to an inline reading link. */
  render() {
    const copy = designButtonContent.copy["button/button-destinations/button-destinations"];
    return html`
      <section id="button-destinations" class="layout-page layout-section layout-stack layout-stack-sm button-section button-destinations">
        <p class="type-eyebrow button-section__eyebrow">${copy[4]}</p>
        <h2 class="type-section button-section__heading">${copy[5]}</h2>
        <p class="button-section__note">${copy[6]}</p>
        <div class="layout-grid-2 button-section__content button-destinations__grid">
          <article class="button-card"><p class="type-eyebrow">${copy[7]}</p><h3 class="type-card-title">${copy[8]}</h3><app-button label="${copy[0]}" tone="primary" href="/design/button"></app-button><p class="type-compact">${copy[9]}</p></article>
          <article class="button-card"><p class="type-eyebrow">${copy[10]}</p><h3 class="type-card-title">${copy[11]}</h3><app-button label="${copy[1]}" href="/design/english"></app-button><p class="type-compact">${copy[12]}</p></article>
          <article class="button-card button-card--subtle"><p class="type-eyebrow">${copy[13]}</p><h3 class="type-card-title">${copy[14]}</h3><app-button label="${copy[2]}" tone="quiet" href="/design"></app-button><p class="type-compact">${copy[15]}</p></article>
          <article class="button-card"><p class="type-eyebrow">${copy[16]}</p><h3 class="type-card-title">${copy[17]}</h3><p class="type-compact">${copy[18]}<app-button label="${copy[3]}" tone="link" href="/design/color"></app-button>${copy[19]}</p></article>
        </div>
      </section>
    `;
  }
}
