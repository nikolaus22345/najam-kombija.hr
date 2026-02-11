import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import sedanImage from "@/assets/vehicle-sedan.png";
import minivanImage from "@/assets/vehicle-minivan.png";
import minibusImage from "@/assets/vehicle-minibus.png";
import busImage from "@/assets/vehicle-bus.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Fleet = () => {
  const { t } = useLanguage();

  const vehicles = [
    {
      name: t.fleet.standard.name,
      capacity: t.fleet.standard.capacity,
      image: sedanImage,
      luggage: t.fleet.standard.luggage,
    },
    {
      name: t.fleet.minivan.name,
      capacity: t.fleet.minivan.capacity,
      image: minivanImage,
      luggage: t.fleet.minivan.luggage,
    },
    {
      name: t.fleet.minibus.name,
      capacity: t.fleet.minibus.capacity,
      image: minibusImage,
      luggage: t.fleet.minibus.luggage,
    },
    {
      name: t.fleet.bus.name,
      capacity: t.fleet.bus.capacity,
      image: busImage,
      luggage: t.fleet.bus.luggage,
    },
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">{t.fleet.subtitle}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t.fleet.title}</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicles.map((vehicle, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-card border-border">
              <div className="bg-gradient-to-br from-background to-card/50 p-6 flex items-center justify-center min-h-[240px]">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="text-center pb-3">
                <CardTitle className="text-2xl">{vehicle.name}</CardTitle>
                <CardDescription className="text-base">{vehicle.capacity}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">{vehicle.luggage}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
