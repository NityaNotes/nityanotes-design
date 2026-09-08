import { Component, DotaPageElement, SEO } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { Route } from "@ayu-sh-kr/dota-wrap/router";
import { designInteractionContent } from "@app/data/design-interaction-content.ts";

/**
 * Shows the interaction grammar at `/design/interaction`.
 *
 * The route owns the interaction reference and composes its seven families in
 * reading order: pointer, focus, selection, disclosure, the async action
 * lifecycle, transient feedback and interruption, followed by the two product
 * verbs and the timing contract.
 */
@Route({ path: "/design/interaction", ssr: true })
@Component({ selector: "design-interaction-page", shadow: false })
export class DesignInteractionPage extends DotaPageElement {
  /** Creates the routed page before Dota resolves its SEO and rendered content. */
  constructor() {
    super();
  }

  /** Provides document metadata when the interaction reference becomes the active route. */
  get seo(): SEO {
    return designInteractionContent.seo;
  }

  /** Composes the interaction grammar sections in the order a maintainer reviews them. */
  render() {
    return html`
      <main class="interaction-page">
        <app-header></app-header>
        <interaction-header></interaction-header>
        <interaction-pointer></interaction-pointer>
        <interaction-focus></interaction-focus>
        <interaction-selection></interaction-selection>
        <interaction-disclosure></interaction-disclosure>
        <interaction-action></interaction-action>
        <interaction-transient></interaction-transient>
        <interaction-interrupt></interaction-interrupt>
        <interaction-product></interaction-product>
        <interaction-contract></interaction-contract>
        <interaction-never></interaction-never>
      </main>
    `;
  }
}
