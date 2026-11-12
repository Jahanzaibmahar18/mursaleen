
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import apixLogo from "../../assets/apix-logo.jpg";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Social Media Marketing",
  "SEO",
  "Branding",
  "Content Creation",
  "Digital Advertising",
  "Marketing Strategy",
  "Business Growth",
];

const socials = [
  {
    Icon: FaFacebookF,
    href: "https://www.facebook.com/YOUR-FACEBOOK-PAGE",
    name: "Facebook",
  },
  {
    Icon: FaInstagram,
    href: "https://www.instagram.com/YOUR-INSTAGRAM-USERNAME",
    name: "Instagram",
  },
  {
    Icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/YOUR-LINKEDIN-PROFILE",
    name: "LinkedIn",
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className="relative overflow-hidden bg-[#09143a] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-48 h-[26rem] w-[26rem] rounded-full bg-blue-500/10 blur-[100px]"
      />

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-8 sm:pt-20 lg:px-10"
      >
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_1fr_1.15fr] lg:gap-10">

          <div>
            <a
              href="#home"
              className="group inline-flex rounded-xl bg-white px-3 py-2 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-18px_rgba(115,170,255,0.65)]"
              aria-label="Apix Marketing Agency home"
            >
              <img
                src={apixLogo}
                alt="Apix Marketing Agency"
                className="h-auto w-[158px] transition-transform duration-300 group-hover:scale-[1.025] motion-reduce:transform-none"
                width="214"
                height="79"
                loading="lazy"
              />
            </a>

            <p className="mt-6 max-w-xs text-sm leading-7 text-blue-100/70">
              Mursaleen Bilal helps brands shape a clearer digital presence
              through thoughtful marketing, creative direction, and strategy.
            </p>

            <div className="mt-6 flex gap-2.5">
              {socials.map(({ Icon, href, name }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  title={name}
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-blue-100 transition duration-300 hover:-translate-y-1 hover:border-blue-300/50 hover:bg-blue-500/20 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
                >
                  <Icon
                    size={17}
                    className="transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold tracking-wide text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex w-fit items-center gap-2 text-sm text-blue-100/65 transition duration-300 hover:translate-x-0.5 hover:text-white focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
                >
                  <ArrowRight
                    size={13}
                    className="transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-sm font-semibold tracking-wide text-white">
              Our Services
            </h3>

            <div className="flex flex-col gap-3">
              {services.map((service) => (
                <a
                  key={service}
                  href="#services"
                  className="w-fit text-sm text-blue-100/65 transition duration-300 hover:translate-x-0.5 hover:text-white focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-semibold tracking-wide text-white">
              Get In Touch
            </h3>

            <p className="mb-5 text-sm leading-7 text-blue-100/65">
              Have a project in mind? We'd love to hear about your ideas.
            </p>

            <a
              href="mailto:mursaleen78678682malik@gmail.com"
              className="group mb-4 flex w-fit items-start gap-3 text-sm text-blue-100/75 transition duration-300 hover:translate-x-0.5 hover:text-white focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
            >
              <Mail
                size={17}
                className="mt-0.5 shrink-0 text-blue-300 transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              />

              <span className="break-all">
                mursaleen78678682malik@gmail.com
              </span>
            </a>

            <div className="flex items-center gap-3 text-sm text-blue-100/75">
              <MapPin
                size={17}
                className="shrink-0 text-blue-300"
                aria-hidden="true"
              />
              Available for worldwide projects
            </div>

            <a
              href="#contact"
              className="group mt-6 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-white focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
            >
              Let's Work Together

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-center text-xs text-blue-100/50 sm:mt-14 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © {currentYear} Apix Marketing Agency. All rights reserved.
          </p>

          <p className="transition-colors duration-300 hover:text-blue-100/80">
            Designed with creativity and purpose.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
