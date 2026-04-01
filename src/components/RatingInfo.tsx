import { Star, Info } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface RatingInfoProps {
  seedText: string;
  basePrice?: number;
}

const RatingInfo = ({ seedText, basePrice }: RatingInfoProps) => {
  const { language } = useLanguage();
  
  const getDeterministicRating = (text: string) => {
    const seed = text.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const rating = 4.6 + (seed % 4) / 10;
    const reviews = 12 + (seed % 238);
    return { rating, reviews };
  };

  const { rating, reviews } = getDeterministicRating(seedText);
  const ratingStr = rating.toFixed(1).replace('.', ',');

  return (
    <div className="flex flex-col gap-4 mb-8">
      <div className="flex items-center justify-center lg:justify-start gap-2">
        <span className="text-xl font-bold text-primary">{ratingStr}</span>
        <div className="flex text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-5 h-5 ${i < Math.floor(rating) ? 'fill-current' : 'text-gray-300'}`} 
            />
          ))}
        </div>
        <span className="text-muted-foreground">({reviews})</span>
        <Info className="w-4 h-4 text-muted-foreground cursor-help" />
      </div>

      <div className="flex items-center justify-center lg:justify-start gap-6">
        {basePrice && (
          <div className="flex flex-col items-center lg:items-start">
            <p className="text-sm text-muted-foreground">
              {language === 'hr' ? 'Cijena od' : 'Price from'}
            </p>
            <p className="text-lg font-semibold">€{basePrice}</p>
          </div>
        )}
        <div className="flex flex-col items-center lg:items-start">
          <p className="text-sm text-muted-foreground">
            {language === 'hr' ? 'Raspon cijena' : 'Price range'}
          </p>
          <div className="flex items-center gap-1">
            <p className="text-lg font-semibold text-primary">$$</p>
            <Info className="w-3 h-3 text-muted-foreground" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingInfo;
