import { Component, DotaPageElement, SEO } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { Route } from "@ayu-sh-kr/dota-wrap/router";
import { designHindiContent } from "@app/data/design-hindi-content.ts";

/**
 * Dedicated Hindi typography reference at `/design/hindi`.
 *
 * The route exposes Hindi-specific SEO and composes the Devanagari specimen
 * sections and language-specific constraints from iteration one.
 */
@Route({ path: "/design/hindi" })
@Component({ selector: "design-hindi-page", shadow: false })
export class DesignHindiPage extends DotaPageElement {
  /** Creates the page before Dota resolves its route metadata and view. */
  constructor() {
    super();
  }

  /** Supplies metadata for the Hindi typography reference. */
  get seo(): SEO {
    return designHindiContent.seo;
  }

  /** Renders the Hindi-only typography sections. */
  render() {
    return html`
      <main class="hindi-page">
        <app-header></app-header>
        <hindi-header></hindi-header>
        <hindi-programme-section></hindi-programme-section>
        <hindi-family-section></hindi-family-section>
        <hindi-sequence-section></hindi-sequence-section>
        <hindi-roles-section></hindi-roles-section>
        <hindi-rules-section></hindi-rules-section>
      </main>
    `;
  }
}
