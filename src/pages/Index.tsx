import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import Fleet from "@/components/Fleet";
import Features from "@/components/Features";
import About from "@/components/About";
import Contact from "@/components/Contact";
import LocalSeoCities from "@/components/LocalSeoCities";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Fleet />
      <Services />
      <Packages />
      <Features />
      <About />
      <Contact />
      <LocalSeoCities />
      <Footer />
    </div>
  );
};

export default Index;
