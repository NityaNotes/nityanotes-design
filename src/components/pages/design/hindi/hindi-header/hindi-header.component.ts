import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designHindiContent } from "@app/data/design-hindi-content.ts";

/**
 * Introduces the Hindi typography grammar and links to the sibling routes.
 *
 * The hero mirrors the English reference in structure while its copy states
 * the one Devanagari rule that decides every family choice on the route.
 *
 * Selector: `hindi-header`.
 */
@Component({ selector: "hindi-header", shadow: false })
export class HindiHeaderComponent extends BaseElement {
  /** Creates the framework element before Dota renders the static hero. */
  constructor() {
    super();
  }

  /** Renders the hero without reading or changing application state. */
  render() {
    const copy = designHindiContent.copy["hindi/hindi-header/hindi-header"];
    return html`
      <header class="layout-page layout-section-hero design-grammar-header hindi-header" lang="hi">
        <p class="type-eyebrow hindi-header__eyebrow">${copy[1]}</p>
        <h1 class="type-display">${copy[2]}</h1>
        <p class="type-lede hindi-header__lede">${copy[3]}</p>
        <app-button label="${copy[0]}" tone="primary" size="md" href="/design/color" class="hindi-header__button"></app-button>
        <design-page-navigation active-route="/design/hindi"></design-page-navigation>
      </header>
    `;
  }
}
