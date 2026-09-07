import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

/** Demonstrates the four content measures defined by the layout contract. */
@Component({ selector: "layout-measures-section", shadow: false })
export class LayoutMeasuresSectionComponent extends BaseElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <section class="layout-page layout-section layout-reference-section" id="layout-measures">
        <div class="layout-reference-heading"><p class="type-eyebrow">01 · Measures</p><h2 class="type-section">Choose the measure by the content shape.</h2><p class="type-lede">One container per section keeps the gutter singular. The page measure carries broad composition; focused work and prose become progressively narrower.</p></div>
        <div class="layout-measures-section__list" aria-label="Container measures">
          <article class="layout-measures-section__item layout-measures-section__item--page"><div><code>.layout-page</code><span>80rem</span></div><p>Three or more columns, site chrome, and wide page composition.</p></article>
          <article class="layout-measures-section__item layout-measures-section__item--content"><div><code>.layout-content</code><span>60rem</span></div><p>One or two columns of focused interface work.</p></article>
          <article class="layout-measures-section__item layout-measures-section__item--reading"><div><code>.layout-reading</code><span>45rem</span></div><p>Long-form reading that needs a calm line length.</p></article>
          <article class="layout-measures-section__item layout-measures-section__item--form"><div><code>.layout-form</code><span>38rem</span></div><p>Fields and settings groups that benefit from a compact frame.</p></article>
        </div>
      </section>
    `;
  }
}
