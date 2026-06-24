"use client";

import { useState, useEffect } from "react";
import { SITE_BASE } from "@/lib/config";

const PHONE = "(555) 843-2837";
const NAV_LINKS = [
  { label: "Why Us",     href: "#why-us" },
  { label: "Services",   href: "#services" },
  { label: "Properties", href: "#properties" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-brand-black/95 backdrop-blur-sm shadow-[0_2px_16px_rgba(0,0,0,0.6)]" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        <a href="#" aria-label="Beaver Pest Defense — home"
           className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime rounded">
          <img
            src={`${SITE_BASE}/logo.png`}
            alt="Beaver Pest Defense"
            width={72}
            height={72}
            className="h-16 w-auto"
          />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}
                 className="font-display font-bold text-sm tracking-widest uppercase text-brand-silver hover:text-brand-lime transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a href={`tel:${PHONE.replace(/\D/g, "")}`}
             className="text-sm text-brand-silver hover:text-white transition-colors font-sans">
            {PHONE}
          </a>
          <a href="#contact"
             className="inline-flex items-center gap-1.5 bg-brand-lime hover:bg-brand-lime-light text-brand-black font-display font-bold text-sm tracking-widest uppercase px-5 py-2.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black">
            Get a Quote
          </a>
        </div>

        <button onClick={() => setOpen(!open)}
                className="md:hidden text-white p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime"
                aria-expanded={open} aria-label="Toggle menu">
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-brand-black border-t border-brand-border">
          <ul className="px-6 py-5 space-y-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}
                   className="block font-display font-bold text-lg uppercase tracking-widest text-brand-silver hover:text-brand-lime transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact"
                 className="flex items-center justify-center bg-brand-lime text-brand-black font-display font-bold text-sm tracking-widest uppercase py-3 mt-2">
                Get a Free Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );
}
