import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Shield, Clock, Award, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const AboutUs = () => {
  const { t } = useLanguage();

  const stats = [
    { value: "10+", label: t.about.stat1 },
    { value: "24/7", label: t.about.stat2 },
    { value: "98%", label: t.about.stat3 },
  ];

  const values = [
    {
      icon: Shield,
      title: t.features.licensed.title,
      description: t.features.licensed.description,
    },
    {
      icon: Clock,
      title: t.features.availability.title,
      description: t.features.availability.description,
    },
    {
      icon: Award,
      title: t.features.drivers.title,
      description: t.features.drivers.description,
    },
    {
      icon: Users,
      title: t.features.fixedPrices.title,
      description: t.features.fixedPrices.description,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {t.about.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {t.about.paragraph1}
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  {t.about.subtitle}
                </h2>
                <p className="text-muted-foreground mb-4">
                  {t.about.paragraph2}
                </p>
                <p className="text-muted-foreground">
                  {t.about.paragraph3}
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {t.features.title}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t.features.description}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                    <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
