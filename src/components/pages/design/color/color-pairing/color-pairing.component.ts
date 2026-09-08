import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designColorContent } from "@app/data/design-color-content.ts";

/** Explains the supported colour relationships and application rules. */
@Component({ selector: "color-pairing", shadow: false })
export class ColorPairingComponent extends BaseElement {
  constructor() {
    super();
  }

  render() {
    const copy = designColorContent.copy["color/color-pairing/color-pairing"];
    return html`
      <section id="color-pairing" class="layout-page layout-section color-section color-pairing">
        <div class="layout-grid-2 color-pairing__intro">
          <div>
            <p class="type-eyebrow color-section__eyebrow">${copy[1]}</p>
            <h2 class="type-section color-section__heading">${copy[2]}</h2>
            <p class="type-lede color-section__lede">${copy[3]}</p>
          </div>
          <div class="layout-grid-2 color-pairing__grid">
            <article class="color-pairing__pair color-surface-muted">
              <p class="type-eyebrow">${copy[4]}</p>
              <h3 class="type-subsection">${copy[5]}</h3>
              <code>${copy[6]}</code>
            </article>
            <article class="color-pairing__pair color-surface">
              <p class="type-eyebrow">${copy[7]}</p>
              <h3 class="type-subsection">${copy[8]}</h3>
              <code>${copy[9]}</code>
            </article>
            <article class="color-pairing__pair color-surface-muted">
              <p class="type-eyebrow">${copy[10]}</p>
              <app-button label="${copy[0]}" tone="primary"></app-button>
              <code>${copy[11]}</code>
            </article>
            <article class="color-pairing__pair color-accent-subtle">
              <p class="type-eyebrow">${copy[12]}</p>
              <h3 class="type-subsection">${copy[13]}</h3>
              <code>${copy[14]}</code>
            </article>
            <article class="color-pairing__pair color-pairing__pair--contrast">
              <p class="type-eyebrow">${copy[15]}</p>
              <h3 class="type-subsection">${copy[16]}</h3>
              <code>${copy[17]}</code>
            </article>
          </div>
        </div>
        <div class="layout-grid-2 color-pairing__rules">
          <article>
            <h3 class="type-subsection">${copy[18]}</h3>
            <p class="type-compact">${copy[19]}<code>${copy[20]}</code>${copy[21]}</p>
          </article>
          <article>
            <h3 class="type-subsection">${copy[22]}</h3>
            <p class="type-compact">${copy[23]}</p>
          </article>
          <article>
            <h3 class="type-subsection">${copy[24]}</h3>
            <p class="type-compact">${copy[25]}</p>
          </article>
          <article>
            <h3 class="type-subsection">${copy[26]}</h3>
            <p class="type-compact">${copy[27]}<code>${copy[28]}</code>${copy[29]}<code>${copy[30]}</code>${copy[31]}</p>
          </article>
        </div>
      </section>
    `;
  }
}
