import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "Do you accept insurance?",
      answer: "I do not accept insurance directly, but I provide a detailed superbill that you can submit to your insurance company for potential reimbursement. Many clients find this process straightforward, and I'm happy to help you understand how to maximize your benefits."
    },
    {
      question: "Are online sessions available?",
      answer: "Yes, I offer secure virtual sessions via Zoom for clients throughout California. Virtual sessions are available Monday, Wednesday, and Friday from 1 PM to 5 PM. All online sessions maintain the same level of confidentiality and therapeutic effectiveness as in-person sessions."
    },
    {
      question: "What is your cancellation policy?",
      answer: "I require 24-hour advance notice for session cancellations or rescheduling. This allows me to offer your time slot to other clients who may need it. Cancellations made with less than 24 hours notice will be charged the full session fee."
    },
    {
      question: "How do I know if therapy is right for me?",
      answer: "Therapy can be beneficial for anyone looking to better understand themselves, work through challenges, or improve their overall well-being. I offer a brief consultation call where we can discuss your goals and determine if we're a good fit to work together."
    },
    {
      question: "What can I expect in our first session?",
      answer: "Our first session will focus on getting to know you and understanding what brings you to therapy. We'll discuss your goals, relevant history, and begin to develop a plan for our work together. This is also a great time for you to ask any questions you have about the therapeutic process."
    },
    {
      question: "How long does therapy typically take?",
      answer: "The length of therapy varies greatly depending on your individual needs and goals. Some clients find benefit in just a few sessions, while others prefer longer-term support. We'll regularly check in about your progress and adjust our approach as needed."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#4e4438d3] mb-4">
            Frequently Asked Questions
          </h2>
         <div className="w-20 h-[2px] bg-gray-300 mx-auto" />
          <p className="text-lg text-gray-600">Therapy</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
              >
                <span className="text-lg font-medium text-[#4e4438d3] hover:text-teal-800 pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-teal-600 transition-transform duration-200 flex-shrink-0 ${
                    openItems.includes(index) ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
