import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Calendar, ArrowRight, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Blog = () => {
  const { t, getLink } = useLanguage();

  const blogPosts = [
    {
      id: 1,
      title: "10 Best Beaches in Dalmatia",
      description: "Discover the most beautiful beaches on the Croatian coast, from Zlatni Rat to hidden coves in Vis island.",
      date: "January 13, 2024",
      author: "Zagreb Transfers Team",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80",
      slug: "beaches-in-dalmatia",
      category: "Destination"
    },
    {
      id: 2,
      title: "Complete Guide to Visiting Plitvice Lakes",
      description: "Everything you need to know about Croatia's most visited national park, including best times to visit and routes.",
      date: "January 10, 2024",
      author: "Travel Expert",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1594132328165-1f61fc27c1e3?auto=format&fit=crop&w=800&q=80",
      slug: "plitvice-lakes-guide",
      category: "Travel Guide"
    },
    {
      id: 3,
      title: "Hidden Gems of Istria",
      description: "Explore lesser-known places in Croatia's heart-shaped peninsula, including hilltop towns and truffle forests.",
      date: "January 5, 2024",
      author: "Zagreb Transfers Team",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1601439678777-b2b3c56fa627?auto=format&fit=crop&w=800&q=80",
      slug: "hidden-gems-istria",
      category: "Insider Info"
    },
    {
      id: 4,
      title: "Transfer Tips for Summer Season",
      description: "How to organize a safe and comfortable transfer during peak season. Avoid traffic and hidden costs.",
      date: "January 1, 2024",
      author: "Operation Manager",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
      slug: "summer-transfer-tips",
      category: "Tips"
    },
    {
      id: 5,
      title: "Croatian Wine Routes",
      description: "A journey through Croatia's finest vineyards and wine regions, from Pelješac to Slavonia.",
      date: "December 28, 2023",
      author: "Sommelier Guide",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80",
      slug: "croatian-wine-routes",
      category: "Culture"
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-24 uppercase font-sans">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center relative z-10">
              <div className="inline-block bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-black mb-6 uppercase tracking-widest">
                Explore Croatia
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight uppercase">
                Our <span className="text-primary tracking-tighter italic">Travel Blog</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed normal-case">
                Discover local secrets, destination guides, and professional advice for your next journey in Croatia.
              </p>
            </div>
          </div>
          {/* Subtle background overlay */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-primary/10 to-transparent blur-3xl pointer-events-none" />
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {blogPosts.map((post) => (
                <Link key={post.id} to={getLink(`/blog/${post.slug}`)} className="group h-full">
                  <Card className="overflow-hidden border-none shadow-xl group-hover:shadow-2xl transition-all duration-500 h-full flex flex-col bg-white rounded-2xl relative">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                        {post.category}
                      </div>
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    <div className="p-8 flex-grow flex flex-col">
                      <div className="flex items-center gap-4 text-[10px] text-muted-foreground mb-4 font-black uppercase tracking-widest">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-primary" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-primary" />
                          {post.readTime}
                        </div>
                      </div>

                      <h2 className="text-2xl font-black text-gray-900 mb-4 leading-tight group-hover:text-primary transition-colors duration-300 uppercase">
                        {post.title}
                      </h2>

                      <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed normal-case text-sm">
                        {post.description}
                      </p>

                      <div className="mt-auto pt-6 border-t flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                            <User className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-[10px] font-black text-gray-700 uppercase">{post.author}</span>
                        </div>
                        <div className="bg-primary/20 text-primary p-2 rounded-full group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
