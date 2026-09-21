import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Stethoscope, 
  Baby, 
  Syringe, 
  HeartPulse, 
  FlaskConical, 
  ShieldAlert, 
  Activity, 
  Bandage, 
  LineChart, 
  ChevronRight 
} from 'lucide-react';

const iconMap = {
  Stethoscope: Stethoscope,
  Baby: Baby,
  Syringe: Syringe,
  HeartPulse: HeartPulse,
  FlaskConical: FlaskConical,
  ShieldAlert: ShieldAlert,
  Activity: Activity,
  Bandage: Bandage,
  LineChart: LineChart,
};

export default function ServicesSection({ services = [] }) {
  const defaultServices = [
    { title: "Poliklinik Muayenesi", description: "Hekimlerimizce teşhis, tedavi ve reçetelendirme işlemleri.", icon: "Stethoscope", standard_duration: "15 Dakika" },
    { title: "Bebek ve Çocuk İzlemleri", description: "Büyüme, gelişme, kilo, boy ve baş çevresi takibi.", icon: "Baby", standard_duration: "20 Dakika" },
    { title: "Bağışıklama (Aşı) Hizmetleri", description: "Bebek, çocuk ve yetişkin rutin aşılarının uygulanması.", icon: "Syringe", standard_duration: "10 Dakika" },
    { title: "Gebe ve Lohusa İzlemleri", description: "Gebelikte tansiyon, kilo, bebek kalp sesi ve risk taraması.", icon: "HeartPulse", standard_duration: "20 Dakika" },
    { title: "Laboratuvar Tetkikleri", description: "Kan ve idrar tetkiklerinin alınması ve laboratuvara iletimi.", icon: "FlaskConical", standard_duration: "10 Dakika" },
    { title: "Aile Planlaması Danışmanlığı", description: "Üreme sağlığı, korunma yöntemleri bilgilendirmesi.", icon: "ShieldAlert", standard_duration: "15 Dakika" }
  ];

  const list = services.length > 0 ? services : defaultServices;

  return (
    <section style={{ padding: '5rem 0', background: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
      <div className="container">
        
        <div className="section-title">
          <span className="sub-badge">BİRİNCİ BASAMAK SAĞLIK</span>
          <h2>Verilen Sağlık Hizmetleri</h2>
          <p>Binkılıç Aile Sağlığı Merkezimizde ücretsiz olarak sunulan temel sağlık hizmetleri ve standart işlem süreleri.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'flex-start' }}>
          
          {/* Left: Services 2-column mini grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {list.slice(0, 6).map((service, idx) => {
              const IconComp = iconMap[service.icon] || Stethoscope;
              return (
                <div 
                  key={idx}
                  className="hover-lift"
                  style={{
                    padding: '1.5rem',
                    borderRadius: '16px',
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem'
                  }}
                >
                  <div 
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: '#e0f2fe',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0284c7',
                      flexShrink: 0
                    }}
                  >
                    <IconComp size={24} />
                  </div>

                  <div>
                    <h4 style={{ fontSize: '1.05rem', color: '#0f172a', marginBottom: '0.35rem' }}>
                      {service.title}
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5, marginBottom: '0.5rem' }}>
                      {service.description}
                    </p>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0d9488', background: '#ccfbf1', padding: '2px 8px', borderRadius: '4px' }}>
                      Süre: {service.standard_duration || "15 Dk"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Video & Information Card */}
          <div 
            style={{
              background: '#0f172a',
              color: '#ffffff',
              borderRadius: '24px',
              padding: '2rem',
              boxShadow: '0 20px 25px -5px rgba(0,0,0,0.2)'
            }}
          >
            <h3 style={{ color: '#ffffff', fontSize: '1.25rem', marginBottom: '0.75rem' }}>
              Aile Hekimliği Bilgilendirme
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Aile hekimliğinin işleyişi, birinci basamak sağlık merkezinde yapılan işlemler ve koruyucu hekimlik hakkında bilgilendirici video.
            </p>

            {/* Video iframe */}
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: '16px', overflow: 'hidden', marginBottom: '1.5rem' }}>
              <iframe
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                src="https://www.youtube.com/embed/425E4dXEtiE"
                title="Aile Hekimliği Bilgilendirme Videosu"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <Link 
              to="/kurumsal/hizmet-standartlari"
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'space-between' }}
            >
              <span>Tüm Hizmet Standartları Tablosu</span>
              <ChevronRight size={16} />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
