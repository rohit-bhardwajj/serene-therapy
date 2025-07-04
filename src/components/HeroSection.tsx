import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" 
             style={{
               backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
             }}>
      <div className="absolute inset-0 bg-gradient-to-b from-teal-900/70 to-slate-800/70"></div>
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 border-2 border-white/80 rounded-full flex items-center justify-center">
              <span className="text-2xl font-serif">S</span>
            </div>
          </div>
          <p className="text-lg sm:text-xl text-white/90 mb-2">Dr. Serena Blake, PsyD</p>
          <p className="text-sm sm:text-base text-white/80">Clinical Psychologist</p>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 leading-tight">
          Psychological Care for
        </h1>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-8 leading-tight">
          Change, Insight, and Well-Being
        </h2>
        
        <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Offering individual psychotherapy for adults via telehealth in California and in-person sessions in Los Angeles through compassionate, evidence-based care
        </p>
        
        <Button
  onClick={() => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }}
  size="lg"
  className="bg-teal-600/80 hover:bg-teal-700 text-white px-8 py-4 text-lg rounded-full border-2 border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105 cursor-pointer"
>
  SCHEDULE A CONSULTATION
</Button>

      </div>
    </section>
  );
};

export default HeroSection;
