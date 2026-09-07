import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

/**
 * Demonstrates the standard pairing patterns between type roles.
 *
 * The settings specimen shows the four pairings live: section with lede,
 * card title with body, metric with word, and label with a real field built
 * from the shared input grammar.
 *
 * Selector: `english-pairings-section`.
 */
@Component({ selector: "english-pairings-section", shadow: false })
export class EnglishPairingsSectionComponent extends BaseElement {
  /** Creates the framework element before Dota renders the static pairing specimens. */
  constructor() {
    super();
  }

  /** Renders the pairing patterns without reading or changing application state. */
  render() {
    return html`
      <section class="layout-page layout-section english-section design-section" id="english-pairings" aria-label="Pairing patterns">
          <p class="type-eyebrow design-specimen-eyebrow">06 · Pairing patterns</p>
          <h2 class="type-subsection">Consistency is in the pairing.</h2>
          <p class="type-lede">A section opens with one heading and one lede, then hands over. A card answers with a title, body, and one compact line. A count changes beside a word, never alone.</p>
          <div class="layout-row">
            <span class="element-badge">Section + lede</span>
            <span class="element-badge">Card title + body</span>
            <span class="element-badge">Metric + word</span>
            <span class="element-badge">Label + field</span>
          </div>
          <div class="design-specimen english-pairings-section__specimen" aria-label="Settings pairing specimen">
            <h3 class="type-section">Settings</h3>
            <p class="type-lede">Manage your practice preferences and account.</p>
            <div class="layout-grid-2 english-pairings-section__fields">
              <div class="element-field">
                <label class="type-label" for="english-daily-goal">Daily goal</label>
                <div class="input-select">
                  <select class="input" id="english-daily-goal">
                    <option>10 minutes</option>
                    <option>20 minutes</option>
                    <option>30 minutes</option>
                  </select>
                </div>
              </div>
              <div class="element-field">
                <label class="type-label" for="english-reminder-time">Reminder time</label>
                <input class="input" id="english-reminder-time" type="time" />
              </div>
            </div>
          </div>
      </section>
    `;
  }
}
