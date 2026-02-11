import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const { t } = useLanguage();

  const blogPosts = [
    {
      id: 1,
      title: t.popularBlogs.blog1.title,
      description: t.popularBlogs.blog1.description,
      date: t.popularBlogs.blog1.date,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: t.popularBlogs.blog2.title,
      description: t.popularBlogs.blog2.description,
      date: t.popularBlogs.blog2.date,
      image: "https://images.unsplash.com/photo-1594132328165-1f61fc27c1e3?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: t.popularBlogs.blog3.title,
      description: t.popularBlogs.blog3.description,
      date: t.popularBlogs.blog3.date,
      image: "https://images.unsplash.com/photo-1601439678777-b2b3c56fa627?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: t.popularBlogs.blog4.title,
      description: t.popularBlogs.blog4.description,
      date: t.popularBlogs.blog4.date,
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
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
                {t.popularBlogs.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                Discover travel tips, destination guides, and insider knowledge about Croatia
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-64">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-3">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      {post.description}
                    </p>
                    <Button variant="ghost" className="group">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
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
