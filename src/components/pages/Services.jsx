
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Megaphone,
  Palette,
  Sparkles,
  Zap,
  ShieldCheck,
  TrendingUp,
  Search,
  Clapperboard,
  MousePointerClick,
  Lightbulb,
  Target,
  MonitorPlay,
} from "lucide-react";

const services = [
  {
    icon: Megaphone,
    number: "01",
    title: "Social Media Marketing",
    description:
      "Purposeful social media planning and content that helps your brand show up consistently and connect with its audience.",
  },
  {
    icon: Search,
    number: "02",
    title: "Search Engine Optimization",
    description:
      "Practical on-page and content-focused SEO to make your website easier to discover through search.",
  },
  {
    icon: Palette,
    number: "03",
    title: "Branding",
    description:
      "A distinctive brand identity and voice that gives your business a clear, recognizable presence.",
  },
  {
    icon: Clapperboard,
    number: "04",
    title: "Content Creation",
    description:
      "Useful, engaging content shaped around your message, audience, and the channels you use.",
  },
  {
    icon: MousePointerClick,
    number: "05",
    title: "Digital Advertising",
    description:
      "Strategic digital advertising campaigns designed to reach the right audience and generate meaningful results.",
  },
  {
    icon: Target,
    number: "06",
    title: "Meta Ads",
    description:
      "Targeted Facebook and Instagram advertising campaigns focused on brand awareness, leads, engagement, and conversions.",
  },
  {
    icon: Search,
    number: "07",
    title: "Google Ads",
    description:
      "Google Search, Display, and YouTube advertising campaigns that connect your business with people actively looking for your services.",
  },
  {
    icon: MonitorPlay,
    number: "08",
    title: "TikTok Ads",
    description:
      "Creative TikTok advertising campaigns that help your brand reach new audiences and drive engagement and conversions.",
  },
  {
    icon: TrendingUp,
    number: "09",
    title: "PPC & Paid Search",
    description:
      "Performance-focused paid search campaigns with smart targeting, budget optimization, and conversion tracking.",
  },
  {
    icon: Lightbulb,
    number: "10",
    title: "Marketing Strategy",
    description:
      "A focused marketing plan that connects business priorities with practical channels and next steps.",
  },
  {
    icon: TrendingUp,
    number: "11",
    title: "Business Growth",
    description:
      "A considered approach to growing your digital presence and finding meaningful opportunities to move forward.",
  },
];

const benefits = [
  {
    icon: Sparkles,
    title: "Strategy-led",
    text: "Start with your business priorities, then choose the marketing direction that fits.",
  },
  {
    icon: Zap,
    title: "Creative with purpose",
    text: "Give your brand a consistent voice across content, campaigns, and channels.",
  },
  {
    icon: ShieldCheck,
    title: "Focused on your goals",
    text: "Keep the work practical, relevant to your audience, and connected to growth.",
  },
];

export default function Services() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <section
        id="services"
        className="scroll-mt-20 bg-[#f5f7fc] py-20 sm:py-24 lg:py-22"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            className="mx-auto mb-12 max-w-5xl text-center sm:mb-14"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.23em] text-[#3158cf] sm:text-xs">
              How I Can Help
            </p>

            <h2 className="font-display text-[clamp(2rem,4.2vw,3.5rem)] font-extrabold leading-tight tracking-[-0.055em] text-[#101b38]">
              Marketing Built for{" "}
              <span className="text-[#3158cf]">
                Your Next Chapter.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-8 text-slate-600">
              Focused digital marketing services to help your business build
              its presence, tell its story, and find its next opportunity.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.number}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{
                    duration: 0.65,
                    delay: (index % 3) * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <motion.article
                    whileHover={shouldReduceMotion ? undefined : { y: -5 }}
                    transition={{ type: "spring", stiffness: 280, damping: 22 }}
                    className="group relative h-full overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white p-6 transition-[border-color,box-shadow] duration-300 hover:border-blue-200 hover:shadow-[0_24px_55px_-35px_rgba(18,45,120,0.35)] sm:p-7"
                  >
                    <div className="absolute right-0 top-0 h-32 w-32 translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-50 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative mb-8 flex items-start justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf2ff] text-[#17359a] transition duration-300 group-hover:rotate-[-4deg] group-hover:scale-105 group-hover:bg-[#17359a] group-hover:text-white">
                        <Icon
                          size={23}
                          strokeWidth={1.7}
                          className="transition-transform duration-300 group-hover:scale-105"
                          aria-hidden="true"
                        />
                      </span>

                      <span className="font-display text-sm font-semibold tracking-widest text-slate-300">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="relative text-lg font-semibold tracking-tight text-[#101b38] sm:text-xl">
                      {service.title}
                    </h3>

                    <p className="relative mt-3 min-h-[84px] text-sm leading-7 text-slate-600">
                      {service.description}
                    </p>

                    <a
                      href="#contact"
                      className="group/link relative mt-5 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-[#17359a] focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                    >
                      Get Started
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  </motion.article>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            className="mb-10 text-center sm:mb-10"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.23em] text-[#3158cf] sm:text-xs">
              A thoughtful way to work
            </p>

            <h2 className="font-display text-[clamp(2rem,4.2vw,3.5rem)] font-extrabold leading-tight tracking-[-0.055em] text-[#101b38]">
              Built around your{" "}
              <span className="text-[#3158cf]">business.</span>
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <motion.article
                    whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                    transition={{ type: "spring", stiffness: 280, damping: 22 }}
                    className="group h-full rounded-[1.5rem] border border-slate-200/80 bg-white p-7 text-center transition-[border-color,box-shadow] duration-300 hover:border-blue-200 hover:shadow-[0_20px_50px_-35px_rgba(18,45,120,0.35)] sm:p-8"
                  >
                    <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#edf2ff] text-[#17359a] transition duration-300 group-hover:rotate-[-4deg] group-hover:scale-105 group-hover:bg-[#17359a] group-hover:text-white">
                      <Icon
                        size={25}
                        className="transition-transform duration-300 group-hover:scale-105"
                        aria-hidden="true"
                      />
                    </span>

                    <h3 className="text-lg font-semibold text-[#101b38]">
                      {item.title}
                    </h3>

                    <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-slate-600">
                      {item.text}
                    </p>
                  </motion.article>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
