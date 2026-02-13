import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const PopularBlogs = () => {
  const { t, language } = useLanguage();

  const blogs = [
    {
      title: t.popularBlogs.blog1.title,
      description: t.popularBlogs.blog1.description,
      date: t.popularBlogs.blog1.date,
      slug: "best-palms-dalmatia"
    },
    {
      title: t.popularBlogs.blog2.title,
      description: t.popularBlogs.blog2.description,
      date: t.popularBlogs.blog2.date,
      slug: "plitvice-lakes-trip"
    },
    {
      title: t.popularBlogs.blog3.title,
      description: t.popularBlogs.blog3.description,
      date: t.popularBlogs.blog3.date,
      slug: "istria-hidden-gems"
    },
    {
      title: t.popularBlogs.blog4.title,
      description: t.popularBlogs.blog4.description,
      date: t.popularBlogs.blog4.date,
      slug: "summer-transfer-tips"
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center gap-2 mb-8">
          <FileText className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">{t.popularBlogs.title}</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog, index) => (
            <Link key={index} to={`/${language}/blog/${blog.slug}`}>
              <Card className="hover:border-primary transition-colors cursor-pointer h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{blog.title}</CardTitle>
                  <CardDescription>{blog.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{blog.description}</p>
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
