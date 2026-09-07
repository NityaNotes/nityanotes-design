import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

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
    return html`
      <section id="timing" class="layout-page layout-section interaction-section">
        <p class="type-eyebrow interaction-section__eyebrow">Contract</p>
        <h2 class="type-section interaction-section__heading">Five durations, one curve</h2>

        <div class="interaction-table-wrap">
          <table class="interaction-table">
            <thead>
              <tr><th>Token</th><th>Value</th><th>What it is for</th><th>Easing</th></tr>
            </thead>
            <tbody>
              <tr><td><code>--motion-press</code></td><td><code>100ms</code></td><td>Contact. Shorter than a tap is long.</td><td><code>spatial</code></td></tr>
              <tr><td><code>--motion-tint</code></td><td><code>160ms</code></td><td>Colour only. Never moves anything.</td><td><code>ease</code></td></tr>
              <tr><td><code>--motion-move</code></td><td><code>220ms</code></td><td>A translation under 8px.</td><td><code>spatial</code></td></tr>
              <tr><td><code>--motion-mark</code></td><td><code>320ms</code></td><td>A glyph turning, a stroke drawing.</td><td><code>spatial</code></td></tr>
              <tr><td><code>--motion-measure</code></td><td><code>480ms</code></td><td>A height or a number that changed.</td><td><code>spatial</code></td></tr>
            </tbody>
          </table>
        </div>

        <p class="type-compact interaction-section__note">
          <code>--ease-spatial: cubic-bezier(.2, 0, 0, 1)</code> — fast out of
          the gate, long settle, no overshoot. Per-frame values are always
          linear. Anything longer than 480ms is not a transition, it is content.
        </p>
      </section>
    `;
  }
}
