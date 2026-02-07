import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Ship, Plane, Truck, Package } from "lucide-react";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const services = [
  "Sea & Air Freight",
  "Customs Clearance",
  "Road Transportation",
  "Warehousing & 3PL",
  "Heavy Haulage",
  "Courier Services",
];

const branches = [
  "Hyderabad (HQ)",
  "Chennai",
  "Delhi",
  "Mumbai",
  "Vizag",
  "Pune",
  "Bangalore",
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/images/logo.jpg"
                alt="Docs N Packs Logo"
                className="h-16 w-auto object-contain rounded-lg bg-white p-1"
              />
              <div>
                <h3 className="font-bold text-lg">DOCS N PACKS</h3>
                <p className="text-gray-400 text-sm">Logistics Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Leading Freight Forwarding & Customs Clearance company based in
              Hyderabad, serving clients across India and worldwide since 2019.
            </p>
            {/* <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <Package className="w-5 h-5 text-brand-blue" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-brand-blue transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <Ship className="w-5 h-5 text-brand-blue" />
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-brand-blue transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-brand-blue" />
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <p className="text-gray-400 text-sm">
                  SL Jubilee Building, 3rd Floor, Plot No. 1202 & 1215 A, Road
                  No. 36, Jubilee Hills, Hyderabad, Telangana – 500 033, INDIA.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-blue flex-shrink-0" />
                <a
                  href="tel:+919100753313"
                  className="text-gray-400 hover:text-brand-blue transition-colors text-sm"
                >
                  +91 91007 53313
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-blue flex-shrink-0" />
                <a
                  href="mailto:info@docsnpacks.com"
                  className="text-gray-400 hover:text-brand-blue transition-colors text-sm"
                >
                  info@docsnpacks.com
                </a>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-gray-400 text-xs mb-2">Branch Offices:</p>
              <p className="text-brand-accent text-xs">
                {branches.join(" | ")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Docs N Packs. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Ship className="w-4 h-4" />
                <Plane className="w-4 h-4" />
                <Truck className="w-4 h-4" />
              </div>
              <p className="text-gray-500 text-xs">
                Freight Forwarding & Logistics
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
