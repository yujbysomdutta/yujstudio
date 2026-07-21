import Reveal from "@/components/yuj/Reveal";
import { YUJ } from "@/constants/testIds/yuj";
import { MapPin, ArrowUpRight } from "lucide-react";

const MAP_QUERY = encodeURIComponent(
  "Dumdum Private Road Bus Stop, Kolkata 700074",
);
const MAP_EMBED = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;
const MAP_LINK = `https://www.google.com/maps?q=${MAP_QUERY}`;

export default function Location() {
  return (
    <section
      id="location"
      data-testid={YUJ.locationSection}
      className="relative bg-[#0B0B0B] py-28 md:py-40"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-4 mb-8">
            <span className="inline-block w-10 h-px bg-[#D4AF37]/60" />
            <span className="text-[11px] tracking-[0.4em] uppercase text-[#B8B8B8]">
              Find the Studio
            </span>
          </div>
          <h2 className="font-serif-display text-5xl md:text-7xl leading-[0.95] tracking-tight text-white max-w-5xl">
            A quiet room, tucked into{" "}
            <span className="italic text-[#E7C65C]">a loud city.</span>
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-20 grid grid-cols-12 gap-6 md:gap-10 items-stretch">
          <Reveal className="col-span-12 lg:col-span-5">
            <div className="h-full rounded-3xl border border-white/[0.06] bg-[#141414] p-8 md:p-10 flex flex-col">
              <div className="w-12 h-12 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#E7C65C]">
                <MapPin size={20} strokeWidth={1.25} />
              </div>
              <h3 className="mt-8 font-serif-display text-3xl md:text-4xl text-white leading-tight">
                Dumdum Private Road
                <br />
                <span className="italic text-[#E7C65C]">Bus Stop.</span>
              </h3>
              <div className="mt-6 space-y-1.5 text-[#B8B8B8]">
                <p>Kolkata — 700074</p>
                <p>West Bengal, India</p>
                <p className="text-[#F6F6F6]/90 mt-3">Near WoW Momo</p>
              </div>
              <div className="hairline my-8" />
              <ul className="space-y-3 text-sm text-[#B8B8B8]">
                <li className="flex justify-between gap-6">
                  <span>Mon — Fri</span>
                  <span className="text-[#F6F6F6]/90">06:00 — 21:00</span>
                </li>
                <li className="flex justify-between gap-6">
                  <span>Sat — Sun</span>
                  <span className="text-[#F6F6F6]/90">07:00 — 20:00</span>
                </li>
              </ul>
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noreferrer"
                data-testid={YUJ.ctaMap}
                className="btn-ghost mt-10 self-start"
              >
                Open in Maps
                <ArrowUpRight size={14} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="col-span-12 lg:col-span-7">
            <div className="h-full rounded-3xl border border-[#D4AF37]/15 overflow-hidden relative">
              <iframe
                title="Yuj Studio — Location"
                src={MAP_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[420px] md:h-full min-h-[420px] grayscale contrast-[1.05] brightness-[0.65]"
                style={{ border: 0 }}
              />
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-[#D4AF37]/10 rounded-3xl" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
