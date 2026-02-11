import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Sparkles, Camera, Crown, Check, Gift, Music, Flower2 } from "lucide-react";

const LimoHireForWedding = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Heart,
      title: "Bride & Groom Transport",
      description: "Elegant arrival and departure for the happy couple"
    },
    {
      icon: Crown,
      title: "Bridal Party Service",
      description: "Spacious limousines for bridesmaids and groomsmen"
    },
    {
      icon: Camera,
      title: "Photo Opportunities",
      description: "Scenic stops for stunning wedding photography"
    },
    {
      icon: Gift,
      title: "Special Touches",
      description: "Red carpet, champagne, and custom decorations"
    }
  ];

  const packages = [
    {
      name: "Classic Wedding Package",
      hours: "4 Hours",
      features: [
        "Stretch limousine for up to 8 passengers",
        "Red carpet service",
        "Champagne for the couple",
        "Ribbon & flower decorations",
        "Professional chauffeur in formal attire",
        "Pick-up and drop-off at 2 locations"
      ]
    },
    {
      name: "Premium Wedding Package",
      hours: "6 Hours",
      features: [
        "Luxury stretch limousine for up to 10 passengers",
        "VIP red carpet treatment",
        "Premium champagne & refreshments",
        "Custom decorations to match wedding theme",
        "Multiple photo stop locations",
        "Professional chauffeur & assistant",
        "Flexible pickup/drop-off schedule"
      ],
      highlighted: true
    },
    {
      name: "Ultimate Wedding Package",
      hours: "Full Day",
      features: [
        "Multiple luxury vehicles for bridal party",
        "Full VIP service experience",
        "Unlimited champagne & catering",
        "Bespoke decorations & styling",
        "Photographer coordination",
        "Full day availability",
        "Wedding planner liaison",
        "Guest transportation arrangements"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-pink-500/10 via-primary/20 to-background overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(246,195,68,0.15),transparent_60%)]" />
          <Flower2 className="absolute top-20 left-10 w-32 h-32 text-primary/20 animate-pulse" />
          <Flower2 className="absolute bottom-20 right-10 w-40 h-40 text-primary/10 animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <Heart className="w-24 h-24 text-primary mx-auto mb-6 fill-primary/20" />
            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6">
              Limo Hire for Wedding
            </h1>
            <p className="text-2xl text-muted-foreground mb-4 font-light">
              Make Your Special Day Truly Unforgettable
            </p>
            <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Arrive in style on your wedding day with our luxury limousine service. From elegant stretch limos to bespoke packages, we ensure every detail is perfect for your celebration.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg">
                <Sparkles className="mr-2 w-5 h-5" />
                Book Wedding Limo
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate("/contact")} className="border-2 border-primary text-primary hover:bg-primary/10 px-10 py-6 text-lg">
                Custom Package
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Sparkles className="w-14 h-14 text-primary mx-auto mb-4" />
            <h2 className="text-5xl font-bold mb-6">Wedding Limousine Services</h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              Everything you need for elegant wedding transportation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-2xl transition-all hover:border-primary hover:scale-105 group">
                <div className="bg-gradient-to-br from-primary/20 to-pink-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-primary/30 group-hover:to-pink-500/20 transition-all">
                  <service.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Crown className="w-14 h-14 text-primary mx-auto mb-4" />
            <h2 className="text-5xl font-bold mb-6">Wedding Packages</h2>
            <p className="text-muted-foreground text-xl">
              Choose the perfect package for your special day
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`p-8 hover:shadow-2xl transition-all ${
                  pkg.highlighted 
                    ? 'border-2 border-primary scale-105 bg-gradient-to-br from-primary/5 to-background' 
                    : 'hover:border-primary'
                }`}
              >
                {pkg.highlighted && (
                  <div className="bg-primary text-primary-foreground text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-primary font-semibold text-lg mb-6">{pkg.hours}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full" 
                  size="lg"
                  variant={pkg.highlighted ? "default" : "outline"}
                >
                  {pkg.highlighted ? "Select Package" : "View Details"}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-16">Why Choose Our Wedding Limo Service</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <Heart className="w-12 h-12 text-primary mb-4 fill-primary/20" />
                <h3 className="text-2xl font-bold mb-3">Perfect for Your Big Day</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We understand how important your wedding day is. Our team works closely with you to ensure every detail is perfect, from decorations matching your theme to coordinating with your wedding planner.
                </p>
              </Card>
              <Card className="p-8">
                <Crown className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">Luxury Fleet</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Immaculate stretch limousines with elegant interiors, perfect for wedding photos. Climate-controlled comfort, premium sound systems, and luxury amenities throughout.
                </p>
              </Card>
              <Card className="p-8">
                <Camera className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">Photo-Ready Service</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Red carpet rollout, ribbon decorations, and strategic photo stops at scenic locations. Our chauffeurs coordinate with photographers for perfect timing.
                </p>
              </Card>
              <Card className="p-8">
                <Music className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">Stress-Free Experience</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Professional chauffeurs in formal attire ensure punctual, smooth service. We handle all transportation logistics so you can focus on enjoying your special day.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-pink-500/10 via-primary/15 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(246,195,68,0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Heart className="w-16 h-16 text-primary mx-auto mb-6 fill-primary/20" />
          <h2 className="text-5xl font-bold mb-6">Ready to Book Your Wedding Limo?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Let us make your wedding day transportation as special as your celebration. Contact us for a personalized quote.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary/90 px-10 py-6 text-lg">
              Book Now
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/contact")} className="px-10 py-6 text-lg">
              Request Custom Quote
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-8">
            ⭐ Luxury Limousines • Professional Service • Unforgettable Memories ⭐
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LimoHireForWedding;
