import { Component, DotaPageElement, SEO } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { Route } from "@ayu-sh-kr/dota-wrap/router";
import { designPageContent } from "@app/data/design-page-content.ts";

/**
 * Entry route for the Nitya Notes design references.
 *
 * At `/` and `/design`, this page provides SEO and composes the directory component;
 * each iteration then owns its own route and dedicated set of sections.
 */
@Route({ path: "/" })
@Component({ selector: "design-page", shadow: false })
export class DesignPage extends DotaPageElement {
  /** Creates the routed page before Dota resolves its SEO and rendered directory. */
  constructor() {
    super();
  }

  /** Supplies the metadata for the design-directory route. */
  get seo(): SEO {
    return designPageContent.seo;
  }

  /** Renders the directory without changing route or application state. */
  render() {
    return html`<design-directory></design-directory>`;
  }
}
