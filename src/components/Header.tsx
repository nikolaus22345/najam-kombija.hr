import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Languages, ChevronDown, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
              <span className="text-xl font-bold text-primary">ZAGREB</span>
              <span className="text-sm text-foreground tracking-wider">TRANSFERS</span>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-[70px] h-9">
                <Languages className="w-4 h-4" />
              </SelectTrigger>
              <SelectContent className="bg-background border border-border z-50">
                <SelectItem value="en">EN</SelectItem>
                <SelectItem value="hr">HR</SelectItem>
                <SelectItem value="de">DE</SelectItem>
                <SelectItem value="it">IT</SelectItem>
                <SelectItem value="fr">FR</SelectItem>
                <SelectItem value="ko">KO</SelectItem>
                <SelectItem value="zh">ZH</SelectItem>
                <SelectItem value="ja">JA</SelectItem>
              </SelectContent>
            </Select>

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
                    {t.header.home}
                  </Link>

                  <div className="border-b border-border pb-2">
                    <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase">SERVICES</p>
                    <Link
                      to={getLink('/coach-rental')}
                      className="text-sm text-foreground hover:text-primary transition-colors block py-2 uppercase"
                      onClick={() => setOpen(false)}
                    >
                      Bus Rental
                    </Link>
                    <Link
                      to={getLink('/minibus-rental')}
                      className="text-sm text-foreground hover:text-primary transition-colors block py-2 uppercase"
                      onClick={() => setOpen(false)}
                    >
                      Minibus Rental
                    </Link>
                    <Link
                      to={getLink('/van-rental')}
                      className="text-sm text-foreground hover:text-primary transition-colors block py-2 uppercase"
                      onClick={() => setOpen(false)}
                    >
                      Van Rental
                    </Link>
                    <Link
                      to={getLink('/chauffeur-service')}
                      className="text-sm text-foreground hover:text-primary transition-colors block py-2 uppercase"
                      onClick={() => setOpen(false)}
                    >
                      Chauffeur Service
                    </Link>
                    <Link
                      to={getLink('/limo-hire-for-wedding')}
                      className="text-sm text-foreground hover:text-primary transition-colors block py-2 uppercase"
                      onClick={() => setOpen(false)}
                    >
                      Wedding Limo
                    </Link>
                  </div>

                  <div className="border-b border-border pb-2 pt-4">
                    <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase">TRANSFERS</p>
                    <Link
                      to={getLink('/transfers/zagreb')}
                      className="text-sm text-foreground hover:text-primary transition-colors block py-2 uppercase"
                      onClick={() => setOpen(false)}
                    >
                      Zagreb Transfers
                    </Link>

                    <Link
                      to={getLink('/airport-transfers/zagreb')}
                      className="text-sm text-foreground hover:text-primary transition-colors block py-2 uppercase"
                      onClick={() => setOpen(false)}
                    >
                      Zagreb Airport
                    </Link>
                    <Link
                      to={getLink('/transfers/all-destinations')}
                      className="text-sm text-foreground hover:text-primary transition-colors block py-2 uppercase"
                      onClick={() => setOpen(false)}
                    >
                      All Destinations
                    </Link>
                  </div>

                  <div className="border-b border-border pb-2 pt-4">
                    <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase">WHY CHOOSE US</p>
                    <Link
                      to={getLink('/features/safety-first')}
                      className="text-sm text-foreground hover:text-primary transition-colors block py-2 uppercase"
                      onClick={() => setOpen(false)}
                    >
                      {t.features.licensed.title}
                    </Link>
                    <Link
                      to={getLink('/features/professional-drivers')}
                      className="text-sm text-foreground hover:text-primary transition-colors block py-2 uppercase"
                      onClick={() => setOpen(false)}
                    >
                      {t.features.drivers.title}
                    </Link>
                    <Link
                      to={getLink('/features/24-7-service')}
                      className="text-sm text-foreground hover:text-primary transition-colors block py-2 uppercase"
                      onClick={() => setOpen(false)}
                    >
                      {t.features.availability.title}
                    </Link>
                    <Link
                      to={getLink('/features/fixed-prices')}
                      className="text-sm text-foreground hover:text-primary transition-colors block py-2 uppercase"
                      onClick={() => setOpen(false)}
                    >
                      {t.features.fixedPrices.title}
                    </Link>
                  </div>

                  <Link
                    to={getLink('/about')}
                    className="text-base font-medium text-foreground hover:text-primary transition-colors py-2 pt-4 uppercase"
                    onClick={() => setOpen(false)}
                  >
                    {t.header.about}
                  </Link>
                  <Link
                    to={getLink('/blog')}
                    className="text-base font-medium text-foreground hover:text-primary transition-colors py-2 uppercase"
                    onClick={() => setOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    to={getLink('/contact')}
                    className="text-base font-medium text-foreground hover:text-primary transition-colors py-2 uppercase"
                    onClick={() => setOpen(false)}
                  >
                    {t.header.contact}
                  </Link>
                  <Link to={getLink('/get-quote')} onClick={() => setOpen(false)}>
                    <Button variant="default" size="sm" className="mt-4 w-full uppercase">
                      {t.header.getQuote}
                    </Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to={getLink('/')} className="text-sm font-medium text-foreground hover:text-primary transition-colors uppercase">
              {t.header.home}
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1 uppercase">
                  Services
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-border z-[100]">
                <DropdownMenuItem asChild>
                  <Link to={getLink('/coach-rental')} className="cursor-pointer uppercase">Bus Rental</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to={getLink('/minibus-rental')} className="cursor-pointer uppercase">Minibus Rental</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to={getLink('/van-rental')} className="cursor-pointer uppercase">Van Rental</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to={getLink('/chauffeur-service')} className="cursor-pointer uppercase">Chauffeur Service</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to={getLink('/limo-hire-for-wedding')} className="cursor-pointer uppercase">Wedding Limo</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1 uppercase">
                  {t.header.transfers}
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-border z-[100]">
                <DropdownMenuItem asChild>
                  <Link to={getLink('/transfers/zagreb')} className="cursor-pointer uppercase">Zagreb Transfers</Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link to={getLink('/airport-transfers/zagreb')} className="cursor-pointer uppercase">Zagreb Airport</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to={getLink('/transfers/all-destinations')} className="cursor-pointer uppercase">All Destinations</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1 uppercase">
                  Why Us
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-border z-[100]">
                <DropdownMenuItem asChild>
                  <Link to={getLink('/features/safety-first')} className="cursor-pointer uppercase">{t.features.licensed.title}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to={getLink('/features/professional-drivers')} className="cursor-pointer uppercase">{t.features.drivers.title}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to={getLink('/features/24-7-service')} className="cursor-pointer uppercase">{t.features.availability.title}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to={getLink('/features/fixed-prices')} className="cursor-pointer uppercase">{t.features.fixedPrices.title}</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to={getLink('/about')} className="text-sm font-medium text-foreground hover:text-primary transition-colors uppercase">
              {t.header.about}
            </Link>
            <Link to={getLink('/blog')} className="text-sm font-medium text-foreground hover:text-primary transition-colors uppercase">
              Blog
            </Link>
            <Link to={getLink('/contact')} className="text-sm font-medium text-foreground hover:text-primary transition-colors uppercase">
              {t.header.contact}
            </Link>
            <Link to={getLink('/get-quote')}>
              <Button variant="default" size="sm" className="ml-4 uppercase">
                {t.header.getQuote}
              </Button>
            </Link>

            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-[100px] h-9 uppercase">
                <Languages className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-background border border-border z-50">
                <SelectItem value="en">EN</SelectItem>
                <SelectItem value="hr">HR</SelectItem>
                <SelectItem value="de">DE</SelectItem>
                <SelectItem value="it">IT</SelectItem>
                <SelectItem value="fr">FR</SelectItem>
                <SelectItem value="ko">KO</SelectItem>
                <SelectItem value="zh">ZH</SelectItem>
                <SelectItem value="ja">JA</SelectItem>
              </SelectContent>
            </Select>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
