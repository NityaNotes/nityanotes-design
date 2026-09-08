import { Component, DotaPageElement, SEO } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { Route } from "@ayu-sh-kr/dota-wrap/router";
import { designElementPageContent } from "@app/data/design-element-page-content.ts";

/**
 * Shows shared element shapes at `/design/element`.
 *
 * The route owns the element reference and composes its named specimen sections.
 */
@Route({ path: "/design/element", ssr: true })
@Component({ selector: "design-element-page", shadow: false })
export class DesignElementPage extends DotaPageElement {
  /** Creates the routed page before Dota resolves its SEO and rendered content. */
  constructor() {
    super();
  }

  /** Provides document metadata when the element reference becomes the active route. */
  get seo(): SEO {
    return designElementPageContent.seo;
  }

  /** Renders the element reference in reader-facing section order. */
  render() {
    return html`
      <main class="element-reference-page">
        <app-header></app-header>
        <header class="layout-page layout-section-hero element-reference-header">
          <p class="type-eyebrow">${designElementPageContent.header.eyebrow}</p>
          <h1 class="type-display">${designElementPageContent.header.title}</h1>
          <p class="type-lede">${designElementPageContent.header.description}</p>
          <app-button label="Continue to interaction" tone="primary" size="md" href="/design/interaction" class="element-reference-header__button"></app-button>
          <design-page-navigation active-route="/design/element"></design-page-navigation>
        </header>
        <element-controls-section></element-controls-section>
        <element-material-section></element-material-section>
        <element-specimen-section></element-specimen-section>
        <element-fields-section></element-fields-section>
        <element-pairings-section></element-pairings-section>
        <element-mistakes-section></element-mistakes-section>
        <element-boundaries-section></element-boundaries-section>
      </main>
    `;
  }
}
