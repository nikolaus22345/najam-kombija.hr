import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Euro } from "lucide-react";
import { Link } from "react-router-dom";

const ZagrebAirport = () => {
  const { t } = useLanguage();

  const destinations = [
    { name: "Plitvice Lakes", distance: "140 km", duration: "2h", price: "€120", url: "/transfers/zagreb-to-plitvice-lakes" },
    { name: "Ljubljana", distance: "140 km", duration: "1.5h", price: "€100", url: "/transfers/zagreb-to-ljubljana" },
    { name: "Lake Bled", distance: "230 km", duration: "2.5h", price: "€150", url: "/transfers/zagreb-to-lake-bled" },
    { name: "Split", distance: "380 km", duration: "4h", price: "€250", url: "/transfers/zagreb-to-split" },
    { name: "Zadar", distance: "285 km", duration: "3h", price: "€180", url: "/transfers/zagreb-to-zadar" },
    { name: "Rijeka", distance: "160 km", duration: "2h", price: "€130", url: "/transfers/zagreb-to-rijeka" },
    { name: "Pula", distance: "265 km", duration: "3h", price: "€170", url: "/transfers/zagreb-to-pula" },
    { name: "Rovinj", distance: "250 km", duration: "3h", price: "€160", url: "/transfers/zagreb-to-rovinj" },
    { name: "Opatija", distance: "175 km", duration: "2h", price: "€140", url: "/transfers/zagreb-to-opatija" },
    { name: "Zagreb City Center", distance: "17 km", duration: "25min", price: "€30", url: "/transfers/zagreb-city-center" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t.transfers.zagrebAirport.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {t.transfers.zagrebAirport.description}
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              {t.transfers.popularDestinations}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations.map((dest, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
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

            <div className="mt-12 text-center">
              <Link to="/transfers/all-destinations">
                <Button variant="outline" size="lg">
                  {t.transfers.seeAllDestinations}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ZagrebAirport;
