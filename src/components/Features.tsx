import { CheckCircle2, Clock, Shield, CreditCard, UserCheck, Wifi } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Features = () => {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: CheckCircle2,
      title: t.features.fixedPrices.title,
      description: t.features.fixedPrices.description,
      link: "/features/fixed-prices",
    },
    {
      icon: Clock,
      title: t.features.availability.title,
      description: t.features.availability.description,
      link: "/features/24-7-service",
    },
    {
      icon: Shield,
      title: t.features.licensed.title,
      description: t.features.licensed.description,
      link: "/features/safety-first",
    },
    {
      icon: CreditCard,
      title: t.features.payment.title,
      description: t.features.payment.description,
      link: null,
    },
    {
      icon: UserCheck,
      title: t.features.drivers.title,
      description: t.features.drivers.description,
      link: "/features/professional-drivers",
    },
    {
      icon: Wifi,
      title: t.features.wifi.title,
      description: t.features.wifi.description,
      link: null,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">{t.features.subtitle}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.features.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.features.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Content = (
              <div className="flex gap-4 p-6 rounded-xl hover:bg-card/50 transition-all duration-300 h-full">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );

            if (feature.link) {
              return (
                <Link
                  key={index}
                  to={`/${language}${feature.link}`}
                  className="group block h-full"
                >
                  {Content}
                </Link>
              );
            }

            return <div key={index}>{Content}</div>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
