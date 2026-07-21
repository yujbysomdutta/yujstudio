import { useEffect } from "react";
import SmoothScroll from "@/components/yuj/SmoothScroll";
import Nav from "@/components/yuj/Nav";
import Hero from "@/components/yuj/Hero";
import About from "@/components/yuj/About";
import Programs from "@/components/yuj/Programs";
import MoreThanFitness from "@/components/yuj/MoreThanFitness";
import WhyChoose from "@/components/yuj/WhyChoose";
import Marquee from "@/components/yuj/Marquee";
import Gallery from "@/components/yuj/Gallery";
import Founders from "@/components/yuj/Founders";
import Location from "@/components/yuj/Location";
import Contact from "@/components/yuj/Contact";
import Footer from "@/components/yuj/Footer";

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <main className="relative bg-[#0B0B0B] text-[#F6F6F6] overflow-hidden">
      <SmoothScroll />
      <Nav />

      <Hero />
      <About />
      <Programs />
      <MoreThanFitness />
      <WhyChoose />
      <Marquee />
      <Gallery />
      <Founders />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}
