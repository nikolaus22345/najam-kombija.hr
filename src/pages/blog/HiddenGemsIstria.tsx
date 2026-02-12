import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HiddenGemsIstria = () => {
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
                            src="https://images.unsplash.com/photo-1601439678777-b2b3c56fa627?auto=format&fit=crop&w=1200&q=80"
                            alt="Istrian hilltop town"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <header className="mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Hidden Gems of Istria: Beyond Rovinj and Pula
                        </h1>
                        <div className="flex items-center gap-6 text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>January 5, 2024</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Zagreb Transfers Team</span>
                            </div>
                        </div>
                    </header>

                    <div className="prose prose-lg max-w-none">
                        <p className="lead text-xl text-muted-foreground mb-6">
                            While Rovinj and Pula attract most visitors to Istria, this heart-shaped peninsula holds countless
                            lesser-known treasures. Discover charming hilltop villages, hidden beaches, and authentic experiences
                            away from the tourist crowds.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Motovun: The Truffle Capital</h2>
                        <p className="text-muted-foreground mb-4">
                            Perched dramatically on a 277-meter hill, Motovun is one of Istria's most picturesque medieval towns.
                            Surrounded by vineyards and the Mirna River valley, this fortified town is famous for its truffles,
                            particularly the rare white truffle found in the surrounding forests. Walk the ancient city walls for
                            panoramic views, explore narrow cobblestone streets, and don't miss trying truffle pasta at one of the
                            local konobas (taverns). The annual Motovun Film Festival in July transforms this quiet town into a
                            vibrant cultural hub.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Grožnjan: The Artists' Village</h2>
                        <p className="text-muted-foreground mb-4">
                            Once an abandoned medieval town, Grožnjan was revitalized in the 1960s when artists began settling here.
                            Today, it's home to over 30 galleries and studios, making it Istria's cultural heart. The car-free old
                            town features stone houses, art galleries, and stunning views over the Mirna valley. Summer brings
                            numerous concerts and exhibitions, particularly during the Jazz Festival. Visit in the morning to watch
                            artists at work in their studios.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Hum: The World's Smallest Town</h2>
                        <p className="text-muted-foreground mb-4">
                            With only about 30 residents, Hum holds the Guinness World Record as the smallest town in the world.
                            Despite its size, this perfectly preserved medieval settlement packs a punch. Walk through the town gate,
                            explore the 12th-century church, and try the famous biska (mistletoe brandy) at the local konoba. The
                            Glagolitic Alley, a 7-km path connecting Hum to Roč, features 11 monuments celebrating the ancient
                            Glagolitic script once used in this region.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Bale: Authentic Istrian Life</h2>
                        <p className="text-muted-foreground mb-4">
                            This charming hilltop town offers an authentic slice of Istrian life without the tourist crowds. The
                            well-preserved old town features Venetian-Gothic architecture, narrow streets, and the impressive Bembo
                            Palace. Bale is also a gateway to some of Istria's best beaches, including the nearby Colone Beach.
                            The town hosts a popular summer festival and is known for excellent local wines and olive oil.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Završje: Hidden Beach Paradise</h2>
                        <p className="text-muted-foreground mb-4">
                            While not a town, Završje beach near Poreč is one of Istria's best-kept secrets. This pebble beach is
                            surrounded by pine forest and features crystal-clear waters perfect for snorkeling. Unlike the crowded
                            beaches in Poreč, Završje offers tranquility and natural beauty. There's a small beach bar, but bring
                            your own supplies for a perfect beach day. The shallow waters make it ideal for families.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Labin: The Town of Artists</h2>
                        <p className="text-muted-foreground mb-4">
                            Overlooking the Kvarner Bay, Labin is divided into two parts: the old town on the hill and the newer
                            Podlabin below. The old town is an open-air gallery with colorful murals, sculptures, and art studios.
                            Once a mining town, Labin has transformed into a cultural center. Visit the Mining Museum to learn about
                            its industrial past, then explore the numerous galleries and craft shops. The views from the town loggia
                            are spectacular.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Svetvinčenat: Medieval Splendor</h2>
                        <p className="text-muted-foreground mb-4">
                            This inland town boasts one of Istria's best-preserved medieval squares, dominated by the impressive
                            Morosini-Grimani Castle. The square hosts the annual Dance and Non-Verbal Theatre Festival, bringing
                            international performers to this small town. The castle is open for tours, and the town's konobas serve
                            excellent traditional Istrian cuisine. It's a perfect stop when exploring inland Istria.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Istrian Culinary Experiences</h2>
                        <p className="text-muted-foreground mb-4">
                            These hidden gems offer authentic Istrian gastronomy. Try maneštra (vegetable soup), fuži (hand-rolled
                            pasta) with truffles or game sauce, and peka (meat or seafood cooked under a bell-shaped lid). Istria
                            is also renowned for its wines - particularly Malvazija (white) and Teran (red) - and high-quality
                            olive oil. Many small towns have family-run konobas serving home-cooked meals using local ingredients.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Planning Your Istrian Adventure</h2>
                        <p className="text-muted-foreground mb-4">
                            The best way to explore these hidden gems is by car, as they're spread across the peninsula. Consider
                            basing yourself in one location and taking day trips, or create a circular route visiting multiple towns.
                            Spring (April-May) and autumn (September-October) offer pleasant weather and fewer tourists. Many small
                            towns have limited accommodation, so book ahead or stay in larger towns like Poreč or Rovinj.
                        </p>

                        <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-lg mt-8">
                            <h3 className="text-xl font-bold text-foreground mb-2">Explore Istria with Comfort</h3>
                            <p className="text-muted-foreground mb-4">
                                Zagreb Transfers offers private transfers to all major Istrian destinations. Whether you're heading
                                to Motovun, Rovinj, or any other Istrian town, we'll get you there comfortably and safely.
                            </p>
                            <Link to={`/${language}/`}>
                                <Button>Book Your Istrian Transfer</Button>
                            </Link>
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
};

export default HiddenGemsIstria;
