import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designInteractionContent } from "@app/data/design-interaction-content.ts";

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
    const copy = designInteractionContent.copy["interaction/interaction-focus/interaction-focus"];
    return html`
      <section id="focus" class="layout-page layout-section interaction-section">
        <p class="type-eyebrow interaction-section__eyebrow">${copy[4]}</p>
        <h2 class="type-section interaction-section__heading">${copy[5]}</h2>
        <p class="interaction-section__note">${copy[6]}</p>

        <div class="layout-grid-3 interaction-section__content">
          <div class="interaction-tile">
            <p class="type-card-title">${copy[7]}</p>
            <p class="type-compact">${copy[8]}</p>
            <div class="interaction-stage">
              <app-button label="${copy[0]}" size="sm"></app-button>
            </div>
          </div>
          <div class="interaction-tile">
            <p class="type-card-title">${copy[9]}</p>
            <p class="type-compact">${copy[10]}</p>
            <div class="interaction-stage">
              <input class="element-input" type="email" placeholder="${copy[1]}" aria-label="${copy[2]}" />
            </div>
          </div>
          <div class="interaction-tile">
            <p class="type-card-title">${copy[11]}</p>
            <p class="type-compact">${copy[12]}</p>
            <div class="interaction-stage">
              <app-button label="${copy[3]}" block="true" class="interaction-row"></app-button>
            </div>
          </div>
        </div>

        <div class="interaction-card" style="margin-block-start: var(--layout-space-5)">
          <p class="type-card-title">${copy[13]}</p>
          <p class="type-compact">${copy[14]}</p>
        </div>
      </section>
    `;
  }
}
