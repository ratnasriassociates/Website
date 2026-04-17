import { MessageSquare } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '919876543210'; // Replace with actual number
  const message = encodeURIComponent('Hello! I am interested in your services.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare size={24} fill="currentColor" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 whitespace-nowrap font-medium">
        Chat with us
      </span>
    </a>
  );
}
