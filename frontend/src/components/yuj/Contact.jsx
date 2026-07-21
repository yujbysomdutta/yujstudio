import Reveal from "@/components/yuj/Reveal";
import { YUJ } from "@/constants/testIds/yuj";
import {
  Phone,
  Mail,
  Instagram,
  Facebook,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

const WA_NUMBER = "919999999999"; // placeholder
const WA_MSG = encodeURIComponent(
  "Hello Yuj Studio, I'd like to book a free trial class.",
);
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;
const PHONE = "+91 99999 99999";
const EMAIL = "hello@yujstudio.in";

const LINKS = [
  {
    id: "whatsapp",
    testId: YUJ.ctaWhatsapp,
    label: "WhatsApp",
    value: "Chat with us",
    icon: MessageCircle,
    href: WA_LINK,
  },
  {
    id: "phone",
    testId: YUJ.ctaPhone,
    label: "Phone",
    value: PHONE,
    icon: Phone,
    href: `tel:${PHONE.replace(/\s+/g, "")}`,
  },
  {
    id: "email",
    testId: YUJ.ctaEmail,
    label: "Email",
    value: EMAIL,
    icon: Mail,
    href: `mailto:${EMAIL}`,
  },
  {
    id: "instagram",
    testId: YUJ.ctaInstagram,
    label: "Instagram",
    value: "@yujstudio",
    icon: Instagram,
    href: "https://instagram.com/yujstudio",
  },
  {
    id: "facebook",
    testId: YUJ.ctaFacebook,
    label: "Facebook",
    value: "/yujstudio",
    icon: Facebook,
    href: "https://facebook.com/yujstudio",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      data-testid={YUJ.contactSection}
      className="relative bg-[#0B0B0B] py-28 md:py-40"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-4 mb-8">
            <span className="inline-block w-10 h-px bg-[#D4AF37]/60" />
            <span className="text-[11px] tracking-[0.4em] uppercase text-[#B8B8B8]">
              Say Hello
            </span>
          </div>
          <h2 className="font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-white max-w-6xl">
            Book Your Trial
            <br />
            <span className="italic text-[#E7C65C]">Class Today.</span>
          </h2>
          <p className="mt-8 text-[#B8B8B8] max-w-xl text-base md:text-lg leading-relaxed">
            One free class. No commitments. Just breath, movement, and an
            invitation to stay.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 md:mt-14 flex flex-col sm:flex-row gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              data-testid={YUJ.ctaFooterBook}
              className="btn-gold"
            >
              Book a Free Trial <span className="arrow">→</span>
            </a>
            <a href={`tel:${PHONE.replace(/\s+/g, "")}`} className="btn-ghost">
              Or Call the Studio
            </a>
          </div>
        </Reveal>

        <div className="mt-20 md:mt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {LINKS.map((l, i) => {
            const Icon = l.icon;
            return (
              <Reveal key={l.id} delay={i * 0.05}>
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                  data-testid={l.testId}
                  className="group lift block h-full rounded-2xl border border-white/[0.06] bg-[#141414] p-6 md:p-7 relative"
                >
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-11 h-11 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#E7C65C]">
                      <Icon size={18} strokeWidth={1.25} />
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-[#E7C65C]/70 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                  <p className="text-[10px] tracking-[0.32em] uppercase text-[#B8B8B8]">
                    {l.label}
                  </p>
                  <p className="mt-2 font-serif-display text-2xl md:text-[26px] text-white leading-tight">
                    {l.value}
                  </p>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
