import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t, getLink, language } = useLanguage();

  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <svg
                width="40"
                height="40"
                viewBox="0 0 100 100"
                className="h-10 w-10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  points="25,20 85,20 50,52 85,52 15,80 50,48 25,48"
                  fill="#F6C344"
                />
              </svg>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-primary">NAJAM</span>
                <span className="text-xs text-foreground tracking-wider">KOMBIJA</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              {language === 'en' ? 'Your trusted partner for renting all types of passenger and cargo vehicles across Croatia.' : (language === 'de' ? 'Ihr zuverlässiger Partner für die Anmietung aller Arten von Personen- und Frachtfahrzeugen in ganz Kroatien.' : 'Vaš pouzdani partner za najam svih vrsta putničkih i teretnih vozila širom Hrvatske.')}
            </p>
          </div>

          <div>
            <h3 className="text-foreground font-bold mb-4">{language === 'en' ? 'Quick Links' : (language === 'de' ? 'Schnelle Links' : 'Brzi Linkovi')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to={getLink('/')} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t.header?.home || (language === 'en' ? 'Home' : (language === 'de' ? 'Startseite' : 'Početna'))}
                </Link>
              </li>
              <li>
                <Link to={getLink('/contact')} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t.header?.contact || (language === 'en' ? 'Contact' : (language === 'de' ? 'Kontakt' : 'Kontakt'))}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-bold mb-4">{language === 'en' ? 'Vehicle Categories' : (language === 'de' ? 'Fahrzeugkategorien' : 'Kategorije Vozila')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to={getLink('/kategorije/putnicki-kombi')} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {language === 'en' ? 'Passenger Vans' : (language === 'de' ? 'Kleinbusse' : 'Putnička kombi vozila')}
                </Link>
              </li>
              <li>
                <Link to={getLink('/kategorije/teretni-kombi')} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {language === 'en' ? 'Cargo Vans' : (language === 'de' ? 'Transporter' : 'Teretna kombi vozila')}
                </Link>
              </li>
              <li>
                <Link to={getLink('/kategorije/mala-dostavna-vozila')} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {language === 'en' ? 'Small Delivery Vans' : (language === 'de' ? 'Kleine Lieferwagen' : 'Mala dostavna vozila')}
                </Link>
              </li>
              <li>
                <Link to={getLink('/kategorije/vozilo-za-5-osoba-n1')} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {language === 'en' ? 'N1 Vehicles 5 Seats' : (language === 'de' ? 'N1 Fahrzeuge 5 Sitze' : 'Vozila za 5 osoba N1')}
                </Link>
              </li>
              <li>
                <Link to={getLink('/kategorije/najam-kombija-s-vozacem')} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {language === 'en' ? 'Van Rental With Driver' : (language === 'de' ? 'Kleinbus mieten mit Fahrer' : 'Najam kombija s vozačem')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-bold mb-4">{language === 'en' ? 'Contact Info' : (language === 'de' ? 'Kontaktinformationen' : 'Kontakt Info')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                +385 97 601 9558
              </li>
              <li className="flex items-center gap-3 text-muted-foreground break-all">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                zagrebtransfers.hr@gmail.com
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                {language === 'en' ? 'Zagreb, Croatia' : (language === 'de' ? 'Zagreb, Kroatien' : 'Zagreb, Hrvatska')}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 mb-8 mt-12">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <h3 className="text-foreground font-bold mb-4">{language === 'en' ? 'Van rental services we provide:' : (language === 'de' ? 'Unsere Dienstleistungen für die Anmietung von Transportern:' : 'Najam kombi usluge koje pružamo:')}</h3>
              <ul className="space-y-2">
                <li><Link to={getLink('/kategorije/mala-dostavna-vozila')} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> {language === 'en' ? 'Small delivery vehicle rental' : (language === 'de' ? 'Kleine Lieferwagen mieten' : 'Najam dostavnih vozila')}</Link></li>
                <li><Link to={getLink('/kategorije/teretni-kombi')} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> {language === 'en' ? 'Cargo van rental' : (language === 'de' ? 'Transporter mieten' : 'Najam teretnog kombija')}</Link></li>
                <li><Link to={getLink('/kategorije/najam-kombija-s-vozacem')} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> {language === 'en' ? 'Van rental with driver' : (language === 'de' ? 'Kleinbus mieten mit Fahrer' : 'Najam kombija s vozačem')}</Link></li>
                <li><Link to={getLink('/kategorije/najam-s-dva-vozaca-kod-duzih-ruta')} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> {language === 'en' ? 'Rental with two drivers for long routes' : (language === 'de' ? 'Miete mit zwei Fahrern für lange Strecken' : 'Najam s dva vozača kod dužih ruta')}</Link></li>
                <li><Link to={getLink('/kategorije/najam-kombija-bez-vozaca')} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> {language === 'en' ? 'Van rental without driver' : (language === 'de' ? 'Transporter mieten ohne Fahrer' : 'Najam kombija bez vozača')}</Link></li>
                <li><Link to={getLink('/kategorije/dnevni-najam-vozila')} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> {language === 'en' ? 'Daily vehicle rental' : (language === 'de' ? 'Tägliche Fahrzeugmiete' : 'Dnevni najam vozila')}</Link></li>
                <li><Link to={getLink('/kategorije/medunarodni-kombi-prijevozi')} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> {language === 'en' ? 'International van transport' : (language === 'de' ? 'Internationale Transportertransporte' : 'Međunarodni kombi prijevozi')}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-foreground font-bold mb-4">{language === 'en' ? 'Other rent a van options:' : (language === 'de' ? 'Andere Optionen für Autovermietung:' : 'Ostale rent a van opcije:')}</h3>
              <ul className="space-y-2">
                <li><Link to={getLink('/kategorije/najam-kombi-vozila-po-satu')} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> {language === 'en' ? 'Hourly van rental' : (language === 'de' ? 'Stundenweise Transportermiete' : 'Najam kombi vozila po satu')}</Link></li>
                <li><Link to={getLink('/kategorije/najam-kombija-po-danu')} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> {language === 'en' ? 'Van rental per day' : (language === 'de' ? 'Transporter mieten pro Tag' : 'Najam kombija po danu')}</Link></li>
                <li><Link to={getLink('/kategorije/najam-kombija-na-duzi-vremenski-period')} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> {language === 'en' ? 'Long-term van rental' : (language === 'de' ? 'Langzeitmiete von Transportern' : 'Najam kombija na duži vremenski period')}</Link></li>
                <li><Link to={getLink('/kategorije/prijevoz-putnika-kombijem-8-1')} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> {language === 'en' ? 'Passenger transport 8+1' : (language === 'de' ? 'Personentransport 8+1' : 'Prijevoz putnika kombijem 8+1')}</Link></li>
                <li><Link to={getLink('/kategorije/zajamcena-isporuka-vozila-do-vrata')} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> {language === 'en' ? 'Guaranteed door-to-door delivery' : (language === 'de' ? 'Garantierte Tür-zu-Tür Lieferung' : 'Zajamčena isporuka vozila do vrata')}</Link></li>
                <li><Link to={getLink('/kategorije/dugorocni-najam-za-tvrtke-i-obrte')} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> {language === 'en' ? 'Long-term rental for companies' : (language === 'de' ? 'Langzeitmiete für Unternehmen' : 'Dugoročni najam za tvrtke i obrte')}</Link></li>
                <li><Link to={getLink('/kategorije/ostali-prijevozi-po-vasem-zahtjevu')} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> {language === 'en' ? 'Other transport on your request' : (language === 'de' ? 'Sonstige transporte nach bedarf' : 'Ostali prijevozi po Vašem zahtjevu')}</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 mb-8 mt-12">
          <h3 className="text-foreground font-bold mb-4 text-center">{language === 'en' ? 'Van Rental Across Cities (Local)' : (language === 'de' ? 'Transportervermietung nach Städten (Lokal)' : 'Najam Kombija po Gradovima (Lokalno)')}</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {["Split", "Rijeka", "Osijek", "Zadar", "Pula", "Varaždin", "Karlovac", "Slavonski Brod", "Dubrovnik", "Šibenik", "Sisak", "Velika Gorica", "Čakovec", "Bjelovar", "Samobor"].map(city => {
              const slug = city.toLowerCase().replace(/ž/g, 'z').replace(/š/g, 's').replace(/č/g, 'c').replace(/ć/g, 'c').replace(/ /g, '-');
              return (
                <Link key={city} to={getLink(`/najam-kombija-${slug}`)} className="text-xs text-muted-foreground hover:text-primary transition-colors bg-background/50 px-3 py-1.5 rounded-full border border-border">
                  {city}
                </Link>
              )
            })}
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Najam Kombija. {language === 'en' ? 'All rights reserved.' : (language === 'de' ? 'Alle Rechte vorbehalten.' : 'Sva prava pridržana.')}
            </p>
            <div className="flex gap-6">
              <Link to={getLink('/privacy-policy')} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {language === 'en' ? 'Privacy Policy' : (language === 'de' ? 'Datenschutzerklärung' : 'Politika Privatnosti')}
              </Link>
              <Link to={getLink('/terms-of-service')} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {language === 'en' ? 'Terms of Service' : (language === 'de' ? 'Nutzungsbedingungen' : 'Uvjeti Korištenja')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
