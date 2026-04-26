import { Layout } from "@/components/layout";
import { designs } from "@/data/designs";
import { Link } from "wouter";

import img1 from "@assets/image_1777203987017.png";
import img2 from "@assets/image_1777203972766.png";
import img3 from "@assets/image_1777205534163.png";
import img4 from "@assets/image_1777204016360.png";
import heroImage from "@assets/image_1777205757044.png";

const images: Record<string, string> = {
  "midnight-bloom": img1,
  "noir-saaj": img2,
  "raven-crown": img3,
  "velvet-vows": img4,
};

export default function Home() {
  return (
    <Layout>
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
              <Link
                href="/contact"
                className="inline-block bg-white text-black px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-primary transition-colors"
              >
                Book a Consultation
              </Link>
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

      <section className="container mx-auto px-6 py-24 border-t border-white/5">
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
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
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
                <p className="text-muted-foreground text-[11px] uppercase tracking-[0.3em] mt-2">
                  {design.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
