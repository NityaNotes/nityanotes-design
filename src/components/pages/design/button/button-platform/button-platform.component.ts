import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

/** Records which parts of the web button contract survive on companion platforms. */
@Component({ selector: "button-platform", shadow: false })
export class ButtonPlatformComponent extends BaseElement {
  /** Creates the platform parity section element. */
  constructor() { super(); }

  /** Renders the cross-platform contract at the end of the button reference. */
  render() {
    return html`
      <section class="layout-page layout-section-end layout-stack layout-stack-sm button-section button-platform">
        <p class="type-eyebrow button-section__eyebrow">05 · Boundaries</p>
        <h2 class="type-section button-section__heading">Built through consistent practice. Refined through production work.</h2>
        <p class="button-section__note">A button grammar survives when the same contract is recognizable in a form, a card, a list, a mobile app, and a compact widget.</p>
        <table class="button-table button-platform__table button-section__content"><thead><tr><th>Surface</th><th>What survives</th></tr></thead><tbody><tr><th>iOS app</th><td>All four beats; hover appears only with a trackpad or pencil.</td></tr><tr><th>Android app</th><td>All four beats; the system ripple resolves into the shared press idiom.</td></tr><tr><th>Home widget</th><td>Commit and result, with a 44pt minimum target.</td></tr><tr><th>Lock accessory</th><td>No individual buttons; the whole widget becomes one tap target.</td></tr><tr><th>StandBy / hub</th><td>Result only. Nothing is pressed at arm's length.</td></tr></tbody></table>
      </section>
    `;
  }
}
