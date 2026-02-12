import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, Phone, MessageSquare, MapPin, Plane, Moon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TwentyFourSeven = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Available 24/7, Every Day",
      subtitle: "No matter when you need us, we're ready to serve you - day or night, weekends and holidays included.",
      cta: "Book Your Transfer Now",
      featuresTitle: "Always Here When You Need Us",
      featuresSubtitle: "Round-the-clock service with professional drivers and instant customer support.",
      timeSlotsTitle: "Book Any Time of Day",
      timeSlotsSubtitle: "All time slots available for your convenience.",
      available: "Available",
      whyMattersTitle: "Why 24/7 Service Matters",
      ctaTitle: "Need a Transfer Right Now?",
      ctaSubtitle: "Our team is standing by to help you book your transfer, no matter what time it is.",
      bookNow: "Book Now",
      contactSupport: "Contact 24/7 Support",
      call: "Call",
      whatsappAvailable: "WhatsApp Available",
      features: [
        {
          title: "24/7 Availability",
          description: "Book transfers any time of day or night, 365 days a year."
        },
        {
          title: "Early & Late Flights",
          description: "No matter what time your flight lands or departs, we'll be there."
        },
        {
          title: "Instant Support",
          description: "Reach our customer service team anytime via phone, email, or WhatsApp."
        },
        {
          title: "Real-Time Updates",
          description: "Get instant confirmation and updates about your transfer status."
        },
        {
          title: "Flight Tracking",
          description: "We monitor your flight and adjust pickup times automatically."
        },
        {
          title: "Night Service",
          description: "Safe and reliable transfers even during late-night hours."
        }
      ],
      timeSlots: [
        { time: "00:00 - 06:00", label: "Late Night / Early Morning" },
        { time: "06:00 - 12:00", label: "Morning" },
        { time: "12:00 - 18:00", label: "Afternoon" },
        { time: "18:00 - 24:00", label: "Evening / Night" }
      ],
      whyMatters: [
        {
          title: "Early Morning Flights",
          description: "Catch that 6 AM flight without worry. We'll pick you up at 3 AM if needed, ensuring you arrive at the airport with plenty of time."
        },
        {
          title: "Late Night Arrivals",
          description: "Landing after midnight? No problem. Our drivers will be waiting for you no matter what time your flight arrives, even if it's delayed."
        },
        {
          title: "Emergency Transfers",
          description: "Need an urgent transfer? Call us anytime and we'll arrange a vehicle as quickly as possible."
        },
        {
          title: "Weekend & Holiday Service",
          description: "Christmas Day, New Year's Eve, public holidays - we never close. Our service is available every single day of the year."
        }
      ]
    },
    hr: {
      title: "Dostupni 24/7, Svaki Dan",
      subtitle: "Bez obzira kada nam trebate, spremni smo vam služiti - danju ili noću, vikendom i praznicima.",
      cta: "Rezervirajte Transfer Sada",
      featuresTitle: "Uvijek Tu Kada Nam Trebate",
      featuresSubtitle: "Usluga 24 sata s profesionalnim vozačima i trenutnom korisničkom podrškom.",
      timeSlotsTitle: "Rezervirajte U Bilo Koje Doba Dana",
      timeSlotsSubtitle: "Svi vremenski slotovi dostupni za vašu udobnost.",
      available: "Dostupno",
      whyMattersTitle: "Zašto je Usluga 24/7 Važna",
      ctaTitle: "Trebate Transfer Odmah?",
      ctaSubtitle: "Naš tim je spreman pomoći vam rezervirati transfer, bez obzira koje je vrijeme.",
      bookNow: "Rezervirajte Sada",
      contactSupport: "Kontaktirajte 24/7 Podršku",
      call: "Pozovite",
      whatsappAvailable: "WhatsApp Dostupan",
      features: [
        {
          title: "Dostupnost 24/7",
          description: "Rezervirajte transfere u bilo koje doba dana ili noći, 365 dana godišnje."
        },
        {
          title: "Rani i Kasni Letovi",
          description: "Bez obzira u koje vrijeme vaš let slijeće ili polijeće, bit ćemo tamo."
        },
        {
          title: "Trenutna Podrška",
          description: "Kontaktirajte naš tim korisničke službe bilo kada putem telefona, e-maila ili WhatsApp-a."
        },
        {
          title: "Ažuriranja U Stvarnom Vremenu",
          description: "Dobijte trenutnu potvrdu i ažuriranja o statusu vašeg transfera."
        },
        {
          title: "Praćenje Leta",
          description: "Pratimo vaš let i automatski prilagođavamo vrijeme preuzimanja."
        },
        {
          title: "Noćna Usluga",
          description: "Sigurni i pouzdani transferi čak i tijekom kasnih noćnih sati."
        }
      ],
      timeSlots: [
        { time: "00:00 - 06:00", label: "Kasna Noć / Rano Jutro" },
        { time: "06:00 - 12:00", label: "Jutro" },
        { time: "12:00 - 18:00", label: "Popodne" },
        { time: "18:00 - 24:00", label: "Večer / Noć" }
      ],
      whyMatters: [
        {
          title: "Rani Jutarnji Letovi",
          description: "Uhvatite let u 6 ujutro bez brige. Pokupiti ćemo vas u 3 ujutro ako je potrebno, osiguravajući da stignete na aerodrom s dovoljno vremena."
        },
        {
          title: "Kasni Noćni Dolasci",
          description: "Sliječete nakon ponoći? Nema problema. Naši vozači će vas čekati bez obzira u koje vrijeme vaš let stiže, čak i ako kasni."
        },
        {
          title: "Hitni Transferi",
          description: "Trebate hitan transfer? Nazovite nas bilo kada i organizirat ćemo vozilo što je brže moguće."
        },
        {
          title: "Vikend i Praznici",
          description: "Božić, Nova godina, državni praznici - nikada ne zatvaramo. Naša usluga je dostupna svaki dan u godini."
        }
      ]
    },
    de: {
      title: "Verfügbar 24/7, Jeden Tag",
      subtitle: "Egal wann Sie uns brauchen, wir sind bereit Ihnen zu dienen - Tag oder Nacht, Wochenenden und Feiertage inklusive.",
      cta: "Transfer Jetzt Buchen",
      featuresTitle: "Immer Hier Wenn Sie Uns Brauchen",
      featuresSubtitle: "Rund-um-die-Uhr-Service mit professionellen Fahrern und sofortigem Kundensupport.",
      timeSlotsTitle: "Buchen Sie Zu Jeder Tageszeit",
      timeSlotsSubtitle: "Alle Zeitfenster für Ihre Bequemlichkeit verfügbar.",
      available: "Verfügbar",
      whyMattersTitle: "Warum 24/7-Service Wichtig Ist",
      ctaTitle: "Brauchen Sie Jetzt Einen Transfer?",
      ctaSubtitle: "Unser Team steht bereit, um Ihnen bei der Buchung Ihres Transfers zu helfen, egal zu welcher Zeit.",
      bookNow: "Jetzt Buchen",
      contactSupport: "24/7 Support Kontaktieren",
      call: "Anrufen",
      whatsappAvailable: "WhatsApp Verfügbar",
      features: [
        {
          title: "24/7 Verfügbarkeit",
          description: "Buchen Sie Transfers zu jeder Tages- oder Nachtzeit, 365 Tage im Jahr."
        },
        {
          title: "Frühe & Späte Flüge",
          description: "Egal zu welcher Zeit Ihr Flug landet oder abfliegt, wir werden da sein."
        },
        {
          title: "Sofortiger Support",
          description: "Erreichen Sie unser Kundenservice-Team jederzeit per Telefon, E-Mail oder WhatsApp."
        },
        {
          title: "Echtzeit-Updates",
          description: "Erhalten Sie sofortige Bestätigung und Updates über Ihren Transferstatus."
        },
        {
          title: "Flugverfolgung",
          description: "Wir überwachen Ihren Flug und passen die Abholzeiten automatisch an."
        },
        {
          title: "Nachtservice",
          description: "Sichere und zuverlässige Transfers auch während später Nachtstunden."
        }
      ],
      timeSlots: [
        { time: "00:00 - 06:00", label: "Späte Nacht / Früher Morgen" },
        { time: "06:00 - 12:00", label: "Morgen" },
        { time: "12:00 - 18:00", label: "Nachmittag" },
        { time: "18:00 - 24:00", label: "Abend / Nacht" }
      ],
      whyMatters: [
        {
          title: "Frühmorgendliche Flüge",
          description: "Erwischen Sie den 6-Uhr-Flug ohne Sorgen. Wir holen Sie bei Bedarf um 3 Uhr morgens ab und stellen sicher, dass Sie rechtzeitig am Flughafen ankommen."
        },
        {
          title: "Späte Nachtankünfte",
          description: "Landen Sie nach Mitternacht? Kein Problem. Unsere Fahrer warten auf Sie, egal zu welcher Zeit Ihr Flug ankommt, auch bei Verspätung."
        },
        {
          title: "Notfall-Transfers",
          description: "Brauchen Sie einen dringenden Transfer? Rufen Sie uns jederzeit an und wir organisieren so schnell wie möglich ein Fahrzeug."
        },
        {
          title: "Wochenend- & Feiertagsservice",
          description: "Weihnachten, Silvester, Feiertage - wir schließen nie. Unser Service ist jeden Tag des Jahres verfügbar."
        }
      ]
    }
  };

  const t = content[language as keyof typeof content] || content.en;

  const featureIcons = [Clock, Plane, Phone, MessageSquare, MapPin, Moon];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background to-card py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                <Clock className="w-10 h-10 text-primary" />
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

        {/* Features Section */}
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.features.map((feature, index) => {
                const Icon = featureIcons[index];
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

        {/* Time Slots Section */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  {t.timeSlotsTitle}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {t.timeSlotsSubtitle}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {t.timeSlots.map((slot, index) => (
                  <div key={index} className="p-6 rounded-xl bg-background border-2 border-primary/20">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">{slot.time}</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <span className="text-primary font-medium">{t.available}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{slot.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why 24/7 Matters Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {t.whyMattersTitle}
                </h2>
                <div className="space-y-6 text-muted-foreground text-lg">
                  {t.whyMatters.map((item, index) => (
                    <div key={index}>
                      <h3 className="text-foreground font-semibold text-xl mb-2">{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                {t.ctaTitle}
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                {t.ctaSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link to={`/${language}/get-quote`}>
                  <Button size="lg" className="text-lg px-8 py-6 w-full sm:w-auto">
                    {t.bookNow}
                  </Button>
                </Link>
                <Link to={`/${language}/#contact`}>
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 w-full sm:w-auto">
                    {t.contactSupport}
                  </Button>
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>{t.call}: +385 97 601 9558</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <span>{t.whatsappAvailable}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TwentyFourSeven;
