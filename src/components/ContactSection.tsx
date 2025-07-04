import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    preferredTime: "",
    contactMethod: "",
    agreeToContact: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (
      !/^\(\d{3}\)\s\d{3}-\d{4}$/.test(formData.phone) &&
      !/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))
    ) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim())
      newErrors.message = "Please tell us what brings you here";

    if (!formData.preferredTime.trim())
      newErrors.preferredTime = "Preferred contact time is required";

    if (!formData.contactMethod)
      newErrors.contactMethod = "Please select a contact method";

    if (!formData.agreeToContact)
      newErrors.agreeToContact = "You must agree to be contacted";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-teal-50"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 border border-gray-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-light text-teal-800 mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Simply fill out the brief fields below and Dr. Blake will be in
              touch with you soon, usually within one business day. This form is
              safe, private, and completely free.
            </p>
          </div>

          <form
            action="https://formspree.io/f/xzzgwwey"
            method="POST"
            className="space-y-6"
            onSubmit={(e) => {
              if (!validateForm()) {
                e.preventDefault();
              } else {
                toast.success("Message Sent!", {
                  description:
                    "Dr. Blake will be in touch with you soon, usually within one business day.",
                });
              }
            }}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(555) 234-5678"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className={errors.phone ? "border-red-500" : ""}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                What brings you here?
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="How can I help you?"
                rows={4}
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className={errors.message ? "border-red-500" : ""}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="preferredTime"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Preferred time to reach you
              </label>
              <Input
                id="preferredTime"
                name="preferredTime"
                type="text"
                placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
                value={formData.preferredTime}
                onChange={(e) =>
                  handleInputChange("preferredTime", e.target.value)
                }
                className={errors.preferredTime ? "border-red-500" : ""}
              />
              <p className="mt-1 text-sm text-gray-500">
                Let us know when you're typically available for a call or
                consultation
              </p>
              {errors.preferredTime && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.preferredTime}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="contactMethod"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Preferred Contact Method
              </label>
              <Select
                onValueChange={(value) =>
                  handleInputChange("contactMethod", value)
                }
              >
                <SelectTrigger
                  className={cn(
                    "flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent dark:bg-input/30 px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none cursor-pointer",
                    "focus-visible:border-ring border-gray-300 focus-visible:ring-ring/50 focus-visible:ring-[1px]",
                    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                    errors.contactMethod && "border-red-500"
                  )}
                >
                  <SelectValue placeholder="Select preferred method" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-200">
                  <SelectItem
                    className="hover:bg-gray-200/60"
                    value="Phone Call"
                  >
                    Phone Call
                  </SelectItem>
                  <SelectItem className="hover:bg-gray-200/60" value="Email">
                    Email
                  </SelectItem>
                  <SelectItem
                    className="hover:bg-gray-200/60"
                    value="Text Message"
                  >
                    Text Message
                  </SelectItem>
                </SelectContent>
              </Select>
              <input
                type="hidden"
                name="contactMethod"
                value={formData.contactMethod}
              />
              {errors.contactMethod && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.contactMethod}
                </p>
              )}
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="agreeToContact"
                checked={formData.agreeToContact}
                onCheckedChange={(checked) =>
                  handleInputChange("agreeToContact", checked as boolean)
                }
                className="mt-1 cursor-pointer"
              />
              <div className="flex-1">
                <label
                  htmlFor="agreeToContact"
                  className="text-sm text-gray-600 leading-relaxed cursor-pointer"
                >
                  I agree to be contacted by Dr. Serena Blake regarding my
                  inquiry. By clicking submit you consent to receive texts and
                  emails from Dr. Serena Blake.
                </label>
                {errors.agreeToContact && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.agreeToContact}
                  </p>
                )}
              </div>
            </div>

            <input
              type="hidden"
              name="agreeToContact"
              value={formData.agreeToContact ? "Yes" : "No"}
            />

            <Button
              type="submit"
              className="w-full bg-teal-700 hover:bg-teal-800 text-white py-3 text-lg font-medium rounded-lg transition-colors duration-200 cursor-pointer active:bg-teal-800/90 active:scale-99 active:ease-in-out"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
