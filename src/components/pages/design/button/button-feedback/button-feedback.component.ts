import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designButtonContent } from "@app/data/design-button-content.ts";

/** Catalogs the shared button sizes, shapes, interaction modes, and states. */
@Component({ selector: "button-feedback", shadow: false })
export class ButtonFeedbackComponent extends BaseElement {
  /** Creates the feedback section element. */
  constructor() { super(); }

  /** Renders the class combinations available to product surfaces and tests. */
  render() {
    const copy = designButtonContent.copy["button/button-feedback/button-feedback"];
    return html`
      <section id="button-feedback" class="layout-page layout-section layout-stack layout-stack-sm button-section button-feedback">
        <p class="type-eyebrow button-section__eyebrow">${copy[20]}</p>
        <h2 class="type-section button-section__heading">${copy[21]}</h2>
        <p class="button-section__note">${copy[22]}<code>${copy[23]}</code>${copy[24]}</p>

        <div class="button-reference button-section__content">
          <article class="button-reference__group">
            <p class="type-eyebrow">${copy[25]}</p>
            <h3 class="type-card-title">${copy[26]}</h3>
            <div class="button-reference__row">
              <span class="button-reference__item"><app-button label="${copy[0]}" size="sm"></app-button><code>${copy[27]}</code></span>
              <span class="button-reference__item"><app-button label="${copy[1]}"></app-button><code>${copy[28]}</code></span>
              <span class="button-reference__item"><app-button label="${copy[2]}" size="lg"></app-button><code>${copy[29]}</code></span>
            </div>
          </article>

          <article class="button-reference__group">
            <p class="type-eyebrow">${copy[30]}</p>
            <h3 class="type-card-title">${copy[31]}</h3>
            <div class="button-reference__row">
              <span class="button-reference__item"><app-button label="${copy[3]}" tone="primary" shape="square"></app-button><code>${copy[32]}</code></span>
              <span class="button-reference__item"><app-button label="${copy[4]}" tone="primary" shape="rounded"></app-button><code>${copy[33]}</code></span>
              <span class="button-reference__item"><app-button label="${copy[5]}" tone="primary" shape="pill"></app-button><code>${copy[34]}</code></span>
              <span class="button-reference__item"><app-button label="${copy[6]}" accessible-label="${copy[7]}" shape="icon"></app-button><code>${copy[35]}</code></span>
              <span class="button-reference__item"><app-button label="${copy[8]}" block="true"></app-button><code>${copy[36]}</code></span>
            </div>
          </article>

          <article class="button-reference__group">
            <p class="type-eyebrow">${copy[37]}</p>
            <h3 class="type-card-title">${copy[38]}</h3>
            <div class="button-reference__row">
              <span class="button-reference__item"><app-button label="${copy[9]}" tone="primary"></app-button><code>${copy[39]}</code></span>
              <span class="button-reference__item"><app-button label="${copy[10]}" interaction="lift"></app-button><code>${copy[40]}</code></span>
              <span class="button-reference__item"><app-button label="${copy[11]}" tone="quiet" interaction="shift"></app-button><code>${copy[41]}</code></span>
            </div>
          </article>

          <article class="button-reference__group">
            <p class="type-eyebrow">${copy[42]}</p>
            <h3 class="type-card-title">${copy[43]}</h3>
            <div class="button-reference__row button-reference__states">
              <span class="button-reference__item"><app-button label="${copy[12]}"></app-button><code>${copy[44]}</code></span>
              <span class="button-reference__item"><app-button label="${copy[13]}" preview="hover"></app-button><code>${copy[45]}</code></span>
              <span class="button-reference__item"><app-button label="${copy[14]}" preview="focus"></app-button><code>${copy[46]}</code></span>
              <span class="button-reference__item"><app-button label="${copy[15]}" preview="pressed"></app-button><code>${copy[47]}</code></span>
              <span class="button-reference__item"><app-button label="${copy[16]}" tone="primary" state="busy"></app-button><code>${copy[48]}</code></span>
              <span class="button-reference__item"><app-button label="${copy[17]}" state="done"></app-button><code>${copy[49]}</code></span>
              <span class="button-reference__item"><app-button label="${copy[18]}" state="error"></app-button><code>${copy[50]}</code></span>
              <span class="button-reference__item"><app-button label="${copy[19]}" tone="primary" disabled="true"></app-button><code>${copy[51]}</code></span>
            </div>
          </article>
        </div>
      </section>
    `;
  }
}
