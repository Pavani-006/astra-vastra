import { Layout } from "@/components/layout";
import contactBg from "@assets/image_1777203951741.png"; // Using a detail image for background

export default function Contact() {
  return (
    <Layout>
      <div className="relative min-h-[80vh] flex items-center justify-center animate-in fade-in duration-1000">
        <div className="absolute inset-0 z-0">
          <img src={contactBg} alt="Contact background" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-serif mb-8">Inquiries</h1>
          <p className="text-lg md:text-xl text-white/80 font-light mb-12">
            For bespoke bridal appointments, editorial pulls, and press inquiries, please reach out to our atelier.
          </p>
          
          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Email</p>
              <a href="mailto:atelier@astravastra.com" className="text-2xl font-serif hover:text-primary transition-colors">
                atelier@astravastra.com
              </a>
            </div>
            
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Instagram</p>
              <a href="https://instagram.com/astravastra" target="_blank" rel="noopener noreferrer" className="text-2xl font-serif hover:text-primary transition-colors inline-block border-b border-primary/30 pb-1">
                @astravastra
              </a>
            </div>
          </div>
          
          <div className="mt-24 pt-12 border-t border-border/30">
            <p className="text-sm text-muted-foreground">
              Visits to the Mumbai atelier are strictly by appointment only.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
