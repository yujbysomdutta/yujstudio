import Reveal from "@/components/yuj/Reveal";
import { YUJ } from "@/constants/testIds/yuj";

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1780130487332-b6a96a31b024?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHw0fHxwcmVtaXVtJTIweW9nYSUyMHN0dWRpbyUyMGRhcmt8ZW58MHx8fHwxNzg0NjQ2MjMzfDA&ixlib=rb-4.1.0&q=85",
    alt: "Yoga in a moody studio",
    label: "Yoga",
    span: "row-span-2",
  },
  {
    src: "https://images.pexels.com/photos/4999487/pexels-photo-4999487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Aerial yoga in silks",
    label: "Aerial",
  },
  {
    src: "https://images.unsplash.com/photo-1525426250015-4e6473cdbf17?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHwzfHxjb250ZW1wb3JhcnklMjBkYW5jZXIlMjBtb3Zpbmd8ZW58MHx8fHwxNzg0NjQ2MjMzfDA&ixlib=rb-4.1.0&q=85",
    alt: "Contemporary dancer in motion",
    label: "Dance",
    span: "row-span-2",
  },
  {
    src: "https://images.pexels.com/photos/27399870/pexels-photo-27399870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Yoga pose in low light",
    label: "Practice",
  },
  {
    src: "https://images.unsplash.com/photo-1617905204653-6128268919fd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHw0fHxkcmF3aW5nJTIwYXJ0JTIwY2xhc3MlMjBjbG9zZSUyMHVwfGVufDB8fHx8MTc4NDY0NjIzM3ww&ixlib=rb-4.1.0&q=85",
    alt: "Drawing class close-up",
    label: "Drawing",
  },
  {
    src: "https://images.pexels.com/photos/7672132/pexels-photo-7672132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Dance class in a warm studio",
    label: "Rhythm",
    span: "row-span-2",
  },
  {
    src: "https://images.pexels.com/photos/6164039/pexels-photo-6164039.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Aerial yoga in silks",
    label: "Suspension",
  },
  {
    src: "https://images.pexels.com/photos/20278578/pexels-photo-20278578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Ambient studio",
    label: "Studio",
  },
  {
    src: "https://images.unsplash.com/photo-1629617953524-618ec29589ee?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwzfHxkcmF3aW5nJTIwYXJ0JTIwY2xhc3MlMjBjbG9zZSUyMHVwfGVufDB8fHx8MTc4NDY0NjIzM3ww&ixlib=rb-4.1.0&q=85",
    alt: "Hands drawing",
    label: "Craft",
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
