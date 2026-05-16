import { Layout } from "@/components/layout";
import aboutImg1 from "@assets/image_1777204059342.png";
import aboutImg2 from "@assets/image_1777204071163.png";

export default function About() {
  return (
    <Layout>
      <article id="about" className="animate-in fade-in duration-1000 pb-24">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center mb-32">
            <h1 className="text-5xl md:text-7xl font-serif mb-8">The Philosophy of <span className="text-primary italic">Less</span></h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              Astra Vastra was born from a desire to strip away the noise of traditional Indian bridal wear, revealing the architectural beauty of the drape and the quiet luxury of master craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center mb-32">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={aboutImg1} alt="Craftsmanship detail" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-serif mb-6">Heirloom Meets Modernity</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We believe that a wedding dress should not wear the bride. It should be a profound expression of her individuality. We use centuries-old zardozi and aari techniques, not to overwhelm the silhouette, but to punctuate it. 
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every stitch is intentional. Every void is considered. Our pieces are crafted for the modern woman who understands that true luxury whispers—it does not shout.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-serif mb-6">The Atelier</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Based in the heart of Mumbai, our atelier is a sanctuary of focus. We produce a strictly limited number of garments each year, ensuring that every piece receives the uncompromising attention of our master tailors.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From the first sketch to the final fitting, the process is an intimate dialogue between designer and bride, resulting in a garment that is both a contemporary masterpiece and a future heirloom.
              </p>
            </div>
            <div className="order-1 md:order-2 aspect-[4/5] overflow-hidden">
              <img src={aboutImg2} alt="Atelier environment" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
