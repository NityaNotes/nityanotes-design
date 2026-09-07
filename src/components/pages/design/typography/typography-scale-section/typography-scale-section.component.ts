import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designTypographyContent } from "@app/data/design-typography-content.ts";

/**
 * Renders the shared type scale at a glance, scripture first.
 *
 * The specimen pairs each interface role with its rendered output and explains
 * why the scripture ladder never interleaves with the interface ladder.
 *
 * Selector: `typography-scale-section`.
 */
@Component({ selector: "typography-scale-section", shadow: false })
export class TypographyScaleSectionComponent extends BaseElement {
  /** Creates the framework element before Dota renders the static scale specimens. */
  constructor() {
    super();
  }

  /** Renders the scale specimen without reading or changing application state. */
  render() {
    const { scale } = designTypographyContent;

    return html`
      <section class="layout-page layout-section-end typography-section design-section" id="typography-scale" aria-label="${scale.label}">
        <p class="type-eyebrow design-specimen-eyebrow">${scale.eyebrow}</p>
        <h2 class="type-subsection">${scale.title}</h2>
        <p class="type-lede">${scale.lede}</p>
        <dl class="design-specimen design-specimen-scale">
          ${scale.roles.map((role) => html`
            <div>
              <dt class="type-micro">${role.name}</dt>
              <dd class="${role.className}">${role.sample}</dd>
            </div>
          `)}
        </dl>
        <p>${scale.conclusion}</p>
      </section>
    `;
  }
}
