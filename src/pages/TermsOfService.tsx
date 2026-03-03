import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const TermsOfService = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-8">
          {language === "hr" ? "Uvjeti Korištenja" : "Terms of Service"}
        </h1>

        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === "hr" ? "1. Prihvaćanje uvjeta" : "1. Acceptance of Terms"}
            </h2>
            <p>
              {language === "hr"
                ? "Korištenjem usluga Zagreb Transfers, prihvaćate ove uvjete korištenja u cijelosti. Ako se ne slažete s bilo kojim dijelom ovih uvjeta, ne smijete koristiti naše usluge."
                : "By using Zagreb Transfers services, you accept these terms of service in full. If you disagree with any part of these terms, you must not use our services."}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === "hr" ? "2. Rezervacije i plaćanja" : "2. Bookings and Payments"}
            </h2>
            <p>
              {language === "hr"
                ? "Sve rezervacije moraju biti potvrđene putem naše web stranice, e-maila ili telefona. Cijene su fiksne i potvrđene u trenutku rezervacije."
                : "All bookings must be confirmed via our website, email, or phone. Prices are fixed and confirmed at the time of booking."}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                {language === "hr"
                  ? "Plaćanje može biti izvršeno gotovinom, karticom ili online prijenosom"
                  : "Payment can be made by cash, card, or online transfer"}
              </li>
              <li>
                {language === "hr"
                  ? "Puni iznos mora biti plaćen najkasnije na kraju usluge"
                  : "Full payment must be made by the end of the service at the latest"}
              </li>
              <li>
                {language === "hr"
                  ? "Prihvaćamo sve glavne kreditne i debitne kartice"
                  : "We accept all major credit and debit cards"}
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === "hr" ? "3. Politika otkazivanja" : "3. Cancellation Policy"}
            </h2>
            <p>
              {language === "hr"
                ? "Razumijemo da se planovi mogu promijeniti. Naša politika otkazivanja je sljedeća:"
                : "We understand that plans can change. Our cancellation policy is as follows:"}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                {language === "hr"
                  ? "Otkazivanje 24 sata ili više prije zakazanog vremena: Potpuni povrat novca"
                  : "Cancellation 24 hours or more before scheduled time: Full refund"}
              </li>
              <li>
                {language === "hr"
                  ? "Otkazivanje između 12-24 sata: 50% povrat novca"
                  : "Cancellation between 12-24 hours: 50% refund"}
              </li>
              <li>
                {language === "hr"
                  ? "Otkazivanje manje od 12 sati prije ili neizvršenje dolaska: Bez povrata novca"
                  : "Cancellation less than 12 hours before or no-show: No refund"}
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === "hr" ? "4. Promjene rezervacije" : "4. Booking Modifications"}
            </h2>
            <p>
              {language === "hr"
                ? "Promjene rezervacije mogu biti napravljene do 12 sati prije zakazanog vremena, ovisno o dostupnosti. Kontaktirajte nas odmah ako trebate promijeniti vašu rezervaciju."
                : "Booking modifications can be made up to 12 hours before the scheduled time, subject to availability. Contact us immediately if you need to change your booking."}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === "hr" ? "5. Odgovornosti putnika" : "5. Passenger Responsibilities"}
            </h2>
            <p>
              {language === "hr"
                ? "Kao putnik, odgovorni ste za:"
                : "As a passenger, you are responsible for:"}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                {language === "hr"
                  ? "Biti na mjestu polaska u dogovoreno vrijeme"
                  : "Being at the pickup location at the agreed time"}
              </li>
              <li>
                {language === "hr"
                  ? "Pružiti točne informacije o letu (za aerodromske transfere)"
                  : "Providing accurate flight information (for airport transfers)"}
              </li>
              <li>
                {language === "hr"
                  ? "Poštivati vozača i vozilo"
                  : "Respecting the driver and vehicle"}
              </li>
              <li>
                {language === "hr"
                  ? "Pridržavati se sigurnosnih propisa (nošenje sigurnosnog pojasa)"
                  : "Adhering to safety regulations (wearing seatbelts)"}
              </li>
              <li>
                {language === "hr"
                  ? "Ne pušiti u vozilu"
                  : "No smoking in the vehicle"}
              </li>
              <li>
                {language === "hr"
                  ? "Ne konzumirati hranu ili piće bez odobrenja vozača"
                  : "Not consuming food or drinks without driver's approval"}
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === "hr" ? "6. Prtljaga i osobni predmeti" : "6. Luggage and Personal Items"}
            </h2>
            <p>
              {language === "hr"
                ? "Svaki putnik može ponijeti do 2 standardne torbe (do 23kg svaka) bez dodatne naknade. Za dodatnu prtljagu, molimo obavijestite nas unaprijed. Zagreb Transfers ne preuzima odgovornost za izgubljenu ili oštećenu prtljagu ili osobne predmete ostavljene u vozilu."
                : "Each passenger may bring up to 2 standard bags (up to 23kg each) at no additional charge. For extra luggage, please inform us in advance. Zagreb Transfers is not responsible for lost or damaged luggage or personal items left in the vehicle."}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === "hr" ? "7. Kašnjenja i izmjene leta" : "7. Flight Delays and Changes"}
            </h2>
            <p>
              {language === "hr"
                ? "Za aerodromske transfere, naši vozači prate status leta. Nema dodatnih naknada za kašnjenja leta do 2 sata. Za kašnjenja duža od 2 sata, rezervirajte novi transfer."
                : "For airport transfers, our drivers track flight status. There are no additional charges for flight delays up to 2 hours. For delays longer than 2 hours, please book a new transfer."}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === "hr" ? "8. Osiguranje i sigurnost" : "8. Insurance and Safety"}
            </h2>
            <p>
              {language === "hr"
                ? "Sva naša vozila su potpuno osigurana i redovito održavana. Naši vozači imaju važeće vozačke dozvole i profesionalne certifikate. Sigurnost naših putnika je naš prioritet."
                : "All our vehicles are fully insured and regularly maintained. Our drivers hold valid driving licenses and professional certifications. The safety of our passengers is our priority."}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === "hr" ? "9. Odgovornost kompanije" : "9. Company Liability"}
            </h2>
            <p>
              {language === "hr"
                ? "Zagreb Transfers će uložiti razumne napore da pruži usluge na vrijeme i sigurno. Međutim, ne možemo biti odgovorni za kašnjenja uzrokovana prometnim gužvama, vremenskim uvjetima, cestovnim radovima ili drugim okolnostima izvan naše kontrole."
                : "Zagreb Transfers will make reasonable efforts to provide services on time and safely. However, we cannot be held responsible for delays caused by traffic congestion, weather conditions, roadworks, or other circumstances beyond our control."}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === "hr" ? "10. Pravo odbijanja usluge" : "10. Right to Refuse Service"}
            </h2>
            <p>
              {language === "hr"
                ? "Zadržavamo pravo odbijanja usluge putnicima koji su pod utjecajem alkohola ili droga, pokazuju agresivno ponašanje, ili ne poštuju naša pravila i vozača."
                : "We reserve the right to refuse service to passengers who are under the influence of alcohol or drugs, display aggressive behavior, or do not respect our rules and driver."}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === "hr" ? "11. Djeca i dječje sjedalice" : "11. Children and Child Seats"}
            </h2>
            <p>
              {language === "hr"
                ? "Dječje sjedalice su dostupne na zahtjev bez dodatne naknade. Molimo navedite dob i težinu djeteta pri rezervaciji. Roditelji su odgovorni osigurati da je dijete pravilno osigurano."
                : "Child seats are available upon request at no additional charge. Please specify the age and weight of the child when booking. Parents are responsible for ensuring the child is properly secured."}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === "hr" ? "12. Napojnice" : "12. Gratuities"}
            </h2>
            <p>
              {language === "hr"
                ? "Napojnice nisu uključene u cijenu, ali su uvijek dobrodošle ako ste zadovoljni uslugom. Standardna napojnica je 10% cijene usluge."
                : "Gratuities are not included in the price but are always welcome if you are satisfied with the service. Standard gratuity is 10% of the service price."}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === "hr" ? "13. Pritužbe i povratne informacije" : "13. Complaints and Feedback"}
            </h2>
            <p>
              {language === "hr"
                ? "Cijenimo vaše povratne informacije. Ako imate bilo kakvih pritužbi ili prijedloga, molimo kontaktirajte nas unutar 48 sati nakon usluge putem e-maila ili telefona."
                : "We value your feedback. If you have any complaints or suggestions, please contact us within 48 hours of service via email or phone."}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === "hr" ? "14. Izmjene uvjeta" : "14. Changes to Terms"}
            </h2>
            <p>
              {language === "hr"
                ? "Zadržavamo pravo izmjene ovih uvjeta korištenja u bilo koje vrijeme. Izmjene stupaju na snagu odmah nakon objave na našoj web stranici."
                : "We reserve the right to modify these terms of service at any time. Changes take effect immediately upon posting on our website."}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === "hr" ? "15. Mjerodavno pravo" : "15. Governing Law"}
            </h2>
            <p>
              {language === "hr"
                ? "Ovi uvjeti korištenja podliježu zakonima Republike Hrvatske. Bilo kakvi sporovi bit će riješeni pred nadležnim sudovima u Zagrebu."
                : "These terms of service are governed by the laws of the Republic of Croatia. Any disputes will be resolved in the competent courts in Zagreb."}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === "hr" ? "16. Kontakt informacije" : "16. Contact Information"}
            </h2>
            <p>
              {language === "hr"
                ? "Za bilo kakva pitanja o ovim uvjetima korištenja, molimo kontaktirajte nas:"
                : "For any questions about these terms of service, please contact us:"}
            </p>
            <div className="bg-card p-4 rounded-lg border border-border mt-4">
              <p className="font-semibold text-foreground">Zagreb Transfers</p>
              <p>Email: zagrebtransfers.hr@gmail.com</p>
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

export default TermsOfService;
