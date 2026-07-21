import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { YUJ } from "@/constants/testIds/yuj";

/**
 * Absolute SVG spanning the full document height. Draws a subtle flowing
 * golden line resembling the letter "Y" from Yuj. pathLength animates with
 * scroll progress through the page.
 */
export default function SignatureLine() {
  const [dims, setDims] = useState({ w: 1440, h: 4000 });
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 100,
    mass: 0.4,
  });
  const pathLength = useTransform(smooth, [0.02, 0.97], [0, 1]);
  const opacity = useTransform(smooth, [0, 0.04, 0.95, 1], [0, 1, 1, 0.6]);

  useEffect(() => {
    const measure = () => {
      const w = window.innerWidth;
      const h = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
        window.innerHeight,
      );
      setDims({ w, h });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(document.body);
    window.addEventListener("resize", measure);
    // Re-measure after images likely load
    const t = setTimeout(measure, 1500);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      clearTimeout(t);
    };
  }, []);

  const { w, h } = dims;
  const cx = w / 2;
  const isMobile = w < 768;

  // Y-shape composition:
  // - Two arms opening from top-left and top-right, meeting at ~14% (the fork of the Y)
  // - A long meandering stem descending down the page
  // Meanders wrap gently around section rhythm.
  const arms = isMobile
    ? `M ${w * 0.12} ${h * 0.03}
       C ${w * 0.3} ${h * 0.06}, ${w * 0.42} ${h * 0.09}, ${cx} ${h * 0.14}
       M ${w * 0.88} ${h * 0.03}
       C ${w * 0.7} ${h * 0.06}, ${w * 0.58} ${h * 0.09}, ${cx} ${h * 0.14}`
    : `M ${w * 0.05} ${h * 0.02}
       C ${w * 0.18} ${h * 0.05}, ${w * 0.34} ${h * 0.09}, ${cx} ${h * 0.14}
       M ${w * 0.95} ${h * 0.02}
       C ${w * 0.82} ${h * 0.05}, ${w * 0.66} ${h * 0.09}, ${cx} ${h * 0.14}`;

  const stem = isMobile
    ? `M ${cx} ${h * 0.14}
       C ${w * 0.78} ${h * 0.22}, ${w * 0.22} ${h * 0.28}, ${cx} ${h * 0.34}
       C ${w * 0.8} ${h * 0.4}, ${w * 0.2} ${h * 0.46}, ${cx} ${h * 0.52}
       C ${w * 0.78} ${h * 0.58}, ${w * 0.22} ${h * 0.64}, ${cx} ${h * 0.7}
       C ${w * 0.72} ${h * 0.76}, ${w * 0.28} ${h * 0.82}, ${cx} ${h * 0.88}
       C ${w * 0.55} ${h * 0.94}, ${w * 0.45} ${h * 0.97}, ${cx} ${h * 0.99}`
    : `M ${cx} ${h * 0.14}
       C ${w * 0.72} ${h * 0.2}, ${w * 0.28} ${h * 0.26}, ${cx} ${h * 0.32}
       C ${w * 0.74} ${h * 0.38}, ${w * 0.26} ${h * 0.44}, ${cx} ${h * 0.5}
       C ${w * 0.7} ${h * 0.56}, ${w * 0.3} ${h * 0.62}, ${cx} ${h * 0.68}
       C ${w * 0.66} ${h * 0.74}, ${w * 0.34} ${h * 0.8}, ${cx} ${h * 0.86}
       C ${w * 0.55} ${h * 0.92}, ${w * 0.45} ${h * 0.96}, ${cx} ${h * 0.99}`;

  return (
    <svg
      data-testid={YUJ.signatureLine}
      aria-hidden
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
      width={w}
      height={h}
      className="pointer-events-none absolute top-0 left-0 z-[2]"
      style={{ mixBlendMode: "screen" }}
    >
      <defs>
        <linearGradient id="yuj-gold-grad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#E7C65C" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#E7C65C" stopOpacity="0.95" />
        </linearGradient>
        <filter id="yuj-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      <motion.g style={{ opacity }}>
        {/* Glow trails */}
        <motion.path
          d={arms}
          fill="none"
          stroke="url(#yuj-gold-grad)"
          strokeWidth={isMobile ? "2.2" : "2.6"}
          strokeLinecap="round"
          strokeOpacity="0.35"
          filter="url(#yuj-glow)"
          style={{ pathLength }}
        />
        <motion.path
          d={stem}
          fill="none"
          stroke="url(#yuj-gold-grad)"
          strokeWidth={isMobile ? "2.2" : "2.6"}
          strokeLinecap="round"
          strokeOpacity="0.35"
          filter="url(#yuj-glow)"
          style={{ pathLength }}
        />
        {/* Crisp hairlines */}
        <motion.path
          d={arms}
          fill="none"
          stroke="url(#yuj-gold-grad)"
          strokeWidth={isMobile ? "1" : "1.1"}
          strokeLinecap="round"
          style={{ pathLength }}
        />
        <motion.path
          d={stem}
          fill="none"
          stroke="url(#yuj-gold-grad)"
          strokeWidth={isMobile ? "1" : "1.1"}
          strokeLinecap="round"
          style={{ pathLength }}
        />
      </motion.g>
    </svg>
  );
}
