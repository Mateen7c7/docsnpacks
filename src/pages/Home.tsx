import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Ship,
  Plane,
  Truck,
  Warehouse,
  FileCheck,
  Clock,
  Globe,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
} from "lucide-react";

const services = [
  {
    icon: Ship,
    title: "Sea & Air Freight",
    description:
      "Global shipping solutions via sea and air with FCL, LCL, and charter services.",
    image: "/images/sea-freight.jpg",
  },
  {
    icon: Plane,
    title: "Air Freight",
    description:
      "Express air cargo services with Tier-1 carriers for time-critical shipments.",
    image: "/images/air-freight.jpg",
  },
  {
    icon: Truck,
    title: "Road Transportation",
    description:
      "Pan-India transportation with flatbed, low-bed trailers and GPS-enabled trucks.",
    image: "/images/road-transport.jpg",
  },
  {
    icon: Warehouse,
    title: "Warehousing & 3PL",
    description:
      "Modern warehousing facilities with complete 3PL and distribution services.",
    image: "/images/warehousing.jpg",
  },
];

const features = [
  {
    icon: Globe,
    title: "Global Network",
    desc: "Operations across India and worldwide",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "99% on-time shipment success rate",
  },
  {
    icon: FileCheck,
    title: "Expert Documentation",
    desc: "End-to-end customs documentation",
  },
  {
    icon: CheckCircle,
    title: "Trusted Partner",
    desc: "Serving since 2019 with excellence",
  },
];

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "7", label: "Branch Offices" },
  { value: "1000+", label: "Happy Clients" },
  { value: "50+", label: "Expert Team" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Logistics Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex-grow flex items-center pt-28 pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-brand-blue/20 border border-brand-blue/30 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
                <Globe className="w-4 h-4 text-brand-blue" />
                <span className="text-brand-accent text-sm font-medium">
                  Global Freight Forwarding Solutions
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up delay-100">
                Your Trusted Partner in{" "}
                <span className="text-brand-blue">Global Logistics</span>
              </h1>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed animate-fade-in-up delay-200">
                Docs N Packs is a leading Freight Forwarding & Customs Clearance
                company based in Hyderabad, serving clients across India and
                worldwide since 2019.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold px-8 py-6 text-base"
                  >
                    Get a Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-6 text-base"
                  >
                    Our Services
                  </Button>
                </Link>
              </div>

              {/* Contact Quick Links */}
              <div className="flex flex-wrap gap-6 mt-10 animate-fade-in-up delay-400">
                <a
                  href="tel:+919100753313"
                  className="flex items-center gap-2 text-gray-300 hover:text-brand-blue transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+91 91007 53313</span>
                </a>
                <a
                  href="mailto:info@docsnpacks.com"
                  className="flex items-center gap-2 text-gray-300 hover:text-brand-blue transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>info@docsnpacks.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="relative z-20 bg-brand-black/80 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-brand-blue">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-blue font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mt-3 mb-4">
              Comprehensive Logistics Solutions
            </h2>
            <p className="text-brand-gray">
              From sea freight to air cargo, we provide end-to-end logistics
              services tailored to your business needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-brand-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">
                    {service.title}
                  </h3>
                  <p className="text-brand-gray text-sm mb-4">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-brand-blue font-medium text-sm hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link to="/services">
              <Button
                variant="outline"
                className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-28 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <span className="text-brand-blue font-semibold text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mt-3 mb-6">
                Delivering Excellence in Every Shipment
              </h2>
              <p className="text-brand-gray mb-8 leading-relaxed">
                With over 5 years of experience in the logistics industry, Docs
                N Packs has established itself as a trusted partner for
                businesses across India. Our commitment to quality, reliability,
                and customer satisfaction sets us apart.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-dark mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-brand-gray text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/about-team.jpg"
                  alt="Our Team"
                  className="w-full h-auto"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-brand-blue rounded-full flex items-center justify-center">
                    <CheckCircle className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-brand-dark">
                      99%
                    </div>
                    <div className="text-brand-gray text-sm">
                      On-Time Delivery
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-brand-dark relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-blue rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Ship Your Cargo?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Get in touch with our logistics experts today for a free quote. We
              provide customized solutions for all your shipping needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold px-8 py-6"
                >
                  Request a Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:+919100753313">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-6"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Offices Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-xl font-semibold text-brand-dark">
              Our Presence Across India
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Hyderabad (HQ)",
              "Chennai",
              "Delhi",
              "Mumbai",
              "Vizag",
              "Pune",
              "Bangalore",
            ].map((city, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-brand-light rounded-full text-brand-dark font-medium hover:bg-brand-blue hover:text-white transition-colors cursor-default"
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
