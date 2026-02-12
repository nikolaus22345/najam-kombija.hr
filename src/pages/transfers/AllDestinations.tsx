import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Euro } from "lucide-react";
import { Link } from "react-router-dom";

const AllDestinations = () => {
  const { t, language } = useLanguage();

  const destinationGroups = [
    {
      title: "Popular From Zagreb",
      destinations: [
        { name: "Zagreb to Split", distance: "380 km", duration: "4h", price: "€250", url: "/transfers/zagreb-to-split" },
        { name: "Zagreb to Dubrovnik", distance: "600 km", duration: "6h", price: "€380", url: "/transfers/zagreb-to-dubrovnik" },
        { name: "Zagreb to Zadar", distance: "285 km", duration: "3h", price: "€180", url: "/transfers/zagreb-to-zadar" },
        { name: "Zagreb to Plitvice Lakes", distance: "140 km", duration: "2h", price: "€120", url: "/transfers/zagreb-to-plitvice-lakes" },
        { name: "Zagreb to Rijeka", distance: "160 km", duration: "2h", price: "€130", url: "/transfers/zagreb-to-rijeka" },
        { name: "Zagreb to Pula", distance: "265 km", duration: "3h", price: "€170", url: "/transfers/zagreb-to-pula" },
        { name: "Zagreb to Rovinj", distance: "250 km", duration: "3h", price: "€160", url: "/transfers/zagreb-to-rovinj" },
        { name: "Zagreb to Opatija", distance: "175 km", duration: "2h", price: "€140", url: "/transfers/zagreb-to-opatija" },
      ]
    },
    {
      title: "International From Zagreb",
      destinations: [
        { name: "Zagreb to Ljubljana", distance: "140 km", duration: "1.5h", price: "€100", url: "/", state: { pickup: "Zagreb", dropoff: "Ljubljana" } },
        { name: "Zagreb to Belgrade", distance: "390 km", duration: "4h", price: "€280", url: "/transfers/zagreb-to-belgrade-airport" },
        { name: "Zagreb to Vienna", distance: "380 km", duration: "4h", price: "€280", url: "/", state: { pickup: "Zagreb", dropoff: "Vienna" } },
        { name: "Zagreb to Budapest", distance: "350 km", duration: "3.5h", price: "€260", url: "/transfers/zagreb-to-budapest" },
        { name: "Zagreb to Venice", distance: "385 km", duration: "4h", price: "€290", url: "/transfers/zagreb-to-venice" },
        { name: "Zagreb to Trieste", distance: "190 km", duration: "2.5h", price: "€160", url: "/transfers/zagreb-to-trieste" },
        { name: "Zagreb to Milan", distance: "640 km", duration: "6.5h", price: "€550", url: "/transfers/zagreb-to-milan" },
        { name: "Zagreb to Sarajevo", distance: "400 km", duration: "5h", price: "€300", url: "/transfers/zagreb-to-sarajevo-airport" },
        { name: "Zagreb to Prague", distance: "640 km", duration: "7h", price: "€600", url: "/transfers/zagreb-to-prague-airport" },
        { name: "Zagreb to Graz", distance: "180 km", duration: "2h", price: "€150", url: "/", state: { pickup: "Zagreb", dropoff: "Graz" } },
        { name: "Zagreb to Munich", distance: "550 km", duration: "6h", price: "€500", url: "/", state: { pickup: "Zagreb", dropoff: "Munich" } },
      ]
    },
    {
      title: "More Destinations From Zagreb",
      destinations: [
        { name: "Zagreb to Makarska", distance: "460 km", duration: "4.5h", price: "€320", url: "/transfers/zagreb-to-makarska" },
        { name: "Zagreb to Trogir", distance: "380 km", duration: "4h", price: "€260", url: "/transfers/zagreb-to-trogir" },
        { name: "Zagreb to Sisak", distance: "60 km", duration: "1h", price: "€60", url: "/transfers/zagreb-to-sisak" },
        { name: "Zagreb to Karlovac", distance: "55 km", duration: "45min", price: "€55", url: "/transfers/zagreb-to-karlovac" },
        { name: "Zagreb to Osijek", distance: "280 km", duration: "3h", price: "€220", url: "/transfers/zagreb-to-osijek" },
        { name: "Zagreb to Slavonski Brod", distance: "190 km", duration: "2h", price: "€150", url: "/transfers/zagreb-to-slavonski-brod" },
        { name: "Zagreb to Varazdin", distance: "85 km", duration: "1h", price: "€80", url: "/transfers/zagreb-to-varazdin" },
        { name: "Zagreb to Tisno", distance: "330 km", duration: "3.5h", price: "€240", url: "/transfers/zagreb-to-tisno" },
        { name: "Zagreb to Novalja", distance: "230 km", duration: "3.5h", price: "€250", url: "/transfers/zagreb-to-novalja" },
        { name: "Zagreb to Motovun", distance: "230 km", duration: "3h", price: "€200", url: "/transfers/zagreb-to-motovun" },
      ]
    },
    {
      title: "Airport Transfers",
      destinations: [
        { name: "Zagreb Airport to City Center", distance: "17 km", duration: "25min", price: "€30", url: "/transfers/zagreb-city-center" },
        { name: "Split Airport to City Center", distance: "25 km", duration: "30min", price: "€35", url: "/transfers/split-airport" },
        { name: "Zadar Airport to City Center", distance: "12 km", duration: "20min", price: "€25", url: "/transfers/zadar-airport" },
      ]
    },
    {
      title: "From Split",
      destinations: [
        { name: "Split to Dubrovnik", distance: "230 km", duration: "3h", price: "€180", url: "/transfers/split-to-dubrovnik" },
        { name: "Split to Plitvice Lakes", distance: "240 km", duration: "3h", price: "€200", url: "/", state: { pickup: "Split", dropoff: "Plitvice Lakes" } },
        { name: "Split to Zadar", distance: "160 km", duration: "1.5h", price: "€140", url: "/", state: { pickup: "Split", dropoff: "Zadar" } },
      ]
    }
  ];

  const getLinkProps = (dest: any) => {
    if (dest.url === '/') {
      return {
        to: `/${language}/`,
        state: dest.state
      };
    }
    return {
      to: `/${language}${dest.url}`
    };
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20">
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t.transfers.allDestinations.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {t.transfers.allDestinations.description}
            </p>
          </div>
        </section>

        {destinationGroups.map((group, groupIndex) => (
          <section key={groupIndex} className="py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                {group.title}
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.destinations.map((dest, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <MapPin className="w-5 h-5 text-primary" />
                        {dest.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {dest.duration} ({dest.distance})
                      </div>
                      <div className="flex items-center gap-2 text-lg font-semibold text-primary">
                        <Euro className="w-5 h-5" />
                        {dest.price}
                      </div>
                      <Link {...getLinkProps(dest)}>
                        <Button className="w-full">{t.transfers.bookNow}</Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default AllDestinations;
