import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-bold tracking-wider border-l-4 border-primary pl-3">
            {t.contact.subtitle}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-4">
            {t.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="bg-card border-border">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{t.contact.phone}</h3>
              <p className="text-muted-foreground">+385 1 234 5678</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{t.contact.email}</h3>
              <p className="text-muted-foreground">info@zagreb-transfers.hr</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{t.contact.location}</h3>
              <p className="text-muted-foreground">{t.contact.locationValue}</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-card border-border max-w-2xl mx-auto">
          <CardContent className="p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input placeholder={t.contact.namePlaceholder} className="bg-background" />
                </div>
                <div>
                  <Input type="email" placeholder={t.contact.emailPlaceholder} className="bg-background" />
                </div>
              </div>
              <div>
                <Input placeholder={t.contact.subjectPlaceholder} className="bg-background" />
              </div>
              <div>
                <Textarea placeholder={t.contact.messagePlaceholder} rows={5} className="bg-background" />
              </div>
              <Button className="w-full" size="lg">
                {t.contact.send}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
