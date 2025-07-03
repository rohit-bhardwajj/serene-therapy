import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
    const services = [
        {
            title: "Anxiety & Stress Management",
            description: "Learn effective coping strategies and techniques to manage anxiety, reduce stress, and build resilience in your daily life.",
            image: "https://plus.unsplash.com/premium_photo-1665203618989-e04554a539b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RyZXNzJTIwbWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            title: "Relationship Counseling",
            description: "Strengthen communication, resolve conflicts, and deepen connections in your relationships through evidence-based therapeutic approaches.",
            image: "https://media.istockphoto.com/id/1180010656/photo/expecting-couple-on-home-counselling-meeting.webp?a=1&b=1&s=612x612&w=0&k=20&c=vgkF4biXLlofJeBuH3rO1SOTYMfEWNH5weSz-kUneFc="
        },
        {
            title: "Trauma Recovery",
            description: "Process traumatic experiences in a safe, supportive environment using trauma-informed therapeutic techniques and compassionate care.",
            image: "https://plus.unsplash.com/premium_photo-1733522602547-de2da314b4ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VHJhdW1hJTIwUmVjb3Zlcnl8ZW58MHx8MHx8fDA%3D"
        }
    ];

    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-teal-800 mb-4">
                        How I Help
                    </h2>
                    <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-xl transition-shadow duration-300 border-2 border-teal-100 hover:border-teal-200 overflow-hidden rounded-lg p-0"
                        >

                            <div className="w-full aspect-video overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            <CardHeader className="pb-0 px-4 pt-4">
                                <CardTitle className="text-xl font-semibold text-teal-800 group-hover:text-teal-700 transition-colors">
                                    {service.title}
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="px-4 pt-0 pb-4">
                                <CardDescription className="text-gray-600 leading-relaxed mb-4">
                                    {service.description}
                                </CardDescription>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="border-teal-600 text-teal-700 hover:bg-teal-50 hover:text-gray-900 cursor-pointer transition-colors"
                                >
                                    Learn More
                                </Button>
                            </CardContent>
                        </Card>

                    ))}
                </div>

                <div className="mt-16 bg-teal-50 rounded-2xl p-8 sm:p-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-2xl sm:text-3xl font-light text-teal-800 mb-8">Session Information</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <h4 className="text-lg font-semibold text-teal-700 mb-2">Individual Sessions</h4>
                                <p className="text-2xl font-light text-gray-800 mb-2">$200</p>
                                <p className="text-sm text-gray-600">50-minute session</p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <h4 className="text-lg font-semibold text-teal-700 mb-2">Couples Sessions</h4>
                                <p className="text-2xl font-light text-gray-800 mb-2">$240</p>
                                <p className="text-sm text-gray-600">50-minute session</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                            <div>
                                <h4 className="text-lg font-semibold text-teal-700 mb-3">Office Hours</h4>
                                <div className="space-y-2 text-gray-600">
                                    <p><strong>In-person:</strong> Tue & Thu, 10 AM–6 PM</p>
                                    <p><strong>Virtual via Zoom:</strong> Mon, Wed & Fri, 1 PM–5 PM</p>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-teal-700 mb-3">Location</h4>
                                <p className="text-gray-600">
                                    1287 Maplewood Drive<br />
                                    Los Angeles, CA 90026
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
