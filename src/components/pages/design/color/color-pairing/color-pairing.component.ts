import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

/** Explains the supported colour relationships and application rules. */
@Component({ selector: "color-pairing", shadow: false })
export class ColorPairingComponent extends BaseElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <section id="color-pairing" class="layout-page layout-section color-section color-pairing">
        <div class="layout-grid-2 color-pairing__intro">
          <div>
            <p class="type-eyebrow color-section__eyebrow">03 · Application rules</p>
            <h2 class="type-section color-section__heading">Make the theme do the work.</h2>
            <p class="type-lede color-section__lede">These five pairs are the only colour relationships a component needs to express. The role layer selects their values; component CSS stays focused on intent.</p>
          </div>
          <div class="layout-grid-2 color-pairing__grid">
            <article class="color-pairing__pair color-surface-muted">
              <p class="type-eyebrow">Canvas / content</p>
              <h3 class="type-subsection">Readable default</h3>
              <code>--background-color + --foreground-color</code>
            </article>
            <article class="color-pairing__pair color-surface">
              <p class="type-eyebrow">Surface / content</p>
              <h3 class="type-subsection">Human input</h3>
              <code>--surface-color + --foreground-color</code>
            </article>
            <article class="color-pairing__pair color-surface-muted">
              <p class="type-eyebrow">Action / on action</p>
              <app-button label="Primary action" tone="primary"></app-button>
              <code>--primary-color + --primary-color-on</code>
            </article>
            <article class="color-pairing__pair color-accent-subtle">
              <p class="type-eyebrow">Subtle / content</p>
              <h3 class="type-subsection">Aside or mark</h3>
              <code>--primary-color-subtle + --foreground-color</code>
            </article>
            <article class="color-pairing__pair color-pairing__pair--contrast">
              <p class="type-eyebrow">Contrast / content</p>
              <h3 class="type-subsection">Focused emphasis</h3>
              <code>--contrast-background-color + --contrast-foreground-color</code>
            </article>
          </div>
        </div>
        <div class="layout-grid-2 color-pairing__rules">
          <article>
            <h3 class="type-subsection">Name the role, not the shade</h3>
            <p class="type-compact">Choose <code>--muted-color</code> for supporting copy, never a step that only happens to work on one surface.</p>
          </article>
          <article>
            <h3 class="type-subsection">Keep literals in the palette</h3>
            <p class="type-compact">Add or adjust raw values only in the palette layer. Map their meaning in the role layer. A hex in a component file is drift by definition.</p>
          </article>
          <article>
            <h3 class="type-subsection">Theme state is centralised</h3>
            <p class="type-compact">Light and dark resolve through the same role names. Do not add a page-level colour preference block.</p>
          </article>
          <article>
            <h3 class="type-subsection">Use the mix ramp</h3>
            <p class="type-compact">Take <code>--primary-color-ring</code> or <code>--shadow-lift</code> instead of writing a new alpha or shadow in a component.</p>
          </article>
        </div>
      </section>
    `;
  }
}
