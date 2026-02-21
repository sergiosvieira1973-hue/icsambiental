import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/constants';

const WhatsAppButton = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-lg hover:scale-110 transition-transform duration-200"
    aria-label="Contato via WhatsApp"
  >
    <MessageCircle size={28} />
  </a>
);

export default WhatsAppButton;
