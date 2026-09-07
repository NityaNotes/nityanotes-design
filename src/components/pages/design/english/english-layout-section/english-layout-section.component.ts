import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

/**
 * Demonstrates the shared layout system as the typography page consumes it.
 *
 * The specimens show the page container with a grid, then the reading and
 * content measures, each framed so its width is visible against its neighbours.
 *
 * Selector: `english-layout-section`.
 */
@Component({ selector: "english-layout-section", shadow: false })
export class EnglishLayoutSectionComponent extends BaseElement {
  /** Creates the framework element before Dota renders the static layout specimens. */
  constructor() {
    super();
  }

  /** Renders the layout specimens without reading or changing application state. */
  render() {
    return html`
      <section class="layout-page layout-section english-section design-section" id="english-layout" aria-label="Layout system in practice">
          <p class="type-eyebrow design-specimen-eyebrow">05 · Layout system in practice</p>
          <h2 class="type-subsection">Containers, rhythm, and reading measures from <code>src/layout.css</code>.</h2>
          <p class="type-lede">Every section owns its container. Spacing uses <code>--layout-space-*</code> tokens. Grids and stacks compose the page without nested containers.</p>
          <div class="design-specimen english-layout-section__specimens">
            <div class="english-layout-section__frame">
              <p class="type-eyebrow">Container: <code>.layout-page</code></p>
              <p class="type-prose">Max width <code>80rem</code> — for three-plus columns and site chrome. This section demonstrates the page container with section rhythm.</p>
              <div class="layout-grid-2">
                <div class="english-layout-section__cell">
                  <p class="type-card-title">Grid child A</p>
                  <p class="type-compact english-layout-section__cell-note">Min-inline-size: 0 prevents overflow</p>
                </div>
                <div class="english-layout-section__cell">
                  <p class="type-card-title">Grid child B</p>
                  <p class="type-compact english-layout-section__cell-note">Equal width at desktop, stacked at mobile</p>
                </div>
              </div>
            </div>
            <div class="english-layout-section__measures">
              <p class="type-eyebrow">Reading containers</p>
              <div class="english-layout-section__frame english-layout-section__frame--reading">
                <p class="type-prose"><strong>.layout-reading</strong> — 45rem measure for long-form prose. This paragraph demonstrates the reading measure with 1.75 line height. The eye travels a comfortable distance without losing the next line.</p>
              </div>
              <div class="english-layout-section__frame english-layout-section__frame--content">
                <p class="type-prose"><strong>.layout-content</strong> — 60rem for one or two UI columns. Wider than reading measure to accommodate side-by-side cards or form + preview layouts.</p>
              </div>
            </div>
          </div>
          <p class="type-compact">Breakpoints at 520px, 700px, 1100px only. Container queries for reusable components. No raw margins, paddings, or z-indices in component CSS.</p>
      </section>
    `;
  }
}
