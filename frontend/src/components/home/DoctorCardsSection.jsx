import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Clock, MapPin, Calendar, ChevronRight, ShieldCheck } from 'lucide-react';

export default function DoctorCardsSection({ doctors = [] }) {
  return (
    <section style={{ padding: '5rem 0', background: '#f8fafc' }}>
      <div className="container">
        
        <div className="section-title">
          <span className="sub-badge">SAĞLIK KADROMUZ</span>
          <h2>Binkılıç Aile Hekimlerimiz</h2>
          <p>Merkezimizde ve çevre köylerimizde sizlere kesintisiz birinci basamak sağlık hizmeti sunan hekimlerimiz.</p>
        </div>

        <div className="grid-2" style={{ maxWidth: '960px', margin: '0 auto 3rem auto' }}>
          {doctors.map((doc, idx) => (
            <div 
              key={idx}
              className="glass-card hover-lift"
              style={{
                padding: '2.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1.5px solid #e2e8f0',
                position: 'relative',
                overflow: 'hidden',
                background: '#ffffff',
                borderRadius: '20px'
              }}
            >
              {/* Top Accent Bar */}
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '5px',
                  background: doc.avatar_color || (idx === 0 ? '#0284c7' : '#0d9488')
                }}
              />

              <div>
                {/* Doctor Avatar Badge & Unit No */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div 
                      style={{
                        width: '68px',
                        height: '68px',
                        borderRadius: '20px',
                        background: `linear-gradient(135deg, ${doc.avatar_color || '#0284c7'} 0%, #0369a1 100%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        boxShadow: '0 8px 16px rgba(2, 132, 199, 0.25)'
                      }}
                    >
                      <Stethoscope size={34} />
                    </div>

                    <div>
                      <span className="badge badge-primary" style={{ marginBottom: '0.35rem' }}>
                        {doc.unit_no} Nolu Birim
                      </span>
                      <h3 style={{ fontSize: '1.35rem', color: '#0f172a' }}>
                        {doc.title} {doc.name}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Poliklinik & Gezici Hizmet Info */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem', background: '#f1f5f9', padding: '1rem 1.25rem', borderRadius: '12px', fontSize: '0.9rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#334155' }}>
                    <Clock size={16} color="#0284c7" />
                    <span><strong>Oda:</strong> {doc.room_no}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: '#0f766e' }}>
                    <MapPin size={16} color="#0d9488" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span><strong>Gezici Hizmet:</strong> {doc.mobile_villages}</span>
                  </div>
                </div>

                <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                  {doc.bio}
                </p>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', borderTop: '1px solid #e2e8f0', paddingTop: '1.25rem' }}>
                <Link 
                  to="/kadromuz"
                  className="btn btn-outline"
                  style={{ flex: 1, padding: '0.65rem 1rem', fontSize: '0.88rem' }}
                >
                  <span>Mesai & Kadro Detayı</span>
                  <ChevronRight size={15} />
                </Link>

                <a 
                  href="https://www.hastanerandevu.gov.tr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-danger"
                  style={{ padding: '0.65rem 1.15rem', fontSize: '0.88rem' }}
                >
                  <Calendar size={15} />
                  <span>Randevu Al</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Staff Quick CTA Banner */}
        <div 
          style={{
            background: '#ffffff',
            borderRadius: '16px',
            padding: '1.75rem 2rem',
            border: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#ccfbf1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0d9488' }}>
              <ShieldCheck size={26} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Aile Sağlığı Çalışanlarımız ve Personelimiz</h4>
              <p style={{ fontSize: '0.88rem', color: '#64748b' }}>Hemşire Elif Alp, Ebe Elif Öncül, Hemşire Simge Ceryan ve Temizlik Personeli Nuray Demirel.</p>
            </div>
          </div>

          <Link to="/kadromuz" className="btn btn-secondary" style={{ fontSize: '0.9rem' }}>
            <span>Tüm Kadroyu İncele</span>
            <ChevronRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}
