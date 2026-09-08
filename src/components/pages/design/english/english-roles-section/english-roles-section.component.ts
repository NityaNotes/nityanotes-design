import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designEnglishContent } from "@app/data/design-english-content.ts";

/**
 * Renders the English type roles live so the shared scale is the contract.
 *
 * Each row names a role class and shows its rendered output, proving that a
 * component never needs to set a size of its own.
 *
 * Selector: `english-roles-section`.
 */
@Component({ selector: "english-roles-section", shadow: false })
export class EnglishRolesSectionComponent extends BaseElement {
  /** Creates the framework element before Dota renders the static role specimens. */
  constructor() {
    super();
  }

  /** Renders the live role scale without reading or changing application state. */
  render() {
    const copy = designEnglishContent.copy["english/english-roles-section/english-roles-section"];
    return html`
      <section class="layout-page layout-section english-section design-section" id="english-roles" aria-label="${copy[0]}">
          <p class="type-eyebrow design-specimen-eyebrow">${copy[1]}</p>
          <h2 class="type-subsection">${copy[2]}</h2>
          <p class="type-lede">${copy[3]}</p>
          <dl class="design-specimen design-specimen-scale">
            <div><dt class="type-micro">${copy[4]}</dt><dd class="type-display-sm">${copy[5]}</dd></div>
            <div><dt class="type-micro">${copy[6]}</dt><dd class="type-section">${copy[7]}</dd></div>
            <div><dt class="type-micro">${copy[8]}</dt><dd class="type-subsection">${copy[9]}</dd></div>
            <div><dt class="type-micro">${copy[10]}</dt><dd class="type-lede">${copy[11]}</dd></div>
            <div><dt class="type-micro">${copy[12]}</dt><dd class="type-prose">${copy[13]}</dd></div>
            <div><dt class="type-micro">${copy[14]}</dt><dd class="type-card-title">${copy[15]}</dd></div>
            <div><dt class="type-micro">${copy[16]}</dt><dd>${copy[17]}</dd></div>
            <div><dt class="type-micro">${copy[18]}</dt><dd class="type-compact">${copy[19]}</dd></div>
            <div><dt class="type-micro">${copy[20]}</dt><dd><span class="type-metric" data-count>${copy[21]}</span> <span class="type-compact">${copy[22]}</span></dd></div>
            <div><dt class="type-micro">${copy[23]}</dt><dd><code class="type-code">${copy[24]}</code></dd></div>
            <div><dt class="type-micro">${copy[25]}</dt><dd><span class="type-label">${copy[26]}</span>${copy[27]}<span class="type-eyebrow">${copy[28]}</span></dd></div>
          </dl>
          <p>${copy[29]}</p>
      </section>
    `;
  }
}
