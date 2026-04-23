import { Check } from "lucide-react";

const packages = [
  {
    title: "Start24",
    subtitle: "DNEVNI NAJAM KOMBIJA ZA HITNE SITUACIJE",
    description: "Paket za kratkoročne, hitne i bitne situacije. Maksimalno se brzo prilagođavamo Vašim potrebama uz nula birokracije.",
    badge: "24 SATA NAJAM",
    features: [
      "Full osiguranje - sve uključeno",
      "Brza podrška pozivom ili online",
      "Fleksibilno preuzimanje",
      "Spremno u roku odmah"
    ],
    highlight: false,
  },
  {
    title: "TjedniPlus",
    subtitle: "TJEDNI NAJAM BEZ GRANICA",
    description: "Paket koji Vam nudi apsolutnu slobodu kretanja diljem Hrvatske i Europe s pokrivenim svim dozvolama na 7+ dana.",
    badge: "7+ DANA NAJAM",
    features: [
      "Sve dozvole za inozemstvo",
      "Uključena europska asistencija",
      "Podrška u svakom koraku",
      "Za privatna ili poslovna putovanja"
    ],
    highlight: true, // Central highlighted package
  },
  {
    title: "BiznisPRO",
    subtitle: "MJESEČNI I PROJEKTNI NAJAM KOMBIJA",
    description: "Dugoročni najam teretnih i putničkih kombija bez stresa leasinga. Vaš vozni park raste i smanjuje se s Vašim poslovanjem.",
    badge: "30+ DANA NAJAM",
    features: [
      "Kompletno servisiranje vozila",
      "Zamjensko vozilo u slučaju kvara",
      "Isporuka ravno na vašu lokaciju",
      "Osobni voditelj voznog parka"
    ],
    highlight: false,
  }
];

const Packages = () => {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Naši Paketni <span className="text-primary">Modeli Najma</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Logistika koja prati Vaš ritam. Bez skrivenih troškova i komplicirane papirologije. Odaberite paket prema trajanju Vašeg posla.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div 
              key={idx} 
              className={`relative rounded-3xl p-1 transition-all duration-300 hover:-translate-y-2 ${
                pkg.highlight 
                  ? "bg-gradient-to-br from-primary to-primary/50 shadow-2xl shadow-primary/20 scale-105 z-10" 
                  : "bg-card border border-border shadow-lg"
              }`}
            >
              <div className="h-full rounded-[23px] bg-card p-8 flex flex-col relative overflow-hidden">
                {/* Badge Circle effect */}
                <div className={`absolute -right-6 -bottom-6 w-32 h-32 rounded-full flex items-center justify-center p-6 text-center transform -rotate-12 ${pkg.highlight ? 'bg-primary text-black' : 'bg-muted text-muted-foreground'}`}>
                   <span className="font-bold text-lg leading-tight uppercase relative z-10">{pkg.badge}</span>
                </div>
                
                <h3 className={`text-4xl font-black mb-2 ${pkg.highlight ? 'text-primary' : 'text-foreground'}`}>
                  {pkg.title}
                </h3>
                <p className="text-xs font-bold tracking-wider text-muted-foreground mb-6 uppercase">
                  {pkg.subtitle}
                </p>
                
                <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                  {pkg.description}
                </p>

                <div className="space-y-4 mb-16">
                  {pkg.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${pkg.highlight ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'}`}>
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
