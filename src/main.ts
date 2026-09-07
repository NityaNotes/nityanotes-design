import './style.css'

import { AppComponent } from "@app/app.component.ts";
import { DesignPage, ErrorPage } from "@app/pages";
import {DefaultApplicationEventListenerRegistry, initializeApp} from "@ayu-sh-kr/dota-wrap";
import { Router, RouterService } from "@ayu-sh-kr/dota-wrap/router";
import { ApplicationEventService } from "@ayu-sh-kr/dota-wrap/core";
import components from "virtual:dota-components";
import { routeConfig } from "virtual:dota-routes";
import { AccordionComponent, IconsComponent, OrbBackgroundComponent } from "@ayu-sh-kr/dota-ui";
const applicationEventService = ApplicationEventService.getInstance();
const applicationEventPublisher = applicationEventService.getPublisher();
const applicationEventListener = applicationEventService.getListener();

let routerService!: RouterService<Router<HTMLElement>>;

initializeApp({
  modules: components,
  routes: [...routeConfig, { path: "/design", component: DesignPage }],
  externalComponents: [AccordionComponent, IconsComponent, OrbBackgroundComponent],
  errorRoute: { path: "/error", component: ErrorPage },
  defaultRoute: { path: "/", component: DesignPage },
  root: AppComponent,
})
  .then((value) => {
    DefaultApplicationEventListenerRegistry.setListener(applicationEventListener);
    routerService = value.routerService;
    applicationEventPublisher.publishAsync({ name: "app:initialized", data: null });
  })
  .catch((error) => console.error(error));

export { routerService, applicationEventService, applicationEventPublisher, applicationEventListener };
