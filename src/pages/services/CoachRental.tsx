import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bus, Users, Shield, Clock } from "lucide-react";

const CoachRental = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const features = [
    {
      icon: Users,
      title: "Up to 50 Passengers",
      description: "Spacious coaches for large groups"
    },
    {
      icon: Shield,
      title: "Professional Drivers",
      description: "Experienced and licensed drivers"
    },
    {
      icon: Clock,
      title: "Flexible Rentals",
      description: "Hourly, daily, or multi-day rentals"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Bus Rental Croatia
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Premium coach rental services for groups throughout Croatia. Modern fleet, professional drivers, and competitive rates.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" onClick={() => navigate("/get-quote")}>
                Get a Quote
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate("/contact")}>
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center">
                <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Details */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Coach Fleet</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="flex items-start gap-6">
                <Bus className="w-16 h-16 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Premium Coach</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✓ 50-55 passenger capacity</li>
                    <li>✓ Air conditioning</li>
                    <li>✓ Reclining seats</li>
                    <li>✓ Luggage compartment</li>
                    <li>✓ Audio/video system</li>
                    <li>✓ WiFi available</li>
                    <li>✓ Professional driver included</li>
                  </ul>
                  <div className="mt-6">
                    <Button onClick={() => navigate("/get-quote")}>
                      Request Quote
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoachRental;
