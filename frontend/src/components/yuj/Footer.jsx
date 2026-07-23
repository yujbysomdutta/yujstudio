import { YUJ } from "@/constants/testIds/yuj";
import { Instagram, Facebook, MessageCircle, Mail } from "lucide-react";

const LOGO =
  "https://customer-assets-gfyr7b9c.emergentagent.net/job_b3b57860-b6e9-4a11-acbe-f159cf531133/artifacts/hyuqhj0x_Yuj_Logo_Circle.png";

const QUICK = [
  { id: "about", label: "About" },
  { id: "programs", label: "Programs" },
  { id: "more", label: "Studio Rental" },
  { id: "gallery", label: "Gallery" },
  { id: "founders", label: "Visionaries" },
  { id: "location", label: "Location" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      data-testid={YUJ.footer}
      className="relative bg-[#0B0B0B] pt-24 md:pt-32 pb-10 md:pb-14 border-t border-white/[0.06]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-center gap-3">
              <img
                src={LOGO}
                alt="Yuj Studio"
                className="w-12 h-12 rounded-full ring-1 ring-[#D4AF37]/40"
              />
              <div>
                <div className="font-serif-display text-xl text-white">
                  Yuj Studio
                </div>
                <div className="text-[10px] tracking-[0.28em] uppercase text-[#B8B8B8]">
                  Breath · Flow · Transform
                </div>
              </div>
            </div>
            <p className="mt-8 font-serif-display text-3xl md:text-4xl leading-[1.05] text-white max-w-md">
              Where movement meets{" "}
              <span className="italic text-[#E7C65C]">mindfulness.</span>
            </p>
          </div>

          <div className="col-span-6 md:col-span-3">
            <p className="text-[10px] tracking-[0.32em] uppercase text-[#B8B8B8] mb-6">
              Studio
            </p>
            <ul className="space-y-3">
              {QUICK.map((q) => (
                <li key={q.id}>
                  <a
                    href={`#${q.id}`}
                    className="text-[#F6F6F6]/90 hover:text-[#E7C65C] transition-colors duration-500 text-sm"
                  >
                    {q.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-4">
            <p className="text-[10px] tracking-[0.32em] uppercase text-[#B8B8B8] mb-6">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-[#F6F6F6]/90">
              <li>Dumdum Private Road Bus Stop</li>
              <li>Kolkata — 700074, Near WoW Momo</li>
              <li>+91 62908 11205</li>
              <li>yujbysomdutta@gmail.com</li>
            </ul>
            <div className="mt-8 flex items-center gap-3">
              {[
                { icon: MessageCircle, href: "https://wa.me/916290811205", label: "WhatsApp" },
                { icon: Instagram, href: "https://www.instagram.com/yujstudio.official/", label: "Instagram" },
                { icon: Facebook, href: "https://www.facebook.com/yujstudio", label: "Facebook" },
                { icon: Mail, href: "mailto:yujbysomdutta@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#E7C65C] hover:border-[#E7C65C] hover:-translate-y-0.5 transition-[transform,border-color] duration-500"
                >
                  <Icon size={16} strokeWidth={1.25} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hairline mt-16 md:mt-20" />

        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[10px] tracking-[0.28em] uppercase text-[#B8B8B8]">
          <p>© {year} Yuj Studio · All rights reserved..</p>
          <p className="text-[#F6F6F6]/60">
            Crafted with breath in Kolkata.
          </p>
        </div>
      </div>
    </footer>
  );
}
