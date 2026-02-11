import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Anchor, Star, Crown, Check, Heart, Camera } from "lucide-react";

const LimoServiceDubrovnik = () => {
  const navigate = useNavigate();

  const occasions = [
    {
      icon: Heart,
      title: "Romantic Occasions",
      description: "Perfect for proposals, anniversaries, and date nights"
    },
    {
      icon: Anchor,
      title: "Cruise Arrivals",
      description: "VIP limousine service for cruise passengers"
    },
    {
      icon: Camera,
      title: "Photo Tours",
      description: "Scenic coastal drives with photo stops"
    },
    {
      icon: Star,
      title: "Luxury Events",
      description: "Red carpet arrivals at exclusive venues"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/30 via-background to-primary/20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(246,195,68,0.2),transparent_70%)]" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <Sparkles className="w-24 h-24 text-primary mx-auto mb-6 animate-pulse" />
            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6">
              Limo Service Dubrovnik
            </h1>
            <p className="text-2xl text-muted-foreground mb-4 font-light">
              Luxury Limousines in the Pearl of the Adriatic
            </p>
            <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Experience Dubrovnik's breathtaking beauty in unmatched luxury. Premium limousine service for unforgettable moments along the stunning Dalmatian coast.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg">
                Book Your Experience
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate("/contact")} className="border-2 border-primary text-primary hover:bg-primary/10 px-10 py-6 text-lg">
                Get Quote
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
            <h2 className="text-5xl font-bold mb-6">Exceptional Occasions</h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              Create magical memories in Dubrovnik's most romantic setting
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

      {/* Experiences Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Star className="w-14 h-14 text-primary mx-auto mb-4" />
              <h2 className="text-5xl font-bold mb-6">Curated Luxury Experiences</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="p-10 space-y-8">
                <div className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Premium Limousines</h3>
                    <p className="text-muted-foreground">Immaculate stretch limousines with elegant interiors, perfect for 6-10 passengers</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Coastal Tours</h3>
                    <p className="text-muted-foreground">Scenic drives along the Adriatic with stops at viewpoints, beaches, and historic sites</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">VIP Treatment</h3>
                    <p className="text-muted-foreground">Champagne service, red carpet, professional photographer arrangements available</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Custom Itineraries</h3>
                    <p className="text-muted-foreground">Personalized routes including wine regions, islands, and Montenegro day trips</p>
                  </div>
                </div>
              </Card>
              
              <div className="space-y-6">
                <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20">
                  <Heart className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">Romantic Experiences</h3>
                  <p className="text-muted-foreground mb-6">
                    Make proposals, anniversaries, and special celebrations unforgettable. Sunset coastal drives, champagne service, and exclusive restaurant reservations included.
                  </p>
                  <Button className="w-full" size="lg">
                    Plan Your Experience
                  </Button>
                </Card>
                
                <Card className="p-8">
                  <Anchor className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">Port & Airport VIP</h3>
                  <p className="text-muted-foreground mb-6">
                    Exclusive meet & greet service for cruise passengers and private jet arrivals. Seamless luxury from port or airport to your destination.
                  </p>
                  <Button variant="outline" className="w-full" size="lg">
                    Book VIP Service
                  </Button>
                </Card>

                <Card className="p-8 bg-gradient-to-br from-primary/5 to-background">
                  <Camera className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">Old Town & Beyond</h3>
                  <p className="text-muted-foreground mb-6">
                    Explore UNESCO World Heritage sites, Game of Thrones filming locations, and hidden coastal gems in ultimate comfort.
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(246,195,68,0.2),transparent_60%)]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Sparkles className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse" />
          <h2 className="text-5xl font-bold mb-6">Create Unforgettable Memories</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Experience Dubrovnik's magic in absolute luxury with our premium limousine service
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary/90 px-10 py-6 text-lg">
              Book Now
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/limo-hire-for-wedding")} className="px-10 py-6 text-lg">
              Wedding Service
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-8">
            ⭐ Luxury Fleet • Professional Service • Bespoke Experiences ⭐
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LimoServiceDubrovnik;
