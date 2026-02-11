import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useLanguage();
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
                <span className="text-lg font-bold text-primary">ZAGREB</span>
                <span className="text-xs text-foreground tracking-wider">TRANSFERS</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h3 className="text-foreground font-bold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t.footer.home}
                </a>
              </li>
              <li>
                <a href="#transfers" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t.footer.transfers}
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t.footer.about}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t.footer.contact}
                </a>
              </li>
              <li>
                <a href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t.footer.blog}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-bold mb-4">{t.footer.services}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/coach-rental" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Bus Rental
                </Link>
              </li>
              <li>
                <Link to="/minibus-rental" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Minibus Rental
                </Link>
              </li>
              <li>
                <Link to="/van-rental" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Van Rental
                </Link>
              </li>
              <li>
                <Link to="/chauffeur-service" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Chauffeur Service
                </Link>
              </li>
              <li>
                <Link to="/limo-hire-for-wedding" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Wedding Limo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-bold mb-4">{t.footer.contactInfo}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                +385 97 601 9558
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                info@zagreb-transfers.hr
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                Zagreb, Croatia
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              {t.footer.copyright}
            </p>
            <div className="flex gap-6">
              <a href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t.footer.privacy}
              </a>
              <a href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t.footer.terms}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
