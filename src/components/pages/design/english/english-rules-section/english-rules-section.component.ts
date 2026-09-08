import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designEnglishContent } from "@app/data/design-english-content.ts";

/**
 * States the hard boundaries of the English typography system.
 *
 * The list is the enforceable contract: no local sizes, no per-page role
 * redefinition, no synthetic slope, colour and layout only through their
 * role layers, and clean rendering rules for the components that consume them.
 *
 * Selector: `english-rules-section`.
 */
@Component({ selector: "english-rules-section", shadow: false })
export class EnglishRulesSectionComponent extends BaseElement {
  /** Creates the framework element before Dota renders the static rule list. */
  constructor() {
    super();
  }

  /** Renders the hard rules without reading or changing application state. */
  render() {
    const copy = designEnglishContent.copy["english/english-rules-section/english-rules-section"];
    return html`
      <section class="layout-page layout-section-end english-section design-section english-rules-section" id="english-rules" aria-label="${copy[0]}">
          <p class="type-eyebrow design-specimen-eyebrow">${copy[1]}</p>
          <h2 class="type-subsection">${copy[2]}</h2>
          <ol class="element-rule-list">
            <li><div class="element-rule-list__body"><p class="type-card-title">${copy[3]}</p><p class="type-compact">${copy[4]}</p></div></li>
            <li><div class="element-rule-list__body"><p class="type-card-title">${copy[5]}</p><p class="type-compact">${copy[6]}<code>${copy[7]}</code>${copy[8]}<code>${copy[9]}</code>${copy[10]}<code>${copy[11]}</code>${copy[12]}</p></div></li>
            <li><div class="element-rule-list__body"><p class="type-card-title">${copy[13]}</p><p class="type-compact">${copy[14]}<span class="type-term">${copy[15]}</span>${copy[16]}</p></div></li>
            <li><div class="element-rule-list__body"><p class="type-card-title">${copy[17]}</p><p class="type-compact">${copy[18]}</p></div></li>
            <li><div class="element-rule-list__body"><p class="type-card-title">${copy[19]}</p><p class="type-compact">${copy[20]}<code>${copy[21]}</code>${copy[22]}</p></div></li>
            <li><div class="element-rule-list__body"><p class="type-card-title">${copy[23]}</p><p class="type-compact">${copy[24]}<code>${copy[25]}</code>${copy[26]}<code>${copy[27]}</code>${copy[28]}</p></div></li>
            <li><div class="element-rule-list__body"><p class="type-card-title">${copy[29]}</p><p class="type-compact">${copy[30]}</p></div></li>
          </ol>
          <p class="element-specimen-note">${copy[31]}<code>${copy[32]}</code>${copy[33]}<code>${copy[34]}</code>${copy[35]}<code>${copy[36]}</code>${copy[37]}</p>
      </section>
    `;
  }
}
