import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import LeadForm from '@/src/components/LeadForm';

export default function ContactPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-navy py-20 px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl text-white mb-6">Contact Us</h1>
          <p className="text-gray-400 text-lg">
            Have questions? We're here to help. Reach out to us for any real estate or insurance inquiries.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold/10 text-gold rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Call Us</p>
                    <p className="text-lg font-bold text-navy">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold/10 text-gold rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Email Us</p>
                    <p className="text-lg font-bold text-navy">info@ratnasri.com</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold/10 text-gold rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Visit Us</p>
                    <p className="text-lg font-bold text-navy">Plot No. 45, Hitech City, Hyderabad, 500081</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gold/10 text-gold rounded-xl flex items-center justify-center shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Working Hours</p>
                    <p className="text-lg font-bold text-navy">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-gray-100">
              <h3 className="font-bold text-navy mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {['FB', 'IG', 'LI', 'TW'].map(s => (
                  <a key={s} href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition-all font-bold text-xs">
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <LeadForm title="Send us a Message" subtitle="We'll get back to you within 24 hours." />
          </div>
        </div>
      </section>

      {/* Map Integration */}
      <section className="h-[450px] w-full bg-gray-200 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.22368311877!2d78.37284817516405!3d17.448984983448404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5eafc1%3A0x2548610b76751a28!2sHitech%20City%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1711364582345!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        ></iframe>
      </section>
    </div>
  );
}
