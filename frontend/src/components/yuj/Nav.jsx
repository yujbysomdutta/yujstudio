import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { YUJ } from "@/constants/testIds/yuj";

const LOGO =
  "https://customer-assets-gfyr7b9c.emergentagent.net/job_b3b57860-b6e9-4a11-acbe-f159cf531133/artifacts/hyuqhj0x_Yuj_Logo_Circle.png";

const LINKS = [
  { id: "about", label: "About" },
  { id: "programs", label: "Programs" },
  { id: "more", label: "Studio" },
  { id: "gallery", label: "Gallery" },
  { id: "founders", label: "Visionaries" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <motion.nav
      data-testid={YUJ.nav}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.1, ease: [0.2, 0.7, 0.2, 1], delay: 0.1 }}
      className={`fixed top-0 inset-x-0 z-50 transition-[background,backdrop-filter,border-color] duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[#0B0B0B]/70 border-b border-[#D4AF37]/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-10 py-4 md:py-5">
        <a
          href="#top"
          data-testid={YUJ.navLogo}
          className="flex items-center gap-3 group"
        >
          <img
            src={LOGO}
            alt="Yuj Studio"
            className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover ring-1 ring-[#D4AF37]/40"
          />
          <div className="leading-none">
            <div className="font-serif-display text-lg md:text-xl tracking-wide text-white">
              Yuj Studio
            </div>
            <div className="text-[10px] tracking-[0.28em] text-[#B8B8B8] uppercase mt-0.5">
              Breath · Flow · Transform
            </div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {LINKS.map((l, i) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                data-testid={YUJ.navLink(l.id)}
                className="relative text-[12px] tracking-[0.24em] uppercase text-[#F6F6F6]/80 hover:text-[#E7C65C] transition-colors duration-500"
              >
                <span className="mr-2 text-[#D4AF37]/60 font-serif-display italic text-[11px]">
                  0{i + 1}
                </span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            data-testid={YUJ.ctaBookTrial + "-nav"}
            className="hidden md:inline-flex btn-gold !py-3 !px-5 !text-[11px]"
          >
            Book Trial
            <span className="arrow">→</span>
          </a>
          <button
            data-testid={YUJ.navMenuButton}
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="lg:hidden w-11 h-11 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#E7C65C]"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid={YUJ.mobileDrawer}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden backdrop-blur-2xl bg-[#0B0B0B]/95 border-t border-[#D4AF37]/10"
          >
            <ul className="px-6 py-8 flex flex-col gap-6">
              {LINKS.map((l, i) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className="font-serif-display text-3xl text-white flex items-baseline gap-3"
                  >
                    <span className="text-[#D4AF37] italic text-lg">
                      0{i + 1}
                    </span>
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn-gold !w-full !justify-center"
                >
                  Book a Free Trial <span className="arrow">→</span>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
