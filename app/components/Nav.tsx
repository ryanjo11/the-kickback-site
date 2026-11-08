"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/atlanta", label: "Atlanta" },
  { href: "/schedule", label: "Schedule" },
  { href: "/tickets", label: "Tickets" },
  { href: "/partners", label: "Partners" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "https://www.cxm.co/", label: "cxm.co", external: true },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-black/85 border-b border-white/10"
            : "bg-black/40 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between gap-3">
          <Link
            href="/"
            className="flex items-center shrink-0"
            aria-label="The Kickback home"
          >
            <Image
              src="/kickback-logo.png"
              alt="The Kickback"
              width={2000}
              height={1000}
              priority
              className="h-10 w-auto md:h-12"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-frost/80">
            {links.map((l) =>
              l.external ? (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ice transition-colors inline-flex items-center gap-1"
                >
                  {l.label}
                  <span aria-hidden className="text-ice/70">
                    ↗
                  </span>
                </a>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  className="hover:text-ice transition-colors"
                >
                  {l.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/tickets"
              className="btn-primary inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-semibold"
            >
              Tickets →
            </Link>

            {/* Hamburger — mobile only */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              className="md:hidden inline-flex items-center justify-center w-10 h-10 border border-white/20 bg-black/40 text-frost hover:border-ice hover:text-ice transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="square"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu takeover */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`md:hidden fixed inset-0 z-[60] transition-opacity duration-200 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/95 backdrop-blur-md"
          onClick={() => setMenuOpen(false)}
        />

        {/* Panel */}
        <div className="relative h-full flex flex-col">
          {/* Top bar inside menu */}
          <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
            <div className="font-mono text-[10px] uppercase tracking-widest text-ice flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#FF3E88] rounded-full animate-pulse" />
              menu / the kickback
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="inline-flex items-center justify-center w-10 h-10 border border-white/20 text-frost hover:border-ice hover:text-ice transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="square"
              >
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 overflow-y-auto px-6 py-10">
            <ul className="space-y-2">
              {links.map((l, i) =>
                l.external ? (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-baseline gap-4 py-4 border-b-2 border-white/10 hover:border-ice transition-colors"
                    >
                      <span className="font-mono text-xs text-frost/40 tabular-nums tracking-widest">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-4xl uppercase leading-none text-frost group-hover:text-ice transition-colors flex items-center gap-2">
                        {l.label}
                        <span className="text-ice/70 text-2xl">↗</span>
                      </span>
                    </a>
                  </li>
                ) : (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-baseline gap-4 py-4 border-b-2 border-white/10 hover:border-ice transition-colors"
                    >
                      <span className="font-mono text-xs text-frost/40 tabular-nums tracking-widest">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-4xl uppercase leading-none text-frost group-hover:text-ice transition-colors">
                        {l.label}
                      </span>
                    </Link>
                  </li>
                )
              )}
            </ul>

            {/* Primary CTA inside menu */}
            <div className="mt-10">
              <Link
                href="/tickets"
                onClick={() => setMenuOpen(false)}
                className="btn-primary flex items-center justify-center w-full px-6 py-4 rounded-full text-base font-bold uppercase tracking-wide"
              >
                Get Tickets →
              </Link>
            </div>

            {/* Footer meta */}
            <div className="mt-10 pt-6 border-t border-white/10 font-mono text-[10px] uppercase tracking-widest text-frost/50 flex flex-col gap-2">
              <span>atlanta · dec 11–13 · 2026</span>
              <span>a cxmmunity media tour</span>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
