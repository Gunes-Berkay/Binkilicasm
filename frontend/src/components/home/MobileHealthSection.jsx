import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, MapPin, Calendar, Clock, Stethoscope, CheckCircle2, ChevronRight } from 'lucide-react';

export default function MobileHealthSection({ mobileServices = [] }) {
  const defaultServices = [
    {
      village_name: "Hallaçlı Köyü",
      doctor_name: "Dr. Emre İleri",
      days_and_hours: "Her Hafta Perşembe 09:00 - 12:00",
      service_location: "Hallaçlı Köy Konağı / Sağlık Evi",
      services: "Poliklinik muayenesi, reçete yazımı, tansiyon/şeker takibi, kronik hastalık izlemi ve aşı uygulaması."
    },
    {
      village_name: "Aydınlar Köyü",
      doctor_name: "Dr. Menekşe Yılmaz",
      days_and_hours: "Her Hafta Salı 09:00 - 12:00",
      service_location: "Aydınlar Köy Sağlık Evi",
      services: "Genel muayene, gebe-bebek izlemi, kan alımı yönlendirmesi, kanser tarama kitleri teslimi ve ilaç takibi."
    },
    {
      village_name: "Yaylacık Köyü",
      doctor_name: "Dr. Menekşe Yılmaz",
      days_and_hours: "Her Hafta Çarşamba 09:00 - 12:00",
      service_location: "Yaylacık Köy Muhtarlığı Sağlık Odası",
      services: "Poliklinik muayenesi, yatağa bağımlı ve yaşlı hasta kontrolü, pansuman ve enjeksiyon uygulamaları."
    }
  ];

  const list = mobileServices.length > 0 ? mobileServices : defaultServices;

  return (
    <section style={{ padding: '5rem 0', background: 'linear-gradient(180deg, #ffffff 0%, #f0fdfa 100%)', borderTop: '1px solid #e2e8f0' }}>
      <div className="container">
        
        <div className="section-title">
          <span className="sub-badge" style={{ color: '#0d9488' }}>KÖYLERİMİZE SAĞLIK HİZMETİ</span>
          <h2>Gezici (Mobil) Sağlık Hizmetlerimiz</h2>
          <p>Hekimlerimiz Dr. Emre İleri ve Dr. Menekşe Yılmaz, belirlenen günlerde köylerimizde yerinde muayene ve izlem hizmeti vermektedir.</p>
        </div>

        <div className="grid-3" style={{ marginBottom: '3rem' }}>
          {list.map((item, idx) => (
            <div 
              key={idx}
              className="glass-card hover-lift"
              style={{
                padding: '2rem',
                border: '1.5px solid #ccfbf1',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: '#ffffff'
              }}
            >
              <div>
                {/* Header: Village & Doctor Badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#ccfbf1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0d9488' }}>
                      <Compass size={22} />
                    </div>
                    <h3 style={{ fontSize: '1.3rem', color: '#0f172a' }}>{item.village_name}</h3>
                  </div>
                  <span className="badge badge-secondary">{item.doctor_name}</span>
                </div>

                {/* Timing & Location Info */}
                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '12px', marginBottom: '1.25rem', fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0f766e', fontWeight: 600 }}>
                    <Calendar size={15} />
                    <span>{item.days_and_hours}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#475569' }}>
                    <MapPin size={15} color="#e11d48" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{item.service_location}</span>
                  </div>
                </div>

                {/* Services details */}
                <div style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  <div style={{ fontWeight: 700, color: '#0f172a', marginBottom: '0.4rem' }}>Verilen Hizmetler:</div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                    <CheckCircle2 size={16} color="#0d9488" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{item.services}</span>
                  </div>
                </div>
              </div>

              <Link 
                to="/kurumsal/gezici-hizmetlerimiz" 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.65rem 1rem',
                  background: '#f0fdfa',
                  borderRadius: '10px',
                  color: '#0d9488',
                  fontWeight: 700,
                  fontSize: '0.85rem'
                }}
              >
                <span>Tüm Köy Ziyaret Takvimi</span>
                <ChevronRight size={16} />
              </Link>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
