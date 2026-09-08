import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designElementPageContent } from "@app/data/design-element-page-content.ts";

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
    const copy = designElementPageContent.copy["element/element-pairings-section/element-pairings-section"];
    return html`
      <section class="layout-page layout-section design-section layout-stack layout-stack-lg" id="element-pairings">
        <p class="type-eyebrow">${copy[1]}</p>
        <h2 class="type-section">${copy[2]}</h2>
        <p class="type-lede">${copy[3]}</p>
        <div class="layout-grid-auto">
          <article class="element-card"><span class="element-badge">${copy[4]}</span><h3 class="type-card-title">${copy[5]}</h3><p class="type-compact">${copy[6]}</p></article>
          <article class="element-card"><h3 class="type-card-title">${copy[7]}</h3><div class="element-callout">${copy[8]}</div></article>
          <article class="element-card"><h3 class="type-card-title">${copy[9]}</h3><label class="type-label" for="pairing-field">${copy[10]}</label><input class="element-input" id="pairing-field" placeholder="${copy[0]}"></article>
        </div>
      </section>
    `;
  }
}
