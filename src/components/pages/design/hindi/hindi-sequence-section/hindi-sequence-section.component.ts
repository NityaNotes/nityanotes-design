import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

/**
 * Demonstrates the fixed verse presentation sequence in the Hindi interface.
 *
 * The specimen renders श्लोक, अनुलिपि (IAST), भावार्थ, and स्रोत in that order,
 * closing with the citation exactly as the English route does.
 *
 * Selector: `hindi-sequence-section`.
 */
@Component({ selector: "hindi-sequence-section", shadow: false })
export class HindiSequenceSectionComponent extends BaseElement {
  /** Creates the framework element before Dota renders the static verse specimen. */
  constructor() {
    super();
  }

  /** Renders the verse sequence specimen without reading or changing application state. */
  render() {
    return html`
      <section class="layout-page layout-section hindi-section design-section" id="hindi-sequence" aria-label="Verse presentation sequence" lang="hi">
          <p class="type-eyebrow design-specimen-eyebrow">03 · श्लोक प्रस्तुत होता है</p>
          <h2 class="type-subsection">श्लोक → अनुलिपि → भावार्थ → स्रोत, हमेशा इसी क्रम में।</h2>
          <p class="type-lede">श्लोक का क्रम नियम है। स्रोत पंक्ति अंत में आती है — उद्धरण श्लोक से दोबारा मिलने का रास्ता है, पहचानने का नहीं।</p>
          <div class="design-specimen">
            <p class="type-verse-display" lang="sa">कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।<br />मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥</p>
            <p class="type-iast" lang="sa-Latn">karmaṇy evādhikāras te mā phaleṣu kadācana</p>
            <p class="type-gloss">कर्म करने में ही तुम्हारा अधिकार है, उसके फलों में कभी नहीं।</p>
            <p class="type-source">भगवद्गीता २.४७</p>
          </div>
          <p>श्लोक पर कभी कृत्रिम बोल्ड नहीं — Tiro के पास केवल Regular और Italic है। श्लोक में बल आकार या रंग से आता है, वज़न से नहीं।</p>
      </section>
    `;
  }
}
