import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Ship, Plane, Truck, Package, Warehouse, 
  FileCheck, Clock, ArrowRight, Anchor, 
  Container, MapPin, CheckCircle
} from 'lucide-react';

const mainServices = [
  {
    icon: Ship,
    title: 'Sea Freight Logistics',
    description: 'Comprehensive global shipping solutions via sea and air. We handle Full Container Load (FCL), Less Container Load (LCL), and charter services to all major ports worldwide.',
    features: [
      'FCL & LCL Shipping',
      'Global Port Coverage',
      'Partnered with Maersk, MSC, Hapag Lloyd',
      'Time-critical shipment management',
      'Real-time tracking',
    ],
    image: '/images/sea-freight.jpg',
  },
  {
    icon: Anchor,
    title: 'Heavy Haulage & ODC Cargo',
    description: 'Specialized transportation for oversized and heavy cargo. We handle project logistics with hydraulic trailers, SPMTs, and conventional equipment.',
    features: [
      'Hydraulic & Conventional Trailers',
      'SPMT Movements',
      'Project Logistics',
      'Route Planning & Surveys',
      'Permit & Escort Services',
    ],
    image: '/images/heavy-haulage.jpg',
  },
  {
    icon: Container,
    title: 'Break Bulk & Ship Chartering',
    description: 'Expert handling of break bulk cargo and vessel chartering services for large-scale shipping requirements across global routes.',
    features: [
      'Break Bulk Cargo Handling',
      'Vessel Chartering',
      'Stevedoring Services',
      'Lashing & Securing',
      'Crane & Gantry Operations',
    ],
    image: '/images/heavy-haulage.jpg',
  },
  {
    icon: FileCheck,
    title: 'Customs Clearance',
    description: 'Professional customs brokerage services for import and export clearance at all seaports, ICDs, and airports across India.',
    features: [
      'Import & Export Clearance',
      'Documentation Handling',
      'Duty Consultation',
      'Regulatory Compliance',
      'All Seaports & Airports Covered',
    ],
    image: '/images/customs-clearance.jpg',
  },
  {
    icon: Truck,
    title: 'Road Transportation',
    description: 'Pan-India road transportation with a fleet of flatbed, low-bed trailers, and GPS-enabled trucks for secure cargo movement.',
    features: [
      'Flatbed & Low-bed Trailers',
      'Open & Closed Body Trucks',
      'GPS-Enabled Fleet',
      'Pan-India Coverage',
      'Express & Economy Options',
    ],
    image: '/images/road-transport.jpg',
  },
  {
    icon: Warehouse,
    title: 'Warehousing & 3PL',
    description: 'Modern warehousing facilities with complete third-party logistics services including storage, inventory management, and distribution.',
    features: [
      'Modern Storage Facilities',
      'Inventory Management',
      'Distribution Services',
      'Value-Added Services',
      'Real-time Inventory Tracking',
    ],
    image: '/images/warehousing.jpg',
  },
  {
    icon: Package,
    title: 'Courier Shipment Handling',
    description: 'Express courier services for documents and parcels with worldwide coverage and fast delivery timelines.',
    features: [
      'Express & Economy Services',
      'Worldwide Coverage',
      '3-5 Days Air Delivery',
      'Door-to-Door Service',
      'Online Tracking',
    ],
    image: '/images/courier-service.png',
  },
  {
    icon: MapPin,
    title: 'Door Pick Up & Delivery',
    description: 'Convenient door-to-door logistics services for hassle-free cargo collection and delivery across India and internationally.',
    features: [
      'Door-to-Door Service',
      'Same-day Pickup Available',
      'Packaging Assistance',
      'Multi-location Collection',
      'Delivery Confirmation',
    ],
    image: '/images/courier-shipment.webp',
  },
];

const airCargoFeatures = [
  'Tier-1 & Tier-2 Carrier Partnerships',
  'Full Flight Chartering',
  'Working with QR, EK, TK, BA, EY, AI',
  'Affordable & Simple Air Logistics',
  'Global Collection & Delivery',
];

const shippingPartners = [
  'Maersk', 'MSC', 'Hapag Lloyd', 'Evergreen', 'COSCO', 'Wan Hai', 'SCI'
];

export default function Services() {
  return (
    <div className="min-h-screen pt-28">
      {/* Page Header */}
      <section className="bg-brand-dark py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-brand-blue font-semibold text-sm uppercase tracking-wider">
              What We Offer
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
              Our Comprehensive Services
            </h1>
            <p className="text-gray-400 text-lg">
              From freight forwarding to customs clearance, we provide end-to-end logistics 
              solutions tailored to meet your business requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-brand-blue rounded-xl flex items-center justify-center shadow-lg">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-4">
                    {service.title}
                  </h2>
                  <p className="text-brand-gray mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0" />
                        <span className="text-brand-gray">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white">
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Air Cargo Division */}
      <section className="py-20 lg:py-28 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-blue/10 rounded-full px-4 py-2 mb-4">
                <Plane className="w-4 h-4 text-brand-blue" />
                <span className="text-brand-blue text-sm font-medium">Air Cargo Division</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-6">
                Reliable Air Shipping Worldwide
              </h2>
              <p className="text-brand-gray mb-8 leading-relaxed">
                Our Air Cargo Division provides reliable air shipping services with Tier-1 and Tier-2 carriers. 
                We offer full flight chartering for urgent and high-value cargo, ensuring safety and security 
                of your shipments with affordable and simple air logistics solutions.
              </p>
              <ul className="space-y-3 mb-8">
                {airCargoFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0" />
                    <span className="text-brand-gray">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/air-freight.jpg"
                  alt="Air Cargo"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sea Freight Division */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="inline-flex items-center gap-2 bg-brand-blue/10 rounded-full px-4 py-2 mb-4">
                <Ship className="w-4 h-4 text-brand-blue" />
                <span className="text-brand-blue text-sm font-medium">Sea Freight Division</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-6">
                Global Sea Freight Solutions
              </h2>
              <p className="text-brand-gray mb-8 leading-relaxed">
                We handle Full Container Load (FCL) and Less Container Load (LCL) with reach to all global seaports. 
                Partnered with major shipping lines, we focus on timely and safe delivery with experience in 
                managing time-critical shipments.
              </p>
              <div className="mb-8">
                <h4 className="font-semibold text-brand-dark mb-4">Our Shipping Partners:</h4>
                <div className="flex flex-wrap gap-2">
                  {shippingPartners.map((partner, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-brand-light rounded-lg text-brand-dark text-sm font-medium"
                    >
                      {partner}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:order-1 relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/sea-freight.jpg"
                  alt="Sea Freight"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Standards */}
      <section className="py-20 lg:py-28 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Service Standards
            </h2>
            <p className="text-gray-400">
              We maintain the highest standards in every aspect of our logistics operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FileCheck, title: 'Standard Procedures', desc: 'Effective technology-driven processes' },
              { icon: CheckCircle, title: 'Skilled Team', desc: 'Educated and experienced professionals' },
              { icon: Clock, title: 'Fast Handling', desc: 'Express and economy logistics services' },
              { icon: Package, title: 'Documentation', desc: 'End-to-end documentation handling' },
              { icon: Truck, title: 'Affordable Shipping', desc: 'Simple and cost-effective solutions' },
              { icon: Ship, title: 'Future Ready', desc: 'Aiming to become a Container Line' },
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Need a Custom Logistics Solution?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your specific requirements and get a tailored quote.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-brand-blue hover:bg-gray-100 font-semibold px-8">
              Contact Us Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
