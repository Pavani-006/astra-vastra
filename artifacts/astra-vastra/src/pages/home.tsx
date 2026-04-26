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

export default function Home() {
  return (
    <Layout>
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto text-center mb-24 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
            Heirloom Craft.<br />
            <span className="text-primary italic">Minimal Silhouettes.</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl font-light max-w-xl mx-auto">
            Contemporary Indian bridal wear designed with uncompromising restraint.
          </p>
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
                  <h2 className="text-2xl font-serif group-hover:text-primary transition-colors">{design.name}</h2>
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
