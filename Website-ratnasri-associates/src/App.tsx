import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import RealEstatePage from './pages/RealEstatePage';
import InsurancePage from './pages/InsurancePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

import BlogPage from './pages/BlogPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/real-estate" element={<RealEstatePage />} />
            <Route path="/insurance" element={<InsurancePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        
        {/* Sticky Call Button for Mobile */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-100 p-3 flex gap-3">
          <a href="tel:+919876543210" className="flex-1 btn-primary flex items-center justify-center gap-2 py-3">
            Call Now
          </a>
          <a href="https://wa.me/919876543210" className="flex-1 btn-gold flex items-center justify-center gap-2 py-3">
            WhatsApp
          </a>
        </div>
      </div>
    </Router>
  );
}
