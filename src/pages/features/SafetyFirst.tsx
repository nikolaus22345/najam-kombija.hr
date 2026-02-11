import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Award, CheckCircle, FileCheck, CarFront, Users } from "lucide-react";

const SafetyFirst = () => {
  const safetyFeatures = [
    {
      icon: Shield,
      title: "Fully Licensed Drivers",
      description: "All our drivers hold valid professional driving licenses and undergo rigorous background checks.",
    },
    {
      icon: Award,
      title: "Comprehensive Insurance",
      description: "Every vehicle is covered with full insurance protection for complete peace of mind.",
    },
    {
      icon: FileCheck,
      title: "Regular Inspections",
      description: "Our fleet undergoes regular safety inspections and maintenance to ensure peak performance.",
    },
    {
      icon: CarFront,
      title: "Modern Fleet",
      description: "All vehicles are equipped with the latest safety features and technology.",
    },
    {
      icon: Users,
      title: "Trained Professionals",
      description: "Our drivers receive ongoing training in defensive driving and customer service.",
    },
  ];

  const certifications = [
    "EU Transport License",
    "Croatian Chamber of Commerce Certified",
    "ISO 9001 Quality Management",
    "Full Liability Insurance Coverage",
    "Vehicle Safety Certificates",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background to-card py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Your Safety is Our Priority
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Fully licensed, insured, and committed to providing the safest transfer experience in Croatia.
              </p>
              <Link to="/get-quote">
                <Button size="lg" className="text-lg px-8 py-6">
                  Book Safe Transfer Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Safety Features Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Comprehensive Safety Standards
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We exceed industry standards to ensure your journey is safe and secure.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {safetyFeatures.map((feature, index) => (
                <div key={index} className="p-8 rounded-2xl bg-card hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Licensed & Certified
                </h2>
                <p className="text-lg text-muted-foreground">
                  Our credentials speak for themselves.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 p-6 rounded-xl bg-background">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <p className="text-foreground text-lg font-medium">{cert}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Insurance Details Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Full Insurance Protection
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg">
                  <p>
                    Every journey with Zagreb Transfers is fully insured with comprehensive coverage that protects both passengers and vehicles.
                  </p>
                  <p>
                    Our insurance policy includes:
                  </p>
                  <ul className="space-y-3 ml-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span>Passenger liability coverage up to €2,000,000</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span>Full vehicle damage coverage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span>Personal accident insurance for all passengers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span>Luggage and personal belongings protection</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Travel with Complete Peace of Mind
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Book your safe and secure transfer today with Croatia's most trusted transfer service.
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

export default SafetyFirst;
