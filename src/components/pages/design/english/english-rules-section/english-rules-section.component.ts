import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

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
    return html`
      <section class="layout-page layout-section-end english-section design-section english-rules-section" id="english-rules" aria-label="Hard rules">
          <p class="type-eyebrow design-specimen-eyebrow">07 · Hard rules</p>
          <h2 class="type-subsection">Where the system stops.</h2>
          <ol class="element-rule-list">
            <li><div class="element-rule-list__body"><p class="type-card-title">Never hardcode a px or rem font-size.</p><p class="type-compact">Pick the nearest role in a page or component file instead.</p></div></li>
            <li><div class="element-rule-list__body"><p class="type-card-title">Never redefine a shared type role per page.</p><p class="type-compact">Use <code>.type-display</code>, <code>.type-verse</code>, and <code>.type-eyebrow</code> as they are. One display per screen, three uppercase runs per page, maximum.</p></div></li>
            <li><div class="element-rule-list__body"><p class="type-card-title">Emphasis is weight, not slope.</p><p class="type-compact">The interface faces ship no italic; the only italic is Tiro's, and it belongs to IAST and Sanskrit terms like <span class="type-term">kaṇṭhastha</span>.</p></div></li>
            <li><div class="element-rule-list__body"><p class="type-card-title">Colour comes from the role layer.</p><p class="type-compact">Use foreground, muted, primary, and status roles instead of local pigment on type.</p></div></li>
            <li><div class="element-rule-list__body"><p class="type-card-title">Layout comes from shared tokens.</p><p class="type-compact">Use <code>src/layout.css</code> for margins, paddings, gaps, and container widths.</p></div></li>
            <li><div class="element-rule-list__body"><p class="type-card-title">Keep render() pure.</p><p class="type-compact">Build strings from <code>this</code> state only. Data loading belongs in <code>@OnEvent("connected", true)</code> or a service.</p></div></li>
            <li><div class="element-rule-list__body"><p class="type-card-title">Inline single-call helpers.</p><p class="type-compact">A 2–3 line private method called once adds a name to learn without earning reuse.</p></div></li>
          </ol>
          <p class="element-specimen-note">The shared roles live in <code>src/typography.css</code>, colours in <code>src/color.css</code>, layout in <code>src/layout.css</code>; the specimens on this page consume them directly, so what you see is the enforceable contract any component can use.</p>
      </section>
    `;
  }
}
