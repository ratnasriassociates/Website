import { motion } from 'motion/react';
import { Shield, Heart, Car, CheckCircle, ArrowRight, UserCheck } from 'lucide-react';
import LeadForm from '@/src/components/LeadForm';

const INSURANCE_TYPES = [
  {
    title: 'Life Insurance',
    icon: <Heart size={40} />,
    color: 'text-red-500',
    bg: 'bg-red-50',
    description: 'Ensure your family\'s financial security even when you\'re not around. We offer term life, whole life, and endowment plans.',
    benefits: ['High Coverage', 'Tax Benefits', 'Family Security', 'Wealth Creation']
  },
  {
    title: 'Health Insurance',
    icon: <Shield size={40} />,
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    description: 'Don\'t let medical emergencies drain your savings. Get comprehensive health cover for you and your family.',
    benefits: ['Cashless Treatment', 'Critical Illness Cover', 'No Claim Bonus', 'Pre-existing Disease Cover']
  },
  {
    title: 'Vehicle Insurance',
    icon: <Car size={40} />,
    color: 'text-gold',
    bg: 'bg-gold/10',
    description: 'Protect your car or bike against accidents, theft, and natural calamities with our hassle-free vehicle insurance.',
    benefits: ['Zero Depreciation', 'Roadside Assistance', 'Quick Claim Settlement', 'Third Party Liability']
  }
];

export default function InsurancePage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-navy py-24 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 -skew-x-12 transform translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl text-white mb-6">Secure Your Future with <span className="text-gold">Smart Insurance</span> Plans</h1>
            <p className="text-gray-400 text-xl mb-8">
              Expert guidance to help you choose the right protection for your life, health, and assets in Hyderabad.
            </p>
            <button className="btn-gold">Get Insurance Guidance</button>
          </motion.div>
        </div>
      </section>

      {/* Insurance Types */}
      <section className="section-padding">
        <div className="grid lg:grid-cols-3 gap-8">
          {INSURANCE_TYPES.map((type, idx) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:border-gold/30 transition-all group"
            >
              <div className={`w-20 h-20 ${type.bg} ${type.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                {type.icon}
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">{type.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {type.description}
              </p>
              <div className="space-y-3 mb-8">
                {type.benefits.map(benefit => (
                  <div key={benefit} className="flex items-center gap-2 text-gray-700 font-medium">
                    <CheckCircle size={18} className="text-green-500" /> {benefit}
                  </div>
                ))}
              </div>
              <button className="w-full py-3 border-2 border-navy text-navy rounded-xl font-bold hover:bg-navy hover:text-white transition-all">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Us for Insurance */}
      <section className="bg-gray-50 section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <LeadForm title="Get a Quote" subtitle="Fill the form and our insurance experts will help you find the best plan." />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl text-navy mb-8">Why Choose Ratnasri Associates for Insurance?</h2>
            <div className="space-y-6">
              {[
                { title: 'Unbiased Advice', desc: 'We represent multiple insurance providers to give you the best options.' },
                { title: 'Claim Support', desc: 'Our team assists you throughout the claim process for a stress-free experience.' },
                { title: 'Customized Plans', desc: 'We tailor insurance solutions based on your specific needs and budget.' },
                { title: 'Local Presence', desc: 'Being in Hyderabad, we are always available for face-to-face consultations.' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center shrink-0">
                    <UserCheck size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-navy mb-1">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
