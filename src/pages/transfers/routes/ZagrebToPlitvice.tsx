import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Euro, Users, Luggage, CheckCircle, Car } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ZagrebToPlitvice = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const vehicles = [
    { 
      type: "Sedan", 
      capacity: "1-3 passengers", 
      luggage: "2-3 suitcases",
      price: "€120",
      features: ["Free WiFi", "Air Conditioning", "Professional Driver"]
    },
    { 
      type: "Minivan", 
      capacity: "4-8 passengers", 
      luggage: "6-8 suitcases",
      price: "€160",
      features: ["Free WiFi", "Air Conditioning", "Professional Driver", "Extra Space"]
    },
    { 
      type: "Minibus", 
      capacity: "9-16 passengers", 
      luggage: "12-16 suitcases",
      price: "€220",
      features: ["Free WiFi", "Air Conditioning", "Professional Driver", "Group Travel"]
    },
  ];

  const highlights = [
    "Direct transfer - no stops",
    "Flight monitoring included",
    "Free cancellation up to 24h",
    "All taxes and fees included",
    "Child seats available",
    "Meet & Greet service"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 text-muted-foreground mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-medium">Zagreb</span>
              <span>→</span>
              <span className="font-medium">Plitvice Lakes National Park</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Zagreb to Plitvice Lakes Transfer
            </h1>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3 bg-background/80 backdrop-blur p-4 rounded-lg border border-border">
                <Clock className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="text-lg font-semibold">2 hours</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-background/80 backdrop-blur p-4 rounded-lg border border-border">
                <MapPin className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Distance</p>
                  <p className="text-lg font-semibold">140 km</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-background/80 backdrop-blur p-4 rounded-lg border border-border">
                <Euro className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Starting from</p>
                  <p className="text-lg font-semibold">€120</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="text-lg px-8 py-6">
              Book Your Transfer Now
            </Button>
          </div>
        </section>

        {/* Vehicle Options */}
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

        {/* Why Book With Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Why Book This Transfer
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

        {/* Route Information */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              About This Route
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Travel comfortably from Zagreb to the stunning Plitvice Lakes National Park, 
                one of Croatia's most beautiful natural wonders and a UNESCO World Heritage site. 
                Our professional drivers know the best routes and can provide recommendations for 
                your visit to the park.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                The journey takes approximately 2 hours through scenic Croatian countryside. 
                We offer door-to-door service with pickup from any location in Zagreb including 
                hotels, apartments, or Zagreb Airport.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">
                What's Included
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Professional English-speaking driver</li>
                <li>• Door-to-door service</li>
                <li>• All fuel, tolls, and parking fees</li>
                <li>• Free WiFi in vehicle</li>
                <li>• Bottled water</li>
                <li>• Flight monitoring (if pickup from airport)</li>
                <li>• Free cancellation up to 24 hours</li>
              </ul>
            </div>

            <div className="mt-8 p-6 bg-primary/10 rounded-lg border-l-4 border-primary">
              <h3 className="text-xl font-bold text-foreground mb-2">
                💡 Pro Tip
              </h3>
              <p className="text-muted-foreground">
                Book your transfer in advance during summer months (June-September) as 
                Plitvice Lakes is one of Croatia's most popular attractions and our vehicles 
                fill up quickly!
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Book Your Transfer?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Secure your comfortable ride to Plitvice Lakes. Book now and travel with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Book Now - From €120
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

export default ZagrebToPlitvice;
