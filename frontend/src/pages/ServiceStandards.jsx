import React from 'react';
import { FileCheck, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ServiceStandards() {
  const standards = [
    { no: 1, name: "Poliklinik Muayenesi", docs: "T.C. Kimlik Kartı", duration: "15 Dakika" },
    { no: 2, name: "Bebek ve Çocuk İzlemi", docs: "Aşı Kartı, T.C. Kimlik Kartı", duration: "20 Dakika" },
    { no: 3, name: "Gebe ve Lohusa İzlemi", docs: "Gebe İzlem Kartı, Kimlik Kartı", duration: "20 Dakika" },
    { no: 4, name: "Rutin Aşı Uygulamaları", docs: "Aşı Kartı", duration: "10 Dakika" },
    { no: 5, name: "Laboratuvar Kan ve İdrar Alımı", docs: "Hekim İstemi, Kimlik Kartı", duration: "10 Dakika" },
    { no: 6, name: "Enjeksiyon ve Pansuman", docs: "Hekim Reçetesi / Pansuman İstemi", duration: "10 Dakika" },
    { no: 7, name: "Kanser Erken Teşhis Taramaları (GGK / HPV)", docs: "T.C. Kimlik Kartı (50-70 ve 30-65 Yaş)", duration: "15 Dakika" },
    { no: 8, name: "İstirahat ve İş Göremezlik Raporu", docs: "Muayene Bulguları, Kimlik Kartı", duration: "10 Dakika" },
    { no: 9, name: "Sürücü Adayı / Ehliyet Sağlık Raporu", docs: "e-Devlet Beyan Formu, 1 Biyometrik Fotoğraf", duration: "15 Dakika" },
    { no: 10, name: "Evlilik Öncesi Danışmanlık ve Rapor", docs: "Evlilik Başvuru Belgesi, Çiftlerin Kimlikleri", duration: "20 Dakika" },
  ];

  return (
    <div style={{ padding: '3.5rem 0', background: '#f8fafc' }}>
      <div className="container">
        
        <div style={{ marginBottom: '2.5rem' }}>
          <span className="sub-badge">KAMU HİZMET STANDARTLARI</span>
          <h1 style={{ fontSize: '2.5rem', marginTop: '0.35rem', marginBottom: '0.75rem' }}>Hizmet Standartlarımız</h1>
          <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: '750px' }}>
            Binkılıç Aile Sağlığı Merkezimizde sunulan işlemler, istenen belgeler ve standart tamamlanma süreleri.
          </p>
        </div>

        <div className="glass-card" style={{ padding: '2rem', borderRadius: '20px', background: '#ffffff', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
            <thead>
              <tr style={{ background: '#0f172a', color: '#ffffff', textAlign: 'left' }}>
                <th style={{ padding: '1rem', width: '60px', borderRadius: '8px 0 0 0' }}>Sıra</th>
                <th style={{ padding: '1rem' }}>Hizmetin Adı</th>
                <th style={{ padding: '1rem' }}>Başvuruda İstenen Belgeler</th>
                <th style={{ padding: '1rem', width: '180px', borderRadius: '0 8px 0 0' }}>Tamamlanma Süresi</th>
              </tr>
            </thead>
            <tbody>
              {standards.map((s, idx) => (
                <tr 
                  key={idx}
                  style={{
                    borderBottom: '1px solid #e2e8f0',
                    background: idx % 2 === 0 ? '#ffffff' : '#f8fafc'
                  }}
                >
                  <td style={{ padding: '1rem', fontWeight: 700, color: '#0284c7' }}>{s.no}</td>
                  <td style={{ padding: '1rem', fontWeight: 700, color: '#0f172a' }}>{s.name}</td>
                  <td style={{ padding: '1rem', color: '#475569' }}>{s.docs}</td>
                  <td style={{ padding: '1rem', fontWeight: 700, color: '#0d9488' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', background: '#ccfbf1', padding: '0.25rem 0.65rem', borderRadius: '6px' }}>
                      <Clock size={14} />
                      {s.duration}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
