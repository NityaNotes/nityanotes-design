import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

/**
 * Shows the product questions with the shared Dota UI accordion pattern.
 */
@Component({ selector: "interaction-disclosure", shadow: false })
export class InteractionDisclosureComponent extends BaseElement {
  /** Creates the disclosure section element. */
  constructor() {
    super();
  }

  /** Renders the product questions through the app-wide accordion component. */
  render() {
    return html`
      <section id="disclosure" class="layout-page layout-section interaction-section">
        <p class="type-eyebrow interaction-section__eyebrow">04 · Commitment</p>
        <h2 class="type-section interaction-section__heading">Disclosure</h2>
        <p class="interaction-section__note">
          A panel opens to a real, measured ceiling — never to a guessed
          max-height. Closed answers stay in the DOM, so they are indexed,
          findable and visible to anyone who searches the page.
        </p>

        <div class="interaction-section__content" id="disclosure-list">
          <dota-accordion
            classname="faq-accordion"
            header="Does the verse animate on the lock screen?"
            description="No. The lock-screen widget has no animation budget and no way to start one. The pāṭha lamp runs in the verse screen, in StandBy and in the Android hub — three surfaces where the reader has already chosen to look."
          ></dota-accordion>
          <dota-accordion
            classname="faq-accordion"
            header="Why is there no scroll animation anywhere?"
            description="Because a memorisation tool that rewards scrolling has misunderstood itself. Reveals, parallax and progress rails all pay attention to the wrong thing. If a future screen needs one it is a decision to argue for, not a gap to fill."
          ></dota-accordion>
          <dota-accordion
            classname="faq-accordion"
            header="What happens under reduced motion?"
            description="Movement goes; meaning stays. The spinner becomes a static half-ring, the outcome glyph is drawn immediately, every panel opens at once to the same height, and the pāṭha control becomes one word per press."
          ></dota-accordion>
        </div>
      </section>
    `;
  }
}
