import Reveal from "@/components/yuj/Reveal";
import { YUJ } from "@/constants/testIds/yuj";

const FOUNDERS = [
  {
    id: "founder-1",
    name: "Somdutta Majumder",
    honorific: "Emon",
    role: "Founder · Managing Director",
    image:
      "https://customer-assets-eiarnc6j.emergentagent.net/job_yuj-studio-1/artifacts/1p9utkca_Emon.png",
    bio: "With a Master's in Yoga, Somdutta transformed her own recovery from a slipped disc into a lifelong mission. Today, she combines yoga therapy, movement, and compassion to help people build strength, confidence, and healthier lives.",
    mission:
      "Helping people rediscover strength through movement, yoga and mindful living.",
    vision:
      "To make Yuj Studio a trusted destination for wellness, learning and transformation.",
  },
  {
    id: "founder-2",
    name: "Sourav Saha",
    honorific: null,
    role: "Co-Founder · Strategy & Digital Advisor",
    image:
      "https://customer-assets-eiarnc6j.emergentagent.net/job_yuj-studio-1/artifacts/z81p1zkz_Sourav.png",
    bio: "With a background in consulting and technology, Sourav guides Yuj Studio's digital experience, branding and strategic initiatives to help build a modern, community-driven wellness brand.",
    mission:
      "Empowering wellness brands through purposeful strategy and digital innovation.",
    vision:
      "To make Yuj Studio a trusted and inspiring wellness brand for every community.",
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
                      className="absolute inset-0 w-full h-full object-cover object-top grayscale contrast-[1.05] brightness-95 transition-transform duration-[1200ms] group-hover:scale-[1.03]"
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
                      {f.honorific && (
                        <span className="italic text-[#E7C65C]">
                          {" "}
                          ({f.honorific})
                        </span>
                      )}
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
