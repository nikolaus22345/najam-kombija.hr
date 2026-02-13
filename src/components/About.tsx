import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

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
          </div>
          <div className="relative">
            <div className="aspect-square bg-card border border-border rounded-2xl overflow-hidden relative group">
              <img
                src="https://zagreb-transfers.hr/wp-content/uploads/2025/12/zagreb-transfers-e1766400235592.webp"
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
