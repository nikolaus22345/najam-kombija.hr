import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Phone, Mail, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { z } from "zod";
import { sendEmail } from "@/lib/email";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const ContactUs = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      title: t.contact.phone,
      value: "+385 1 234 5678",
    },
    {
      icon: Mail,
      title: t.contact.email,
      value: "zagrebtransfers.hr@gmail.com",
    },
    {
      icon: MapPin,
      title: t.contact.location,
      value: t.contact.locationValue,
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      // Validate form data
      const validatedData = contactSchema.parse(formData);

      const templateParams = {
        to_email: "zagrebtransfers.hr@gmail.com, nikolacvitanovic.hr@gmail.com",
        from_name: validatedData.name,
        from_email: validatedData.email,
        subject: validatedData.subject,
        message: validatedData.message,
        reply_to: validatedData.email,
      };

      const result = await sendEmail(templateParams);

      if (!result.success) {
        throw new Error("Failed to send email");
      }

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {t.contact.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {t.contact.description}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                    <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {info.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {info.value}
                    </p>
                  </Card>
                );
              })}
            </div>

            {/* Contact Form */}
            <Card className="max-w-2xl mx-auto p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                {t.contact.send}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder={t.contact.namePlaceholder}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    maxLength={100}
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder={t.contact.emailPlaceholder}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={255}
                  />
                </div>
                <div>
                  <Input
                    name="subject"
                    placeholder={t.contact.subjectPlaceholder}
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    maxLength={200}
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder={t.contact.messagePlaceholder}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    maxLength={1000}
                    rows={6}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : t.contact.send}
                </Button>
              </form>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;
