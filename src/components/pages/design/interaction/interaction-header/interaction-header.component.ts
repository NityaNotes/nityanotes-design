import { BaseElement, BindEvent, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

/**
 * Introduces the interaction grammar and links the reference to the other
 * design routes. Also owns the reduced-motion preview toggle, which scopes the
 * demo surface to the same rules the media query applies system-wide.
 */
@Component({ selector: "interaction-header", shadow: false })
export class InteractionHeaderComponent extends BaseElement {
  /** Creates the header element before Dota renders its static reference content. */
  constructor() {
    super();
  }

  private reducedMotionPreview = false;

  /** Toggles the local reduced-motion preview on the whole interaction page. */
  @BindEvent({ event: "click", id: "#interaction-rm-toggle" })
  toggleReducedMotion(event: MouseEvent) {
    const page = (event.currentTarget as Element | null)?.closest(".interaction-page")
      ?? document.querySelector(".interaction-page");
    const button = event.target as HTMLElement | null;
    this.reducedMotionPreview = !this.reducedMotionPreview;
    page?.classList.toggle("rm-preview", this.reducedMotionPreview);
    if (button) {
      button.textContent = this.reducedMotionPreview ? "Restore motion" : "Preview reduced motion";
    }
    const state = this.querySelector("#interaction-rm-state");
    if (state) {
      state.textContent = this.reducedMotionPreview ? "forced: reduce" : "system setting";
    }
  }

  /** Renders the route heading, the reduced-motion preview, and the grammar nav. */
  render() {
    return html`
      <header class="layout-page layout-section-hero interaction-hero">
        <p class="type-eyebrow interaction-hero__eyebrow">Nitya Notes · Design grammar / 04</p>
        <h1 class="type-display">Interaction</h1>
        <p class="type-lede interaction-hero__lede">Seven families. Ten verbs. One curve, one ring. Every interactive behaviour belongs to one family and moves with one verb at one of five durations — and nothing on this product animates because the page moved.</p>
        <div class="layout-row" style="margin-block-start: var(--layout-space-5)">
          <app-button label="Preview reduced motion" id="interaction-rm-toggle"></app-button>
          <span class="interaction-mono" id="interaction-rm-state">system setting</span>
        </div>
        <div class="interaction-hero__metrics">
          <div><p class="type-metric">7</p><p class="type-compact">families</p></div>
          <div><p class="type-metric">10</p><p class="type-compact">verbs</p></div>
          <div><p class="type-metric">5</p><p class="type-compact">durations</p></div>
          <div><p class="type-metric">1</p><p class="type-compact">curve, one ring</p></div>
        </div>
        <app-button label="Continue to English typography" tone="primary" size="md" href="/design/english" class="interaction-hero__button"></app-button>
        <design-page-navigation active-route="/design/interaction"></design-page-navigation>
      </header>
    `;
  }
}
