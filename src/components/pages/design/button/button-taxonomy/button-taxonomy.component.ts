import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

/** Defines the four control behaviours before any visual button treatment is chosen. */
@Component({ selector: "button-taxonomy", shadow: false })
export class ButtonTaxonomyComponent extends BaseElement {
  /** Creates the taxonomy section element. */
  constructor() { super(); }

  /** Renders the behaviour table used to classify a control. */
  render() {
    return html`
      <section id="button-taxonomy" class="layout-page layout-section layout-stack layout-stack-sm button-section button-taxonomy">
        <p class="type-eyebrow button-section__eyebrow">01 · Taxonomy</p>
        <h2 class="type-section button-section__heading">“Looks like a button” is not enough of a rule.</h2>
        <p class="button-section__note">Sort by behaviour first, styling second. “It looks like a button” is not a category — it is how a filter pill, a route and a server call end up sharing semantics they do not have.</p>
        <div class="layout-grid-2 button-section__content button-taxonomy__grid">
          <article class="element-card button-taxonomy__card">
            <p class="type-eyebrow">Async action</p>
            <h3 class="type-card-title">Starts work.</h3>
            <p class="type-compact">Waits for an outcome. Use a button and expose its request state.</p>
            <code>&lt;button&gt; · data-state</code>
          </article>
          <article class="element-card button-taxonomy__card">
            <p class="type-eyebrow">Navigation</p>
            <h3 class="type-card-title">Changes the URL.</h3>
            <p class="type-compact">Use an anchor, even when it is shaped like a button. There is no request result to report.</p>
            <code>&lt;a href&gt;</code>
          </article>
          <article class="element-card button-taxonomy__card">
            <p class="type-eyebrow">Choice</p>
            <h3 class="type-card-title">Changes selection.</h3>
            <p class="type-compact">Use native radio, checkbox, or pressed state. The selected state is the feedback.</p>
            <code>aria-pressed · input</code>
          </article>
          <article class="element-card button-taxonomy__card">
            <p class="type-eyebrow">Utility</p>
            <h3 class="type-card-title">Changes local UI.</h3>
            <p class="type-compact">Opens, closes, copies, or toggles with an explicit accessible name and state.</p>
            <code>aria-expanded · aria-label</code>
          </article>
        </div>
      </section>
    `;
  }
}
