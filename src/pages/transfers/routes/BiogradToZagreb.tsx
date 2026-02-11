import { Car, Users, Briefcase, Wifi, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const BiogradToZagreb = () => {
  const navigate = useNavigate();

  const vehicles = [
    { name: "Sedan", passengers: 3, luggage: 3, price: "€240", image: "/vehicle-sedan.png" },
    { name: "Minivan", passengers: 7, luggage: 7, price: "€300", image: "/vehicle-minivan.png" },
    { name: "Minibus", passengers: 16, luggage: 16, price: "€400", image: "/vehicle-minibus.png" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-4">Private Transfer from Biograd na Moru to Zagreb</h1>
            <p className="text-muted-foreground mb-8">Comfortable private transfer from Biograd na Moru to Zagreb, Croatia.</p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2"><MapPin className="w-5 h-5 text-primary" /><span>Distance: ~280 km</span></div>
              <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-primary" /><span>Duration: ~3h</span></div>
            </div>

            <h2 className="text-2xl font-semibold mb-6">Choose Your Vehicle</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {vehicles.map((vehicle) => (
                <Card key={vehicle.name} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">{vehicle.name}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2"><Users className="w-4 h-4" /><span>{vehicle.passengers} passengers</span></div>
                      <div className="flex items-center gap-2"><Briefcase className="w-4 h-4" /><span>{vehicle.luggage} luggage</span></div>
                      <div className="flex items-center gap-2"><Wifi className="w-4 h-4" /><span>Free WiFi</span></div>
                    </div>
                    <p className="text-2xl font-bold text-primary mb-4">{vehicle.price}</p>
                    <Button className="w-full" onClick={() => navigate("/booking")}>Book Now</Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="prose max-w-none">
              <h2>Biograd na Moru to Zagreb Transfer</h2>
              <p>Travel from the nautical center of Biograd na Moru to Zagreb. Enjoy a comfortable journey along the Croatian coast and through the interior.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BiogradToZagreb;
