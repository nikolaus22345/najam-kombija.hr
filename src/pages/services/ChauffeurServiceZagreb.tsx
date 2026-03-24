import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Crown, Shield, Clock, Star, Briefcase, Wine, Users, Check } from "lucide-react";

const ChauffeurServiceZagreb = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Briefcase,
      title: "Business Travel",
      description: "Professional chauffeur service for executives and business meetings"
    },
    {
      icon: Wine,
      title: "VIP Events",
      description: "Luxury transport for special occasions and corporate events"
    },
    {
      icon: Users,
      title: "Airport Transfers",
      description: "Premium meet & greet service at Zagreb Airport"
    },
    {
      icon: Clock,
      title: "Hourly Service",
      description: "Flexible hourly bookings with experienced chauffeur"
    }
  ];

  const vehicles = [
    {
      name: "Mercedes S-Class",
      capacity: "3 passengers",
      features: ["Leather interior", "WiFi", "Refreshments", "Privacy glass"]
    },
    {
      name: "Mercedes E-Class",
      capacity: "3 passengers", 
      features: ["Premium comfort", "Climate control", "Phone chargers", "Bottled water"]
    },
    {
      name: "Mercedes V-Class",
      capacity: "6 passengers",
      features: ["Executive seating", "Spacious interior", "Entertainment system", "Premium service"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Seo />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/20 via-background to-primary/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(246,195,68,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Crown className="w-20 h-20 text-primary mx-auto mb-6 animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Chauffeur Service Zagreb
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Executive Chauffeur Services in Zagreb
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience premium chauffeur-driven luxury in Croatia's capital. Professional drivers, impeccable vehicles, and personalized service for discerning clients.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                Book Your Chauffeur
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate("/contact")} className="border-primary text-primary hover:bg-primary/10">
                Enquire Now
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
            <h2 className="text-4xl font-bold mb-4">Premium Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tailored chauffeur services to meet your every need in Zagreb
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
            <h2 className="text-4xl font-bold mb-4">Luxury Fleet</h2>
            <p className="text-muted-foreground text-lg">
              Impeccably maintained premium vehicles
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
                  Select Vehicle
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our Zagreb Chauffeur Service</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <Crown className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Premium Experience</h3>
                <p className="text-muted-foreground">
                  White-glove service with attention to every detail. Our chauffeurs are professionally trained, discreet, and multilingual.
                </p>
              </Card>
              <Card className="p-6">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Safety First</h3>
                <p className="text-muted-foreground">
                  All vehicles regularly serviced and maintained to the highest standards. Fully licensed and insured drivers.
                </p>
              </Card>
              <Card className="p-6">
                <Clock className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Punctuality Guaranteed</h3>
                <p className="text-muted-foreground">
                  We value your time. Our chauffeurs arrive early and monitor flight times for airport pickups.
                </p>
              </Card>
              <Card className="p-6">
                <Star className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Personalized Service</h3>
                <p className="text-muted-foreground">
                  Tailored to your preferences - from temperature settings to your favorite refreshments.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Luxury?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book your premium chauffeur service in Zagreb today
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
              Book Now
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/contact")}>
              Contact Us
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Available 24/7 • Instant Confirmation • Professional Service
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChauffeurServiceZagreb;

