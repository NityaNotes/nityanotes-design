import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

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
    return html`
      <section class="layout-page layout-section english-section design-section" id="english-roles" aria-label="English type roles rendered live">
          <p class="type-eyebrow design-specimen-eyebrow">03 · The roles, rendered live</p>
          <h2 class="type-subsection">Seventeen roles cover the whole product; you never set a size.</h2>
          <p class="type-lede">Pick the nearest role instead of introducing a component-local scale. The lede orients, prose carries long-form detail, and interface chrome stays fixed at its physical size.</p>
          <dl class="design-specimen design-specimen-scale">
            <div><dt class="type-micro">.type-display</dt><dd class="type-display-sm">Write what matters.</dd></div>
            <div><dt class="type-micro">.type-section</dt><dd class="type-section">A clear hierarchy.</dd></div>
            <div><dt class="type-micro">.type-subsection</dt><dd class="type-subsection">Nested headings carry structure.</dd></div>
            <div><dt class="type-micro">.type-lede / .type-gloss</dt><dd class="type-lede">Identical numbers, deliberately two names. A gloss is the meaning of the verse above it — content; a lede is an introduction — apparatus.</dd></div>
            <div><dt class="type-micro">.type-prose</dt><dd class="type-prose">Long-form copy runs up to 720px of measure at 1.75 leading, so an explanation never tires the eye it is meant to help.</dd></div>
            <div><dt class="type-micro">.type-card-title</dt><dd class="type-card-title">Card answers begin here.</dd></div>
            <div><dt class="type-micro">body</dt><dd>Default body stays practical at the reading size; supporting detail uses muted colour rather than a second scale of arbitrary sizes.</dd></div>
            <div><dt class="type-micro">.type-compact</dt><dd class="type-compact">Metadata and helper text stay compact so they support the reading flow.</dd></div>
            <div><dt class="type-micro">.type-metric</dt><dd><span class="type-metric" data-count>1,247</span> <span class="type-compact">verses memorised — tabular digits never jump as they change.</span></dd></div>
            <div><dt class="type-micro">.type-code</dt><dd><code class="type-code">bg-02.047</code></dd></div>
            <div><dt class="type-micro">.type-label · .type-eyebrow</dt><dd><span class="type-label">Verse list</span>&ensp;<span class="type-eyebrow">Corpus · Section 02</span></dd></div>
          </dl>
          <p>Weights are 400, 500 and 600 only — 400 is prose and all scripture, 500 is the interface default, 600 is display and section. Tracking follows size: negative above 18px, flat below 15px, positive only on the three uppercase roles.</p>
      </section>
    `;
  }
}
