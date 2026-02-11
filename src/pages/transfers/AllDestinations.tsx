import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Euro } from "lucide-react";
import { Link } from "react-router-dom";

const AllDestinations = () => {
  const { t } = useLanguage();

  const destinationGroups = [
    {
      title: "Airport Transfers",
      destinations: [
        { name: "Zagreb Airport to City Center", distance: "17 km", duration: "25min", price: "€30", url: "/transfers/zagreb-city-center" },
        { name: "Split Airport to City Center", distance: "25 km", duration: "30min", price: "€35", url: "/transfers/split-airport" },
        { name: "Zadar Airport to City Center", distance: "12 km", duration: "20min", price: "€25", url: "/transfers/zadar-airport" },
        { name: "Dubrovnik Airport to City Center", distance: "22 km", duration: "30min", price: "€35", url: "/transfers/zagreb-airport" },
        { name: "Pula Airport to City Center", distance: "7 km", duration: "15min", price: "€20", url: "/transfers/zagreb-airport" },
      ]
    },
    {
      title: "Popular Croatian Routes",
      destinations: [
        { name: "Zagreb to Split", distance: "380 km", duration: "4h", price: "€250", url: "/transfers/zagreb-to-split" },
        { name: "Zagreb to Dubrovnik", distance: "600 km", duration: "6h", price: "€380", url: "/transfers/zagreb-to-dubrovnik" },
        { name: "Split to Dubrovnik", distance: "230 km", duration: "3h", price: "€180", url: "/transfers/split-to-dubrovnik" },
        { name: "Zagreb to Zadar", distance: "285 km", duration: "3h", price: "€180", url: "/transfers/zagreb-to-zadar" },
        { name: "Zagreb to Pula", distance: "265 km", duration: "3h", price: "€170", url: "/transfers/zagreb-to-pula" },
        { name: "Zagreb to Rijeka", distance: "160 km", duration: "2h", price: "€130", url: "/transfers/zagreb-to-rijeka" },
        { name: "Zagreb to Rovinj", distance: "250 km", duration: "3h", price: "€160", url: "/transfers/zagreb-to-rovinj" },
        { name: "Zagreb to Opatija", distance: "175 km", duration: "2h", price: "€140", url: "/transfers/zagreb-to-opatija" },
      ]
    },
    {
      title: "International Connections",
      destinations: [
        { name: "Zagreb to Ljubljana", distance: "140 km", duration: "1.5h", price: "€100", url: "/transfers/zagreb-to-ljubljana" },
        { name: "Zagreb to Lake Bled", distance: "230 km", duration: "2.5h", price: "€150", url: "/transfers/zagreb-to-lake-bled" },
        { name: "Zagreb to Vienna", distance: "380 km", duration: "4h", price: "€280", url: "/transfers/zagreb-to-vienna" },
        { name: "Zagreb to Budapest", distance: "350 km", duration: "3.5h", price: "€260", url: "/transfers/zagreb-to-budapest" },
        { name: "Zagreb to Venice", distance: "385 km", duration: "4h", price: "€290", url: "/transfers/zagreb-to-venice" },
        { name: "Zagreb to Trieste", distance: "190 km", duration: "2.5h", price: "€160", url: "/transfers/zagreb-to-trieste" },
      ]
    },
    {
      title: "National Parks",
      destinations: [
        { name: "Zagreb to Plitvice Lakes", distance: "140 km", duration: "2h", price: "€120", url: "/transfers/zagreb-to-plitvice-lakes" },
        { name: "Zadar to Plitvice Lakes", distance: "130 km", duration: "2h", price: "€110", url: "/transfers/zadar-to-plitvice-lakes" },
        { name: "Split to Krka National Park", distance: "80 km", duration: "1h", price: "€85", url: "/transfers/split-to-krka" },
      ]
    },
    {
      title: "Coastal Destinations",
      destinations: [
        { name: "Zadar to Novalja (Pag)", distance: "85 km", duration: "1.5h", price: "€90", url: "/transfers/zadar-to-novalja" },
        { name: "Zadar to Tisno", distance: "60 km", duration: "1h", price: "€70", url: "/transfers/zadar-to-tisno" },
        { name: "Split to Makarska", distance: "75 km", duration: "1h", price: "€80", url: "/transfers/split-to-makarska" },
        { name: "Split to Trogir", distance: "10 km", duration: "15min", price: "€25", url: "/transfers/split-to-trogir" },
        { name: "Split to Hvar", distance: "68 km + ferry", duration: "2h", price: "€120", url: "/transfers/split-to-hvar" },
      ]
    }
  ];

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
                      <Link to={dest.url}>
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
