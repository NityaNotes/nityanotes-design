import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

/**
 * Demonstrates the fixed verse presentation sequence on the English route.
 *
 * The specimen renders verse, IAST, gloss, and source in that order so the
 * citation closes the block instead of opening it.
 *
 * Selector: `english-sequence-section`.
 */
@Component({ selector: "english-sequence-section", shadow: false })
export class EnglishSequenceSectionComponent extends BaseElement {
  /** Creates the framework element before Dota renders the static verse specimen. */
  constructor() {
    super();
  }

  /** Renders the verse sequence specimen without reading or changing application state. */
  render() {
    return html`
      <section class="layout-page layout-section english-section design-section" id="english-sequence" aria-label="Verse presentation sequence">
          <p class="type-eyebrow design-specimen-eyebrow">02 · A verse is presented</p>
          <h2 class="type-subsection">Verse → IAST → gloss → source, always in that order.</h2>
          <p class="type-lede">The sequence is the contract. The citation is how you find a verse again, not how you meet it, so the source line always closes the block.</p>
          <div class="design-specimen">
            <p class="type-verse-display">यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।<br />अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥</p>
            <p class="type-iast">yadā yadā hi dharmasya glānir bhavati bhārata</p>
            <p class="type-gloss">Whenever dharma declines and adharma rises, O Bharata, then I send forth Myself.</p>
            <p class="type-source">Bhagavad Gītā 4.7</p>
          </div>
          <p>One verse-display per page, and it is the specimen. Two large ślokas in one viewport read as a wallpaper generator, not a text — emphasis in a verse is size and colour, never synthetic weight.</p>
      </section>
    `;
  }
}
