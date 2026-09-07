import { Component, DotaPageElement, SEO } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { Route } from "@ayu-sh-kr/dota-wrap/router";
import { designTypographyContent } from "@app/data/design-typography-content.ts";

/**
 * Shows the shared typography grammar at `/design/typography`.
 *
 * SEO belongs to this route while the composed sections render the
 * scripture-first specimens that consume the global typography roles.
 */
@Route({ path: "/design/typography" })
@Component({ selector: "design-typography-page", shadow: false })
export class DesignTypographyPage extends DotaPageElement {
  /** Creates the routed page before Dota resolves its SEO and rendered content. */
  constructor() {
    super();
  }

  /** Provides document metadata when the typography reference becomes the active route. */
  get seo(): SEO {
    return designTypographyContent.seo;
  }

  /** Renders the shared typography sections in reader order. */
  render() {
    return html`
      <main class="typography-page">
        <app-header></app-header>
        <typography-header></typography-header>
        <typography-order-section></typography-order-section>
        <typography-serif-section></typography-serif-section>
        <typography-scale-section></typography-scale-section>
      </main>
    `;
  }
}
