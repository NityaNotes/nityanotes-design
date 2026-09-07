import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

/** Documents the responsive layout decisions at each supported width. */
@Component({ selector: "layout-breakpoints-section", shadow: false })
export class LayoutBreakpointsSectionComponent extends BaseElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <section class="layout-page layout-section-end layout-reference-section" id="layout-breakpoints">
        <div class="layout-reference-heading"><p class="type-eyebrow">04 · Breakpoints</p><h2 class="type-section">Three decisions, six test widths.</h2><p class="type-lede">At 520px the four-grid becomes two-up. At 700px fixed grids reach their intended count. At 1100px a rail may become sticky.</p></div>
        <div class="layout-breakpoints-section__table" role="table" aria-label="Responsive layout rules"><div class="layout-breakpoints-section__row layout-breakpoints-section__row--head" role="row"><span role="columnheader">Width</span><span role="columnheader">Layout response</span></div><div class="layout-breakpoints-section__row" role="row"><strong role="cell">320</strong><span role="cell">The floor: no horizontal scroll.</span></div><div class="layout-breakpoints-section__row" role="row"><strong role="cell">520</strong><span role="cell">Four-column specimens become two-up.</span></div><div class="layout-breakpoints-section__row" role="row"><strong role="cell">700</strong><span role="cell">Two-, three-, and four-grids reach their full count.</span></div><div class="layout-breakpoints-section__row" role="row"><strong role="cell">1100</strong><span role="cell">A supporting rail can stick below the site chrome.</span></div><div class="layout-breakpoints-section__row" role="row"><strong role="cell">1440</strong><span role="cell">Containers are capped; only the ground gets wider.</span></div></div>
      </section>
    `;
  }
}
