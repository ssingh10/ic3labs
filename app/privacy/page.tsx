import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Website Privacy Policy",
  description: `How ${SITE.name} handles information on ic3labs.com.`,
  alternates: { canonical: `${SITE.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <main className="wrap">
      <article className="legal">
        <div className="legal-hero">
          <p className="kicker">{SITE.legalName}</p>
          <h1>Website Privacy Policy</h1>
          <p className="legal-meta">Effective Date: October 26, 2026</p>
        </div>

        <div className="stack" style={{ gap: 20 }}>
          <p className="legal-lede">
            This site is a simple introduction to IC3 Labs. It has no user accounts, no sign-up forms, and no
            advertising. This policy explains what information passes through it, how we handle it, and what you can
            ask us to do about it.
          </p>
          <p className="legal-note">
            This policy covers ic3labs.com only. DecipherIQ has its own privacy policy at{" "}
            <a href="https://decipheriq.ai/privacy" target="_blank" rel="noopener noreferrer">
              decipheriq.ai/privacy
            </a>
            .
          </p>
        </div>

        <div className="legal-body">
          <section className="legal-section">
            <h2>1. Who we are</h2>
            <p>
              IC3 Labs LLC (“IC3 Labs,” “we,” “us”) is an independent product studio based in Atlanta, GA. Our
              registered address is 8735 Dunwoody Place Ste R, Atlanta, GA 30350, USA.
            </p>
            <p>
              We are responsible for the personal information described in this policy. You can reach us by email at{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or by mail at the address above.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. What we collect</h2>
            <p>
              <strong>When you email us.</strong> If you write to any ic3labs.com address, we receive your name, email
              address, and whatever you include in your message.
            </p>
            <p>
              <strong>When you visit.</strong> Our hosting provider, Cloudflare, automatically records standard server
              log data: your IP address, browser type, the page requested, and the time of the request. These logs are
              used for security and to keep the site running. We do not use this data to identify you individually.
            </p>
            <p>
              <strong>What we do not collect.</strong> We do not use cookies, tracking pixels, analytics tools,
              advertising networks, or session-recording software on this site.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Third-party services</h2>
            <p>
              <strong>Fonts.</strong> Typefaces are self-hosted with the site. Your browser does not request fonts from
              Google or other third-party font services.
            </p>
            <p>
              <strong>Email.</strong> Email sent to ic3labs.com addresses is handled by Google Workspace. Messages are
              stored on their servers subject to their privacy policy.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. How we use it</h2>
            <p>
              We use your information only to reply to your messages and to keep the site secure. We do not use it for
              advertising, profiling, or any purpose beyond what is described here.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. How long we keep it</h2>
            <p>
              We keep email correspondence for as long as needed to respond and follow up, then delete it when it is no
              longer useful. Server logs are kept for 30 days and then deleted automatically.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Sharing</h2>
            <p>We do not sell, rent, or share personal information for advertising purposes, and we do not intend to.</p>
            <p>
              We share information only with: (a) the service providers that host this site and our email, where
              necessary to operate them; and (b) law enforcement or government authorities where required by applicable
              law.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Security</h2>
            <p>
              We use reasonable technical measures to protect the information sent to and from this site. Email is
              transmitted over encrypted connections where your email provider supports it. No internet transmission is
              completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="legal-section" id="privacy-rights">
            <h2>8. Your rights</h2>
            <p>
              You can contact us at any time to ask what personal information we hold about you, to correct it, or to
              request that we delete it. To make a request, email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or
              write to us at 8735 Dunwoody Place Ste R, Atlanta, GA 30350, USA. We will respond promptly.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Children</h2>
            <p>
              This site is not directed to children under 13, and we do not knowingly collect personal information from
              children under 13. If we learn that we have done so, we will delete it promptly.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Changes</h2>
            <p>
              If we change this policy, we will update the effective date above. If we begin collecting information in
              new ways — such as adding analytics, a contact form, or any other data collection — we will update this
              page before doing so.
            </p>
          </section>

          <section className="legal-section">
            <h2>11. Contact</h2>
            <p>Questions about this policy or your data:</p>
            <p className="stack">
              <span>
                Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </span>
              <span>Mail: IC3 Labs LLC, 8735 Dunwoody Place Ste R, Atlanta, GA 30350, USA</span>
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
