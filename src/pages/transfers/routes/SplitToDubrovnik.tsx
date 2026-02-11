import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Euro, Users, Luggage, CheckCircle, Car, Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SplitToDubrovnik = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const vehicles = [
    { 
      type: "Sedan", 
      capacity: "1-3 passengers", 
      luggage: "2-3 suitcases",
      price: "€180",
      features: ["Free WiFi", "Air Conditioning", "Professional Driver"]
    },
    { 
      type: "Minivan", 
      capacity: "4-8 passengers", 
      luggage: "6-8 suitcases",
      price: "€240",
      features: ["Free WiFi", "Air Conditioning", "Professional Driver", "Extra Space"]
    },
    { 
      type: "Minibus", 
      capacity: "9-16 passengers", 
      luggage: "12-16 suitcases",
      price: "€340",
      features: ["Free WiFi", "Air Conditioning", "Professional Driver", "Group Travel"]
    },
  ];

  const highlights = [
    "Scenic coastal drive",
    "Photo stops available",
    "Free cancellation 24h",
    "All tolls included",
    "English-speaking driver",
    "Door-to-door service"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        <section className="py-12 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 text-muted-foreground mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-medium">Split</span>
              <span>→</span>
              <span className="font-medium">Dubrovnik</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Split to Dubrovnik Transfer
            </h1>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3 bg-background/80 backdrop-blur p-4 rounded-lg border border-border">
                <Clock className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="text-lg font-semibold">3 hours</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-background/80 backdrop-blur p-4 rounded-lg border border-border">
                <MapPin className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Distance</p>
                  <p className="text-lg font-semibold">230 km</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-background/80 backdrop-blur p-4 rounded-lg border border-border">
                <Euro className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Starting from</p>
                  <p className="text-lg font-semibold">€180</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="text-lg px-8 py-6">
              Book Your Transfer Now
            </Button>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Choose Your Vehicle
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {vehicles.map((vehicle, index) => (
                <Card key={index} className="hover:shadow-xl transition-all hover:scale-105">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-2xl">{vehicle.type}</CardTitle>
                      <Car className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{vehicle.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Luggage className="w-4 h-4" />
                      <span className="text-sm">{vehicle.luggage}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {vehicle.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-4 border-t">
                      <div className="text-3xl font-bold text-primary mb-4">
                        {vehicle.price}
                      </div>
                      <Button className="w-full" size="lg">
                        Book {vehicle.type}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Why Choose This Transfer
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 bg-muted/50 p-4 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              The Most Beautiful Coastal Drive in Croatia
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Experience one of Europe's most spectacular coastal drives from Split to Dubrovnik. 
                The journey takes you along the stunning Dalmatian coast with breathtaking views of 
                the Adriatic Sea, picturesque towns, and dramatic landscapes.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Arrive in Dubrovnik, the "Pearl of the Adriatic" and UNESCO World Heritage site, 
                known for its magnificent old town walls, marble streets, and rich history.
              </p>

              <div className="bg-muted/50 p-6 rounded-lg my-8">
                <div className="flex items-center gap-3 mb-4">
                  <Camera className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold">Photo Stop Opportunities</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Request photo stops at scenic viewpoints along the way:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Makarska Riviera viewpoint</li>
                  <li>• Neretva River Delta</li>
                  <li>• Ston walls (optional stop)</li>
                  <li>• Dubrovnik panorama point</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Experience the Adriatic Coast?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book your comfortable transfer from Split to Dubrovnik and enjoy the scenic journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Book Now - From €180
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6"
                onClick={() => navigate('/get-quote')}
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SplitToDubrovnik;
