import { BaseElement, Component, HostListener } from "@ayu-sh-kr/dota-wrap/core";
import { html } from "@ayu-sh-kr/dota-wrap/rendering";

/** Rung names, in order, for the ladder specimen. */
const RUNG_NAMES = ["Encountered", "Recognised", "Recalled", "Held"] as const;
const RUNG_NAMES_SA = ["दृष्ट", "प्रत्यभिज्ञात", "स्मृत", "कण्ठस्थ"] as const;

/** Words the pāṭha lamp travels across, at a fixed syllable rate. */
const PATHA_WORDS = ["कर्मण्येव", "अधिकारस्ते", "मा", "फलेषु", "कदाचन"] as const;
const PATHA_CHARS_PER_SECOND = 5.5;

/**
 * The two product verbs — rise, and travel. Rise is the only celebratory
 * moment in the product and it lasts 480ms. Travel is the only continuous
 * motion, and it runs at a syllable rate rather than at a duration token.
 */
@Component({ selector: "interaction-product", shadow: false })
export class InteractionProductComponent extends BaseElement {
  /** Creates the product verbs section element. */
  constructor() {
    super();
  }

  private rungTimers: ReturnType<typeof setTimeout>[] = [];

  /**
   * Responds to the four demo controls: rise a rung, reset the ladder, recite
   * the verse. The recite path schedules one word-lighting per syllable time
   * and drives the lamp along the rail at the same rate.
   */
  @HostListener({ event: "click" })
  handleControl(event: MouseEvent) {
    const control = (event.target as HTMLElement | null)?.closest<HTMLElement>("[data-product]");
    if (!control || !this.contains(control)) return;
    const intent = control.dataset["product"];

    if (intent === "rung-up") this.changeRung(1);
    else if (intent === "rung-reset") this.setRung(1);
    else if (intent === "recite") this.recite();
  }

  private changeRung(delta: 1 | -1) {
    const rung = this.querySelector<HTMLElement>("#interaction-rung");
    if (!rung) return;
    const current = Number.parseInt(rung.dataset["rung"] ?? "1", 10) || 1;
    this.setRung(current + delta);
  }

  private setRung(next: number) {
    const rung = this.querySelector<HTMLElement>("#interaction-rung");
    const name = this.querySelector<HTMLElement>("#interaction-rung-name");
    const nameSa = this.querySelector<HTMLElement>("#interaction-rung-sa");
    if (!rung || !name || !nameSa) return;
    const index = Math.min(4, Math.max(1, next)) - 1;
    rung.dataset["rung"] = String(index + 1);
    name.textContent = RUNG_NAMES[index] ?? RUNG_NAMES[0];
    nameSa.textContent = RUNG_NAMES_SA[index] ?? RUNG_NAMES_SA[0];
  }

  /** Lights one word per syllable-time and travels the lamp alongside. */
  private recite() {
    const verse = this.querySelector<HTMLElement>("#interaction-patha");
    const lamp = this.querySelector<HTMLElement>("#interaction-lamprail .interaction-lamprail__lamp");
    if (!verse || !lamp) return;

    this.rungTimers.forEach((timer) => clearTimeout(timer));
    this.rungTimers = [];

    const words = Array.from(verse.querySelectorAll<HTMLElement>(".interaction-word"));
    words.forEach((word) => word.classList.remove("is-lit"));

    const totalChars = PATHA_WORDS.join(" ").length;
    const totalSeconds = totalChars / PATHA_CHARS_PER_SECOND;
    const railWidth = verse.clientWidth - 10;

    lamp.classList.remove("is-travelling");
    lamp.style.setProperty("--travel-dur", `${totalSeconds}s`);
    lamp.style.offsetPath = `path("M 0 0 L ${railWidth} 0")`;
    void lamp.offsetWidth;
    lamp.classList.add("is-travelling");

    let at = 0;
    words.forEach((word, i) => {
      this.rungTimers.push(
        setTimeout(() => word.classList.add("is-lit"), at * 1000),
      );
      at += ((PATHA_WORDS[i]?.length ?? 0) + 1) / PATHA_CHARS_PER_SECOND;
    });
  }

  /** Renders the rise ladder and the travel lamp side by side. */
  render() {
    const words = PATHA_WORDS.map((word, i) => {
      const trailing = i < PATHA_WORDS.length - 1 ? " " : "";
      return html`<span class="interaction-word" lang="sa">${word}${trailing}</span>`;
    });

    return html`
      <section id="product" class="layout-page layout-section interaction-section">
        <p class="type-eyebrow interaction-section__eyebrow">The two this product owns</p>
        <h2 class="type-section interaction-section__heading">rise, and travel</h2>

        <div class="layout-grid-2 interaction-section__content">
          <div class="interaction-card">
            <p class="type-card-title">rise <span class="interaction-mono">· 480ms</span></p>
            <p class="type-compact">
              A verse moved up the ladder. Height and rung colour change together,
              once. This is the only celebratory moment in the product and it
              lasts 480ms — no confetti, no streak, no sound.
            </p>
            <div class="interaction-ladder">
              <div class="interaction-ladder__rung" id="interaction-rung" data-rung="1"></div>
              <div class="interaction-ladder__label">
                <p class="type-card-title" id="interaction-rung-name">Encountered</p>
                <p class="type-compact" lang="sa" id="interaction-rung-sa">दृष्ट</p>
              </div>
            </div>
            <div class="layout-row" style="margin-block-start: var(--layout-space-4)">
              <app-button label="Rise a rung" size="sm" data-product="rung-up"></app-button>
              <app-button label="Reset" tone="quiet" size="sm" data-product="rung-reset"></app-button>
            </div>
          </div>

          <div class="interaction-card">
            <p class="type-card-title">travel <span class="interaction-mono">· syllable rate, linear</span></p>
            <p class="type-compact">
              The pāṭha lamp along the shirorekha. The only continuous motion in
              the product, the only one the reader starts, and the only timing
              not taken from the five durations.
            </p>
            <div class="interaction-lamprail">
              <div class="interaction-lamprail__rail"></div>
              <div class="interaction-lamprail__lamp"></div>
            </div>
            <p class="type-verse interaction-verse" id="interaction-patha">${words}</p>
            <div class="layout-row" style="margin-block-start: var(--layout-space-4)">
              <app-button label="Recite" tone="primary" size="sm" data-product="recite"></app-button>
              <span class="interaction-mono">5.5 ch/s</span>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
