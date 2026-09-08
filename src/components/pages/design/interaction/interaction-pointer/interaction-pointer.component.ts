import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designInteractionContent } from "@app/data/design-interaction-content.ts";

/**
 * Pointer response. Hover confirms reachability and never carries meaning;
 * every hover rule sits inside a hover-capable media query so a tapped control
 * does not stay lit. Press remains the contact acknowledgement for pointer,
 * touch, and keyboard activation alike.
 */
@Component({ selector: "interaction-pointer", shadow: false })
export class InteractionPointerComponent extends BaseElement {
  /** Creates the pointer section element. */
  constructor() {
    super();
  }

  /** Renders the press, ink, and nudge verbs beside the do/never contrast. */
  render() {
    const copy = designInteractionContent.copy["interaction/interaction-pointer/interaction-pointer"];
    return html`
      <section id="pointer" class="layout-page layout-section interaction-section">
        <p class="type-eyebrow interaction-section__eyebrow">${copy[4]}</p>
        <h2 class="type-section interaction-section__heading">${copy[5]}</h2>
        <p class="interaction-section__note">${copy[6]}<code>${copy[7]}</code>${copy[8]}</p>

        <div class="layout-grid-3 interaction-section__content">
          <div class="interaction-tile">
            <p class="type-card-title">${copy[9]}</p>
            <p class="interaction-mono">${copy[10]}</p>
            <div class="interaction-stage">
              <app-button label="${copy[0]}" interaction="lift"></app-button>
            </div>
          </div>
          <div class="interaction-tile">
            <p class="type-card-title">${copy[11]}</p>
            <p class="interaction-mono">${copy[12]}</p>
            <div class="interaction-stage">
              <app-button label="${copy[1]}" tone="link" href="/design/layout"></app-button>
            </div>
          </div>
          <div class="interaction-tile">
            <p class="type-card-title">${copy[13]}</p>
            <p class="interaction-mono">${copy[14]}</p>
            <div class="interaction-stage">
              <app-button label="${copy[2]}" block="true" class="interaction-row"></app-button>
            </div>
          </div>
        </div>

        <div class="layout-grid-2" style="margin-block-start: var(--layout-space-4)">
          <div class="interaction-card">
            <p class="type-eyebrow">${copy[15]}</p>
            <p class="type-compact">${copy[16]}</p>
            <app-button label="${copy[3]}" block="true" class="interaction-row"></app-button>
          </div>
          <div class="interaction-card">
            <p class="type-eyebrow">${copy[17]}</p>
            <p class="type-compact">${copy[18]}</p>
            <div class="interaction-row interaction-row--static">
              <span>
                <span class="type-card-title" lang="sa">${copy[19]}</span><br />
                <span class="type-compact">${copy[20]}</span>
              </span>
              <span aria-hidden="true">${copy[21]}</span>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
