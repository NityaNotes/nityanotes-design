import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

/** Catalogs the shared button sizes, shapes, interaction modes, and states. */
@Component({ selector: "button-feedback", shadow: false })
export class ButtonFeedbackComponent extends BaseElement {
  /** Creates the feedback section element. */
  constructor() { super(); }

  /** Renders the class combinations available to product surfaces and tests. */
  render() {
    return html`
      <section id="button-feedback" class="layout-page layout-section layout-stack layout-stack-sm button-section button-feedback">
        <p class="type-eyebrow button-section__eyebrow">04 · Reference</p>
        <h2 class="type-section button-section__heading">Compose tone, geometry, and feedback.</h2>
        <p class="button-section__note">Use <code>&lt;app-button&gt;</code> and configure its tone, layout, interaction, and state attributes. The component selects the correct native button or anchor.</p>

        <div class="button-reference button-section__content">
          <article class="button-reference__group">
            <p class="type-eyebrow">Sizes</p>
            <h3 class="type-card-title">Three target sizes</h3>
            <div class="button-reference__row">
              <span class="button-reference__item"><app-button label="Small" size="sm"></app-button><code>size="sm"</code></span>
              <span class="button-reference__item"><app-button label="Medium"></app-button><code>size="md"</code></span>
              <span class="button-reference__item"><app-button label="Large" size="lg"></app-button><code>size="lg"</code></span>
            </div>
          </article>

          <article class="button-reference__group">
            <p class="type-eyebrow">Shapes</p>
            <h3 class="type-card-title">Corners, icons, and available width</h3>
            <div class="button-reference__row">
              <span class="button-reference__item"><app-button label="Square" tone="primary" shape="square"></app-button><code>shape="square"</code></span>
              <span class="button-reference__item"><app-button label="Rounded" tone="primary" shape="rounded"></app-button><code>shape="rounded"</code></span>
              <span class="button-reference__item"><app-button label="Pill" tone="primary" shape="pill"></app-button><code>shape="pill"</code></span>
              <span class="button-reference__item"><app-button label="+" accessible-label="Add note" shape="icon"></app-button><code>shape="icon"</code></span>
              <span class="button-reference__item"><app-button label="Full width" block="true"></app-button><code>block="true"</code></span>
            </div>
          </article>

          <article class="button-reference__group">
            <p class="type-eyebrow">Interactions</p>
            <h3 class="type-card-title">Movement follows the action</h3>
            <div class="button-reference__row">
              <span class="button-reference__item"><app-button label="Press" tone="primary"></app-button><code>interaction="press"</code></span>
              <span class="button-reference__item"><app-button label="Lift" interaction="lift"></app-button><code>interaction="lift"</code></span>
              <span class="button-reference__item"><app-button label="Continue →" tone="quiet" interaction="shift"></app-button><code>interaction="shift"</code></span>
            </div>
          </article>

          <article class="button-reference__group">
            <p class="type-eyebrow">States</p>
            <h3 class="type-card-title">Every state remains identifiable</h3>
            <div class="button-reference__row button-reference__states">
              <span class="button-reference__item"><app-button label="Default"></app-button><code>state="idle"</code></span>
              <span class="button-reference__item"><app-button label="Hover" preview="hover"></app-button><code>preview="hover"</code></span>
              <span class="button-reference__item"><app-button label="Focus" preview="focus"></app-button><code>preview="focus"</code></span>
              <span class="button-reference__item"><app-button label="Pressed" preview="pressed"></app-button><code>preview="pressed"</code></span>
              <span class="button-reference__item"><app-button label="Saving" tone="primary" state="busy"></app-button><code>state="busy"</code></span>
              <span class="button-reference__item"><app-button label="Saved" state="done"></app-button><code>state="done"</code></span>
              <span class="button-reference__item"><app-button label="Try again" state="error"></app-button><code>state="error"</code></span>
              <span class="button-reference__item"><app-button label="Unavailable" tone="primary" disabled="true"></app-button><code>disabled="true"</code></span>
            </div>
          </article>
        </div>
      </section>
    `;
  }
}
