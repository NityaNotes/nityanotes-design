import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designElementPageContent } from "@app/data/design-element-page-content.ts";

/**
 * Documents common element misuses on `/design/element`.
 *
 * Each item names an easy blunder — inventing radii, ad-hoc dividers, unlabelled
 * fields, or stacked callouts — so reviewers can cite a rule instead of re-litigating
 * geometry in every new component.
 *
 * Selector: `element-mistakes-section`.
 */
@Component({ selector: "element-mistakes-section", shadow: false })
export class ElementMistakesSectionComponent extends BaseElement {
  /** Creates the framework element before Dota renders its static checklist. */
  constructor() {
    super();
  }

  /** Renders the misuse checklist without changing application state. */
  render() {
    const copy = designElementPageContent.copy["element/element-mistakes-section/element-mistakes-section"];
    return html`
      <section class="layout-page layout-section design-section layout-stack layout-stack-lg" id="element-mistakes">
        <p class="type-eyebrow">${copy[0]}</p>
        <h2 class="type-section">${copy[1]}</h2>
        <div class="layout-grid-auto"><article class="element-card"><h3 class="type-card-title">${copy[2]}</h3><p class="type-compact">${copy[3]}</p></article><article class="element-card"><h3 class="type-card-title">${copy[4]}</h3><p class="type-compact">${copy[5]}</p></article><article class="element-card"><h3 class="type-card-title">${copy[6]}</h3><p class="type-compact">${copy[7]}</p></article></div>
      </section>
    `;
  }
}
