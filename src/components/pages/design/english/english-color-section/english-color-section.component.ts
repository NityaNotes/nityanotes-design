import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designEnglishContent } from "@app/data/design-english-content.ts";

/**
 * Demonstrates the semantic colour roles that typography is allowed to wear.
 *
 * Each specimen row pairs a role name with its rendered colour so the reader
 * sees foreground, muted, primary, and the three status roles exactly as the
 * role layer serves them in both modes.
 *
 * Selector: `english-color-section`.
 */
@Component({ selector: "english-color-section", shadow: false })
export class EnglishColorSectionComponent extends BaseElement {
  /** Creates the framework element before Dota renders the static colour specimens. */
  constructor() {
    super();
  }

  /** Renders the text colour roles without reading or changing application state. */
  render() {
    const copy = designEnglishContent.copy["english/english-color-section/english-color-section"];
    return html`
      <section class="layout-page layout-section english-section design-section" id="english-color" aria-label="${copy[0]}">
          <p class="type-eyebrow design-specimen-eyebrow">${copy[1]}</p>
          <h2 class="type-subsection">${copy[2]}</h2>
          <p class="type-lede">${copy[3]}<code>${copy[4]}</code>${copy[5]}</p>
          <div class="design-specimen english-color-section__roles">
            <p class="type-prose english-color-section__role english-color-section__role--foreground"><strong>${copy[6]}</strong>${copy[7]}<code>${copy[8]}</code>${copy[9]}</p>
            <p class="type-prose english-color-section__role english-color-section__role--muted"><strong>${copy[10]}</strong>${copy[11]}<code>${copy[12]}</code>${copy[13]}</p>
            <p class="type-prose english-color-section__role english-color-section__role--primary"><strong>${copy[14]}</strong>${copy[15]}<code>${copy[16]}</code>${copy[17]}</p>
            <p class="type-prose english-color-section__role english-color-section__role--success"><strong>${copy[18]}</strong>${copy[19]}<code>${copy[20]}</code>${copy[21]}</p>
            <p class="type-prose english-color-section__role english-color-section__role--warning"><strong>${copy[22]}</strong>${copy[23]}<code>${copy[24]}</code>${copy[25]}</p>
            <p class="type-prose english-color-section__role english-color-section__role--danger"><strong>${copy[26]}</strong>${copy[27]}<code>${copy[28]}</code>${copy[29]}</p>
          </div>
          <p class="type-compact">${copy[30]}</p>
      </section>
    `;
  }
}
