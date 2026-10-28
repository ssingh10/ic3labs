import { SCREENS, SITE } from "@/lib/site";
import { Reveal } from "./Reveal";
import { Signal } from "./Signal";

export function Ventures() {
  return (
    <section id="ventures" className="ventures" aria-labelledby="dq-title">
      <div className="wrap ventures-inner">
        <Reveal as="p" className="kicker">
          <span className="num">II.</span>Our First Product
        </Reveal>
        <div className="venture-grid">
          <Reveal className="venture-copy">
            <p className="beta">
              <span className="beta-dot" />
              Now in Beta
            </p>
            <h2 id="dq-title">DecipherIQ</h2>
            <p>
              The news intelligence platform built for people who need to stay sharp without drowning in noise.
              DecipherIQ keeps track of everything happening across tech, media, the economy and finance so you don’t
              have to — then surfaces exactly what matters to you, framed around your role, your goals, and your time.
            </p>
            <p className="pull">Personalized, contextual briefings. No more clutter. Just signal.</p>
            <a className="cta" href={SITE.decipheriq} target="_blank" rel="noopener noreferrer">
              <span aria-hidden="true">→</span>Visit DecipherIQ.ai
            </a>
          </Reveal>
          <Reveal className="signal-card" aria-hidden="true">
            <div className="signal-label">
              <span>Insights</span>
            </div>
            <div className="signal-body">
              <Signal />
            </div>
            <div className="signal-rule" />
          </Reveal>
        </div>
        <div className="screens">
          {SCREENS.map((screen) => (
            <Reveal as="figure" className="screen" key={screen.src}>
              <div className="screen-frame">
                <img src={screen.src} alt={screen.alt} />
              </div>
              <figcaption>{screen.caption}</figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
