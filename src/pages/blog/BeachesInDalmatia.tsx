import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BeachesInDalmatia = () => {
    const { language } = useLanguage();

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="pt-24 pb-16">
                <article className="container mx-auto px-4 lg:px-8 max-w-4xl">
                    {/* Back button */}
                    <Link to={`/${language}/blog`}>
                        <Button variant="ghost" className="mb-6">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Blog
                        </Button>
                    </Link>

                    {/* Hero Image */}
                    <div className="relative h-96 rounded-xl overflow-hidden mb-8">
                        <img
                            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1200&q=80"
                            alt="Croatian beach"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Article Header */}
                    <header className="mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                            10 Best Beaches in Dalmatia
                        </h1>
                        <div className="flex items-center gap-6 text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>January 13, 2024</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Zagreb Transfers Team</span>
                            </div>
                        </div>
                    </header>

                    {/* Article Content */}
                    <div className="prose prose-lg max-w-none">
                        <p className="lead text-xl text-muted-foreground mb-6">
                            Discover the most beautiful beaches on the Croatian coast. From hidden coves to popular tourist spots,
                            Dalmatia offers some of the most stunning beaches in the Mediterranean.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Zlatni Rat (Golden Horn) - Brač</h2>
                        <p className="text-muted-foreground mb-4">
                            Perhaps the most famous beach in Croatia, Zlatni Rat is a unique V-shaped pebble beach that changes
                            shape with the currents and winds. Located near Bol on the island of Brač, this beach offers crystal-clear
                            waters perfect for swimming and windsurfing. The surrounding pine forest provides natural shade, making it
                            ideal for all-day beach visits.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Stiniva Beach - Vis</h2>
                        <p className="text-muted-foreground mb-4">
                            Voted as Europe's best beach in 2016, Stiniva is a small pebble beach hidden in a narrow cove on the island
                            of Vis. Accessible by a steep path or by boat, this secluded paradise offers turquoise waters surrounded by
                            dramatic cliffs. The beach is small, so arrive early during peak season.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Sakarun Beach - Dugi Otok</h2>
                        <p className="text-muted-foreground mb-4">
                            Unlike most Croatian beaches, Sakarun features fine white sand and shallow turquoise waters, reminiscent
                            of Caribbean beaches. Located on the island of Dugi Otok, this 800-meter-long beach is surrounded by pine
                            forests and offers excellent facilities including beach bars and water sports equipment rental.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Punta Rata - Brela</h2>
                        <p className="text-muted-foreground mb-4">
                            Consistently ranked among the most beautiful beaches in the world, Punta Rata features white pebbles and
                            crystal-clear waters backed by pine trees. The iconic rock formation rising from the sea has become a
                            symbol of the Makarska Riviera. The beach offers excellent swimming conditions and stunning views of the
                            Biokovo mountain range.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Banje Beach - Dubrovnik</h2>
                        <p className="text-muted-foreground mb-4">
                            Located just outside Dubrovnik's Old Town, Banje Beach offers spectacular views of the city walls and
                            Lokrum Island. This pebble beach features excellent facilities including sun loungers, beach bars, and
                            water sports. It's the perfect spot to relax after exploring Dubrovnik's historic center.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Sveti Jakov Beach - Dubrovnik</h2>
                        <p className="text-muted-foreground mb-4">
                            A hidden gem near Dubrovnik, Sveti Jakov is a quieter alternative to Banje Beach. Accessible via 150 steps,
                            this pebble beach offers stunning views of Dubrovnik's Old Town from a different perspective. The clear
                            waters and peaceful atmosphere make it worth the climb.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. Pakleni Islands - Hvar</h2>
                        <p className="text-muted-foreground mb-4">
                            Just off the coast of Hvar Town, the Pakleni Islands archipelago offers numerous beautiful beaches and
                            coves. Palmižana and Mlini are particularly popular, offering beach clubs, restaurants, and water sports.
                            Take a water taxi from Hvar to explore these island paradises.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. Nugal Beach - Makarska</h2>
                        <p className="text-muted-foreground mb-4">
                            A naturist beach located between Makarska and Tučepi, Nugal is accessible via a scenic 30-minute hike
                            through pine forest. The effort is rewarded with a stunning pebble beach surrounded by cliffs, offering
                            privacy and pristine waters. Note that this is an official naturist beach.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">9. Proizd Beach - Vela Luka, Korčula</h2>
                        <p className="text-muted-foreground mb-4">
                            Located on a small uninhabited island near Vela Luka, Proizd offers two beautiful beaches on opposite
                            sides of the island. The beaches feature fine pebbles and incredibly clear waters. A small beach bar
                            provides refreshments, and the island is easily accessible by boat from Vela Luka.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">10. Lubenice Beach - Cres</h2>
                        <p className="text-muted-foreground mb-4">
                            One of the most dramatic beaches in Croatia, Lubenice is located below the medieval village of the same
                            name on the island of Cres. Accessible via a steep 30-minute hike or by boat, this remote pebble beach
                            offers stunning views and complete tranquility. The effort to reach it ensures it's never crowded.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Getting to These Beaches</h2>
                        <p className="text-muted-foreground mb-4">
                            Many of these beaches are located on islands or in remote locations. Zagreb Transfers offers comfortable
                            private transfers to ferry ports and coastal towns, making your beach-hopping adventure stress-free.
                            We can arrange transfers from Zagreb, Split, Dubrovnik, or any other location in Croatia to help you
                            reach these stunning destinations.
                        </p>

                        <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-lg mt-8">
                            <h3 className="text-xl font-bold text-foreground mb-2">Planning Your Beach Trip?</h3>
                            <p className="text-muted-foreground mb-4">
                                Let us handle your transportation while you focus on enjoying Croatia's beautiful coastline.
                                We offer transfers to all major coastal destinations and ferry ports.
                            </p>
                            <Link to={`/${language}/`}>
                                <Button>Book Your Transfer</Button>
                            </Link>
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
};

export default BeachesInDalmatia;
