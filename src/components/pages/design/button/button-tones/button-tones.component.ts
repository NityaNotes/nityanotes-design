import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

/** Demonstrates the attention hierarchy and semantic variants available to actions. */
@Component({ selector: "button-tones", shadow: false })
export class ButtonTonesComponent extends BaseElement {
  /** Creates the tone specimen element. */
  constructor() { super(); }

  /** Renders action tones, icon buttons, and an inline link button. */
  render() {
    return html`
      <section id="button-tones" class="layout-page layout-section layout-stack layout-stack-sm button-section button-tones">
        <p class="type-eyebrow button-section__eyebrow">02 · Tones</p>
        <h2 class="type-section button-section__heading">Four tones, one geometry</h2>
        <p class="button-section__note">Each tone is a claim about how much of the page's attention the action deserves — not a decoration. One accent button per surface. Every accent button on this page is a specimen, not a real primary.</p>
        <div class="layout-grid-2 button-section__content button-tones__grid">
          <article class="button-card"><p class="type-eyebrow">Primary</p><h3 class="type-card-title">One clear commitment.</h3><app-button label="Join the waitlist" tone="primary"></app-button><p class="type-compact">The highest attention goes to the next meaningful step.</p></article>
          <article class="button-card"><p class="type-eyebrow">Secondary</p><h3 class="type-card-title">A useful alternative.</h3><app-button label="Read the verse"></app-button><p class="type-compact">Available without competing with the primary action.</p></article>
          <article class="button-card button-card--subtle"><p class="type-eyebrow">Quiet</p><h3 class="type-card-title">Keep the flow moving.</h3><app-button label="Skip for now" tone="quiet"></app-button><p class="type-compact">For reversible choices and low emphasis actions.</p></article>
          <article class="button-card"><p class="type-eyebrow">Destructive</p><h3 class="type-card-title">Let the verb carry the weight.</h3><app-button label="Remove from practice" tone="danger"></app-button><p class="type-compact">A hairline confirms danger; the label makes the consequence clear.</p></article>
        </div>
        <p class="button-copy button-section__content">A verse can fall back a rung. <app-button label="Change what that means" tone="link"></app-button> without leaving this sentence.</p>
      </section>
    `;
  }
}
