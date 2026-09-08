import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designInteractionContent } from "@app/data/design-interaction-content.ts";

/**
 * The timing contract. Five durations and one spatial curve describe every
 * legal movement on the product; anything longer than 480ms is not a
 * transition, it is content.
 */
@Component({ selector: "interaction-contract", shadow: false })
export class InteractionContractComponent extends BaseElement {
  /** Creates the contract section element. */
  constructor() {
    super();
  }

  /** Renders the duration table and the easing rule. */
  render() {
    const copy = designInteractionContent.copy["interaction/interaction-contract/interaction-contract"];
    return html`
      <section id="timing" class="layout-page layout-section interaction-section">
        <p class="type-eyebrow interaction-section__eyebrow">${copy[0]}</p>
        <h2 class="type-section interaction-section__heading">${copy[1]}</h2>

        <div class="interaction-table-wrap">
          <table class="interaction-table">
            <thead>
              <tr><th>${copy[2]}</th><th>${copy[3]}</th><th>${copy[4]}</th><th>${copy[5]}</th></tr>
            </thead>
            <tbody>
              <tr><td><code>${copy[6]}</code></td><td><code>${copy[7]}</code></td><td>${copy[8]}</td><td><code>${copy[9]}</code></td></tr>
              <tr><td><code>${copy[10]}</code></td><td><code>${copy[11]}</code></td><td>${copy[12]}</td><td><code>${copy[13]}</code></td></tr>
              <tr><td><code>${copy[14]}</code></td><td><code>${copy[15]}</code></td><td>${copy[16]}</td><td><code>${copy[17]}</code></td></tr>
              <tr><td><code>${copy[18]}</code></td><td><code>${copy[19]}</code></td><td>${copy[20]}</td><td><code>${copy[21]}</code></td></tr>
              <tr><td><code>${copy[22]}</code></td><td><code>${copy[23]}</code></td><td>${copy[24]}</td><td><code>${copy[25]}</code></td></tr>
            </tbody>
          </table>
        </div>

        <p class="type-compact interaction-section__note">
          <code>${copy[26]}</code>${copy[27]}</p>
      </section>
    `;
  }
}
