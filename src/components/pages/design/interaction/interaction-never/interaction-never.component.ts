import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

/**
 * The six behaviours that do not belong on the product. A card per rule keeps
 * the list scannable and makes the exceptions a reviewable object.
 */
@Component({ selector: "interaction-never", shadow: false })
export class InteractionNeverComponent extends BaseElement {
  /** Creates the never section element. */
  constructor() {
    super();
  }

  /** Renders the six never rules in a responsive grid. */
  render() {
    return html`
      <section id="never" class="layout-page layout-section interaction-section">
        <p class="type-eyebrow interaction-section__eyebrow">Never</p>
        <h2 class="type-section interaction-section__heading">Six behaviours, none of them here</h2>

        <div class="layout-grid-auto interaction-section__content">
          <div class="interaction-tile"><p class="type-card-title">transition: all</p><p class="type-compact">Name the property. <code>all</code> animates layout you did not intend and costs a frame on every state change.</p></div>
          <div class="interaction-tile"><p class="type-card-title">Hover-only state</p><p class="type-compact">If hover is the only way to learn a state, a thumb never will.</p></div>
          <div class="interaction-tile"><p class="type-card-title">A sixth duration</p><p class="type-compact">A value between two tokens means the motion is wrong, not that the scale is short.</p></div>
          <div class="interaction-tile"><p class="type-card-title">A new verb for a composition</p><p class="type-compact">submit → pending → settled → toast is four verbs in sequence, not a fifth.</p></div>
          <div class="interaction-tile"><p class="type-card-title">Scroll-driven anything</p><p class="type-compact">No reveal, no parallax, no scrollspy, no progress rail.</p></div>
          <div class="interaction-tile"><p class="type-card-title">Autoplay</p><p class="type-compact">The lamp travels only after the reader presses Recite. Never on a loop, and never on the lock screen.</p></div>
        </div>
      </section>
    `;
  }
}
