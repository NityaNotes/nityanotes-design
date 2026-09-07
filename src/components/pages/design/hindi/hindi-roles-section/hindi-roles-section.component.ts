import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

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
    return html`
      <section class="layout-page layout-section hindi-section design-section" id="hindi-roles" aria-label="Hindi type roles rendered live" lang="hi">
          <p class="type-eyebrow design-specimen-eyebrow">04 · भूमिकाएँ, जीवित रूप में</p>
          <h2 class="type-subsection">वही सत्रह भूमिकाएँ, देवनागरी समायोजन के साथ।</h2>
          <p class="type-lede">दूसरी लिपि दूसरी सीढ़ी नहीं है। वही भूमिका-कक्षाएँ चलती हैं; देवनागरी को थोड़ा अधिक आकार और खुली पंक्ति-ऊँचाई मिलती है ताकि मात्राएँ टकराएँ नहीं।</p>
          <dl class="design-specimen design-specimen-scale">
            <div><dt class="type-micro">.type-lede</dt><dd class="type-lede">लीड विवरण से पहले पाठक को संदर्भ देता है।</dd></div>
            <div><dt class="type-micro">.type-card-title</dt><dd class="type-card-title">कार्ड उत्तर यहीं से शुरू होता है।</dd></div>
            <div><dt class="type-micro">.type-metric</dt><dd><span class="type-metric" data-count>21</span> <span class="type-compact">दिन की लौ — अंक सारणीबद्ध रहते हैं, बदलते समय नहीं कूदते।</span></dd></div>
            <div><dt class="type-micro">.type-label</dt><dd><span class="type-label">श्लोक सूची</span></dd></div>
          </dl>
      </section>
    `;
  }
}
