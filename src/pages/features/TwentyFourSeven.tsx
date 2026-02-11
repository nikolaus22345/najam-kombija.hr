import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, Phone, MessageSquare, MapPin, Plane, Moon } from "lucide-react";

const TwentyFourSeven = () => {
  const features = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Book transfers any time of day or night, 365 days a year.",
    },
    {
      icon: Plane,
      title: "Early & Late Flights",
      description: "No matter what time your flight lands or departs, we'll be there.",
    },
    {
      icon: Phone,
      title: "Instant Support",
      description: "Reach our customer service team anytime via phone, email, or WhatsApp.",
    },
    {
      icon: MessageSquare,
      title: "Real-Time Updates",
      description: "Get instant confirmation and updates about your transfer status.",
    },
    {
      icon: MapPin,
      title: "Flight Tracking",
      description: "We monitor your flight and adjust pickup times automatically.",
    },
    {
      icon: Moon,
      title: "Night Service",
      description: "Safe and reliable transfers even during late-night hours.",
    },
  ];

  const timeSlots = [
    { time: "00:00 - 06:00", label: "Late Night / Early Morning", available: true },
    { time: "06:00 - 12:00", label: "Morning", available: true },
    { time: "12:00 - 18:00", label: "Afternoon", available: true },
    { time: "18:00 - 24:00", label: "Evening / Night", available: true },
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
                <Clock className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Available 24/7, Every Day
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                No matter when you need us, we're ready to serve you - day or night, weekends and holidays included.
              </p>
              <Link to="/get-quote">
                <Button size="lg" className="text-lg px-8 py-6">
                  Book Your Transfer Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Always Here When You Need Us
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Round-the-clock service with professional drivers and instant customer support.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
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

        {/* Time Slots Section */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Book Any Time of Day
                </h2>
                <p className="text-lg text-muted-foreground">
                  All time slots available for your convenience.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {timeSlots.map((slot, index) => (
                  <div key={index} className="p-6 rounded-xl bg-background border-2 border-primary/20">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-foreground">{slot.time}</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <span className="text-primary font-medium">Available</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{slot.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why 24/7 Matters Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why 24/7 Service Matters
                </h2>
                <div className="space-y-6 text-muted-foreground text-lg">
                  <div>
                    <h3 className="text-foreground font-semibold text-xl mb-2">Early Morning Flights</h3>
                    <p>
                      Catch that 6 AM flight without worry. We'll pick you up at 3 AM if needed, ensuring you arrive at the airport with plenty of time.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold text-xl mb-2">Late Night Arrivals</h3>
                    <p>
                      Landing after midnight? No problem. Our drivers will be waiting for you no matter what time your flight arrives, even if it's delayed.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold text-xl mb-2">Emergency Transfers</h3>
                    <p>
                      Need an urgent transfer? Call us anytime and we'll arrange a vehicle as quickly as possible.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold text-xl mb-2">Weekend & Holiday Service</h3>
                    <p>
                      Christmas Day, New Year's Eve, public holidays - we never close. Our service is available every single day of the year.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Need a Transfer Right Now?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our team is standing by to help you book your transfer, no matter what time it is.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link to="/get-quote">
                  <Button size="lg" className="text-lg px-8 py-6 w-full sm:w-auto">
                    Book Now
                  </Button>
                </Link>
                <Link to="/#contact">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 w-full sm:w-auto">
                    Contact 24/7 Support
                  </Button>
                </Link>
              </div>
              <div className="flex items-center justify-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>Call: +385 1 234 5678</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <span>WhatsApp Available</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TwentyFourSeven;
