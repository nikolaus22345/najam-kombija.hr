import { MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const PopularDestinations = () => {
  const { t } = useLanguage();

  const destinations = [
    { name: "Split", url: "/transfers/split-airport" },
    { name: "Dubrovnik", url: "/transfers/zagreb-to-dubrovnik" },
    { name: "Zagreb", url: "/transfers/zagreb-airport" },
    { name: "Zadar", url: "/transfers/zadar-airport" },
    { name: "Pula", url: "/transfers/zagreb-to-pula" },
    { name: "Rijeka", url: "/transfers/zagreb-to-rijeka" },
    { name: "Hvar", url: "/transfers/split-to-hvar" },
    { name: "Korčula", url: "/transfers/split-to-korcula" },
    { name: "Rovinj", url: "/transfers/zagreb-to-rovinj" },
    { name: "Poreč", url: "/transfers/zagreb-to-porec" },
    { name: "Makarska", url: "/transfers/split-to-makarska" },
    { name: "Trogir", url: "/transfers/split-to-trogir" },
    { name: "Šibenik", url: "/transfers/split-to-sibenik" },
    { name: "Opatija", url: "/transfers/zagreb-to-opatija" },
    { name: "Bol", url: "/transfers/split-to-bol" },
    { name: "Novalja", url: "/transfers/zadar-to-novalja" },
    { name: "Pag", url: "/transfers/zadar-to-pag" },
    { name: "Biograd", url: "/transfers/zadar-to-biograd" },
    { name: "Cavtat", url: "/transfers/dubrovnik-to-cavtat" },
    { name: "Omiš", url: "/transfers/split-to-omis" },
    { name: "Primošten", url: "/transfers/split-to-primosten" },
    { name: "Nin", url: "/transfers/zadar-to-nin" },
  ];

  return (
    <section className="py-16 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center gap-2 mb-8">
          <MapPin className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">{t.popularDestinations.title}</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {destinations.map((destination, index) => (
            <Link
              key={index}
              to={destination.url}
              className="px-4 py-2 bg-card border border-border rounded-lg text-sm text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              {destination.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
