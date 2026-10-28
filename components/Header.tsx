"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <nav className="wrap site-nav" aria-label="Primary">
        <Link href="/#top" className="logo">
          {SITE.name}
        </Link>
        <div className="nav-links">
          <Link href="/#about">About</Link>
          <Link href="/#ventures">Ventures</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
