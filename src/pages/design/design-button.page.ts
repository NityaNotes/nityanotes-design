import { Component, DotaPageElement, SEO } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { Route } from "@ayu-sh-kr/dota-wrap/router";
import { designButtonContent } from "@app/data/design-button-content.ts";

/**
 * Shows action hierarchy and control states at `/design/button`.
 *
 * The page makes the button grammar independently navigable while the reusable
 * showcase keeps its specimens aligned with the other design references.
 */
@Route({ path: "/design/button" })
@Component({ selector: "design-button-page", shadow: false })
export class DesignButtonPage extends DotaPageElement {
  /** Creates the routed page before Dota resolves its SEO and rendered content. */
  constructor() {
    super();
  }

  /** Provides document metadata when the button reference becomes the active route. */
  get seo(): SEO {
    return designButtonContent.seo;
  }

  /** Composes the button grammar sections in the order a maintainer reviews them. */
  render() {
    return html`
      <main class="button-page">
        <app-header></app-header>
        <button-header></button-header>
        <button-taxonomy></button-taxonomy>
        <button-tones></button-tones>
        <button-destinations></button-destinations>
        <button-feedback></button-feedback>
        <button-platform></button-platform>
      </main>
    `;
  }
}
