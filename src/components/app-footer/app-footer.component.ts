import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { footerContent } from "./app-footer-content";

/** Site-wide colophon, kept outside the router so navigation preserves one footer. */
@Component({ selector: "app-footer", shadow: false })
export class AppFooterComponent extends BaseElement {
  render() {
    return html`
      <footer class="app-footer">
        <div class="app-footer__inner layout-page layout-section-sm">
          <div class="app-footer__signature">
            <a class="app-footer__brand" href="/">${footerContent.brand}</a>
            <p class="app-footer__description">${footerContent.description}</p>
          </div>
          <nav class="app-footer__navigation layout-row" aria-label="${footerContent.navigationLabel}">
            ${footerContent.links.map((link) => html`
              <a class="app-footer__link" href="${link.href}">${link.label}</a>
            `)}
          </nav>
        </div>
      </footer>
    `;
  }
}
