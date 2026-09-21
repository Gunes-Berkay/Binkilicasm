import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MessageCircle, MapPin, ShieldCheck, Clock, Phone, Stethoscope, ChevronRight, Navigation } from 'lucide-react';

export default function HeroBanner({ info }) {
  const googleMapsUrl = "https://www.google.com/maps/dir/?api=1&destination=41.4107,28.1846";

  return (
    <section 
      style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #0b1329 0%, #034e70 50%, #065f46 100%)',
        color: '#ffffff',
        padding: '4.5rem 0 5rem 0',
        overflow: 'hidden'
      }}
    >
      {/* Background Decorative Blur Circles */}
      <div 
        style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'rgba(56, 189, 248, 0.15)',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '-80px',
          left: '-80px',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'rgba(16, 185, 129, 0.15)',
          filter: 'blur(70px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          
          {/* Left Column: Title & Actions */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255, 255, 255, 0.12)', backdropFilter: 'blur(8px)', padding: '0.35rem 0.95rem', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600, color: '#38bdf8', marginBottom: '1.25rem' }}>
              <ShieldCheck size={16} />
              <span>T.C. Sağlık Bakanlığı • İstanbul Çatalca</span>
            </div>

            <h1 style={{ fontSize: '2.85rem', color: '#ffffff', marginBottom: '1.25rem', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
              Binkılıç Aile Sağlığı Merkezi
            </h1>

            <p style={{ fontSize: '1.12rem', color: '#cbd5e1', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '560px' }}>
              Dr. Emre İleri ve Dr. Menekşe Yılmaz hekimliğinde koruyucu sağlık, poliklinik muayenesi, bağışıklama ve <strong>Hallaçlı, Aydınlar, Yaylacık</strong> köylerimize düzenli gezici sağlık hizmeti sunmaktayız.
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta-group" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <a 
                href="https://www.hastanerandevu.gov.tr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-danger hero-btn"
                style={{ padding: '0.85rem 1.75rem', fontSize: '1rem', borderRadius: '12px' }}
              >
                <Calendar size={18} />
                <span>MHRS Randevu Al</span>
              </a>

              <a 
                href={`https://wa.me/90${(info?.whatsapp || '05461286629').replace(/\D/g, '')}?text=Merhaba,%20Binkılıç%20ASM%20danışma%20hattına%20yazıyorum.`}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-whatsapp hero-btn"
                style={{ padding: '0.85rem 1.75rem', fontSize: '1rem', borderRadius: '12px' }}
              >
                <MessageCircle size={18} />
                <span>WhatsApp Danışma</span>
              </a>

              <Link 
                to="/kurumsal/gezici-hizmetlerimiz" 
                className="btn btn-white hero-btn"
                style={{ padding: '0.85rem 1.5rem', fontSize: '0.95rem', borderRadius: '12px' }}
              >
                <span>Gezici Hizmet Programı</span>
                <ChevronRight size={16} />
              </Link>
            </div>

            {/* Quick Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.15)', paddingTop: '1.5rem' }}>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#38bdf8' }}>2 Birim</div>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Aile Hekimliği</div>
              </div>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#4ade80' }}>3 Köy</div>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Gezici Sağlık</div>
              </div>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f43f5e' }}>%100</div>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Ücretsiz Hizmet</div>
              </div>
            </div>

          </div>

          {/* Right Column: ASM Building Photo & Direct Google Maps Direction */}
          <div>
            <div 
              style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                border: '4px solid rgba(255, 255, 255, 0.15)'
              }}
            >
              <img 
                src="/images/binkilic_asm.jpg" 
                alt="Binkılıç Aile Sağlığı Merkezi Binası"
                className="hero-building-img"
                style={{ width: '100%', height: '360px', objectFit: 'cover' }}
              />
              
              {/* Overlay Badge with direct Google Maps link */}
              <div 
                style={{
                  position: 'absolute',
                  bottom: '15px',
                  left: '15px',
                  right: '15px',
                  background: 'rgba(15, 23, 42, 0.88)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '14px',
                  padding: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: 700, textTransform: 'uppercase' }}>Binkılıç Hizmet Binası</div>
                  <div style={{ fontSize: '0.88rem', color: '#ffffff', fontWeight: 600 }}>Atatürk Mah. Çatalca</div>
                </div>

                <a 
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{
                    padding: '0.55rem 1rem',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    borderRadius: '10px'
                  }}
                >
                  <Navigation size={15} />
                  <span>Yol Tarifi Al</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-cta-group { flex-direction: column; gap: 0.75rem !important; }
          .hero-btn { width: 100%; justify-content: center; }
          .hero-building-img { height: 230px !important; }
        }
      `}</style>
    </section>
  );
}
