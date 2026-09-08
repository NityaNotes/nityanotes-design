import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designColorContent } from "@app/data/design-color-content.ts";

/** Introduces the colour system and links to the other design grammar routes. */
@Component({ selector: "color-header", shadow: false })
export class ColorHeaderComponent extends BaseElement {
  constructor() {
    super();
  }

  render() {
    const copy = designColorContent.copy["color/color-header/color-header"];
    return html`
      <header class="layout-page layout-section-hero color-header">
        <div class="layout-grid-2 color-header__grid">
          <div>
            <p class="type-eyebrow color-header__eyebrow">${copy[1]}</p>
            <h1 class="type-display">${copy[2]}</h1>
            <p class="type-lede color-header__lede">${copy[3]}</p>
            <app-button label="${copy[0]}" tone="primary" size="md" href="/design/button" class="color-header__button"></app-button>
            <design-page-navigation active-route="/design/color"></design-page-navigation>
          </div>
          <aside class="color-header__rail">
            <p class="type-eyebrow">${copy[4]}</p>
            <dl>
              <div><dt>${copy[5]}</dt><dd>${copy[6]}</dd></div>
              <div><dt>${copy[7]}</dt><dd>${copy[8]}</dd></div>
              <div><dt>${copy[9]}</dt><dd>${copy[10]}</dd></div>
              <div><dt>${copy[11]}</dt><dd>${copy[12]}</dd></div>
              <div><dt>${copy[13]}</dt><dd>${copy[14]}</dd></div>
              <div><dt>${copy[15]}</dt><dd>${copy[16]}</dd></div>
            </dl>
          </aside>
        </div>
      </header>
    `;
  }
}
