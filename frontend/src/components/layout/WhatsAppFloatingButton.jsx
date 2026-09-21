import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloatingButton({ phone = "05461286629" }) {
  const cleanPhone = phone.replace(/\D/g, '');
  const url = `https://wa.me/90${cleanPhone}?text=Merhaba,%20Binkılıç%20Aile%20Sağlığı%20Merkezi%20danışma%20hattına%20yazıyorum.`;

  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      title="Binkılıç ASM WhatsApp Danışma Hattı"
    >
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '24px',
          height: '24px'
        }}
      >
        <MessageCircle size={22} fill="#ffffff" color="#25d366" />
      </div>
      <span>WhatsApp Danışma</span>
    </a>
  );
}
