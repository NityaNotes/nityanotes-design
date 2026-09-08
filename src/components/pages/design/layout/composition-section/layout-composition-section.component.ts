import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designLayoutContent } from "@app/data/design-layout-content.ts";

/** Demonstrates stack, grid, row, and nested-surface composition. */
@Component({ selector: "layout-composition-section", shadow: false })
export class LayoutCompositionSectionComponent extends BaseElement {
  constructor() {
    super();
  }

  render() {
    const copy = designLayoutContent.copy["layout/composition-section/layout-composition-section"];
    return html`
      <section class="layout-page layout-section layout-reference-section" id="layout-composition">
        <div class="layout-reference-heading"><p class="type-eyebrow">${copy[1]}</p><h2 class="type-section">${copy[2]}</h2><p class="type-lede">${copy[3]}</p></div>
        <div class="layout-grid-auto layout-composition-section__grid"><article class="element-card"><p class="type-eyebrow">${copy[4]}</p><h3 class="type-card-title">${copy[5]}</h3><p>${copy[6]}</p></article><article class="element-card"><p class="type-eyebrow">${copy[7]}</p><h3 class="type-card-title">${copy[8]}</h3><p>${copy[9]}</p></article><article class="element-card"><p class="type-eyebrow">${copy[10]}</p><h3 class="type-card-title">${copy[11]}</h3><p>${copy[12]}</p></article></div>
        <div class="layout-composition-section__surface-stack" aria-label="${copy[0]}"><div><code>${copy[13]}</code><div><code>${copy[14]}</code><div><code>${copy[15]}</code><span class="element-badge">${copy[16]}</span></div></div></div></div>
        <p class="layout-reference-note">${copy[17]}</p>
      </section>
    `;
  }
}
