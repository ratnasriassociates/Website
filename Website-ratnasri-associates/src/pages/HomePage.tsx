import { motion } from 'motion/react';
import { ArrowRight, Home, Shield, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROPERTIES, TESTIMONIALS } from '@/src/constants';
import LeadForm from '@/src/components/LeadForm';

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=2000"
            alt="Hyderabad Skyline"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent"></div>
        </div>

        <div className="section-padding relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 bg-gold/20 text-gold rounded-full text-sm font-bold mb-6">
              Trusted in Hyderabad Since 2010
            </span>
            <h1 className="text-4xl md:text-6xl text-white mb-6 leading-tight">
              Your Trusted Partner in <span className="text-gold">Real Estate</span> & <span className="text-gold">Insurance</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              Premium & affordable solutions tailored for you. Whether you're looking for your dream home or securing your family's future, we are here to guide you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-gold flex items-center gap-2">
                Get Free Consultation <ArrowRight size={18} />
              </Link>
              <Link to="/real-estate" className="btn-outline border-white text-white hover:bg-white hover:text-navy">
                Browse Properties
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <LeadForm 
              title="Quick Inquiry" 
              subtitle="Fill the form and our experts will call you back."
              className="max-w-md ml-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-navy mb-4">Our Core Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide end-to-end support for all your property and insurance needs in Hyderabad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Real Estate */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-gold"
          >
            <div className="w-16 h-16 bg-gold/10 text-gold rounded-xl flex items-center justify-center mb-6">
              <Home size={32} />
            </div>
            <h3 className="text-2xl font-bold text-navy mb-4">Real Estate Services</h3>
            <p className="text-gray-600 mb-6">
              Find the perfect residential or commercial property. We handle buying, selling, and renting with complete transparency.
            </p>
            <ul className="space-y-3 mb-8">
              {['Residential Properties', 'Commercial Spaces', 'Plot Sales', 'Rental Management'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle size={18} className="text-gold" /> {item}
                </li>
              ))}
            </ul>
            <Link to="/real-estate" className="text-navy font-bold flex items-center gap-2 hover:text-gold transition-colors">
              Explore Properties <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Insurance */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-navy"
          >
            <div className="w-16 h-16 bg-navy/10 text-navy rounded-xl flex items-center justify-center mb-6">
              <Shield size={32} />
            </div>
            <h3 className="text-2xl font-bold text-navy mb-4">Insurance Services</h3>
            <p className="text-gray-600 mb-6">
              Secure your future with our comprehensive insurance plans. We offer tailored advice for life, health, and vehicles.
            </p>
            <ul className="space-y-3 mb-8">
              {['Life Insurance', 'Health Insurance', 'Vehicle Insurance', 'General Insurance'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle size={18} className="text-navy" /> {item}
                </li>
              ))}
            </ul>
            <Link to="/insurance" className="text-navy font-bold flex items-center gap-2 hover:text-gold transition-colors">
              View Insurance Plans <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="bg-gray-50 section-padding">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl text-navy mb-4">Featured Properties</h2>
            <p className="text-gray-600">Handpicked listings in prime locations across Hyderabad.</p>
          </div>
          <Link to="/real-estate" className="btn-outline">View All Properties</Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROPERTIES.map((prop) => (
            <motion.div
              key={prop.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-gold text-white px-3 py-1 rounded text-xs font-bold">
                  {prop.status}
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-bold text-lg text-navy mb-1 truncate">{prop.title}</h4>
                <p className="text-gray-500 text-sm mb-3 flex items-center gap-1">
                  <span className="text-gold">📍</span> {prop.location}
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-gold font-bold text-lg">{prop.price}</span>
                  <span className="text-xs text-gray-400">{prop.area}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000"
              alt="Professional Team"
              className="rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 bg-gold p-8 rounded-2xl shadow-xl hidden md:block">
              <p className="text-4xl font-bold text-white">14+</p>
              <p className="text-white font-medium">Years Experience</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl text-navy mb-8">Why Choose Ratnasri Associates?</h2>
            <div className="space-y-8">
              {[
                { title: 'Trusted & Transparent', desc: 'No hidden costs. We maintain complete transparency in every deal.' },
                { title: 'Expert Guidance', desc: 'Our team of experts provides data-driven advice for your investments.' },
                { title: 'Affordable & Premium Options', desc: 'We cater to all budgets, from affordable housing to luxury villas.' },
                { title: 'End-to-End Support', desc: 'From documentation to final handover, we handle everything.' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 bg-gold/10 text-gold rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-navy mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-navy py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-white mb-4">What Our Clients Say</h2>
            <p className="text-gray-400">Real stories from people who trusted us with their future.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-gold/50 transition-colors">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6">"{t.content}"</p>
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-gold text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-navy mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Common questions about our real estate and insurance services.</p>
          </div>
          <div className="space-y-4">
            {[
              { q: 'What areas in Hyderabad do you cover?', a: 'We cover all major areas in Hyderabad including Hitech City, Gachibowli, Jubilee Hills, Banjara Hills, Kondapur, and upcoming growth corridors.' },
              { q: 'Do you help with property documentation?', a: 'Yes, we provide end-to-end support including legal verification, documentation, and registration assistance.' },
              { q: 'Which insurance companies do you partner with?', a: 'We partner with leading insurance providers in India to offer you a wide range of life, health, and vehicle insurance options.' },
              { q: 'Are there any consultation fees?', a: 'Our initial consultation is completely free. We only charge a standard commission or service fee upon successful completion of a transaction.' },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-navy list-none">
                  {faq.q}
                  <span className="text-gold transition-transform group-open:rotate-180">▼</span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Section */}
      <section className="section-padding">
        <div className="bg-gold/10 rounded-3xl p-8 md:p-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl text-navy mb-6">Ready to Find Your Dream Property?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Or looking for the best insurance plan? Talk to our experts today for a no-obligation consultation.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 text-navy font-bold text-xl">
                <span className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">📞</span>
                +91 98765 43210
              </div>
              <div className="flex items-center gap-4 text-navy font-bold text-xl">
                <span className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">✉️</span>
                info@ratnasri.com
              </div>
            </div>
          </div>
          <LeadForm />
        </div>
      </section>
    </div>
  );
}
