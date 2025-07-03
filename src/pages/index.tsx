import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
const index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection/>
      <AboutSection/>
      <ServicesSection/>
    </div>
  );
};

export default index;
