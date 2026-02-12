import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Users, Shield, Award, Clock, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProfessionalDrivers = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Professional Drivers",
      subtitle: "Experienced, Licensed, and Dedicated to Your Safety",
      intro: "Our team of professional drivers is the heart of our service. Each driver is carefully selected, thoroughly trained, and committed to providing you with the safest and most comfortable journey possible.",
      whyChoose: "Why Choose Our Drivers",
      features: [
        {
          icon: Shield,
          title: "Fully Licensed & Insured",
          description: "All our drivers hold valid professional driving licenses and are covered by comprehensive insurance for your peace of mind."
        },
        {
          icon: Award,
          title: "Extensive Experience",
          description: "Our drivers have years of experience navigating Croatian roads and international routes, ensuring smooth and efficient transfers."
        },
        {
          icon: Users,
          title: "Multilingual",
          description: "Many of our drivers speak multiple languages including English, German, Italian, and French, making communication easy."
        },
        {
          icon: Clock,
          title: "Punctual & Reliable",
          description: "We value your time. Our drivers are always on time and track your flight or schedule to ensure timely pickups."
        },
        {
          icon: Star,
          title: "Customer-Focused",
          description: "Our drivers are trained in customer service and go the extra mile to make your journey comfortable and enjoyable."
        },
        {
          icon: CheckCircle,
          title: "Local Knowledge",
          description: "With deep knowledge of Croatia and surrounding regions, our drivers can provide recommendations and insights during your journey."
        }
      ],
      standards: "Our Standards",
      standardsList: [
        "Background checks and clean driving records",
        "Regular training and certification updates",
        "Professional appearance and conduct",
        "Vehicle maintenance and cleanliness responsibility",
        "Customer service excellence",
        "Safety-first approach in all situations"
      ],
      cta: "Book Your Transfer",
      testimonial: "Our driver was incredibly professional and friendly. He arrived early, helped with our luggage, and made great recommendations for restaurants in Dubrovnik. Highly recommend!",
      testimonialAuthor: "Sarah M., UK"
    },
    hr: {
      title: "Profesionalni Vozači",
      subtitle: "Iskusni, Licencirani i Posvećeni Vašoj Sigurnosti",
      intro: "Naš tim profesionalnih vozača je srce naše usluge. Svaki vozač je pažljivo odabran, temeljito obučen i predan pružanju najsigurnijeg i najudobnijeg putovanja.",
      whyChoose: "Zašto Odabrati Naše Vozače",
      features: [
        {
          icon: Shield,
          title: "Potpuno Licencirani i Osigurani",
          description: "Svi naši vozači posjeduju valjane profesionalne vozačke dozvole i pokriveni su sveobuhvatnim osiguranjem."
        },
        {
          icon: Award,
          title: "Veliko Iskustvo",
          description: "Naši vozači imaju godine iskustva u navigaciji hrvatskim cestama i međunarodnim rutama."
        },
        {
          icon: Users,
          title: "Višejezični",
          description: "Mnogi naši vozači govore više jezika uključujući engleski, njemački, talijanski i francuski."
        },
        {
          icon: Clock,
          title: "Točni i Pouzdani",
          description: "Cijenimo vaše vrijeme. Naši vozači su uvijek na vrijeme i prate vaš let ili raspored."
        },
        {
          icon: Star,
          title: "Fokusirani na Kupca",
          description: "Naši vozači su obučeni u korisničkoj službi i čine dodatni napor da vaše putovanje bude ugodno."
        },
        {
          icon: CheckCircle,
          title: "Lokalno Znanje",
          description: "S dubokim poznavanjem Hrvatske i okolnih regija, naši vozači mogu pružiti preporuke tijekom vašeg putovanja."
        }
      ],
      standards: "Naši Standardi",
      standardsList: [
        "Provjera prošlosti i čisti vozački karton",
        "Redovna obuka i ažuriranje certifikata",
        "Profesionalan izgled i ponašanje",
        "Odgovornost za održavanje i čistoću vozila",
        "Izvrsnost u korisničkoj službi",
        "Sigurnost na prvom mjestu u svim situacijama"
      ],
      cta: "Rezervirajte Transfer",
      testimonial: "Naš vozač je bio nevjerojatno profesionalan i prijateljski nastrojen. Stigao je rano, pomogao s prtljagom i dao odlične preporuke za restorane u Dubrovniku. Toplo preporučujem!",
      testimonialAuthor: "Sarah M., UK"
    },
    de: {
      title: "Professionelle Fahrer",
      subtitle: "Erfahren, Lizenziert und Ihrer Sicherheit Verpflichtet",
      intro: "Unser Team professioneller Fahrer ist das Herzstück unseres Service. Jeder Fahrer wird sorgfältig ausgewählt, gründlich geschult und ist bestrebt, Ihnen die sicherste und komfortabelste Reise zu bieten.",
      whyChoose: "Warum Unsere Fahrer Wählen",
      features: [
        {
          icon: Shield,
          title: "Vollständig Lizenziert & Versichert",
          description: "Alle unsere Fahrer besitzen gültige professionelle Führerscheine und sind durch umfassende Versicherungen abgedeckt."
        },
        {
          icon: Award,
          title: "Umfangreiche Erfahrung",
          description: "Unsere Fahrer haben jahrelange Erfahrung auf kroatischen Straßen und internationalen Routen."
        },
        {
          icon: Users,
          title: "Mehrsprachig",
          description: "Viele unserer Fahrer sprechen mehrere Sprachen, darunter Englisch, Deutsch, Italienisch und Französisch."
        },
        {
          icon: Clock,
          title: "Pünktlich & Zuverlässig",
          description: "Wir schätzen Ihre Zeit. Unsere Fahrer sind immer pünktlich und verfolgen Ihren Flug oder Zeitplan."
        },
        {
          icon: Star,
          title: "Kundenorientiert",
          description: "Unsere Fahrer sind im Kundenservice geschult und gehen die Extrameile, um Ihre Reise angenehm zu gestalten."
        },
        {
          icon: CheckCircle,
          title: "Lokales Wissen",
          description: "Mit fundiertem Wissen über Kroatien und die umliegenden Regionen können unsere Fahrer Empfehlungen geben."
        }
      ],
      standards: "Unsere Standards",
      standardsList: [
        "Hintergrundprüfungen und saubere Fahraufzeichnungen",
        "Regelmäßige Schulungen und Zertifizierungsaktualisierungen",
        "Professionelles Erscheinungsbild und Verhalten",
        "Verantwortung für Fahrzeugwartung und Sauberkeit",
        "Exzellenz im Kundenservice",
        "Sicherheit steht an erster Stelle"
      ],
      cta: "Transfer Buchen",
      testimonial: "Unser Fahrer war unglaublich professionell und freundlich. Er kam früh an, half mit dem Gepäck und gab großartige Empfehlungen für Restaurants in Dubrovnik. Sehr zu empfehlen!",
      testimonialAuthor: "Sarah M., UK"
    }
  };

  const t = content[language as keyof typeof content] || content.en;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {t.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {t.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.intro}
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-12 bg-accent/50">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              {t.whyChoose}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {t.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-background p-6 rounded-lg border border-border">
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Standards */}
        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                {t.standards}
              </h2>
              <ul className="space-y-4">
                {t.standardsList.map((standard, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{standard}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-12 bg-primary/10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-lg italic text-foreground mb-4">
                "{t.testimonial}"
              </p>
              <p className="text-muted-foreground font-medium">
                — {t.testimonialAuthor}
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <Link to={`/${language}/`}>
              <Button size="lg" className="text-lg px-8">
                {t.cta}
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProfessionalDrivers;
