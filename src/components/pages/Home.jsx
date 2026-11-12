
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  MoveDown,
} from "lucide-react";
import mursaleenPortrait from "../../assets/mursaleen .jpeg";

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section
      id="home"
      className="hero-grid relative isolate scroll-mt-24 overflow-hidden bg-[#f7f9ff] pb-20 pt-32 sm:pb-24 sm:pt-36 lg:min-h-[760px] lg:pb-28 lg:pt-30"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 -top-32 -z-10 h-[28rem] w-[28rem] rounded-full bg-blue-200/40 blur-[100px]"
        animate={shouldReduceMotion ? undefined : { y: [0, 18, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-10">
        <div className="relative z-10">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-blue-200/80 bg-white/75 px-4 py-2.5 text-[10px] font-bold tracking-[0.17em] text-[#17359a] shadow-sm backdrop-blur transition duration-300 hover:border-blue-300 hover:bg-white hover:shadow-md sm:text-xs"
          >
            <Sparkles size={15} aria-hidden="true" />
            DIGITAL MARKETING · BRAND GROWTH
          </motion.div>

          <motion.h1
            initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display max-w-3xl text-[clamp(3rem,8vw,6.2rem)] font-extrabold leading-[0.96] tracking-[-0.055em] text-[#101b38]"
          >
            Make your
            <br />
            next move{" "}
            <span className="text-[#3158cf]">matter.</span>
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:mt-8 sm:text-lg sm:leading-9"
          >
            I&apos;m Mursaleen Bilal, the person behind Apix Marketing Agency.
            I help businesses bring their brand, content, and digital
            marketing into clearer focus.
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-[#142b86] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_-12px_rgba(20,43,134,0.65)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#2448bc] hover:shadow-[0_18px_34px_-12px_rgba(20,43,134,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 sm:px-7"
            >
              Start Your Project
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>

            <a
              href="#services"
              className="group inline-flex min-h-12 items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-6 py-3.5 text-sm font-semibold text-[#17359a] transition duration-300 hover:-translate-y-0.5 hover:border-blue-400 hover:bg-white hover:shadow-[0_10px_24px_-16px_rgba(20,43,134,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 sm:px-7"
            >
              Explore Services
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-blue-200/70 pt-6 text-xs font-medium text-slate-600 sm:mt-12 sm:pt-7 sm:text-sm"
          >
            {["Social-first thinking", "Strategy-led creativity"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle2
                  size={17}
                  className="text-[#3158cf]"
                  aria-hidden="true"
                />
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            ref={imageRef}
            className="relative mx-auto w-full max-w-[540px] lg:ml-auto"
          >
            <div className="absolute -inset-4 rounded-[2rem] border border-blue-200/70 sm:-inset-6 sm:rounded-[2.5rem]" />

            <div className="group relative overflow-hidden rounded-[1.65rem] bg-[#111b68] p-2.5 shadow-[0_35px_90px_-35px_rgba(17,19,154,0.42)] transition-[box-shadow,transform] duration-500 hover:-translate-y-1 hover:shadow-[0_42px_100px_-35px_rgba(17,19,154,0.52)] sm:rounded-[2rem] sm:p-3">
              <motion.img
                style={shouldReduceMotion ? undefined : { y: imageY }}
                src={mursaleenPortrait}
                alt="Mursaleen Bilal, the person behind Apix Marketing Agency"
                className="h-[420px] w-full rounded-[1.2rem] object-cover object-[center_8%] transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transform-none sm:h-[560px] sm:rounded-[1.5rem]"
                fetchPriority="high"
                decoding="async"
              />

              <div className="pointer-events-none absolute inset-2.5 rounded-[1.2rem] bg-gradient-to-t from-[#09143A]/75 via-transparent to-transparent sm:inset-3 sm:rounded-[1.5rem]" />

              <div className="absolute bottom-7 left-7 right-7 text-white sm:bottom-9 sm:left-9">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-blue-100 sm:text-xs">
                  Mursaleen Bilal · Apix
                </p>
                <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  Strategy with a human touch.
                </h2>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="group mx-auto mt-16 hidden w-fit items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 transition-colors hover:text-[#17359a] lg:flex"
      >
        Discover Apix
        <MoveDown
          size={14}
          className="transition-transform duration-300 group-hover:translate-y-1"
          aria-hidden="true"
        />
      </a>
    </section>
  );
}
