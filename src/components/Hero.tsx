import BookingForm from "./BookingForm";
import heroImage from "@/assets/hero-highway.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent z-0" />
      
      <div 
        className="absolute inset-0 z-[-1]"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-primary text-sm font-bold tracking-wider border-l-4 border-primary pl-3">
                {t.hero.subtitle}
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
              {t.hero.title}
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl">
              {t.hero.description}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/features/professional-drivers">
                <div className="bg-card/50 backdrop-blur px-6 py-3 rounded-lg border border-border hover:bg-card hover:border-primary transition-all cursor-pointer">
                  <p className="text-sm text-muted-foreground hover:text-primary transition-colors">{t.hero.feature1}</p>
                </div>
              </Link>
              <Link to="/features/24-7-service">
                <div className="bg-card/50 backdrop-blur px-6 py-3 rounded-lg border border-border hover:bg-card hover:border-primary transition-all cursor-pointer">
                  <p className="text-sm text-muted-foreground hover:text-primary transition-colors">{t.hero.feature2}</p>
                </div>
              </Link>
              <Link to="/features/safety-first">
                <div className="bg-card/50 backdrop-blur px-6 py-3 rounded-lg border border-border hover:bg-card hover:border-primary transition-all cursor-pointer">
                  <p className="text-sm text-muted-foreground hover:text-primary transition-colors">{t.hero.feature3}</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
