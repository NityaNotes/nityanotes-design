import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

/**
 * Shows the three Hindi registers: शास्त्र, इंटरफ़ेस, and डेटा.
 *
 * The specimen names which family carries which run of Devanagari text and why
 * the interface stays a sans face in both languages.
 *
 * Selector: `hindi-programme-section`.
 */
@Component({ selector: "hindi-programme-section", shadow: false })
export class HindiProgrammeSectionComponent extends BaseElement {
  /** Creates the framework element before Dota renders the static register badges. */
  constructor() {
    super();
  }

  /** Renders the register programme without reading or changing application state. */
  render() {
    return html`
      <section class="layout-page layout-section hindi-section design-section" id="hindi-programme" aria-label="The Hindi programme" lang="hi">
          <p class="type-eyebrow design-specimen-eyebrow">01 · कार्यक्रम</p>
          <h2 class="type-subsection">तीन रजिस्टर: शास्त्र, इंटरफ़ेस, डेटा।</h2>
          <p class="type-lede">हर श्लोक और हर अनुवाद-पंक्ति Tiro Devanagari Sanskrit में है। पूरा हिंदी इंटरफ़ेस Noto Sans Devanagari में चलता है, और मोनोस्पेस केवल श्लोक-संख्या और कोड के लिए है।</p>
          <div class="layout-row">
            <span class="element-badge">शास्त्र · Tiro</span>
            <span class="element-badge">इंटरफ़ेस · Noto Sans Devanagari</span>
            <span class="element-badge">डेटा · मोनोस्पेस</span>
          </div>
          <p>एक ही सेरिफ़ है और वह श्लोक है। दूसरा सेरिफ़ हेडिंग के साथ शास्त्र से बहस कर देता — इसलिए इंटरफ़ेस दोनों भाषाओं में सैन्स रहता है।</p>
      </section>
    `;
  }
}
