import Reveal from "@/components/yuj/Reveal";
import { YUJ } from "@/constants/testIds/yuj";

const CHAPTERS = [
  {
    n: "01",
    title: "A studio unlike any other.",
    body: "Yuj is a Sanskrit word — the root of Yoga — meaning to unite. Here, breath meets rhythm, discipline meets play, and the body remembers what stillness feels like.",
  },
  {
    n: "02",
    title: "Movement as a language.",
    body: "From ashtanga flows to aerial silks, from Zumba to Indian classical dance, every practice is a way of speaking to yourself. We teach the vocabulary; you write the poem.",
  },
  {
    n: "03",
    title: "Creativity, wellness, community.",
    body: "Draw with a pencil, breathe with intention, dance with strangers who become friends. Yuj is where wellness and creativity are quietly, deliberately woven together.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      data-testid={YUJ.aboutSection}
      className="relative bg-[#0B0B0B] py-28 md:py-40 lg:py-52"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Section overline */}
        <Reveal>
          <div className="flex items-center gap-4 mb-14 md:mb-20">
            <span className="inline-block w-10 h-px bg-[#D4AF37]/60" />
            <span className="text-[11px] tracking-[0.4em] uppercase text-[#B8B8B8]">
              Manifesto · A Note from the Studio
            </span>
          </div>
        </Reveal>

        {/* Big statement */}
        <Reveal delay={0.05}>
          <h2 className="font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight max-w-6xl">
            We are not a gym.
            <br />
            <span className="italic text-[#E7C65C]">
              We are a practice of becoming.
            </span>
          </h2>
        </Reveal>

        {/* Chapters */}
        <div className="mt-20 md:mt-28 grid gap-14 md:gap-20">
          {CHAPTERS.map((ch, i) => (
            <Reveal key={ch.n} delay={i * 0.08}>
              <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
                <div className="col-span-12 md:col-span-3">
                  <div className="chapter-num text-6xl md:text-7xl lg:text-8xl">
                    {ch.n}
                  </div>
                  <div className="hairline w-16 mt-4" />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <h3 className="font-serif-display text-3xl md:text-4xl lg:text-5xl leading-tight text-white">
                    {ch.title}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-3 md:pt-3">
                  <p className="text-[#B8B8B8] leading-relaxed text-sm md:text-base">
                    {ch.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
