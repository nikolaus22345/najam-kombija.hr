import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Fleet from "@/components/Fleet";
import Contact from "@/components/Contact";
import BookingForm from "@/components/BookingForm";
import heroImage from "@/assets/hero-highway.jpg";
import { useEffect } from "react";

import Seo from "@/components/Seo";

interface NajamKombijaCityProps {
  citySlug?: string;
}

const NajamKombijaCity = ({ citySlug }: NajamKombijaCityProps) => {
  const { city } = useParams();
  const activeCity = citySlug || city || "";
  
  // Format city name: replace dashes with spaces, capitalize
  const cityName = activeCity.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ') || "";

  useEffect(() => {
    document.title = `Najam Kombija ${cityName} | Najam Putničkih i Teretnih Vozila`;
  }, [cityName]);

  return (
    <div className="min-h-screen bg-background">
      <Seo 
        title={`Najam Kombija ${cityName} | Putnička i Teretna Vozila`} 
        description={`Najam putničkih i teretnih kombi vozila u gradu ${cityName}. Sigurna vozila, pristupačne cijene i mogućnost najma s vozačem diljem Hrvatske.`} 
      />
      <Header />
      
      {/* Custom Hero for Local SEO */}
      <section className="relative min-h-screen flex items-center pt-20 pb-10">
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
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 pt-10">
              <div className="inline-block">
                <span className="text-primary text-sm font-bold tracking-wider border-l-4 border-primary pl-3 uppercase">
                  NAJAM KOMBIJA {cityName}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
                Najam Kombija <br/>
                {cityName} <br/>
                Hrvatska <span className="font-normal">& EU</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-xl">
                Pronađite savršeno putničko ili teretno vozilo za vaše potrebe diljem Hrvatske i Europe s polaskom iz grada {cityName}.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="bg-card/50 backdrop-blur px-6 py-3 rounded-lg border border-border transition-all">
                  <p className="text-sm text-muted-foreground">Sigurna Vozila</p>
                </div>
                <div className="bg-card/50 backdrop-blur px-6 py-3 rounded-lg border border-border transition-all">
                  <p className="text-sm text-muted-foreground">24/7 Podrška</p>
                </div>
                <div className="bg-card/50 backdrop-blur px-6 py-3 rounded-lg border border-border transition-all">
                  <p className="text-sm text-muted-foreground">Fiksne Cijene</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 justify-center lg:justify-end">
               {/* Note: bookingform pickup prop uses the city to prefill the subject */}
              <BookingForm pickup={cityName} />
            </div>
          </div>
        </div>
      </section>

      <Fleet />
      <Contact />
      <Footer />
    </div>
  );
};

export default NajamKombijaCity;
