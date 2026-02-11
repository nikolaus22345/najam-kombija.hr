import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Euro, Users, Luggage, CheckCircle, Car, Coffee, Wifi } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ZagrebToSisak = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const vehicles = [
    { 
      type: "Sedan", 
      capacity: "1-3 passengers", 
      luggage: "2-3 suitcases",
      price: "€50",
      features: ["Free WiFi", "Air Conditioning", "Professional Driver", "Water Bottles"]
    },
    { 
      type: "Minivan", 
      capacity: "4-8 passengers", 
      luggage: "6-8 suitcases",
      price: "€70",
      features: ["Free WiFi", "Air Conditioning", "Professional Driver", "Extra Space", "USB Charging"]
    },
    { 
      type: "Minibus", 
      capacity: "9-16 passengers", 
      luggage: "12-16 suitcases",
      price: "€100",
      features: ["Free WiFi", "Air Conditioning", "Professional Driver", "Group Travel", "Comfort Seats"]
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        <section className="py-12 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 text-muted-foreground mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-medium">Zagreb</span>
              <span>→</span>
              <span className="font-medium">Sisak</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Zagreb to Sisak Transfer
            </h1>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3 bg-background/80 backdrop-blur p-4 rounded-lg border border-border">
                <Clock className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="text-lg font-semibold">45 min</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-background/80 backdrop-blur p-4 rounded-lg border border-border">
                <MapPin className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Distance</p>
                  <p className="text-lg font-semibold">55 km</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-background/80 backdrop-blur p-4 rounded-lg border border-border">
                <Euro className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Starting from</p>
                  <p className="text-lg font-semibold">€50</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6">
                Book Transfer Now
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

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Choose Your Vehicle
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {vehicles.map((vehicle, index) => (
                <Card key={index} className="hover:shadow-xl transition-all hover:scale-105 relative">
                  {index === 1 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
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
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Zagreb to Sisak - Premium Transfer Service
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Travel from Zagreb to Sisak, one of Croatia's oldest cities located at the 
                confluence of the Kupa and Sava rivers. Known for its Roman heritage as 
                ancient Siscia and its industrial history.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Sisak offers a glimpse into Croatia's Roman past with archaeological sites 
                and the nearby Lonjsko Polje Nature Park, one of Europe's largest wetlands 
                and a UNESCO-protected area.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-muted/50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Coffee className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold">Quick Trip</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Only 45 minutes from Zagreb. Perfect for 
                    business or day trip visits.
                  </p>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Wifi className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold">Stay Connected</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Free WiFi in vehicle. A comfortable and 
                    quick ride to Sisak.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
                What's Included
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Professional English-speaking driver</li>
                <li>• Door-to-door service from any Zagreb location</li>
                <li>• All tolls and fuel included</li>
                <li>• Free WiFi and USB charging</li>
                <li>• Bottled water</li>
                <li>• Flight monitoring if picking up from airport</li>
                <li>• Free cancellation up to 24 hours</li>
              </ul>
            </div>

            <div className="mt-8 p-6 bg-primary/10 rounded-lg border-l-4 border-primary">
              <h3 className="text-xl font-bold text-foreground mb-2">
                🏛️ Sisak Highlights
              </h3>
              <p className="text-muted-foreground mb-3">
                Explore Roman Siscia ruins, visit Lonjsko Polje Nature Park, 
                and see traditional wooden Posavina architecture.
              </p>
              <Button variant="outline">Ask About Sisak Recommendations</Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Book Your Zagreb to Sisak Transfer Today
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Safe, comfortable, and reliable. Discover historic Sisak with our premium transfer service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Book Now - From €50
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                WhatsApp Us: +385 123 456 789
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              ⭐ Rated 4.9/5 by 1,200+ travelers
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ZagrebToSisak;