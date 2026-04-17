import { useState, FormEvent } from 'react';
import { Send } from 'lucide-react';

interface LeadFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function LeadForm({ title, subtitle, className }: LeadFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className={`bg-white p-8 rounded-xl shadow-xl text-center ${className}`}>
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send size={32} />
        </div>
        <h3 className="text-2xl font-bold text-navy mb-2">Thank You!</h3>
        <p className="text-gray-600">Our expert will contact you shortly.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-6 text-gold font-semibold hover:underline"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <div className={`bg-white p-8 rounded-xl shadow-xl ${className}`}>
      {title && <h3 className="text-2xl font-bold text-navy mb-2">{title}</h3>}
      {subtitle && <p className="text-gray-600 mb-6">{subtitle}</p>}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            required
            type="text"
            className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input
            required
            type="tel"
            className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
            placeholder="+91 98765 43210"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Requirement</label>
          <select className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all">
            <option>Buy Property</option>
            <option>Rent Property</option>
            <option>Sell Property</option>
            <option>Life Insurance</option>
            <option>Health Insurance</option>
            <option>Vehicle Insurance</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
          <textarea
            rows={3}
            className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
            placeholder="How can we help you?"
          ></textarea>
        </div>
        <button
          disabled={status === 'loading'}
          type="submit"
          className="w-full btn-gold py-3 flex items-center justify-center gap-2 disabled:opacity-70"
        >
          {status === 'loading' ? 'Sending...' : 'Get Expert Advice Now'}
        </button>
      </form>
    </div>
  );
}
