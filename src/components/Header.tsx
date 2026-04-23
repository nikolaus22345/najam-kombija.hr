import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronDown, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const { language, setLanguage, getLink, t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <svg
              width="48"
              height="48"
              viewBox="0 0 100 100"
              className="h-12 w-12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                points="25,20 85,20 50,52 85,52 15,80 50,48 25,48"
                fill="#F6C344"
              />
            </svg>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary">NAJAM</span>
              <span className="text-sm text-foreground tracking-wider">KOMBIJA</span>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-background">
                <SheetHeader>
                  <SheetTitle className="text-primary uppercase">Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  <Link
                    to={getLink('/')}
                    className="text-base font-medium text-foreground hover:text-primary transition-colors py-2 uppercase"
                    onClick={() => setOpen(false)}
                  >
                    {t.header?.home || (language === 'en' ? 'HOME' : (language === 'de' ? 'STARTSEITE' : 'POČETNA'))}
                  </Link>

                  <div className="border-b border-border pb-2 pt-2">
                    <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase">{language === 'en' ? 'VEHICLE CATEGORIES' : (language === 'de' ? 'FAHRZEUGKATEGORIEN' : 'KATEGORIJE VOZILA')}</p>
                    <Link
                      to={getLink('/kategorije/putnicki-kombi')}
                      className="text-sm text-foreground hover:text-primary transition-colors block py-2 uppercase pl-2"
                      onClick={() => setOpen(false)}
                    >
                      {language === 'en' ? 'PASSENGER VANS' : (language === 'de' ? 'KLEINBUSSE' : 'PUTNIČKA KOMBI VOZILA')}
                    </Link>
                    <Link
                      to={getLink('/kategorije/teretni-kombi')}
                      className="text-sm text-foreground hover:text-primary transition-colors block py-2 uppercase pl-2"
                      onClick={() => setOpen(false)}
                    >
                      {language === 'en' ? 'CARGO VANS' : (language === 'de' ? 'TRANSPORTER' : 'TERETNA KOMBI VOZILA')}
                    </Link>
                    <Link
                      to={getLink('/kategorije/mala-dostavna-vozila')}
                      className="text-sm text-foreground hover:text-primary transition-colors block py-2 uppercase pl-2"
                      onClick={() => setOpen(false)}
                    >
                      {language === 'en' ? 'SMALL DELIVERY VANS' : (language === 'de' ? 'KLEINE LIEFERWAGEN' : 'MALA DOSTAVNA VOZILA')}
                    </Link>
                    <Link
                      to={getLink('/kategorije/vozilo-za-5-osoba-n1')}
                      className="text-sm text-foreground hover:text-primary transition-colors block py-2 uppercase pl-2"
                      onClick={() => setOpen(false)}
                    >
                      {language === 'en' ? 'N1 VEHICLES 5 SEATS' : (language === 'de' ? 'N1 FAHRZEUGE 5 SITZE' : 'VOZILA ZA 5 OSOBA N1')}
                    </Link>
                    <Link
                      to={getLink('/kategorije/najam-kombija-s-vozacem')}
                      className="text-sm text-foreground hover:text-primary transition-colors block py-2 uppercase pl-2"
                      onClick={() => setOpen(false)}
                    >
                      {language === 'en' ? 'VAN RENTAL WITH DRIVER' : (language === 'de' ? 'KLEINBUS MIETEN MIT FAHRER' : 'NAJAM KOMBIJA S VOZAČEM')}
                    </Link>
                  </div>

                  <Link
                    to={getLink('/contact')}
                    className="text-base font-medium text-foreground hover:text-primary transition-colors py-2 uppercase"
                    onClick={() => setOpen(false)}
                  >
                    {t.header?.contact || (language === 'en' ? 'CONTACT' : (language === 'de' ? 'KONTAKT' : 'KONTAKT'))}
                  </Link>
                  <Link to={getLink('/#booking')} onClick={() => setOpen(false)}>
                    <Button variant="default" size="sm" className="mt-4 w-full uppercase">
                      {t.header?.getQuote || (language === 'en' ? 'GET A QUOTE' : (language === 'de' ? 'ANGEBOT ANFORDERN' : 'ZATRAŽITE PONUDU'))}
                    </Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to={getLink('/')} className="text-sm font-medium text-foreground hover:text-primary transition-colors uppercase">
              {t.header?.home || (language === 'en' ? 'HOME' : (language === 'de' ? 'STARTSEITE' : 'POČETNA'))}
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1 uppercase">
                  {language === 'en' ? 'VEHICLE CATEGORIES' : (language === 'de' ? 'FAHRZEUGKATEGORIEN' : 'KATEGORIJE VOZILA')}
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-border z-[100]">
                <DropdownMenuItem asChild>
                  <Link to={getLink('/kategorije/putnicki-kombi')} className="cursor-pointer uppercase">{language === 'en' ? 'PASSENGER VANS' : (language === 'de' ? 'KLEINBUSSE' : 'PUTNIČKA KOMBI VOZILA')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to={getLink('/kategorije/teretni-kombi')} className="cursor-pointer uppercase">{language === 'en' ? 'CARGO VANS' : (language === 'de' ? 'TRANSPORTER' : 'TERETNA KOMBI VOZILA')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to={getLink('/kategorije/mala-dostavna-vozila')} className="cursor-pointer uppercase">{language === 'en' ? 'SMALL DELIVERY VANS' : (language === 'de' ? 'KLEINE LIEFERWAGEN' : 'MALA DOSTAVNA VOZILA')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to={getLink('/kategorije/vozilo-za-5-osoba-n1')} className="cursor-pointer uppercase">{language === 'en' ? 'N1 VEHICLES 5 SEATS' : (language === 'de' ? 'N1 FAHRZEUGE 5 SITZE' : 'VOZILA ZA 5 OSOBA N1')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to={getLink('/kategorije/najam-kombija-s-vozacem')} className="cursor-pointer uppercase">{language === 'en' ? 'VAN RENTAL WITH DRIVER' : (language === 'de' ? 'KLEINBUS MIETEN MIT FAHRER' : 'NAJAM KOMBIJA S VOZAČEM')}</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to={getLink('/contact')} className="text-sm font-medium text-foreground hover:text-primary transition-colors uppercase">
              {t.header?.contact || (language === 'en' ? 'CONTACT' : (language === 'de' ? 'KONTAKT' : 'KONTAKT'))}
            </Link>
            

          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
