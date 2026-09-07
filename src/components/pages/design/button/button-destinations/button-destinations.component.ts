import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

/**
 * Defines the linked-button grammar for destinations.
 * These specimens stay anchors so a visual button never changes the navigation contract.
 */
@Component({ selector: "button-destinations", shadow: false })
export class ButtonDestinationsComponent extends BaseElement {
  /** Creates the destination grammar section element. */
  constructor() { super(); }

  /** Renders destination treatments from a primary route to an inline reading link. */
  render() {
    return html`
      <section id="button-destinations" class="layout-page layout-section layout-stack layout-stack-sm button-section button-destinations">
        <p class="type-eyebrow button-section__eyebrow">03 · Destinations</p>
        <h2 class="type-section button-section__heading">One destination. One dependable treatment.</h2>
        <p class="button-section__note">A link changes the URL and has no request lifecycle. It can look like a button when the destination deserves that weight, but it stays an anchor in the markup.</p>
        <div class="layout-grid-2 button-section__content button-destinations__grid">
          <article class="button-card"><p class="type-eyebrow">Accent destination</p><h3 class="type-card-title">Join the waitlist</h3><app-button label="Open route" tone="primary" href="/design/button"></app-button><p class="type-compact">The strongest linked treatment for a clear next destination.</p></article>
          <article class="button-card"><p class="type-eyebrow">Ink destination</p><h3 class="type-card-title">Read the verse</h3><app-button label="Read route" href="/design/english"></app-button><p class="type-compact">A stable alternative when the page already has a primary action.</p></article>
          <article class="button-card button-card--subtle"><p class="type-eyebrow">Quiet destination</p><h3 class="type-card-title">Hold for later</h3><app-button label="Return to index" tone="quiet" href="/design"></app-button><p class="type-compact">A low-emphasis route that preserves reading flow.</p></article>
          <article class="button-card"><p class="type-eyebrow">Inline destination</p><h3 class="type-card-title">Keep the sentence intact.</h3><p class="type-compact">A sentence can end with an <app-button label="underlined destination" tone="link" href="/design/color"></app-button> without shifting the line box.</p></article>
        </div>
      </section>
    `;
  }
}
