import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircle, Send, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/lib/email";
import { useSearchParams } from "react-router-dom";
import LocationAutocomplete from "@/components/LocationAutocomplete";

const GetQuote = () => {
    const { toast } = useToast();
    const [searchParams] = useSearchParams();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        pickup: "",
        dropoff: "",
        date: "",
        returnDate: "",
        passengers: "1",
        luggage: "",
        transferType: "one-way",
        vehiclePreference: "any",
        additionalInfo: ""
    });

    useEffect(() => {
        // Populate form from URL parameters if present
        const pickupParam = searchParams.get("pickup");
        const dropoffParam = searchParams.get("dropoff");
        const vehicleParam = searchParams.get("vehicle");

        setFormData(prev => ({
            ...prev,
            pickup: pickupParam || prev.pickup,
            dropoff: dropoffParam || prev.dropoff,
            vehiclePreference: vehicleParam ? vehicleParam.toLowerCase() : prev.vehiclePreference
        }));
    }, [searchParams]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validacija
        if (!formData.name || !formData.email || !formData.phone || !formData.pickup || !formData.dropoff || !formData.date) {
            toast({
                title: "Missing Information",
                description: "Please fill in all required fields",
                variant: "destructive",
            });
            return;
        }

        const templateParams = {
            to_email: "info@zagreb-transfers.hr",
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            message: `
        QUOTE REQUEST
        
        Route:
        From: ${formData.pickup}
        To: ${formData.dropoff}
        
        Dates:
        Departure: ${formData.date}
        ${formData.transferType === "return" ? `Return: ${formData.returnDate}` : ""}
        
        Details:
        Passengers: ${formData.passengers}
        Luggage: ${formData.luggage || "Not specified"}
        Transfer Type: ${formData.transferType}
        Vehicle Preference: ${formData.vehiclePreference}
        
        Additional Info:
        ${formData.additionalInfo || "None"}
      `,
            reply_to: formData.email,
        };

        const result = await sendEmail(templateParams);

        if (result.success) {
            toast({
                title: "Request Sent!",
                description: "We'll send you a quote within 24 hours",
            });
            setFormData({
                name: "", email: "", phone: "", pickup: "", dropoff: "", date: "",
                returnDate: "", passengers: "1", luggage: "", transferType: "one-way",
                vehiclePreference: "any", additionalInfo: ""
            });
        } else {
            toast({
                title: "Error",
                description: "Failed to send quote request. Please try again.",
                variant: "destructive",
            });
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 pt-20 pb-16">
                <section className="py-12 bg-gradient-to-br from-primary/10 via-background to-background">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center mb-8">
                            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                                Get a Free Quote
                            </h1>
                            <p className="text-lg text-muted-foreground">
                                Fill out the form below and we'll send you a personalized quote within 24 hours
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
                            <Card>
                                <CardContent className="pt-6 text-center">
                                    <Clock className="w-12 h-12 text-primary mx-auto mb-3" />
                                    <h3 className="font-semibold mb-2">Quick Response</h3>
                                    <p className="text-sm text-muted-foreground">Get your quote within 24 hours</p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="pt-6 text-center">
                                    <CheckCircle className="w-12 h-12 text-primary mx-auto mb-3" />
                                    <h3 className="font-semibold mb-2">Best Prices</h3>
                                    <p className="text-sm text-muted-foreground">Competitive rates, no hidden fees</p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="pt-6 text-center">
                                    <Phone className="w-12 h-12 text-primary mx-auto mb-3" />
                                    <h3 className="font-semibold mb-2">24/7 Support</h3>
                                    <p className="text-sm text-muted-foreground">We're always here to help</p>
                                </CardContent>
                            </Card>
                        </div>

                        <Card className="max-w-3xl mx-auto">
                            <CardHeader>
                                <CardTitle>Request Your Quote</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Contact Information */}
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold">Contact Information</h3>

                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div>
                                                <Label htmlFor="name">Full Name *</Label>
                                                <Input
                                                    id="name"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <Label htmlFor="email">Email *</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <Label htmlFor="phone">Phone Number *</Label>
                                                <Input
                                                    id="phone"
                                                    type="tel"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Trip Details */}
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold">Trip Details</h3>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <LocationAutocomplete
                                                id="pickup"
                                                label="Pickup Location *"
                                                value={formData.pickup}
                                                onChange={(value) => setFormData({ ...formData, pickup: value })}
                                                placeholder="e.g., Zagreb Airport"
                                            />

                                            <LocationAutocomplete
                                                id="dropoff"
                                                label="Drop-off Location *"
                                                value={formData.dropoff}
                                                onChange={(value) => setFormData({ ...formData, dropoff: value })}
                                                placeholder="e.g., Split City Center"
                                            />
                                        </div>

                                        <div>
                                            <Label className="mb-3 block">Transfer Type *</Label>
                                            <RadioGroup
                                                value={formData.transferType}
                                                onValueChange={(value) => setFormData({ ...formData, transferType: value })}
                                            >
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="one-way" id="oneway" />
                                                    <Label htmlFor="oneway" className="font-normal cursor-pointer">
                                                        One way
                                                    </Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="return" id="return-trip" />
                                                    <Label htmlFor="return-trip" className="font-normal cursor-pointer">
                                                        Round trip (with return)
                                                    </Label>
                                                </div>
                                            </RadioGroup>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <Label htmlFor="date">Departure Date *</Label>
                                                <Input
                                                    id="date"
                                                    type="date"
                                                    value={formData.date}
                                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                                    min={new Date().toISOString().split('T')[0]}
                                                    required
                                                />
                                            </div>

                                            {formData.transferType === "return" && (
                                                <div>
                                                    <Label htmlFor="returnDate">Return Date</Label>
                                                    <Input
                                                        id="returnDate"
                                                        type="date"
                                                        value={formData.returnDate}
                                                        onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
                                                        min={formData.date || new Date().toISOString().split('T')[0]}
                                                    />
                                                </div>
                                            )}
                                        </div>

                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div>
                                                <Label htmlFor="passengers">Passengers *</Label>
                                                <Input
                                                    id="passengers"
                                                    type="number"
                                                    min="1"
                                                    max="50"
                                                    value={formData.passengers}
                                                    onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <Label htmlFor="luggage">Luggage Pieces</Label>
                                                <Input
                                                    id="luggage"
                                                    type="number"
                                                    min="0"
                                                    value={formData.luggage}
                                                    onChange={(e) => setFormData({ ...formData, luggage: e.target.value })}
                                                    placeholder="Optional"
                                                />
                                            </div>

                                            <div>
                                                <Label htmlFor="vehicle">Vehicle Preference</Label>
                                                <select
                                                    id="vehicle"
                                                    value={formData.vehiclePreference}
                                                    onChange={(e) => setFormData({ ...formData, vehiclePreference: e.target.value })}
                                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground"
                                                >
                                                    <option value="any">Any</option>
                                                    <option value="sedan">Sedan</option>
                                                    <option value="minivan">Minivan</option>
                                                    <option value="minibus">Minibus</option>
                                                    <option value="bus">Bus</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Additional Information */}
                                    <div>
                                        <Label htmlFor="additionalInfo">Additional Information</Label>
                                        <Textarea
                                            id="additionalInfo"
                                            value={formData.additionalInfo}
                                            onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                                            placeholder="Any special requirements? Child seats, wheelchair access, stops along the way, etc."
                                            className="min-h-24"
                                        />
                                    </div>

                                    <Button type="submit" size="lg" className="w-full">
                                        <Send className="w-5 h-5 mr-2" />
                                        Send Quote Request
                                    </Button>

                                    <p className="text-sm text-muted-foreground text-center">
                                        We'll respond within 24 hours with a detailed quote for your transfer
                                    </p>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Contact Info */}
                        <div className="max-w-3xl mx-auto mt-12">
                            <Card>
                                <CardContent className="pt-6">
                                    <h3 className="text-lg font-semibold mb-4 text-center">
                                        Prefer to Contact Us Directly?
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="flex items-center gap-3 justify-center">
                                            <Phone className="w-5 h-5 text-primary" />
                                            <div>
                                                <p className="text-sm text-muted-foreground">Call or WhatsApp</p>
                                                <p className="font-semibold">+385 97 601 9558</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 justify-center">
                                            <Mail className="w-5 h-5 text-primary" />
                                            <div>
                                                <p className="text-sm text-muted-foreground">Email</p>
                                                <p className="font-semibold">info@zagrebtransfers.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default GetQuote;
