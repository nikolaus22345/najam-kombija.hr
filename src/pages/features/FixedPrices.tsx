import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { DollarSign, CheckCircle, Shield, Clock, TrendingDown, Calculator } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FixedPrices = () => {
    const { language, getLink } = useLanguage();

    const content = {
        en: {
            title: "Fixed Prices, No Surprises",
            subtitle: "Transparent pricing with no hidden fees. Know exactly what you'll pay before you book.",
            cta: "Get Your Quote",
            whyFixedTitle: "Why Fixed Pricing?",
            whyFixedSubtitle: "We believe in complete transparency and fairness for all our customers.",
            includedTitle: "What's Included in Our Fixed Price",
            includedSubtitle: "Everything you need for a comfortable journey, with no extra charges.",
            howItWorksTitle: "How Our Pricing Works",
            howItWorksSubtitle: "Simple, transparent, and fair.",
            ctaTitle: "Ready to Book Your Transfer?",
            ctaSubtitle: "Get an instant quote with our fixed, transparent pricing.",
            contactUs: "Contact Us",
            benefits: [
                {
                    title: "No Meter Surprises",
                    description: "Unlike taxis, our price is fixed before you book. No unexpected charges based on traffic or route changes."
                },
                {
                    title: "Price Match Guarantee",
                    description: "We offer competitive fixed rates. If you find a lower price for the same service, we'll match it."
                },
                {
                    title: "No Hidden Fees",
                    description: "The price you see is the price you pay. No tolls, fuel surcharges, or booking fees added later."
                },
                {
                    title: "Free Cancellation",
                    description: "Cancel up to 24 hours before your transfer for a full refund. No cancellation fees."
                },
                {
                    title: "Seasonal Consistency",
                    description: "Our prices remain stable year-round. No surge pricing during peak season or holidays."
                },
                {
                    title: "Group Discounts",
                    description: "Traveling with a group? Our fixed prices include discounts for larger parties automatically."
                }
            ],
            included: [
                "Professional English-speaking driver",
                "Door-to-door service",
                "All highway tolls and fuel costs",
                "Free WiFi in vehicle",
                "Bottled water for all passengers",
                "Flight monitoring and waiting time",
                "Meet & Greet service at airports",
                "Child seats (on request)",
                "Luggage assistance",
                "24/7 customer support"
            ],
            steps: [
                {
                    title: "Enter Your Details",
                    description: "Tell us your pickup location, destination, date, and number of passengers."
                },
                {
                    title: "Get Instant Quote",
                    description: "Receive your fixed price immediately. No waiting, no negotiations."
                },
                {
                    title: "Book & Pay",
                    description: "Confirm your booking. Pay securely online or in cash to the driver."
                },
                {
                    title: "Enjoy Your Ride",
                    description: "Relax knowing the price won't change, regardless of traffic or route."
                }
            ]
        },
        hr: {
            title: "Fiksne Cijene, Bez Iznenađenja",
            subtitle: "Transparentno određivanje cijena bez skrivenih naknada. Znate točno što ćete platiti prije rezervacije.",
            cta: "Zatražite Ponudu",
            whyFixedTitle: "Zašto Fiksne Cijene?",
            whyFixedSubtitle: "Vjerujemo u potpunu transparentnost i pravednost za sve naše kupce.",
            includedTitle: "Što je Uključeno u Našu Fiksnu Cijenu",
            includedSubtitle: "Sve što vam treba za ugodno putovanje, bez dodatnih naknada.",
            howItWorksTitle: "Kako Funkcionira Naše Određivanje Cijena",
            howItWorksSubtitle: "Jednostavno, transparentno i pravedno.",
            ctaTitle: "Spremni Rezervirati Svoj Transfer?",
            ctaSubtitle: "Dobijte trenutnu ponudu s našim fiksnim, transparentnim cijenama.",
            contactUs: "Kontaktirajte Nas",
            benefits: [
                {
                    title: "Bez Iznenađenja Brojila",
                    description: "Za razliku od taksija, naša cijena je fiksna prije rezervacije. Nema neočekivanih naknada zbog prometa ili promjene rute."
                },
                {
                    title: "Garancija Usklađivanja Cijene",
                    description: "Nudimo konkurentne fiksne cijene. Ako pronađete nižu cijenu za istu uslugu, uskladit ćemo je."
                },
                {
                    title: "Bez Skrivenih Naknada",
                    description: "Cijena koju vidite je cijena koju plaćate. Nema cestarina, dodataka za gorivo ili naknada za rezervaciju."
                },
                {
                    title: "Besplatno Otkazivanje",
                    description: "Otkažite do 24 sata prije transfera za potpuni povrat novca. Bez naknada za otkazivanje."
                },
                {
                    title: "Sezonska Dosljednost",
                    description: "Naše cijene ostaju stabilne tijekom cijele godine. Nema povećanja cijena tijekom sezone ili praznika."
                },
                {
                    title: "Grupni Popusti",
                    description: "Putujete s grupom? Naše fiksne cijene automatski uključuju popuste za veće grupe."
                }
            ],
            included: [
                "Profesionalni vozač koji govori engleski",
                "Usluga od vrata do vrata",
                "Sve cestarine i troškovi goriva",
                "Besplatni WiFi u vozilu",
                "Flaširana voda za sve putnike",
                "Praćenje leta i vrijeme čekanja",
                "Meet & Greet usluga na aerodromima",
                "Dječja sjedala (na zahtjev)",
                "Pomoć s prtljagom",
                "24/7 korisnička podrška"
            ],
            steps: [
                {
                    title: "Unesite Svoje Podatke",
                    description: "Recite nam lokaciju preuzimanja, odredište, datum i broj putnika."
                },
                {
                    title: "Dobijte Trenutnu Ponudu",
                    description: "Primite svoju fiksnu cijenu odmah. Bez čekanja, bez pregovaranja."
                },
                {
                    title: "Rezervirajte i Platite",
                    description: "Potvrdite svoju rezervaciju. Platite sigurno online ili gotovinom vozaču."
                },
                {
                    title: "Uživajte u Vožnji",
                    description: "Opustite se znajući da se cijena neće promijeniti, bez obzira na promet ili rutu."
                }
            ]
        },
        de: {
            title: "Festpreise, Keine Überraschungen",
            subtitle: "Transparente Preisgestaltung ohne versteckte Gebühren. Wissen Sie genau, was Sie bezahlen werden, bevor Sie buchen.",
            cta: "Angebot Erhalten",
            whyFixedTitle: "Warum Festpreise?",
            whyFixedSubtitle: "Wir glauben an vollständige Transparenz und Fairness für alle unsere Kunden.",
            includedTitle: "Was ist in Unserem Festpreis Enthalten",
            includedSubtitle: "Alles, was Sie für eine komfortable Reise benötigen, ohne zusätzliche Gebühren.",
            howItWorksTitle: "Wie Unsere Preisgestaltung Funktioniert",
            howItWorksSubtitle: "Einfach, transparent und fair.",
            ctaTitle: "Bereit, Ihren Transfer zu Buchen?",
            ctaSubtitle: "Erhalten Sie ein sofortiges Angebot mit unseren festen, transparenten Preisen.",
            contactUs: "Kontaktieren Sie Uns",
            benefits: [
                {
                    title: "Keine Taxameter-Überraschungen",
                    description: "Im Gegensatz zu Taxis ist unser Preis vor der Buchung festgelegt. Keine unerwarteten Gebühren aufgrund von Verkehr oder Routenänderungen."
                },
                {
                    title: "Preisgarantie",
                    description: "Wir bieten wettbewerbsfähige Festpreise. Wenn Sie einen niedrigeren Preis für denselben Service finden, passen wir ihn an."
                },
                {
                    title: "Keine Versteckten Gebühren",
                    description: "Der Preis, den Sie sehen, ist der Preis, den Sie zahlen. Keine Mautgebühren, Treibstoffzuschläge oder Buchungsgebühren später."
                },
                {
                    title: "Kostenlose Stornierung",
                    description: "Stornieren Sie bis zu 24 Stunden vor Ihrem Transfer für eine vollständige Rückerstattung. Keine Stornierungsgebühren."
                },
                {
                    title: "Saisonale Konsistenz",
                    description: "Unsere Preise bleiben das ganze Jahr über stabil. Keine Preiserhöhungen während der Hochsaison oder Feiertage."
                },
                {
                    title: "Gruppenrabatte",
                    description: "Reisen Sie mit einer Gruppe? Unsere Festpreise beinhalten automatisch Rabatte für größere Gruppen."
                }
            ],
            included: [
                "Professioneller englischsprachiger Fahrer",
                "Tür-zu-Tür-Service",
                "Alle Autobahngebühren und Kraftstoffkosten",
                "Kostenloses WLAN im Fahrzeug",
                "Flaschenwasser für alle Passagiere",
                "Flugüberwachung und Wartezeit",
                "Meet & Greet-Service an Flughäfen",
                "Kindersitze (auf Anfrage)",
                "Gepäckhilfe",
                "24/7 Kundensupport"
            ],
            steps: [
                {
                    title: "Geben Sie Ihre Details Ein",
                    description: "Teilen Sie uns Ihren Abholort, Ihr Ziel, Datum und die Anzahl der Passagiere mit."
                },
                {
                    title: "Sofortiges Angebot Erhalten",
                    description: "Erhalten Sie Ihren Festpreis sofort. Kein Warten, keine Verhandlungen."
                },
                {
                    title: "Buchen & Bezahlen",
                    description: "Bestätigen Sie Ihre Buchung. Zahlen Sie sicher online oder bar beim Fahrer."
                },
                {
                    title: "Genießen Sie Ihre Fahrt",
                    description: "Entspannen Sie sich in dem Wissen, dass sich der Preis nicht ändert, unabhängig von Verkehr oder Route."
                }
            ]
        }
    };

    const t = content[language as keyof typeof content] || content.en;

    const benefitIcons = [Shield, DollarSign, CheckCircle, Clock, TrendingDown, Calculator];

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="pt-20">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-background to-card py-20">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                                <DollarSign className="w-10 h-10 text-primary" />
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                                {t.title}
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground mb-8">
                                {t.subtitle}
                            </p>
                            <Link to={getLink('/get-quote')}>
                                <Button size="lg" className="text-lg px-8 py-6">
                                    {t.cta}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-20 bg-background">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                                {t.whyFixedTitle}
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                {t.whyFixedSubtitle}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {t.benefits.map((benefit, index) => {
                                const Icon = benefitIcons[index];
                                return (
                                    <div key={index} className="p-6 md:p-8 rounded-2xl bg-card hover:shadow-lg transition-shadow">
                                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                            <Icon className="w-7 h-7 text-primary" />
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{benefit.title}</h3>
                                        <p className="text-muted-foreground text-base leading-relaxed">{benefit.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* What's Included Section */}
                <section className="py-20 bg-card/50">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                                    {t.includedTitle}
                                </h2>
                                <p className="text-lg text-muted-foreground">
                                    {t.includedSubtitle}
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                {t.included.map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-background">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span className="text-foreground">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="py-20 bg-background">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                                {t.howItWorksTitle}
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                {t.howItWorksSubtitle}
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {t.steps.map((step, index) => (
                                <div key={index} className="text-center">
                                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                                    <p className="text-muted-foreground text-sm">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-primary/10">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                                {t.ctaTitle}
                            </h2>
                            <p className="text-xl text-muted-foreground mb-8">
                                {t.ctaSubtitle}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to={getLink('/get-quote')}>
                                    <Button size="lg" className="text-lg px-8 py-6 w-full sm:w-auto">
                                        {t.cta}
                                    </Button>
                                </Link>
                                <Link to={getLink('/#contact')}>
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

export default FixedPrices;
