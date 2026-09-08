import { BaseElement, BindEvent, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designInteractionContent } from "@app/data/design-interaction-content.ts";

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
    const copy = designInteractionContent.copy["interaction/interaction-header/interaction-header"];
    return html`
      <header class="layout-page layout-section-hero interaction-hero">
        <p class="type-eyebrow interaction-hero__eyebrow">${copy[2]}</p>
        <h1 class="type-display">${copy[3]}</h1>
        <p class="type-lede interaction-hero__lede">${copy[4]}</p>
        <div class="layout-row" style="margin-block-start: var(--layout-space-5)">
          <app-button label="${copy[0]}" id="interaction-rm-toggle"></app-button>
          <span class="interaction-mono" id="interaction-rm-state">${copy[5]}</span>
        </div>
        <div class="interaction-hero__metrics">
          <div><p class="type-metric">${copy[6]}</p><p class="type-compact">${copy[7]}</p></div>
          <div><p class="type-metric">${copy[8]}</p><p class="type-compact">${copy[9]}</p></div>
          <div><p class="type-metric">${copy[10]}</p><p class="type-compact">${copy[11]}</p></div>
          <div><p class="type-metric">${copy[12]}</p><p class="type-compact">${copy[13]}</p></div>
        </div>
        <app-button label="${copy[1]}" tone="primary" size="md" href="/design/english" class="interaction-hero__button"></app-button>
        <design-page-navigation active-route="/design/interaction"></design-page-navigation>
      </header>
    `;
  }
}
