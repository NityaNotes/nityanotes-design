import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designColorContent } from "@app/data/design-color-content.ts";

/** Shows status colours with the visible words that carry their meaning. */
@Component({ selector: "color-status", shadow: false })
export class ColorStatusComponent extends BaseElement {
  constructor() {
    super();
  }

  render() {
    const copy = designColorContent.copy["color/color-status/color-status"];
    return html`
      <section class="layout-page layout-section-end color-section color-status">
        <p class="type-eyebrow color-section__eyebrow">${copy[0]}</p>
        <h2 class="type-section color-section__heading">${copy[1]}</h2>
        <p class="type-lede color-section__lede">${copy[2]}</p>
        <div class="layout-row color-section__content color-status__status">
          <span class="color-status__chip color-status__chip--success">${copy[3]}</span>
          <span class="color-status__chip color-status__chip--warning">${copy[4]}</span>
          <span class="color-status__chip color-status__chip--danger">${copy[5]}</span>
        </div>
      </section>
    `;
  }
}
