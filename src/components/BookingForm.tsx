import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import LocationAutocomplete from "@/components/LocationAutocomplete";

interface BookingFormProps {
  pickup: string;
  setPickup: (value: string) => void;
  dropoff: string;
  setDropoff: (value: string) => void;
}

const BookingForm = ({ pickup, setPickup, dropoff, setDropoff }: BookingFormProps) => {
  const [transferType, setTransferType] = useState("one-way");
  const [date, setDate] = useState("");
  const [people, setPeople] = useState("1");
  const { t, getLink } = useLanguage();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

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

    navigate(getLink('/booking'), {
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
        <LocationAutocomplete
          id="pickup"
          label={t.bookingForm.pickup}
          value={pickup}
          onChange={setPickup}
          placeholder={t.bookingForm.pickupPlaceholder}
          className="bg-white border-gray-200 text-gray-900"
        />

        <LocationAutocomplete
          id="dropoff"
          label={t.bookingForm.dropoff}
          value={dropoff}
          onChange={setDropoff}
          placeholder={t.bookingForm.dropoffPlaceholder}
          className="bg-white border-gray-200 text-gray-900"
        />

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
