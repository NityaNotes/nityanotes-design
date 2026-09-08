import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designEnglishContent } from "@app/data/design-english-content.ts";

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
    const copy = designEnglishContent.copy["english/english-header/english-header"];
    return html`
      <header class="layout-page layout-section-hero design-grammar-header english-header">
        <p class="type-eyebrow english-header__eyebrow">${copy[1]}</p>
        <h1 class="type-display">${copy[2]}</h1>
        <p class="type-lede english-header__lede">${copy[3]}</p>
        <app-button label="${copy[0]}" tone="primary" size="md" href="/design/hindi" class="english-header__button"></app-button>
        <design-page-navigation active-route="/design/english"></design-page-navigation>
      </header>
    `;
  }
}
