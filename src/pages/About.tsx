import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Ship, Plane, Truck, Anchor, Users, 
  Target, Award, Globe, CheckCircle, ArrowRight,
  MapPin, Building
} from 'lucide-react';

const companyStats = [
  { value: '2019', label: 'Established' },
  { value: '7', label: 'Branch Offices' },
  { value: '50+', label: 'Team Members' },
  { value: '1000+', label: 'Clients Served' },
];

const divisions = [
  {
    icon: Plane,
    title: 'Air Cargo Division',
    description: 'Reliable air shipping with Tier-1 & Tier-2 carriers, full flight chartering for urgent and high-value cargo.',
  },
  {
    icon: Ship,
    title: 'Sea Freight Division',
    description: 'Handling FCL and LCL with reach to all global seaports, partnered with major shipping lines.',
  },
  {
    icon: Truck,
    title: 'Transport Services',
    description: 'Strong experience in road transportation with flatbed, low-bed trailers, and GPS-enabled trucks.',
  },
  {
    icon: Anchor,
    title: 'Marine Services',
    description: 'Crew management, technical vessel management, commercial chartering, and maritime training.',
  },
];

const marineServices = [
  'Crew management for main fleet',
  'Offshore crew management (certifications, evaluation, training)',
  'Technical management of vessels (inspection, dry docking, repairs)',
  'Commercial management & chartering',
  'Bunker operations & time chartering',
  'Charter contract invoicing and claims handling',
  'Maritime training programs for crew and officer ranks',
];

const containerLinesPlans = [
  'Services planned for Far East, Middle East & East Africa',
  'Introduction of 3 mid-range vessels (capacity: 2500 containers each)',
  'Own vessels planned to operate',
  'Currently operating leased vessels with 600 FCL capacity per voyage',
];

const values = [
  {
    icon: Target,
    title: 'Mission',
    description: 'To provide reliable, efficient, and cost-effective logistics solutions that help businesses grow globally.',
  },
  {
    icon: Award,
    title: 'Quality',
    description: 'We maintain the highest standards in every shipment, ensuring safe and timely delivery of your cargo.',
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Our customers are at the heart of everything we do. We tailor solutions to meet their unique needs.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'With operations across India and worldwide partnerships, we connect businesses to global markets.',
  },
];

const branches = [
  { city: 'Hyderabad', address: 'SL Jubilee Building, 3rd Floor, Plot No. 1202 & 1215 A, Road No. 36, Jubilee Hills, Hyderabad, Telangana – 500 033, INDIA.', type: 'Head Office' },
  { city: 'Chennai', address: '7th Floor, IIFL Tower, MGR Road, Kandanchavedi, Perungudi, Chennai – 600096', type: 'Branch Office' },
  { city: 'Delhi', address: 'Delhi NCR Region', type: 'Branch Office' },
  { city: 'Mumbai', address: 'Mumbai, Maharashtra', type: 'Branch Office' },
  { city: 'Vizag', address: 'Visakhapatnam, Andhra Pradesh', type: 'Branch Office' },
  { city: 'Pune', address: 'Pune, Maharashtra', type: 'Branch Office' },
  { city: 'Bangalore', address: 'Bangalore, Karnataka', type: 'Branch Office' },
];

export default function About() {
  return (
    <div className="min-h-screen pt-28">
      {/* Page Header */}
      <section className="bg-brand-dark py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-brand-blue font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
              Your Trusted Logistics Partner
            </h1>
            <p className="text-gray-400 text-lg">
              Since 2019, Docs N Packs has been delivering excellence in freight forwarding 
              and customs clearance services across India and worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/about-team.jpg"
                  alt="Docs N Packs Team"
                  className="w-full h-auto"
                />
              </div>
              {/* Stats Card */}
              <div className="absolute -bottom-8 -right-8 bg-brand-blue rounded-xl p-6 shadow-xl hidden lg:block">
                <div className="text-4xl font-bold text-white">5+</div>
                <div className="text-white/80 text-sm">Years of Excellence</div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-6">
                D & P Logistics Services
              </h2>
              <p className="text-brand-gray mb-6 leading-relaxed">
                D & P Logistics Services is a trust-driven logistics company in Telangana and across India since 2019. 
                We are a leading Freight Forwarding & Customs Clearance company based in Hyderabad with operations 
                in Vizag, Mumbai, Chennai, Mundra, and Delhi NCR.
              </p>
              <p className="text-brand-gray mb-6 leading-relaxed">
                Managed by an expert team with strong experience in logistics and shipping, the company has grown 
                rapidly in interstate and international logistics with a professional multicultural team. 
                We provide a wide range of specialized services to meet changing business and customer needs.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {companyStats.map((stat, index) => (
                  <div key={index} className="bg-brand-light rounded-lg p-4">
                    <div className="text-2xl font-bold text-brand-blue">{stat.value}</div>
                    <div className="text-brand-gray text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link to="/contact">
                <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white">
                  Get in Touch
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Divisions */}
      <section className="py-20 lg:py-28 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-blue font-semibold text-sm uppercase tracking-wider">
              Our Operations
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mt-3 mb-4">
              Our Divisions
            </h2>
            <p className="text-brand-gray">
              We operate through specialized divisions to provide comprehensive logistics solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {divisions.map((division, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6">
                  <division.icon className="w-7 h-7 text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold text-brand-dark mb-3">
                  {division.title}
                </h3>
                <p className="text-brand-gray">
                  {division.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marine Services */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-blue/10 rounded-full px-4 py-2 mb-4">
                <Anchor className="w-4 h-4 text-brand-blue" />
                <span className="text-brand-blue text-sm font-medium">Marine Services</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-6">
                Comprehensive Marine Solutions
              </h2>
              <p className="text-brand-gray mb-8 leading-relaxed">
                Our Marine Services division provides end-to-end solutions for vessel operations, 
                crew management, and technical support for the maritime industry.
              </p>
              <ul className="space-y-4">
                {marineServices.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-brand-gray">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/sea-freight.jpg"
                  alt="Marine Services"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DNP Container Lines */}
      <section className="py-20 lg:py-28 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="inline-flex items-center gap-2 bg-brand-blue/20 rounded-full px-4 py-2 mb-4">
                <Ship className="w-4 h-4 text-brand-blue" />
                <span className="text-brand-accent text-sm font-medium">DNP Container Lines</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Our Vision for the Future
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                DNP Container Lines is set to start as a Container Line with benchmark standards. 
                We are expanding our services to Far East, Middle East & East Africa with our own vessels.
              </p>
              <ul className="space-y-4">
                {containerLinesPlans.map((plan, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{plan}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:order-1 relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/shipimg.jpeg"
                  alt="Container Lines"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-blue font-semibold text-sm uppercase tracking-wider">
              Our Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mt-3 mb-4">
              Our Core Values
            </h2>
            <p className="text-brand-gray">
              These principles guide everything we do at Docs N Packs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl hover:bg-brand-light transition-colors"
              >
                <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-brand-blue" />
                </div>
                <h3 className="text-lg font-semibold text-brand-dark mb-2">
                  {value.title}
                </h3>
                <p className="text-brand-gray text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branch Offices */}
      <section className="py-20 lg:py-28 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-blue font-semibold text-sm uppercase tracking-wider">
              Our Presence
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mt-3 mb-4">
              Branch Offices
            </h2>
            <p className="text-brand-gray">
              We have a strong presence across India with offices in major cities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.map((branch, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    {branch.type === 'Head Office' ? (
                      <Building className="w-5 h-5 text-brand-blue" />
                    ) : (
                      <MapPin className="w-5 h-5 text-brand-blue" />
                    )}
                  </div>
                  <div>
                    <span className="text-brand-blue text-xs font-medium uppercase tracking-wider">
                      {branch.type}
                    </span>
                    <h3 className="text-lg font-semibold text-brand-dark mt-1">
                      {branch.city}
                    </h3>
                    <p className="text-brand-gray text-sm mt-2">
                      {branch.address}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Partner with Us for Your Logistics Needs
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Let us handle your freight forwarding and customs clearance requirements with professionalism and care.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-brand-blue hover:bg-gray-100 font-semibold px-8">
              Contact Us Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
