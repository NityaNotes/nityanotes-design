import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designLayoutContent } from "@app/data/design-layout-content.ts";

/** Demonstrates the four content measures defined by the layout contract. */
@Component({ selector: "layout-measures-section", shadow: false })
export class LayoutMeasuresSectionComponent extends BaseElement {
  constructor() {
    super();
  }

  render() {
    const copy = designLayoutContent.copy["layout/measures-section/layout-measures-section"];
    return html`
      <section class="layout-page layout-section layout-reference-section" id="layout-measures">
        <div class="layout-reference-heading"><p class="type-eyebrow">${copy[1]}</p><h2 class="type-section">${copy[2]}</h2><p class="type-lede">${copy[3]}</p></div>
        <div class="layout-measures-section__list" aria-label="${copy[0]}">
          <article class="layout-measures-section__item layout-measures-section__item--page"><div><code>${copy[4]}</code><span>${copy[5]}</span></div><p>${copy[6]}</p></article>
          <article class="layout-measures-section__item layout-measures-section__item--content"><div><code>${copy[7]}</code><span>${copy[8]}</span></div><p>${copy[9]}</p></article>
          <article class="layout-measures-section__item layout-measures-section__item--reading"><div><code>${copy[10]}</code><span>${copy[11]}</span></div><p>${copy[12]}</p></article>
          <article class="layout-measures-section__item layout-measures-section__item--form"><div><code>${copy[13]}</code><span>${copy[14]}</span></div><p>${copy[15]}</p></article>
        </div>
      </section>
    `;
  }
}
