import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Calendar } from 'lucide-react';

export default function TopBar({ info }) {
  return (
    <div style={{ background: '#0f172a', color: '#94a3b8', fontSize: '0.85rem', borderBottom: '1px solid #1e293b' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: '1560px', margin: '0 auto', padding: '0.5rem 2rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        
        {/* Left: Phone, WhatsApp, Address */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          <a href={`tel:${info?.phone || '0212 789 6334'}`} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#f8fafc', fontWeight: 600 }}>
            <Phone size={14} color="#38bdf8" />
            <span>{info?.phone || '0212 789 6334'}</span>
          </a>

          <a 
            href={`https://wa.me/90${(info?.whatsapp || '05461286629').replace(/\D/g, '')}?text=Merhaba,%20Binkılıç%20ASM%20danışma%20hattına%20yazıyorum.`} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#4ade80', fontWeight: 600 }}
          >
            <MessageCircle size={14} />
            <span>WhatsApp: {info?.whatsapp || '05461286629'}</span>
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#94a3b8' }}>
            <MapPin size={14} color="#f43f5e" />
            <span style={{ maxWidth: '340px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              Atatürk Mah. İstanbul Cad. No: 2 Binkılıç, Çatalca / İst.
            </span>
          </div>
        </div>

        {/* Right: Working hours & MHRS Link */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#e2e8f0' }}>
            <Clock size={14} color="#38bdf8" />
            <span>Hafta içi: 08:00 - 17:00</span>
          </div>

          <a 
            href="https://www.hastanerandevu.gov.tr/Randevu/login.xhtml" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              background: '#e11d48',
              color: '#ffffff',
              padding: '0.2rem 0.65rem',
              borderRadius: '6px',
              fontWeight: 700,
              fontSize: '0.78rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem'
            }}
          >
            <Calendar size={13} />
            <span>MHRS Randevu</span>
          </a>
        </div>

      </div>
    </div>
  );
}
