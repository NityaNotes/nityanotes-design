import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

/**
 * Demonstrates that language, not a fallback chain, decides the family.
 *
 * The specimen shows an English word inside a Hindi sentence rendered in the
 * Devanagari family, and explains why tracking breaks the shirorekha.
 *
 * Selector: `hindi-family-section`.
 */
@Component({ selector: "hindi-family-section", shadow: false })
export class HindiFamilySectionComponent extends BaseElement {
  /** Creates the framework element before Dota renders the static family specimen. */
  constructor() {
    super();
  }

  /** Renders the family rule without reading or changing application state. */
  render() {
    return html`
      <section class="layout-page layout-section hindi-section design-section" id="hindi-family" aria-label="Language decides the family" lang="hi">
          <p class="type-eyebrow design-specimen-eyebrow">02 · भाषा परिवार तय करती है</p>
          <h2 class="type-subsection">हिंदी स्क्रीन ऊपर से नीचे तक देवनागरी-परिवार में चलती है।</h2>
          <p class="type-lede">परिवार फ़ॉलबैक शृंखला से नहीं, भाषा के अनुसार बदलता है — एक पंक्ति में दो चेहरे कभी न मिलें। हिंदी वाक्य के अंदर का अंग्रेज़ी शब्द भी उसी परिवार में रहता है।</p>
          <div class="design-specimen">
            <p class="type-card-title">अभ्यास · <span lang="en">Daily</span> सत्र · 10 मिनट</p>
            <p class="type-compact">हिंदी वाक्य में <span lang="en">AM</span> और अंक भी देवनागरी-परिवार से मेल खाते हैं।</p>
          </div>
          <p>देवनागरी किसी भी आकार पर शब्दांतरण या अक्षर-अंतर स्वीकार नहीं करती — सकारात्मक ट्रैकिंग अक्षरों के बीच की शिरोरेखा तोड़ देती है। इसलिए ऊपरी-केस संकेत हिंदी में आकार और रंग से मिलते हैं।</p>
      </section>
    `;
  }
}
