import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designColorContent } from "@app/data/design-color-content.ts";

/** States the rules that keep component colour decisions in the theme layer. */
@Component({ selector: "color-usage-rules", shadow: false })
export class ColorUsageRulesComponent extends BaseElement {
  constructor() {
    super();
  }

  render() {
    const copy = designColorContent.copy["color/color-usage-rules/color-usage-rules"];
    return html`
      <section class="layout-page layout-section color-section color-usage-rules">
        <p class="type-eyebrow color-section__eyebrow">${copy[0]}</p>
        <h2 class="type-section color-section__heading">${copy[1]}</h2>
        <div class="layout-grid-2 color-section__content color-usage-rules__grid">
          <article class="element-card"><h3 class="type-card-title">${copy[2]}</h3><p class="type-compact">${copy[3]}</p></article>
          <article class="element-card"><h3 class="type-card-title">${copy[4]}</h3><p class="type-compact">${copy[5]}</p></article>
          <article class="element-card"><h3 class="type-card-title">${copy[6]}</h3><p class="type-compact">${copy[7]}</p></article>
          <article class="element-card"><h3 class="type-card-title">${copy[8]}</h3><p class="type-compact">${copy[9]}</p></article>
        </div>
      </section>
    `;
  }
}
