import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

/** Shows the selected primary, ink, and white palette families. */
@Component({ selector: "color-palette", shadow: false })
export class ColorPaletteComponent extends BaseElement {
  constructor() {
    super();
  }

  render() {
    const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

    return html`
      <section id="color-palette" class="layout-page layout-section color-section color-palette">
        <p class="type-eyebrow color-section__eyebrow">01 · Palette</p>
        <h2 class="type-section color-section__heading">One primary, supported by ink and white.</h2>
        <p class="type-lede color-section__lede">Temple Flame is the chosen primary, paired with Reading Ink and Reading White. Together they keep the interface focused, readable, and consistent across actions, text, and surfaces.</p>
        <div class="color-section__content color-palette__ramps">
          <div>
            <p class="color-palette__label">Primary · action and emphasis</p>
            <div class="color-palette__ramp" aria-label="Primary color steps">
              ${steps.map((step) => html`<div class="color-palette__step"><span class="color-palette__chip" style="background: var(--color-temple-flame-${step})"></span><small>${step}</small></div>`)}
            </div>
          </div>
          <div>
            <p class="color-palette__label">Ink · text and ground</p>
            <div class="color-palette__ramp" aria-label="Reading ink color steps">
              ${steps.map((step) => html`<div class="color-palette__step"><span class="color-palette__chip" style="background: var(--color-reading-ink-${step})"></span><small>${step}</small></div>`)}
            </div>
          </div>
          <div>
            <p class="color-palette__label">White · reading surface</p>
            <div class="color-palette__ramp" aria-label="Reading white color steps">
              ${steps.map((step) => html`<div class="color-palette__step"><span class="color-palette__chip" style="background: var(--color-reading-white-${step})"></span><small>${step}</small></div>`)}
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
