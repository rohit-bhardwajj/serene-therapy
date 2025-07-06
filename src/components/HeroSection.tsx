import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-7xl mx-auto h-full rounded-3xl overflow-hidden shadow-xl">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-[-2]"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-cyan-900/40 z-[-1]" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light mb-4 drop-shadow-md">
            Psychological Care for
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light mb-8 drop-shadow-md">
            Change, Insight, and Well‑Being
          </h2>

          <p className="text-lg sm:text-xl text-white/90 mb-15 pb-2 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            Offering individual psychotherapy for adults via telehealth in California and in‑person sessions in Los Angeles with compassionate, evidence‑based care.
          </p>

          <Button
  onClick={() => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }}
  size="lg"
  className="hover:bg-teal-600/80 bg-white/60 text-teal-700 hover:text-white px-8 py-4 text-lg rounded-full border-2 border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105 cursor-pointer"
>
  SCHEDULE A CONSULTATION
</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
