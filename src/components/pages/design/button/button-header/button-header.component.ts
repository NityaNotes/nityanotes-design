import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designButtonContent } from "@app/data/design-button-content.ts";

/**
 * Introduces the button grammar and links the reference to the other design routes.
 * The page shell owns route composition; this component owns the button page's opening story.
 */
@Component({ selector: "button-header", shadow: false })
export class ButtonHeaderComponent extends BaseElement {
  /** Creates the header element before Dota renders its static reference content. */
  constructor() { super(); }

  /** Renders the route heading and the design grammar navigation. */
  render() {
    const copy = designButtonContent.copy["button/button-header/button-header"];
    return html`
      <header class="layout-page layout-section-hero button-header">
        <div class="layout-grid-2 button-header__grid">
          <div>
            <p class="type-eyebrow button-header__eyebrow">${copy[3]}</p>
            <h1 class="type-display">${copy[4]}</h1>
            <p class="type-lede button-header__lede">${copy[5]}</p>
            <app-button label="${copy[0]}" tone="primary" size="md" href="/design" class="button-header__button"></app-button>
            <design-page-navigation active-route="/design/button"></design-page-navigation>
          </div>
          <article class="button-header__demo button-card button-card--contrast">
            <p class="type-eyebrow">${copy[6]}</p>
            <h2 class="type-subsection">${copy[7]}</h2>
            <p class="type-compact">${copy[8]}</p>
            <div class="layout-row button-header__actions">
              <app-button label="${copy[1]}"></app-button>
              <app-button label="${copy[2]}" tone="link"></app-button>
            </div>
          </article>
        </div>
      </header>
    `;
  }
}
