import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designButtonContent } from "@app/data/design-button-content.ts";

/** Defines the four control behaviours before any visual button treatment is chosen. */
@Component({ selector: "button-taxonomy", shadow: false })
export class ButtonTaxonomyComponent extends BaseElement {
  /** Creates the taxonomy section element. */
  constructor() { super(); }

  /** Renders the behaviour table used to classify a control. */
  render() {
    const copy = designButtonContent.copy["button/button-taxonomy/button-taxonomy"];
    return html`
      <section id="button-taxonomy" class="layout-page layout-section layout-stack layout-stack-sm button-section button-taxonomy">
        <p class="type-eyebrow button-section__eyebrow">${copy[0]}</p>
        <h2 class="type-section button-section__heading">${copy[1]}</h2>
        <p class="button-section__note">${copy[2]}</p>
        <div class="layout-grid-2 button-section__content button-taxonomy__grid">
          <article class="element-card button-taxonomy__card">
            <p class="type-eyebrow">${copy[3]}</p>
            <h3 class="type-card-title">${copy[4]}</h3>
            <p class="type-compact">${copy[5]}</p>
            <code>${copy[6]}</code>
          </article>
          <article class="element-card button-taxonomy__card">
            <p class="type-eyebrow">${copy[7]}</p>
            <h3 class="type-card-title">${copy[8]}</h3>
            <p class="type-compact">${copy[9]}</p>
            <code>${copy[10]}</code>
          </article>
          <article class="element-card button-taxonomy__card">
            <p class="type-eyebrow">${copy[11]}</p>
            <h3 class="type-card-title">${copy[12]}</h3>
            <p class="type-compact">${copy[13]}</p>
            <code>${copy[14]}</code>
          </article>
          <article class="element-card button-taxonomy__card">
            <p class="type-eyebrow">${copy[15]}</p>
            <h3 class="type-card-title">${copy[16]}</h3>
            <p class="type-compact">${copy[17]}</p>
            <code>${copy[18]}</code>
          </article>
        </div>
      </section>
    `;
  }
}
