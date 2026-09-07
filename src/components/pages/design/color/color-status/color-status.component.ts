import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

/** Shows status colours with the visible words that carry their meaning. */
@Component({ selector: "color-status", shadow: false })
export class ColorStatusComponent extends BaseElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <section class="layout-page layout-section-end color-section color-status">
        <p class="type-eyebrow color-section__eyebrow">06 · Status and emphasis</p>
        <h2 class="type-section color-section__heading">Colour supports a visible word.</h2>
        <p class="type-lede color-section__lede">A status never relies on colour alone. The label carries the result across both themes and reduced-colour conditions.</p>
        <div class="layout-row color-section__content color-status__status">
          <span class="color-status__chip color-status__chip--success">Success</span>
          <span class="color-status__chip color-status__chip--warning">Warning</span>
          <span class="color-status__chip color-status__chip--danger">Danger</span>
        </div>
      </section>
    `;
  }
}
