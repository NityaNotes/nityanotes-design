import { BaseElement, Component, HostListener } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designInteractionContent } from "@app/data/design-interaction-content.ts";

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
    const copy = designInteractionContent.copy["interaction/interaction-action/interaction-action"];
    return html`
      <section id="action" class="layout-page layout-section interaction-section">
        <p class="type-eyebrow interaction-section__eyebrow">${copy[2]}</p>
        <h2 class="type-section interaction-section__heading">${copy[3]}</h2>
        <p class="interaction-section__note">${copy[4]}</p>

        <div class="layout-grid-2 interaction-section__content">
          <div class="interaction-card">
            <p class="type-card-title">${copy[5]}</p>
            <p class="type-compact">${copy[6]}</p>
            <div class="interaction-stage">
              <app-button label="${copy[0]}" tone="primary" size="lg" class="interaction-action" data-state="idle" data-resolve="true"></app-button>
            </div>
          </div>

          <div class="interaction-card">
            <p class="type-card-title">${copy[7]}</p>
            <p class="type-compact">${copy[8]}</p>
            <div class="interaction-stage">
              <app-button label="${copy[1]}" size="lg" class="interaction-action" data-state="idle" data-resolve="false"></app-button>
            </div>
          </div>
        </div>

        <p class="type-compact interaction-section__note">${copy[9]}</p>
      </section>
    `;
  }
}
