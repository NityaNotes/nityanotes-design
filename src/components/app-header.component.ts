import { BindEvent, BaseElement, Component, WindowListener } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { appHeaderContent } from "@app/components/app-header-content.ts";
import { GeneralUtils } from "@app/utils/general.utils.ts";
import "@app/components/app-logo/app-logo.component.ts";

@Component({
  selector: "app-header",
  shadow: false,
})
export class AppHeaderComponent extends BaseElement {
  constructor() {
    super();
  }

  @BindEvent({ event: "click", id: "#theme-toggle" })
  toggleTheme(): void {
    GeneralUtils.toggleDarkMode();
  }

  @WindowListener({ event: "themeChange" })
  handleThemeChange(): void {
    this.updateHTML();
  }

  render() {
    const isDarkTheme = typeof document !== "undefined" && GeneralUtils.isDarkMode();
    const themeIcon = isDarkTheme ? "mdi:white-balance-sunny" : "mdi:brightness-2";
    const themeLabel = isDarkTheme ? appHeaderContent.theme.lightLabel : appHeaderContent.theme.darkLabel;

    return html`
      <header class="app-header fixed inset-x-0 top-0 z-[var(--layout-z-nav)] px-5 pt-5 sm:px-6 lg:px-8">
        <div class="layout-page flex items-center justify-between gap-4">
          <app-logo></app-logo>
          <app-button
            id="theme-toggle"
            accessible-label="${themeLabel}"
            title="${themeLabel}"
            shape="icon"
            icon="${themeIcon}"
            class="shrink-0 text-[var(--foreground-color)]"
          ></app-button>
        </div>
      </header>
    `;
  }
}
