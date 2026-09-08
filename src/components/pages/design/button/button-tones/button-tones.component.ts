import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designButtonContent } from "@app/data/design-button-content.ts";

/** Demonstrates the attention hierarchy and semantic variants available to actions. */
@Component({ selector: "button-tones", shadow: false })
export class ButtonTonesComponent extends BaseElement {
  /** Creates the tone specimen element. */
  constructor() { super(); }

  /** Renders action tones, icon buttons, and an inline link button. */
  render() {
    const copy = designButtonContent.copy["button/button-tones/button-tones"];
    return html`
      <section id="button-tones" class="layout-page layout-section layout-stack layout-stack-sm button-section button-tones">
        <p class="type-eyebrow button-section__eyebrow">${copy[5]}</p>
        <h2 class="type-section button-section__heading">${copy[6]}</h2>
        <p class="button-section__note">${copy[7]}</p>
        <div class="layout-grid-2 button-section__content button-tones__grid">
          <article class="button-card"><p class="type-eyebrow">${copy[8]}</p><h3 class="type-card-title">${copy[9]}</h3><app-button label="${copy[0]}" tone="primary"></app-button><p class="type-compact">${copy[10]}</p></article>
          <article class="button-card"><p class="type-eyebrow">${copy[11]}</p><h3 class="type-card-title">${copy[12]}</h3><app-button label="${copy[1]}"></app-button><p class="type-compact">${copy[13]}</p></article>
          <article class="button-card button-card--subtle"><p class="type-eyebrow">${copy[14]}</p><h3 class="type-card-title">${copy[15]}</h3><app-button label="${copy[2]}" tone="quiet"></app-button><p class="type-compact">${copy[16]}</p></article>
          <article class="button-card"><p class="type-eyebrow">${copy[17]}</p><h3 class="type-card-title">${copy[18]}</h3><app-button label="${copy[3]}" tone="danger"></app-button><p class="type-compact">${copy[19]}</p></article>
        </div>
        <p class="button-copy button-section__content">${copy[20]}<app-button label="${copy[4]}" tone="link"></app-button>${copy[21]}</p>
      </section>
    `;
  }
}
