import { Card, CardContent } from "@/components/ui/card";
import { Plane, Building2, MapPin, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Plane,
      title: t.services.airport.title,
      description: t.services.airport.description,
    },
    {
      icon: Building2,
      title: t.services.city.title,
      description: t.services.city.description,
    },
    {
      icon: MapPin,
      title: t.services.longDistance.title,
      description: t.services.longDistance.description,
    },
    {
      icon: Users,
      title: t.services.group.title,
      description: t.services.group.description,
    },
  ];

  return (
    <section id="transfers" className="py-20 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">{t.services.subtitle}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.services.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.services.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
