import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PopularBlogs = () => {
  const { t } = useLanguage();

  const blogs = [
    {
      title: t.popularBlogs.blog1.title,
      description: t.popularBlogs.blog1.description,
      date: t.popularBlogs.blog1.date,
    },
    {
      title: t.popularBlogs.blog2.title,
      description: t.popularBlogs.blog2.description,
      date: t.popularBlogs.blog2.date,
    },
    {
      title: t.popularBlogs.blog3.title,
      description: t.popularBlogs.blog3.description,
      date: t.popularBlogs.blog3.date,
    },
    {
      title: t.popularBlogs.blog4.title,
      description: t.popularBlogs.blog4.description,
      date: t.popularBlogs.blog4.date,
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
            <Card key={index} className="hover:border-primary transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">{blog.title}</CardTitle>
                <CardDescription>{blog.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{blog.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularBlogs;
