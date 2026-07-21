import Reveal from "@/components/yuj/Reveal";
import { YUJ } from "@/constants/testIds/yuj";

const FOUNDERS = [
  {
    id: "founder-1",
    name: "Ananya Sen",
    role: "Co-Founder · Practice Lead",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=900&auto=format&fit=crop",
    bio: "A certified yoga teacher and dance-artist, Ananya trained in Rishikesh and taught across India before returning home to Kolkata to build a studio that felt like a sanctuary — for everyone.",
    mission:
      "To make wellness feel like a birthright, not a luxury — to keep the door open for every body.",
    vision:
      "A generation that treats breath, art and movement as daily rituals — not weekend escapes.",
  },
  {
    id: "founder-2",
    name: "Arjun Roy",
    role: "Co-Founder · Studio Director",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=900&auto=format&fit=crop",
    bio: "A designer turned fitness entrepreneur, Arjun believes a studio is a stage. He shapes every corner of Yuj — the light, the sound, the silence — so that practice can happen without friction.",
    mission:
      "To build a space so intentional it disappears — leaving only the practitioner and the practice.",
    vision:
      "Yuj as a network of neighbourhood wellness studios — one careful room at a time.",
  },
];

export default function Founders() {
  return (
    <section
      id="founders"
      data-testid={YUJ.foundersSection}
      className="relative bg-[#0B0B0B] py-28 md:py-40"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-4 mb-8">
            <span className="inline-block w-10 h-px bg-[#D4AF37]/60" />
            <span className="text-[11px] tracking-[0.4em] uppercase text-[#B8B8B8]">
              Meet the Visionaries
            </span>
          </div>
          <h2 className="font-serif-display text-5xl md:text-7xl leading-[0.95] tracking-tight text-white max-w-5xl">
            The hands that hold{" "}
            <span className="italic text-[#E7C65C]">the room together.</span>
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {FOUNDERS.map((f, i) => (
            <Reveal key={f.id} delay={i * 0.1}>
              <article
                data-testid={YUJ.founderCard(f.id)}
                className="lift group rounded-3xl border border-white/[0.06] bg-[#141414] overflow-hidden"
              >
                <div className="grid grid-cols-12 gap-0">
                  <div className="col-span-12 md:col-span-5 relative aspect-[4/5] md:aspect-auto overflow-hidden">
                    <img
                      src={f.image}
                      alt={f.name}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-[filter,transform] duration-[1200ms] group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r md:from-transparent md:to-[#141414]/60" />
                    <div className="absolute top-5 left-5 text-[10px] tracking-[0.32em] uppercase text-[#E7C65C] flex items-center gap-2">
                      <span className="w-6 h-px bg-[#D4AF37]/70" />
                      0{i + 1} / 02
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-7 p-8 md:p-10 flex flex-col">
                    <p className="text-[10px] tracking-[0.32em] uppercase text-[#B8B8B8]">
                      {f.role}
                    </p>
                    <h3 className="font-serif-display text-4xl md:text-5xl mt-2 text-white leading-tight">
                      {f.name}
                    </h3>
                    <p className="mt-5 text-[#B8B8B8] text-sm md:text-[15px] leading-relaxed">
                      {f.bio}
                    </p>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <p className="text-[10px] tracking-[0.32em] uppercase text-[#E7C65C] mb-2">
                          Mission
                        </p>
                        <p className="text-[#F6F6F6]/90 text-sm leading-relaxed">
                          {f.mission}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] tracking-[0.32em] uppercase text-[#E7C65C] mb-2">
                          Vision
                        </p>
                        <p className="text-[#F6F6F6]/90 text-sm leading-relaxed">
                          {f.vision}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
