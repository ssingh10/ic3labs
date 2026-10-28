import { SITE } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title" id="top">
      <div className="hero-wash" aria-hidden="true" />
      <Reveal className="hero-copy">
        <h1 id="hero-title">
          We build products people <em>love.</em>
        </h1>
        <p>{SITE.description}</p>
      </Reveal>
      <a className="scroll-cue" href="#about" aria-label="Scroll to founding story">
        <span>Read</span>
        <span className="scroll-line">
          <span />
        </span>
      </a>
    </section>
  );
}
