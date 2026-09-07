import { Component, DotaPageElement, SEO } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { Route } from "@ayu-sh-kr/dota-wrap/router";
import { designColorContent } from "@app/data/design-color-content.ts";

/**
 * Shows the semantic colour system at `/design/color`.
 */
@Route({ path: "/design/color" })
@Component({ selector: "design-color-page", shadow: false })
export class DesignColorPage extends DotaPageElement {
  /** Creates the routed page before Dota resolves its SEO and rendered content. */
  constructor() {
    super();
  }

  /** Provides document metadata when the colour page becomes the active route. */
  get seo(): SEO {
    return designColorContent.seo;
  }

  /** Composes the colour system sections in reading order. */
  render() {
    return html`
      <main class="color-page">
        <app-header></app-header>
        <color-header></color-header>
        <color-palette></color-palette>
        <color-inventory></color-inventory>
        <color-pairing></color-pairing>
        <color-pairing-examples></color-pairing-examples>
        <color-usage-rules></color-usage-rules>
        <color-status></color-status>
        <color-ladder></color-ladder>
      </main>
    `;
  }
}
