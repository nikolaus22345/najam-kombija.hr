import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Calendar, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PopularBlogs = () => {
  const { t, getLink } = useLanguage();

  const blogs = [
    {
      title: t.popularBlogs.blog1.title,
      description: t.popularBlogs.blog1.description,
      date: t.popularBlogs.blog1.date,
      slug: "beaches-in-dalmatia",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: t.popularBlogs.blog2.title,
      description: t.popularBlogs.blog2.description,
      date: t.popularBlogs.blog2.date,
      slug: "plitvice-lakes-guide",
      image: "https://images.unsplash.com/photo-1594132328165-1f61fc27c1e3?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: t.popularBlogs.blog3.title,
      description: t.popularBlogs.blog3.description,
      date: t.popularBlogs.blog3.date,
      slug: "hidden-gems-istria",
      image: "https://images.unsplash.com/photo-1601439678777-b2b3c56fa627?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: t.popularBlogs.blog4.title,
      description: t.popularBlogs.blog4.description,
      date: t.popularBlogs.blog4.date,
      slug: "summer-transfer-tips",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80"
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-lg">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground">{t.popularBlogs.title}</h2>
              <p className="text-muted-foreground">Expert travel advice and destination guides</p>
            </div>
          </div>
          <Link to={getLink('/blog')}>
            <Button variant="outline" className="group">
              View All Posts
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((blog, index) => (
            <Link key={index} to={getLink(`/blog/${blog.slug}`)} className="group">
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardHeader className="p-5 pb-2">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-primary font-bold mb-2">
                    <Calendar className="w-3 h-3" />
                    {blog.date}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                    {blog.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-5 pt-0 flex-grow">
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {blog.description}
                  </p>
                  <div className="text-sm font-bold flex items-center gap-1 text-foreground group-hover:gap-2 transition-all">
                    Read Story <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularBlogs;
