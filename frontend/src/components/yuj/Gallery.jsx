import Reveal from "@/components/yuj/Reveal";
import { YUJ } from "@/constants/testIds/yuj";

const IMAGES = [
  {
    src: "https://images.pexels.com/photos/20134508/pexels-photo-20134508.jpeg?auto=compress&cs=tinysrgb&w=940",
    alt: "Indian classical dancer in traditional attire against black backdrop",
    label: "Dance",
    span: "row-span-2",
  },
  {
    src: "https://images.pexels.com/photos/26856873/pexels-photo-26856873.jpeg?auto=compress&cs=tinysrgb&w=940",
    alt: "Bharatanatyam dancer in a dim temple",
    label: "Bharatanatyam",
  },
  {
    src: "https://images.pexels.com/photos/29490926/pexels-photo-29490926.jpeg?auto=compress&cs=tinysrgb&w=940",
    alt: "Yoga instructor assisting a handstand in a serene Indian studio",
    label: "Yoga",
    span: "row-span-2",
  },
  {
    src: "https://images.pexels.com/photos/38018854/pexels-photo-38018854.jpeg?auto=compress&cs=tinysrgb&w=940",
    alt: "Group yoga session by the river in Rishikesh",
    label: "Rishikesh",
  },
  {
    src: "https://images.pexels.com/photos/28518032/pexels-photo-28518032.jpeg?auto=compress&cs=tinysrgb&w=940",
    alt: "Indian classical dancer striking a pose in Kolkata",
    label: "Classical",
  },
  {
    src: "https://images.pexels.com/photos/26382819/pexels-photo-26382819.jpeg?auto=compress&cs=tinysrgb&w=940",
    alt: "Woman performing a headstand in a park in Dharamshala",
    label: "Practice",
    span: "row-span-2",
  },
  {
    src: "https://images.pexels.com/photos/20035456/pexels-photo-20035456.jpeg?auto=compress&cs=tinysrgb&w=940",
    alt: "Senior woman doing yoga near the Ganges in Rishikesh",
    label: "Ganges",
  },
  {
    src: "https://images.pexels.com/photos/37781070/pexels-photo-37781070.jpeg?auto=compress&cs=tinysrgb&w=940",
    alt: "Man practicing yoga outdoors in India",
    label: "Sadhana",
  },
  {
    src: "https://images.pexels.com/photos/31743029/pexels-photo-31743029.jpeg?auto=compress&cs=tinysrgb&w=940",
    alt: "Yoga class in a brightly lit Indian studio",
    label: "Studio",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      data-testid={YUJ.gallerySection}
      className="relative bg-[#0B0B0B] py-28 md:py-40"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <Reveal>
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-end mb-14 md:mb-20">
            <div className="col-span-12 md:col-span-7">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-block w-10 h-px bg-[#D4AF37]/60" />
                <span className="text-[11px] tracking-[0.4em] uppercase text-[#B8B8B8]">
                  Field Notes · A Gallery
                </span>
              </div>
              <h2 className="font-serif-display text-5xl md:text-7xl leading-[0.95] tracking-tight text-white">
                A studio, photographed{" "}
                <span className="italic text-[#E7C65C]">in the quiet.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="text-[#B8B8B8] text-sm md:text-base leading-relaxed">
                Not a highlight reel. Just breath, sweat, ink and light —
                caught between poses.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Masonry via CSS columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5 [column-fill:_balance]">
          {IMAGES.map((img, i) => (
            <Reveal key={i} delay={(i % 6) * 0.05}>
              <figure
                data-testid={YUJ.galleryImage(i)}
                className="group relative mb-4 md:mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-white/[0.06]"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className={`w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-[filter,transform] duration-[1200ms] group-hover:scale-[1.03] ${
                    i % 4 === 0 ? "aspect-[3/4]" : i % 3 === 0 ? "aspect-[4/3]" : "aspect-[4/5]"
                  }`}
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0B0B0B]/80 via-transparent to-transparent" />
                <figcaption className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] tracking-[0.28em] uppercase text-[#F6F6F6]/85">
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-px bg-[#D4AF37]" />
                    {img.label}
                  </span>
                  <span className="text-[#E7C65C]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
