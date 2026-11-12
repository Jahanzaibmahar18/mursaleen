import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="scroll-mt-20 bg-white py-10 sm:py-10 lg:py-2"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24 lg:px-10">
        <motion.div
          className="relative mx-auto w-full max-w-xl lg:mx-0"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute -bottom-5 -left-5 -z-10 h-40 w-40 rounded-full bg-blue-100/70 blur-3xl" />

          <div className="group overflow-hidden rounded-[1.7rem] bg-blue-50 p-2 shadow-[0_28px_70px_-45px_rgba(15,35,90,0.45)] transition-[box-shadow,transform] duration-500 hover:-translate-y-1 hover:shadow-[0_34px_75px_-40px_rgba(15,35,90,0.5)] sm:rounded-[2rem] sm:p-3">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1100&q=85"
              alt="Marketing professionals working together"
              className="h-[340px] w-full rounded-[1.25rem] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transform-none sm:h-[470px] sm:rounded-[1.5rem]"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="absolute -bottom-5 right-3 rounded-2xl border border-white/70 bg-[#142b86] px-5 py-4 text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:-bottom-6 sm:right-0 sm:px-7 sm:py-5">
            <Sparkles size={23} className="mb-2 text-blue-200" aria-hidden="true" />
            <p className="font-display text-lg font-semibold">Apix Marketing.</p>
            <p className="mt-0.5 text-sm text-blue-100">Strategy with intention.</p>
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.23em] text-[#3158cf] sm:text-xs">
            Meet the person behind Apix
          </p>

          <h2 className="font-display text-[clamp(2rem,4.2vw,3.5rem)] font-extrabold leading-tight tracking-[-0.055em] text-[#101b38]">
            I&apos;m Mursaleen Bilal.
            <br />
            <span className="text-[#3158cf]">This is Apix.</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            I&apos;m the person behind Apix Marketing Agency, working with
            businesses to shape how they show up and grow online. My focus is
            digital marketing that makes a brand easier to understand and
            discover.
          </p>

          <p className="mt-4 text-base leading-8 text-slate-600">
            My work brings social media, search, branding, content, and
            advertising together with a practical marketing strategy—so each
            part supports a consistent brand presence.
          </p>

          <div className="mt-7 space-y-3.5">
            {[
              "Clear, considered marketing direction",
              "Creative work shaped around your brand",
              "Practical next steps for business growth",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-slate-700 sm:text-base">
                <CheckCircle2
                  size={19}
                  className="shrink-0 text-[#3158cf]"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="group mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#142b86] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#2448bc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
          >
            Work With Us
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}