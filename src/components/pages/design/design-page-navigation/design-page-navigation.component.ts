import { BaseElement, Component, Property, String } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designPageContent } from "@app/data/design-page-content.ts";

/**
 * Lists every design reference route beneath a route hero.
 *
 * Each hero supplies its own active path, while this component owns the shared
 * navigation order and active-page treatment.
 */
@Component({ selector: "design-page-navigation", shadow: false })
export class DesignPageNavigationComponent extends BaseElement {
  /** The path represented by the page that contains this navigation. */
  @Property({ name: "active-route", type: String, default: "/design" })
  activeRoute: string = "/design";

  constructor() {
    super();
  }

  /** Renders the complete design-route list with the active page identified. */
  render() {
    return html`
      <nav class="design-hero-nav" aria-label="Design grammar routes">
        ${designPageContent.navigation.map((item) => html`
          <app-button label="${item.label}" tone="link" href="${item.href}" current="${item.href === this.activeRoute ? "page" : "false"}"></app-button>
        `)}
      </nav>
    `;
  }
}
