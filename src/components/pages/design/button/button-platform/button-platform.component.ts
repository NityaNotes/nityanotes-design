import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designButtonContent } from "@app/data/design-button-content.ts";

/** Records which parts of the web button contract survive on companion platforms. */
@Component({ selector: "button-platform", shadow: false })
export class ButtonPlatformComponent extends BaseElement {
  /** Creates the platform parity section element. */
  constructor() { super(); }

  /** Renders the cross-platform contract at the end of the button reference. */
  render() {
    const copy = designButtonContent.copy["button/button-platform/button-platform"];
    return html`
      <section class="layout-page layout-section-end layout-stack layout-stack-sm button-section button-platform">
        <p class="type-eyebrow button-section__eyebrow">${copy[0]}</p>
        <h2 class="type-section button-section__heading">${copy[1]}</h2>
        <p class="button-section__note">${copy[2]}</p>
        <table class="button-table button-platform__table button-section__content"><thead><tr><th>${copy[3]}</th><th>${copy[4]}</th></tr></thead><tbody><tr><th>${copy[5]}</th><td>${copy[6]}</td></tr><tr><th>${copy[7]}</th><td>${copy[8]}</td></tr><tr><th>${copy[9]}</th><td>${copy[10]}</td></tr><tr><th>${copy[11]}</th><td>${copy[12]}</td></tr><tr><th>${copy[13]}</th><td>${copy[14]}</td></tr></tbody></table>
      </section>
    `;
  }
}
