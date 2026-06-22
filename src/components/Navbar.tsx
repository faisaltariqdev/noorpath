"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/online-quran-classes", label: "Online Quran Classes" },
  { href: "/courses", label: "Courses" },
  { href: "/locations", label: "Locations" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About Us" },
  { href: "/founder", label: "Founder" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`navbar-np ${scrolled ? "scrolled" : ""}`}
      aria-label="Main navigation"
    >
      <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="logo-text no-underline">
          Noor<span className="path">Path</span>{" "}
          <span className="academy">Academy</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1 list-none m-0 p-0">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="nav-link-np">
                {l.label}
              </Link>
            </li>
          ))}
          <li className="ml-2">
            <Link href="/online-quran-classes#cta" className="btn-nav-cta">
              Free Trial
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white p-2"
          aria-label="Toggle navigation"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[rgba(10,50,35,.98)] backdrop-blur-sm px-4 pb-4 pt-2">
          <ul className="list-none m-0 p-0 flex flex-col gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="nav-link-np block py-2"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link
                href="/online-quran-classes#cta"
                className="btn-nav-cta inline-block"
                onClick={() => setOpen(false)}
              >
                Free Trial Class
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
