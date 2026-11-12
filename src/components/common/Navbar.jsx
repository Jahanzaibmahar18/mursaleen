
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import apixLogo from "../../assets/apix-logo.jpg";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/70 bg-white/80 shadow-[0_8px_30px_-24px_rgba(16,35,90,0.35)] backdrop-blur-2xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-20 lg:px-10"
      >
        {/* Logo */}
        <a href="#home" className="group flex items-center" aria-label="Apix Marketing Agency home">
          <img
            src={apixLogo}
            alt="Apix Marketing Agency"
            className="h-auto w-[138px] transition-transform duration-300 group-hover:scale-[1.035] motion-reduce:transform-none sm:w-[158px]"
            width="214"
            height="79"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative py-2 text-[13px] font-medium text-slate-600 transition-colors hover:text-[#142b86] focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
            >
              {link.name}
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-[#3158cf] transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="group hidden min-h-11 items-center gap-2 rounded-full bg-[#142b86] px-5 py-3 text-[13px] font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#2448bc] hover:shadow-lg hover:shadow-blue-900/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 active:translate-y-0 md:flex"
        >
          Let&apos;s Talk{" "}
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-100 bg-white/80 text-[#142b86] transition duration-300 hover:rotate-3 hover:border-blue-200 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 active:scale-95 md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.22, ease: "easeOut" }}
            className="overflow-hidden border-t border-blue-100/80 bg-white/95 px-5 backdrop-blur-xl md:hidden"
          >
          <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-[#142b86] focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-700"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#142b86] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#2448bc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            >
              Get In Touch <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
