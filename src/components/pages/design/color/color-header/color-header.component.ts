import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

/** Introduces the colour system and links to the other design grammar routes. */
@Component({ selector: "color-header", shadow: false })
export class ColorHeaderComponent extends BaseElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <header class="layout-page layout-section-hero color-header">
        <div class="layout-grid-2 color-header__grid">
          <div>
            <p class="type-eyebrow color-header__eyebrow">Design grammar / 02</p>
            <h1 class="type-display">Colour with a single source of truth.</h1>
            <p class="type-lede color-header__lede">Literal pigment lives in the palette layer. The role layer maps the active family onto intent, so a component never has to name a hue or a scale step.</p>
            <app-button label="Continue to buttons" tone="primary" size="md" href="/design/button" class="color-header__button"></app-button>
            <design-page-navigation active-route="/design/color"></design-page-navigation>
          </div>
          <aside class="color-header__rail">
            <p class="type-eyebrow">Shared system</p>
            <dl>
              <div><dt>Palette source</dt><dd>theme.css</dd></div>
              <div><dt>Role source</dt><dd>color.css</dd></div>
              <div><dt>Active family</dt><dd>Temple flame</dd></div>
              <div><dt>Active neutrals</dt><dd>Reading ink / Reading white</dd></div>
              <div><dt>Alternative</dt><dd>Spring jade / Carbon ink / Porcelain</dd></div>
              <div><dt>Consumers</dt><dd>Role names only</dd></div>
            </dl>
          </aside>
        </div>
      </header>
    `;
  }
}
