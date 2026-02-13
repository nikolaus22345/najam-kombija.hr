import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { ArrowLeft, CreditCard, Wallet, Clock, Percent, Shield, CheckCircle2, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/lib/email";

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  const pickup = searchParams.get("pickup") || "";
  const dropoff = searchParams.get("dropoff") || "";
  const price = searchParams.get("price") || "0";
  const vehicle = searchParams.get("vehicle") || "";
  const passengers = searchParams.get("passengers") || "1";
  const date = searchParams.get("date") || "";
  const time = searchParams.get("time") || "";
  const name = searchParams.get("name") || "";
  const email = searchParams.get("email") || "";
  const phone = searchParams.get("phone") || "";

  const totalPrice = parseFloat(price);
  const depositAmount = totalPrice * 0.2;

  const [paymentMethod, setPaymentMethod] = useState("full");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardName, setCardName] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const paymentOptions = [
    {
      id: "full",
      title: "Pay Full Amount Now",
      description: "Pay the complete amount securely online",
      icon: CreditCard,
      amount: totalPrice,
      badge: "Most Popular"
    },
    {
      id: "deposit",
      title: "20% Deposit Now",
      description: "Pay 20% now, remaining amount to driver",
      icon: Percent,
      amount: depositAmount,
      remaining: totalPrice - depositAmount,
      badge: "Flexible"
    },
    {
      id: "paypal",
      title: "PayPal",
      description: "Pay securely with your PayPal account",
      icon: Wallet,
      amount: totalPrice,
      badge: null
    },
    {
      id: "cash",
      title: "Pay After Ride",
      description: "Pay cash or card directly to your driver",
      icon: Clock,
      amount: totalPrice,
      badge: "No upfront payment"
    }
  ];

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    return parts.length ? parts.join(' ') : value;
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  const handleSubmit = async () => {
    setIsProcessing(true);

    // Send email confirmation
    const templateParams = {
      to_email: "info@zagreb-transfers.hr",
      from_name: name,
      from_email: email,
      phone: phone,
      message: `
        NEW BOOKING CONFIRMED
        
        Route:
        From: ${pickup}
        To: ${dropoff}
        
        Details:
        Date: ${date}
        Time: ${time}
        Passengers: ${passengers}
        Vehicle: ${vehicle}
        Price: €${price}
        
        Payment Method: ${paymentMethod}
        ${paymentMethod === 'deposit' ? `Deposit Amount: €${depositAmount.toFixed(2)}` : ''}
        
        Customer Details:
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
      `,
      reply_to: email,
    };

    await sendEmail(templateParams);

    toast({
      title: "Booking Confirmed! ✓",
      description: "Your transfer has been successfully booked. Check your email for confirmation.",
    });

    setIsProcessing(false);
    navigate("/?booking=success");
  };

  const selectedOption = paymentOptions.find(opt => opt.id === paymentMethod);
  const needsCardDetails = paymentMethod === "full" || paymentMethod === "deposit";

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Details
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-10">
        {/* Progress */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm">
              <CheckCircle2 className="h-4 w-4" />
            </div>
            <span className="text-xs md:text-sm text-muted-foreground hidden sm:inline">Route</span>
          </div>
          <div className="w-8 md:w-12 h-0.5 bg-primary/20" />
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm">
              <CheckCircle2 className="h-4 w-4" />
            </div>
            <span className="text-xs md:text-sm text-muted-foreground hidden sm:inline">Details</span>
          </div>
          <div className="w-8 md:w-12 h-0.5 bg-primary/20" />
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
              3
            </div>
            <span className="text-xs md:text-sm font-medium hidden sm:inline">Payment</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Payment Options - Left Side */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-border/50">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg md:text-xl flex items-center gap-2">
                  <Lock className="h-5 w-5 text-primary" />
                  Choose Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  {paymentOptions.map((option) => (
                    <div
                      key={option.id}
                      className={`relative flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-lg border-2 cursor-pointer transition-all ${paymentMethod === option.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                        }`}
                      onClick={() => setPaymentMethod(option.id)}
                    >
                      <RadioGroupItem value={option.id} className="mt-1" />
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <option.icon className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
                          <span className="font-medium text-sm md:text-base">{option.title}</span>
                          {option.badge && (
                            <span className="text-[10px] md:text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                              {option.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs md:text-sm text-muted-foreground">{option.description}</p>
                        {option.id === "deposit" && (
                          <p className="text-xs text-muted-foreground mt-1">
                            Pay €{option.remaining?.toFixed(2)} to driver
                          </p>
                        )}
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="font-bold text-base md:text-lg">€{option.amount.toFixed(2)}</span>
                        {option.id === "cash" && (
                          <p className="text-[10px] md:text-xs text-muted-foreground">to driver</p>
                        )}
                      </div>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Card Details Form */}
            {needsCardDetails && (
              <Card className="border-border/50">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg md:text-xl flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-primary" />
                    Card Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardName" className="text-sm">Name on Card</Label>
                    <Input
                      id="cardName"
                      placeholder="John Doe"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      className="h-11 md:h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber" className="text-sm">Card Number</Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                      maxLength={19}
                      className="h-11 md:h-12"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry" className="text-sm">Expiry Date</Label>
                      <Input
                        id="expiry"
                        placeholder="MM/YY"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(formatExpiryDate(e.target.value))}
                        maxLength={5}
                        className="h-11 md:h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv" className="text-sm">CVV</Label>
                      <Input
                        id="cvv"
                        placeholder="123"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 4))}
                        maxLength={4}
                        className="h-11 md:h-12"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground mt-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    Your payment is secure and encrypted
                  </div>
                </CardContent>
              </Card>
            )}

            {/* PayPal Button */}
            {paymentMethod === "paypal" && (
              <Card className="border-border/50">
                <CardContent className="pt-6">
                  <Button
                    className="w-full h-12 md:h-14 bg-[#0070ba] hover:bg-[#005ea6] text-white font-bold text-base md:text-lg"
                    onClick={handleSubmit}
                    disabled={isProcessing}
                  >
                    {isProcessing ? "Processing..." : "Pay with PayPal"}
                  </Button>
                  <p className="text-center text-xs text-muted-foreground mt-3">
                    You will be redirected to PayPal to complete your payment
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Confirm Button for other methods */}
            {paymentMethod !== "paypal" && (
              <Button
                className="w-full h-12 md:h-14 text-base md:text-lg font-semibold"
                onClick={handleSubmit}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  "Processing..."
                ) : paymentMethod === "cash" ? (
                  "Confirm Booking"
                ) : (
                  `Pay €${selectedOption?.amount.toFixed(2)} Now`
                )}
              </Button>
            )}
          </div>

          {/* Order Summary - Right Side */}
          <div className="lg:col-span-1 order-first lg:order-last">
            <Card className="border-border/50 lg:sticky lg:top-6">
              <CardHeader className="pb-3">
                <CardTitle className="text-base md:text-lg">Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">Pickup</p>
                      <p className="font-medium text-sm truncate">{pickup}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">Drop-off</p>
                      <p className="font-medium text-sm truncate">{dropoff}</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date</span>
                    <span>{date || "Not selected"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time</span>
                    <span>{time || "Not selected"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Passengers</span>
                    <span>{passengers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Vehicle</span>
                    <span className="text-right">{vehicle}</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Transfer Price</span>
                    <span>€{totalPrice.toFixed(2)}</span>
                  </div>
                  {paymentMethod === "deposit" && (
                    <>
                      <div className="flex justify-between text-primary">
                        <span>Deposit (20%)</span>
                        <span>€{depositAmount.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-muted-foreground">
                        <span>Due to driver</span>
                        <span>€{(totalPrice - depositAmount).toFixed(2)}</span>
                      </div>
                    </>
                  )}
                </div>

                <Separator />

                <div className="flex justify-between font-bold text-base md:text-lg">
                  <span>
                    {paymentMethod === "deposit" ? "Pay Now" : "Total"}
                  </span>
                  <span className="text-primary">
                    €{paymentMethod === "deposit" ? depositAmount.toFixed(2) : totalPrice.toFixed(2)}
                  </span>
                </div>

                <div className="pt-2 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="h-3 w-3 text-green-500" />
                    Free cancellation up to 24h before
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="h-3 w-3 text-green-500" />
                    Instant confirmation
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Shield className="h-3 w-3 text-green-500" />
                    Secure payment
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
