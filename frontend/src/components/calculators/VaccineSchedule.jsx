import React, { useState } from 'react';
import { Syringe, Calendar, CheckCircle2, AlertCircle, Info } from 'lucide-react';

export default function VaccineSchedule() {
  const [birthDate, setBirthDate] = useState(() => {
    const today = new Date();
    today.setMonth(today.getMonth() - 2);
    return today.toISOString().split('T')[0];
  });

  const calculateDate = (monthsToAdd) => {
    const d = new Date(birthDate);
    d.setMonth(d.getMonth() + monthsToAdd);
    return d.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  const schedule = [
    { period: "Doğumda", date: calculateDate(0), vaccines: ["Hepatit B (1. Doz)"], notes: "Doğumun ilk 72 saati içinde hastanede/ASM'de uygulanır." },
    { period: "1. Ayın Sonu", date: calculateDate(1), vaccines: ["Hepatit B (2. Doz)"], notes: "Aile hekiminiz tarafından bebek izlemi ile birlikte yapılır." },
    { period: "2. Ayın Sonu", date: calculateDate(2), vaccines: ["BCG (Verem)", "DaBT-İPA-Hib (5'li Karma 1. Doz)", "KPA (Zatürre 1. Doz)"], notes: "Verem aşısı ve 5'li karma aşı uygulanır." },
    { period: "4. Ayın Sonu", date: calculateDate(4), vaccines: ["DaBT-İPA-Hib (5'li Karma 2. Doz)", "KPA (Zatürre 2. Doz)"], notes: "Karma ve zatürre aşılarının ikinci dozu." },
    { period: "6. Ayın Sonu", date: calculateDate(6), vaccines: ["Hepatit B (3. Doz)", "DaBT-İPA-Hib (5'li Karma 3. Doz)", "OPA (Çocuk Felci Damlası 1. Doz)"], notes: "Ağızdan çocuk felci damlası ve karma aşı." },
    { period: "12. Ay (1 Yaş)", date: calculateDate(12), vaccines: ["KKK (Kızamık-Kızamıkçık-Kabakulak)", "KPA (Pekiştirme)", "Suçiçeği Aşısı"], notes: "1 yaş kritik aşıları ve genel gelişim değerlendirmesi." },
    { period: "18. Ayın Sonu", date: calculateDate(18), vaccines: ["DaBT-İPA-Hib (Pekiştirme)", "OPA (2. Doz)", "Hepatit A (1. Doz)"], notes: "Pekiştirme aşıları ve sarılık (Hepatit A) başlangıcı." },
    { period: "24. Ay (2 Yaş)", date: calculateDate(24), vaccines: ["Hepatit A (2. Doz)"], notes: "Hepatit A aşısının tamamlanması." },
    { period: "48. Ay (4 Yaş / Okul Öncesi)", date: calculateDate(48), vaccines: ["DaBT-İPA (4'lü Karma)", "KKK (2. Doz)"], notes: "İlkokul öncesi pekiştirme aşıları." },
  ];

  return (
    <div className="glass-card" style={{ padding: '2.5rem', borderRadius: '24px', background: '#ffffff', border: '1.5px solid #e2e8f0' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284c7' }}>
          <Syringe size={26} />
        </div>
        <div>
          <h3 style={{ fontSize: '1.35rem', color: '#0f172a' }}>T.C. Sağlık Bakanlığı Bebek Aşı Takvimi Hesaplayıcı</h3>
          <p style={{ fontSize: '0.88rem', color: '#64748b' }}>Bebeğinizin doğum tarihini seçerek tüm aşı randevu tarihlerini otomatik hesaplayın.</p>
        </div>
      </div>

      {/* Date Picker */}
      <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '16px', border: '1px solid #e2e8f0', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '240px' }}>
          <label style={{ display: 'block', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.4rem', color: '#0f172a' }}>
            Bebeğinizin Doğum Tarihi:
          </label>
          <input 
            type="date" 
            className="form-control"
            style={{ fontWeight: 600, fontSize: '1rem', color: '#0284c7' }}
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#0369a1', fontSize: '0.88rem', background: '#e0f2fe', padding: '0.75rem 1.25rem', borderRadius: '12px' }}>
          <Info size={20} style={{ flexShrink: 0 }} />
          <span>Aşılar merkezimizde tamamen ücretsiz olarak Aile Sağlığı Çalışanlarımızca uygulanmaktadır.</span>
        </div>
      </div>

      {/* Schedule Table */}
      <div className="table-responsive" style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', minWidth: '600px', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
          <thead>
            <tr style={{ background: '#0f172a', color: '#ffffff', textAlign: 'left' }}>
              <th style={{ padding: '0.85rem 1rem', borderRadius: '8px 0 0 0' }}>Dönem</th>
              <th style={{ padding: '0.85rem 1rem' }}>Hesaplanan Tarih</th>
              <th style={{ padding: '0.85rem 1rem' }}>Uygulanacak Aşılar</th>
              <th style={{ padding: '0.85rem 1rem', borderRadius: '0 8px 0 0' }}>Açıklama</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((item, idx) => (
              <tr 
                key={idx}
                style={{
                  borderBottom: '1px solid #e2e8f0',
                  background: idx % 2 === 0 ? '#ffffff' : '#f8fafc'
                }}
              >
                <td style={{ padding: '0.85rem 1rem', fontWeight: 700, color: '#0284c7' }}>
                  {item.period}
                </td>
                <td style={{ padding: '0.85rem 1rem', fontWeight: 600, color: '#0f172a', whiteSpace: 'nowrap' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Calendar size={14} color="#0d9488" />
                    {item.date}
                  </span>
                </td>
                <td style={{ padding: '0.85rem 1rem' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {item.vaccines.map((v, i) => (
                      <span key={i} className="badge badge-primary" style={{ fontSize: '0.78rem' }}>
                        {v}
                      </span>
                    ))}
                  </div>
                </td>
                <td style={{ padding: '0.85rem 1rem', color: '#64748b', fontSize: '0.85rem' }}>
                  {item.notes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
