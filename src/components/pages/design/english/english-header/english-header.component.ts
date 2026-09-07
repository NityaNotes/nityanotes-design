import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

/**
 * Introduces the English typography grammar and links to the sibling routes.
 *
 * The hero mirrors the other grammar references: one eyebrow, one display
 * title, one lede, the next-route commitment, and the shared grammar nav.
 *
 * Selector: `english-header`.
 */
@Component({ selector: "english-header", shadow: false })
export class EnglishHeaderComponent extends BaseElement {
  /** Creates the framework element before Dota renders the static hero. */
  constructor() {
    super();
  }

  /** Renders the hero without reading or changing application state. */
  render() {
    return html`
      <header class="layout-page layout-section-hero design-grammar-header english-header">
        <p class="type-eyebrow english-header__eyebrow">Design grammar / 04</p>
        <h1 class="type-display">English typography.</h1>
        <p class="type-lede english-header__lede">Three registers, scripture first. Tiro carries every śloka, DM Sans carries the apparatus, and monospace carries the data — seventeen roles cover the whole product, and you never set a size.</p>
        <app-button label="Continue to Hindi typography" tone="primary" size="md" href="/design/hindi" class="english-header__button"></app-button>
        <design-page-navigation active-route="/design/english"></design-page-navigation>
      </header>
    `;
  }
}
