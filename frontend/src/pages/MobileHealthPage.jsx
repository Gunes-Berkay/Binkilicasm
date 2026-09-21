import React from 'react';
import { Compass, Calendar, Clock, MapPin, Stethoscope, CheckCircle2, AlertCircle } from 'lucide-react';

export default function MobileHealthPage() {
  const villages = [
    {
      name: "Hallaçlı Köyü",
      doctor: "Dr. Emre İleri",
      unit: "34.09.001 Nolu Birim",
      schedule: "Her Hafta Perşembe Günü",
      hours: "09:00 - 12:00",
      location: "Hallaçlı Köy Konağı / Sağlık Evi",
      color: "#0284c7",
      bg: "#e0f2fe",
      services: [
        "Poliklinik muayenesi ve genel sağlık kontrolü",
        "Rutin reçete yazımı ve sürekli kullanılan ilaçların takibi",
        "Hipertansiyon, şeker ve kronik hastalık ölçüm/takipleri",
        "Aşı takvimi kapsamındaki bebek ve yetişkin aşıları",
        "Yatağa bağımlı ve yaşlı hastaların evde değerlendirilmesi"
      ]
    },
    {
      name: "Aydınlar Köyü",
      doctor: "Dr. Menekşe Yılmaz",
      unit: "34.09.002 Nolu Birim",
      schedule: "Her Hafta Salı Günü",
      hours: "09:00 - 12:00",
      location: "Aydınlar Köy Sağlık Evi",
      color: "#0d9488",
      bg: "#ccfbf1",
      services: [
        "Birinci basamak muayene ve tedavi planlaması",
        "Gebe ve bebek izlemleri, gelişim kontrolleri",
        "Kanser taramaları (Gaitada Gizli Kan ve HPV tarama kitleri teslimi)",
        "Tansiyon ve kan şekeri takipleri",
        "Sağlık eğitimi ve koruyucu hekimlik danışmanlığı"
      ]
    },
    {
      name: "Yaylacık Köyü",
      doctor: "Dr. Menekşe Yılmaz",
      unit: "34.09.002 Nolu Birim",
      schedule: "Her Hafta Çarşamba Günü",
      hours: "09:00 - 12:00",
      location: "Yaylacık Köy Muhtarlığı Sağlık Odası",
      color: "#0d9488",
      bg: "#ccfbf1",
      services: [
        "Poliklinik muayenesi ve reçete düzenleme",
        "Kronik kalp, astım ve diyabet hastaları izlemi",
        "Enjeksiyon ve pansuman uygulamalarının planlanması",
        "Bebek aşı takviminin yerinde takibi",
        "Raporlu ilaç kontrolü ve danışmanlık"
      ]
    }
  ];

  return (
    <div style={{ padding: '3.5rem 0', background: '#f8fafc' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <span className="sub-badge" style={{ color: '#0d9488' }}>MOBİL SAĞLIK HİZMETLERİ</span>
          <h1 style={{ fontSize: '2.5rem', marginTop: '0.35rem', marginBottom: '0.75rem' }}>Gezici Sağlık Hizmetlerimiz</h1>
          <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: '750px' }}>
            Binkılıç Aile Sağlığı Merkezimize bağlı <strong>Hallaçlı, Aydınlar ve Yaylacık</strong> köylerinde yaşayan vatandaşlarımıza yönelik düzenli haftalık yerinde sağlık hizmeti programımız.
          </p>
        </div>

        {/* Info Alert Box */}
        <div 
          style={{
            background: '#f0fdfa',
            border: '1.5px solid #99f6e4',
            borderRadius: '16px',
            padding: '1.5rem',
            marginBottom: '3rem',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1rem'
          }}
        >
          <AlertCircle size={24} color="#0d9488" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div style={{ fontSize: '0.92rem', color: '#134e4a', lineHeight: 1.6 }}>
            <strong>Gezici Sağlık Hizmeti Hakkında Önemli Bilgilendirme:</strong> Gezici sağlık hizmetleri günlerinde ilgili hekimlerimiz belirlenen saatlerde köylerdeki sağlık evlerinde hizmet vermektedir. Acil durumlarda veya hizmet saatleri dışındaki başvurularda Binkılıç merkez binamıza müracaat edebilirsiniz.
          </div>
        </div>

        {/* Village Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {villages.map((v, idx) => (
            <div 
              key={idx}
              className="glass-card hover-lift"
              style={{
                padding: '2.25rem',
                background: '#ffffff',
                borderLeft: `6px solid ${v.color}`,
                borderRadius: '20px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: v.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: v.color }}>
                    <Compass size={24} />
                  </div>
                  <div>
                    <h2 style={{ fontSize: '1.5rem', color: '#0f172a', marginBottom: '0.1rem' }}>{v.name}</h2>
                    <span style={{ fontSize: '0.85rem', color: '#64748b' }}>{v.location}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span className="badge badge-primary">{v.unit}</span>
                  <span className="badge badge-secondary">{v.doctor}</span>
                </div>
              </div>

              {/* Timing Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', background: '#f8fafc', padding: '1rem 1.25rem', borderRadius: '12px', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0f766e', fontWeight: 600 }}>
                  <Calendar size={18} />
                  <span>{v.schedule}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0284c7', fontWeight: 600 }}>
                  <Clock size={18} />
                  <span>{v.hours}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#475569' }}>
                  <MapPin size={18} color="#e11d48" />
                  <span>{v.location}</span>
                </div>
              </div>

              {/* Services List */}
              <div>
                <h4 style={{ fontSize: '1.05rem', color: '#0f172a', marginBottom: '0.75rem' }}>Bu Köyümüzde Verilen Hizmetler:</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.6rem' }}>
                  {v.services.map((s, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#334155' }}>
                      <CheckCircle2 size={16} color={v.color} style={{ flexShrink: 0 }} />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
