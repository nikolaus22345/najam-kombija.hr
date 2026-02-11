import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Calendar as CalendarIcon, 
  Users, 
  Briefcase, 
  Wifi, 
  CheckCircle, 
  ArrowRight,
  Clock,
  RefreshCw,
  User,
  Mail,
  Phone,
  MessageSquare
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import sedanImg from "@/assets/vehicle-sedan.png";
import minivanImg from "@/assets/vehicle-minivan.png";
import minibusImg from "@/assets/vehicle-minibus.png";

interface Vehicle {
  type: string;
  passengers: string;
  luggage: string;
  price: number;
  image: string;
  features: string[];
}

const Reservation = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  // URL params
  const pickupParam = searchParams.get("pickup") || "";
  const dropoffParam = searchParams.get("dropoff") || "";
  const priceParam = searchParams.get("price") || "";
  const vehicleParam = searchParams.get("vehicle") || "";
  const dateParam = searchParams.get("date") || "";

  // Form state
  const [pickup, setPickup] = useState(pickupParam);
  const [dropoff, setDropoff] = useState(dropoffParam);
  const [date, setDate] = useState<Date | undefined>(dateParam ? new Date(dateParam) : undefined);
  const [time, setTime] = useState("09:00");
  const [passengers, setPassengers] = useState("2");
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [showReturnOption, setShowReturnOption] = useState(false);
  const [needsReturn, setNeedsReturn] = useState(false);
  const [returnDate, setReturnDate] = useState<Date | undefined>();
  const [returnTime, setReturnTime] = useState("09:00");

  // Passenger details
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const vehicles: Vehicle[] = [
    { 
      type: "Sedan", 
      passengers: "1-3", 
      luggage: "3", 
      price: parseInt(priceParam) || 150, 
      image: sedanImg,
      features: ["Free WiFi", "Air Conditioning", "Professional Driver", "Water Bottles"]
    },
    { 
      type: "Minivan", 
      passengers: "4-7", 
      luggage: "7", 
      price: Math.round((parseInt(priceParam) || 150) * 1.3), 
      image: minivanImg,
      features: ["Free WiFi", "Air Conditioning", "Professional Driver", "Extra Space", "USB Charging"]
    },
    { 
      type: "Minibus", 
      passengers: "8-16", 
      luggage: "16", 
      price: Math.round((parseInt(priceParam) || 150) * 1.9), 
      image: minibusImg,
      features: ["Free WiFi", "Air Conditioning", "Professional Driver", "Group Travel", "Comfort Seats"]
    },
  ];

  useEffect(() => {
    if (vehicleParam) {
      const found = vehicles.find(v => v.type.toLowerCase() === vehicleParam.toLowerCase());
      if (found) setSelectedVehicle(found);
    } else {
      setSelectedVehicle(vehicles[0]);
    }
  }, [vehicleParam]);

  const totalPrice = selectedVehicle ? (needsReturn ? selectedVehicle.price * 2 : selectedVehicle.price) : 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !phone || !pickup || !dropoff || !date || !selectedVehicle) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const params = new URLSearchParams({
      pickup,
      dropoff,
      price: totalPrice.toString(),
      vehicle: selectedVehicle.type,
      passengers,
      date: format(date, "yyyy-MM-dd"),
      time,
      name,
      email,
      phone,
      ...(message && { message }),
      ...(needsReturn && returnDate && { returnDate: format(returnDate, "yyyy-MM-dd"), returnTime })
    });

    navigate(`/checkout?${params.toString()}`);
  };

  const timeSlots = [];
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += 30) {
      timeSlots.push(`${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 px-2">
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-xs sm:text-base">1</div>
              <span className="text-xs sm:text-sm font-medium hidden sm:inline">Select Vehicle</span>
            </div>
            <div className="w-6 sm:w-16 h-0.5 bg-primary"></div>
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-xs sm:text-base">2</div>
              <span className="text-xs sm:text-sm font-medium hidden sm:inline">Your Details</span>
            </div>
            <div className="w-6 sm:w-16 h-0.5 bg-muted"></div>
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center font-semibold text-xs sm:text-base">3</div>
              <span className="text-xs sm:text-sm font-medium hidden sm:inline text-muted-foreground">Confirmation</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Main Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Route Selection */}
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <h2 className="text-lg sm:text-xl font-semibold mb-4">Transfer Details</h2>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label htmlFor="pickup">Pick up address *</Label>
                      <Input 
                        id="pickup"
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                        placeholder="Enter pickup location"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="dropoff">Drop off address *</Label>
                      <Input 
                        id="dropoff"
                        value={dropoff}
                        onChange={(e) => setDropoff(e.target.value)}
                        placeholder="Enter drop-off location"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label>Date *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal mt-1",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            disabled={(date) => date < new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div>
                      <Label>Time *</Label>
                      <Select value={time} onValueChange={setTime}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Return Option */}
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-primary">Need return transfer?</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">Add your return transfer from {dropoff || "destination"} to {pickup || "origin"}.</p>
                    </div>
                    <Button 
                      variant={needsReturn ? "default" : "outline"}
                      onClick={() => setNeedsReturn(!needsReturn)}
                      className="w-full sm:w-auto"
                      size="sm"
                    >
                      <RefreshCw className="w-4 h-4 mr-2" />
                      {needsReturn ? "Remove Return" : "Add Return"}
                    </Button>
                  </div>

                  {needsReturn && (
                    <div className="grid md:grid-cols-2 gap-4 mt-4 pt-4 border-t">
                      <div>
                        <Label>Return Date *</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal mt-1",
                                !returnDate && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {returnDate ? format(returnDate, "PPP") : "Select return date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={returnDate}
                              onSelect={setReturnDate}
                              disabled={(d) => d < (date || new Date())}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div>
                        <Label>Return Time *</Label>
                        <Select value={returnTime} onValueChange={setReturnTime}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((slot) => (
                              <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Vehicle Selection */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Select Your Vehicle</h2>
                <div className="space-y-4">
                  {vehicles.map((vehicle) => (
                    <Card 
                      key={vehicle.type}
                      className={cn(
                        "cursor-pointer transition-all hover:shadow-lg",
                        selectedVehicle?.type === vehicle.type && "ring-2 ring-primary"
                      )}
                      onClick={() => setSelectedVehicle(vehicle)}
                    >
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                          <img 
                            src={vehicle.image} 
                            alt={vehicle.type}
                            className="w-20 h-14 sm:w-24 sm:h-16 object-contain mx-auto sm:mx-0"
                          />
                          <div className="flex-1 text-center sm:text-left">
                            <h3 className="text-base sm:text-lg font-semibold">{vehicle.type}</h3>
                            <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                                {vehicle.passengers}
                              </span>
                              <span className="flex items-center gap-1">
                                <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
                                {vehicle.luggage}
                              </span>
                              <span className="flex items-center gap-1">
                                <Wifi className="w-3 h-3 sm:w-4 sm:h-4" />
                                WiFi
                              </span>
                            </div>
                          </div>
                          <div className="text-center sm:text-right pt-2 sm:pt-0 border-t sm:border-t-0">
                            <p className="text-xl sm:text-2xl font-bold text-primary">€{vehicle.price}</p>
                            <p className="text-xs text-muted-foreground">per trip</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Passenger Details */}
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <h2 className="text-lg sm:text-xl font-semibold mb-4">Passenger Details</h2>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label htmlFor="name">Your name *</Label>
                      <div className="relative mt-1">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input 
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Enter your full name"
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email address *</Label>
                      <div className="relative mt-1">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input 
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label htmlFor="phone">Phone *</Label>
                      <div className="relative mt-1">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input 
                          id="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+385 ..."
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="passengers">Number of passengers *</Label>
                      <Select value={passengers} onValueChange={setPassengers}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select passengers" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((num) => (
                            <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message (optional)</Label>
                    <div className="relative mt-1">
                      <Textarea 
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Flight number, special requests, child seats, etc."
                        rows={4}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button - Mobile */}
              <div className="lg:hidden">
                <Button 
                  size="lg" 
                  className="w-full text-lg py-6"
                  onClick={handleSubmit}
                >
                  Continue to Payment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            {/* Sidebar Summary - Mobile: collapsible, Desktop: sticky */}
            <div className="lg:col-span-1 order-first lg:order-last">
              <div className="lg:sticky lg:top-24">
                {/* Mobile Summary Card */}
                <Card className="mb-4 lg:mb-0">
                  <CardContent className="p-4 sm:p-6">
                    {selectedVehicle && (
                      <img 
                        src={selectedVehicle.image} 
                        alt={selectedVehicle.type}
                        className="w-full h-24 sm:h-32 object-contain mb-4"
                      />
                    )}

                    <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                      <div className="flex justify-between gap-2">
                        <span className="text-muted-foreground shrink-0">Start:</span>
                        <span className="font-medium text-right truncate">{pickup || "—"}</span>
                      </div>
                      <div className="flex justify-between gap-2">
                        <span className="text-muted-foreground shrink-0">End:</span>
                        <span className="font-medium text-right truncate">{dropoff || "—"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Type:</span>
                        <span className="font-medium">{needsReturn ? "Round trip" : "One way"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Vehicle:</span>
                        <span className="font-medium">{selectedVehicle?.type || "—"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Date:</span>
                        <span className="font-medium">{date ? format(date, "PP") : "—"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Time:</span>
                        <span className="font-medium">{time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Passengers:</span>
                        <span className="font-medium">{passengers}</span>
                      </div>
                    </div>

                    <div className="border-t mt-3 sm:mt-4 pt-3 sm:pt-4">
                      <div className="text-center">
                        <p className="text-xs sm:text-sm text-primary font-medium">Total price</p>
                        <p className="text-3xl sm:text-4xl font-bold">{totalPrice.toFixed(2)} €</p>
                      </div>
                    </div>

                    <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900 rounded-lg">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm text-green-800 dark:text-green-200">
                          Free cancellation up to 24 hours before pickup.
                        </p>
                      </div>
                    </div>

                    <Button 
                      size="lg" 
                      className="w-full mt-4 hidden lg:flex"
                      onClick={handleSubmit}
                    >
                      Continue to Payment
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </CardContent>
                </Card>

                {/* What's Included - hidden on mobile for cleaner UI */}
                <Card className="mt-4 hidden lg:block">
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-3">What's included:</h3>
                    <div className="space-y-2 text-sm">
                      {[
                        "Professional driver",
                        "Door-to-door service",
                        "All tolls & fuel included",
                        "Free WiFi",
                        "Flight monitoring",
                        "Meet & Greet service"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Reservation;
