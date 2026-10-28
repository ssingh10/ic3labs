import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="wrap about-inner">
        <Reveal>
          <h2 id="about-title" className="kicker">
            <span className="num">I.</span>Why We Built This
          </h2>
        </Reveal>
        <Reveal className="about-copy">
          <p>
            <span className="dropcap">T</span>
            hree of us came together with a simple conviction: the best digital products aren’t built by committees or
            driven by market mandates. They’re built by people who are genuinely bothered by a problem and determined to
            fix it properly.
          </p>
          <p>
            Krishna, Ajoy, and Shyam each came from different corners of the technology world, but we shared the same
            frustration: too many apps are built for metrics, not people. Too many products ask for your attention
            without earning it.
          </p>
          <p>
            IC3 Labs was founded to do the opposite. We build products that consumers will love, use daily, and
            genuinely miss when they’re gone. Products that respect your time, sharpen your thinking, and make your day
            a little bit better. We move slowly by design. We ship when things are right, not when they’re due.
          </p>
          <p className="about-close">This is where we build.</p>
          <p className="about-sign">— Krishna, Ajoy &amp; Shyam</p>
        </Reveal>
      </div>
    </section>
  );
}
