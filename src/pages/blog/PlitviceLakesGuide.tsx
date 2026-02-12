import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PlitviceLakesGuide = () => {
    const { language } = useLanguage();

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="pt-24 pb-16">
                <article className="container mx-auto px-4 lg:px-8 max-w-4xl">
                    <Link to={`/${language}/blog`}>
                        <Button variant="ghost" className="mb-6">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Blog
                        </Button>
                    </Link>

                    <div className="relative h-96 rounded-xl overflow-hidden mb-8">
                        <img
                            src="https://images.unsplash.com/photo-1594132328165-1f61fc27c1e3?auto=format&fit=crop&w=1200&q=80"
                            alt="Plitvice Lakes"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <header className="mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Complete Guide to Visiting Plitvice Lakes National Park
                        </h1>
                        <div className="flex items-center gap-6 text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>January 10, 2024</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Zagreb Transfers Team</span>
                            </div>
                        </div>
                    </header>

                    <div className="prose prose-lg max-w-none">
                        <p className="lead text-xl text-muted-foreground mb-6">
                            Plitvice Lakes National Park is Croatia's most visited natural attraction and a UNESCO World Heritage Site.
                            This comprehensive guide will help you plan the perfect visit to this stunning natural wonder.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">About Plitvice Lakes</h2>
                        <p className="text-muted-foreground mb-4">
                            Plitvice Lakes National Park consists of 16 terraced lakes connected by waterfalls, set in a deep woodland
                            valley. The lakes are renowned for their distinctive colors, ranging from azure to green, grey, or blue,
                            depending on the minerals and organisms in the water and the angle of sunlight. The park covers 296.85
                            square kilometers and is home to diverse flora and fauna, including bears, wolves, and rare bird species.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">When to Visit</h2>
                        <p className="text-muted-foreground mb-4">
                            <strong>Spring (April-May):</strong> The waterfalls are at their most powerful due to snowmelt. The park
                            is lush and green, though weather can be unpredictable. Fewer crowds than summer.
                        </p>
                        <p className="text-muted-foreground mb-4">
                            <strong>Summer (June-August):</strong> Peak season with the warmest weather and longest days. Expect large
                            crowds, especially in July and August. Book tickets and accommodation well in advance.
                        </p>
                        <p className="text-muted-foreground mb-4">
                            <strong>Autumn (September-October):</strong> Many consider this the best time to visit. Beautiful fall
                            colors, pleasant temperatures, and fewer tourists. September is particularly lovely.
                        </p>
                        <p className="text-muted-foreground mb-4">
                            <strong>Winter (November-March):</strong> The park takes on a magical quality with frozen waterfalls and
                            snow-covered landscapes. Much quieter, but some trails may be closed. Dress warmly!
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Hiking Routes</h2>
                        <p className="text-muted-foreground mb-4">
                            The park offers several marked routes varying in length and difficulty:
                        </p>
                        <p className="text-muted-foreground mb-4">
                            <strong>Route A (2-3 hours):</strong> The shortest route covering the Lower Lakes. Perfect for families
                            with young children or those with limited time. Distance: 3.5 km.
                        </p>
                        <p className="text-muted-foreground mb-4">
                            <strong>Route B (3-4 hours):</strong> Covers the Lower Lakes with a boat ride and panoramic train.
                            A good balance of sights and duration. Distance: 4 km.
                        </p>
                        <p className="text-muted-foreground mb-4">
                            <strong>Route C (4-5 hours):</strong> Includes both Upper and Lower Lakes with boat and train rides.
                            The most popular route offering comprehensive park experience. Distance: 8 km.
                        </p>
                        <p className="text-muted-foreground mb-4">
                            <strong>Route K (6-8 hours):</strong> The longest route covering the entire park. For experienced hikers
                            who want to see everything. Distance: 18.3 km.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Practical Tips</h2>
                        <p className="text-muted-foreground mb-4">
                            <strong>Tickets:</strong> Book online in advance, especially during peak season. Tickets are time-slotted
                            to manage visitor numbers. Prices vary by season (higher in summer).
                        </p>
                        <p className="text-muted-foreground mb-4">
                            <strong>Entrances:</strong> There are two main entrances - Entrance 1 (Lower Lakes) and Entrance 2
                            (Upper Lakes). Most visitors start at Entrance 1.
                        </p>
                        <p className="text-muted-foreground mb-4">
                            <strong>What to Bring:</strong> Comfortable walking shoes with good grip (wooden walkways can be slippery),
                            water bottle, snacks, rain jacket, sunscreen, and camera. Swimming is not allowed in the lakes.
                        </p>
                        <p className="text-muted-foreground mb-4">
                            <strong>Food:</strong> There are restaurants and snack bars at both entrances and within the park. However,
                            prices are higher than outside the park. You can bring your own food.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Photography Tips</h2>
                        <p className="text-muted-foreground mb-4">
                            The best light for photography is early morning or late afternoon. The wooden walkways provide excellent
                            vantage points for waterfall shots. Bring a polarizing filter to reduce water reflections and enhance
                            colors. A tripod can be useful for long exposures of waterfalls, but be mindful of other visitors on
                            narrow walkways.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Nearby Attractions</h2>
                        <p className="text-muted-foreground mb-4">
                            If you have extra time, consider visiting Rastoke, a picturesque village with waterfalls located about
                            30 km from Plitvice. The Barać Caves are also nearby and worth a visit. For accommodation, the towns of
                            Slunj and Rakovica offer various options.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Getting to Plitvice Lakes</h2>
                        <p className="text-muted-foreground mb-4">
                            Plitvice Lakes is located roughly halfway between Zagreb and Zadar, about 140 km from Zagreb. While
                            accessible by bus, the most convenient option is a private transfer, especially if you're traveling
                            with family or want flexibility with your schedule.
                        </p>

                        <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-lg mt-8">
                            <h3 className="text-xl font-bold text-foreground mb-2">Book Your Plitvice Transfer</h3>
                            <p className="text-muted-foreground mb-4">
                                Zagreb Transfers offers comfortable private transfers from Zagreb, Split, Zadar, and other Croatian
                                cities to Plitvice Lakes. We can arrange day trips or one-way transfers to fit your itinerary.
                            </p>
                            <Link to={`/${language}/transfers/zagreb-to-plitvice-lakes`}>
                                <Button>Book Zagreb to Plitvice Transfer</Button>
                            </Link>
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
};

export default PlitviceLakesGuide;
