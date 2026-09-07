import { BaseElement, Component, HostListener } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

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
    return html`
      <section id="interrupt" class="layout-page layout-section interaction-section">
        <p class="type-eyebrow interaction-section__eyebrow">07 · Response</p>
        <h2 class="type-section interaction-section__heading">Interruption</h2>
        <p class="interaction-section__note">
          The native <code>&lt;dialog&gt;</code> owns the top layer, the focus
          trap, the inert background, Escape and focus return. There is no
          parallel overlay, and there is no custom Escape handler. Destructive
          confirmations open focused on Cancel.
        </p>

        <div class="layout-row interaction-section__content">
          <app-button label="Remove this verse" tone="danger" data-dialog="open"></app-button>
        </div>

        <dialog class="interaction-dialog" id="interaction-dialog" aria-labelledby="interaction-dialog-title">
          <h3 class="type-subsection" id="interaction-dialog-title">Remove this verse?</h3>
          <p class="type-compact" style="margin-block-start: var(--layout-space-3)">
            It leaves today’s window and its ladder position is discarded. You can
            add it again from the corpus, but it starts at Encountered.
          </p>
          <div class="layout-row interaction-dialog__actions">
            <app-button label="Keep it" data-dialog="cancel" id="interaction-dialog-cancel"></app-button>
            <app-button label="Remove" tone="danger" data-dialog="confirm"></app-button>
          </div>
        </dialog>
      </section>
    `;
  }
}
