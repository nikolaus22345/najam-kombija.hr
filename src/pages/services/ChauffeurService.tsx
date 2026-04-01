import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Crown, Shield, Clock, Star } from "lucide-react";
import RatingInfo from "@/components/RatingInfo";

const ChauffeurService = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const features = [
    {
      icon: Crown,
      title: "Premium Experience",
      description: "Luxury vehicles and VIP service"
    },
    {
      icon: Shield,
      title: "Professional Chauffeurs",
      description: "Highly trained and discreet drivers"
    },
    {
      icon: Clock,
      title: "Available 24/7",
      description: "Round-the-clock service"
    },
    {
      icon: Star,
      title: "Personalized Service",
      description: "Tailored to your needs"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Seo />
      <Header />
      
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Chauffeur Service Croatia
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Executive chauffeur services throughout Croatia. Professional, discreet, and luxurious transportation for business and leisure.
            </p>
            <div className="flex justify-center mb-8">
              <RatingInfo seedText="Chauffeur Service Croatia" basePrice={60} />
            </div>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" onClick={() => navigate("/get-quote")}>
                Book Now
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate("/contact")}>
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center">
                <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">City Services</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card className="p-6 hover:border-primary transition-colors cursor-pointer" onClick={() => navigate("/chauffeur-service-zagreb")}>
              <h3 className="text-xl font-semibold mb-2">Zagreb Chauffeur Service</h3>
              <p className="text-muted-foreground">Premium chauffeur services in the capital</p>
            </Card>
            <Card className="p-6 hover:border-primary transition-colors cursor-pointer" onClick={() => navigate("/chauffeur-service-dubrovnik")}>
              <h3 className="text-xl font-semibold mb-2">Dubrovnik Chauffeur Service</h3>
              <p className="text-muted-foreground">Luxury transport in the pearl of the Adriatic</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChauffeurService;

