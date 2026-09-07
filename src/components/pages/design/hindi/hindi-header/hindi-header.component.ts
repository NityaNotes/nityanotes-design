import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

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
    return html`
      <header class="layout-page layout-section-hero design-grammar-header hindi-header" lang="hi">
        <p class="type-eyebrow hindi-header__eyebrow">Design grammar / 05</p>
        <h1 class="type-display">हिंदी टाइपोग्राफ़ी.</h1>
        <p class="type-lede hindi-header__lede">देवनागरी परिवार तय करती है। कोई अक्षर-अंतर नहीं, कोई बड़े-अक्षर रूपांतरण नहीं, श्लोक पर कोई कृत्रिम बोल्ड नहीं — भाषा फ़ॉन्ट चुनती है, उल्टा कभी नहीं।</p>
        <app-button label="Continue to color" tone="primary" size="md" href="/design/color" class="hindi-header__button"></app-button>
        <design-page-navigation active-route="/design/hindi"></design-page-navigation>
      </header>
    `;
  }
}
