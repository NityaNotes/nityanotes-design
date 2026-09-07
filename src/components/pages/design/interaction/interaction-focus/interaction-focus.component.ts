import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

/**
 * Focus and keyboard. One ring, three offsets, chosen by what the ring has to
 * clear; a background change is never the focus state. The keyboard contract
 * keeps Tab order in document order, lets the dialog resolve Escape, and rings
 * the visible box rather than its expanded hit target.
 */
@Component({ selector: "interaction-focus", shadow: false })
export class InteractionFocusComponent extends BaseElement {
  /** Creates the focus section element. */
  constructor() {
    super();
  }

  /** Renders the three ring offsets and the keyboard contract. */
  render() {
    return html`
      <section id="focus" class="layout-page layout-section interaction-section">
        <p class="type-eyebrow interaction-section__eyebrow">02 · Input</p>
        <h2 class="type-section interaction-section__heading">Focus and keyboard</h2>
        <p class="interaction-section__note">
          One ring. Three offsets, chosen by what the ring has to clear. A
          background change is not a focus state — the ring must survive colour
          being discarded. Tab through the three specimens and watch which edge
          the ring draws on.
        </p>

        <div class="layout-grid-3 interaction-section__content">
          <div class="interaction-tile">
            <p class="type-card-title">Clear</p>
            <p class="type-compact">Pills, chips and text links have paper to spare.</p>
            <div class="interaction-stage">
              <app-button label="Upaniṣad" size="sm"></app-button>
            </div>
          </div>
          <div class="interaction-tile">
            <p class="type-card-title">Tight</p>
            <p class="type-compact">Fields and packed cards clear their neighbours without touching them.</p>
            <div class="interaction-stage">
              <input class="element-input" type="email" placeholder="you@example.com" aria-label="Email" />
            </div>
          </div>
          <div class="interaction-tile">
            <p class="type-card-title">Inset</p>
            <p class="type-compact">Full-bleed rows place the ring inside their own edge.</p>
            <div class="interaction-stage">
              <app-button label="A row in a list →" block="true" class="interaction-row"></app-button>
            </div>
          </div>
        </div>

        <div class="interaction-card" style="margin-block-start: var(--layout-space-5)">
          <p class="type-card-title">Keyboard contract</p>
          <p class="type-compact">
            Tab reaches every control in document order. The dialog resolves
            Escape and returns focus to whatever opened it. Destructive
            confirmations open focused on Cancel. A control whose visible box is
            smaller than its 44px hit area rings the visible box, not the target.
          </p>
        </div>
      </section>
    `;
  }
}
