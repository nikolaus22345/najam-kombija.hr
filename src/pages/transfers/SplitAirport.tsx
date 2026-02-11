import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Euro } from "lucide-react";
import { Link } from "react-router-dom";

const SplitAirport = () => {
  const { t } = useLanguage();

  const destinations = [
    { name: "Dubrovnik", distance: "230 km", duration: "3h", price: "€180" },
    { name: "Zagreb", distance: "380 km", duration: "4h", price: "€250" },
    { name: "Zadar", distance: "160 km", duration: "2h", price: "€130" },
    { name: "Makarska", distance: "75 km", duration: "1h", price: "€80" },
    { name: "Trogir", distance: "10 km", duration: "15min", price: "€25" },
    { name: "Hvar", distance: "68 km + ferry", duration: "2h", price: "€120" },
    { name: "Brač", distance: "Ferry", duration: "1h", price: "€90" },
    { name: "Split City Center", distance: "25 km", duration: "30min", price: "€35" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t.transfers.splitAirport.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {t.transfers.splitAirport.description}
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
                    <Button className="w-full">{t.transfers.bookNow}</Button>
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

export default SplitAirport;
