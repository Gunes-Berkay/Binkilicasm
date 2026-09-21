import React from 'react';
import { Clock, Calendar, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function WorkingHours() {
  return (
    <div style={{ padding: '3.5rem 0', background: '#f8fafc' }}>
      <div className="container">
        
        <div style={{ marginBottom: '2.5rem' }}>
          <span className="sub-badge">MESAİ PROGRAMI</span>
          <h1 style={{ fontSize: '2.5rem', marginTop: '0.35rem', marginBottom: '0.75rem' }}>Çalışma Saatlerimiz</h1>
          <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: '750px' }}>
            Binkılıç Aile Sağlığı Merkezi çalışma düzeni, poliklinik saatleri, laboratuvar tahlil ve esnek mesai tablosu.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          
          {/* General Working Hours */}
          <div className="glass-card" style={{ padding: '2rem', background: '#ffffff', borderTop: '4px solid #0284c7' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <Clock size={28} color="#0284c7" />
              <h3 style={{ fontSize: '1.3rem', color: '#0f172a' }}>Merkez Hizmet Saatleri</h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.6rem' }}>
                <span style={{ fontWeight: 600 }}>Pazartesi - Cuma:</span>
                <span style={{ color: '#0284c7', fontWeight: 700 }}>08:00 - 17:00</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.6rem' }}>
                <span style={{ fontWeight: 600 }}>Esnek Mesai Düzeni:</span>
                <span style={{ color: '#0d9488', fontWeight: 700 }}>08:00 - 19:00 (Nöbet Usulü)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.6rem' }}>
                <span style={{ fontWeight: 600 }}>Öğle Arası:</span>
                <span style={{ color: '#64748b' }}>12:00 - 13:00</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 600 }}>Cumartesi - Pazar:</span>
                <span style={{ color: '#e11d48', fontWeight: 700 }}>Kapalı (Acil: 112)</span>
              </div>
            </div>
          </div>

          {/* Laboratory Hours */}
          <div className="glass-card" style={{ padding: '2rem', background: '#ffffff', borderTop: '4px solid #0d9488' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <Calendar size={28} color="#0d9488" />
              <h3 style={{ fontSize: '1.3rem', color: '#0f172a' }}>Laboratuvar & Tahlil Saatleri</h3>
            </div>
            
            <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Kan ve idrar tetkik numuneleri haftada 2 gün toplanmakta ve aynı gün soğuk zincirle merkez laboratuvarına sevk edilmektedir.
            </p>

            <div style={{ background: '#f0fdfa', border: '1px solid #ccfbf1', padding: '1rem', borderRadius: '12px' }}>
              <div style={{ fontWeight: 700, color: '#0f766e', marginBottom: '0.35rem' }}>Kan Alma Gün ve Saatleri:</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0d9488' }}>Salı ve Perşembe: 08:30 - 10:30</div>
              <small style={{ color: '#64748b', display: 'block', marginTop: '0.35rem' }}>En az 10-12 saat aç gelinmesi gerekmektedir.</small>
            </div>
          </div>

        </div>

        {/* Doctor Schedules Table */}
        <div className="glass-card" style={{ padding: '2rem', background: '#ffffff', borderRadius: '20px' }}>
          <h3 style={{ fontSize: '1.3rem', color: '#0f172a', marginBottom: '1.25rem' }}>Hekimlerimizin Haftalık Mesai ve Gezici Hizmet Programı</h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            
            <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <h4 style={{ color: '#0284c7', fontSize: '1.15rem', marginBottom: '0.5rem' }}>Dr. Emre İleri (34.09.001 Nolu Birim)</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
                <li>• <strong>Pazartesi, Salı, Çarşamba, Cuma:</strong> 08:00 - 17:00 (Binkılıç ASM Poliklinik)</li>
                <li>• <strong>Perşembe:</strong> 09:00 - 12:00 (Hallaçlı Köyü Gezici Sağlık Hizmeti)</li>
                <li>• <strong>Perşembe:</strong> 13:00 - 17:00 (Binkılıç ASM Poliklinik)</li>
              </ul>
            </div>

            <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <h4 style={{ color: '#0d9488', fontSize: '1.15rem', marginBottom: '0.5rem' }}>Dr. Menekşe Yılmaz (34.09.002 Nolu Birim)</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
                <li>• <strong>Pazartesi, Perşembe, Cuma:</strong> 08:00 - 17:00 (Binkılıç ASM Poliklinik)</li>
                <li>• <strong>Salı:</strong> 09:00 - 12:00 (Aydınlar Köyü Gezici Sağlık Hizmeti)</li>
                <li>• <strong>Çarşamba:</strong> 09:00 - 12:00 (Yaylacık Köyü Gezici Sağlık Hizmeti)</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
