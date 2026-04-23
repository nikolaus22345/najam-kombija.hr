import { Route, Routes } from "react-router-dom";
import LanguageWrapper from "@/components/LanguageWrapper";
import DefaultLanguageWrapper from "@/components/DefaultLanguageWrapper";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ZagrebAirport from "./pages/transfers/ZagrebAirport";
import SplitAirport from "./pages/transfers/SplitAirport";
import ZadarAirport from "./pages/transfers/ZadarAirport";
import ZagrebCityCenter from "./pages/transfers/ZagrebCityCenter";
import AllDestinations from "./pages/transfers/AllDestinations";
import ZagrebToPlitvice from "./pages/transfers/routes/ZagrebToPlitvice";
import ZagrebToSplit from "./pages/transfers/routes/ZagrebToSplit";
import SplitToDubrovnik from "./pages/transfers/routes/SplitToDubrovnik";
import ZagrebToMotovun from "./pages/transfers/routes/ZagrebToMotovun";
import ZagrebToBelgrade from "./pages/transfers/routes/ZagrebToBelgrade";
import ZagrebToMilan from "./pages/transfers/routes/ZagrebToMilan";
import ZagrebToVenice from "./pages/transfers/routes/ZagrebToVenice";
import ZagrebToTisno from "./pages/transfers/routes/ZagrebToTisno";
import ZagrebToDubrovnik from "./pages/transfers/routes/ZagrebToDubrovnik";
import ZagrebToPortoroz from "./pages/transfers/routes/ZagrebToPortoroz";
import ZagrebToBudapest from "./pages/transfers/routes/ZagrebToBudapest";
import ZagrebToRome from "./pages/transfers/routes/ZagrebToRome";
import ZagrebToMakarska from "./pages/transfers/routes/ZagrebToMakarska";
import ZagrebToCelje from "./pages/transfers/routes/ZagrebToCelje";
import ZagrebToKrakow from "./pages/transfers/routes/ZagrebToKrakow";
import ZagrebToBihac from "./pages/transfers/routes/ZagrebToBihac";
import ZagrebToSarajevo from "./pages/transfers/routes/ZagrebToSarajevo";
import ZagrebToTrieste from "./pages/transfers/routes/ZagrebToTrieste";
import ZagrebToLjubljana from "./pages/transfers/routes/ZagrebToLjubljana";
import ZagrebToVienna from "./pages/transfers/routes/ZagrebToVienna";
import ZagrebToGraz from "./pages/transfers/routes/ZagrebToGraz";
import ZagrebToMunich from "./pages/transfers/routes/ZagrebToMunich";
import ZagrebToPrague from "./pages/transfers/routes/ZagrebToPrague";
import ZagrebToTrogir from "./pages/transfers/routes/ZagrebToTrogir";
import ZagrebToPassau from "./pages/transfers/routes/ZagrebToPassau";
import ZagrebToZadar from "./pages/transfers/routes/ZagrebToZadar";
import ZagrebToRijeka from "./pages/transfers/routes/ZagrebToRijeka";
import ZagrebToPula from "./pages/transfers/routes/ZagrebToPula";
import ZagrebToOsijek from "./pages/transfers/routes/ZagrebToOsijek";
import ZagrebToRovinj from "./pages/transfers/routes/ZagrebToRovinj";
import ZagrebToOpatija from "./pages/transfers/routes/ZagrebToOpatija";
import ZagrebToVarazdin from "./pages/transfers/routes/ZagrebToVarazdin";
import ZagrebToSlavonskiBrod from "./pages/transfers/routes/ZagrebToSlavonskiBrod";
import ZagrebToSisak from "./pages/transfers/routes/ZagrebToSisak";
import ZagrebToKarlovac from "./pages/transfers/routes/ZagrebToKarlovac";
import ZagrebToNovalja from "./pages/transfers/routes/ZagrebToNovalja";
import ZagrebToMurter from "./pages/transfers/routes/ZagrebToMurter";
import VodiceToZagreb from "./pages/transfers/routes/VodiceToZagreb";
import BovecToZagreb from "./pages/transfers/routes/BovecToZagreb";
import KranjToZagreb from "./pages/transfers/routes/KranjToZagreb";
import PecsToZagreb from "./pages/transfers/routes/PecsToZagreb";
import InnsbruckToZagreb from "./pages/transfers/routes/InnsbruckToZagreb";
import UmagToZagreb from "./pages/transfers/routes/UmagToZagreb";
import KlagenfurtToZagreb from "./pages/transfers/routes/KlagenfurtToZagreb";
import VillachToZagreb from "./pages/transfers/routes/VillachToZagreb";
import CrikvenicaToZagreb from "./pages/transfers/routes/CrikvenicaToZagreb";
import SenjToZagreb from "./pages/transfers/routes/SenjToZagreb";
import BiogradToZagreb from "./pages/transfers/routes/BiogradToZagreb";
import GroznjanToZagreb from "./pages/transfers/routes/GroznjanToZagreb";
import SibenikToZagreb from "./pages/transfers/routes/SibenikToZagreb";
import StuttgartToZagreb from "./pages/transfers/routes/StuttgartToZagreb";
import CeskyKrumlovToZagreb from "./pages/transfers/routes/CeskyKrumlovToZagreb";
import BelgradeAirportToZagreb from "./pages/transfers/routes/BelgradeAirportToZagreb";
import FerraraToZagreb from "./pages/transfers/routes/FerraraToZagreb";
import MilanLinateToZagreb from "./pages/transfers/routes/MilanLinateToZagreb";
import PisaToZagreb from "./pages/transfers/routes/PisaToZagreb";
import BalatonfuredToZagreb from "./pages/transfers/routes/BalatonfuredToZagreb";
import SplitToHvar from "./pages/transfers/routes/SplitToHvar";
import SplitToKorcula from "./pages/transfers/routes/SplitToKorcula";
import SplitToMakarska from "./pages/transfers/routes/SplitToMakarska";
import SplitToTrogir from "./pages/transfers/routes/SplitToTrogir";
import SplitToSibenik from "./pages/transfers/routes/SplitToSibenik";
import SplitToBol from "./pages/transfers/routes/SplitToBol";
import SplitToOmis from "./pages/transfers/routes/SplitToOmis";
import SplitToPrimosten from "./pages/transfers/routes/SplitToPrimosten";
import ZadarToNovalja from "./pages/transfers/routes/ZadarToNovalja";
import ZadarToPag from "./pages/transfers/routes/ZadarToPag";
import ZadarToBiograd from "./pages/transfers/routes/ZadarToBiograd";
import ZadarToNin from "./pages/transfers/routes/ZadarToNin";
import DubrovnikToCavtat from "./pages/transfers/routes/DubrovnikToCavtat";
import ZagrebToPorec from "./pages/transfers/routes/ZagrebToPorec";
import BookingCheckout from "./pages/BookingCheckout";
import Checkout from "./pages/Checkout";
import GetQuote from "./pages/GetQuote";
import ProfessionalDrivers from "./pages/features/ProfessionalDrivers";
import SafetyFirst from "./pages/features/SafetyFirst";
import TwentyFourSeven from "./pages/features/TwentyFourSeven";
import FixedPrices from "./pages/features/FixedPrices";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import BeachesInDalmatia from "./pages/blog/BeachesInDalmatia";
import PlitviceLakesGuide from "./pages/blog/PlitviceLakesGuide";
import HiddenGemsIstria from "./pages/blog/HiddenGemsIstria";
import SummerTransferTips from "./pages/blog/SummerTransferTips";
import CroatianWineRoutes from "./pages/blog/CroatianWineRoutes";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CoachRental from "./pages/services/CoachRental";
import MinibusRental from "./pages/services/MinibusRental";
import VanRental from "./pages/services/VanRental";
import ChauffeurService from "./pages/services/ChauffeurService";
import ChauffeurServiceZagreb from "./pages/services/ChauffeurServiceZagreb";
import ChauffeurServiceDubrovnik from "./pages/services/ChauffeurServiceDubrovnik";
import LimoServiceZagreb from "./pages/services/LimoServiceZagreb";
import LimoServiceDubrovnik from "./pages/services/LimoServiceDubrovnik";
import LimoHireForWedding from "./pages/services/LimoHireForWedding";
import ZagrebTransfers from "./pages/transfers/ZagrebTransfers";
import DubrovnikTransfers from "./pages/transfers/DubrovnikTransfers";
import ZagrebAirportTransfers from "./pages/airport-transfers/ZagrebAirportTransfers";
import MobileMenu from "./pages/MobileMenu";
import Services from "./pages/Services";
import Reservation from "./pages/Reservation";
import ThankYou from "./pages/ThankYou";
import NajamKombijaCity from "./pages/NajamKombijaCity";
import Kategorija from "./pages/Kategorija";

const RouteList = () => <>
    <Route index element={<Index />} />
    {[
      "zagreb", "split", "rijeka", "osijek", "zadar", 
      "pula", "varazdin", "karlovac", "slavonski-brod", 
      "dubrovnik", "sibenik", "sisak", "velika-gorica", 
      "cakovec", "bjelovar", "samobor"
    ].map(city => (
      <Route key={city} path={`najam-kombija-${city}`} element={<NajamKombijaCity citySlug={city} />} />
    ))}
    <Route path="kategorije/:kategorija" element={<Kategorija />} />
    <Route path="transfers/zagreb-airport" element={<ZagrebAirport />} />
    <Route path="transfers/split-airport" element={<SplitAirport />} />
    <Route path="transfers/zadar-airport" element={<ZadarAirport />} />
    <Route path="transfers/zagreb-city-center" element={<ZagrebCityCenter />} />
    <Route path="transfers/all-destinations" element={<AllDestinations />} />
    <Route path="transfers/zagreb-to-plitvice-lakes" element={<ZagrebToPlitvice />} />
    <Route path="transfers/zagreb-to-split" element={<ZagrebToSplit />} />
    <Route path="transfer-zagreb-split" element={<ZagrebToSplit />} />
    <Route path="transfers/split-to-dubrovnik" element={<SplitToDubrovnik />} />
    <Route path="transfers/zagreb-to-motovun" element={<ZagrebToMotovun />} />
    <Route path="transfers/zagreb-to-belgrade-airport" element={<ZagrebToBelgrade />} />
    <Route path="transfers/zagreb-to-belgrade" element={<ZagrebToBelgrade />} />
    <Route path="transfers/zagreb-to-milan" element={<ZagrebToMilan />} />
    <Route path="transfers/zagreb-to-venice" element={<ZagrebToVenice />} />
    <Route path="transfers/zagreb-to-tisno" element={<ZagrebToTisno />} />
    <Route path="transfers/zagreb-to-dubrovnik" element={<ZagrebToDubrovnik />} />
    <Route path="transfers/zagreb-to-portoroz" element={<ZagrebToPortoroz />} />
    <Route path="transfers/zagreb-to-budapest" element={<ZagrebToBudapest />} />
    <Route path="transfers/zagreb-to-rome" element={<ZagrebToRome />} />
    <Route path="transfers/zagreb-to-makarska" element={<ZagrebToMakarska />} />
    <Route path="transfers/zagreb-to-celje" element={<ZagrebToCelje />} />
    <Route path="transfers/zagreb-to-krakow" element={<ZagrebToKrakow />} />
    <Route path="transfers/zagreb-to-bihac" element={<ZagrebToBihac />} />
    <Route path="transfers/zagreb-to-sarajevo-airport" element={<ZagrebToSarajevo />} />
    <Route path="transfers/zagreb-to-sarajevo" element={<ZagrebToSarajevo />} />
    <Route path="transfers/zagreb-to-trieste" element={<ZagrebToTrieste />} />
    <Route path="transfers/zagreb-to-ljubljana" element={<ZagrebToLjubljana />} />
    <Route path="transfers/zagreb-to-vienna" element={<ZagrebToVienna />} />
    <Route path="transfers/zagreb-to-graz" element={<ZagrebToGraz />} />
    <Route path="transfers/zagreb-to-munich" element={<ZagrebToMunich />} />
    <Route path="transfers/zagreb-to-prague-airport" element={<ZagrebToPrague />} />
    <Route path="transfers/zagreb-to-prague" element={<ZagrebToPrague />} />
    <Route path="transfers/zagreb-to-trogir" element={<ZagrebToTrogir />} />
    <Route path="transfers/zagreb-to-passau" element={<ZagrebToPassau />} />
    <Route path="zagreb-to-plitvice" element={<ZagrebToPlitvice />} />
    <Route path="zagreb-to-split" element={<ZagrebToSplit />} />
    <Route path="zagreb-to-dubrovnik" element={<ZagrebToDubrovnik />} />
    <Route path="zagreb-to-motovun" element={<ZagrebToMotovun />} />
    <Route path="zagreb-to-belgrade" element={<ZagrebToBelgrade />} />
    <Route path="zagreb-to-milan" element={<ZagrebToMilan />} />
    <Route path="zagreb-to-venice" element={<ZagrebToVenice />} />
    <Route path="zagreb-to-tisno" element={<ZagrebToTisno />} />
    <Route path="zagreb-to-portoroz" element={<ZagrebToPortoroz />} />
    <Route path="zagreb-to-budapest" element={<ZagrebToBudapest />} />
    <Route path="zagreb-to-rome" element={<ZagrebToRome />} />
    <Route path="zagreb-to-makarska" element={<ZagrebToMakarska />} />
    <Route path="zagreb-to-celje" element={<ZagrebToCelje />} />
    <Route path="zagreb-to-krakow" element={<ZagrebToKrakow />} />
    <Route path="zagreb-to-bihac" element={<ZagrebToBihac />} />
    <Route path="zagreb-to-sarajevo" element={<ZagrebToSarajevo />} />
    <Route path="zagreb-to-trieste" element={<ZagrebToTrieste />} />
    <Route path="zagreb-to-ljubljana" element={<ZagrebToLjubljana />} />
    <Route path="zagreb-to-vienna" element={<ZagrebToVienna />} />
    <Route path="zagreb-to-graz" element={<ZagrebToGraz />} />
    <Route path="zagreb-to-munich" element={<ZagrebToMunich />} />
    <Route path="zagreb-to-prague" element={<ZagrebToPrague />} />
    <Route path="zagreb-to-trogir" element={<ZagrebToTrogir />} />
    <Route path="zagreb-to-passau" element={<ZagrebToPassau />} />
    <Route path="transfers/zagreb-to-zadar" element={<ZagrebToZadar />} />
    <Route path="transfers/zagreb-to-rijeka" element={<ZagrebToRijeka />} />
    <Route path="transfers/zagreb-to-pula" element={<ZagrebToPula />} />
    <Route path="transfers/zagreb-to-osijek" element={<ZagrebToOsijek />} />
    <Route path="transfers/zagreb-to-rovinj" element={<ZagrebToRovinj />} />
    <Route path="transfers/zagreb-to-opatija" element={<ZagrebToOpatija />} />
    <Route path="transfers/zagreb-to-varazdin" element={<ZagrebToVarazdin />} />
    <Route path="transfers/zagreb-to-slavonski-brod" element={<ZagrebToSlavonskiBrod />} />
    <Route path="transfers/zagreb-to-sisak" element={<ZagrebToSisak />} />
    <Route path="transfers/zagreb-to-karlovac" element={<ZagrebToKarlovac />} />
    <Route path="transfers/zagreb-to-novalja" element={<ZagrebToNovalja />} />
    <Route path="transfers/zagreb-to-murter" element={<ZagrebToMurter />} />
    <Route path="zagreb-to-zadar" element={<ZagrebToZadar />} />
    <Route path="zagreb-to-rijeka" element={<ZagrebToRijeka />} />
    <Route path="zagreb-to-pula" element={<ZagrebToPula />} />
    <Route path="zagreb-to-osijek" element={<ZagrebToOsijek />} />
    <Route path="zagreb-to-rovinj" element={<ZagrebToRovinj />} />
    <Route path="zagreb-to-opatija" element={<ZagrebToOpatija />} />
    <Route path="zagreb-to-varazdin" element={<ZagrebToVarazdin />} />
    <Route path="zagreb-to-slavonski-brod" element={<ZagrebToSlavonskiBrod />} />
    <Route path="zagreb-to-sisak" element={<ZagrebToSisak />} />
    <Route path="zagreb-to-karlovac" element={<ZagrebToKarlovac />} />
    <Route path="zagreb-to-novalja" element={<ZagrebToNovalja />} />
    <Route path="zagreb-to-murter" element={<ZagrebToMurter />} />
    <Route path="transfers/vodice-to-zagreb" element={<VodiceToZagreb />} />
    <Route path="transfers/bovec-to-zagreb" element={<BovecToZagreb />} />
    <Route path="transfers/kranj-to-zagreb" element={<KranjToZagreb />} />
    <Route path="transfers/pecs-to-zagreb" element={<PecsToZagreb />} />
    <Route path="transfers/innsbruck-to-zagreb" element={<InnsbruckToZagreb />} />
    <Route path="transfers/umag-to-zagreb" element={<UmagToZagreb />} />
    <Route path="transfers/klagenfurt-to-zagreb" element={<KlagenfurtToZagreb />} />
    <Route path="transfers/villach-to-zagreb" element={<VillachToZagreb />} />
    <Route path="transfers/crikvenica-to-zagreb" element={<CrikvenicaToZagreb />} />
    <Route path="transfers/senj-to-zagreb" element={<SenjToZagreb />} />
    <Route path="transfers/biograd-to-zagreb" element={<BiogradToZagreb />} />
    <Route path="transfers/groznjan-to-zagreb" element={<GroznjanToZagreb />} />
    <Route path="transfers/sibenik-to-zagreb" element={<SibenikToZagreb />} />
    <Route path="transfers/stuttgart-to-zagreb" element={<StuttgartToZagreb />} />
    <Route path="transfers/cesky-krumlov-to-zagreb" element={<CeskyKrumlovToZagreb />} />
    <Route path="transfers/belgrade-airport-to-zagreb" element={<BelgradeAirportToZagreb />} />
    <Route path="transfers/ferrara-to-zagreb" element={<FerraraToZagreb />} />
    <Route path="transfers/milan-linate-to-zagreb" element={<MilanLinateToZagreb />} />
    <Route path="transfers/pisa-to-zagreb" element={<PisaToZagreb />} />
    <Route path="transfers/balatonfured-to-zagreb" element={<BalatonfuredToZagreb />} />
    <Route path="transfers/split-to-hvar" element={<SplitToHvar />} />
    <Route path="transfers/split-to-korcula" element={<SplitToKorcula />} />
    <Route path="transfers/split-to-makarska" element={<SplitToMakarska />} />
    <Route path="transfers/split-to-trogir" element={<SplitToTrogir />} />
    <Route path="transfers/split-to-sibenik" element={<SplitToSibenik />} />
    <Route path="transfers/split-to-bol" element={<SplitToBol />} />
    <Route path="transfers/split-to-omis" element={<SplitToOmis />} />
    <Route path="transfers/split-to-primosten" element={<SplitToPrimosten />} />
    <Route path="transfers/zadar-to-novalja" element={<ZadarToNovalja />} />
    <Route path="transfers/zadar-to-pag" element={<ZadarToPag />} />
    <Route path="transfers/zadar-to-biograd" element={<ZadarToBiograd />} />
    <Route path="transfers/zadar-to-nin" element={<ZadarToNin />} />
    <Route path="transfers/dubrovnik-to-cavtat" element={<DubrovnikToCavtat />} />
    <Route path="transfers/zagreb-to-porec" element={<ZagrebToPorec />} />
    <Route path="vodice-to-zagreb" element={<VodiceToZagreb />} />
    <Route path="bovec-to-zagreb" element={<BovecToZagreb />} />
    <Route path="kranj-to-zagreb" element={<KranjToZagreb />} />
    <Route path="pecs-to-zagreb" element={<PecsToZagreb />} />
    <Route path="innsbruck-to-zagreb" element={<InnsbruckToZagreb />} />
    <Route path="umag-to-zagreb" element={<UmagToZagreb />} />
    <Route path="klagenfurt-to-zagreb" element={<KlagenfurtToZagreb />} />
    <Route path="villach-to-zagreb" element={<VillachToZagreb />} />
    <Route path="crikvenica-to-zagreb" element={<CrikvenicaToZagreb />} />
    <Route path="senj-to-zagreb" element={<SenjToZagreb />} />
    <Route path="biograd-to-zagreb" element={<BiogradToZagreb />} />
    <Route path="groznjan-to-zagreb" element={<GroznjanToZagreb />} />
    <Route path="sibenik-to-zagreb" element={<SibenikToZagreb />} />
    <Route path="stuttgart-to-zagreb" element={<StuttgartToZagreb />} />
    <Route path="cesky-krumlov-to-zagreb" element={<CeskyKrumlovToZagreb />} />
    <Route path="belgrade-airport-to-zagreb" element={<BelgradeAirportToZagreb />} />
    <Route path="ferrara-to-zagreb" element={<FerraraToZagreb />} />
    <Route path="milan-linate-to-zagreb" element={<MilanLinateToZagreb />} />
    <Route path="pisa-to-zagreb" element={<PisaToZagreb />} />
    <Route path="balatonfured-to-zagreb" element={<BalatonfuredToZagreb />} />
    <Route path="services" element={<Services />} />
    <Route path="coach-rental" element={<CoachRental />} />
    <Route path="minibus-rental" element={<MinibusRental />} />
    <Route path="van-rental" element={<VanRental />} />
    <Route path="chauffeur-service" element={<ChauffeurService />} />
    <Route path="chauffeur-service-zagreb" element={<ChauffeurServiceZagreb />} />
    <Route path="chauffeur-service-dubrovnik" element={<ChauffeurServiceDubrovnik />} />
    <Route path="limo-service-zagreb" element={<LimoServiceZagreb />} />
    <Route path="limo-service-dubrovnik" element={<LimoServiceDubrovnik />} />
    <Route path="limo-hire-for-wedding" element={<LimoHireForWedding />} />
    <Route path="transfers/zagreb" element={<ZagrebTransfers />} />
    <Route path="transfers/dubrovnik" element={<DubrovnikTransfers />} />
    <Route path="airport-transfers/zagreb" element={<ZagrebAirportTransfers />} />
    <Route path="booking" element={<BookingCheckout />} />
    <Route path="rezervacija" element={<BookingCheckout />} />
    <Route path="buchung" element={<BookingCheckout />} />
    <Route path="prenotazione" element={<BookingCheckout />} />
    <Route path="reservation" element={<BookingCheckout />} />
    <Route path="reservation" element={<Reservation />} />
    <Route path="checkout" element={<Checkout />} />
    <Route path="thank-you" element={<ThankYou />} />
    <Route path="get-quote" element={<GetQuote />} />
    <Route path="features/professional-drivers" element={<ProfessionalDrivers />} />
    <Route path="features/safety-first" element={<SafetyFirst />} />
    <Route path="features/24-7-service" element={<TwentyFourSeven />} />
    <Route path="features/fixed-prices" element={<FixedPrices />} />
    <Route path="about" element={<AboutUs />} />
    <Route path="o-nama" element={<AboutUs />} />
    <Route path="ueber-uns" element={<AboutUs />} />
    <Route path="chi-siamo" element={<AboutUs />} />
    <Route path="a-propos" element={<AboutUs />} />
    <Route path="contact" element={<ContactUs />} />
    <Route path="kontakt" element={<ContactUs />} />
    <Route path="contatto" element={<ContactUs />} />
    <Route path="blog" element={<Blog />} />
    <Route path="blog/beaches-in-dalmatia" element={<BeachesInDalmatia />} />
    <Route path="blog/plitvice-lakes-guide" element={<PlitviceLakesGuide />} />
    <Route path="blog/hidden-gems-istria" element={<HiddenGemsIstria />} />
    <Route path="blog/summer-transfer-tips" element={<SummerTransferTips />} />
    <Route path="blog/croatian-wine-routes" element={<CroatianWineRoutes />} />
    <Route path="privacy-policy" element={<PrivacyPolicy />} />
    <Route path="terms-of-service" element={<TermsOfService />} />
    <Route path="menu" element={<MobileMenu />} />
    <Route path="zagreb-to-split-transfer" element={<ZagrebToSplit />} />
    <Route path="zagreb-to-dubrovnik-transfer" element={<ZagrebToDubrovnik />} />
    <Route path="zagreb-to-plitvice-lakes-transfer" element={<ZagrebToPlitvice />} />
    <Route path="zagreb-to-motovun-transfer" element={<ZagrebToMotovun />} />
    <Route path="zagreb-to-milan-transfer" element={<ZagrebToMilan />} />
    <Route path="zagreb-to-sarajevo-transfer" element={<ZagrebToSarajevo />} />
    <Route path="zagreb-to-budapest-transfer" element={<ZagrebToBudapest />} />
    <Route path="zagreb-to-venice-transfer" element={<ZagrebToVenice />} />
    <Route path="zagreb-to-trogir-transfer" element={<ZagrebToTrogir />} />
    <Route path="zagreb-to-rome-transfers" element={<ZagrebToRome />} />
    <Route path="zagreb-to-makarska-transfer" element={<ZagrebToMakarska />} />
    <Route path="zagreb-to-celje-transfer" element={<ZagrebToCelje />} />
    <Route path="zagreb-to-trieste-transfer" element={<ZagrebToTrieste />} />
    <Route path="zagreb-to-bihac-transfer" element={<ZagrebToBihac />} />
    <Route path="zagreb-to-passau-transfer" element={<ZagrebToPassau />} />
    <Route path="zagreb-to-klagenfurt-transfer" element={<KlagenfurtToZagreb />} />
    <Route path="zagreb-to-crikvenica-transfer" element={<CrikvenicaToZagreb />} />
    <Route path="zagreb-to-senj-transfer" element={<SenjToZagreb />} />
    <Route path="zagreb-to-biograd-na-moru-transfer" element={<BiogradToZagreb />} />
    <Route path="zagreb-to-sibenik-transfer" element={<SibenikToZagreb />} />
    <Route path="zagreb-to-stuttgart-transfer" element={<StuttgartToZagreb />} />
    <Route path="zagreb-to-umag-transfer" element={<UmagToZagreb />} />
    <Route path="zagreb-to-vodice-transfer" element={<VodiceToZagreb />} />
    <Route path="bus-rental-croatia" element={<CoachRental />} />
    <Route path="minibus-rental-croatia" element={<MinibusRental />} />
    <Route path="van-rental-croatia" element={<VanRental />} />
    <Route path="chauffeur-service-croatia" element={<ChauffeurService />} />
    <Route path="limo-hire-for-wedding" element={<LimoHireForWedding />} />
    <Route path="zagreb-airport-transfers" element={<ZagrebAirportTransfers />} />
    <Route path="all-transfer-destinations" element={<AllDestinations />} />
</>;

export const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<DefaultLanguageWrapper />}>
                {RouteList()}
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
