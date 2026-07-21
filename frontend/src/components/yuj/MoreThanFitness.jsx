import Reveal from "@/components/yuj/Reveal";
import { YUJ } from "@/constants/testIds/yuj";
import { Building2, Users, Handshake, ArrowUpRight } from "lucide-react";

const CARDS = [
  {
    id: "rental",
    icon: Building2,
    label: "Studio Rental",
    title: "Rent a studio that already breathes.",
    lines: [
      "Dance rehearsals",
      "Fitness classes",
      "Workshops",
      "Events",
      "Photo & film shoots",
    ],
    image:
      "https://images.pexels.com/photos/6339495/pexels-photo-6339495.jpeg?auto=compress&cs=tinysrgb&w=940",
  },
  {
    id: "trainers",
    icon: Users,
    label: "Professional Trainer Services",
    title: "Certified instructors, delivered.",
    lines: [
      "Gyms",
      "Fitness studios",
      "Schools",
      "Corporate wellness",
      "Housing communities",
    ],
    image:
      "https://images.pexels.com/photos/37963580/pexels-photo-37963580.jpeg?auto=compress&cs=tinysrgb&w=940",
  },
  {
    id: "collabs",
    icon: Handshake,
    label: "Collaborations",
    title: "Partner with a wellness brand.",
    lines: [
      "Brand collaborations",
      "Fitness events",
      "Corporate wellness",
      "Schools",
      "NGO & community events",
    ],
    image:
      "https://images.pexels.com/photos/8957646/pexels-photo-8957646.jpeg?auto=compress&cs=tinysrgb&w=940",
  },
];

export default function MoreThanFitness() {
  return (
    <section
      id="more"
      data-testid={YUJ.moreThanFitness}
      className="relative bg-[#0B0B0B] py-28 md:py-40"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-4 mb-8">
            <span className="inline-block w-10 h-px bg-[#D4AF37]/60" />
            <span className="text-[11px] tracking-[0.4em] uppercase text-[#B8B8B8]">
              More Than a Fitness Studio
            </span>
          </div>
          <h2 className="font-serif-display text-5xl md:text-7xl leading-[0.95] tracking-tight text-white max-w-5xl">
            A space, a network, a{" "}
            <span className="italic text-[#E7C65C]">shared vision.</span>
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">
          {CARDS.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.id} delay={i * 0.08}>
                <article
                  data-testid={YUJ.featureCard(c.id)}
                  className="lift group h-full rounded-3xl border border-white/[0.06] bg-[#141414] overflow-hidden flex flex-col"
                >
                  {/* Image with spotlight & clipped frame */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.label}
                      className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-[filter,transform] duration-[1200ms] group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0B0B]/50 to-[#0B0B0B]" />
                    <div className="absolute top-5 left-5 flex items-center gap-2 text-[10px] tracking-[0.32em] uppercase text-[#E7C65C]">
                      <span className="w-6 h-px bg-[#D4AF37]/70" />
                      0{i + 1} / 03
                    </div>
                    <div className="absolute bottom-5 left-5 w-11 h-11 rounded-full border border-[#D4AF37]/50 bg-[#0B0B0B]/60 backdrop-blur flex items-center justify-center text-[#E7C65C]">
                      <Icon size={18} strokeWidth={1.25} />
                    </div>
                  </div>
                  <div className="p-7 md:p-8 flex-1 flex flex-col">
                    <p className="text-[10px] tracking-[0.32em] uppercase text-[#B8B8B8]">
                      {c.label}
                    </p>
                    <h3 className="font-serif-display text-3xl md:text-4xl mt-3 text-white leading-tight">
                      {c.title}
                    </h3>
                    <ul className="mt-6 space-y-2.5">
                      {c.lines.map((l) => (
                        <li
                          key={l}
                          className="flex items-center gap-3 text-[#B8B8B8] text-sm"
                        >
                          <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                          {l}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contact"
                      className="mt-8 inline-flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase text-[#E7C65C] self-start"
                    >
                      Enquire
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
