"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/about", label: "Sobre nosotros" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy border-b-4 border-yellow">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-4 py-4 lg:px-8 lg:py-5">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/brand/logo/logo-horizontal-amarillo.svg"
            alt="Progheads Paraguay"
            width={220}
            height={60}
            className="w-[150px] sm:w-[180px] lg:w-[260px] h-auto"
            priority
          />
        </Link>

        <ul className="hidden md:flex gap-6 lg:gap-10 font-brand font-medium uppercase tracking-wide text-base lg:text-lg">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-yellow hover:opacity-70 transition-opacity"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 shrink-0"
        >
          <span
            className={`block h-0.5 w-6 bg-yellow transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-yellow transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-yellow transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col items-center gap-6 font-brand font-medium uppercase tracking-wide text-lg pb-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-yellow hover:opacity-70 transition-opacity"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
