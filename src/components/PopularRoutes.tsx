import { Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const PopularRoutes = () => {
  const { t } = useLanguage();

  const routes = [
    { name: "Split - Trogir", url: "/transfers/split-to-trogir" },
    { name: "Zagreb - Split", url: "/transfers/zagreb-to-split" },
    { name: "Zadar - Novalja", url: "/transfers/zadar-to-novalja" },
    { name: "Zagreb - Dubrovnik", url: "/transfers/zagreb-to-dubrovnik" },
    { name: "Split - Dubrovnik", url: "/transfers/split-to-dubrovnik" },
    { name: "Zadar - Split", url: "/transfers/zadar-to-split" },
    { name: "Zagreb - Zadar", url: "/transfers/zagreb-to-zadar" },
    { name: "Split - Hvar", url: "/transfers/split-to-hvar" },
    { name: "Dubrovnik - Mostar", url: "/transfers/dubrovnik-to-mostar" },
    { name: "Zagreb - Plitvice", url: "/transfers/zagreb-to-plitvice-lakes" },
    { name: "Split - Makarska", url: "/transfers/split-to-makarska" },
    { name: "Zadar - Pag", url: "/transfers/zadar-to-pag" },
    { name: "Zagreb - Rijeka", url: "/transfers/zagreb-to-rijeka" },
    { name: "Split - Bol", url: "/transfers/split-to-bol" },
    { name: "Dubrovnik - Cavtat", url: "/transfers/dubrovnik-to-cavtat" },
    { name: "Zagreb - Opatija", url: "/transfers/zagreb-to-opatija" },
    { name: "Split - Šibenik", url: "/transfers/split-to-sibenik" },
    { name: "Zadar - Biograd", url: "/transfers/zadar-to-biograd" },
    { name: "Zagreb - Karlovac", url: "/transfers/zagreb-to-karlovac" },
    { name: "Split - Omiš", url: "/transfers/split-to-omis" },
    { name: "Dubrovnik - Kotor", url: "/transfers/dubrovnik-to-kotor" },
    { name: "Zagreb - Samobor", url: "/transfers/zagreb-to-samobor" },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center gap-2 mb-8">
          <Heart className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">{t.popularRoutes.title}</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {routes.map((route, index) => (
            <Link
              key={index}
              to={route.url}
              className="px-4 py-2 bg-card border border-border rounded-lg text-sm text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              {route.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRoutes;
