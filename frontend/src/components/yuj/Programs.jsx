import Reveal from "@/components/yuj/Reveal";
import { YUJ } from "@/constants/testIds/yuj";
import {
  Feather,
  Wind,
  Music2,
  HeartPulse,
  Sparkles,
  Flame,
  PenLine,
  GraduationCap,
  Baby,
  ArrowUpRight,
} from "lucide-react";

const PROGRAMS = [
  {
    id: "yoga",
    icon: Feather,
    title: "Yoga",
    desc: "Traditional asana, pranayama and stillness. For every body, every breath.",
  },
  {
    id: "aerial-yoga",
    icon: Wind,
    title: "Aerial Yoga",
    desc: "Suspended flows in silks — decompress the spine, expand the heart.",
  },
  {
    id: "zumba",
    icon: Music2,
    title: "Zumba",
    desc: "Latin rhythms, joyful sweat. Community in every beat.",
  },
  {
    id: "aerobics",
    icon: HeartPulse,
    title: "Aerobics",
    desc: "Cardio choreography that lifts the heart and clears the mind.",
  },
  {
    id: "indian-dance",
    icon: Sparkles,
    title: "Indian Dance",
    desc: "Classical and semi-classical forms — grace, story, tradition.",
  },
  {
    id: "western-dance",
    icon: Flame,
    title: "Western Dance",
    desc: "Contemporary, hip-hop, and cinematic choreography.",
  },
  {
    id: "drawing",
    icon: PenLine,
    title: "Drawing Classes",
    desc: "Pencil, charcoal, watercolour — where movement of the hand becomes art.",
  },
  {
    id: "teacher-training",
    icon: GraduationCap,
    title: "Yoga Teacher Training",
    desc: "Certified curriculum for those who wish to teach — and to be taught.",
  },
  {
    id: "kids",
    icon: Baby,
    title: "Kids Programs",
    soon: true,
    desc: "Movement, mindfulness and imagination — designed for growing minds.",
  },
];

export default function Programs() {
  return (
    <section
      id="programs"
      data-testid={YUJ.programsSection}
      className="relative bg-[#0B0B0B] py-28 md:py-40"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12 md:mb-16">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-block w-10 h-px bg-[#D4AF37]/60" />
                <span className="text-[11px] tracking-[0.4em] uppercase text-[#B8B8B8]">
                  Our Practices · 09
                </span>
              </div>
              <h2 className="font-serif-display text-5xl md:text-7xl leading-[0.95] tracking-tight text-white">
                A curriculum for the{" "}
                <span className="italic text-[#E7C65C]">whole self.</span>
              </h2>
            </div>
            <p className="text-[#B8B8B8] max-w-md text-sm md:text-base leading-relaxed">
              Nine practices — each rooted in tradition, each open to
              beginners, each led by trainers who care.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {PROGRAMS.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.id} delay={i * 0.04}>
                <a
                  href="#contact"
                  data-testid={YUJ.programCard(p.id)}
                  className="group lift block h-full rounded-3xl border border-white/[0.06] bg-[#141414] p-7 md:p-9 relative overflow-hidden"
                >
                  {/* Subtle gold corner glow on hover */}
                  <div
                    aria-hidden
                    className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/10 blur-3xl transition-colors duration-700"
                  />
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#E7C65C] mb-8 md:mb-10 transition-transform duration-500 group-hover:rotate-[8deg]">
                    <Icon size={20} strokeWidth={1.25} />
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="chapter-num text-lg">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="hairline flex-1 opacity-40" />
                    {p.soon && (
                      <span className="text-[10px] tracking-[0.28em] uppercase text-[#E7C65C]">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif-display text-3xl md:text-4xl mt-4 text-white leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-[#B8B8B8] text-sm md:text-[15px] leading-relaxed">
                    {p.desc}
                  </p>
                  <div className="mt-8 flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase text-[#E7C65C]/90">
                    Enquire
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
