import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
const index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection/>
      <AboutSection/>
      <ServicesSection/>
      <FAQSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
};

export default index;
