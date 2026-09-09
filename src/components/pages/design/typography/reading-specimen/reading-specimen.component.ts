import { BaseElement, Component, Property, String } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designTypographyContent } from "@app/data/design-typography-content.ts";

/**
 * Demonstrates reading and reflection with the same shared roles in both languages.
 * A native disclosure exposes the writing form, while the shared Dota accordion
 * reveals the previous entry without inventing persistence or application state.
 * Used by the typography and Hindi reference sections.
 */
@Component({ selector: "reading-specimen", shadow: false })
export class ReadingSpecimenComponent extends BaseElement {
  /** Selects English or Hindi interface copy; scripture retains its Sanskrit role. */
  @Property({ name: "language", type: String, default: "en" })
  language = "en";

  constructor() {
    super();
  }

  /** Composes real writing controls with an explicit preview-only persistence boundary. */
  render() {
    const language = this.language === "hi" ? "hi" : "en";
    const copy = designTypographyContent.reading[language];
    const { order } = designTypographyContent;
    return html`
      <article class="reading-specimen element-card layout-reading-stack" lang="${language}" aria-label="${copy.title}">
        <h3 class="type-app-title">${copy.title}</h3>
        <div class="layout-stack layout-stack-lg">
          <p class="type-verse-display" lang="sa">${order.verse[0]}<br />${order.verse[1]}</p>
          <p class="type-iast" lang="sa-Latn">${order.transliteration}</p>
          <p class="type-gloss">${copy.gloss}</p>
          <p class="type-source">${copy.source}</p>
        </div>
        <details class="reading-specimen__reflection">
          <summary class="button button-primary interaction-button-press">${copy.reflect}</summary>
          <div class="input-field reading-specimen__field">
            <label class="type-reflection-prompt" for="reflection-${language}">${copy.prompt}</label>
            <textarea class="input input-journal" id="reflection-${language}" rows="6" placeholder="${copy.placeholder}" aria-describedby="reflection-help-${language}"></textarea>
          </div>
        </details>
        <p class="type-compact input-help" id="reflection-help-${language}">${copy.help}</p>
        <dota-accordion
          classname="reading-specimen__previous"
          header="${copy.previous}"
          description="${copy.entryTitle} — ${copy.entry}"
        ></dota-accordion>
      </article>
    `;
  }
}
