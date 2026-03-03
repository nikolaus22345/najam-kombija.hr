import { Heart } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "react-router-dom";
import { getRouteButtonText } from "../lib/city-translations";

const PopularRoutes = () => {
  const { t, getLink, language } = useLanguage();

  const routes = [
    { name: "Zagreb - Split", url: "/transfers/zagreb-to-split" },
    { name: "Zagreb - Dubrovnik", url: "/transfers/zagreb-to-dubrovnik" },
    { name: "Zagreb - Plitvice Lakes", url: "/transfers/zagreb-to-plitvice-lakes" },
    { name: "Zagreb - Zadar", url: "/transfers/zagreb-to-zadar" },
    { name: "Zagreb - Rijeka", url: "/transfers/zagreb-to-rijeka" },
    { name: "Zagreb - Pula", url: "/transfers/zagreb-to-pula" },
    { name: "Zagreb - Rovinj", url: "/transfers/zagreb-to-rovinj" },
    { name: "Zagreb - Opatija", url: "/transfers/zagreb-to-opatija" },
    { name: "Zagreb - Makarska", url: "/transfers/zagreb-to-makarska" },
    { name: "Zagreb - Osijek", url: "/transfers/zagreb-to-osijek" },
    { name: "Zagreb - Slavonski Brod", url: "/transfers/zagreb-to-slavonski-brod" },
    { name: "Zagreb - Varazdin", url: "/transfers/zagreb-to-varazdin" },
    { name: "Zagreb - Sisak", url: "/transfers/zagreb-to-sisak" },
    { name: "Zagreb - Karlovac", url: "/transfers/zagreb-to-karlovac" },
    { name: "Zagreb - Novalja", url: "/transfers/zagreb-to-novalja" },
    { name: "Zagreb - Tisno", url: "/transfers/zagreb-to-tisno" },
    { name: "Zagreb - Murter", url: "/transfers/zagreb-to-murter" },
    { name: "Zagreb - Trogir", url: "/transfers/zagreb-to-trogir" },
    { name: "Zagreb - Belgrade", url: "/transfers/zagreb-to-belgrade" },
    { name: "Zagreb - Sarajevo", url: "/transfers/zagreb-to-sarajevo" },
    { name: "Zagreb - Ljubljana", url: "/transfers/zagreb-to-ljubljana" },
    { name: "Zagreb - Vienna", url: "/transfers/zagreb-to-vienna" },
    { name: "Zagreb - Budapest", url: "/transfers/zagreb-to-budapest" },
    { name: "Zagreb - Venice", url: "/transfers/zagreb-to-venice" },
    { name: "Zagreb - Trieste", url: "/transfers/zagreb-to-trieste" },
    { name: "Zagreb - Milan", url: "/transfers/zagreb-to-milan" },
    { name: "Zagreb - Munich", url: "/transfers/zagreb-to-munich" },
    { name: "Zagreb - Graz", url: "/transfers/zagreb-to-graz" },
    { name: "Zagreb - Prague", url: "/transfers/zagreb-to-prague" },
    { name: "Zagreb - Krakow", url: "/transfers/zagreb-to-krakow" },
    { name: "Zagreb - Celje", url: "/transfers/zagreb-to-celje" },
    { name: "Zagreb - Portoroz", url: "/transfers/zagreb-to-portoroz" },
    { name: "Zagreb - Rome", url: "/transfers/zagreb-to-rome" },
    { name: "Zagreb - Passau", url: "/transfers/zagreb-to-passau" },
    { name: "Zagreb - Bihac", url: "/transfers/zagreb-to-bihac" },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center gap-2 mb-8">
          <Heart className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">{t.popularRoutes.title}</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {routes.map((route, index) => {
            const [origin, dest] = route.name.split(" - ");
            const buttonText = getRouteButtonText(origin, dest, language);
            return (
              <Link
                key={index}
                to={getLink(route.url)}
                className="px-4 py-2 bg-card border border-border rounded-lg text-sm text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {buttonText}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularRoutes;
