import { Button } from "@/components/ui/button";
import { Plane } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

import aboutImage from "@/assets/hero-highway.jpg";

const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary text-sm font-bold tracking-wider border-l-4 border-primary pl-3">
              {t.about.subtitle}
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              {t.about.title}
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>{t.about.paragraph1}</p>
              <p>{t.about.paragraph2}</p>
              <p>{t.about.paragraph3}</p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">{t.about.stat2}</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">{t.about.stat3}</div>
              </div>
            </div>

            {/* Backlink Container to Zagreb Transfers */}
            <div className="mt-8 bg-card/80 border border-primary/20 rounded-xl p-5 flex flex-col sm:flex-row items-center gap-5 transition-colors hover:border-primary/50 relative overflow-hidden group shadow-lg">
               <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent z-0"></div>
               <div className="bg-primary/20 p-3 rounded-full relative z-10 shrink-0 group-hover:scale-110 transition-transform">
                  <Plane className="w-7 h-7 text-primary" />
               </div>
               <div className="relative z-10 flex-grow text-center sm:text-left">
                  <h4 className="font-bold text-foreground text-lg mb-0.5">Trebate privatni transfer s vozačem?</h4>
                  <p className="text-sm text-muted-foreground">Posjetite našu specijaliziranu agenciju <strong className="text-foreground/80">Zagreb Transfers</strong> za premium aerodromske i gradske vožnje.</p>
               </div>
               <a href="https://www.zagreb-transfers.hr" target="_blank" rel="noopener noreferrer" className="relative z-10 shrink-0 mt-2 sm:mt-0">
                  <Button variant="outline" className="border-primary/50 text-foreground hover:bg-primary hover:text-black hover:border-primary transition-all">
                     Posjeti stranicu
                  </Button>
               </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-card border border-border rounded-2xl overflow-hidden relative group">
              <img
                src={aboutImage}
                alt={t.about.fleetTitle}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{t.about.fleetTitle}</h3>
                <p className="text-white/90">{t.about.fleetDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
