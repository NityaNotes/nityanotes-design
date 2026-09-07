import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

/** Introduces the layout reference and links to the other design pages. */
@Component({ selector: "layout-reference-header", shadow: false })
export class LayoutReferenceHeaderComponent extends BaseElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <header class="layout-page layout-section-hero layout-reference-header">
        <p class="type-eyebrow layout-reference-header__eyebrow">Nitya Notes · Design grammar</p>
        <h1 class="type-display">Layout</h1>
        <p class="type-lede layout-reference-header__lede">A shared geometry for page composition, reading measures, and responsive interface work.</p>
        <app-button label="Continue to elements" tone="primary" size="md" href="/design/element" class="layout-reference-header__button"></app-button>
        <design-page-navigation active-route="/design/layout"></design-page-navigation>
      </header>
    `;
  }
}
