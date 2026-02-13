import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Fleet from "@/components/Fleet";
import Features from "@/components/Features";
import About from "@/components/About";
import Contact from "@/components/Contact";
import PopularRoutes from "@/components/PopularRoutes";
import PopularBlogs from "@/components/PopularBlogs";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Fleet />
      <Features />
      <About />
      <Contact />
      <PopularRoutes />
      <PopularBlogs />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Index;
