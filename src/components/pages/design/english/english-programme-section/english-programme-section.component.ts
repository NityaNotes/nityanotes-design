import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

/**
 * Shows the three English registers: scripture, interface, and data.
 *
 * The specimen names which family carries which run of text and why a second
 * serif would put the apparatus in argument with the scripture.
 *
 * Selector: `english-programme-section`.
 */
@Component({ selector: "english-programme-section", shadow: false })
export class EnglishProgrammeSectionComponent extends BaseElement {
  /** Creates the framework element before Dota renders the static register badges. */
  constructor() {
    super();
  }

  /** Renders the register programme without reading or changing application state. */
  render() {
    return html`
      <section class="layout-page layout-section english-section design-section" id="english-programme" aria-label="The English programme">
          <p class="type-eyebrow design-specimen-eyebrow">01 · The programme</p>
          <h2 class="type-subsection">Three registers: scripture, interface, data.</h2>
          <p class="type-lede">Tiro Devanagari Sanskrit carries every śloka and every IAST line. DM Sans carries the whole English apparatus — display, sections, body, controls, labels. A monospace face carries verse IDs, timeline slots and code, and nothing else.</p>
          <div class="layout-row">
            <span class="element-badge">Tiro · the verse</span>
            <span class="element-badge">DM Sans · the apparatus</span>
            <span class="element-badge">Mono · the data</span>
          </div>
          <p>The load-bearing rule is one serif, and it is the verse. A second serif — an editorial display face for headings — would put the apparatus in argument with the scripture, which is the one thing this product exists to present.</p>
      </section>
    `;
  }
}
