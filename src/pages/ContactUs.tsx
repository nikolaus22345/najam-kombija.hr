import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Phone, Mail, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import BookingForm from "@/components/BookingForm";

const ContactUs = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      title: t.contact.phone,
      value: "+385 97 601 9558",
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
            <div className="flex justify-center">
              <BookingForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;
