import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CroatianWineRoutes = () => {
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
                            src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=80"
                            alt="Croatian vineyard"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <header className="mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Exploring Croatian Wine Routes: A Journey Through Vineyards
                        </h1>
                        <div className="flex items-center gap-6 text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>December 28, 2023</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Zagreb Transfers Team</span>
                            </div>
                        </div>
                    </header>

                    <div className="prose prose-lg max-w-none">
                        <p className="lead text-xl text-muted-foreground mb-6">
                            Croatia's wine tradition dates back over 2,500 years, with diverse regions producing unique wines.
                            From the continental vineyards of Slavonia to the sun-drenched islands of Dalmatia, discover Croatia's
                            finest wine routes and the stories behind them.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Istrian Wine Route: Malvazija and More</h2>
                        <p className="text-muted-foreground mb-4">
                            Istria is Croatia's premier wine region, particularly famous for Malvazija Istarska, a crisp white wine
                            perfect with seafood. The region also produces excellent Teran, a robust red wine with high acidity.
                            Start in Motovun, where hillside vineyards produce exceptional wines. Visit family-run wineries like
                            Kozlović, Matošević, or Trapan, where you can tour cellars and taste wines paired with local cheeses
                            and prosciutto. The towns of Grožnjan and Buje offer stunning vineyard views and numerous tasting rooms.
                            Don't miss trying orange wines - white wines fermented with grape skins, an ancient technique seeing a
                            modern revival in Istria.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Pelješac Peninsula: Home of Dingač and Postup</h2>
                        <p className="text-muted-foreground mb-4">
                            The Pelješac Peninsula, north of Dubrovnik, is renowned for powerful red wines made from the indigenous
                            Plavac Mali grape. The steep vineyards of Dingač and Postup produce some of Croatia's most prestigious
                            wines. These south-facing slopes, where grapes receive reflected heat from the sea and stone walls,
                            create wines of exceptional concentration and complexity. Visit wineries like Grgić (founded by
                            Californian wine legend Mike Grgich), Saints Hills, or Matuško. The town of Ston, famous for its
                            medieval walls and oysters, is the perfect base for exploring Pelješac wines. Pair these robust reds
                            with local lamb or peka-cooked dishes.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Korčula Island: Pošip and Grk</h2>
                        <p className="text-muted-foreground mb-4">
                            The island of Korčula produces two exceptional indigenous white wines. Pošip, grown around Čara and
                            Smokvica, is a full-bodied white with notes of stone fruit and almonds. Grk, cultivated exclusively
                            in the sandy soils of Lumbarda, is one of the world's rarest wines - the vines are all female and
                            require specific pollination conditions. Visit Bire winery in Lumbarda for Grk tastings, or Toreta
                            winery for excellent Pošip. The medieval town of Korčula provides a stunning backdrop for wine tasting,
                            with many konobas offering local wines by the glass.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Hvar Island: Sunny Vineyards</h2>
                        <p className="text-muted-foreground mb-4">
                            Hvar, Croatia's sunniest island, has been producing wine since ancient Greek times. The Stari Grad Plain,
                            a UNESCO World Heritage Site, contains some of the oldest continuously cultivated vineyards in Europe.
                            Plavac Mali dominates red wine production, while Bogdanuša is the signature white grape. Visit Tomić
                            winery in Jelsa for organic wines and spectacular views, or Zlatan Otok in Sveta Nedjelja for premium
                            Plavac Mali. The town of Vrboska, known as "Little Venice," hosts several excellent wine bars. Hvar's
                            wines pair beautifully with fresh fish and the island's famous lavender honey.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Slavonia: Continental Elegance</h2>
                        <p className="text-muted-foreground mb-4">
                            Eastern Croatia's Slavonia region produces elegant wines quite different from coastal varieties. The
                            continental climate suits international varieties like Riesling, Traminer, and Pinot Noir, alongside
                            indigenous Graševina (Welschriesling). The Kutjevo wine region has been producing wine since 1232, when
                            Cistercian monks planted the first vineyards. Visit Krauthaker winery for exceptional Graševina and
                            ice wines, or Enjingi for innovative blends. The baroque town of Ilok, on the Danube, is home to the
                            historic Ilok Cellars, where Traminer has been produced since 1450. Slavonian wines pair perfectly with
                            the region's hearty cuisine - kulen (spicy sausage), fish paprikash, and freshwater fish.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Plešivica: Zagreb's Wine Country</h2>
                        <p className="text-muted-foreground mb-4">
                            Just 25 km southwest of Zagreb, the Plešivica hills produce excellent sparkling wines and crisp whites.
                            The cool climate and limestone soils create ideal conditions for traditional method sparkling wines.
                            Tomac winery is renowned for its Champagne-style sparklers, while Korak produces excellent Chardonnay
                            and Pinot Noir. This region is perfect for a day trip from Zagreb, with many wineries offering tours
                            and tastings. The village of Plešivica hosts an annual wine festival in September, celebrating the
                            harvest with music, food, and, of course, plenty of wine.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Wine Tasting Etiquette and Tips</h2>
                        <p className="text-muted-foreground mb-4">
                            Most Croatian wineries welcome visitors, but it's essential to call ahead and book tastings, especially
                            at smaller family operations. Tastings typically cost 5-15 euros per person and often include 4-6 wines
                            paired with local cheeses, prosciutto, or olive oil. Many winemakers speak English and love sharing
                            their passion and knowledge. Don't feel obligated to buy wine, but if you enjoy what you taste,
                            purchasing a bottle or two supports these small producers. Many wineries can ship internationally if
                            you fall in love with a particular wine.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Best Time for Wine Tourism</h2>
                        <p className="text-muted-foreground mb-4">
                            While wineries operate year-round, the best times for wine tourism are spring (April-May) and autumn
                            (September-October). Spring brings beautiful vineyard landscapes with flowering vines, while autumn
                            offers harvest season excitement and wine festivals. Summer is pleasant but can be hot, especially in
                            coastal regions. Winter tastings have their charm, particularly in Istria and Slavonia, where wineries
                            offer cozy cellar experiences paired with hearty local food.
                        </p>

                        <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-lg mt-8">
                            <h3 className="text-xl font-bold text-foreground mb-2">Wine Route Transfers</h3>
                            <p className="text-muted-foreground mb-4">
                                Exploring wine regions is best done with a designated driver. Zagreb Transfers offers private wine
                                tour transfers to all major Croatian wine regions. Enjoy tastings worry-free while we handle the
                                driving. We can arrange custom itineraries visiting multiple wineries in a day.
                            </p>
                            <Link to={`/${language}/`}>
                                <Button>Book Your Wine Tour Transfer</Button>
                            </Link>
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
};

export default CroatianWineRoutes;
