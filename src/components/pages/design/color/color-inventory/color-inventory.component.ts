import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

const ROLE_GROUPS = [
  { name: "Canvas", description: "Establishes the page, its raised surfaces, and their edges.", roles: ["background-color", "surface-color", "surface-hover-color", "border-color"] },
  { name: "Content", description: "Builds readable hierarchy without inventing one-off text colours.", roles: ["foreground-color", "muted-strong-color", "muted-color"] },
  { name: "Action", description: "Keeps interactive primary states unified across both themes.", roles: ["primary-color", "primary-color-hover", "primary-color-on", "primary-color-hover-on", "primary-color-strong", "primary-color-subtle"] },
  { name: "Contrast", description: "Deliberate inversion, for a panel that has to stop the scroll.", roles: ["contrast-background-color", "contrast-foreground-color", "contrast-muted-color", "contrast-border-color"] },
  { name: "Mix ramp", description: "Centralises every translucent value: hairlines, washes, halos, scrims, and lift.", roles: ["subtle-color", "border-strong-color", "primary-color-wash", "primary-color-ring", "scrim-color"] },
  { name: "Status", description: "Communicates outcome independently of the active brand family.", roles: ["success-color", "warning-color", "danger-color"] },
];

/** Lists every semantic colour role available to components. */
@Component({ selector: "color-inventory", shadow: false })
export class ColorInventoryComponent extends BaseElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <section id="color-inventory" class="layout-page layout-section color-section color-inventory">
        <p class="type-eyebrow color-section__eyebrow">02 · Role inventory</p>
        <h2 class="type-section color-section__heading">Six groups. Every colour a component can ask for.</h2>
        <p class="type-lede color-section__lede">If a component needs something outside these groups, the role layer is incomplete. Add the role in <code>color.css</code> — do not reach past it for a literal.</p>
        <div class="layout-grid-2 color-section__content color-inventory__grid">
          ${ROLE_GROUPS.map((group) => html`
            <article class="element-card color-inventory__role">
              <h3 class="type-card-title">${group.name}</h3>
              <p class="type-compact color-inventory__note">${group.description}</p>
              <dl class="color-inventory__list">
                ${group.roles.map((role) => html`
                  <div class="color-inventory__row">
                    <dt><span class="color-inventory__dot" style="background: var(--${role})"></span>${role.replaceAll("-", " ")}</dt>
                    <dd>--${role}</dd>
                  </div>
                `)}
              </dl>
            </article>
          `)}
        </div>
      </section>
    `;
  }
}
