import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";
import { designElementContent } from "@app/data/design-element-content";

/**
 * Provides live fields and choice controls from the element demo.
 *
 * It keeps labels, help text, and native input semantics together so the reference
 * documents accessible field composition instead of only showing decorative boxes.
 * Selector: `element-fields-section`.
 */
@Component({ selector: "element-fields-section", shadow: false })
export class ElementFieldsSectionComponent extends BaseElement {
  constructor() {
    super();
  }

  /** Renders the non-submitting field and choice specimens. */
  render() {
    const content = designElementContent.fields;

    return html`
      <section class="layout-page layout-section design-section" id="element-fields">
        <p class="type-eyebrow">${content.eyebrow}</p>
        <h2 class="type-section">${content.title}</h2>
        <p class="type-lede">${content.description}</p>
        <form class="element-card layout-stack layout-stack-sm" aria-label="${content.formLabel}" style="margin-block-start:var(--layout-space-7)">
          <p class="type-compact input-help" id="element-focus-help">${content.focus}</p>
          <div class="input-field">
            <label class="type-label" for="element-email">${content.email.label}</label>
            <input class="input" id="element-email" type="email" placeholder="${content.email.placeholder}" aria-describedby="element-email-help element-focus-help">
            <p class="type-compact input-help" id="element-email-help">${content.email.help}</p>
          </div>
          <div class="input-field">
            <label class="type-label" for="element-note">${content.note.label}</label>
            <input class="input" id="element-note" placeholder="${content.note.placeholder}" aria-describedby="element-focus-help">
          </div>
          <fieldset class="input-field">
            <legend class="type-label">${content.choicesLabel}</legend>
            <div class="layout-row">
              ${content.choices.map((choice, index) => html`
                <label class="input-choice-label">
                  ${index === 0
                    ? html`<input class="input-choice" type="radio" name="element-text" value="${choice}" checked>`
                    : html`<input class="input-choice" type="radio" name="element-text" value="${choice}">`}
                  ${choice}
                </label>
              `)}
            </div>
          </fieldset>
          <app-button label="${content.action}" tone="primary"></app-button>
        </form>
      </section>
    `;
  }
}
