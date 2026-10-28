import { PARTNERS } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Partners() {
  return (
    <section id="partners" className="partners" aria-labelledby="partners-title">
      <div className="wrap partners-inner">
        <Reveal as="h2" id="partners-title" className="kicker">
          <span className="num">III.</span>The Partners
        </Reveal>
        <div className="partner-grid">
          {PARTNERS.map((p) => (
            <Reveal as="article" className="partner" key={p.email}>
              <div className="avatar">{p.initials}</div>
              <div>
                <h3>{p.name}</h3>
                <p className="role">{p.title}</p>
              </div>
              <p className="bio" style={{ color: p.bioColor }}>
                {p.bio}
              </p>
              <a href={`mailto:${p.email}`}>{p.email}</a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
