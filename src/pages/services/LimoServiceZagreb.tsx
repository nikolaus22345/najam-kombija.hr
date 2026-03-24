import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Wine, Star, Crown, Check, Music, Zap } from "lucide-react";

const LimoServiceZagreb = () => {
  const navigate = useNavigate();

  const occasions = [
    {
      icon: Wine,
      title: "Business Events",
      description: "Arrive in style at conferences, meetings, and corporate functions"
    },
    {
      icon: Star,
      title: "Special Celebrations",
      description: "Birthdays, anniversaries, and milestone celebrations"
    },
    {
      icon: Crown,
      title: "VIP Nights Out",
      description: "Premium transport for exclusive clubs, restaurants, and events"
    },
    {
      icon: Music,
      title: "Concert & Theatre",
      description: "Elegant arrival for cultural events and performances"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Seo />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/30 via-background to-primary/20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(246,195,68,0.2),transparent_70%)]" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <Sparkles className="w-24 h-24 text-primary mx-auto mb-6 animate-pulse" />
            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 bg-clip-text">
              Limo Service Zagreb
            </h1>
            <p className="text-2xl text-muted-foreground mb-4 font-light">
              Ultimate Luxury Limousine Experience
            </p>
            <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Make every journey extraordinary with our premium limousine service. Unparalleled luxury, professional chauffeurs, and unforgettable experiences in Zagreb.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg">
                <Zap className="mr-2 w-5 h-5" />
                Book Your Limo
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate("/contact")} className="border-2 border-primary text-primary hover:bg-primary/10 px-10 py-6 text-lg">
                Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Occasions Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Crown className="w-14 h-14 text-primary mx-auto mb-4" />
            <h2 className="text-5xl font-bold mb-6">Perfect For Every Occasion</h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              Celebrate life's special moments in absolute luxury
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {occasions.map((occasion, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-2xl transition-all hover:border-primary hover:scale-105 group">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-primary/30 group-hover:to-primary/10 transition-all">
                  <occasion.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{occasion.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{occasion.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Star className="w-14 h-14 text-primary mx-auto mb-4" />
              <h2 className="text-5xl font-bold mb-6">The Ultimate Luxury Experience</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Card className="p-10 space-y-8">
                  <div className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Stretch Limousines</h3>
                      <p className="text-muted-foreground">Premium Lincoln and Chrysler stretch limos with capacity up to 10 passengers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Luxury Amenities</h3>
                      <p className="text-muted-foreground">Premium sound system, LED lighting, bar service, privacy partition, and leather seating</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Red Carpet Service</h3>
                      <p className="text-muted-foreground">Professional chauffeur in formal attire, red carpet rollout, and door-to-door VIP treatment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Custom Packages</h3>
                      <p className="text-muted-foreground">Personalized decorations, champagne service, custom routes, and special requests</p>
                    </div>
                  </div>
                </Card>
              </div>
              
              <div className="space-y-6">
                <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20">
                  <Sparkles className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">Premium Party Experience</h3>
                  <p className="text-muted-foreground mb-6">
                    Transform your celebration into an unforgettable event. Our limousines feature state-of-the-art entertainment systems, mood lighting, and luxurious interiors designed for celebration.
                  </p>
                  <Button className="w-full" size="lg">
                    Explore Packages
                  </Button>
                </Card>
                
                <Card className="p-8">
                  <Wine className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">Zagreb City Tours</h3>
                  <p className="text-muted-foreground mb-6">
                    Experience Zagreb's finest restaurants, clubs, and landmarks in luxury. Custom itineraries available for wine tours, sightseeing, and nightlife experiences.
                  </p>
                  <Button variant="outline" className="w-full" size="lg">
                    View Tours
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/20 via-primary/10 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(246,195,68,0.2),transparent_60%)]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Sparkles className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse" />
          <h2 className="text-5xl font-bold mb-6">Ready for the Ultimate Experience?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Book your luxury limousine today and make your special occasion truly extraordinary
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary/90 px-10 py-6 text-lg">
              Reserve Now
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/limo-hire-for-wedding")} className="px-10 py-6 text-lg">
              Wedding Limo Service
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-8">
            ⭐ Premium Service • Luxury Vehicles • Professional Chauffeurs • Custom Packages ⭐
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LimoServiceZagreb;

