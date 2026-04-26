import { Layout } from "@/components/layout";
import { designs } from "@/data/designs";
import { useRoute } from "wouter";

import img1 from "@assets/image_1777203987017.png";
import img2 from "@assets/image_1777203961349.png";
import img3 from "@assets/image_1777203972766.png";
import img4 from "@assets/image_1777204016360.png";
import detail1 from "@assets/image_1777203936923.png";
import detail2 from "@assets/image_1777203999001.png";
import detail3 from "@assets/image_1777204046337.png";
import detail4 from "@assets/image_1777204059342.png";
import detail5 from "@assets/image_1777204071163.png";
import detail6 from "@assets/image_1777203951741.png";

const mainImages: Record<string, string> = {
  "midnight-bloom": img1,
  "chandrika-grace": img2,
  "noir-saaj": img3,
  "velvet-vows": img4,
};

const detailImages: Record<string, string[]> = {
  "midnight-bloom": [detail1, detail2],
  "chandrika-grace": [detail3, detail4],
  "noir-saaj": [detail5, detail6],
  "velvet-vows": [img4, img2],
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
  const dImages = detailImages[design.id];

  return (
    <Layout>
      <article className="animate-in fade-in duration-1000">
        <div className="w-full h-[80vh] relative">
          <img
            src={mainImage}
            alt={design.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-12 md:p-24">
            <div className="container mx-auto">
              <h1 className="text-5xl md:text-8xl font-serif text-white mb-4 drop-shadow-lg">{design.name}</h1>
              <p className="text-primary tracking-widest uppercase text-sm md:text-base font-medium">{design.fabric} &mdash; {design.category}</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="w-12 h-1 bg-primary mb-8"></div>
              <p className="text-xl md:text-2xl font-serif text-white/90 leading-relaxed">
                {design.description}
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {dImages.map((img, i) => (
                <div key={i} className="aspect-[4/5] bg-secondary overflow-hidden">
                  <img src={img} alt={`${design.name} detail`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
