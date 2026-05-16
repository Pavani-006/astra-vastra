import { Layout } from "@/components/layout";

export default function Contact() {
  return (
    <Layout>
      <div id="contact" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden animate-in fade-in duration-1000">
        <div className="absolute inset-0 z-0 bg-black">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at top, rgba(212,175,55,0.18) 0%, transparent 55%), radial-gradient(ellipse at bottom right, rgba(212,175,55,0.08) 0%, transparent 50%), radial-gradient(ellipse at bottom left, rgba(80,40,20,0.18) 0%, transparent 60%)",
            }}
          ></div>
          <div
            className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
            }}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center max-w-2xl py-24">
          <p className="text-primary tracking-[0.4em] uppercase text-xs mb-6">
            Get in Touch
          </p>
          <h1 className="text-5xl md:text-7xl font-serif mb-8">Inquiries</h1>
          <p className="text-base md:text-lg text-white/70 font-light mb-16 max-w-md mx-auto leading-relaxed">
            For bespoke bridal appointments, editorial pulls, and press inquiries, please reach out to the atelier.
          </p>

          <div className="space-y-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-3">
                Email
              </p>
              <a
                href="mailto:atelier@astravastra.com"
                className="text-xl md:text-2xl font-serif hover:text-primary transition-colors"
              >
                atelier@astravastra.com
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-3">
                Instagram
              </p>
              <a
                href="https://instagram.com/astravastra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-2xl font-serif hover:text-primary transition-colors inline-block border-b border-primary/40 pb-1"
              >
                @astravastra
              </a>
            </div>
          </div>

          <div className="mt-24 pt-10 border-t border-white/10">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              Visits to the Mumbai atelier are strictly by appointment only.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
