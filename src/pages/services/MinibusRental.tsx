import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Shield, Clock } from "lucide-react";

const MinibusRental = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const features = [
    {
      icon: Users,
      title: "8-20 Passengers",
      description: "Perfect for medium-sized groups"
    },
    {
      icon: Shield,
      title: "Professional Service",
      description: "Experienced and reliable drivers"
    },
    {
      icon: Clock,
      title: "Flexible Options",
      description: "Hourly or daily rentals available"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t.servicesPage.minibusRental.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t.servicesPage.minibusRental.subtitle}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" onClick={() => navigate(`/${t.servicesPage?.minibusRental ? language : 'en'}/get-quote`)}>
                {t.servicesPage.minibusRental.getQuote}
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate(`/${t.servicesPage?.minibusRental ? language : 'en'}/contact`)}>
                {t.servicesPage.minibusRental.contactUs}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t.servicesPage.minibusRental.features.capacity.title}</h3>
              <p className="text-muted-foreground">{t.servicesPage.minibusRental.features.capacity.desc}</p>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t.servicesPage.minibusRental.features.service.title}</h3>
              <p className="text-muted-foreground">{t.servicesPage.minibusRental.features.service.desc}</p>
            </Card>
            <Card className="p-6 text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t.servicesPage.minibusRental.features.flexible.title}</h3>
              <p className="text-muted-foreground">{t.servicesPage.minibusRental.features.flexible.desc}</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MinibusRental;
