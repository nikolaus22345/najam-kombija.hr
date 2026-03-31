import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RouteMap from "@/components/RouteMap";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, Users, Car, CheckCircle, ArrowRight, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import BookingModal, { BookingContactData } from "@/components/BookingModal";
import { sendEmail } from "@/lib/email";
import { calculateTransferPrice } from "@/lib/pricing";

const POPULAR_LOCATIONS = [
  "Zagreb Airport", "Zagreb City Center", "Split Airport", "Split City Center",
  "Zadar Airport", "Zadar City Center", "Dubrovnik Airport", "Dubrovnik City Center",
  "Plitvice Lakes", "Novalja (Pag)", "Vodice", "Sibenik", "Rijeka", "Pula",
  "Opatija", "Rovinj", "Porec", "Umag", "Makarska", "Murter", "Tisno", "Nin", "Biograd na Moru"
];

interface BookingData {
  pickup: string;
  dropoff: string;
  date: string;
  people: string;
  transferType: string;
}

const BookingCheckout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { getLink } = useLanguage();
  const bookingData = location.state as BookingData;

  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);
  const [basePrice, setBasePrice] = useState(150);
  const [routeDistance, setRouteDistance] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingPrice, setBookingPrice] = useState(0);

  const calculatedPricing = calculateTransferPrice(bookingData?.pickup, bookingData?.dropoff, routeDistance);
  const getVehicleBasePrice = (type: string) => {
    if (type === "Sedan") return calculatedPricing.sedan;
    if (type === "Minivan") return calculatedPricing.minivan;
    if (type === "Minibus") return calculatedPricing.minibus;
    return calculatedPricing.sedan;
  };

  useEffect(() => {
    if (!bookingData) {
      navigate('/');
    }
  }, [bookingData, navigate]);

  // Ensure vehicles is declared here before use ...
  const vehicles = [
    {
      type: "Sedan",
      capacity: "1-3 passengers",
      luggage: "2-3 suitcases",
      priceMultiplier: 1,
      image: "🚗",
      features: ["Free WiFi", "Air Conditioning", "Professional Driver", "Water Bottles"]
    },
    {
      type: "Minivan",
      capacity: "4-8 passengers",
      luggage: "6-8 suitcases",
      priceMultiplier: 1.3,
      image: "🚐",
      popular: true,
      features: ["Free WiFi", "Air Conditioning", "Professional Driver", "Extra Space", "USB Charging"]
    },
    {
      type: "Minibus",
      capacity: "9-16 passengers",
      luggage: "12-16 suitcases",
      priceMultiplier: 1.8,
      image: "🚌",
      features: ["Free WiFi", "Air Conditioning", "Professional Driver", "Group Travel", "Comfort Seats"]
    }
  ];

  const handleRouteCalculated = useCallback((distance: number, duration: number, price: number) => {
    setRouteDistance(distance);
    setBasePrice(prev => {
      if (prev !== price) return price;
      return prev;
    });
  }, []);

  if (!bookingData) return null;

  const handleBookVehicle = (vehicleType: string, baseVehiclePrice: number) => {
    setSelectedVehicle(vehicleType);
    const finalPrice = bookingData.transferType === "return" ? baseVehiclePrice * 2 : baseVehiclePrice;
    setBookingPrice(finalPrice);
    setIsModalOpen(true);
  };
  // ... (rest of file) ...
  // Then replace <RouteMap ... /> with <GoogleRouteMap ... />


  const handleBookingSubmit = async (contactData: BookingContactData) => {
    if (!selectedVehicle) return;

    const templateParams = {
      to_email: "zagrebtransfers.hr@gmail.com, nikolacvitanovic.hr@gmail.com", // Replace with actual recipient email if dynamic
      from_name: contactData.name,
      from_email: contactData.email,
      phone: contactData.phone,
      message: `
        New Booking Request:
        Vehicle: ${selectedVehicle}
        Price: €${bookingPrice}
        Pickup: ${bookingData.pickup}
        Dropoff: ${bookingData.dropoff}
        Date: ${bookingData.date}
        Passengers: ${bookingData.people}
        Transfer Type: ${bookingData.transferType}
        Notes: ${contactData.notes}
      `,
      reply_to: contactData.email,
    };

    const result = await sendEmail(templateParams);

    if (result.success) {
      toast({
        title: "Booking Request Sent!",
        description: "We have received your request and will contact you shortly.",
      });
      setIsModalOpen(false);
      navigate(getLink('/thank-you'));
    } else {
      toast({
        title: "Error",
        description: "Failed to send booking request. Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20 pb-16">
        {/* Booking Summary & Route */}
        <section className="py-8 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
              Your Transfer Details
            </h1>
            <p className="text-muted-foreground text-center mb-8">
              Review your route and select the perfect vehicle
            </p>

            <div className="max-w-6xl mx-auto space-y-6">
              {/* Trip Info Cards */}
              <div className="grid md:grid-cols-4 gap-4">
                <Card className="p-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground mb-1">Pickup</p>
                      <p className="font-semibold text-sm text-foreground truncate">{bookingData.pickup}</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground mb-1">Drop-off</p>
                      <p className="font-semibold text-sm text-foreground truncate">{bookingData.dropoff}</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground mb-1">Date</p>
                      <p className="font-semibold text-sm text-foreground">{bookingData.date}</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground mb-1">Passengers</p>
                      <p className="font-semibold text-sm text-foreground">{bookingData.people} people</p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Route Map */}
              <RouteMap
                pickup={bookingData.pickup}
                dropoff={bookingData.dropoff}
                onRouteCalculated={handleRouteCalculated}
              />
            </div>
          </div>
        </section>

        {/* Vehicle Selection */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Choose Your Vehicle
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {vehicles.map((vehicle, index) => (
                <Card
                  key={index}
                  className={`hover:shadow-xl transition-all hover:scale-105 relative ${selectedVehicle === vehicle.type ? 'ring-2 ring-primary' : ''
                    }`}
                >
                  {vehicle.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}

                  <CardHeader>
                    <div className="text-center mb-4">
                      <div className="text-6xl mb-2">{vehicle.image}</div>
                      <CardTitle className="text-2xl">{vehicle.type}</CardTitle>
                    </div>

                    <div className="space-y-2 text-center text-muted-foreground">
                      <div className="flex items-center justify-center gap-2">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">{vehicle.capacity}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Car className="w-4 h-4" />
                        <span className="text-sm">{vehicle.luggage}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {vehicle.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t">
                      <div className="text-3xl font-bold text-primary">
                        €{getVehicleBasePrice(vehicle.type) * (bookingData.transferType === "return" ? 2 : 1)}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Total price {bookingData.transferType === "return" && "(round trip)"}
                      </p>

                      <Button
                        className="w-full"
                        size="lg"
                        onClick={() => handleBookVehicle(vehicle.type, getVehicleBasePrice(vehicle.type))}
                      >
                        Book {vehicle.type}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              What's Included in Your Transfer
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Professional English-speaking driver",
                "Door-to-door service",
                "All highway tolls and fuel",
                "Free WiFi in vehicle",
                "Bottled water",
                "Flight monitoring",
                "Meet & Greet service",
                "Free cancellation 24h"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-background p-3 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-12">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Need Help with Your Booking?
            </h2>
            <p className="text-muted-foreground mb-6">
              Our team is available 24/7 to assist you
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="gap-2">
                <Phone className="w-5 h-5" />
                +385 97 601 9558
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Mail className="w-5 h-5" />
                zagrebtransfers.hr@gmail.com
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleBookingSubmit}
        vehicleTitle={selectedVehicle || ""}
        price={`€${bookingPrice}`}
      />
    </div>
  );
};

export default BookingCheckout;
