import { BaseElement, Component, HostListener } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designInteractionContent } from "@app/data/design-interaction-content.ts";

/**
 * Interruption. The native `dialog` element owns the top layer, the focus
 * trap, the inert background, Escape, and focus return — there is no parallel
 * overlay implementation. On a phone it behaves as a bottom sheet; from 700 up
 * it is centred. Same element, one query.
 */
@Component({ selector: "interaction-interrupt", shadow: false })
export class InteractionInterruptComponent extends BaseElement {
  /** Creates the interrupt section element. */
  constructor() {
    super();
  }

  /**
   * Opens, resolves, and closes the destructive-confirmation dialog.
   * Focus starts on Cancel; confirm carries the danger tone.
   */
  @HostListener({ event: "click" })
  handleDialog(event: MouseEvent) {
    const control = (event.target as HTMLElement | null)?.closest<HTMLElement>("[data-dialog]");
    if (!control || !this.contains(control)) return;
    const dialog = this.querySelector<HTMLDialogElement>("#interaction-dialog");
    if (!dialog) return;

    const intent = control.dataset["dialog"];
    if (intent === "open") {
      dialog.showModal();
    } else if (intent === "cancel" || intent === "confirm") {
      dialog.close(intent);
    }
  }

  /** Renders the trigger and the single dialog it opens. */
  render() {
    const copy = designInteractionContent.copy["interaction/interaction-interrupt/interaction-interrupt"];
    return html`
      <section id="interrupt" class="layout-page layout-section interaction-section">
        <p class="type-eyebrow interaction-section__eyebrow">${copy[4]}</p>
        <h2 class="type-section interaction-section__heading">${copy[5]}</h2>
        <p class="interaction-section__note">
          ${copy[6]}<code>${copy[7]}</code>${copy[8]}
        </p>

        <div class="layout-row interaction-section__content">
          <app-button label="${copy[0]}" tone="danger" data-dialog="open"></app-button>
        </div>

        <dialog class="interaction-dialog" id="interaction-dialog" aria-labelledby="interaction-dialog-title">
          <h3 class="type-subsection" id="interaction-dialog-title">${copy[9]}</h3>
          <p class="type-compact" style="margin-block-start: var(--layout-space-3)">
            ${copy[10]}
          </p>
          <div class="layout-row interaction-dialog__actions">
            <app-button label="${copy[1]}" data-dialog="cancel" id="interaction-dialog-cancel"></app-button>
            <app-button label="${copy[2]}" tone="danger" data-dialog="confirm"></app-button>
          </div>
        </dialog>
      </section>
    `;
  }
}
