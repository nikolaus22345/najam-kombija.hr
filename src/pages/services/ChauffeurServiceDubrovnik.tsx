import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Crown, Shield, Clock, Star, Anchor, Camera, Map, Check } from "lucide-react";

const ChauffeurServiceDubrovnik = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Anchor,
      title: "Port Transfers",
      description: "VIP service for cruise ship passengers and yacht owners"
    },
    {
      icon: Camera,
      title: "City Tours",
      description: "Private guided tours of Dubrovnik's Old Town and surrounding areas"
    },
    {
      icon: Map,
      title: "Day Trips",
      description: "Chauffeur-driven excursions to Montenegro, Mostar, and wine regions"
    },
    {
      icon: Clock,
      title: "On-Demand Service",
      description: "Available 24/7 for your convenience"
    }
  ];

  const vehicles = [
    {
      name: "Mercedes S-Class",
      capacity: "3 passengers",
      features: ["Ultimate luxury", "Panoramic roof", "Premium sound", "Full privacy"]
    },
    {
      name: "BMW 7 Series",
      capacity: "3 passengers", 
      features: ["Executive comfort", "Advanced tech", "Climate seats", "Ambient lighting"]
    },
    {
      name: "Mercedes V-Class VIP",
      capacity: "6 passengers",
      features: ["Captain seats", "Entertainment", "Bar service", "Premium finishes"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/20 via-background to-primary/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(246,195,68,0.15),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Crown className="w-20 h-20 text-primary mx-auto mb-6 animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Chauffeur Service Dubrovnik
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Luxury Chauffeur Services in the Pearl of the Adriatic
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover Dubrovnik in ultimate comfort and style. Premium vehicles, professional chauffeurs, and bespoke service tailored to your needs.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                Reserve Your Chauffeur
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate("/contact")} className="border-primary text-primary hover:bg-primary/10">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Star className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">Exclusive Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Curated chauffeur experiences for luxury travelers in Dubrovnik
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-xl transition-all hover:border-primary group">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">Premium Fleet</h2>
            <p className="text-muted-foreground text-lg">
              Exclusively selected luxury vehicles for your comfort
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {vehicles.map((vehicle, index) => (
              <Card key={index} className="p-8 hover:shadow-2xl transition-all border-2 hover:border-primary">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{vehicle.name}</h3>
                  <p className="text-primary font-semibold">{vehicle.capacity}</p>
                </div>
                <ul className="space-y-3">
                  {vehicle.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Choose Vehicle
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">The Dubrovnik Experience</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <Anchor className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Cruise & Yacht Service</h3>
                <p className="text-muted-foreground">
                  Seamless port transfers and personalized shore excursions. Meet & greet service at the cruise terminal or marina.
                </p>
              </Card>
              <Card className="p-6">
                <Camera className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Private Tours</h3>
                <p className="text-muted-foreground">
                  Explore UNESCO World Heritage sites, hidden gems, and breathtaking coastal routes with a knowledgeable chauffeur.
                </p>
              </Card>
              <Card className="p-6">
                <Clock className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">24/7 Availability</h3>
                <p className="text-muted-foreground">
                  Round-the-clock service for airport transfers, late arrivals, and early departures.
                </p>
              </Card>
              <Card className="p-6">
                <Star className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Bespoke Service</h3>
                <p className="text-muted-foreground">
                  Customized itineraries, wine tasting tours, restaurant reservations, and concierge services.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Elevate Your Dubrovnik Experience</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book your luxury chauffeur service and discover Dubrovnik in style
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
              Book Now
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/contact")}>
              Enquire
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            VIP Service • Luxury Vehicles • Professional Chauffeurs
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChauffeurServiceDubrovnik;
