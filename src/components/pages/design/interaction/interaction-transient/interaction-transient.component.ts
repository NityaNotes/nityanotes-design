import { BaseElement, Component, HostListener } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designInteractionContent } from "@app/data/design-interaction-content.ts";

/** How long a toast holds before natural expiry. */
const TOAST_LIFE_MS = 4000;

/**
 * Transient feedback. A toast passes — it enters from the bottom edge, holds,
 * and leaves on the exit curve. Repeated work coalesces into one toast rather
 * than stacking; natural expiry and hand dismissal are different exits and
 * both are allowed.
 */
@Component({ selector: "interaction-transient", shadow: false })
export class InteractionTransientComponent extends BaseElement {
  /** Creates the transient section element. */
  constructor() {
    super();
  }

  private toastTimer: ReturnType<typeof setTimeout> | null = null;

  /**
   * Fires a single toast for any `data-toast` trigger inside the section.
   * A repeat request collapses into the same toast instead of queueing.
   */
  @HostListener({ event: "click" })
  handleToast(event: MouseEvent) {
    const trigger = (event.target as HTMLElement | null)?.closest<HTMLElement>("app-button");
    if (!trigger || !this.contains(trigger)) return;

    if (trigger.id === "interaction-toast-dismiss") {
      this.hideToast();
      return;
    }

    const message = trigger.dataset["toast"];
    if (!message) return;
    const toast = this.querySelector<HTMLElement>("#interaction-toast");
    const text = this.querySelector<HTMLElement>("#interaction-toast-text");
    if (!toast || !text) return;

    if (this.toastTimer) clearTimeout(this.toastTimer);
    text.textContent = message;
    toast.dataset["tone"] = trigger.dataset["tone"] ?? "note";
    toast.dataset["shown"] = "true";
    this.toastTimer = setTimeout(() => this.hideToast(), TOAST_LIFE_MS);
  }

  /** Dismisses the current toast early. */
  private hideToast() {
    const toast = this.querySelector<HTMLElement>("#interaction-toast");
    if (toast) toast.dataset["shown"] = "false";
    if (this.toastTimer) {
      clearTimeout(this.toastTimer);
      this.toastTimer = null;
    }
  }

  /** Renders four triggers and the shared live-region toast they all coalesce into. */
  render() {
    const copy = designInteractionContent.copy["interaction/interaction-transient/interaction-transient"];
    return html`
      <section id="transient" class="layout-page layout-section interaction-section">
        <p class="type-eyebrow interaction-section__eyebrow">${copy[7]}</p>
        <h2 class="type-section interaction-section__heading">${copy[8]}</h2>
        <p class="interaction-section__note">
          ${copy[9]}
        </p>

        <div class="layout-row interaction-section__content">
          <app-button label="${copy[0]}" data-toast="Verse added to your window"></app-button>
          <app-button label="${copy[1]}" data-toast="Moved to Recalled"></app-button>
          <app-button label="${copy[2]}" tone="danger" data-toast="Could not reach the server" data-tone="failed"></app-button>
          <app-button label="${copy[3]}" data-toast="Verse added to your window"></app-button>
        </div>

        <div class="interaction-toast" id="interaction-toast" data-shown="false" role="status" aria-live="polite">
          <span id="interaction-toast-text" class="type-compact"></span>
          <app-button label="${copy[4]}" accessible-label="${copy[5]}" tone="quiet" size="sm" shape="icon" class="interaction-toast__dismiss" id="interaction-toast-dismiss"></app-button>
        </div>
      </section>
    `;
  }
}
