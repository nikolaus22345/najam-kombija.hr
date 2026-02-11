import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bus, Truck, Car, Users, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Bus,
      title: "Bus Rental",
      subtitle: "Coach Rental Croatia",
      description: "Premium coach and bus rental services for large groups. Perfect for corporate events, school trips, and tours across Croatia and Europe.",
      features: ["Up to 50 passengers", "Professional drivers", "Air conditioning", "WiFi available"],
      link: "/services/coach-rental",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Truck,
      title: "Minibus Rental",
      subtitle: "8-16 Passenger Vehicles",
      description: "Comfortable minibus rental for medium-sized groups. Ideal for airport transfers, day trips, and group tours.",
      features: ["8-16 passengers", "Luggage space", "Comfortable seating", "Door-to-door service"],
      link: "/services/minibus-rental",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Car,
      title: "Van Rental",
      subtitle: "Mercedes V-Class & More",
      description: "Luxury van rental with professional drivers. Perfect for families, small groups, and VIP transfers.",
      features: ["Up to 8 passengers", "Premium vehicles", "Meet & greet", "Child seats available"],
      link: "/services/van-rental",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Chauffeur Service",
      subtitle: "Premium Executive Service",
      description: "Professional chauffeur-driven cars for business travelers, executives, and those seeking luxury transportation.",
      features: ["Mercedes S-Class", "BMW 7 Series", "Multilingual drivers", "24/7 availability"],
      link: "/services/chauffeur-service",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: Heart,
      title: "Wedding Limo",
      subtitle: "Luxury Wedding Transportation",
      description: "Make your special day unforgettable with our elegant wedding limousine service. Red carpet treatment included.",
      features: ["Decorated vehicles", "Champagne service", "Photo opportunities", "Flexible packages"],
      link: "/services/wedding-limo",
      color: "from-pink-500 to-pink-600"
    }
  ];

  const cityServices = [
    {
      city: "Zagreb",
      services: [
        { name: "Chauffeur Service Zagreb", link: "/services/chauffeur-service-zagreb" },
        { name: "Limo Service Zagreb", link: "/limo-service-zagreb" }
      ]
    },
    {
      city: "Dubrovnik",
      services: [
        { name: "Chauffeur Service Dubrovnik", link: "/services/chauffeur-service-dubrovnik" },
        { name: "Limo Service Dubrovnik", link: "/limo-service-dubrovnik" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm uppercase tracking-wider text-primary mb-2">Our Services</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Premium Transfer & Rental Services
            </h1>
            <p className="text-lg text-muted-foreground">
              From luxury limousines to spacious coaches, we offer a complete range of transportation 
              services across Croatia and Europe. Professional drivers, premium vehicles, 24/7 availability.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-r ${service.color} p-6`}>
                    <service.icon className="w-12 h-12 text-white mb-4" />
                    <h2 className="text-2xl font-bold text-white">{service.title}</h2>
                    <p className="text-white/80">{service.subtitle}</p>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to={service.link}>
                      <Button className="w-full group-hover:bg-primary">
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* City-Specific Services */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              City-Specific Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specialized chauffeur and limo services in Croatia's major cities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {cityServices.map((city, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">{city.city}</h3>
                  <div className="space-y-3">
                    {city.services.map((service, idx) => (
                      <Link key={idx} to={service.link} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors group">
                        <span className="text-foreground">{service.name}</span>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Need a Custom Quote?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Contact us for personalized pricing on any of our services. We offer competitive rates 
              and flexible packages tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-quote">
                <Button size="lg" variant="secondary">
                  Get a Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
