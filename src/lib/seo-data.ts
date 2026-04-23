import { Language } from './translations';

export type PageSeoData = {
  h1: string;
  title: string;
  description: string;
};

export type RouteSeoMap = Record<string, Partial<Record<Language, PageSeoData>>>;

// Ovdje uređujete H1, Title tagove i Meta Description za svaki URL (engleski, hrvatski, njemački itd.)
// Ako ne popunite neki jezik, sustav će se vratiti na predzadnju ili englesku verziju automatski.
export const seoData: RouteSeoMap = {
  // POČETNA STRANICA
  '/': {
    en: { h1: "Zagreb City and Airport Transfers", title: "Najam Kombija - Premium Transportation in Croatia", description: "Book reliable private transfers in Zagreb. Professional drivers, fixed prices, 24/7 service. Best airport and city transfer service in Croatia." },
    hr: { h1: "Zagreb Gradski i Aerodromski Transferi", title: "Najam Kombija - Premium prijevoz u Hrvatskoj", description: "Pouzdani transferi iz Zagreba. Profesionalni vozači, fiksne cijene, usluga 24/7." },
    de: { h1: "Zagreb Stadt- und Flughafentransfers", title: "Najam Kombija - Premium Transport in Kroatien", description: "Zuverlässige Transfers aus Zagreb. Professionelle fahrer, 24/7 service." },
    it: { h1: "Trasferimenti a Zagabria e Aeroporto", title: "Najam Kombija - Trasporto Premium in Croazia", description: "Prenota trasferimenti privati affidabili a Zagabria. Autisti professionisti, prezzi fissi." },
    fr: { h1: "Transferts Ville et Aéroport de Zagreb", title: "Najam Kombija - Transport Premium en Croatie", description: "Réservez des transferts privés fiables à Zagreb. Chauffeurs professionnels." },
  },

  // USLUGE
  '/services': {
    en: { h1: "Our Services", title: "Professional Transfer Services | Najam Kombija", description: "Comfortable and reliable transportation solutions across Croatia" },
    hr: { h1: "Naše Usluge", title: "Profesionalne Transfer Usluge | Najam Kombija", description: "Udobna i pouzdana rješenja za prijevoz širom Hrvatske" },
  },
  '/coach-rental': {
    en: { h1: "Bus Rental Croatia", title: "Coach Rental Croatia | Najam Kombija", description: "Premium coach rental services for groups throughout Croatia." },
    hr: { h1: "Najam Autobusa Hrvatska", title: "Najam autobusa Hrvatska | Najam Kombija", description: "Premium usluga najma autobusa za grupe širom Hrvatske." },
    de: { h1: "Busvermietung Kroatien", title: "Busvermietung Kroatien | Najam Kombija", description: "Premium-Busvermietung für Gruppen in ganz Kroatien." },
    it: { h1: "Noleggio Autobus Croazia", title: "Noleggio Autobus Croazia | Najam Kombija", description: "Servizi di noleggio autobus premium per gruppi in tutta la Croazia." },
    fr: { h1: "Location de Bus en Croatie", title: "Location de Bus Croatie | Najam Kombija", description: "Services de location de bus premium pour les groupes." },
  },
  '/minibus-rental': {
    en: { h1: "Minibus Rental Croatia", title: "Minibus Rental Croatia | Najam Kombija", description: "Comfortable minibus rentals for medium groups." },
    hr: { h1: "Najam Minibusa Hrvatska", title: "Najam minibusa Hrvatska | Najam Kombija", description: "Udoban najam minibusa za srednje grupe širom Hrvatske." },
    de: { h1: "Minibus Vermietung Kroatien", title: "Minibus Vermietung | Najam Kombija", description: "Komfortable Minibus-Vermietung für mittlere Gruppen." },
    it: { h1: "Noleggio Minibus Croazia", title: "Noleggio Minibus | Najam Kombija", description: "Comodi noleggi di minibus per gruppi medi." },
  },
  '/van-rental': {
    en: { h1: "Van Rental Croatia", title: "Van Rental Croatia | Najam Kombija", description: "Premium van rental services for families and groups." },
    hr: { h1: "Najam Kombija Hrvatska", title: "Najam kombija Hrvatska | Najam Kombija", description: "Premium usluga najma kombija za obitelji i manje grupe." },
  },
  '/chauffeur-service': {
    en: { h1: "Chauffeur Service Croatia", title: "Professional Chauffeur Service | Najam Kombija", description: "Private driver and chauffeur services for VIP and business." },
    hr: { h1: "Profesionalne Usluge Vozača", title: "Profesionalni Chauffeur Service | Vozila s vozačem", description: "Privatni vozač i profesionalna usluga prijevoza." },
    de: { h1: "Chauffeurservice Kroatien", title: "Professioneller Chauffeurservice | Najam Kombija", description: "Privatfahrer für VIP und Business." }
  },
  '/limo-hire-for-wedding': {
    en: { h1: "Limo Hire for Weddings", title: "Limo Hire for Weddings Croatia | Najam Kombija", description: "Luxury wedding transportation services in Croatia." },
    hr: { h1: "Najam Limuzine za Vjenčanja", title: "Najam limuzine za vjenčanja u Hrvatskoj | Najam Kombija", description: "Luksuzne limuzine za vjenčanja s profesionalnim vozačem." },
  },

  // TRANSFERI
  '/transfers/zagreb-to-split': {
    en: { h1: "Zagreb to Split Transfer", title: "Zagreb to Split Transfer | Najam Kombija", description: "Private transfer from Zagreb to Split. Book directly." },
    hr: { h1: "Zagreb do Splita Transfer", title: "Transfer Zagreb - Split | Najam Kombija", description: "Privatni transfer iz Zagreba do Splita." },
  },
  // Ovdje možete dodati sve ostale rute (Zadar, Dubrovnik, itd.) na isti kalup:
  // '/transfers/zagreb-to-zadar': { ... }
};
