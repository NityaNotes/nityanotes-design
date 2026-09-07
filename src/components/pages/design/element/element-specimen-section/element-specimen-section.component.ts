import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

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
    return html`
      <section class="layout-page layout-section design-section layout-grid-2" aria-label="Element specimens">
        <article class="element-card">
          <span class="element-badge">Saved note</span>
          <h2 class="type-card-title">A card groups one idea</h2>
          <p>Surfaces, corners, borders, and shadows come from the shared grammar.</p>
          <div class="element-callout">Use callouts when a detail needs more weight than body copy.</div>
          <p class="element-specimen-link">Buttons and hover behaviour follow the <a href="/design/element#element-boundaries">shared contracts</a>.</p>
        </article>
        <form class="element-card layout-stack layout-stack-sm" aria-label="Note composition specimen">
          <div class="element-field">
            <label class="type-label" for="note-title">Note title</label>
            <input class="element-input" id="note-title" placeholder="A thought worth keeping" />
          </div>
          <app-button label="Save note" tone="primary" interaction="lift" button-type="submit" disabled="true" title="Demonstration only — the specimen does not submit"></app-button>
          <p class="element-specimen-note">Demonstration only; the specimen is disabled and does not submit.</p>
        </form>
      </section>
    `;
  }
}
