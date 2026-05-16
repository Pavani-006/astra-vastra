import { Layout } from "@/components/layout";
import { useDesigns } from "@/data/designs-store";
import { Link } from "wouter";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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

const sketches = [
  { src: sketch1, label: "Atelier Study I" },
  { src: sketch2, label: "Atelier Study II" },
  { src: sketch3, label: "Atelier Study III" },
  { src: sketch4, label: "Atelier Study IV" },
  { src: sketch5, label: "Atelier Study V" },
  { src: sketch6, label: "Atelier Study VI" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Home() {
  const designs = useDesigns();
  const sliderRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeBanner, setActiveBanner] = useState<"bridal" | "couture" | null>(
    null,
  );

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImgY = useTransform(heroProgress, [0, 1], [0, 120]);
  const heroTextY = useTransform(heroProgress, [0, 1], [0, -60]);
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);

  const scrollSlider = (dir: "left" | "right") => {
    if (!sliderRef.current) return;
    const amount = sliderRef.current.clientWidth * 0.7;
    sliderRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const headlineWords = ["Heirloom", "Craft", "For", "Modern", "Brides."];

  return (
    <Layout>
      {/* HERO */}
      <section
        id="home"
        ref={heroRef}
        className="relative overflow-hidden"
      >
        {/* Floating gold particles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {[...Array(14)].map((_, i) => {
            const left = (i * 73) % 100;
            const top = (i * 47) % 100;
            const size = 1 + (i % 3);
            const duration = 6 + (i % 5);
            const delay = (i % 7) * 0.4;
            return (
              <motion.span
                key={i}
                className="absolute rounded-full bg-primary/40"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  width: size,
                  height: size,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration,
                  delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="container mx-auto px-6 pt-12 pb-24 lg:pt-20 lg:pb-32"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-20 items-center min-h-[80vh]">
            <motion.div
              style={{ y: heroTextY }}
              className="lg:pr-10"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-primary tracking-[0.4em] uppercase text-xs mb-8 flex items-center gap-3"
              >
                <span className="inline-block w-8 h-px bg-primary" />
                The Astra Vastra Atelier
              </motion.p>

              <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.95] mb-8 text-white">
                {headlineWords.map((word, i) => (
                  <motion.span
                    key={i}
                    variants={fadeUp}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className={`inline-block mr-3 ${i === 3 || i === 4 ? "italic text-primary" : ""}`}
                  >
                    {word}
                    {i === 1 || i === 3 ? <br /> : null}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.8 }}
                className="text-white/70 text-base md:text-xl mb-12 max-w-lg leading-relaxed font-light"
              >
                A black-and-gold couture house — one designer, one collection,
                one quiet conviction.
              </motion.p>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/contact"
                  className="group relative inline-block bg-white text-black px-10 py-4 text-xs tracking-[0.3em] uppercase overflow-hidden"
                >
                  <span className="relative z-10 transition-colors group-hover:text-black">
                    Book a Consultation
                  </span>
                  <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </Link>
                <a
                  href="#collection"
                  className="group relative inline-block border border-white/30 text-white px-10 py-4 text-xs tracking-[0.3em] uppercase overflow-hidden hover:border-primary"
                >
                  <span className="relative z-10 transition-colors group-hover:text-black">
                    View Collection
                  </span>
                  <span className="absolute inset-0 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              style={{ y: heroImgY }}
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Pulsing radial glow */}
              <motion.div
                className="absolute aspect-square w-[90%] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(212,175,55,0.28) 0%, rgba(212,175,55,0.06) 55%, transparent 75%)",
                }}
                animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Rotating dashed ring */}
              <motion.div
                className="absolute aspect-square w-[78%] rounded-full border border-dashed border-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              >
                <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_rgba(212,175,55,0.8)]" />
              </motion.div>

              {/* Counter-rotating thin ring */}
              <motion.div
                className="absolute aspect-square w-[64%] rounded-full border border-primary/15"
                animate={{ rotate: -360 }}
                transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
              />

              <div className="relative aspect-[3/4] w-full max-w-lg overflow-hidden">
                <motion.img
                  src={heroImage}
                  alt="Featured couture piece — Onyx Empress"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.15 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute inset-0 ring-1 ring-primary/20 pointer-events-none" />
              </div>
            </motion.div>
          </div>

          {/* Scroll cue */}
          <motion.div
            className="mt-16 flex flex-col items-center gap-3 text-white/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <span className="text-[10px] tracking-[0.4em] uppercase">
              Scroll
            </span>
            <motion.span
              className="block w-px h-10 bg-gradient-to-b from-primary/80 to-transparent"
              animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
              style={{ transformOrigin: "top" }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* MARQUEE TICKER */}
      <section className="border-y border-primary/10 bg-black overflow-hidden py-6">
        <motion.div
          className="flex gap-16 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(2)].map((_, group) => (
            <div key={group} className="flex gap-16 items-center shrink-0">
              {[
                "Hand-Embroidered",
                "Made-to-Measure",
                "Atelier Mumbai",
                "Limited Editions",
                "Heirloom Couture",
                "Bridal · Couture · Fusion",
              ].map((txt, i) => (
                <span
                  key={i}
                  className="font-serif italic text-2xl md:text-3xl text-white/30 flex items-center gap-16 shrink-0"
                >
                  {txt}
                  <span className="text-primary text-xl">✦</span>
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </section>

      {/* FEATURED EDITORIAL */}
      <section id="featured" className="border-t border-white/5 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <div className="container mx-auto px-6 py-24 lg:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              className="group relative overflow-hidden"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <motion.img
                  src={featuredImage}
                  alt="Look of the Season — Raven Crown"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <motion.div
                className="absolute top-6 left-6 text-[10px] tracking-[0.4em] uppercase text-primary bg-black/60 backdrop-blur-sm px-4 py-2 border border-primary/30"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Look of the Season
              </motion.div>
              <div className="absolute inset-0 ring-0 group-hover:ring-1 ring-primary/40 transition-all duration-700 pointer-events-none" />
            </motion.div>

            <motion.div
              className="md:pl-8 lg:pl-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
            >
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="text-primary tracking-[0.4em] uppercase text-xs mb-6 flex items-center gap-3"
              >
                <span className="inline-block w-8 h-px bg-primary" />
                Featured Piece
              </motion.p>
              <motion.h2
                variants={fadeUp}
                transition={{ duration: 0.8 }}
                className="font-serif text-5xl md:text-6xl leading-[1.05] mb-8"
              >
                Raven<br />
                <span className="italic text-primary">Crown.</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.8 }}
                className="text-white/70 text-base md:text-xl leading-relaxed font-light mb-10 max-w-xl"
              >
                Layers of obsidian tulle veil a deep crimson core,
                hand-embroidered in antique gold. A regal, theatrical silhouette
                engineered for an unforgettable entrance.
              </motion.p>
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.8 }}
                className="space-y-3 border-t border-white/10 pt-8 mb-10 max-w-sm"
              >
                <div className="flex justify-between text-sm">
                  <span className="text-white/40 tracking-widest uppercase text-[11px]">
                    Fabric
                  </span>
                  <span className="text-white">Tulle &amp; Antique Zari</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/40 tracking-widest uppercase text-[11px]">
                    Category
                  </span>
                  <span className="text-white">Bridal Lehenga</span>
                </div>
                <div className="flex justify-between items-baseline border-t border-white/10 pt-4 mt-4">
                  <span className="text-white/40 tracking-widest uppercase text-[11px]">
                    From
                  </span>
                  <span className="text-primary font-serif text-2xl">
                    ₹6,20,000
                  </span>
                </div>
              </motion.div>
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/design/raven-crown"
                  className="group relative inline-block bg-primary text-black px-8 py-4 text-xs tracking-[0.3em] uppercase overflow-hidden"
                >
                  <span className="relative z-10 transition-colors group-hover:text-black">
                    Discover
                  </span>
                  <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                </Link>
                <Link
                  href="/contact"
                  className="group relative inline-block border border-white/30 text-white px-8 py-4 text-xs tracking-[0.3em] uppercase overflow-hidden hover:border-primary"
                >
                  <span className="relative z-10 transition-colors group-hover:text-black">
                    Inquire
                  </span>
                  <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SIGNATURE GRID */}
      <section id="collection" className="border-t border-white/5">
        <div className="container mx-auto px-6 py-24 lg:py-32">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-primary tracking-[0.4em] uppercase text-xs mb-4">
              The Collection
            </p>
            <h2 className="font-serif text-4xl md:text-5xl">
              Signature <span className="italic text-primary">Pieces</span>
            </h2>
            <motion.span
              className="block mx-auto mt-6 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </motion.div>

          <motion.div
             className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            {designs.map((design, idx) => (
              <motion.div
                key={design.id}
                variants={fadeUp}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link href={`/design/${design.id}`} className="group block h-full">
                  <div className="relative overflow-hidden aspect-[4/5] md:aspect-[3/4] mb-5 bg-secondary">
                    <img
                      src={design.image}
                      alt={design.name}
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                    />
                    {design.isUserAdded && (
                      <div className="absolute top-4 right-4 z-10 text-[9px] tracking-[0.3em] uppercase text-primary bg-black/70 backdrop-blur-sm px-3 py-1 border border-primary/40">
                        New
                      </div>
                    )}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(circle at center, rgba(212,175,55,0.25) 0%, transparent 70%)",
                        boxShadow: "inset 0 0 60px rgba(212,175,55,0.35)",
                      }}
                    />
                    <div className="absolute inset-0 ring-0 group-hover:ring-1 ring-primary/40 transition-all duration-500 pointer-events-none" />

                    {/* Number tag */}
                    <div className="absolute top-4 left-4 text-primary font-serif text-xs tracking-[0.3em] opacity-60">
                      {String(idx + 1).padStart(2, "0")}
                    </div>

                    {/* Overlay reveal */}
                    <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                      <p className="text-white/70 text-xs tracking-wide line-clamp-2 mb-3">
                        {design.description}
                      </p>
                      <span className="inline-block text-[10px] tracking-[0.3em] uppercase text-primary border-b border-primary/40 pb-0.5">
                        Discover →
                      </span>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl md:text-2xl font-serif group-hover:text-primary transition-colors">
                      {design.name}
                    </h3>
                    <p className="text-white/40 text-[11px] uppercase tracking-[0.3em] mt-2">
                      {design.category}
                    </p>
                    <p className="text-primary text-sm font-serif mt-3 tracking-wide">
                      {design.price}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SPLIT COLLECTION BANNERS */}
      <section id="banners" className="border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
          {[
            {
              key: "bridal" as const,
              href: "/design/midnight-bloom",
              img: bannerBridal,
              vol: "Volume 01",
              title: "Bridal",
              tag: "Sacred silhouettes for the unforgettable day.",
              cta: "Explore Bridal",
              ctaClass:
                "border-white text-white group-hover:bg-white group-hover:text-black",
            },
            {
              key: "couture" as const,
              href: "/design/velvet-vows",
              img: bannerCouture,
              vol: "Volume 02",
              title: "Couture",
              tag: "Ceremonial pieces, structured with austere luxury.",
              cta: "Explore Couture",
              ctaClass:
                "border-primary text-primary group-hover:bg-primary group-hover:text-black",
            },
          ].map((b) => (
            <motion.div
              key={b.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                  href={b.href}
                  onMouseEnter={() => setActiveBanner(b.key)}
                  onMouseLeave={() => setActiveBanner(null)}
                  className="relative group block aspect-[4/5] md:aspect-[3/4] overflow-hidden h-full"
                >
                <img
                  src={b.img}
                  alt={`${b.title} collection`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-700"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.85) 100%)",
                    opacity:
                      activeBanner && activeBanner !== b.key ? 0.85 : 0.7,
                  }}
                />
                {/* gold accent that draws on hover */}
                <span className="absolute top-0 left-0 h-px bg-primary w-0 group-hover:w-full transition-all duration-700" />
                <span className="absolute bottom-0 right-0 h-px bg-primary w-0 group-hover:w-full transition-all duration-700 delay-100" />

                <div className="relative z-10 h-full flex flex-col items-center justify-end text-center pb-16 md:pb-20 px-6">
                  <p className="text-primary tracking-[0.4em] uppercase text-[10px] mb-4">
                    {b.vol}
                  </p>
                  <h3 className="font-serif text-5xl md:text-6xl text-white mb-3 transition-transform duration-500 group-hover:-translate-y-1">
                    {b.title}
                  </h3>
                  <p className="text-white/70 max-w-xs mb-8 font-light">
                    {b.tag}
                  </p>
                  <span
                    className={`inline-block border text-[11px] tracking-[0.3em] uppercase px-8 py-3 transition-colors ${b.ctaClass}`}
                  >
                    {b.cta}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HORIZONTAL SLIDER */}
      <section id="sketches" className="border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 py-24 lg:py-32">
          <motion.div
            className="flex items-end justify-between mb-12 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9 }}
          >
            <div>
              <p className="text-primary tracking-[0.4em] uppercase text-xs mb-4 flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-primary" />
                Behind the Atelier
              </p>
              <h2 className="font-serif text-4xl md:text-5xl">
                Sketchbook <span className="italic text-primary">Studies</span>
              </h2>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => scrollSlider("left")}
                aria-label="Previous"
                className="w-12 h-12 rounded-full border border-white/20 text-white hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300 flex items-center justify-center hover:-translate-x-1"
              >
                ←
              </button>
              <button
                onClick={() => scrollSlider("right")}
                aria-label="Next"
                className="w-12 h-12 rounded-full border border-white/20 text-white hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300 flex items-center justify-center hover:translate-x-1"
              >
                →
              </button>
            </div>
          </motion.div>

          <motion.div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none -mx-6 px-6 pb-4"
            style={{ scrollbarWidth: "none" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            {sketches.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="group relative flex-shrink-0 snap-start w-[78%] sm:w-[48%] md:w-[32%] lg:w-[26%]"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
                  <img
                    src={s.src}
                    alt={s.label}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.85) 100%)",
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-primary mb-1">
                      Atelier
                    </p>
                    <p className="font-serif text-lg text-white">{s.label}</p>
                  </div>
                  <div className="absolute inset-0 ring-0 group-hover:ring-1 ring-primary/40 transition-all duration-500 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link
              href="/about"
              className="inline-block text-xs tracking-[0.3em] uppercase text-white/60 hover:text-primary transition-colors border-b border-white/10 hover:border-primary pb-1"
            >
              About the Atelier →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
