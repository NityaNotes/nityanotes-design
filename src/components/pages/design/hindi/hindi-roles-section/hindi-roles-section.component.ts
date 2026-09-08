import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designHindiContent } from "@app/data/design-hindi-content.ts";

/**
 * Renders the shared type roles with their Devanagari adjustments.
 *
 * The specimen proves the second script is not a second ladder: the same role
 * classes run, while Devanagari receives slightly more size and open leading
 * so the matras never collide.
 *
 * Selector: `hindi-roles-section`.
 */
@Component({ selector: "hindi-roles-section", shadow: false })
export class HindiRolesSectionComponent extends BaseElement {
  /** Creates the framework element before Dota renders the static role specimens. */
  constructor() {
    super();
  }

  /** Renders the live Devanagari role scale without reading or changing application state. */
  render() {
    const copy = designHindiContent.copy["hindi/hindi-roles-section/hindi-roles-section"];
    return html`
      <section class="layout-page layout-section hindi-section design-section" id="hindi-roles" aria-label="${copy[0]}" lang="hi">
          <p class="type-eyebrow design-specimen-eyebrow">${copy[1]}</p>
          <h2 class="type-subsection">${copy[2]}</h2>
          <p class="type-lede">${copy[3]}</p>
          <dl class="design-specimen design-specimen-scale">
            <div><dt class="type-micro">${copy[4]}</dt><dd class="type-lede">${copy[5]}</dd></div>
            <div><dt class="type-micro">${copy[6]}</dt><dd class="type-card-title">${copy[7]}</dd></div>
            <div><dt class="type-micro">${copy[8]}</dt><dd><span class="type-metric" data-count>${copy[9]}</span> <span class="type-compact">${copy[10]}</span></dd></div>
            <div><dt class="type-micro">${copy[11]}</dt><dd><span class="type-label">${copy[12]}</span></dd></div>
          </dl>
      </section>
    `;
  }
}
