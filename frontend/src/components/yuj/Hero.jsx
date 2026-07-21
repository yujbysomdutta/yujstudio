import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { YUJ } from "@/constants/testIds/yuj";

const LOGO =
  "https://customer-assets-gfyr7b9c.emergentagent.net/job_b3b57860-b6e9-4a11-acbe-f159cf531133/artifacts/hyuqhj0x_Yuj_Logo_Circle.png";

const HEADLINE_LINES = ["Where Movement", "Meets Mindfulness"];

const CHIPS = [
  "Yoga",
  "Aerial Yoga",
  "Zumba",
  "Dance",
  "Aerobics",
  "Drawing",
  "Teacher Training",
  "Studio Rental",
];

const lineParent = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};
const lineChild = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 1.05, ease: [0.2, 0.7, 0.2, 1] },
  },
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const logoY = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);
  const logoScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      data-testid={YUJ.heroSection}
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#0B0B0B] grain"
    >
      {/* Hex grid layer */}
      <motion.div
        style={{ y: bgY }}
        aria-hidden
        className="absolute inset-0 hex-grid opacity-70"
      />
      {/* Spotlight */}
      <div aria-hidden className="absolute inset-0 spotlight" />
      {/* Vignette */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, transparent 40%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 pt-40 md:pt-40 pb-24 md:pb-32"
      >
        {/* Top rail */}
        <div className="flex items-center justify-between mb-14 md:mb-20">
          <div className="flex items-center gap-3 text-[11px] tracking-[0.28em] uppercase text-[#B8B8B8]">
            <span className="inline-block w-6 h-px bg-[#D4AF37]/60" />
            Est. Kolkata · India
          </div>
          <div className="hidden md:flex items-center gap-3 text-[11px] tracking-[0.28em] uppercase text-[#B8B8B8]">
            A Studio of Breath & Motion
            <span className="inline-block w-6 h-px bg-[#D4AF37]/60" />
          </div>
        </div>

        {/* Logo */}
        <motion.div
          style={{ y: logoY, scale: logoScale }}
          className="flex justify-center mb-10 md:mb-12"
        >
          <motion.img
            data-testid={YUJ.heroLogo}
            src={LOGO}
            alt="Yuj Studio Logo"
            initial={{ opacity: 0, scale: 0.7, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.6, ease: [0.2, 0.7, 0.2, 1] }}
            className="w-40 h-40 md:w-52 md:h-52 rounded-full ring-1 ring-[#D4AF37]/40 shadow-[0_30px_120px_-20px_rgba(212,175,55,0.35)]"
          />
        </motion.div>

        {/* Headline — masked line-by-line reveal */}
        <motion.h1
          style={{ y: textY }}
          variants={lineParent}
          initial="hidden"
          animate="visible"
          className="font-serif-display text-center leading-[0.95] tracking-tight text-[#F6F6F6] text-[3rem] sm:text-6xl md:text-7xl lg:text-[7.5rem] xl:text-[8.5rem]"
        >
          {HEADLINE_LINES.map((line, i) => (
            <span
              key={i}
              className="block overflow-hidden"
              style={{ paddingBottom: "0.06em" }}
            >
              <motion.span variants={lineChild} className="inline-block">
                {i === 0 ? (
                  <>
                    Where <span className="italic text-[#E7C65C]">Movement</span>
                  </>
                ) : (
                  <>
                    Meets{" "}
                    <span className="italic text-[#E7C65C]">Mindfulness</span>
                  </>
                )}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-8 md:mt-10 text-center text-[#B8B8B8] tracking-[0.5em] uppercase text-xs md:text-sm"
        >
          Move · Learn · Create
        </motion.p>

        {/* Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.05 }}
          className="mt-12 md:mt-14 flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto"
        >
          {CHIPS.map((c) => (
            <span key={c} className="chip">
              {c}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-14 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            data-testid={YUJ.ctaBookTrial}
            className="btn-gold"
          >
            Book a Free Trial <span className="arrow">→</span>
          </a>
          <a
            href="#programs"
            data-testid={YUJ.ctaExplorePrograms}
            className="btn-ghost"
          >
            Explore Programs
          </a>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.6 }}
          className="mt-20 md:mt-24 flex items-center justify-center gap-3 text-[#B8B8B8]"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase">
            Scroll · The line begins
          </span>
        </motion.div>
      </motion.div>

      {/* Bottom fade to next section */}
      <div
        aria-hidden
        className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-b from-transparent to-[#0B0B0B] pointer-events-none z-10"
      />
    </section>
  );
}
