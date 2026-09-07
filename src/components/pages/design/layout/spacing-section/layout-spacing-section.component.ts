import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

/** Shows every reusable spacing value as a visible specimen. */
@Component({ selector: "layout-spacing-section", shadow: false })
export class LayoutSpacingSectionComponent extends BaseElement {
  constructor() {
    super();
  }

  render() {
    const spaces = [4, 8, 12, 16, 24, 32, 48, 64, 96, 128];

    return html`
      <section class="layout-page layout-section layout-reference-section" id="layout-space">
        <div class="layout-reference-heading"><p class="type-eyebrow">02 · Space</p><h2 class="type-section">One scale for every gap.</h2><p class="type-lede">The same ten values set a label’s breathing room, a card grid’s gap, and the rhythm between sections.</p></div>
        <div class="layout-spacing-section__grid" aria-label="Spacing scale">${spaces.map((pixels, index) => html`<article class="layout-spacing-section__token"><span class="layout-spacing-section__swatch layout-spacing-section__swatch--${index + 1}"></span><code>space-${index + 1}</code><span>${pixels} px</span></article>`)}</div>
        <p class="layout-reference-note">2 inside a badge · 3 from label to field · 4 between form rows · 5 between cards · 6 from a section head to its content · 7 and above for the page rhythm.</p>
      </section>
    `;
  }
}
