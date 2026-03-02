import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Euro } from "lucide-react";

const ZagrebTransfers = () => {
  const { t, getLink } = useLanguage();
  const navigate = useNavigate();

  const destinations = [
    { name: "Plitvice Lakes", url: "/transfers/zagreb-to-plitvice-lakes", duration: "2h", price: "€120" },
    { name: "Ljubljana", url: "/transfers/zagreb-to-ljubljana", duration: "1.5h", price: "€80" },
    { name: "Lake Bled", url: "/transfers/zagreb-to-lake-bled", duration: "2.5h", price: "€140" },
    { name: "Split", url: "/transfers/zagreb-to-split", duration: "4h", price: "€200" },
    { name: "Opatija", url: "/transfers/zagreb-to-opatija", duration: "2h", price: "€100" },
    { name: "Rijeka", url: "/transfers/zagreb-to-rijeka", duration: "2h", price: "€100" },
    { name: "Zadar", url: "/transfers/zagreb-to-zadar", duration: "3h", price: "€150" },
    { name: "Pula", url: "/transfers/zagreb-to-pula", duration: "3h", price: "€150" },
    { name: "Rovinj", url: "/transfers/zagreb-to-rovinj", duration: "3h", price: "€150" },
    { name: "Budapest", url: "/transfers/zagreb-to-budapest", duration: "4h", price: "€180" },
    { name: "Venice", url: "/transfers/zagreb-to-venice", duration: "4.5h", price: "€220" },
    { name: "Vienna", url: "/transfers/zagreb-to-vienna", duration: "4h", price: "€200" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Zagreb Transfers
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Private transfer services from Zagreb to popular destinations in Croatia and neighboring countries.
            </p>
            <Button size="lg" onClick={() => navigate(`/${language}/get-quote`)}>
              Get a Quote
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations from Zagreb</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest, index) => (
              <Card key={index} className="p-6 hover:border-primary transition-colors cursor-pointer" onClick={() => navigate(`/${language}${dest.url}`)}>
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

export default ZagrebTransfers;
