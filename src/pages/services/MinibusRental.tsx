import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Shield, Clock } from "lucide-react";
import RatingInfo from "@/components/RatingInfo";

const MinibusRental = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const features = [
    {
      icon: Users,
      title: t.servicesPage?.minibusRental?.features?.capacity?.title || "8-20 Passengers",
      description: t.servicesPage?.minibusRental?.features?.capacity?.desc || "Perfect for medium-sized groups"
    },
    {
      icon: Shield,
      title: t.servicesPage?.minibusRental?.features?.service?.title || "Professional Service",
      description: t.servicesPage?.minibusRental?.features?.service?.desc || "Experienced and reliable drivers"
    },
    {
      icon: Clock,
      title: t.servicesPage?.minibusRental?.features?.flexible?.title || "Flexible Options",
      description: t.servicesPage?.minibusRental?.features?.flexible?.desc || "Hourly or daily rentals available"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Seo 
        title={t.servicesPage?.minibusRental?.title ? `${t.servicesPage.minibusRental.title} | Zagreb Transfers` : "Minibus Rental Croatia"} 
        description={t.servicesPage?.minibusRental?.subtitle || "Comfortable minibus rentals for medium groups across Croatia."} 
      />
      <Header />

      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t.servicesPage?.minibusRental?.title || "Minibus Rental Croatia"}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t.servicesPage?.minibusRental?.subtitle || "Comfortable minibus rentals for small to medium groups across Croatia. Modern vehicles and professional drivers."}
            </p>
            <div className="flex justify-center mb-8">
              <RatingInfo seedText="Minibus Rental Croatia" basePrice={120} />
            </div>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" onClick={() => navigate(`/${language}/get-quote`)}>
                {t.servicesPage?.minibusRental?.getQuote || "Get a Quote"}
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate(`/${language}/contact`)}>
                {t.servicesPage?.minibusRental?.contactUs || "Contact Us"}
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
            )})}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MinibusRental;
