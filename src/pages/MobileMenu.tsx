import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Languages, Home, Bus, Car, MapPin, Info, Mail, FileText, ChevronRight, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();

  const services = [
    { name: "Bus Rental", href: "/coach-rental" },
    { name: "Minibus Rental", href: "/minibus-rental" },
    { name: "Van Rental", href: "/van-rental" },
    { name: "Chauffeur Service", href: "/chauffeur-service" },
    { name: "Wedding Limo", href: "/limo-hire-for-wedding" },
  ];

  const transfers = [
    { name: "Zagreb Transfers", href: "/transfers/zagreb" },
    { name: "Dubrovnik Transfers", href: "/transfers/dubrovnik" },
    { name: "Zagreb Airport", href: "/airport-transfers/zagreb" },
    { name: "All Destinations", href: "/transfers/all-destinations" },
  ];

  const mainLinks = [
    { name: t.header.home, href: "/", icon: Home },
    { name: t.header.about, href: "/about", icon: Info },
    { name: "Blog", href: "/blog", icon: FileText },
    { name: t.header.contact, href: "/contact", icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary/10 border-b border-border p-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <svg 
              width="48" 
              height="48" 
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
          </Link>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate(-1)}
            className="text-foreground hover:text-primary"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Get Quote Button */}
      <div className="p-4 border-b border-border">
        <Link to="/get-quote">
          <Button variant="default" size="lg" className="w-full text-lg font-semibold">
            {t.header.getQuote}
          </Button>
        </Link>
      </div>

      {/* Language Selector */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-foreground">
            <Languages className="w-5 h-5" />
            <span className="font-medium">Language</span>
          </div>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-[120px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-background border border-border z-50">
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="hr">Hrvatski</SelectItem>
              <SelectItem value="de">Deutsch</SelectItem>
              <SelectItem value="it">Italiano</SelectItem>
              <SelectItem value="fr">Français</SelectItem>
              <SelectItem value="ko">한국어</SelectItem>
              <SelectItem value="zh">中文</SelectItem>
              <SelectItem value="ja">日本語</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Main Navigation Links */}
      <div className="p-4 border-b border-border">
        {mainLinks.map((link) => (
          <Link 
            key={link.href}
            to={link.href} 
            className="flex items-center justify-between py-4 text-foreground hover:text-primary transition-colors border-b border-border/50 last:border-0"
          >
            <div className="flex items-center gap-3">
              <link.icon className="w-5 h-5 text-primary" />
              <span className="font-medium">{link.name}</span>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </Link>
        ))}
      </div>

      {/* Services Section */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-2 mb-4">
          <Bus className="w-5 h-5 text-primary" />
          <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Services</h2>
        </div>
        <div className="grid grid-cols-1 gap-2">
          {services.map((service) => (
            <Link 
              key={service.href}
              to={service.href} 
              className="flex items-center justify-between py-3 px-4 bg-muted/30 rounded-lg text-foreground hover:bg-muted/50 hover:text-primary transition-colors"
            >
              <span>{service.name}</span>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </Link>
          ))}
        </div>
      </div>

      {/* Transfers Section */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-5 h-5 text-primary" />
          <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Transfers</h2>
        </div>
        <div className="grid grid-cols-1 gap-2">
          {transfers.map((transfer) => (
            <Link 
              key={transfer.href}
              to={transfer.href} 
              className="flex items-center justify-between py-3 px-4 bg-muted/30 rounded-lg text-foreground hover:bg-muted/50 hover:text-primary transition-colors"
            >
              <span>{transfer.name}</span>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 text-center text-muted-foreground text-sm">
        <p>© 2024 Zagreb Transfers. All rights reserved.</p>
      </div>
    </div>
  );
};

export default MobileMenu;
