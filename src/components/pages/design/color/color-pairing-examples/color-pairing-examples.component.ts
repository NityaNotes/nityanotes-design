import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designColorContent } from "@app/data/design-color-content.ts";

/** Shows the core semantic pairings used across the interface. */
@Component({ selector: "color-pairing-examples", shadow: false })
export class ColorPairingExamplesComponent extends BaseElement {
  constructor() {
    super();
  }

  render() {
    const copy = designColorContent.copy["color/color-pairing-examples/color-pairing-examples"];
    return html`
      <section class="layout-page layout-section color-section color-pairing-examples">
        <p class="type-eyebrow color-section__eyebrow">${copy[0]}</p>
        <h2 class="type-section color-section__heading">${copy[1]}</h2>
        <div class="layout-grid-auto color-section__content color-pairing-examples__grid">
          <article class="color-pairing-examples__pair color-surface-muted"><strong>${copy[2]}</strong><span>${copy[3]}</span></article>
          <article class="color-pairing-examples__pair color-surface"><strong>${copy[4]}</strong><span>${copy[5]}</span></article>
          <article class="color-pairing-examples__pair color-accent"><strong>${copy[6]}</strong><span>${copy[7]}</span></article>
          <article class="color-pairing-examples__pair color-accent-subtle"><strong>${copy[8]}</strong><span>${copy[9]}</span></article>
        </div>
      </section>
    `;
  }
}
