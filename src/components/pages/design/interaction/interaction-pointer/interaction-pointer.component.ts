import { BaseElement, Component } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

/**
 * Pointer response. Hover confirms reachability and never carries meaning;
 * every hover rule sits inside a hover-capable media query so a tapped control
 * does not stay lit. Press remains the contact acknowledgement for pointer,
 * touch, and keyboard activation alike.
 */
@Component({ selector: "interaction-pointer", shadow: false })
export class InteractionPointerComponent extends BaseElement {
  /** Creates the pointer section element. */
  constructor() {
    super();
  }

  /** Renders the press, ink, and nudge verbs beside the do/never contrast. */
  render() {
    return html`
      <section id="pointer" class="layout-page layout-section interaction-section">
        <p class="type-eyebrow interaction-section__eyebrow">01 · Input</p>
        <h2 class="type-section interaction-section__heading">Pointer response</h2>
        <p class="interaction-section__note">
          Hover confirms that a thing is reachable. It never carries information a
          keyboard or a thumb would miss, and every hover rule sits inside
          <code>@media (hover: hover)</code> so a tapped control does not stay lit.
        </p>

        <div class="layout-grid-3 interaction-section__content">
          <div class="interaction-tile">
            <p class="type-card-title">press</p>
            <p class="interaction-mono">scale .98 · 100ms</p>
            <div class="interaction-stage">
              <app-button label="Hold me" interaction="lift"></app-button>
            </div>
          </div>
          <div class="interaction-tile">
            <p class="type-card-title">ink</p>
            <p class="interaction-mono">colour · 160ms</p>
            <div class="interaction-stage">
              <app-button label="A text link that inks" tone="link" href="/design/layout"></app-button>
            </div>
          </div>
          <div class="interaction-tile">
            <p class="type-card-title">nudge</p>
            <p class="interaction-mono">mark +4px · 220ms</p>
            <div class="interaction-stage">
              <app-button label="Read the commentary →" block="true" class="interaction-row"></app-button>
            </div>
          </div>
        </div>

        <div class="layout-grid-2" style="margin-block-start: var(--layout-space-4)">
          <div class="interaction-card">
            <p class="type-eyebrow">Do</p>
            <p class="type-compact">One parent state, one child move. The row washes; the mark travels toward the end of the line.</p>
            <app-button label="वासांसि जीर्णानि · Bhagavad Gītā 2.22 →" block="true" class="interaction-row"></app-button>
          </div>
          <div class="interaction-card">
            <p class="type-eyebrow">Never</p>
            <p class="type-compact">A row that lifts and a mark that travels reads as two objects coming apart. Pick one.</p>
            <div class="interaction-row interaction-row--static">
              <span>
                <span class="type-card-title" lang="sa">वासांसि जीर्णानि</span><br />
                <span class="type-compact">lift + travel + shadow</span>
              </span>
              <span aria-hidden="true">→</span>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
