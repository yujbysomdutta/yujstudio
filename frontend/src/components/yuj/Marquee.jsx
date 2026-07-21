import { motion } from "framer-motion";
import { YUJ } from "@/constants/testIds/yuj";

const WORDS = [
  "Breathe",
  "Flow",
  "Transform",
  "Movement",
  "Mindfulness",
  "Breathe",
  "Flow",
  "Transform",
  "Movement",
  "Mindfulness",
];

export default function Marquee() {
  return (
    <section
      data-testid={YUJ.marqueeSection}
      aria-hidden
      className="relative bg-[#0B0B0B] overflow-hidden py-16 md:py-24"
    >
      <div className="hairline max-w-[1440px] mx-auto mb-16 md:mb-20" />
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{ duration: 60, ease: "linear", repeat: Infinity }}
        className="flex whitespace-nowrap gap-16 md:gap-24"
      >
        {[...WORDS, ...WORDS].map((w, i) => (
          <span
            key={i}
            className="marquee-txt text-[18vw] md:text-[14vw] leading-none inline-flex items-center gap-16 md:gap-24"
          >
            {w}
            <span className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#D4AF37] inline-block" />
          </span>
        ))}
      </motion.div>
      <div className="hairline max-w-[1440px] mx-auto mt-16 md:mt-20" />
    </section>
  );
}
