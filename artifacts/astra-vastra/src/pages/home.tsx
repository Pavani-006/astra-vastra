import { Layout } from "@/components/layout";
import { designs } from "@/data/designs";
import { Link } from "wouter";
import { useRef, useState } from "react";

import img1 from "@assets/image_1777203987017.png";
import img2 from "@assets/image_1777203972766.png";
import img3 from "@assets/image_1777205534163.png";
import img4 from "@assets/image_1777204016360.png";
import heroImage from "@assets/image_1777205757044.png";
import featuredImage from "@assets/image_1777205534163.png";
import bannerBridal from "@assets/image_1777203987017.png";
import bannerCouture from "@assets/image_1777204016360.png";
import sketch1 from "@assets/image_1777203936923.png";
import sketch2 from "@assets/image_1777203951741.png";
import sketch3 from "@assets/image_1777203961349.png";
import sketch4 from "@assets/image_1777203972766.png";
import sketch5 from "@assets/image_1777203999001.png";
import sketch6 from "@assets/image_1777203987017.png";

const images: Record<string, string> = {
  "midnight-bloom": img1,
  "noir-saaj": img2,
  "raven-crown": img3,
  "velvet-vows": img4,
};

const sketches = [
  { src: sketch1, label: "Atelier Study I" },
  { src: sketch2, label: "Atelier Study II" },
  { src: sketch3, label: "Atelier Study III" },
  { src: sketch4, label: "Atelier Study IV" },
  { src: sketch5, label: "Atelier Study V" },
  { src: sketch6, label: "Atelier Study VI" },
];

export default function Home() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeBanner, setActiveBanner] = useState<"bridal" | "couture" | null>(null);

  const scrollSlider = (dir: "left" | "right") => {
    if (!sliderRef.current) return;
    const amount = sliderRef.current.clientWidth * 0.7;
    sliderRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 pt-12 pb-24 lg:pt-20 lg:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
            <div className="animate-in fade-in slide-in-from-left-8 duration-1000 lg:pr-8">
              <p className="text-primary tracking-[0.4em] uppercase text-xs mb-8">
                The Astra Vastra Atelier
              </p>
              <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.95] mb-8 text-white">
                Heirloom<br />
                Craft For<br />
                <span className="italic text-primary">Modern Brides.</span>
              </h1>
              <p className="text-white/60 text-base md:text-lg mb-12 max-w-md font-light">
                A black-and-gold couture house — one designer, one collection, one quiet conviction.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-block bg-white text-black px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-primary transition-colors"
                >
                  Book a Consultation
                </Link>
                <Link
                  href="#collection"
                  className="inline-block border border-white/30 text-white px-10 py-4 text-xs tracking-[0.3em] uppercase hover:border-primary hover:text-primary transition-colors"
                >
                  View Collection
                </Link>
              </div>
            </div>

            <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 flex items-center justify-center">
              <div
                className="absolute aspect-square w-[90%] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(212,175,55,0.25) 0%, rgba(212,175,55,0.06) 55%, transparent 75%)",
                }}
              ></div>
              <div className="absolute aspect-square w-[72%] rounded-full border border-primary/20"></div>
              <div className="absolute top-8 right-12 w-2 h-2 rounded-full bg-primary/40"></div>
              <div className="absolute bottom-16 left-8 w-3 h-3 rounded-full bg-primary/20"></div>
              <div className="absolute top-1/3 left-4 w-1.5 h-1.5 rounded-full bg-primary/30"></div>

              <div className="relative aspect-[3/4] w-full max-w-lg overflow-hidden">
                <img
                  src={heroImage}
                  alt="Featured couture piece — Onyx Empress"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED EDITORIAL */}
      <section className="border-t border-white/5 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <div className="container mx-auto px-6 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 group relative overflow-hidden">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={featuredImage}
                  alt="Look of the Season — Raven Crown"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
              </div>
              <div className="absolute top-6 left-6 text-[10px] tracking-[0.4em] uppercase text-primary bg-black/60 backdrop-blur-sm px-4 py-2 border border-primary/30">
                Look of the Season
              </div>
            </div>

            <div className="lg:col-span-5 lg:pl-4">
              <p className="text-primary tracking-[0.4em] uppercase text-xs mb-6">
                Featured Piece
              </p>
              <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] mb-8">
                Raven<br />
                <span className="italic text-primary">Crown.</span>
              </h2>
              <p className="text-white/70 text-base md:text-lg leading-relaxed font-light mb-10 max-w-md">
                Layers of obsidian tulle veil a deep crimson core, hand-embroidered in antique gold. A regal, theatrical silhouette engineered for an unforgettable entrance.
              </p>
              <div className="space-y-3 border-t border-white/10 pt-8 mb-10 max-w-sm">
                <div className="flex justify-between text-sm">
                  <span className="text-white/40 tracking-widest uppercase text-[11px]">Fabric</span>
                  <span className="text-white">Tulle &amp; Antique Zari</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/40 tracking-widest uppercase text-[11px]">Category</span>
                  <span className="text-white">Bridal Lehenga</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/design/raven-crown"
                  className="inline-block bg-primary text-black px-8 py-4 text-xs tracking-[0.3em] uppercase hover:bg-white transition-colors"
                >
                  Discover
                </Link>
                <Link
                  href="/contact"
                  className="inline-block border border-white/30 text-white px-8 py-4 text-xs tracking-[0.3em] uppercase hover:border-primary hover:text-primary transition-colors"
                >
                  Inquire
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE GRID */}
      <section id="collection" className="border-t border-white/5">
        <div className="container mx-auto px-6 py-24 lg:py-32">
          <div className="text-center mb-20">
            <p className="text-primary tracking-[0.4em] uppercase text-xs mb-4">
              The Collection
            </p>
            <h2 className="font-serif text-4xl md:text-5xl">
              Signature Pieces
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            {designs.map((design) => (
              <Link
                key={design.id}
                href={`/design/${design.id}`}
                className="group block"
              >
                <div className="relative overflow-hidden aspect-[3/4] mb-5 bg-secondary">
                  <img
                    src={images[design.id]}
                    alt={design.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle at center, rgba(212,175,55,0.25) 0%, transparent 70%)",
                      boxShadow: "inset 0 0 60px rgba(212,175,55,0.35)",
                    }}
                  ></div>
                  <div className="absolute inset-0 ring-0 group-hover:ring-1 ring-primary/40 transition-all duration-500 pointer-events-none"></div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-serif group-hover:text-primary transition-colors">
                    {design.name}
                  </h3>
                  <p className="text-white/40 text-[11px] uppercase tracking-[0.3em] mt-2">
                    {design.category}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT COLLECTION BANNERS */}
      <section className="border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Link
            href="/design/midnight-bloom"
            onMouseEnter={() => setActiveBanner("bridal")}
            onMouseLeave={() => setActiveBanner(null)}
            className="relative group block aspect-[4/5] md:aspect-[3/4] overflow-hidden"
          >
            <img
              src={bannerBridal}
              alt="Bridal collection"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
            />
            <div
              className="absolute inset-0 transition-opacity duration-700"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.85) 100%)",
                opacity: activeBanner === "couture" ? 0.85 : 0.7,
              }}
            ></div>
            <div className="relative z-10 h-full flex flex-col items-center justify-end text-center pb-16 md:pb-20 px-6">
              <p className="text-primary tracking-[0.4em] uppercase text-[10px] mb-4">
                Volume 01
              </p>
              <h3 className="font-serif text-5xl md:text-6xl text-white mb-3">
                Bridal
              </h3>
              <p className="text-white/70 max-w-xs mb-8 font-light">
                Sacred silhouettes for the unforgettable day.
              </p>
              <span className="inline-block border border-white text-white text-[11px] tracking-[0.3em] uppercase px-8 py-3 group-hover:bg-white group-hover:text-black transition-colors">
                Explore Bridal
              </span>
            </div>
          </Link>

          <Link
            href="/design/velvet-vows"
            onMouseEnter={() => setActiveBanner("couture")}
            onMouseLeave={() => setActiveBanner(null)}
            className="relative group block aspect-[4/5] md:aspect-[3/4] overflow-hidden"
          >
            <img
              src={bannerCouture}
              alt="Couture collection"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
            />
            <div
              className="absolute inset-0 transition-opacity duration-700"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.85) 100%)",
                opacity: activeBanner === "bridal" ? 0.85 : 0.7,
              }}
            ></div>
            <div className="relative z-10 h-full flex flex-col items-center justify-end text-center pb-16 md:pb-20 px-6">
              <p className="text-primary tracking-[0.4em] uppercase text-[10px] mb-4">
                Volume 02
              </p>
              <h3 className="font-serif text-5xl md:text-6xl text-white mb-3">
                Couture
              </h3>
              <p className="text-white/70 max-w-xs mb-8 font-light">
                Ceremonial pieces, structured with austere luxury.
              </p>
              <span className="inline-block border border-primary text-primary text-[11px] tracking-[0.3em] uppercase px-8 py-3 group-hover:bg-primary group-hover:text-black transition-colors">
                Explore Couture
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* HORIZONTAL SLIDER */}
      <section className="border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 py-24 lg:py-32">
          <div className="flex items-end justify-between mb-12 gap-8">
            <div>
              <p className="text-primary tracking-[0.4em] uppercase text-xs mb-4">
                Behind the Atelier
              </p>
              <h2 className="font-serif text-4xl md:text-5xl">
                Sketchbook Studies
              </h2>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => scrollSlider("left")}
                aria-label="Previous"
                className="w-12 h-12 rounded-full border border-white/20 text-white hover:border-primary hover:text-primary transition-colors flex items-center justify-center"
              >
                &larr;
              </button>
              <button
                onClick={() => scrollSlider("right")}
                aria-label="Next"
                className="w-12 h-12 rounded-full border border-white/20 text-white hover:border-primary hover:text-primary transition-colors flex items-center justify-center"
              >
                &rarr;
              </button>
            </div>
          </div>

          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none -mx-6 px-6 pb-4"
            style={{ scrollbarWidth: "none" }}
          >
            {sketches.map((s, i) => (
              <div
                key={i}
                className="group relative flex-shrink-0 snap-start w-[78%] sm:w-[48%] md:w-[32%] lg:w-[26%]"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
                  <img
                    src={s.src}
                    alt={s.label}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.85) 100%)",
                    }}
                  ></div>
                  <div className="absolute inset-x-0 bottom-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-primary mb-1">
                      Atelier
                    </p>
                    <p className="font-serif text-lg text-white">{s.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/about"
              className="inline-block text-xs tracking-[0.3em] uppercase text-white/60 hover:text-primary transition-colors border-b border-white/10 hover:border-primary pb-1"
            >
              About the Atelier &rarr;
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
