import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";
const index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection/>
      <AboutSection/>
      <ServicesSection/>
      <FAQSection/>
    </div>
  );
};

export default index;
