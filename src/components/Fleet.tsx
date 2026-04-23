import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

import minivanImage from "@/assets/vehicle-minivan.png";
import teretniImage from "@/assets/vehicle-teretni.png";
import dostavnaImage from "@/assets/vehicle-dostavna.png";
import n1Image from "@/assets/vehicle-n1.png";

const Fleet = () => {
  const { getLink, language } = useLanguage();

  const vehicles = [
    {
      name: language === 'en' ? "Passenger Vans (8+1)" : (language === 'de' ? "Kleinbusse (8+1)" : "Putnička kombi vozila (8+1)"),
      description: language === 'en' ? "Comfortable passenger vans ideal for family trips, business travel, and transfers." : (language === 'de' ? "Komfortable Kleinbusse, ideal für Familienausflüge, Geschäftsreisen und Transfers." : "Komforni putnički kombiji idealni za obiteljske izlete, poslovna putovanja i transfere."),
      features: language === 'en' ? "Air conditioning, comfortable seats, plenty of luggage space, low fuel consumption." : (language === 'de' ? "Klimaanlage, bequeme Sitze, viel Gepäckraum, geringer Kraftstoffverbrauch." : "Klima uređaj, komforna sjedala, obilje prostora za prtljagu, niska potrošnja goriva."),
      image: minivanImage, // Fallback image
      route: "/kategorije/putnicki-kombi",
      cta: language === 'en' ? "Request Passenger Van" : (language === 'de' ? "Kleinbus Anfragen" : "Zatraži putnički kombi")
    },
    {
      name: language === 'en' ? "Cargo Vans" : (language === 'de' ? "Transporter" : "Teretna kombi vozila"),
      description: language === 'en' ? "Spacious cargo vans that solve every logistical challenge and stress-free moving." : (language === 'de' ? "Geräumige Transporter, die jede logistische Herausforderung und stressfreien Umzug lösen." : "Prostrana teretna vozila koja rješavaju svaki logistički izazov i selidbu bez stresa."),
      features: language === 'en' ? "Large payload, large cargo volume, easy access for loading." : (language === 'de' ? "Große Nutzlast, großes Ladevolumen, leichter Zugang zum Beladen." : "Velika nosivost, velik tovarni volumen, lagan pristup za utovar."),
      image: teretniImage,
      route: "/kategorije/teretni-kombi",
      cta: language === 'en' ? "Request Cargo Van" : (language === 'de' ? "Transporter Anfragen" : "Zatraži teretni kombi")
    },
    {
      name: language === 'en' ? "Small Delivery Vans" : (language === 'de' ? "Kleine Lieferwagen" : "Mala dostavna vozila"),
      description: language === 'en' ? "Agile vehicles like Caddy or Kangoo for fast, urban, and everyday deliveries." : (language === 'de' ? "Wendige Fahrzeuge wie Caddy oder Kangoo für schnelle, städtische und tägliche Lieferungen." : "Okretna vozila tipa Caddy ili Kangoo za brze, urbane i svakodnevne dostave."),
      features: language === 'en' ? "Easy parking, ideal for small business owners, flexible space." : (language === 'de' ? "Einfaches Parken, ideal für Kleinunternehmer, flexibler Raum." : "Jednostavno parkiranje, idealno za male poduzetnike, fleksibilan prostor."),
      image: dostavnaImage,
      route: "/kategorije/mala-dostavna-vozila",
      cta: language === 'en' ? "Request Delivery Van" : (language === 'de' ? "Lieferwagen Anfragen" : "Zatraži dostavno vozilo")
    },
    {
      name: language === 'en' ? "N1 Vehicles 5 Seats" : (language === 'de' ? "N1 Fahrzeuge 5 Sitze" : "Vozila za 5 osoba N1"),
      description: language === 'en' ? "A cargo hybrid with seating for 5 passengers – perfect for field work and transporting tools." : (language === 'de' ? "Ein Frachthybrid mit Sitzplätzen für 5 Fahrgäste – perfekt für Feldarbeiten und den Transport von Werkzeugen." : "Hibrid teretne namjene uz sjedala za 5 putnika – savršen za terenski rad i prijevoz alata."),
      features: language === 'en' ? "Tax deductible (for companies), cargo area protective partition, 5 seats." : (language === 'de' ? "Steuerlich absetzbar (für Firmen), schützende Trennwand für den Laderaum, 5 Sitze." : "Odbitni pretporez (za firme), zaštitna pregrada tovarnog prostora, 5 sjedala."),
      image: n1Image,
      route: "/kategorije/vozilo-za-5-osoba-n1",
      cta: language === 'en' ? "Request N1 Vehicle" : (language === 'de' ? "N1 Fahrzeug Anfragen" : "Zatraži N1 vozilo")
    },
  ];

  return (
    <section className="py-20 bg-background" id="fleet">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {language === 'en' ? 'Our Vehicle Fleet' : (language === 'de' ? 'Unsere Fahrzeugflotte' : 'Naša flota vozila')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === 'en' ? 'For stress-free van rental – all our vehicles are prepared according to rigorous standards for maximum safety.' : (language === 'de' ? 'Für eine stressfreie Transportermiete – alle unsere Fahrzeuge werden nach strengen Standards für maximale Sicherheit vorbereitet.' : 'Za najam kombija bez stresa – sva naša vozila pripremljena su prema rigoroznim standardima za maksimalnu sigurnost.')}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {vehicles.map((vehicle, index) => (
            <div key={index} className="flex flex-col group h-full">
               <div className="bg-[#93a5cf] rounded-2xl p-6 flex items-center justify-center h-[220px] mb-6 shadow-lg shadow-black/20 group-hover:scale-[1.02] transition-transform duration-300 border border-transparent group-hover:border-primary/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-contain relative z-10 filter drop-shadow-xl scale-110"
                  />
               </div>
               
               <div className="flex flex-col flex-grow">
                 <h3 className="text-xl font-bold text-foreground mb-2">{vehicle.name}</h3>
                 <p className="text-sm text-muted-foreground mb-3">{vehicle.description}</p>
                 <p className="text-xs text-foreground/80 mb-6 bg-card/50 p-3 rounded-lg border border-border inline-block flex-grow">
                   <strong className="text-primary block mb-1">Prednosti:</strong> {vehicle.features}
                 </p>
                 
                 <div className="mt-auto pt-2 text-center">
                   <Link to={getLink(vehicle.route)}>
                     <Button className="w-full font-bold uppercase tracking-wide group-hover:bg-primary-hover">
                       {vehicle.cta}
                     </Button>
                   </Link>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
