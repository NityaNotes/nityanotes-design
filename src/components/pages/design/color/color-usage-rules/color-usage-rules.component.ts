import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

/** States the rules that keep component colour decisions in the theme layer. */
@Component({ selector: "color-usage-rules", shadow: false })
export class ColorUsageRulesComponent extends BaseElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <section class="layout-page layout-section color-section color-usage-rules">
        <p class="type-eyebrow color-section__eyebrow">05 · Application rules</p>
        <h2 class="type-section color-section__heading">Keep colour decisions in one place.</h2>
        <div class="layout-grid-2 color-section__content color-usage-rules__grid">
          <article class="element-card"><h3 class="type-card-title">Name the role, not the shade.</h3><p class="type-compact">Choose a semantic role, never a scale step that merely works on one surface.</p></article>
          <article class="element-card"><h3 class="type-card-title">Keep literals in the palette.</h3><p class="type-compact">A raw colour in a component is drift by definition.</p></article>
          <article class="element-card"><h3 class="type-card-title">Theme state is centralised.</h3><p class="type-compact">The same role names resolve in light and dark mode.</p></article>
          <article class="element-card"><h3 class="type-card-title">Use the mix ramp.</h3><p class="type-compact">Use shared ring, wash, scrim, and shadow roles.</p></article>
        </div>
      </section>
    `;
  }
}
