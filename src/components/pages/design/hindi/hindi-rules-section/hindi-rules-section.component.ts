import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

/**
 * States the hard boundaries of the Hindi typography system.
 *
 * The list is the Devanagari contract: no tracking or uppercase transforms at
 * any size, no synthetic bold or slope on a verse, the interface family never
 * writes a verse, and no parallel `.type-*-hi` ladder exists.
 *
 * Selector: `hindi-rules-section`.
 */
@Component({ selector: "hindi-rules-section", shadow: false })
export class HindiRulesSectionComponent extends BaseElement {
  /** Creates the framework element before Dota renders the static rule list. */
  constructor() {
    super();
  }

  /** Renders the hard rules without reading or changing application state. */
  render() {
    return html`
      <section class="layout-page layout-section-end hindi-section design-section" id="hindi-rules" aria-label="Hard rules" lang="hi">
          <p class="type-eyebrow design-specimen-eyebrow">05 · कठोर नियम</p>
          <h2 class="type-subsection">सीमा जहाँ प्रणाली रुकती है।</h2>
          <ol class="element-rule-list">
            <li><div class="element-rule-list__body"><p class="type-card-title">देवनागरी पर कभी अक्षर-अंतर या बड़े-अक्षर रूपांतरण नहीं।</p><p class="type-compact">किसी भी आकार, किसी भी भूमिका में।</p></div></li>
            <li><div class="element-rule-list__body"><p class="type-card-title">श्लोक पर कभी कृत्रिम बोल्ड या तिरछापन नहीं।</p><p class="type-compact">श्लोक केवल <code>.type-verse-*</code> भूमिका से सजता है।</p></div></li>
            <li><div class="element-rule-list__body"><p class="type-card-title">इंटरफ़ेस परिवार से श्लोक न लिखें।</p><p class="type-compact">अगर श्लोक इंटरफ़ेस वर्णमाला में दिखे, तो <code>lang</code> विशेषता जाँचें।</p></div></li>
            <li><div class="element-rule-list__body"><p class="type-card-title">समानांतर <code>.type-*-hi</code> सीढ़ी कभी न बनाएँ।</p><p class="type-compact">भाषा ही परिवार तय करती है; कोई दूसरी स्टाइलशीट नहीं है।</p></div></li>
          </ol>
      </section>
    `;
  }
}
