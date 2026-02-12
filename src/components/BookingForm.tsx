import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar, MapPin, Building2, Plane } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

// Lista popularnih lokacija
const locations = [
  { name: "Franjo Tuđman Airport Zagreb (ZAG)", type: "airport", city: "Zagreb" },
  { name: "Zagreb Bus Station (Autobusni Kolodvor)", type: "bus", city: "Zagreb" },
  { name: "Zagreb Central Station (Glavni Kolodvor)", type: "train", city: "Zagreb" },
  { name: "Zagreb City Center", type: "city", city: "Zagreb" },
  { name: "Split Airport (SPU)", type: "airport", city: "Split" },
  { name: "Split City Center", type: "city", city: "Split" },
  { name: "Zadar Airport (ZAD)", type: "airport", city: "Zadar" },
  { name: "Zadar City Center", type: "city", city: "Zadar" },
  { name: "Dubrovnik Airport (DBV)", type: "airport", city: "Dubrovnik" },
  { name: "Dubrovnik City Center", type: "city", city: "Dubrovnik" },
  { name: "Pula Airport (PUY)", type: "airport", city: "Pula" },
  { name: "Pula City Center", type: "city", city: "Pula" },
  { name: "Rijeka City Center", type: "city", city: "Rijeka" },
  { name: "Plitvice Lakes National Park", type: "attraction", city: "Plitvice" },
  { name: "Ljubljana, Slovenia", type: "city", city: "Ljubljana" },
  { name: "Lake Bled, Slovenia", type: "attraction", city: "Bled" },
  { name: "Vienna, Austria", type: "city", city: "Vienna" },
  { name: "Budapest, Hungary", type: "city", city: "Budapest" },
];

const getLocationIcon = (type: string) => {
  switch (type) {
    case "airport":
      return <Plane className="w-4 h-4 text-primary" />;
    case "bus":
    case "train":
      return <Building2 className="w-4 h-4 text-primary" />;
    default:
      return <MapPin className="w-4 h-4 text-primary" />;
  }
};

interface BookingFormProps {
  pickup: string;
  setPickup: (value: string) => void;
  dropoff: string;
  setDropoff: (value: string) => void;
}

const BookingForm = ({ pickup, setPickup, dropoff, setDropoff }: BookingFormProps) => {
  const [transferType, setTransferType] = useState("one-way");
  // pickup and dropoff state moved to parent
  const [date, setDate] = useState("");
  const [people, setPeople] = useState("1");
  const [showPickupSuggestions, setShowPickupSuggestions] = useState(false);
  const [showDropoffSuggestions, setShowDropoffSuggestions] = useState(false);
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const navigate = useNavigate();

  const filterLocations = (input: string) => {
    if (!input || input.length < 2) return [];
    return locations.filter(loc =>
      loc.name.toLowerCase().includes(input.toLowerCase()) ||
      loc.city.toLowerCase().includes(input.toLowerCase())
    );
  };

  const pickupSuggestions = filterLocations(pickup);
  const dropoffSuggestions = filterLocations(dropoff);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validacija
    if (!pickup.trim()) {
      toast({
        title: "Error",
        description: "Please enter pickup location",
        variant: "destructive",
      });
      return;
    }

    if (!dropoff.trim()) {
      toast({
        title: "Error",
        description: "Please enter drop-off location",
        variant: "destructive",
      });
      return;
    }

    if (!date) {
      toast({
        title: "Error",
        description: "Please select a date",
        variant: "destructive",
      });
      return;
    }

    // Navigacija na checkout stranicu sa podacima
    navigate(`/${language}/booking`, {
      state: {
        pickup,
        dropoff,
        date,
        people,
        transferType
      }
    });
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 rounded-lg shadow-2xl p-8 max-w-md w-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-primary/10 p-2 rounded-lg">
          <Calendar className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{t.bookingForm.title}</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="relative">
          <Label htmlFor="pickup" className="text-sm font-medium text-gray-700 mb-2 block">
            {t.bookingForm.pickup}
          </Label>
          <Input
            id="pickup"
            type="text"
            placeholder={t.bookingForm.pickupPlaceholder}
            className="bg-white border-gray-200 text-gray-900"
            value={pickup}
            onChange={(e) => {
              setPickup(e.target.value);
              setShowPickupSuggestions(true);
            }}
            onFocus={() => setShowPickupSuggestions(true)}
            onBlur={() => setTimeout(() => setShowPickupSuggestions(false), 200)}
            required
          />

          {showPickupSuggestions && pickupSuggestions.length > 0 && (
            <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {pickupSuggestions.map((location, index) => (
                <button
                  key={index}
                  type="button"
                  className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-start gap-3 border-b border-gray-100 last:border-0"
                  onClick={() => {
                    setPickup(location.name);
                    setShowPickupSuggestions(false);
                  }}
                >
                  <div className="mt-1">
                    {getLocationIcon(location.type)}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{location.name}</div>
                    <div className="text-sm text-gray-500">{location.city}</div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="relative">
          <Label htmlFor="dropoff" className="text-sm font-medium text-gray-700 mb-2 block">
            {t.bookingForm.dropoff}
          </Label>
          <Input
            id="dropoff"
            type="text"
            placeholder={t.bookingForm.dropoffPlaceholder}
            className="bg-white border-gray-200 text-gray-900"
            value={dropoff}
            onChange={(e) => {
              setDropoff(e.target.value);
              setShowDropoffSuggestions(true);
            }}
            onFocus={() => setShowDropoffSuggestions(true)}
            onBlur={() => setTimeout(() => setShowDropoffSuggestions(false), 200)}
            required
          />

          {showDropoffSuggestions && dropoffSuggestions.length > 0 && (
            <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {dropoffSuggestions.map((location, index) => (
                <button
                  key={index}
                  type="button"
                  className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-start gap-3 border-b border-gray-100 last:border-0"
                  onClick={() => {
                    setDropoff(location.name);
                    setShowDropoffSuggestions(false);
                  }}
                >
                  <div className="mt-1">
                    {getLocationIcon(location.type)}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{location.name}</div>
                    <div className="text-sm text-gray-500">{location.city}</div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="date" className="text-sm font-medium text-gray-700 mb-2 block">
              {t.bookingForm.date}
            </Label>
            <Input
              id="date"
              type="date"
              className="bg-white border-gray-200 text-gray-900"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              required
            />
          </div>
          <div>
            <Label htmlFor="people" className="text-sm font-medium text-gray-700 mb-2 block">
              {t.bookingForm.people}
            </Label>
            <Input
              id="people"
              type="number"
              min="1"
              max="50"
              className="bg-white border-gray-200 text-gray-900"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <Label className="text-sm font-medium text-gray-700 mb-3 block">
            {t.bookingForm.transferType}
          </Label>
          <RadioGroup value={transferType} onValueChange={setTransferType}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="one-way" id="one-way" />
              <Label htmlFor="one-way" className="text-gray-700 cursor-pointer font-normal">
                {t.bookingForm.oneWay}
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="return" id="return" />
              <Label htmlFor="return" className="text-gray-700 cursor-pointer font-normal">
                {t.bookingForm.withReturn}
              </Label>
            </div>
          </RadioGroup>
        </div>

        <Button type="submit" className="w-full h-12 text-base font-semibold">
          {t.bookingForm.search}
        </Button>
      </form>
    </div>
  );
};

export default BookingForm;
