import { useState } from "react";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  // User,
  // Building,
  // MessageSquare,
  // Send,
} from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 91007 53313", "+91 90000 44285"],
    href: "tel:+919100753313",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@docsnpacks.com", "helpdesk@docsnpacks.com"],
    href: "mailto:info@docsnpacks.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Monday - Saturday", "9:00 AM - 6:00 PM IST"],
    href: null,
  },
];

const offices = [
  {
    type: "Head Office",
    city: "Hyderabad",
    address:
      "G1 Golconda Heights Apartment, Kohinoor Enclave, Puppalguda, Hyderabad – 500089, Telangana, India",
    phone: "+91 91007 53313",
  },
  {
    type: "Branch Office",
    city: "Chennai",
    address:
      "7th Floor, IIFL Tower, MGR Road, Kandanchavedi, Perungudi, Chennai – 600096, Tamil Nadu, India",
    phone: "+91 91007 53313",
  },
];

const branches = ["Delhi", "Mumbai", "Vizag", "Pune", "Bangalore"];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Thank you for your inquiry! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
    setIsSubmitting(false);
  };


  console.log(isSubmitting , handleSubmit , handleChange);

  return (
    <div className="min-h-screen pt-28">
      {/* Page Header */}
      <section className="bg-brand-dark py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-brand-blue font-semibold text-sm uppercase tracking-wider">
              Get in Touch
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
              Contact Us
            </h1>
            <p className="text-gray-400 text-lg">
              Have a question or need a quote? Reach out to our team and we'll
              get back to you promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="text-lg font-semibold text-brand-dark mb-2">
                  {item.title}
                </h3>
                <div className="space-y-1">
                  {item.details.map((detail, dIndex) => (
                    <p key={dIndex} className="text-brand-gray">
                      {item.href ? (
                        <a
                          href={item.href}
                          className="hover:text-brand-blue transition-colors"
                        >
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Offices */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            {/* <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-2">
                Send Us a Message
              </h2>
              <p className="text-brand-gray mb-8">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-brand-dark">
                      <User className="w-4 h-4 inline mr-1" />
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="border-gray-200 focus:border-brand-blue focus:ring-brand-blue"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-brand-dark">
                      <Mail className="w-4 h-4 inline mr-1" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                      className="border-gray-200 focus:border-brand-blue focus:ring-brand-blue"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-brand-dark">
                      <Phone className="w-4 h-4 inline mr-1" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="border-gray-200 focus:border-brand-blue focus:ring-brand-blue"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-brand-dark">
                      <Building className="w-4 h-4 inline mr-1" />
                      Company Name
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd."
                      className="border-gray-200 focus:border-brand-blue focus:ring-brand-blue"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-brand-dark">
                    Service Interested In
                  </Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full h-10 px-3 rounded-md border border-gray-200 bg-white text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none"
                  >
                    <option value="">Select a service</option>
                    <option value="sea-freight">Sea & Air Freight</option>
                    <option value="customs">Customs Clearance</option>
                    <option value="road">Road Transportation</option>
                    <option value="warehousing">Warehousing & 3PL</option>
                    <option value="heavy">Heavy Haulage</option>
                    <option value="courier">Courier Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-brand-dark">
                    <MessageSquare className="w-4 h-4 inline mr-1" />
                    Your Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your logistics requirements..."
                    required
                    rows={5}
                    className="border-gray-200 focus:border-brand-blue focus:ring-brand-blue resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold py-6"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div> */}

            {/* Office Locations */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-2">
                Our Offices
              </h2>
              <p className="text-brand-gray mb-8">
                Visit us at any of our locations across India.
              </p>

              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="bg-brand-light rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="text-brand-blue text-xs font-medium uppercase tracking-wider">
                          {office.type}
                        </span>
                        <h3 className="text-lg font-semibold text-brand-dark mt-1">
                          {office.city}
                        </h3>
                        <p className="text-brand-gray text-sm mt-2 leading-relaxed">
                          {office.address}
                        </p>
                        <a
                          href={`tel:${office.phone}`}
                          className="inline-flex items-center gap-2 text-brand-blue text-sm mt-3 hover:underline"
                        >
                          <Phone className="w-4 h-4" />
                          {office.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Other Branches */}
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-brand-dark mb-4">
                    Other Branch Offices
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {branches.map((city, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-brand-light rounded-lg text-brand-dark text-sm font-medium"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="mt-8 bg-brand-dark rounded-xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-4">Quick Contact</h3>
                <div className="space-y-3">
                  <a
                    href="tel:+919100753313"
                    className="flex items-center gap-3 text-gray-300 hover:text-brand-accent transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    +91 91007 53313
                  </a>
                  <a
                    href="mailto:info@docsnpacks.com"
                    className="flex items-center gap-3 text-gray-300 hover:text-brand-accent transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    info@docsnpacks.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-card">
            <div className="aspect-video w-full bg-gray-100 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-brand-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-brand-dark mb-2">
                  Our Location
                </h3>
                <p className="text-brand-gray max-w-md mx-auto">
                  G1 Golconda Heights Apartment, Kohinoor Enclave, Puppalguda,
                  Hyderabad – 500089, Telangana, India
                </p>
                {/* <a 
                  href="https://maps.google.com/?q=Hyderabad,Telangana,India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-blue font-medium mt-4 hover:underline"
                >
                  <MapPin className="w-4 h-4" />
                  View on Google Maps
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Let us handle your logistics needs while you focus on growing your
            business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919100753313">
              <Button
                size="lg"
                className="bg-white text-brand-blue hover:bg-gray-100 font-semibold px-8"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </Button>
            </a>
            <a href="mailto:info@docsnpacks.com">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white/30 text-white hover:bg-white/10 font-semibold px-8"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
