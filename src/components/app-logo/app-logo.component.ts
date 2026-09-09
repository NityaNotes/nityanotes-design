import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { appHeaderContent } from "@app/components/app-header-content.ts";

/** Site-wide home link and visual mark for the Nitya Notes brand. */
@Component({ selector: "app-logo", shadow: false })
export class AppLogoComponent extends BaseElement {
  render() {
    return html`
      <a class="app-logo" href="/" aria-label="${appHeaderContent.brand}">
        <img
          class="app-logo__mark"
          src="/assets/brand/temple-flame-icon-set/svg/nitya-96.svg"
          alt=""
          width="40"
          height="40"
          aria-hidden="true"
        />
        <span class="app-logo__wordmark">${appHeaderContent.brand}</span>
      </a>
    `;
  }
}
