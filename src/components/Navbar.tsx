import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-brand-blue py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-white text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+919100753313" className="flex items-center gap-1 hover:text-brand-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+91 91007 53313</span>
            </a>
            <a href="mailto:info@docsnpacks.com" className="flex items-center gap-1 hover:text-brand-accent transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">info@docsnpacks.com</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span>Hyderabad | Chennai | Delhi | Mumbai | Vizag | Pune | Bangalore</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-brand-black rounded-lg flex items-center justify-center">
                <span className="text-brand-blue font-bold text-lg lg:text-xl">DP</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-brand-black font-bold text-lg lg:text-xl leading-tight">
                  DOCS N PACKS
                </h1>
                <p className="text-brand-gray text-xs">Logistics Solutions</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative font-medium text-sm transition-colors hover:text-brand-blue ${
                    location.pathname === link.path
                      ? 'text-brand-blue'
                      : 'text-brand-dark'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-blue rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to="/contact">
                <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white font-medium px-6">
                  Get Quote
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-brand-dark" />
              ) : (
                <Menu className="w-6 h-6 text-brand-dark" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white border-t px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block py-3 px-4 rounded-lg font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'bg-brand-blue/10 text-brand-blue'
                    : 'text-brand-dark hover:bg-gray-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="block pt-2">
              <Button className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-medium">
                Get Quote
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
