import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { WhatsAppIcon, whatsappUrl } from "../common/Whatsapp.jsx";

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="scroll-mt-24 px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10 lg:pb-28"
    >
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-[#101f64] px-6 py-16 text-center text-white sm:rounded-[2.25rem] sm:px-12 sm:py-20 lg:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(86,128,255,0.38),transparent_48%),radial-gradient(ellipse_at_bottom_left,rgba(48,85,200,0.32),transparent_45%)]" />

          <div className="pointer-events-none absolute -right-16 -top-40 h-80 w-80 rounded-full border border-white/10 sm:-right-8" />

          <div className="pointer-events-none absolute -right-6 -top-28 h-64 w-64 rounded-full border border-white/10" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.23em] text-blue-200 sm:text-xs">
              Let&apos;s Create Something Great
            </p>

            <h2 className="font-display text-[clamp(2rem,4.2vw,3.5rem)] font-extrabold leading-tight tracking-[-0.055em]">
              Ready to give your marketing
              <br className="hidden sm:block" /> a clearer direction?
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-blue-100 sm:text-base sm:leading-8">
              Tell me what you&apos;re working toward. We can explore the
              marketing support and next steps that make sense for your
              business.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#142b86] shadow-[0_8px_24px_-16px_rgba(4,12,48,0.65)] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-[0_16px_30px_-16px_rgba(4,12,48,0.65)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:translate-y-0 sm:px-7"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
              Start a Conversation
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}