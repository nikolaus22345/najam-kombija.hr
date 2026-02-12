import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SummerTransferTips = () => {
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
                            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80"
                            alt="Summer travel in Croatia"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <header className="mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Essential Transfer Tips for Summer Travel in Croatia
                        </h1>
                        <div className="flex items-center gap-6 text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>January 1, 2024</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Zagreb Transfers Team</span>
                            </div>
                        </div>
                    </header>

                    <div className="prose prose-lg max-w-none">
                        <p className="lead text-xl text-muted-foreground mb-6">
                            Summer is peak season in Croatia, bringing warm weather, vibrant festivals, and unfortunately, heavy
                            traffic. Here's how to organize safe and comfortable transfers during the busiest time of year.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Book Early - Very Early</h2>
                        <p className="text-muted-foreground mb-4">
                            During July and August, Croatia sees millions of tourists. Private transfer companies, rental cars, and
                            even taxis can be fully booked weeks in advance. We recommend booking your transfers at least 4-6 weeks
                            before your trip, especially for popular routes like Split to Dubrovnik or Zagreb to coastal destinations.
                            Early booking not only guarantees availability but often comes with better rates.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Avoid Peak Travel Times</h2>
                        <p className="text-muted-foreground mb-4">
                            The coastal highway (Jadranska magistrala) can become extremely congested during peak hours. Saturday is
                            the busiest day as it's the standard changeover day for vacation rentals. If possible, schedule your
                            transfers for early morning (before 8 AM) or late afternoon (after 6 PM). Midweek travel is generally
                            smoother than weekends. For airport transfers, factor in extra time during summer - what takes 30 minutes
                            in winter might take an hour in August.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Plan for Ferry Delays</h2>
                        <p className="text-muted-foreground mb-4">
                            If your transfer involves a ferry to an island, summer brings long queues and potential delays. Ferries
                            to popular islands like Hvar, Brač, and Korčula can have 2-3 hour waits during peak season. Your transfer
                            driver should arrive at the ferry port well in advance, but build extra time into your schedule. For
                            critical connections (like catching a flight), consider arriving a day earlier or choosing a route that
                            doesn't require a ferry.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Stay Hydrated and Comfortable</h2>
                        <p className="text-muted-foreground mb-4">
                            Croatian summers are hot, with temperatures often exceeding 30°C (86°F). Ensure your transfer vehicle
                            has working air conditioning - this should be standard, but confirm when booking. Bring water bottles,
                            especially for longer journeys. Light, breathable clothing is essential. If traveling with children,
                            bring snacks and entertainment as traffic delays can extend journey times.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Communicate Flight Details</h2>
                        <p className="text-muted-foreground mb-4">
                            Always provide your flight number when booking airport transfers. Professional transfer companies monitor
                            flights and adjust pickup times if your flight is delayed. For departures, discuss appropriate pickup
                            times with your driver, factoring in summer traffic. For international flights, we recommend arriving at
                            the airport 3 hours before departure during peak season, as security lines can be long.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Consider Alternative Routes</h2>
                        <p className="text-muted-foreground mb-4">
                            Experienced drivers know alternative routes that avoid the worst congestion. The coastal road is scenic
                            but slow in summer. For some routes, the highway (autocesta) is faster despite being less picturesque.
                            Trust your driver's local knowledge - they make these journeys daily and know which routes work best at
                            different times.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Pack Smart for Transfers</h2>
                        <p className="text-muted-foreground mb-4">
                            Keep essentials accessible during your transfer: water, snacks, medications, phone charger, and
                            entertainment. If you have valuable items or important documents, keep them in your carry-on rather than
                            checked luggage. Sunscreen and sunglasses are essential if you'll be making stops along the way. A light
                            jacket can be useful as air conditioning in vehicles can be quite cold.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Take Advantage of Stops</h2>
                        <p className="text-muted-foreground mb-4">
                            Longer transfers (over 2 hours) should include rest stops. Good drivers will offer stops at scenic
                            viewpoints, rest areas, or interesting towns along the route. This is particularly important when
                            traveling with children or elderly passengers. Popular stops include Rastoke village (Zagreb to coast),
                            Trogir (Split to Dubrovnik), or various viewpoints along the coastal road.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Understand Pricing</h2>
                        <p className="text-muted-foreground mb-4">
                            Summer rates are typically higher than off-season prices due to increased demand. Be wary of prices that
                            seem too good to be true - they often are. Reputable companies provide fixed prices that include all costs
                            (tolls, fuel, waiting time). Confirm what's included in your quote. Tips are appreciated but not mandatory
                            - 10% is standard for excellent service.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Have a Backup Plan</h2>
                        <p className="text-muted-foreground mb-4">
                            Despite best planning, things can go wrong - traffic accidents, vehicle breakdowns, or extreme weather.
                            Reputable transfer companies have backup vehicles and drivers. Save your driver's contact number and the
                            company's emergency line. For critical connections, consider travel insurance that covers missed
                            connections due to transfer delays.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Respect Your Driver</h2>
                        <p className="text-muted-foreground mb-4">
                            Your driver is a professional working long hours during summer. They're dealing with the same heat and
                            traffic as you, plus the responsibility of getting you safely to your destination. Be patient if there
                            are delays - they're usually beyond the driver's control. Many drivers are excellent sources of local
                            information and recommendations, so don't hesitate to ask questions.
                        </p>

                        <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-lg mt-8">
                            <h3 className="text-xl font-bold text-foreground mb-2">Book Your Summer Transfer Now</h3>
                            <p className="text-muted-foreground mb-4">
                                Zagreb Transfers offers reliable, comfortable private transfers throughout Croatia. Our professional
                                drivers know the best routes and timing for summer travel. Book early to secure your preferred dates
                                and times.
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

export default SummerTransferTips;
