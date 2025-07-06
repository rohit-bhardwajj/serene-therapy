const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-serif  text-[#292828ce] mb-8">
              About Dr. Serena Blake
            </h2>

            <div className="text-[17px]  text-[#4b4b4bc4] leading-8 space-y-6 max-w-[620px]">
              <p>
                Finding time and opportunities to care for ourselves can be incredibly
                challenging in today’s busy and demanding world. I believe therapy offers
                a dedicated space for self-care, providing the support and tools needed
                to improve this essential practice. Therapy can help individuals identify
                and clarify their goals, values, and the various elements that contribute
                to their well-being, recognizing that these aspects vary from person to person.
              </p>

              <p>
                I am dedicated to supporting this journey by offering active listening,
                empathy, compassion and
                behavioral insights. I hold a
                PsyD in Clinical Psychology from
                Pepperdine University with
                eight years of experience and over
                500 client sessions.
              </p>
              <p>
                My therapeutic approach blends evidence-based methods—like
                cognitive-behavioral therapy and
                mindfulness—with compassionate, personalized care,
                enriched by positive psychology,
                acceptance and commitment therapy, and
                trauma-informed principles.
              </p>

            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="w-72 sm:w-80 md:w-96 aspect-[3/4] rounded-xl overflow-hidden shadow-lg bg-gray-100 mx-auto">
              <img
                src="/assets/Blake.png"
                alt="Dr. Serena Blake"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
