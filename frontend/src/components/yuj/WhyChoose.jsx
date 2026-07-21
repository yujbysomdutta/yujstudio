import Reveal from "@/components/yuj/Reveal";
import { YUJ } from "@/constants/testIds/yuj";
import {
  Users2,
  BadgeCheck,
  UsersRound,
  Sprout,
  HeartHandshake,
  Palette,
  Sparkles,
  Clock,
} from "lucide-react";

const ITEMS = [
  { id: "inclusive", icon: Users2, title: "Inclusive for Men & Women", desc: "Every practice, every hour — welcoming to all." },
  { id: "certified", icon: BadgeCheck, title: "Certified Trainers", desc: "Instructors trained in the tradition and the science." },
  { id: "all-ages", icon: UsersRound, title: "All Age Groups", desc: "From teens finding balance to elders finding grace." },
  { id: "beginners", icon: Sprout, title: "Beginner Friendly", desc: "Start slow. Start scared. Start today." },
  { id: "holistic", icon: HeartHandshake, title: "Holistic Wellness", desc: "Body, breath, and mind — held together." },
  { id: "creative", icon: Palette, title: "Creative Learning", desc: "Drawing, dance and expression — beyond fitness." },
  { id: "community", icon: Sparkles, title: "Positive Community", desc: "A room full of people quietly cheering you on." },
  { id: "flexible", icon: Clock, title: "Flexible Timings", desc: "Morning, evening, weekend — a schedule that fits your life." },
];

export default function WhyChoose() {
  return (
    <section
      id="why"
      data-testid={YUJ.whyChoose}
      className="relative bg-[#0B0B0B] py-28 md:py-40"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <Reveal>
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-end mb-14 md:mb-20">
            <div className="col-span-12 md:col-span-7">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-block w-10 h-px bg-[#D4AF37]/60" />
                <span className="text-[11px] tracking-[0.4em] uppercase text-[#B8B8B8]">
                  Why Choose Yuj
                </span>
              </div>
              <h2 className="font-serif-display text-5xl md:text-7xl leading-[0.95] tracking-tight text-white">
                Eight quiet reasons,
                <br />
                <span className="italic text-[#E7C65C]">felt in the first class.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="text-[#B8B8B8] text-sm md:text-base leading-relaxed">
                We built Yuj for the people we couldn&rsquo;t find studios for — the
                curious, the beginners, the busy, the seasoned. Everyone. Every
                shape of practice.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ITEMS.map((it, i) => {
            const Icon = it.icon;
            return (
              <Reveal key={it.id} delay={i * 0.04}>
                <div
                  data-testid={YUJ.whyCard(it.id)}
                  className="lift group h-full rounded-2xl border border-white/[0.06] bg-[#141414] p-6 md:p-7 relative overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-11 h-11 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#E7C65C] transition-transform duration-500 group-hover:-rotate-6">
                      <Icon size={18} strokeWidth={1.25} />
                    </div>
                    <span className="chapter-num text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-serif-display text-xl md:text-2xl text-white leading-snug">
                    {it.title}
                  </h3>
                  <p className="mt-3 text-[#B8B8B8] text-sm leading-relaxed">
                    {it.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
