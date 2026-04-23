import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

interface BookingFormProps {
  pickup?: string;
  setPickup?: (value: string) => void;
  dropoff?: string;
  setDropoff?: (value: string) => void;
}

const BookingForm = ({ pickup }: BookingFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [subject, setSubject] = useState(pickup ? `Upit za ${pickup}` : "");
  const [message, setMessage] = useState("");
  const [consent1, setConsent1] = useState(false);
  const [consent2, setConsent2] = useState(false);
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!consent1 || !consent2) {
      toast({
        title: "Greška",
        description: "Morate prihvatiti uvjete korištenja i politiku privatnosti.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Upit poslan!",
      description: "Hvala Vam. Odgovorit ćemo u najkraćem mogućem roku.",
    });
    
    // Reset form
    setName("");
    setEmail("");
    setService("");
    setSubject("");
    setMessage("");
    setConsent1(false);
    setConsent2(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-primary/10 p-2 rounded-lg">
          <Mail className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">Zatražite Ponudu</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">
              Ime i prezime
            </Label>
            <Input
              id="name"
              className="bg-white border-gray-200 text-gray-900"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              className="bg-white border-gray-200 text-gray-900"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="service" className="text-sm font-medium text-gray-700 mb-2 block">
            Koju uslugu trebate? *
          </Label>
          <Select value={service} onValueChange={setService} required>
            <SelectTrigger className="bg-white border-gray-200 text-gray-900 w-full">
              <SelectValue placeholder="- Odaberite uslugu -" />
            </SelectTrigger>
            <SelectContent className="bg-white border-gray-200 z-50">
              <SelectItem value="putnicki" className="text-gray-900 focus:bg-gray-100 hover:bg-gray-100">Putnička kombi vozila</SelectItem>
              <SelectItem value="teretni" className="text-gray-900 focus:bg-gray-100 hover:bg-gray-100">Teretna kombi vozila</SelectItem>
              <SelectItem value="dostavna" className="text-gray-900 focus:bg-gray-100 hover:bg-gray-100">Mala dostavna vozila</SelectItem>
              <SelectItem value="n1" className="text-gray-900 focus:bg-gray-100 hover:bg-gray-100">Vozila za 5 osoba N1</SelectItem>
              <SelectItem value="s-vozacem" className="text-gray-900 focus:bg-gray-100 hover:bg-gray-100">Najam kombija s vozačem</SelectItem>
              <SelectItem value="svejedno" className="text-gray-900 focus:bg-gray-100 hover:bg-gray-100">Nisam siguran / Ostalo</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="subject" className="text-sm font-medium text-gray-700 mb-2 block">
            Naslov
          </Label>
          <Input
            id="subject"
            className="bg-white border-gray-200 text-gray-900"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2 block">
            Vaš upit *
          </Label>
          <Textarea
            id="message"
            className="bg-white border-gray-200 text-gray-900 min-h-[100px]"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="Opišite što vam točno treba, datume i željene lokacije..."
          />
        </div>

        <div className="space-y-4 pt-2">
          <div className="flex items-start space-x-2">
            <Checkbox id="consent1" checked={consent1} onCheckedChange={(c) => setConsent1(c as boolean)} className="mt-1" />
            <label htmlFor="consent1" className="text-sm leading-none text-gray-600 font-normal">
              Pristajem da ova web stranica spremi moje podatke kako bi mogli odgovoriti na moj upit.
            </label>
          </div>
          
          <div className="flex items-start space-x-2">
            <Checkbox id="consent2" checked={consent2} onCheckedChange={(c) => setConsent2(c as boolean)} className="mt-1" />
            <label htmlFor="consent2" className="text-sm leading-none text-gray-600 font-normal">
              Pročitao/la sam Uvjete korištenja i Pravila privatnosti
            </label>
          </div>
        </div>

        <Button type="submit" className="w-full h-12 text-base font-bold uppercase mt-4 bg-primary text-black hover:bg-primary/90">
          POŠALJI
        </Button>
      </form>
    </div>
  );
};

export default BookingForm;
