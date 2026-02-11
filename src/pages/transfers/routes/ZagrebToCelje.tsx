import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Users, Briefcase, Check } from "lucide-react";

const ZagrebToCelje = () => {
  const navigate = useNavigate();

  const vehicles = [
    { type: "Sedan", capacity: 3, luggage: 3, price: "€120", features: ["Free WiFi", "Air Conditioning", "Water Bottles"] },
    { type: "Minivan", capacity: 7, luggage: 7, price: "€160", features: ["Free WiFi", "Air Conditioning", "Extra Luggage Space"] },
    { type: "Minibus", capacity: 16, luggage: 16, price: "€250", features: ["Free WiFi", "Air Conditioning", "Comfortable Seating"] },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <MapPin className="w-8 h-8 text-primary" />
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">Zagreb to Celje</h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8">Private transfer to Slovenia's third-largest city</p>
              <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-primary" /><span>~1.5 hours</span></div>
                <div className="flex items-center gap-2"><MapPin className="w-5 h-5 text-primary" /><span>110 km</span></div>
                <div className="flex items-center gap-2"><span className="text-2xl font-bold text-primary">From €120</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Choose Your Vehicle</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {vehicles.map((vehicle) => (
                <Card key={vehicle.type} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">{vehicle.type}</h3>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2"><Users className="w-4 h-4 text-primary" /><span>Up to {vehicle.capacity} passengers</span></div>
                      <div className="flex items-center gap-2"><Briefcase className="w-4 h-4 text-primary" /><span>{vehicle.luggage} luggage pieces</span></div>
                    </div>
                    <div className="space-y-2 mb-6">
                      {vehicle.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-green-500" /><span>{feature}</span></div>
                      ))}
                    </div>
                    <div className="text-2xl font-bold text-primary mb-4">{vehicle.price}</div>
                    <Button className="w-full" onClick={() => navigate("/booking")}>Book Now</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">About This Route</h2>
              <p className="text-muted-foreground mb-4">Quick transfer from Zagreb to Celje, a historic Slovenian city known for its medieval castle and rich history.</p>
              <p className="text-muted-foreground mb-6">Visit the impressive Celje Castle, explore the old town, and discover this charming Central European city.</p>
              <div className="flex gap-4">
                <Button onClick={() => navigate("/booking")}>Book This Transfer</Button>
                <Button variant="outline" onClick={() => navigate("/get-quote")}>Get a Quote</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ZagrebToCelje;