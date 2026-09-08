import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designHindiContent } from "@app/data/design-hindi-content.ts";

/**
 * States the hard boundaries of the Hindi typography system.
 *
 * The list is the Devanagari contract: no tracking or uppercase transforms at
 * any size, no synthetic bold or slope on a verse, the interface family never
 * writes a verse, and no parallel `.type-*-hi` ladder exists.
 *
 * Selector: `hindi-rules-section`.
 */
@Component({ selector: "hindi-rules-section", shadow: false })
export class HindiRulesSectionComponent extends BaseElement {
  /** Creates the framework element before Dota renders the static rule list. */
  constructor() {
    super();
  }

  /** Renders the hard rules without reading or changing application state. */
  render() {
    const copy = designHindiContent.copy["hindi/hindi-rules-section/hindi-rules-section"];
    return html`
      <section class="layout-page layout-section-end hindi-section design-section" id="hindi-rules" aria-label="${copy[0]}" lang="hi">
          <p class="type-eyebrow design-specimen-eyebrow">${copy[1]}</p>
          <h2 class="type-subsection">${copy[2]}</h2>
          <ol class="element-rule-list">
            <li><div class="element-rule-list__body"><p class="type-card-title">${copy[3]}</p><p class="type-compact">${copy[4]}</p></div></li>
            <li><div class="element-rule-list__body"><p class="type-card-title">${copy[5]}</p><p class="type-compact">${copy[6]}<code>${copy[7]}</code>${copy[8]}</p></div></li>
            <li><div class="element-rule-list__body"><p class="type-card-title">${copy[9]}</p><p class="type-compact">${copy[10]}<code>${copy[11]}</code>${copy[12]}</p></div></li>
            <li><div class="element-rule-list__body"><p class="type-card-title">${copy[13]}<code>${copy[14]}</code>${copy[15]}</p><p class="type-compact">${copy[16]}</p></div></li>
          </ol>
      </section>
    `;
  }
}
