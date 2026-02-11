import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Euro } from "lucide-react";

const DubrovnikTransfers = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const destinations = [
    { name: "Split", url: "/transfers/dubrovnik-to-split", duration: "3h", price: "€180" },
    { name: "Kotor", url: "/transfers/dubrovnik-to-kotor", duration: "1.5h", price: "€100" },
    { name: "Mostar", url: "/transfers/dubrovnik-to-mostar", duration: "2.5h", price: "€120" },
    { name: "Sarajevo", url: "/transfers/dubrovnik-to-sarajevo", duration: "4h", price: "€180" },
    { name: "Budva", url: "/transfers/dubrovnik-to-budva", duration: "2h", price: "€120" },
    { name: "Medjugorje", url: "/transfers/dubrovnik-to-medjugorje", duration: "2h", price: "€110" },
    { name: "Korcula", url: "/transfers/dubrovnik-to-korcula", duration: "3h", price: "€150" },
    { name: "Makarska", url: "/transfers/dubrovnik-to-makarska", duration: "2h", price: "€130" },
    { name: "Cavtat", url: "/transfers/dubrovnik-to-cavtat", duration: "30min", price: "€40" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Dubrovnik Transfers
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Private transfer services from Dubrovnik to Croatia, Bosnia & Herzegovina, and Montenegro.
            </p>
            <Button size="lg" onClick={() => navigate("/get-quote")}>
              Get a Quote
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations from Dubrovnik</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest, index) => (
              <Card key={index} className="p-6 hover:border-primary transition-colors cursor-pointer" onClick={() => navigate(dest.url)}>
                <div className="flex items-start gap-4">
                  <MapPin className="w-8 h-8 text-primary flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">{dest.name}</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{dest.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Euro className="w-4 h-4" />
                        <span>From {dest.price}</span>
                      </div>
                    </div>
                    <Button size="sm" className="mt-4 w-full">
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

export default DubrovnikTransfers;
