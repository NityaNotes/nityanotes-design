import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

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
    return html`
      <section id="selection" class="layout-page layout-section interaction-section">
        <p class="type-eyebrow interaction-section__eyebrow">03 · Commitment</p>
        <h2 class="type-section interaction-section__heading">Selection</h2>
        <p class="interaction-section__note">
          Selection owns colour and a mark. Hover owns transform. Those
          properties never compete, and the mark is never the only signal — the
          label stays readable in greyscale.
        </p>

        <div class="interaction-section__content">
          <fieldset class="interaction-fieldset interaction-card">
            <legend class="type-label">Which text first?</legend>
            <div class="layout-row" style="margin-block-start: var(--layout-space-4)">
              <label class="interaction-chip"><input type="radio" name="corpus" value="gita" checked /><span class="interaction-chip__mark" aria-hidden="true"></span>Gītā</label>
              <label class="interaction-chip"><input type="radio" name="corpus" value="upa" /><span class="interaction-chip__mark" aria-hidden="true"></span>Upaniṣad</label>
              <label class="interaction-chip"><input type="radio" name="corpus" value="veda" /><span class="interaction-chip__mark" aria-hidden="true"></span>Veda</label>
              <label class="interaction-chip"><input type="radio" name="corpus" value="stotra" /><span class="interaction-chip__mark" aria-hidden="true"></span>Stotra</label>
            </div>

            <p class="type-label" style="margin-block-start: var(--layout-space-6)">When are you most likely to look? <span class="type-compact">(multi)</span></p>
            <div class="layout-row" style="margin-block-start: var(--layout-space-3)">
              <label class="interaction-chip"><input type="checkbox" checked /><span class="interaction-chip__mark" aria-hidden="true"></span>Before dawn</label>
              <label class="interaction-chip"><input type="checkbox" /><span class="interaction-chip__mark" aria-hidden="true"></span>Commute</label>
              <label class="interaction-chip"><input type="checkbox" /><span class="interaction-chip__mark" aria-hidden="true"></span>Dusk</label>
              <label class="interaction-chip"><input type="checkbox" /><span class="interaction-chip__mark" aria-hidden="true"></span>Before sleep</label>
            </div>
          </fieldset>
        </div>
      </section>
    `;
  }
}
