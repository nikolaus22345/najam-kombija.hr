import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: BookingContactData) => void;
    vehicleTitle: string;
    price: string;
}

export interface BookingContactData {
    name: string;
    email: string;
    phone: string;
    notes: string;
}

const BookingModal = ({ isOpen, onClose, onSubmit, vehicleTitle, price }: BookingModalProps) => {
    const [formData, setFormData] = useState<BookingContactData>({
        name: "",
        email: "",
        phone: "",
        notes: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Complete Your Booking</DialogTitle>
                    <DialogDescription>
                        Enter your details to finalize your booking for {vehicleTitle}. <br />
                        <strong>Total Price: {price}</strong>
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 py-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                            id="name"
                            placeholder="John Doe"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                            id="phone"
                            type="tel"
                            placeholder="+1 234 567 8900"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="notes">Additional Notes</Label>
                        <Textarea
                            id="notes"
                            placeholder="Flight number, special requests, etc."
                            value={formData.notes}
                            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        />
                    </div>
                    <DialogFooter>
                        <Button type="submit" className="w-full">Confirm Booking</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default BookingModal;
