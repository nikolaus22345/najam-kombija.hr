import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Fleet from "@/components/Fleet";
import Contact from "@/components/Contact";
import BookingForm from "@/components/BookingForm";
import { useEffect } from "react";
import minivanImage from "@/assets/vehicle-minivan.png";
import teretniImage from "@/assets/vehicle-teretni.png";
import dostavnaImage from "@/assets/vehicle-dostavna.png";
import n1Image from "@/assets/vehicle-n1.png";
import Seo from "@/components/Seo";
import { useLanguage } from "@/contexts/LanguageContext";

const CATEGORY_MAP: Record<string, {
  hr: { title: string, subtitle: string, desc: string },
  en: { title: string, subtitle: string, desc: string },
  de: { title: string, subtitle: string, desc: string },
  img: string 
}> = {
  "putnicki-kombi": {
    "hr": {
      "title": "Najam Putničkih Kombi Vozila",
      "subtitle": "Putnička kombi vozila (8+1)",
      "desc": "Komforni putnički kombiji idealni za obiteljske izlete, poslovna putovanja i transfere. Klima uređaj, komforna sjedala, obilje prostora za prtljagu, niska potrošnja goriva."
    },
    "en": {
      "title": "Passenger Van Rental",
      "subtitle": "Passenger Vans (8+1)",
      "desc": "Comfortable passenger vans ideal for family trips, business travel, and transfers. Air conditioning, comfortable seats, plenty of luggage space, low fuel consumption."
    },
    "de": {
      "title": "Kleinbus Mieten",
      "subtitle": "Kleinbusse (8+1)",
      "desc": "Komfortable Kleinbusse, ideal für Familienausflüge, Geschäftsreisen und Transfers. Klimaanlage, bequeme Sitze, viel Gepäckraum, geringer Kraftstoffverbrauch."
    },
    "img": minivanImage
  },
  "teretni-kombi": {
    "hr": {
      "title": "Najam Teretnih Kombi Vozila",
      "subtitle": "Teretna kombi vozila",
      "desc": "Prostrana teretna vozila koja rješavaju svaki logistički izazov i selidbu bez stresa."
    },
    "en": {
      "title": "Cargo Van Rental",
      "subtitle": "Cargo Vans",
      "desc": "Spacious cargo vans that solve every logistical challenge and stress-free moving."
    },
    "de": {
      "title": "Transporter Mieten",
      "subtitle": "Transporter",
      "desc": "Geräumige Transporter, die jede logistische Herausforderung und stressfreien Umzug lösen."
    },
    "img": teretniImage
  },
  "mala-dostavna-vozila": {
    "hr": {
      "title": "Najam Malih Dostavnih Vozila",
      "subtitle": "Mala dostavna vozila",
      "desc": "Okretna vozila tipa Caddy ili Kangoo za brze, urbane i svakodnevne dostave."
    },
    "en": {
      "title": "Small Delivery Vehicles Rental",
      "subtitle": "Small Delivery Vans",
      "desc": "Agile vehicles like Caddy or Kangoo for fast, urban, and everyday deliveries."
    },
    "de": {
      "title": "Kleine Lieferwagen Mieten",
      "subtitle": "Kleine Lieferwagen",
      "desc": "Wendige Fahrzeuge wie Caddy oder Kangoo für schnelle, städtische und tägliche Lieferungen."
    },
    "img": dostavnaImage
  },
  "vozilo-za-5-osoba-n1": {
    "hr": {
      "title": "Najam Vozila N1 za 5 Osoba",
      "subtitle": "Vozila za 5 osoba N1",
      "desc": "Hibrid teretne namjene uz sjedala za 5 putnika – savršen za terenski rad i prijevoz alata."
    },
    "en": {
      "title": "N1 Vehicle Rental for 5 Passengers",
      "subtitle": "N1 Vehicles 5 Seats",
      "desc": "A cargo hybrid with seating for 5 passengers – perfect for field work and transporting tools."
    },
    "de": {
      "title": "N1 Fahrzeug für 5 Personen",
      "subtitle": "N1 Fahrzeuge 5 Sitze",
      "desc": "Ein Frachthybrid mit Sitzplätzen für 5 Fahrgäste – perfekt für Feldarbeiten und den Transport von Werkzeugen."
    },
    "img": n1Image
  },
  "najam-kombija-s-vozacem": {
    "hr": {
      "title": "Najam Kombija S Vozačem",
      "subtitle": "Najam kombija s vozačem",
      "desc": "Trebate profesionalnog vozača? Naša usluga najma kombija s vozačem nudi maksimalnu sigurnost i komfor za putnike ili teret tijekom cijelog putovanja."
    },
    "en": {
      "title": "Van Rental With Driver",
      "subtitle": "Van rental with driver",
      "desc": "Need a professional driver? Our van rental with driver service offers maximum safety and comfort for passengers or cargo during the entire journey."
    },
    "de": {
      "title": "Kleinbus Mieten Mit Fahrer",
      "subtitle": "Kleinbus mieten mit Fahrer",
      "desc": "Sie brauchen einen professionellen Fahrer? Unser Service Kleinbus mieten mit Fahrer bietet maximale Sicherheit und Komfort für Fahrgäste oder Fracht auf der gesamten Reise."
    },
    "img": minivanImage
  },
  "najam-s-dva-vozaca-kod-duzih-ruta": {
    "hr": {
      "title": "Najam S Dva Vozača Kod Dužih Ruta",
      "subtitle": "Međunarodna logistika",
      "desc": "Za najzahtjevnije i najduže rute širom Europe, najam kombija s dva profesionalna vozača osigurava da vi i vaš teret bez stajanja stignete na cilj sigurno i brzo."
    },
    "en": {
      "title": "Van Rental With Two Drivers for Long Routes",
      "subtitle": "International Logistics",
      "desc": "For the most demanding and longest routes across Europe, renting a van with two professional drivers ensures you and your cargo arrive at your destination safely and quickly without stopping."
    },
    "de": {
      "title": "Transporter Mieten Mit Zwei Fahrern Für Lange Strecken",
      "subtitle": "Internationale Logistik",
      "desc": "Für die anspruchsvollsten und längsten Strecken quer durch Europa sorgt das Mieten eines Transporters mit zwei professionellen Fahrern dafür, dass Sie und Ihre Fracht sicher und schnell an Ihr Ziel gelangen."
    },
    "img": minivanImage
  },
  "najam-kombija-bez-vozaca": {
    "hr": {
      "title": "Najam Kombija Bez Vozača",
      "subtitle": "Fleksibilni najam",
      "desc": "Uzmite volan u svoje ruke. Iznajmite naša potpuno osigurana teretna i putnička kombi vozila i iskoristite potpunu autonomiju za vaš projekt."
    },
    "en": {
      "title": "Van Rental Without Driver",
      "subtitle": "Flexible rental",
      "desc": "Take the wheel into your own hands. Rent our fully insured cargo and passenger vans and benefit from complete autonomy for your project."
    },
    "de": {
      "title": "Transporter Mieten Ohne Fahrer",
      "subtitle": "Flexible Miete",
      "desc": "Nehmen Sie das Steuer selbst in die Hand. Mieten Sie unsere voll versicherten Fracht- und Kleinbusse und profitieren Sie von völliger Autonomie für Ihr Projekt."
    },
    "img": dostavnaImage
  },
  "dnevni-najam-vozila": {
    "hr": {
      "title": "Dnevni Najam Vozila",
      "subtitle": "Hitne logističke potrebe",
      "desc": "Kratkoročni najam na 24 sata. Rješavanje nepredviđenih situacija na terenu, isporuka robe ili kraći obiteljski put uz top paket usluga."
    },
    "en": {
      "title": "Daily Vehicle Rental",
      "subtitle": "Urgent Logistics Needs",
      "desc": "Short-term 24-hour rental. Solving unforeseen situations on the field, delivering goods or a short family trip with a top service package."
    },
    "de": {
      "title": "Tägliche Fahrzeugmiete",
      "subtitle": "Dringende Logistikbedürfnisse",
      "desc": "Kurzzeitige 24-Stunden-Miete. Lösung unvorhergesehener Situationen im Feld, Lieferung von Waren oder ein kurzer Familienausflug mit einem Top-Service-Paket."
    },
    "img": minivanImage
  },
  "medunarodni-kombi-prijevozi": {
    "hr": {
      "title": "Međunarodni Kombi Prijevozi",
      "subtitle": "Europa bez granica",
      "desc": "Specijalizirani najam vozila prikladan i dozvoljen za međunarodne rute. Kompletno osiguranje, sve potrebne EU dozvole te podrška na cesti uključeni."
    },
    "en": {
      "title": "International Van Transport",
      "subtitle": "Europe without borders",
      "desc": "Specialized van rental suitable and permitted for international routes. Comprehensive insurance, all necessary EU permits and cross-border support included."
    },
    "de": {
      "title": "Internationale Transportertransporte",
      "subtitle": "Europa ohne Grenzen",
      "desc": "Spezialisierter Transportermietvertrag, der für internationale Strecken geeignet und zugelassen ist. Umfassende Versicherung, alle notwendigen EU-Genehmigungen und Unterstützung in ganz Europa inbegriffen."
    },
    "img": teretniImage
  },
  "najam-kombi-vozila-po-satu": {
    "hr": {
      "title": "Najam Kombi Vozila Po Satu",
      "subtitle": "Mikro najam",
      "desc": "Trebate prebaciti namještaj ili odraditi brzinsku dostavu? Nudimo najam kombija specifično obračunat za nekoliko ključnih sati."
    },
    "en": {
      "title": "Hourly Van Rental",
      "subtitle": "Micro rental",
      "desc": "Need to move furniture or make a quick delivery? We offer van rental specifically billed for a few key hours."
    },
    "de": {
      "title": "Stundenweise Transportermiete",
      "subtitle": "Mikromiete",
      "desc": "Müssen Sie Möbel transportieren oder eine schnelle Lieferung ausführen? Wir bieten Transportermieten an, die auf wenige Stunden abgerechnet werden."
    },
    "img": dostavnaImage
  },
  "najam-kombija-po-danu": {
    "hr": {
      "title": "Najam Kombija Po Danu",
      "subtitle": "Tvoj tempo",
      "desc": "Sigurna opcija klasičnog obračuna najma kombija po pojedinačnom danu uz potpunu slobodu preuzimanja i fleksibilnog produžetka ukoliko zatreba."
    },
    "en": {
      "title": "Van Rental Per Day",
      "subtitle": "Your pace",
      "desc": "Secure option of classic day-to-day van rental billing with complete freedom of pickup and flexible extensions if needed."
    },
    "de": {
      "title": "Transporter Mieten Pro Tag",
      "subtitle": "Ihr Tempo",
      "desc": "Sichere Variante der klassischen tageweisen Abrechnung für Transporter mit völliger Freiheit bei Abholung und flexibler Verlängerung bei Bedarf."
    },
    "img": n1Image
  },
  "najam-kombija-na-duzi-vremenski-period": {
    "hr": {
      "title": "Najam Kombija Na Duži Vremenski Period",
      "subtitle": "Višemjesečni & godišnji planovi",
      "desc": "Savršeno rješenje za poduzetnike i obrtnike. Vozila raspoloživa mjesecima s kompletno vođenim održavanjem i isključenim nepredviđenim troškovima."
    },
    "en": {
      "title": "Long Term Van Rental",
      "subtitle": "Multi-month & Annual Plans",
      "desc": "Perfect solution for entrepreneurs and small businesses. Vehicles available for months with completely managed maintenance and unforeseen costs excluded."
    },
    "de": {
      "title": "Langzeitmiete von Transportern",
      "subtitle": "Mehrmonatige und Jährliche Pläne",
      "desc": "Perfekte Lösung für Unternehmer und kleine Unternehmen. Fahrzeuge für Monate verfügbar, mit komplett gewarteter Instandhaltung und unerwarteten Kosten ausgeschlossen."
    },
    "img": teretniImage
  },
  "prijevoz-putnika-kombijem-8-1": {
    "hr": {
      "title": "Prijevoz Putnika Kombijem 8+1",
      "subtitle": "Grupna putovanja",
      "desc": "Specijalizirana prostrana vozila obložena maksimalnim luksuzom, Wi-fi sustavom i komfornim dvostrukim hlađenjem idealna za turističke ture i transfere osam putnika."
    },
    "en": {
      "title": "Passenger Transport 8+1",
      "subtitle": "Group Travel",
      "desc": "Specialized spacious vehicles fitted with maximum luxury, Wi-fi system, and comfortable dual cooling ideal for tourist tours and transferring eight passengers."
    },
    "de": {
      "title": "Personentransfer 8+1",
      "subtitle": "Gruppenreisen",
      "desc": "Spezialisierte geräumige Fahrzeuge, die mit maximalem Luxus, Wi-Fi und bequemer Doppelkühlung ausgestattet sind, perfekt für Touristen-Touren und den Transfer von acht Fahrgästen."
    },
    "img": minivanImage
  },
  "zajamcena-isporuka-vozila-do-vrata": {
    "hr": {
      "title": "Zajamčena Isporuka Vozila Do Vrata",
      "subtitle": "Premium servis",
      "desc": "Bilo gdje u gradu, mi donosimo vozilo vama. Štedite svoje vrijeme na dolazak u poslovnicu, naši stručnjaci vam osobno predaju i objašnjavaju vozilo na vašoj ruti."
    },
    "en": {
      "title": "Guaranteed Door-to-Door Delivery",
      "subtitle": "Premium Service",
      "desc": "Anywhere in the city, we bring the vehicle to you. Save time visiting our branch, our experts personally hand over and explain the vehicle on your route."
    },
    "de": {
      "title": "Garantierte Tür-zu-Tür Lieferung",
      "subtitle": "Premium Service",
      "desc": "Wir bringen das Fahrzeug überall in der Stadt zu Ihnen. Sparen Sie Zeit durch Besuche unserer Filiale, unsere Experten übergeben Ihnen das Fahrzeug persönlich auf Ihrer Strecke."
    },
    "img": n1Image
  },
  "dugorocni-najam-za-tvrtke-i-obrte": {
    "hr": {
      "title": "Dugoročni Najam Za Tvrtke I Obrte",
      "subtitle": "Pravi B2B pristup",
      "desc": "Alternativa klasičnom i skupom leasingu. Ne vežite kapital bankama, zadržite financijsku moć firme a mi brinemo u potpunosti o voznom stroju flote, jamstvu i administraciji."
    },
    "en": {
      "title": "Long-Term Rental for Companies and Trades",
      "subtitle": "True B2B Approach",
      "desc": "Alternative to classic expensive leasing. Do not tie capital to banks, retain financial power while we completely take care of the fleet vehicles, warranties and administration."
    },
    "de": {
      "title": "Langzeitmiete für Unternehmen",
      "subtitle": "Ein echter B2B-Ansatz",
      "desc": "Alternative zu klassischem teurem Leasing. Binden Sie nicht Kapital an Banken, behalten Sie die finanzielle Kraft, während wir uns um die Flotte, Garantien und Verwaltung kümmern."
    },
    "img": teretniImage
  },
  "ostali-prijevozi-po-vasem-zahtjevu": {
    "hr": {
      "title": "Ostali Prijevozi Po Vašem Zahtjevu",
      "subtitle": "Tailor-made logistika",
      "desc": "Imate specijalizirani upit, izvanredan teret, nekarakterističan put sa više stanica i država? Mi smo opremljeni riješiti svaki od logističkih izazova koje imate."
    },
    "en": {
      "title": "Other Transport Upon Your Request",
      "subtitle": "Tailor-made logistics",
      "desc": "Specialized request? Extraordinary cargo, uncommon routes across multiple stops and countries? We are equipped to securely solve every logistics challenge you have."
    },
    "de": {
      "title": "Sonstige Transporte auf Anfrage",
      "subtitle": "Maßgeschneiderte Logistik",
      "desc": "Haben Sie spezielle Anfragen, außergewöhnliche Fracht, ungewöhnliche Routen über mehrere Staaten und Stopps hinweg? Wir sind ausgerüstet, um diese Logistik perfekt zu meistern."
    },
    "img": minivanImage
  }
};

const Kategorija = () => {
  const { kategorija } = useParams();
  const { language } = useLanguage();
  
  const categoryData = kategorija ? CATEGORY_MAP[kategorija] : null;
  const tCat = categoryData ? (categoryData[language as keyof typeof categoryData] || categoryData.hr) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [kategorija]);

  if (!categoryData || !tCat) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        <Header />
        <h1 className="text-4xl text-foreground">{language === 'en' ? 'Category Not Found' : (language === 'de' ? 'Kategorie Nicht Gefunden' : 'Kategorija nije pronađena')}</h1>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Seo 
        title={`${tCat.title} - ${language === 'hr' ? 'Vrhunska Ponuda' : (language === 'en' ? 'Premium Offer' : 'Premium-Angebot')}`}
        description={tCat.desc}
      />
      <Header />
      
      <section className="relative min-h-[70vh] flex items-center pt-20 pb-10 bg-card">
        <div className="container mx-auto px-4 lg:px-8 relative z-10 mt-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-primary text-sm font-bold tracking-wider border-l-4 border-primary pl-3 uppercase">
                  {tCat.subtitle}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {tCat.title}
              </h1>

              <p className="text-xl text-muted-foreground">
                {tCat.desc}
              </p>

              <div className="pt-6">
                 <BookingForm />
              </div>
            </div>

            <div className="flex justify-center items-center bg-[#93a5cf] rounded-3xl p-8 relative shadow-2xl h-full min-h-[400px]">
               <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent rounded-3xl z-0"></div>
               <img src={categoryData.img} alt={tCat.title} className="w-full relative z-10 drop-shadow-2xl translate-x-4" />
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

export default Kategorija;
