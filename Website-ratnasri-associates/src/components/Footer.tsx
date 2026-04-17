import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white flex items-center justify-center rounded-lg">
              <span className="text-navy font-bold text-xl">R</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg leading-tight text-white">
                Ratnasri
              </span>
              <span className="text-xs tracking-widest font-medium text-gold">
                ASSOCIATES
              </span>
            </div>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your trusted partner in Hyderabad for premium real estate and comprehensive insurance solutions. We combine local expertise with a customer-first approach.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors">
              <Facebook size={16} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors">
              <Instagram size={16} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors">
              <Linkedin size={16} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors">
              <Twitter size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-gold">Quick Links</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/real-estate" className="hover:text-white transition-colors">Real Estate</Link></li>
            <li><Link to="/insurance" className="hover:text-white transition-colors">Insurance</Link></li>
            <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-gold">Our Services</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li>Property Buying</li>
            <li>Property Selling</li>
            <li>Rental Services</li>
            <li>Life Insurance</li>
            <li>Health Insurance</li>
            <li>Vehicle Insurance</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-gold">Contact Us</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="text-gold shrink-0" />
              <span>Plot No. 45, Hitech City, Hyderabad, Telangana 500081</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="text-gold shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="text-gold shrink-0" />
              <span>info@ratnasri.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-xs">
        <p>© {new Date().getFullYear()} Ratnasri Associates. All rights reserved. Designed for excellence.</p>
      </div>
    </footer>
  );
}
