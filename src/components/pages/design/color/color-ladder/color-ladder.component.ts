import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designColorContent } from "@app/data/design-color-content.ts";

/** Demonstrates that emphasis survives as value when colour is removed. */
@Component({ selector: "color-ladder", shadow: false })
export class ColorLadderComponent extends BaseElement {
  constructor() {
    super();
  }

  render() {
    const copy = designColorContent.copy["color/color-ladder/color-ladder"];
    return html`
      <section id="color-ladder" class="layout-page layout-section layout-section-lg color-section color-ladder">
        <h2 class="type-section color-section__heading">${copy[0]}</h2>
        <p class="type-lede color-section__lede">${copy[1]}</p>
        <div class="color-ladder__grid color-section__content">
          <div><span class="color-ladder__bar color-ladder__bar--1"></span><span>${copy[2]}</span></div>
          <div><span class="color-ladder__bar color-ladder__bar--2"></span><span>${copy[3]}</span></div>
          <div><span class="color-ladder__bar color-ladder__bar--3"></span><span>${copy[4]}</span></div>
          <div><span class="color-ladder__bar color-ladder__bar--4"></span><span>${copy[5]}</span></div>
        </div>
        <div class="color-ladder__grid color-ladder__grid--grey" aria-hidden="true">
          <div><span class="color-ladder__bar color-ladder__bar--1"></span><span>${copy[6]}</span></div>
          <div><span class="color-ladder__bar color-ladder__bar--2"></span><span>${copy[7]}</span></div>
          <div><span class="color-ladder__bar color-ladder__bar--3"></span><span>${copy[8]}</span></div>
          <div><span class="color-ladder__bar color-ladder__bar--4"></span><span>${copy[9]}</span></div>
        </div>
      </section>
    `;
  }
}
