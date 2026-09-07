import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

/**
 * Demonstrates the semantic control groups from the element reference.
 *
 * The `/design/element` route places this before the card and form specimens so a
 * maintainer chooses the correct HTML control before applying shared visual tokens.
 * Selector: `element-controls-section`.
 */
@Component({ selector: "element-controls-section", shadow: false })
export class ElementControlsSectionComponent extends BaseElement {
  constructor() {
    super();
  }

  /** Renders semantic control choices and the shared button hierarchy without side effects. */
  render() {
    return html`
      <section class="layout-page layout-section design-section" id="element-controls">
        <p class="type-eyebrow">01 · Choose the element</p>
        <h2 class="type-section">“Looks like a button” is not a rule.</h2>
        <p class="type-lede">Choose the semantic control by its behaviour before choosing a surface treatment.</p>
        <div class="layout-grid-2" style="margin-block-start:var(--layout-space-7)">
          <article class="element-card">
            <h3 class="type-card-title">Async action</h3>
            <p class="type-compact">Starts work and resolves or fails. Use a <code>button</code>.</p>
            <div class="layout-row" aria-label="Request state examples">
              <app-button label="Saving" tone="primary" state="busy"></app-button>
              <app-button label="Saved" state="done"></app-button>
            </div>
          </article>
          <article class="element-card">
            <h3 class="type-card-title">Navigation link</h3>
            <p class="type-compact">Changes the URL. Use a real <code>a href</code>.</p>
            <div class="layout-row">
              <app-button label="Read the button grammar →" tone="link" interaction="shift" href="/design/button"></app-button>
            </div>
          </article>
          <article class="element-card">
            <h3 class="type-card-title">Choice control</h3>
            <p class="type-compact">Changes selection. Use radio or checkbox inputs inside labels.</p>
            <div class="layout-row" role="group" aria-label="Practice frequency">
              <label class="button button-secondary"><input type="radio" name="element-practice-frequency" value="daily" checked>Daily</label>
              <label class="button button-secondary"><input type="radio" name="element-practice-frequency" value="weekly">Weekly</label>
            </div>
          </article>
          <article class="element-card">
            <h3 class="type-card-title">Utility control</h3>
            <p class="type-compact">Opens, closes, copies, or toggles. Name the state explicitly.</p>
            <details class="layout-stack layout-stack-sm" open>
              <summary class="button button-secondary">Practice details</summary>
              <p class="type-compact">Recite one verse each day.</p>
            </details>
          </article>
        </div>
        <div class="element-card layout-stack layout-stack-sm" style="margin-block-start:var(--layout-space-5)"><p class="type-eyebrow">Button tones</p><h3 class="type-card-title">One primary commitment per surface.</h3><div class="layout-row"><app-button label="Recite" tone="primary"></app-button><app-button label="Save draft"></app-button><app-button label="Slower" tone="quiet"></app-button><app-button label="Disabled" tone="quiet" disabled="true"></app-button></div></div>
      </section>
    `;
  }
}
