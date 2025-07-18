import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesCards from "@/components/ServicesCards";
import Portfolio from "@/components/Portfolio";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div id="servicos">
        <ServicesCards />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="contato">
        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default Index;
