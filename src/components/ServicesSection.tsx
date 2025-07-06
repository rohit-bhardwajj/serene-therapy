const ServicesSection = () => {
  const services = [
    {
      title: "Anxiety & Stress Management",
      description:
        "Learn effective coping strategies and techniques to manage anxiety, reduce stress, and build resilience in your daily life.",
      image:
        "https://plus.unsplash.com/premium_photo-1665203618989-e04554a539b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RyZXNzJTIwbWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Relationship Counseling",
      description:
        "Strengthen communication, resolve conflicts, and deepen connections in your relationships through evidence-based therapeutic approaches.",
      image:
        "https://media.istockphoto.com/id/1180010656/photo/expecting-couple-on-home-counselling-meeting.webp?a=1&b=1&s=612x612&w=0&k=20&c=vgkF4biXLlofJeBuH3rO1SOTYMfEWNH5weSz-kUneFc=",
    },
    {
      title: "Trauma Recovery",
      description:
        "Process traumatic experiences in a safe, supportive environment using trauma-informed therapeutic techniques and compassionate care.",
      image:
        "https://plus.unsplash.com/premium_photo-1733522602547-de2da314b4ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VHJhdW1hJTIwUmVjb3Zlcnl8ZW58MHx8MHx8fDA%3D",
    },
  ];

  return (
    <section className="py-20 bg-[#fdfaf6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-thin text-[#4e4438d3] mb-4">How I Help</h2>
          <div className="w-20 h-[2px] bg-gray-300 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 text-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="group space-y-6 max-w-sm mx-auto transition-all duration-300"
            >
              <div className="w-72 h-72 mx-auto rounded-full overflow-hidden shadow-md transition-transform duration-300 group-hover:scale-105">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-serif text-[#4e4438d3] group-hover:text-teal-700 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 text-[16px] leading-relaxed px-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="relative mt-24">
          <div className="absolute inset-0 max-w-5xl mx-auto h-full bg-[#9eb6b6]/20 rounded-2xl z-0" />

          <div className="relative z-10 bg-[#94b0b060] rounded-2xl p-8 sm:p-12 shadow-sm max-w-5xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-serif text-[#4e4438d3] mb-10">
                Session Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="bg-[#fdfaf6] rounded-xl p-6 border border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">
                    Individual Sessions
                  </h4>
                  <p className="text-2xl font-light text-gray-900 mb-2">$200</p>
                  <p className="text-sm text-gray-600">50-minute session</p>
                </div>

                <div className="bg-[#fdfaf6] rounded-xl p-6 border border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">
                    Couples Sessions
                  </h4>
                  <p className="text-2xl font-light text-gray-900 mb-2">$240</p>
                  <p className="text-sm text-gray-600">50-minute session</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">
                    Office Hours
                  </h4>
                  <div className="space-y-2 text-gray-600 text-sm">
                    <p>
                      <strong>In-person:</strong> Tue & Thu, 10 AM–6 PM
                    </p>
                    <p>
                      <strong>Virtual via Zoom:</strong> Mon, Wed & Fri, 1 PM–5 PM
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">Location</h4>
                  <p className="text-gray-600 text-sm">
                    1287 Maplewood Drive
                    <br />
                    Los Angeles, CA 90026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
