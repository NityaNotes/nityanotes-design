import { BaseElement, Component, HostListener } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

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
    return html`
      <section id="transient" class="layout-page layout-section interaction-section">
        <p class="type-eyebrow interaction-section__eyebrow">06 · Response</p>
        <h2 class="type-section interaction-section__heading">Transient feedback</h2>
        <p class="interaction-section__note">
          A toast passes on its own. Repeated work coalesces into one toast
          rather than stacking — the queue is the responsibility of the code
          that fires it, and the motion is the system's.
        </p>

        <div class="layout-row interaction-section__content">
          <app-button label="Fire a note" data-toast="Verse added to your window"></app-button>
          <app-button label="Fire success" data-toast="Moved to Recalled"></app-button>
          <app-button label="Fire error" tone="danger" data-toast="Could not reach the server" data-tone="failed"></app-button>
          <app-button label="Fire four at once" data-toast="Verse added to your window"></app-button>
        </div>

        <div class="interaction-toast" id="interaction-toast" data-shown="false" role="status" aria-live="polite">
          <span id="interaction-toast-text" class="type-compact"></span>
          <app-button label="×" accessible-label="Dismiss" tone="quiet" size="sm" shape="icon" class="interaction-toast__dismiss" id="interaction-toast-dismiss"></app-button>
        </div>
      </section>
    `;
  }
}
