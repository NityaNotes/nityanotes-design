import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

/** Shows the core semantic pairings used across the interface. */
@Component({ selector: "color-pairing-examples", shadow: false })
export class ColorPairingExamplesComponent extends BaseElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <section class="layout-page layout-section color-section color-pairing-examples">
        <p class="type-eyebrow color-section__eyebrow">04 · Pairing</p>
        <h2 class="type-section color-section__heading">Every surface gets its content role.</h2>
        <div class="layout-grid-auto color-section__content color-pairing-examples__grid">
          <article class="color-pairing-examples__pair color-surface-muted"><strong>Canvas / content</strong><span>background + foreground</span></article>
          <article class="color-pairing-examples__pair color-surface"><strong>Surface / content</strong><span>surface + foreground</span></article>
          <article class="color-pairing-examples__pair color-accent"><strong>Action</strong><span>primary + on-primary</span></article>
          <article class="color-pairing-examples__pair color-accent-subtle"><strong>Quiet emphasis</strong><span>primary-subtle + foreground</span></article>
        </div>
      </section>
    `;
  }
}
