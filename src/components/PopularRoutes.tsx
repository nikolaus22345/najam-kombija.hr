import { Heart } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "react-router-dom";
import { getRouteButtonText } from "../lib/city-translations";
import { calculateTransferPrice } from "../lib/pricing";

const PopularRoutes = () => {
  const { t, getLink, language } = useLanguage();

  const routes = [
    { name: "Zagreb - Split", url: "/transfers/zagreb-to-split", distance: 410 },
    { name: "Zagreb - Dubrovnik", url: "/transfers/zagreb-to-dubrovnik", distance: 600 },
    { name: "Zagreb - Plitvice Lakes", url: "/transfers/zagreb-to-plitvice-lakes", distance: 140 },
    { name: "Zagreb - Zadar", url: "/transfers/zagreb-to-zadar", distance: 285 },
    { name: "Zagreb - Rijeka", url: "/transfers/zagreb-to-rijeka", distance: 160 },
    { name: "Zagreb - Pula", url: "/transfers/zagreb-to-pula", distance: 265 },
    { name: "Zagreb - Rovinj", url: "/transfers/zagreb-to-rovinj", distance: 250 },
    { name: "Zagreb - Opatija", url: "/transfers/zagreb-to-opatija", distance: 175 },
    { name: "Zagreb - Sarajevo", url: "/transfers/zagreb-to-sarajevo", distance: 400 },
    { name: "Zagreb - Ljubljana", url: "/transfers/zagreb-to-ljubljana", distance: 140 },
    { name: "Zagreb - Vienna", url: "/transfers/zagreb-to-vienna", distance: 380 },
    { name: "Zagreb - Budapest", url: "/transfers/zagreb-to-budapest", distance: 350 },
    { name: "Zagreb - Venice", url: "/transfers/zagreb-to-venice", distance: 385 },
    { name: "Zagreb - Munich", url: "/transfers/zagreb-to-munich", distance: 550 },
    { name: "Zagreb - Graz", url: "/transfers/zagreb-to-graz", distance: 180 },
    { name: "Zagreb - Belgrade", url: "/transfers/zagreb-to-belgrade", distance: 390 },
    { name: "Vodice - Zagreb", url: "/", state: { pickup: "Vodice", dropoff: "Zagreb" }, distance: 330 },
    { name: "Vodice - Split", url: "/", state: { pickup: "Vodice", dropoff: "Split" }, distance: 100 },
    { name: "Vodice - Zadar", url: "/", state: { pickup: "Vodice", dropoff: "Zadar" }, distance: 80 },
    { name: "Vodice - Plitvice", url: "/", state: { pickup: "Vodice", dropoff: "Plitvice Lakes" }, distance: 180 },
    { name: "Vodice - Dubrovnik", url: "/", state: { pickup: "Vodice", dropoff: "Dubrovnik" }, distance: 300 },
    { name: "Zagreb - Korenica", url: "/", state: { pickup: "Zagreb", dropoff: "Korenica" }, distance: 170 },
    { name: "Zagreb - Donja Stubica", url: "/", state: { pickup: "Zagreb", dropoff: "Donja Stubica" }, distance: 40 },
    { name: "Zagreb - Rimini", url: "/", state: { pickup: "Zagreb", dropoff: "Rimini" }, distance: 550 },
    { name: "Zagreb - Malinska", url: "/", state: { pickup: "Zagreb", dropoff: "Malinska" }, distance: 175 },
    { name: "Zagreb - Žumberak", url: "/", state: { pickup: "Zagreb", dropoff: "Zumberak" }, distance: 60 },
    { name: "Zagreb - Maslenica", url: "/", state: { pickup: "Zagreb", dropoff: "Maslenica" }, distance: 260 },
    { name: "Zagreb - Soča", url: "/", state: { pickup: "Zagreb", dropoff: "Soca" }, distance: 250 },

  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center gap-2 mb-8">
          <Heart className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">{t.popularRoutes.title}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {routes.map((route, index) => {
            const [origin, dest] = route.name.split(" - ");
            const buttonText = getRouteButtonText(origin, dest, language);
            const price = calculateTransferPrice(origin, dest, (route as any).distance || 100).sedan;
            
            return (
              <Link
                key={index}
                to={getLink(route.url)}
                state={(route as any).state}
                className="flex items-center justify-between px-4 py-3 bg-card border border-border rounded-xl text-foreground hover:border-primary hover:shadow-md transition-all group"
              >
                <span className="text-sm font-medium group-hover:text-primary transition-colors">{buttonText}</span>
                <span className="text-sm font-bold text-primary bg-primary/10 px-2 py-1 rounded-lg">€{price}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularRoutes;
