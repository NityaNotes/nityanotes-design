import { BaseElement, Component, HostListener } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

type ActionState = "idle" | "busy" | "done" | "error";

/** Hold windows for a settled outcome before the control returns to idle. */
const SETTLE_DONE_MS = 2200;
const SETTLE_FAILED_MS = 2600;
const ACTION_TIMEOUT_MS = 12000;
const WORK_SIMULATION_MS = 1100;

/**
 * Action lifecycle. Four states on one element — idle, pending, settled, and
 * back to idle. The control owns the machine; a click supplies a handler that
 * resolves or rejects, repeat triggers are ignored while pending, and a
 * 12-second timeout turns a hung handler into a failure rather than a new
 * state to design for.
 */
@Component({ selector: "interaction-action", shadow: false })
export class InteractionActionComponent extends BaseElement {
  /** Creates the action section element. */
  constructor() {
    super();
  }

  /**
   * Runs the click-to-settled machine for both demo controls. Pending locks
   * the control; the outcome glyph draws once and holds long enough to be read,
   * then the control returns to idle so it can run again.
   */
  @HostListener({ event: "click" })
  handleAction(event: MouseEvent) {
    const button = (event.target as HTMLElement | null)?.closest<HTMLElement>("app-button.interaction-action");
    if (!button || !this.contains(button)) return;
    if (button.dataset["state"] !== "idle") return;

    button.dataset["state"] = "busy";
    button.setAttribute("state", "busy");
    button.setAttribute("aria-busy", "true");

    const resolves = button.dataset["resolve"] === "true";
    const settle = (state: ActionState, label: string, hold: number) => {
      button.dataset["state"] = state;
      button.setAttribute("state", state);
      button.setAttribute("label", label);
      button.removeAttribute("aria-busy");
      setTimeout(() => {
        if (!button.isConnected) return;
        button.dataset["state"] = "idle";
        button.setAttribute("state", "idle");
        button.setAttribute("label", resolves ? "Mark as recalled" : "Sync this device");
      }, hold);
    };

    let timedOut = false;
    const guard = setTimeout(() => {
      timedOut = true;
      settle("error", "Not saved", SETTLE_FAILED_MS);
    }, ACTION_TIMEOUT_MS);

    setTimeout(() => {
      if (timedOut) return;
      clearTimeout(guard);
      settle(resolves ? "done" : "error", resolves ? "Recalled" : "Try again", resolves ? SETTLE_DONE_MS : SETTLE_FAILED_MS);
    }, WORK_SIMULATION_MS);
  }

  /** Renders resolved and rejected work side by side so both holds are visible. */
  render() {
    return html`
      <section id="action" class="layout-page layout-section interaction-section">
        <p class="type-eyebrow interaction-section__eyebrow">05 · Response</p>
        <h2 class="type-section interaction-section__heading">Action lifecycle</h2>
        <p class="interaction-section__note">
          Four states on one element, driven by one attribute. The control owns
          the machine — feature code resolves or rejects a promise and nothing
          else. All four faces are stacked in one grid cell, so the button does
          not resize as it moves between them.
        </p>

        <div class="layout-grid-2 interaction-section__content">
          <div class="interaction-card">
            <p class="type-card-title">Resolved work</p>
            <p class="type-compact">Pending locks the control and ignores repeat triggers. Success holds 2.2s, then returns.</p>
            <div class="interaction-stage">
              <app-button label="Mark as recalled" tone="primary" size="lg" class="interaction-action" data-state="idle" data-resolve="true"></app-button>
            </div>
          </div>

          <div class="interaction-card">
            <p class="type-card-title">Rejected work</p>
            <p class="type-compact">Failure stays visible for 2.6s — longer, because it has to be read — then the same action is ready to retry.</p>
            <div class="interaction-stage">
              <app-button label="Sync this device" size="lg" class="interaction-action" data-state="idle" data-resolve="false"></app-button>
            </div>
          </div>
        </div>

        <p class="type-compact interaction-section__note">
          Every action carries a 12-second timeout. A control that never settles
          is a bug in the handler, not a state to design for.
        </p>
      </section>
    `;
  }
}
