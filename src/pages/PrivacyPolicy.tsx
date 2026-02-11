import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const PrivacyPolicy = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-8">
          {language === "hr" ? "Politika Privatnosti" : "Privacy Policy"}
        </h1>

        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === "hr" ? "1. Uvod" : "1. Introduction"}
            </h2>
            <p>
              {language === "hr"
                ? "Zagreb Transfers poštuje vašu privatnost i posvećen je zaštiti vaših osobnih podataka. Ova politika privatnosti će vas informirati o tome kako se brinu o vašim osobnim podacima kada posjetite našu web stranicu."
                : "Zagreb Transfers respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about how we take care of your personal data when you visit our website."}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === "hr" ? "2. Podaci koje prikupljamo" : "2. Data We Collect"}
            </h2>
            <p>
              {language === "hr"
                ? "Možemo prikupljati, koristiti, pohranjivati i prenositi različite vrste osobnih podataka o vama koje smo grupirali kako slijedi:"
                : "We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:"}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                {language === "hr"
                  ? "Podaci o identitetu: ime, prezime, korisničko ime ili slični identifikatori"
                  : "Identity Data: first name, last name, username or similar identifiers"}
              </li>
              <li>
                {language === "hr"
                  ? "Kontakt podaci: adresa e-pošte i telefonski brojevi"
                  : "Contact Data: email address and telephone numbers"}
              </li>
              <li>
                {language === "hr"
                  ? "Podaci o rezervaciji: mjesto polaska, odredište, datum i vrijeme, broj putnika"
                  : "Booking Data: pickup location, destination, date and time, number of passengers"}
              </li>
              <li>
                {language === "hr"
                  ? "Tehnički podaci: IP adresa, tip i verzija preglednika, postavke vremenske zone i lokacije, vrste i verzije dodataka preglednika, operativni sustav i platforma"
                  : "Technical Data: IP address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform"}
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === "hr" ? "3. Kako koristimo vaše podatke" : "3. How We Use Your Data"}
            </h2>
            <p>
              {language === "hr"
                ? "Koristimo vaše osobne podatke samo za:"
                : "We use your personal data only to:"}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                {language === "hr"
                  ? "Pružanje i upravljanje vašim rezervacijama transfera"
                  : "Provide and manage your transfer bookings"}
              </li>
              <li>
                {language === "hr"
                  ? "Komunikaciju s vama o vašoj rezervaciji"
                  : "Communicate with you about your booking"}
              </li>
              <li>
                {language === "hr"
                  ? "Poboljšanje naših usluga i korisničkog iskustva"
                  : "Improve our services and customer experience"}
              </li>
              <li>
                {language === "hr"
                  ? "Ispunjavanje pravnih obveza"
                  : "Comply with legal obligations"}
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === "hr" ? "4. Sigurnost podataka" : "4. Data Security"}
            </h2>
            <p>
              {language === "hr"
                ? "Implementirali smo odgovarajuće sigurnosne mjere kako bismo spriječili slučajni gubitak, korištenje ili pristup vašim osobnim podacima na neovlašteni način."
                : "We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way."}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === "hr" ? "5. Dijeljenje podataka" : "5. Data Sharing"}
            </h2>
            <p>
              {language === "hr"
                ? "Ne prodajemo, ne razmijenujemo niti ne izdajemo vaše osobne podatke trećim stranama bez vaše suglasnosti, osim kada je to potrebno za pružanje naših usluga ili kad to zakon zahtijeva."
                : "We do not sell, trade, or rent your personal data to third parties without your consent, except when necessary to provide our services or when required by law."}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === "hr" ? "6. Vaša prava" : "6. Your Rights"}
            </h2>
            <p>
              {language === "hr"
                ? "U određenim okolnostima, imate prava prema zakonima o zaštiti podataka u vezi s vašim osobnim podacima, uključujući pravo na:"
                : "Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:"}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                {language === "hr"
                  ? "Zatražiti pristup vašim osobnim podacima"
                  : "Request access to your personal data"}
              </li>
              <li>
                {language === "hr"
                  ? "Zatražiti ispravak vaših osobnih podataka"
                  : "Request correction of your personal data"}
              </li>
              <li>
                {language === "hr"
                  ? "Zatražiti brisanje vaših osobnih podataka"
                  : "Request erasure of your personal data"}
              </li>
              <li>
                {language === "hr"
                  ? "Prigovoriti obradi vaših osobnih podataka"
                  : "Object to processing of your personal data"}
              </li>
              <li>
                {language === "hr"
                  ? "Zatražiti ograničenje obrade vaših osobnih podataka"
                  : "Request restriction of processing your personal data"}
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === "hr" ? "7. Kolačići" : "7. Cookies"}
            </h2>
            <p>
              {language === "hr"
                ? "Naša web stranica koristi kolačiće kako bi razlikovala vas od drugih korisnika naše web stranice. To nam pomaže da vam pružimo dobro iskustvo kada pregledavate našu web stranicu i također nam omogućuje poboljšanje naše stranice."
                : "Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site."}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === "hr" ? "8. Promjene politike privatnosti" : "8. Changes to Privacy Policy"}
            </h2>
            <p>
              {language === "hr"
                ? "Možemo ažurirati ovu politiku privatnosti s vremena na vrijeme. Obavijestit ćemo vas o bilo kakvim promjenama objavom nove politike privatnosti na ovoj stranici."
                : "We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page."}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === "hr" ? "9. Kontaktirajte nas" : "9. Contact Us"}
            </h2>
            <p>
              {language === "hr"
                ? "Ako imate bilo kakvih pitanja o ovoj politici privatnosti ili našim praksama rukovanja podacima, molimo kontaktirajte nas na:"
                : "If you have any questions about this privacy policy or our data handling practices, please contact us at:"}
            </p>
            <div className="bg-card p-4 rounded-lg border border-border mt-4">
              <p className="font-semibold text-foreground">Zagreb Transfers</p>
              <p>Email: info@zagreb-transfers.hr</p>
              <p>
                {language === "hr" ? "Telefon: +385 1 234 5678" : "Phone: +385 1 234 5678"}
              </p>
              <p>
                {language === "hr" ? "Adresa: Zagreb, Hrvatska" : "Address: Zagreb, Croatia"}
              </p>
            </div>
          </section>

          <section className="pt-8 border-t border-border mt-8">
            <p className="text-sm text-muted-foreground">
              {language === "hr"
                ? "Posljednja izmjena: 3. studenog 2025."
                : "Last updated: November 3, 2025"}
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
