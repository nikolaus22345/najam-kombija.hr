import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plane, MapPin, Clock } from "lucide-react";

const ZagrebAirportTransfers = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const destinations = [
    { name: "Zagreb City Center", url: "/airport-transfers/zagreb-to-city-center", duration: "30min", price: "€30" },
    { name: "Ljubljana", url: "/airport-transfers/zagreb-to-ljubljana", duration: "1.5h", price: "€80" },
    { name: "Plitvice Lakes", url: "/airport-transfers/zagreb-to-plitvice-lakes", duration: "2h", price: "€120" },
    { name: "Rijeka", url: "/airport-transfers/zagreb-to-rijeka", duration: "2h", price: "€100" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Plane className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Zagreb Airport Transfers
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Reliable airport transfer services from Zagreb Airport to any destination in Croatia and beyond.
            </p>
            <Button size="lg" onClick={() => navigate("/get-quote")}>
              Book Transfer
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Routes from Zagreb Airport</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {destinations.map((dest, index) => (
              <Card key={index} className="p-6 hover:border-primary transition-colors cursor-pointer" onClick={() => navigate(dest.url)}>
                <div className="flex items-start gap-4">
                  <MapPin className="w-8 h-8 text-primary flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">{dest.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{dest.duration}</span>
                      </div>
                      <span>From {dest.price}</span>
                    </div>
                    <Button size="sm" className="w-full">
                      Book Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ZagrebAirportTransfers;
