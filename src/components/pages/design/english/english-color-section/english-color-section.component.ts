import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

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
    return html`
      <section class="layout-page layout-section english-section design-section" id="english-color" aria-label="Colour roles for text">
          <p class="type-eyebrow design-specimen-eyebrow">04 · Colour roles for text</p>
          <h2 class="type-subsection">Semantic colour, not pigment — foreground, muted, primary, status.</h2>
          <p class="type-lede">Typography never names a hue. It consumes the role layer from <code>src/color.css</code> so light and dark modes share one contract.</p>
          <div class="design-specimen english-color-section__roles">
            <p class="type-prose english-color-section__role english-color-section__role--foreground"><strong>Foreground</strong> — <code>var(--foreground-color)</code> — primary reading text</p>
            <p class="type-prose english-color-section__role english-color-section__role--muted"><strong>Muted</strong> — <code>var(--muted-color)</code> — supporting copy, metadata, helper text</p>
            <p class="type-prose english-color-section__role english-color-section__role--primary"><strong>Primary</strong> — <code>var(--primary-color)</code> — links, key actions, intentional emphasis</p>
            <p class="type-prose english-color-section__role english-color-section__role--success"><strong>Success</strong> — <code>var(--success-color)</code> — confirmed state, completed count</p>
            <p class="type-prose english-color-section__role english-color-section__role--warning"><strong>Warning</strong> — <code>var(--warning-color)</code> — attention needed, pending state</p>
            <p class="type-prose english-color-section__role english-color-section__role--danger"><strong>Danger</strong> — <code>var(--danger-color)</code> — destructive action, error text</p>
          </div>
          <p class="type-compact">Never use raw hex, palette utilities, or hardcoded colours on text. Pair colour with weight or icon — never rely on colour alone for meaning.</p>
      </section>
    `;
  }
}
