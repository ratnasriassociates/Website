import { motion } from 'motion/react';
import { Search, Filter, MapPin, Home, Building } from 'lucide-react';
import { PROPERTIES } from '@/src/constants';
import LeadForm from '@/src/components/LeadForm';
import { useState } from 'react';

export default function RealEstatePage() {
  const [filter, setFilter] = useState<'All' | 'Residential' | 'Commercial'>('All');

  const filteredProperties = filter === 'All' 
    ? PROPERTIES 
    : PROPERTIES.filter(p => p.type === filter);

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-navy py-20 px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl text-white mb-6">Find Your Dream Property in Hyderabad</h1>
          <p className="text-gray-400 text-lg">
            Explore our curated list of premium and affordable residential and commercial properties.
          </p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 -mt-10 mb-16">
        <div className="bg-white p-6 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search by location or property name..."
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <button 
              onClick={() => setFilter('All')}
              className={`flex-1 md:flex-none px-6 py-3 rounded-xl font-semibold transition-all ${filter === 'All' ? 'bg-gold text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('Residential')}
              className={`flex-1 md:flex-none px-6 py-3 rounded-xl font-semibold transition-all ${filter === 'Residential' ? 'bg-gold text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              Residential
            </button>
            <button 
              onClick={() => setFilter('Commercial')}
              className={`flex-1 md:flex-none px-6 py-3 rounded-xl font-semibold transition-all ${filter === 'Commercial' ? 'bg-gold text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              Commercial
            </button>
          </div>
        </div>
      </section>

      {/* Listings */}
      <section className="section-padding pt-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((prop) => (
            <motion.div
              key={prop.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 group"
            >
              <div className="relative h-64">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-navy font-bold text-sm shadow-sm">
                  {prop.type}
                </div>
                <div className="absolute bottom-4 left-4 bg-gold text-white px-3 py-1 rounded text-xs font-bold">
                  {prop.status}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2">{prop.title}</h3>
                <p className="text-gray-500 flex items-center gap-1 mb-4">
                  <MapPin size={16} className="text-gold" /> {prop.location}
                </p>
                <div className="flex gap-4 mb-6">
                  {prop.beds && (
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <span className="font-bold">{prop.beds}</span> Beds
                    </div>
                  )}
                  {prop.baths && (
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <span className="font-bold">{prop.baths}</span> Baths
                    </div>
                  )}
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <span className="font-bold">{prop.area}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                  <span className="text-2xl font-bold text-navy">{prop.price}</span>
                  <button className="btn-gold py-2 px-4 text-sm">View Details</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="bg-gray-50 section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl text-navy mb-6">Can't Find What You're Looking For?</h2>
            <p className="text-gray-600 text-lg mb-8">
              Tell us your requirements and our property experts will find the best options for you in Hyderabad.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gold/10 text-gold rounded-full flex items-center justify-center">
                  <Home size={20} />
                </div>
                <span className="text-navy font-medium">Personalized Property Search</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gold/10 text-gold rounded-full flex items-center justify-center">
                  <Building size={20} />
                </div>
                <span className="text-navy font-medium">Commercial Real Estate Advisory</span>
              </div>
            </div>
          </div>
          <LeadForm title="Property Inquiry" />
        </div>
      </section>
    </div>
  );
}
