import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Star, Award, Shield } from "lucide-react";
import driver1 from "@/assets/driver-1.jpg";
import driver2 from "@/assets/driver-2.jpg";
import driver3 from "@/assets/driver-3.jpg";

const ProfessionalDrivers = () => {
  const drivers = [
    {
      image: driver1,
      name: "Ivan Marković",
      experience: "12+ years",
      languages: "English, German, Italian",
      rating: 4.9,
    },
    {
      image: driver2,
      name: "Ana Kovač",
      experience: "8+ years",
      languages: "English, French, Spanish",
      rating: 5.0,
    },
    {
      image: driver3,
      name: "Marko Petrović",
      experience: "10+ years",
      languages: "English, German, Croatian",
      rating: 4.8,
    },
  ];

  const benefits = [
    "Fully licensed and background-checked drivers",
    "Multilingual staff for international guests",
    "Expert local knowledge of Croatia",
    "Professional appearance and courteous service",
    "Trained in defensive driving techniques",
    "Available 24/7 for your convenience",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background to-card py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Meet Our Professional Drivers
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Experienced, multilingual, and dedicated to making your journey comfortable and safe.
              </p>
              <Link to="/get-quote">
                <Button size="lg" className="text-lg px-8 py-6">
                  Book Your Driver Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Our Drivers Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Why Choose Our Drivers?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Every driver in our team is carefully selected and trained to provide exceptional service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-6 rounded-xl bg-card">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Meet Some of Our Team
              </h2>
              <p className="text-lg text-muted-foreground">
                Professional, friendly, and always ready to serve you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {drivers.map((driver, index) => (
                <div key={index} className="bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={driver.image} 
                      alt={driver.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{driver.name}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <Star className="w-5 h-5 text-primary fill-primary" />
                      <span className="text-foreground font-semibold">{driver.rating}</span>
                      <span className="text-muted-foreground">rating</span>
                    </div>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-primary" />
                        <span>{driver.experience} experience</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-primary" />
                        <span>{driver.languages}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Ready to Experience Professional Service?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Book your transfer now and let our expert drivers take care of your journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/get-quote">
                  <Button size="lg" className="text-lg px-8 py-6 w-full sm:w-auto">
                    Get Your Quote
                  </Button>
                </Link>
                <Link to="/#contact">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 w-full sm:w-auto">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProfessionalDrivers;
