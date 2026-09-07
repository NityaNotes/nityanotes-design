import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

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
    return html`
      <section class="layout-page layout-section design-section layout-stack layout-stack-lg" id="element-mistakes">
        <p class="type-eyebrow">04 · Common mistakes</p>
        <h2 class="type-section">Easy blunders, named.</h2>
        <div class="layout-grid-auto"><article class="element-card"><h3 class="type-card-title">Do not invent geometry.</h3><p class="type-compact">Reuse surface, border, radius, and spacing tokens.</p></article><article class="element-card"><h3 class="type-card-title">Do not hide semantics.</h3><p class="type-compact">A visible label names a field; an anchor navigates; a button acts.</p></article><article class="element-card"><h3 class="type-card-title">Do not stack emphasis.</h3><p class="type-compact">One callout per idea keeps its weight meaningful.</p></article></div>
      </section>
    `;
  }
}
