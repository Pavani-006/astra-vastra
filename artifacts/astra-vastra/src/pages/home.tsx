import { Layout } from "@/components/layout";
import { designs } from "@/data/designs";
import { Link } from "wouter";

import img1 from "@assets/image_1777203987017.png";
import img2 from "@assets/image_1777203961349.png";
import img3 from "@assets/image_1777203972766.png";
import img4 from "@assets/image_1777204016360.png";

const images: Record<string, string> = {
  "midnight-bloom": img1,
  "chandrika-grace": img2,
  "noir-saaj": img3,
  "velvet-vows": img4,
};

const heroImage = img2;

export default function Home() {
  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 pt-12 pb-24 lg:pt-20 lg:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[70vh]">
            <div className="animate-in fade-in slide-in-from-left-8 duration-1000 lg:pr-8">
              <p className="text-primary tracking-[0.4em] uppercase text-xs mb-8">
                # New Arrivals
              </p>
              <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.95] mb-8 text-white">
                Heirloom<br />
                Craft For<br />
                <span className="italic text-primary">Modern Brides.</span>
              </h1>
              <p className="text-white/60 text-base md:text-lg mb-10 max-w-md font-light">
                Your couture wedding, reimagined.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-black px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-primary transition-colors"
              >
                Explore Now
              </Link>
            </div>

            <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 flex items-center justify-center">
              <div
                className="absolute aspect-square w-[85%] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0.04) 60%, transparent 75%)",
                }}
              ></div>
              <div className="absolute aspect-square w-[70%] rounded-full border border-primary/20"></div>
              <div className="absolute top-8 right-12 w-2 h-2 rounded-full bg-primary/40"></div>
              <div className="absolute bottom-16 left-8 w-3 h-3 rounded-full bg-primary/20"></div>
              <div className="absolute top-1/3 left-4 w-1.5 h-1.5 rounded-full bg-primary/30"></div>

              <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden">
                <img
                  src={heroImage}
                  alt="Featured design"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24 border-t border-white/5">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-primary tracking-[0.4em] uppercase text-xs mb-4">
              The Collection
            </p>
            <h2 className="font-serif text-4xl md:text-5xl">
              Signature Pieces
            </h2>
          </div>
          <Link
            href="/about"
            className="hidden md:inline-block text-xs tracking-[0.3em] uppercase text-white/60 hover:text-primary transition-colors"
          >
            About the Atelier &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {designs.map((design) => (
            <Link key={design.id} href={`/design/${design.id}`} className="group block">
              <div className="overflow-hidden aspect-[3/4] mb-6 bg-secondary">
                <img
                  src={images[design.id]}
                  alt={design.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-serif group-hover:text-primary transition-colors">{design.name}</h3>
                  <p className="text-muted-foreground text-sm uppercase tracking-widest mt-2">{design.category}</p>
                </div>
                <div className="w-8 h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
