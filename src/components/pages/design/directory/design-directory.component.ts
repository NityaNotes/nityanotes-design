import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designPageContent } from "@app/data/design-page-content.ts";

const { hero, grammars, ownership, start, ship } = designPageContent;

/**
 * Renders the `/design` grammar index: the bridge between the seven grammar routes.
 *
 * Each grammar summary links to its dedicated route with live stat chips and jump
 * anchors, followed by the ownership map, reading-order guidance, and the ship
 * checklist. Authored copy lives in `src/data/design-page-content.ts`.
 *
 * Selector: `design-directory`.
 */
@Component({ selector: "design-directory", shadow: false })
export class DesignDirectoryComponent extends BaseElement {
  /** Creates the directory element before Dota renders its route-driven content. */
  constructor() {
    super();
  }

  /** Renders the grammar index without changing route or application state. */
  render() {
    return html`
      <main class="design-showcase">
        <app-header></app-header>

        <section class="layout-page layout-section-hero design-hero">
          <div class="design-heading">
            <p class="type-eyebrow design-eyebrow">${hero.eyebrow}</p>
            <h1 class="type-display">${hero.title}</h1>
            <p class="type-lede design-lede">${hero.lede}</p>
          </div>
          <div class="design-hero-stats" role="list" aria-label="Design grammar at a glance">
            ${hero.stats.map((stat) => html`
              <div class="design-hero-stat" role="listitem"><span class="type-metric">${stat.value}</span><span class="type-label">${stat.label}</span></div>
            `)}
          </div>
          <app-button label="${hero.cta.label}" tone="primary" size="md" href="${hero.cta.href}" class="design-hero__button"></app-button>
          <design-page-navigation active-route="/design"></design-page-navigation>
        </section>

        <section class="layout-page layout-section design-grammars" aria-label="Design grammars">
          <div class="design-heading">
            <p class="type-eyebrow design-section-eyebrow">01 · The grammars</p>
            <h2 class="type-section design-grammars__heading">Seven routes. Each settles one class of question.</h2>
            <p class="type-lede design-grammars__lede">Open a route to inspect its rules, live specimens, and boundaries. Every grammar consumes the layers before it and never redefines them.</p>
          </div>
          <div class="layout-grid-3 design-grammars__grid">
            ${grammars.map((grammar) => html`
              <article class="element-card design-grammar-card">
                <div class="design-grammar-card__head">
                  <p class="type-eyebrow design-grammar-card__index">${grammar.index}</p>
                  <span class="element-badge">${grammar.iteration}</span>
                </div>
                <h3 class="type-card-title"><a class="design-grammar-card__link" href="${grammar.href}">${grammar.title}</a></h3>
                <p class="type-compact design-grammar-card__settles">${grammar.settles}</p>
                <div class="design-grammar-card__stats" role="list" aria-label="${grammar.title} tokens">
                  ${grammar.stats.map((stat) => html`
                    <span class="design-grammar-card__stat" role="listitem"><strong class="type-metric">${stat.value}</strong><span class="type-micro">${stat.label}</span></span>
                  `)}
                </div>
                <p class="type-code design-grammar-card__source">${grammar.source}</p>
                <p class="type-micro design-grammar-card__jumps">
                  <span>Jump to</span>
                  ${grammar.jumps.map((jump) => html`<a href="${jump.href}">${jump.label}</a>`)}
                </p>
              </article>
            `)}
          </div>
        </section>

        <section class="layout-page layout-section design-ownership" aria-labelledby="design-ownership-title">
          <div class="design-heading">
            <p class="type-eyebrow design-section-eyebrow">${ownership.eyebrow}</p>
            <h2 class="type-section" id="design-ownership-title">${ownership.title}</h2>
            <p class="type-lede design-ownership__lede">${ownership.lede}</p>
          </div>
          <div class="design-ownership-table" role="list" aria-label="Ownership map">
            <div class="type-label design-ownership-row design-ownership-row--head" role="presentation">
              <span>Layer</span><span>Owns</span><span>Never touches</span><span>Source</span>
            </div>
            ${ownership.rows.map((row) => html`
              <div class="design-ownership-row" role="listitem">
                <span class="type-card-title">${row.layer}</span>
                <span class="type-compact">${row.owns}</span>
                <span class="type-compact design-ownership-row__never">${row.never}</span>
                <span class="type-code">${row.source}</span>
              </div>
            `)}
          </div>
          <div class="element-callout design-ownership-precedence">
            <p class="type-label">Order of precedence</p>
            <p class="type-compact">${ownership.precedence}</p>
          </div>
        </section>

        <section class="layout-page layout-section design-start" aria-labelledby="design-start-title">
          <div class="design-heading">
            <p class="type-eyebrow design-section-eyebrow">${start.eyebrow}</p>
            <h2 class="type-section" id="design-start-title">${start.title}</h2>
            <p class="type-lede design-start__lede">${start.lede}</p>
          </div>
          <div class="layout-grid-2 design-start__grid">
            ${start.tasks.map((task, i) => html`
              <article class="element-card design-start-task">
                <span class="element-badge">0${i + 1}</span>
                <h3 class="type-card-title">${task.task}</h3>
                <p class="type-compact">${task.order}</p>
              </article>
            `)}
          </div>
        </section>

        <section class="layout-page layout-section-lg design-ship" aria-labelledby="design-ship-title">
          <div class="design-heading">
            <p class="type-eyebrow design-section-eyebrow">${ship.eyebrow}</p>
            <h2 class="type-section" id="design-ship-title">${ship.title}</h2>
          </div>
          <ol class="element-rule-list design-ship-list">
            ${ship.items.map((item) => html`
              <li>
                <div class="element-rule-list__body">
                  <p class="type-card-title">${item.lead}</p>
                  <p class="type-compact">${item.body}</p>
                </div>
              </li>
            `)}
          </ol>
          <div class="element-callout design-ship-closing">
            <p class="type-compact">${ship.closing}</p>
          </div>
          <app-button label="${ship.cta.label}" tone="primary" size="md" href="${ship.cta.href}" class="design-ship__button"></app-button>
        </section>
      </main>
    `;
  }
}
