import { useSearchParams, Link } from "react-router-dom";
import { CheckCircle, Calendar, MapPin, Users, Car, Phone, Mail, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const ThankYou = () => {
  const [searchParams] = useSearchParams();
  const { getLink } = useLanguage();

  const bookingDetails = {
    pickup: searchParams.get("pickup") || "",
    dropoff: searchParams.get("dropoff") || "",
    date: searchParams.get("date") || "",
    time: searchParams.get("time") || "",
    passengers: searchParams.get("passengers") || "",
    vehicle: searchParams.get("vehicle") || "",
    price: searchParams.get("price") || "",
    paymentMethod: searchParams.get("payment") || "",
  };

  const getPaymentMethodLabel = (method: string) => {
    switch (method) {
      case "full": return "Full Payment by Card";
      case "deposit": return "20% Deposit";
      case "paypal": return "PayPal";
      case "cash": return "Pay After Ride";
      default: return method;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 py-8 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Success Icon & Message */}
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full bg-green-100 mb-4 md:mb-6">
              <CheckCircle className="w-8 h-8 md:w-12 md:h-12 text-green-600" />
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-2 md:mb-4">
              Thank You for Your Booking!
            </h1>
            <p className="text-muted-foreground text-sm md:text-lg max-w-xl mx-auto">
              Your transfer reservation has been received. We will contact you shortly to confirm all the details.
            </p>
          </div>

          {/* Booking Summary Card */}
          {bookingDetails.pickup && (
            <Card className="p-4 md:p-8 mb-6 md:mb-8 border-border/50">
              <h2 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-foreground">
                Booking Summary
              </h2>

              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs md:text-sm text-muted-foreground">Route</p>
                    <p className="font-medium text-sm md:text-base text-foreground">
                      {bookingDetails.pickup} → {bookingDetails.dropoff}
                    </p>
                  </div>
                </div>

                {bookingDetails.date && (
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs md:text-sm text-muted-foreground">Date & Time</p>
                      <p className="font-medium text-sm md:text-base text-foreground">
                        {bookingDetails.date} {bookingDetails.time && `at ${bookingDetails.time}`}
                      </p>
                    </div>
                  </div>
                )}

                {bookingDetails.passengers && (
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs md:text-sm text-muted-foreground">Passengers</p>
                      <p className="font-medium text-sm md:text-base text-foreground">
                        {bookingDetails.passengers} {parseInt(bookingDetails.passengers) === 1 ? 'passenger' : 'passengers'}
                      </p>
                    </div>
                  </div>
                )}

                {bookingDetails.vehicle && (
                  <div className="flex items-start gap-3">
                    <Car className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs md:text-sm text-muted-foreground">Vehicle</p>
                      <p className="font-medium text-sm md:text-base text-foreground capitalize">
                        {bookingDetails.vehicle}
                      </p>
                    </div>
                  </div>
                )}

                {bookingDetails.price && (
                  <div className="pt-3 md:pt-4 mt-3 md:mt-4 border-t border-border">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground text-sm md:text-base">Total Price</span>
                      <span className="text-xl md:text-2xl font-bold text-primary">€{bookingDetails.price}</span>
                    </div>
                    {bookingDetails.paymentMethod && (
                      <p className="text-xs md:text-sm text-muted-foreground mt-1">
                        Payment: {getPaymentMethodLabel(bookingDetails.paymentMethod)}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </Card>
          )}

          {/* What's Next */}
          <Card className="p-4 md:p-8 mb-6 md:mb-8 bg-muted/30 border-border/50">
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-foreground">
              What Happens Next?
            </h2>
            <ol className="space-y-2 md:space-y-3 text-sm md:text-base text-muted-foreground">
              <li className="flex gap-2 md:gap-3">
                <span className="font-bold text-primary">1.</span>
                You will receive a confirmation email with your booking details.
              </li>
              <li className="flex gap-2 md:gap-3">
                <span className="font-bold text-primary">2.</span>
                Our team will contact you within 24 hours to confirm the reservation.
              </li>
              <li className="flex gap-2 md:gap-3">
                <span className="font-bold text-primary">3.</span>
                Your driver will contact you before the pickup to coordinate meeting point.
              </li>
            </ol>
          </Card>

          {/* Contact Info */}
          <Card className="p-4 md:p-8 mb-6 md:mb-8 border-border/50">
            <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-foreground">
              Need to Make Changes?
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mb-4">
              If you need to modify or cancel your booking, please contact us:
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href="tel:+385991234567"
                className="flex items-center gap-2 text-primary hover:underline text-sm md:text-base"
              >
                <Phone className="w-4 h-4" />
                +385 99 123 4567
              </a>
              <a
                href="mailto:zagrebtransfers.hr@gmail.com"
                className="flex items-center gap-2 text-primary hover:underline text-sm md:text-base"
              >
                <Mail className="w-4 h-4" />
                zagrebtransfers.hr@gmail.com
              </a>
            </div>
          </Card>

          {/* Back to Home */}
          <div className="text-center">
            <Link to={getLink('/')}>
              <Button variant="outline" size="lg" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;
