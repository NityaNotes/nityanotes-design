import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designInteractionContent } from "@app/data/design-interaction-content.ts";

/**
 * The six behaviours that do not belong on the product. A card per rule keeps
 * the list scannable and makes the exceptions a reviewable object.
 */
@Component({ selector: "interaction-never", shadow: false })
export class InteractionNeverComponent extends BaseElement {
  /** Creates the never section element. */
  constructor() {
    super();
  }

  /** Renders the six never rules in a responsive grid. */
  render() {
    const copy = designInteractionContent.copy["interaction/interaction-never/interaction-never"];
    return html`
      <section id="never" class="layout-page layout-section interaction-section">
        <p class="type-eyebrow interaction-section__eyebrow">${copy[0]}</p>
        <h2 class="type-section interaction-section__heading">${copy[1]}</h2>

        <div class="layout-grid-auto interaction-section__content">
          <div class="interaction-tile"><p class="type-card-title">${copy[2]}</p><p class="type-compact">${copy[3]}<code>${copy[4]}</code>${copy[5]}</p></div>
          <div class="interaction-tile"><p class="type-card-title">${copy[6]}</p><p class="type-compact">${copy[7]}</p></div>
          <div class="interaction-tile"><p class="type-card-title">${copy[8]}</p><p class="type-compact">${copy[9]}</p></div>
          <div class="interaction-tile"><p class="type-card-title">${copy[10]}</p><p class="type-compact">${copy[11]}</p></div>
          <div class="interaction-tile"><p class="type-card-title">${copy[12]}</p><p class="type-compact">${copy[13]}</p></div>
          <div class="interaction-tile"><p class="type-card-title">${copy[14]}</p><p class="type-compact">${copy[15]}</p></div>
        </div>
      </section>
    `;
  }
}
