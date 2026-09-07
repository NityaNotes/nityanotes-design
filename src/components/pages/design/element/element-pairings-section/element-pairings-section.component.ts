import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

/**
 * Lists how the shared element building blocks combine on `/design/element`.
 *
 * Each pairing names the elements involved so future pages know which compositions
 * are sanctioned before inventing new shapes. Links point at the typography and
 * button routes where the paired tokens and controls are documented.
 *
 * Selector: `element-pairings-section`.
 */
@Component({ selector: "element-pairings-section", shadow: false })
export class ElementPairingsSectionComponent extends BaseElement {
  /** Creates the framework element before Dota renders its static badges. */
  constructor() {
    super();
  }

  /** Renders the sanctioned pairings without changing application state. */
  render() {
    return html`
      <section class="layout-page layout-section design-section layout-stack layout-stack-lg" id="element-pairings">
        <p class="type-eyebrow">03 · Pairings</p>
        <h2 class="type-section">Elements combine by purpose.</h2>
        <p class="type-lede">Use a small set of repeated compositions so the interface remains legible as it grows.</p>
        <div class="layout-grid-auto">
          <article class="element-card"><span class="element-badge">Card + badge</span><h3 class="type-card-title">A saved note</h3><p class="type-compact">The badge identifies a state; the card holds the idea.</p></article>
          <article class="element-card"><h3 class="type-card-title">Card + callout</h3><div class="element-callout">One detail earns stronger emphasis.</div></article>
          <article class="element-card"><h3 class="type-card-title">Label + field</h3><label class="type-label" for="pairing-field">Note title</label><input class="element-input" id="pairing-field" placeholder="A thought worth keeping"></article>
        </div>
      </section>
    `;
  }
}
