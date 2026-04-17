import { motion } from 'motion/react';
import { Target, Eye, Award, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-navy py-24 px-4 md:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl mb-6"
          >
            About Ratnasri Associates
          </motion.h1>
          <p className="text-gray-400 text-xl">
            Building trust and securing futures in Hyderabad for over a decade.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl text-navy mb-6">Your Trusted Advisor in Hyderabad</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Founded in 2010, Ratnasri Associates has grown to become one of Hyderabad's most respected real estate and insurance service providers. We started with a simple mission: to bring transparency and professionalism to industries that often lack them.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Today, we serve thousands of families and businesses across Hyderabad, helping them find their dream homes and protect their most valuable assets. Our team of experts combines deep local market knowledge with a commitment to customer satisfaction.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-bold text-gold mb-1">1000+</p>
                <p className="text-navy font-medium">Happy Clients</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-gold mb-1">500+</p>
                <p className="text-navy font-medium">Properties Sold</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000" 
              alt="Our Office" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-3">
                <Award className="text-gold" size={32} />
                <div>
                  <p className="font-bold text-navy">Award Winning</p>
                  <p className="text-xs text-gray-500">Service Excellence 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 section-padding">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white p-12 rounded-3xl shadow-xl"
          >
            <div className="w-16 h-16 bg-gold/10 text-gold rounded-2xl flex items-center justify-center mb-8">
              <Target size={32} />
            </div>
            <h3 className="text-3xl font-bold text-navy mb-6">Our Mission</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To provide transparent, expert, and customer-centric real estate and insurance solutions that empower our clients to make informed decisions for their future. We strive to be the most trusted partner for every family in Hyderabad.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white p-12 rounded-3xl shadow-xl"
          >
            <div className="w-16 h-16 bg-navy/10 text-navy rounded-2xl flex items-center justify-center mb-8">
              <Eye size={32} />
            </div>
            <h3 className="text-3xl font-bold text-navy mb-6">Our Vision</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To be the leading real estate and insurance partner in Hyderabad, recognized for our integrity, innovation, and unwavering commitment to helping our community build wealth and security.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-navy mb-4">Our Core Values</h2>
          <p className="text-gray-600">The principles that guide everything we do.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { title: 'Trust', desc: 'Building long-term relationships through honesty.' },
            { title: 'Transparency', desc: 'No hidden agendas, just clear communication.' },
            { title: 'Customer First', desc: 'Your needs are our top priority.' },
            { title: 'Excellence', desc: 'Striving for the best in every service we provide.' },
          ].map((value, idx) => (
            <div key={idx} className="text-center p-6">
              <div className="w-12 h-12 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={24} />
              </div>
              <h4 className="text-xl font-bold text-navy mb-2">{value.title}</h4>
              <p className="text-gray-600 text-sm">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
