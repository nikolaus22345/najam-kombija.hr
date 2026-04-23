import { CheckCircle2 } from "lucide-react";

const Services = () => {
  const uslugeLijevo = [
    "najam dostavnih vozila",
    "najam teretnog kombija",
    "najam kombija s vozačem",
    "najam s dva vozača kod dužih ruta",
    "najam kombija bez vozača",
    "dnevni najam vozila",
    "međunarodni kombi prijevozi"
  ];

  const uslugeDesno = [
    "najam kombi vozila po satu",
    "najam kombija po danu",
    "najam kombija na duži vremenski period",
    "prijevoz putnika kombijem 8+1",
    "zajamčena isporuka vozila do vrata",
    "dugoročni najam za tvrtke i obrte",
    "ostali prijevozi po Vašem zahtjevu"
  ];

  return (
    <section id="transfers" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl space-y-24">
        
        {/* Section 1 */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
              Najam kombija <span className="font-semibold text-primary">Hrvatska</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Za najam kombija bez stresa – sva naša vozila pripremljena su prema rigoroznim standardima za maksimalnu sigurnost.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 text-muted-foreground leading-relaxed">
            <div>
              <p className="mb-4">
                Komfor, vrhunska kvaliteta te isporuka usluge po najvišim kriterijima vaša su garancija od prvog dana našeg poslovanja. Sva kombi vozila u našem voznom parku se izuzetno redovito i kvalitetno održavaju, kako mehanički tako i estetski. Uredna i prostrana unutrašnjost prilagođena je dugim putovanjima i zahtjevnim prijevozima tereta.
              </p>
              <p>
                Precizno isplanirane rute te snalažljivi profesionalni vozači garantiraju pronalazak najboljeg rješenja u slučaju nepredviđenih gužvi. Udobnost i sigurnost vašeg putovanja nisu samo obećanje već naša primarna obveza.
              </p>
            </div>
            <div>
              <p className="mb-4">
                Tome najbolje svjedoči sve veći broj povratnih, izuzetno zadovoljnih klijenata koji nam se mjesecima i godinama obraćaju s punim povjerenjem. Omjer cijene, sigurnosti i vrhunskog pristupa bez dodatnih komplikacija zaštitni su znak naše rent a car kombi ponude.
              </p>
              <p>
                Za sve upite i rezervacije, možete nam se obratiti apsolutno slobodno putem mobilnog telefona, email adrese ili aplikacija za slanje poruka (WhatsApp, Viber). Naša služba za podršku korisnicima stoji vam po dogovoru na raspolaganju kako bi vam pružila najbolju moguću informaciju.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-foreground">
              Usluge i <span className="font-semibold text-primary">opcije prijevoza</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 text-muted-foreground leading-relaxed">
            <div>
              <p className="mb-8">
                Brojne agencije nude najam prijevoza no nerijetko Vas vežu uz skrivene troškove zbog kojih je konačna cijena neočekivano visoka. Redovito vas informiramo o svemu! Svaki izračun predstavljen Vam je transparentno u startu kako se ne bi javile nepoželjne obveze tijekom izvršenja usluge. Mi komuniciramo s Vama stalno i ne isporučujemo "jeftinije varijante od one ugovorene".
              </p>
              
              <h3 className="text-xl font-medium text-foreground mb-6">Najam kombi usluge koje pružamo:</h3>
              <ul className="space-y-3">
                {uslugeLijevo.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-8">
                U situacijama kada stvari krenu po zlu ili se dogode iznenadni prijevozni izazovi - reagiramo bez odlaganja. Bilo to po satu, jednom u danu, preko noći ili na cijeli mjesec, mi nudimo izvanrednu paletu za najam dostavnih i putničkih vozila za svaku vrstu posla (selidbe manjih objekata, roba nespretnih dimenzija i slično). Vaš logičan izbor smo baš mi!
              </p>

              <h3 className="text-xl font-medium text-foreground mb-6">Ostale rent a van opcije:</h3>
              <ul className="space-y-3">
                {uslugeDesno.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
