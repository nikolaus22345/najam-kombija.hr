import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Award, CheckCircle, FileCheck, CarFront, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SafetyFirst = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Your Safety is Our Priority",
      subtitle: "Fully licensed, insured, and committed to providing the safest transfer experience in Croatia.",
      cta: "Book Safe Transfer Now",
      featuresTitle: "Comprehensive Safety Standards",
      featuresSubtitle: "We exceed industry standards to ensure your journey is safe and secure.",
      certificationsTitle: "Licensed & Certified",
      certificationsSubtitle: "Our credentials speak for themselves.",
      insuranceTitle: "Full Insurance Protection",
      insuranceIntro: "Every journey with Zagreb Transfers is fully insured with comprehensive coverage that protects both passengers and vehicles.",
      insuranceIncludes: "Our insurance policy includes:",
      ctaTitle: "Travel with Complete Peace of Mind",
      ctaSubtitle: "Book your safe and secure transfer today with Croatia's most trusted transfer service.",
      getQuote: "Get Your Quote",
      contactUs: "Contact Us",
      safetyFeatures: [
        {
          title: "Fully Licensed Drivers",
          description: "All our drivers hold valid professional driving licenses and undergo rigorous background checks."
        },
        {
          title: "Comprehensive Insurance",
          description: "Every vehicle is covered with full insurance protection for complete peace of mind."
        },
        {
          title: "Regular Inspections",
          description: "Our fleet undergoes regular safety inspections and maintenance to ensure peak performance."
        },
        {
          title: "Modern Fleet",
          description: "All vehicles are equipped with the latest safety features and technology."
        },
        {
          title: "Trained Professionals",
          description: "Our drivers receive ongoing training in defensive driving and customer service."
        }
      ],
      certifications: [
        "EU Transport License",
        "Croatian Chamber of Commerce Certified",
        "ISO 9001 Quality Management",
        "Full Liability Insurance Coverage",
        "Vehicle Safety Certificates"
      ],
      insuranceList: [
        "Passenger liability coverage up to €2,000,000",
        "Full vehicle damage coverage",
        "Personal accident insurance for all passengers",
        "Luggage and personal belongings protection"
      ]
    },
    hr: {
      title: "Vaša Sigurnost je Naš Prioritet",
      subtitle: "Potpuno licencirani, osigurani i posvećeni pružanju najsigurnijeg iskustva transfera u Hrvatskoj.",
      cta: "Rezervirajte Siguran Transfer",
      featuresTitle: "Sveobuhvatni Sigurnosni Standardi",
      featuresSubtitle: "Premašujemo industrijske standarde kako bismo osigurali da je vaše putovanje sigurno.",
      certificationsTitle: "Licencirani i Certificirani",
      certificationsSubtitle: "Naši certifikati govore sami za sebe.",
      insuranceTitle: "Potpuna Zaštita Osiguranja",
      insuranceIntro: "Svako putovanje sa Zagreb Transfers je potpuno osigurano sveobuhvatnim pokrićem koje štiti i putnike i vozila.",
      insuranceIncludes: "Naša polica osiguranja uključuje:",
      ctaTitle: "Putujte s Potpunim Mirom",
      ctaSubtitle: "Rezervirajte svoj siguran transfer danas s najsigurnijom uslugom transfera u Hrvatskoj.",
      getQuote: "Zatražite Ponudu",
      contactUs: "Kontaktirajte Nas",
      safetyFeatures: [
        {
          title: "Potpuno Licencirani Vozači",
          description: "Svi naši vozači posjeduju valjane profesionalne vozačke dozvole i prolaze temeljite provjere."
        },
        {
          title: "Sveobuhvatno Osiguranje",
          description: "Svako vozilo je pokriveno potpunom zaštitom osiguranja za potpuni mir."
        },
        {
          title: "Redoviti Pregledi",
          description: "Naša flota prolazi redovite sigurnosne preglede i održavanje za vrhunske performanse."
        },
        {
          title: "Moderna Flota",
          description: "Sva vozila su opremljena najnovijim sigurnosnim značajkama i tehnologijom."
        },
        {
          title: "Obučeni Profesionalci",
          description: "Naši vozači primaju kontinuiranu obuku u defenzivnoj vožnji i korisničkoj službi."
        }
      ],
      certifications: [
        "EU Transportna Licenca",
        "Certificirano od Hrvatske Gospodarske Komore",
        "ISO 9001 Upravljanje Kvalitetom",
        "Potpuno Pokriće Odgovornosti",
        "Certifikati Sigurnosti Vozila"
      ],
      insuranceList: [
        "Pokriće odgovornosti putnika do 2.000.000 €",
        "Potpuno pokriće štete na vozilu",
        "Osobno osiguranje od nesreće za sve putnike",
        "Zaštita prtljage i osobnih stvari"
      ]
    },
    de: {
      title: "Ihre Sicherheit ist Unsere Priorität",
      subtitle: "Vollständig lizenziert, versichert und verpflichtet, das sicherste Transfererlebnis in Kroatien zu bieten.",
      cta: "Sicheren Transfer Buchen",
      featuresTitle: "Umfassende Sicherheitsstandards",
      featuresSubtitle: "Wir übertreffen Industriestandards, um sicherzustellen, dass Ihre Reise sicher ist.",
      certificationsTitle: "Lizenziert & Zertifiziert",
      certificationsSubtitle: "Unsere Referenzen sprechen für sich.",
      insuranceTitle: "Vollständiger Versicherungsschutz",
      insuranceIntro: "Jede Fahrt mit Zagreb Transfers ist vollständig versichert mit umfassendem Schutz für Passagiere und Fahrzeuge.",
      insuranceIncludes: "Unsere Versicherungspolice umfasst:",
      ctaTitle: "Reisen Sie mit Völliger Sicherheit",
      ctaSubtitle: "Buchen Sie heute Ihren sicheren Transfer mit Kroatiens vertrauenswürdigstem Transferservice.",
      getQuote: "Angebot Erhalten",
      contactUs: "Kontaktieren Sie Uns",
      safetyFeatures: [
        {
          title: "Vollständig Lizenzierte Fahrer",
          description: "Alle unsere Fahrer besitzen gültige professionelle Führerscheine und durchlaufen strenge Hintergrundprüfungen."
        },
        {
          title: "Umfassende Versicherung",
          description: "Jedes Fahrzeug ist mit vollständigem Versicherungsschutz für völlige Sicherheit abgedeckt."
        },
        {
          title: "Regelmäßige Inspektionen",
          description: "Unsere Flotte durchläuft regelmäßige Sicherheitsinspektionen und Wartung für Spitzenleistung."
        },
        {
          title: "Moderne Flotte",
          description: "Alle Fahrzeuge sind mit den neuesten Sicherheitsmerkmalen und Technologie ausgestattet."
        },
        {
          title: "Geschulte Profis",
          description: "Unsere Fahrer erhalten kontinuierliche Schulungen in defensivem Fahren und Kundenservice."
        }
      ],
      certifications: [
        "EU-Transportlizenz",
        "Zertifiziert von der Kroatischen Handelskammer",
        "ISO 9001 Qualitätsmanagement",
        "Vollständige Haftpflichtversicherung",
        "Fahrzeugsicherheitszertifikate"
      ],
      insuranceList: [
        "Passagierhaftpflicht bis zu 2.000.000 €",
        "Vollständige Fahrzeugschadendeckung",
        "Persönliche Unfallversicherung für alle Passagiere",
        "Gepäck- und Persönlichenschutz"
      ]
    }
  };

  const t = content[language as keyof typeof content] || content.en;

  const icons = [Shield, Award, FileCheck, CarFront, Users];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background to-card py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {t.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                {t.subtitle}
              </p>
              <Link to={`/${language}/get-quote`}>
                <Button size="lg" className="text-lg px-8 py-6">
                  {t.cta}
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Safety Features Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {t.featuresTitle}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t.featuresSubtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {t.safetyFeatures.map((feature, index) => {
                const Icon = icons[index];
                return (
                  <div key={index} className="p-6 md:p-8 rounded-2xl bg-card hover:shadow-lg transition-shadow">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground text-base leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  {t.certificationsTitle}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {t.certificationsSubtitle}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {t.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 p-6 rounded-xl bg-background">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <p className="text-foreground text-lg font-medium">{cert}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Insurance Details Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {t.insuranceTitle}
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg">
                  <p>{t.insuranceIntro}</p>
                  <p>{t.insuranceIncludes}</p>
                  <ul className="space-y-3 ml-6">
                    {t.insuranceList.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                {t.ctaTitle}
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                {t.ctaSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to={`/${language}/get-quote`}>
                  <Button size="lg" className="text-lg px-8 py-6 w-full sm:w-auto">
                    {t.getQuote}
                  </Button>
                </Link>
                <Link to={`/${language}/#contact`}>
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 w-full sm:w-auto">
                    {t.contactUs}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SafetyFirst;
