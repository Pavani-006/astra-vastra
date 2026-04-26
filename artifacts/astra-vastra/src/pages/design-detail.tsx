import { Layout } from "@/components/layout";
import { designs } from "@/data/designs";
import { Link, useRoute } from "wouter";

import img1 from "@assets/image_1777203987017.png";
import img2 from "@assets/image_1777203972766.png";
import img3 from "@assets/image_1777205534163.png";
import img4 from "@assets/image_1777204016360.png";

const mainImages: Record<string, string> = {
  "midnight-bloom": img1,
  "noir-saaj": img2,
  "raven-crown": img3,
  "velvet-vows": img4,
};

export default function DesignDetail() {
  const [, params] = useRoute("/design/:slug");
  const slug = params?.slug;
  const design = designs.find(d => d.id === slug);

  if (!design) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl font-serif">Design not found.</h1>
        </div>
      </Layout>
    );
  }

  const mainImage = mainImages[design.id];
  const currentIndex = designs.findIndex(d => d.id === design.id);
  const nextDesign = designs[(currentIndex + 1) % designs.length];

  return (
    <Layout>
      <article className="animate-in fade-in duration-700">
        <div className="container mx-auto px-6 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="aspect-[3/4] bg-secondary overflow-hidden order-1 lg:order-1">
              <img
                src={mainImage}
                alt={design.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="order-2 lg:order-2 lg:pr-8">
              <p className="text-primary tracking-[0.3em] uppercase text-xs mb-6">
                {design.category}
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.05] mb-8">
                {design.name}
              </h1>
              <p className="text-base md:text-lg text-white/80 leading-relaxed mb-10 max-w-md font-light">
                {design.description}
              </p>

              <div className="space-y-4 border-t border-white/10 pt-8 mb-12 max-w-md">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground tracking-widest uppercase text-xs">Fabric</span>
                  <span className="text-white">{design.fabric}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground tracking-widest uppercase text-xs">Category</span>
                  <span className="text-white">{design.category}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground tracking-widest uppercase text-xs">Atelier</span>
                  <span className="text-white">Made to order</span>
                </div>
                <div className="flex justify-between items-baseline border-t border-white/10 pt-5 mt-2">
                  <span className="text-muted-foreground tracking-widest uppercase text-xs">From</span>
                  <span className="text-primary font-serif text-3xl">{design.price}</span>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 border border-primary text-primary text-xs tracking-[0.3em] uppercase hover:bg-primary hover:text-black transition-colors"
                >
                  Inquire
                </Link>
                <Link
                  href={`/design/${nextDesign.id}`}
                  className="text-xs tracking-[0.3em] uppercase text-white/60 hover:text-primary transition-colors"
                >
                  Next &mdash; {nextDesign.name}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
