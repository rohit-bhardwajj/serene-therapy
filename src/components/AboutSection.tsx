const AboutSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 mb-8 leading-tight">
              <span className="">About Dr. Serena Blake</span>
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Finding time and opportunities to care for ourselves can be incredibly 
                challenging in today's busy and demanding world. I believe <span className="font-semibold">therapy </span> 
                offers a <span className="font-semibold">dedicated space for self-care</span>, providing the support and tools 
                needed to improve this essential practice.
              </p>

              <p>
                Therapy can help individuals identify and clarify their <span className="font-semibold">goals</span>, 
                <span className="font-semibold"> values</span>, and the various elements that contribute to their 
                <span className="font-semibold"> well-being</span>, recognizing that these aspects vary from person to person.
              </p>

              <p>
                I am dedicated to supporting this journey by offering <span className="font-semibold">active listening</span>, 
                <span className="font-semibold"> empathy</span>, <span className="font-semibold">compassion</span>, and 
                <span className="font-semibold"> behavioral insights</span>. I hold a 
                <span className="font-semibold"> PsyD in Clinical Psychology</span> from 
                <span className="font-semibold"> Pepperdine University</span> with 
                <span className="font-semibold"> eight years of experience</span> and over 
                <span className="font-semibold"> 500 client sessions</span>.
              </p>

              <p>
                My therapeutic approach blends <span className="font-semibold">evidence-based methods</span>—like 
                <span className="font-semibold"> cognitive-behavioral therapy</span> and 
                <span className="font-semibold"> mindfulness</span>—with <span >compassionate, personalized care</span>, 
                enriched by <span>positive psychology</span>, 
                <span className="font-semibold"> acceptance and commitment therapy</span>, and 
                <span className="font-semibold"> trauma-informed principles</span>.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden bg-gray-200 shadow-2xl">
                <img 
                  src="/assets/Blake.png"
                  alt="Dr. Serena Blake" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-100 rounded-full opacity-50"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal-50 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
