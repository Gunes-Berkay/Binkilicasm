import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Clock, MapPin, Calendar, ChevronRight } from 'lucide-react';
import { asmApi } from '../api/asmApi';

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await asmApi.getDoctors();
      setDoctors(data);
    }
    load();
  }, []);

  return (
    <div style={{ padding: '3.5rem 0', background: '#f8fafc' }}>
      <div className="container">
        
        <div style={{ marginBottom: '2.5rem' }}>
          <span className="sub-badge">KADROMUZ</span>
          <h1 style={{ fontSize: '2.5rem', marginTop: '0.35rem', marginBottom: '0.75rem' }}>Aile Hekimlerimiz</h1>
          <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: '750px' }}>
            Binkılıç Aile Sağlığı Merkezimizde görev yapan aile hekimlerimiz, birim numaraları ve gezici hizmet bölgeleri.
          </p>
        </div>

        <div className="grid-2" style={{ maxWidth: '960px', margin: '0 auto' }}>
          {doctors.map((doc, idx) => (
            <div 
              key={idx}
              className="glass-card hover-lift"
              style={{
                padding: '2.25rem',
                background: '#ffffff',
                borderRadius: '20px',
                border: '1.5px solid #e2e8f0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderTop: `5px solid ${doc.avatar_color || (idx === 0 ? '#0284c7' : '#0d9488')}`
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div 
                    style={{
                      width: '68px',
                      height: '68px',
                      borderRadius: '18px',
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

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem', background: '#f8fafc', padding: '1rem 1.25rem', borderRadius: '12px', fontSize: '0.9rem' }}>
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

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', borderTop: '1px solid #e2e8f0', paddingTop: '1.25rem' }}>
                <Link 
                  to={`/kadro/${doc.slug || (doc.name.includes('Emre') ? 'dr-emre-ileri' : 'dr-menekse-yilmaz')}`}
                  className="btn btn-outline"
                  style={{ flex: 1, padding: '0.65rem 1rem', fontSize: '0.88rem' }}
                >
                  <span>Mesai Çizelgesi</span>
                  <ChevronRight size={15} />
                </Link>

                <a 
                  href="https://www.hastanerandevu.gov.tr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ padding: '0.65rem 1.15rem', fontSize: '0.88rem' }}
                >
                  <Calendar size={15} />
                  <span>Randevu Al</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
