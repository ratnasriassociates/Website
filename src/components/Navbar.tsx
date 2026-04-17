import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Real Estate', href: '/real-estate' },
  { name: 'Insurance', href: '/insurance' },
  { name: 'Blog', href: '/blog' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8',
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-navy flex items-center justify-center rounded-lg">
            <span className="text-gold font-bold text-xl">R</span>
          </div>
          <div className="flex flex-col">
            <span className={cn("font-display font-bold text-lg leading-tight", isScrolled ? "text-navy" : "text-navy")}>
              Ratnasri
            </span>
            <span className={cn("text-xs tracking-widest font-medium", isScrolled ? "text-gold" : "text-gold")}>
              ASSOCIATES
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                'font-medium transition-colors hover:text-gold',
                location.pathname === link.href ? 'text-gold' : 'text-navy'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn-gold py-2 px-5 text-sm">
            Get Consultation
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-navy"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl md:hidden border-t border-gray-100"
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-lg font-medium py-2 border-b border-gray-50',
                    location.pathname === link.href ? 'text-gold' : 'text-navy'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <a href="tel:+919876543210" className="btn-primary flex items-center justify-center gap-2">
                  <Phone size={18} /> Call Now
                </a>
                <Link to="/contact" onClick={() => setIsOpen(false)} className="btn-gold text-center">
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
