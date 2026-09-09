import './style.css'

import { AppComponent } from "@app/app.component.ts";
import { DesignPage, ErrorPage } from "@app/pages";
import {DefaultApplicationEventListenerRegistry, initializeApp} from "@ayu-sh-kr/dota-wrap";
import { Router, RouterService } from "@ayu-sh-kr/dota-wrap/router";
import { ApplicationEventService } from "@ayu-sh-kr/dota-wrap/core";
import components from "virtual:dota-components";
import { routeConfig } from "virtual:dota-routes";
import { AccordionComponent, IconsComponent, OrbBackgroundComponent } from "@ayu-sh-kr/dota-ui";
import { designSystemManifest, designSystemRecipes } from "@app/design-system/manifest.ts";
import { createDesignSystemTools, isWebMcpAvailable } from "@app/design-system/webmcp.adapter.ts";
import type { ModelContextLike } from "@app/design-system/webmcp.types.ts";
const applicationEventService = ApplicationEventService.getInstance();
const applicationEventPublisher = applicationEventService.getPublisher();
const applicationEventListener = applicationEventService.getListener();

let routerService!: RouterService<Router<HTMLElement>>;

export const applicationReady = initializeApp({
  modules: components,
  routes: [{ path: "/", component: DesignPage, ssr: true }, ...routeConfig],
  externalComponents: [AccordionComponent, IconsComponent, OrbBackgroundComponent],
  errorRoute: { path: "/error", component: ErrorPage },
  defaultRoute: { path: "/", component: DesignPage },
  root: AppComponent,
});

applicationReady
  .then((value) => {
    DefaultApplicationEventListenerRegistry.setListener(applicationEventListener);
    routerService = value.routerService;
    applicationEventPublisher.publishAsync({ name: "app:initialized", data: null });
  })
  .catch((error) => console.error(error));

// WebMCP is an experimental draft API; absence is a supported state and the
// no-op cleanup keeps teardown symmetrical. The shared abort signal removes all
// four tools together on teardown or hot-module replacement.
const webmcpCleanup = isWebMcpAvailable()
  ? createDesignSystemTools(
      (document as { modelContext?: ModelContextLike }).modelContext,
      designSystemManifest,
      designSystemRecipes,
    ).catch(() => () => {})
  : Promise.resolve(() => {});

export { routerService, applicationEventService, applicationEventPublisher, applicationEventListener, webmcpCleanup };
