import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designLayoutContent } from "@app/data/design-layout-content.ts";

/** Introduces the layout reference and links to the other design pages. */
@Component({ selector: "layout-reference-header", shadow: false })
export class LayoutReferenceHeaderComponent extends BaseElement {
  constructor() {
    super();
  }

  render() {
    const copy = designLayoutContent.copy["layout/reference-header/layout-reference-header"];
    return html`
      <header class="layout-page layout-section-hero layout-reference-header">
        <p class="type-eyebrow layout-reference-header__eyebrow">${copy[1]}</p>
        <h1 class="type-display">${copy[2]}</h1>
        <p class="type-lede layout-reference-header__lede">${copy[3]}</p>
        <app-button label="${copy[0]}" tone="primary" size="md" href="/design/element" class="layout-reference-header__button"></app-button>
        <design-page-navigation active-route="/design/layout"></design-page-navigation>
      </header>
    `;
  }
}
