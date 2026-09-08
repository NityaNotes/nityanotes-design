import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designLayoutContent } from "@app/data/design-layout-content.ts";

/** Documents the responsive layout decisions at each supported width. */
@Component({ selector: "layout-breakpoints-section", shadow: false })
export class LayoutBreakpointsSectionComponent extends BaseElement {
  constructor() {
    super();
  }

  render() {
    const copy = designLayoutContent.copy["layout/breakpoints-section/layout-breakpoints-section"];
    return html`
      <section class="layout-page layout-section-end layout-reference-section" id="layout-breakpoints">
        <div class="layout-reference-heading"><p class="type-eyebrow">${copy[1]}</p><h2 class="type-section">${copy[2]}</h2><p class="type-lede">${copy[3]}</p></div>
        <div class="layout-breakpoints-section__table" role="table" aria-label="${copy[0]}"><div class="layout-breakpoints-section__row layout-breakpoints-section__row--head" role="row"><span role="columnheader">${copy[4]}</span><span role="columnheader">${copy[5]}</span></div><div class="layout-breakpoints-section__row" role="row"><strong role="cell">${copy[6]}</strong><span role="cell">${copy[7]}</span></div><div class="layout-breakpoints-section__row" role="row"><strong role="cell">${copy[8]}</strong><span role="cell">${copy[9]}</span></div><div class="layout-breakpoints-section__row" role="row"><strong role="cell">${copy[10]}</strong><span role="cell">${copy[11]}</span></div><div class="layout-breakpoints-section__row" role="row"><strong role="cell">${copy[12]}</strong><span role="cell">${copy[13]}</span></div><div class="layout-breakpoints-section__row" role="row"><strong role="cell">${copy[14]}</strong><span role="cell">${copy[15]}</span></div></div>
      </section>
    `;
  }
}
