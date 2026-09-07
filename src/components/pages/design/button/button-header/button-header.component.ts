import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

/**
 * Introduces the button grammar and links the reference to the other design routes.
 * The page shell owns route composition; this component owns the button page's opening story.
 */
@Component({ selector: "button-header", shadow: false })
export class ButtonHeaderComponent extends BaseElement {
  /** Creates the header element before Dota renders its static reference content. */
  constructor() { super(); }

  /** Renders the route heading and the design grammar navigation. */
  render() {
    return html`
      <header class="layout-page layout-section-hero button-header">
        <div class="layout-grid-2 button-header__grid">
          <div>
            <p class="type-eyebrow button-header__eyebrow">Design grammar / 03</p>
            <h1 class="type-display">The button system</h1>
            <p class="type-lede button-header__lede">Every control on every surface, and the four beats each one answers with: intent, commit, acknowledgement, result.</p>
            <app-button label="Continue to directory" tone="primary" size="md" href="/design" class="button-header__button"></app-button>
            <design-page-navigation active-route="/design/button"></design-page-navigation>
          </div>
          <article class="button-header__demo button-card button-card--contrast">
            <p class="type-eyebrow">Primary work</p>
            <h2 class="type-subsection">The next action is obvious.</h2>
            <p class="type-compact">The label carries the verb. The surface carries the priority. The result gets its own visible state.</p>
            <div class="layout-row button-header__actions">
              <app-button label="Create a note"></app-button>
              <app-button label="Read the rules" tone="link"></app-button>
            </div>
          </article>
        </div>
      </header>
    `;
  }
}
