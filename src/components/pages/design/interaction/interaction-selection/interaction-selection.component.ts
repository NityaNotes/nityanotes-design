import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designInteractionContent } from "@app/data/design-interaction-content.ts";

/**
 * Selection. Selection owns colour and a mark; hover owns transform. Underneath
 * every chip is a real radio or checkbox, so the keyboard and the screen reader
 * get the grouping for free and a chip's pressed state is native.
 */
@Component({ selector: "interaction-selection", shadow: false })
export class InteractionSelectionComponent extends BaseElement {
  /** Creates the selection section element. */
  constructor() {
    super();
  }

  /** Renders radio and checkbox chip groups with native inputs underneath. */
  render() {
    const copy = designInteractionContent.copy["interaction/interaction-selection/interaction-selection"];
    return html`
      <section id="selection" class="layout-page layout-section interaction-section">
        <p class="type-eyebrow interaction-section__eyebrow">${copy[0]}</p>
        <h2 class="type-section interaction-section__heading">${copy[1]}</h2>
        <p class="interaction-section__note">${copy[2]}</p>

        <div class="interaction-section__content">
          <fieldset class="interaction-fieldset interaction-card">
            <legend class="type-label">${copy[3]}</legend>
            <div class="layout-row" style="margin-block-start: var(--layout-space-4)">
              <label class="interaction-chip"><input type="radio" name="corpus" value="gita" checked /><span class="interaction-chip__mark" aria-hidden="true"></span>${copy[4]}</label>
              <label class="interaction-chip"><input type="radio" name="corpus" value="upa" /><span class="interaction-chip__mark" aria-hidden="true"></span>${copy[5]}</label>
              <label class="interaction-chip"><input type="radio" name="corpus" value="veda" /><span class="interaction-chip__mark" aria-hidden="true"></span>${copy[6]}</label>
              <label class="interaction-chip"><input type="radio" name="corpus" value="stotra" /><span class="interaction-chip__mark" aria-hidden="true"></span>${copy[7]}</label>
            </div>

            <p class="type-label" style="margin-block-start: var(--layout-space-6)">${copy[8]}<span class="type-compact">${copy[9]}</span></p>
            <div class="layout-row" style="margin-block-start: var(--layout-space-3)">
              <label class="interaction-chip"><input type="checkbox" checked /><span class="interaction-chip__mark" aria-hidden="true"></span>${copy[10]}</label>
              <label class="interaction-chip"><input type="checkbox" /><span class="interaction-chip__mark" aria-hidden="true"></span>${copy[11]}</label>
              <label class="interaction-chip"><input type="checkbox" /><span class="interaction-chip__mark" aria-hidden="true"></span>${copy[12]}</label>
              <label class="interaction-chip"><input type="checkbox" /><span class="interaction-chip__mark" aria-hidden="true"></span>${copy[13]}</label>
            </div>
          </fieldset>
        </div>
      </section>
    `;
  }
}
