import {
  BaseElement,
  BindEvent,
  Boolean,
  Component,
  Property,
  String,
} from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

/** Visual priority applied to the native control rendered by `app-button`. */
export type AppButtonTone = "primary" | "secondary" | "quiet" | "danger" | "link";

/** Shared target sizes defined by the button geometry in `layout.css`. */
export type AppButtonSize = "sm" | "md" | "lg";

/** Corner or target shape applied independently from tone and size. */
export type AppButtonShape = "default" | "square" | "rounded" | "pill" | "icon";

/** Motion response used when a pointer or keyboard user activates the control. */
export type AppButtonInteraction = "press" | "lift" | "shift";

/** Request lifecycle rendered by the shared button state selectors. */
export type AppButtonState = "idle" | "busy" | "done" | "error";

/** Static interaction face used only when a reference surface must show a state. */
export type AppButtonPreview = "none" | "hover" | "focus" | "pressed";

const TONE_CLASSES: Record<AppButtonTone, string> = {
  primary: "button-primary",
  secondary: "button-secondary",
  quiet: "button-quiet",
  danger: "button-danger",
  link: "button-link",
};

const SHAPE_CLASSES: Record<AppButtonShape, string> = {
  default: "layout-button-shape-pill",
  square: "layout-button-shape-square",
  rounded: "layout-button-shape-rounded",
  pill: "layout-button-shape-pill",
  icon: "layout-button-icon",
};

const SIZE_CLASSES: Record<AppButtonSize, string> = {
  sm: "layout-button-sm",
  md: "layout-button-md",
  lg: "layout-button-lg",
};

const INTERACTION_CLASSES: Record<AppButtonInteraction, string> = {
  press: "interaction-button-press",
  lift: "interaction-button-lift",
  shift: "interaction-button-shift",
};

const PREVIEW_CLASSES: Record<AppButtonPreview, string> = {
  none: "",
  hover: "interaction-state-hover",
  focus: "interaction-state-focus",
  pressed: "interaction-state-pressed",
};

/**
 * Renders one consistent native action or destination control.
 *
 * Product surfaces configure `app-button` through attributes instead of
 * assembling CSS classes. Without `href` it renders a native button; with
 * `href` it renders an anchor. The public `state` attribute can be changed by
 * request handlers, and busy or disabled controls reject repeat activation.
 *
 * Selector: `app-button`.
 */
@Component({ selector: "app-button", shadow: false })
export class AppButtonComponent extends BaseElement {
  /** Attribute `label`; visible control text, empty by default. */
  @Property({ name: "label", type: String, default: "" })
  label = "";

  /** Attribute `accessible-label`; overrides the native accessible name for icon controls. */
  @Property({ name: "accessible-label", type: String, default: "" })
  accessibleLabel = "";

  /** Attribute `tone`; accepts primary, secondary, quiet, danger, or link; defaults to secondary. */
  @Property({ name: "tone", type: String, default: "secondary" })
  tone: AppButtonTone = "secondary";

  /** Attribute `size`; accepts sm, md, or lg; defaults to md. */
  @Property({ name: "size", type: String, default: "md" })
  size: AppButtonSize = "md";

  /** Attribute `shape`; defaults to pill corners in every state. Explicit square, rounded (8px), pill, or icon values override the default geometry. */
  @Property({ name: "shape", type: String, default: "default" })
  shape: AppButtonShape = "default";

  /** Attribute `interaction`; accepts press, lift, or shift; defaults to press. */
  @Property({ name: "interaction", type: String, default: "press" })
  interaction: AppButtonInteraction = "press";

  /** Attribute `state`; accepts idle, busy, done, or error and re-renders on change. */
  @Property({ name: "state", type: String, default: "idle" })
  state: AppButtonState = "idle";

  /** Attribute `preview`; freezes hover, focus, or pressed styling for reference pages. */
  @Property({ name: "preview", type: String, default: "none" })
  preview: AppButtonPreview = "none";

  /** Attribute `href`; when present, the component renders a native anchor. */
  @Property({ name: "href", type: String, default: "" })
  href = "";

  /** Attribute `id`; forwards a stable identifier to the native control. */
  @Property({ name: "id", type: String, default: "" })
  id = "";

  /** Attribute `class`; appends caller-owned classes to the native control. */
  @Property({ name: "class", type: String, default: "" })
  className = "";

  /** Attribute `title`; forwards supplementary pointer text to the native control. */
  @Property({ name: "title", type: String, default: "" })
  title = "";

  /** Attribute `icon`; renders a Dota icon inside icon-shaped controls. */
  @Property({ name: "icon", type: String, default: "" })
  icon = "";

  /** Attribute `current`; forwards an aria-current value to destination controls. */
  @Property({ name: "current", type: String, default: "false" })
  current = "false";

  /** Attribute `button-type`; accepts native button, submit, or reset values; defaults to button. */
  @Property({ name: "button-type", type: String, default: "button" })
  buttonType: "button" | "submit" | "reset" = "button";

  /** Boolean attribute `disabled`; set `disabled="true"` to disable native buttons and anchor destinations. */
  @Property({ name: "disabled", type: Boolean, default: false })
  disabled = false;

  /** Boolean attribute `block`; set `block="true"` to stretch the host and native control. */
  @Property({ name: "block", type: Boolean, default: false })
  block = false;

  /** Creates the component before Dota binds its public attributes. */
  constructor() {
    super();
  }

  /**
   * Prevents disabled destinations and busy actions from activating. Native
   * disabled buttons are already guarded by the platform; this covers anchors
   * and the request lifecycle without changing their semantics.
   */
  @BindEvent({ event: "click", id: ".app-button__control" })
  guardActivation(event: MouseEvent): void {
    if (!this.disabled && this.state !== "busy") return;
    event.preventDefault();
    event.stopPropagation();
  }

  /**
   * Updates the public request state through its observed attribute so Dota
   * re-renders the native control and keeps generated metadata truthful.
   */
  setState(state: AppButtonState): void {
    this.setAttribute("state", state);
  }

  /** Returns a settled or busy control to its ordinary interactive state. */
  resetState(): void {
    this.setState("idle");
  }

  /** Renders the native element selected by `href` with shared CSS classes. */
  render() {
    const tone = TONE_CLASSES[this.tone] ?? TONE_CLASSES.secondary;
    const shape = SHAPE_CLASSES[this.shape] ?? SHAPE_CLASSES.default;
    const size = SIZE_CLASSES[this.size] ?? SIZE_CLASSES.md;
    const interaction = INTERACTION_CLASSES[this.interaction] ?? INTERACTION_CLASSES.press;
    const preview = PREVIEW_CLASSES[this.preview] ?? "";
    const state: AppButtonState = ["busy", "done", "error"].includes(this.state) ? this.state : "idle";
    const buttonType = ["submit", "reset"].includes(this.buttonType) ? this.buttonType : "button";
    const classes = [
      "app-button__control",
      "button",
      tone,
      size,
      shape,
      this.block ? "layout-button-block" : "",
      interaction,
      preview,
      this.className,
    ].filter((className) => className.length > 0).join(" ");
    const accessibleLabel = this.accessibleLabel || this.label;
    const isBusy = state === "busy";
    const id = this.id ? `id="${this.id}"` : "";
    const title = this.title ? `title="${this.title}"` : "";
    const content = this.icon
      ? html`<dota-icon name="${this.icon}" size="md" variant="ghost" aria-hidden="true"></dota-icon>`
      : this.label;

    if (this.href) {
      if (this.disabled) {
        return html`<a ${id} class="${classes}" ${title} aria-label="${accessibleLabel}" aria-disabled="true" aria-current="${this.current}" data-state="${state}">${content}</a>`;
      }

      return html`<a ${id} class="${classes}" href="${this.href}" ${title} aria-label="${accessibleLabel}" aria-current="${this.current}" aria-busy="${isBusy}" data-state="${state}">${content}</a>`;
    }

    if (this.disabled) {
      return html`<button ${id} class="${classes}" type="${buttonType}" ${title} aria-label="${accessibleLabel}" data-state="${state}" disabled>${content}</button>`;
    }

    return html`<button ${id} class="${classes}" type="${buttonType}" ${title} aria-label="${accessibleLabel}" aria-busy="${isBusy}" data-state="${state}">${content}</button>`;
  }
}
