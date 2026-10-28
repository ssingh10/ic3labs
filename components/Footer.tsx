import Link from "next/link";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="wrap footer-inner">
        <p className="footer-lead">
          To reach us, email <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
        <div className="footer-grid">
          <div>
            <p className="footer-brand">{SITE.legalName}</p>
            <p className="footer-addr">
              {SITE.addressLines[0]}
              <br />
              {SITE.addressLines[1]}
            </p>
          </div>
          <nav className="footer-nav" aria-label="Footer">
            <Link href="/#about">About</Link>
            <a href={SITE.decipheriq}>DecipherIQ</a>
            <a href={`mailto:${SITE.email}`}>Contact</a>
            <Link href="/privacy">Privacy</Link>
          </nav>
          <p className="footer-copy">© 2026 {SITE.legalName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
