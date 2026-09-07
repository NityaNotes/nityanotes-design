import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

/** Demonstrates that emphasis survives as value when colour is removed. */
@Component({ selector: "color-ladder", shadow: false })
export class ColorLadderComponent extends BaseElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <section id="color-ladder" class="layout-page layout-section layout-section-lg color-section color-ladder">
        <h2 class="type-section color-section__heading">One hue, four values — and it has to survive greyscale.</h2>
        <p class="type-lede color-section__lede">Emphasis steps through a single family at rising value, not four different hues. The bottom row is the same markup with colour removed: if the sequence stops reading there, the design is broken on any monochrome surface.</p>
        <div class="color-ladder__grid color-section__content">
          <div><span class="color-ladder__bar color-ladder__bar--1"></span><span>Rung 1 · quietest</span></div>
          <div><span class="color-ladder__bar color-ladder__bar--2"></span><span>Rung 2</span></div>
          <div><span class="color-ladder__bar color-ladder__bar--3"></span><span>Rung 3</span></div>
          <div><span class="color-ladder__bar color-ladder__bar--4"></span><span>Rung 4 · loudest</span></div>
        </div>
        <div class="color-ladder__grid color-ladder__grid--grey" aria-hidden="true">
          <div><span class="color-ladder__bar color-ladder__bar--1"></span><span>Greyscale</span></div>
          <div><span class="color-ladder__bar color-ladder__bar--2"></span><span>Greyscale</span></div>
          <div><span class="color-ladder__bar color-ladder__bar--3"></span><span>Greyscale</span></div>
          <div><span class="color-ladder__bar color-ladder__bar--4"></span><span>Greyscale</span></div>
        </div>
      </section>
    `;
  }
}
