import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designTypographyContent } from "@app/data/design-typography-content.ts";

/**
 * Introduces the shared typography grammar and links to the sibling routes.
 *
 * The hero states the scripture-first premise that both language routes
 * inherit: the śloka is the subject, and everything else is apparatus.
 *
 * Selector: `typography-header`.
 */
@Component({ selector: "typography-header", shadow: false })
export class TypographyHeaderComponent extends BaseElement {
  /** Creates the framework element before Dota renders the static hero. */
  constructor() {
    super();
  }

  /** Renders the hero without reading or changing application state. */
  render() {
    const { hero } = designTypographyContent;

    return html`
      <header class="layout-page layout-section-hero design-grammar-header typography-header">
        <p class="type-eyebrow typography-header__eyebrow">${hero.eyebrow}</p>
        <h1 class="type-display">${hero.title}</h1>
        <p class="type-lede typography-header__lede">${hero.lede}</p>
        <app-button label="${hero.action.label}" tone="primary" size="md" href="${hero.action.href}" class="typography-header__button"></app-button>
        <design-page-navigation active-route="/design/typography"></design-page-navigation>
      </header>
    `;
  }
}
