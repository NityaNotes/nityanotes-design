import { Component, DotaPageElement, SEO } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { Route } from "@ayu-sh-kr/dota-wrap/router";
import { designEnglishContent } from "@app/data/design-english-content.ts";

/**
 * Dedicated English typography reference at `/design/english`.
 *
 * The route keeps English-specific SEO at the route boundary and composes the
 * independently owned specimen sections in reader order.
 */
@Route({ path: "/design/english", ssr: true })
@Component({ selector: "design-english-page", shadow: false })
export class DesignEnglishPage extends DotaPageElement {
  /** Creates the page before Dota resolves its route metadata and view. */
  constructor() {
    super();
  }

  /** Supplies metadata for the English typography reference. */
  get seo(): SEO {
    return designEnglishContent.seo;
  }

  /** Renders the English-only typography sections. */
  render() {
    return html`
      <main class="english-page">
        <app-header></app-header>
        <english-header></english-header>
        <english-programme-section></english-programme-section>
        <english-sequence-section></english-sequence-section>
        <english-roles-section></english-roles-section>
        <english-color-section></english-color-section>
        <english-layout-section></english-layout-section>
        <english-pairings-section></english-pairings-section>
        <english-rules-section></english-rules-section>
      </main>
    `;
  }
}
