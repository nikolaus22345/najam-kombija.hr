import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const CITIES = [
  "Split", "Rijeka", "Osijek", "Zadar", 
  "Pula", "Varaždin", "Karlovac", "Slavonski Brod", 
  "Dubrovnik", "Šibenik", "Sisak", "Velika Gorica", 
  "Čakovec", "Bjelovar", "Samobor"
];

const LocalSeoCities = () => {
  const { getLink } = useLanguage();

  return (
    <section className="py-20 bg-background/50 border-t border-border mt-10">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground mb-8 text-center flex items-center justify-center gap-3">
          Najam Kombija po Gradovima
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {CITIES.map((city) => {
            // Slugify the city name (e.g., Slavonski Brod -> slavonski-brod)
            const slug = city.toLowerCase().replace(/ž/g, 'z').replace(/š/g, 's').replace(/č/g, 'c').replace(/ć/g, 'c').replace(/ /g, '-');
            const route = `/najam-kombija-${slug}`;
            
            return (
              <Link 
                key={city}
                to={getLink(route)} 
                className="bg-card/50 hover:bg-primary/10 border border-border transition-all duration-300 p-4 rounded-xl flex items-center gap-3 group"
              >
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary opacity-70 group-hover:opacity-100 transition-opacity">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                 </svg>
                 <span className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm lg:text-base">
                    {city}
                 </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default LocalSeoCities;
