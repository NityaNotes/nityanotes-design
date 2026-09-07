import { Component, DotaPageElement, SEO } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { Route } from "@ayu-sh-kr/dota-wrap/router";
import { designLayoutContent } from "@app/data/design-layout-content.ts";

/**
 * Shows the layout grammar at `/design/layout`.
 *
 * This route supplies SEO and composes the independently owned layout sections.
 */
@Route({ path: "/design/layout" })
@Component({ selector: "design-layout-page", shadow: false })
export class DesignLayoutPage extends DotaPageElement {
  /** Creates the routed page before Dota resolves its SEO and rendered content. */
  constructor() {
    super();
  }

  /** Provides document metadata when the layout reference becomes the active route. */
  get seo(): SEO {
    return designLayoutContent.seo;
  }

  /** Renders the layout reference in reader-facing section order. */
  render() {
    return html`
      <main class="layout-reference-page">
        <app-header></app-header>
        <layout-reference-header></layout-reference-header>
        <layout-measures-section></layout-measures-section>
        <layout-spacing-section></layout-spacing-section>
        <layout-composition-section></layout-composition-section>
        <layout-breakpoints-section></layout-breakpoints-section>
      </main>
    `;
  }
}
