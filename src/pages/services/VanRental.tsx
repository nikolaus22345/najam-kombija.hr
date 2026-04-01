import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Shield, Luggage } from "lucide-react";
import RatingInfo from "@/components/RatingInfo";

const VanRental = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const features = [
    {
      icon: Users,
      title: "4-8 Passengers",
      description: "Ideal for small groups and families"
    },
    {
      icon: Luggage,
      title: "Spacious Interior",
      description: "Plenty of room for luggage"
    },
    {
      icon: Shield,
      title: "Comfort & Safety",
      description: "Modern vehicles, professional drivers"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={t.servicesPage?.vanRental?.title || (language === 'hr' ? "Najam kombija u Hrvatskoj" : language === 'de' ? "Transporter mieten Kroatien" : "Van Rental Croatia")}
        description={t.servicesPage?.vanRental?.subtitle || (language === 'hr' ? "Premium usluga najma kombija za obitelji i manje grupe u Hrvatskoj." : "Premium van rental services for families and groups across Croatia.")}
      />
      <Header />

      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t.servicesPage?.vanRental?.title || (language === 'hr' ? "Najam kombija u Hrvatskoj" : "Van Rental Croatia")}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t.servicesPage?.vanRental?.subtitle || "Premium van rental services for families and small groups traveling across Croatia."}
            </p>
            <div className="flex justify-center mb-8">
              <RatingInfo seedText="Van Rental Croatia" basePrice={80} />
            </div>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" onClick={() => navigate(`/${language}/get-quote`)}>
                {t.servicesPage?.vanRental?.getQuote || "Get a Quote"}
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate(`/${language}/contact`)}>
                {t.servicesPage?.vanRental?.contactUs || "Contact Us"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 text-center">
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VanRental;
