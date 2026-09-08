import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designElementPageContent } from "@app/data/design-element-page-content.ts";

/**
 * Shows the live element specimens on `/design/element`.
 *
 * A composed card demonstrates badge, callout, and cross-link behaviour while the
 * form column shows label, input, and button composition. The submit control is
 * disabled because the form is a documentation specimen with nowhere to send data;
 * making its state explicit prevents readers from clicking a dead action.
 *
 * Selector: `element-specimen-section`.
 */
@Component({ selector: "element-specimen-section", shadow: false })
export class ElementSpecimenSectionComponent extends BaseElement {
  /** Creates the framework element before Dota renders its static specimens. */
  constructor() {
    super();
  }

  /** Renders the card and form specimens without performing side effects. */
  render() {
    const copy = designElementPageContent.copy["element/element-specimen-section/element-specimen-section"];
    return html`
      <section class="layout-page layout-section design-section layout-grid-2" aria-label="${copy[0]}">
        <article class="element-card">
          <span class="element-badge">${copy[5]}</span>
          <h2 class="type-card-title">${copy[6]}</h2>
          <p>${copy[7]}</p>
          <div class="element-callout">${copy[8]}</div>
          <p class="element-specimen-link">${copy[9]}<a href="/design/element#element-boundaries">${copy[10]}</a>${copy[11]}</p>
        </article>
        <form class="element-card layout-stack layout-stack-sm" aria-label="${copy[1]}">
          <div class="element-field">
            <label class="type-label" for="note-title">${copy[12]}</label>
            <input class="element-input" id="note-title" placeholder="${copy[2]}" />
          </div>
          <app-button label="${copy[3]}" tone="primary" interaction="lift" button-type="submit" disabled="true" title="${copy[4]}"></app-button>
          <p class="element-specimen-note">${copy[13]}</p>
        </form>
      </section>
    `;
  }
}
