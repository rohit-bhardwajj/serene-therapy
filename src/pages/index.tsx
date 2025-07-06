import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import Navigation from "@/components/Navigation";
import TherapyQuoteSection from "@/components/TherapyQuoteSection";
const index = () => {
  return (
    <div className="min-h-screen">
      <Navigation/>
      <div id="hero">
      <HeroSection/>
      </div>
      <div id="about">
      <AboutSection/>
      </div>
      <TherapyQuoteSection/>
      <div id="services">
      <ServicesSection/>
      </div>
      <div id="faq">
      <FAQSection/>
      </div>
      <ContactSection/>
      <Footer/>
    </div>
  );
};

export default index;
