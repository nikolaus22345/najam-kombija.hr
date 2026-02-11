import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Reviews = () => {
  const { t } = useLanguage();

  const reviews = [
    {
      name: t.reviews.review1.name,
      rating: 5,
      text: t.reviews.review1.text,
      date: t.reviews.review1.date,
    },
    {
      name: t.reviews.review2.name,
      rating: 5,
      text: t.reviews.review2.text,
      date: t.reviews.review2.date,
    },
    {
      name: t.reviews.review3.name,
      rating: 5,
      text: t.reviews.review3.text,
      date: t.reviews.review3.date,
    },
    {
      name: t.reviews.review4.name,
      rating: 5,
      text: t.reviews.review4.text,
      date: t.reviews.review4.date,
    },
  ];

  return (
    <section className="py-16 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {t.reviews.title}
          </h2>
          <div className="flex justify-center items-center gap-8 flex-wrap mt-8">
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-2">{t.reviews.google}</div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-primary text-primary" />
                <span className="text-2xl font-bold text-foreground">4.9</span>
                <span className="text-muted-foreground">/5</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-2">{t.reviews.tripadvisor}</div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-primary text-primary" />
                <span className="text-2xl font-bold text-foreground">4.9</span>
                <span className="text-muted-foreground">/5</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-2">{t.reviews.trustpilot}</div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-primary text-primary" />
                <span className="text-2xl font-bold text-foreground">4.8</span>
                <span className="text-muted-foreground">/5</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4">{review.text}</p>
              <div>
                <div className="font-semibold text-foreground">{review.name}</div>
                <div className="text-xs text-muted-foreground">{review.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
