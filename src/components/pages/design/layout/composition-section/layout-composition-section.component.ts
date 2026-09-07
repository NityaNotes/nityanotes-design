import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

/** Demonstrates stack, grid, row, and nested-surface composition. */
@Component({ selector: "layout-composition-section", shadow: false })
export class LayoutCompositionSectionComponent extends BaseElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <section class="layout-page layout-section layout-reference-section" id="layout-composition">
        <div class="layout-reference-heading"><p class="type-eyebrow">03 · Composition</p><h2 class="type-section">Stack first, then choose a grid.</h2><p class="type-lede">A grid earns a fixed column count only when that count says something. Otherwise, auto-fit lets the available measure decide.</p></div>
        <div class="layout-grid-auto layout-composition-section__grid"><article class="element-card"><p class="type-eyebrow">Stack</p><h3 class="type-card-title">Vertical rhythm is shared.</h3><p>Sibling spacing uses a layout stack rather than one-off margins.</p></article><article class="element-card"><p class="type-eyebrow">Auto-fit</p><h3 class="type-card-title">Cards wrap before copy crowds.</h3><p>Each cell has a readable minimum and grows only when the measure allows it.</p></article><article class="element-card"><p class="type-eyebrow">Row</p><h3 class="type-card-title">Actions retain a wrapped gap.</h3><p>Controls stay aligned while a narrow screen turns the row into successive lines.</p></article></div>
        <div class="layout-composition-section__surface-stack" aria-label="Nested surface tiers"><div><code>panel · xl</code><div><code>card · lg</code><div><code>tile · md</code><span class="element-badge">control · sm</span></div></div></div></div>
        <p class="layout-reference-note">Nested surfaces step down in radius: panel → card → tile → control.</p>
      </section>
    `;
  }
}
