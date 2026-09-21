import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Stethoscope, Clock, MapPin, Calendar, ArrowLeft, CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import { asmApi } from '../api/asmApi';

export default function StaffDetailPage() {
  const { slug } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const doc = await asmApi.getDoctor(slug);
      setDoctor(doc);
      setLoading(false);
    }
    load();
  }, [slug]);

  if (loading || !doctor) {
    return (
      <div style={{ padding: '5rem 0', textAlign: 'center' }}>
        <p>Yükleniyor...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '3.5rem 0', background: '#f8fafc' }}>
      <div className="container" style={{ maxWidth: '880px' }}>
        
        <Link to="/kadromuz/aile-hekimlerimiz" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#0284c7', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          <ArrowLeft size={16} />
          <span>Tüm Hekimlerimize Dön</span>
        </Link>

        <div className="glass-card" style={{ padding: '2.5rem', background: '#ffffff', borderRadius: '24px', border: '1.5px solid #e2e8f0', borderTop: `6px solid ${doctor.avatar_color || '#0284c7'}` }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <div 
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '22px',
                background: `linear-gradient(135deg, ${doctor.avatar_color || '#0284c7'} 0%, #0369a1 100%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                boxShadow: '0 10px 20px rgba(2, 132, 199, 0.25)'
              }}
            >
              <Stethoscope size={40} />
            </div>

            <div>
              <span className="badge badge-primary" style={{ marginBottom: '0.4rem' }}>
                {doctor.unit_no} Nolu Birim Aile Hekimliği
              </span>
              <h1 style={{ fontSize: '2rem', color: '#0f172a', lineHeight: 1.2 }}>
                {doctor.title} {doctor.name}
              </h1>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', background: '#f8fafc', padding: '1.25rem', borderRadius: '14px', marginBottom: '2rem' }}>
            <div>
              <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>Poliklinik Odası</div>
              <div style={{ fontSize: '1rem', fontWeight: 600, color: '#0f172a' }}>{doctor.room_no}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>Gezici Sağlık Köyleri</div>
              <div style={{ fontSize: '1rem', fontWeight: 600, color: '#0d9488' }}>{doctor.mobile_villages}</div>
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '0.75rem', borderLeft: '3px solid #0284c7', paddingLeft: '0.6rem' }}>
              Hekim Hakkında & Özgeçmiş
            </h3>
            <p style={{ color: '#334155', lineHeight: 1.8, fontSize: '0.95rem' }}>
              {doctor.bio}
            </p>
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '0.75rem', borderLeft: '3px solid #0d9488', paddingLeft: '0.6rem' }}>
              Haftalık Mesai ve Gezici Hizmet Programı
            </h3>
            <div style={{ background: '#f0fdfa', border: '1px solid #ccfbf1', padding: '1.25rem', borderRadius: '14px', whiteSpace: 'pre-line', color: '#134e4a', fontSize: '0.92rem', lineHeight: 1.7 }}>
              {doctor.schedule}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', borderTop: '1px solid #e2e8f0', paddingTop: '1.75rem' }}>
            <a 
              href="https://www.hastanerandevu.gov.tr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-danger"
            >
              <Calendar size={18} />
              <span>MHRS'den Randevu Al</span>
            </a>

            <Link to="/iletisim" className="btn btn-primary">
              <MessageCircle size={18} />
              <span>Hekime Soru Sor / Bildirim</span>
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
