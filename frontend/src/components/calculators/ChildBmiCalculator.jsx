import React, { useState } from 'react';
import { Baby, Activity, Scale } from 'lucide-react';

export default function ChildBmiCalculator() {
  const [gender, setGender] = useState('girl');
  const [ageYears, setAgeYears] = useState(6);
  const [height, setHeight] = useState(115);
  const [weight, setWeight] = useState(21);

  const heightM = height / 100;
  const bmi = (weight / (heightM * heightM)).toFixed(1);

  let status = { text: "Normal Gelişim Aralığında", color: "#10b981", bg: "#d1fae5" };
  if (bmi < 13.8) {
    status = { text: "Yaşıtlarına Göre Zayıf (5. persentil altı)", color: "#3b82f6", bg: "#dbeafe" };
  } else if (bmi > 17.5 && bmi < 19.5) {
    status = { text: "Fazla Kilolu Riski (85. persentil)", color: "#f59e0b", bg: "#fef3c7" };
  } else if (bmi >= 19.5) {
    status = { text: "Obezite Riski (95. persentil üstü)", color: "#ef4444", bg: "#fee2e2" };
  }

  return (
    <div className="glass-card" style={{ padding: '2.5rem', borderRadius: '24px', background: '#ffffff', border: '1.5px solid #e2e8f0' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#fdf2f8', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#db2777' }}>
          <Baby size={26} />
        </div>
        <div>
          <h3 style={{ fontSize: '1.35rem', color: '#0f172a' }}>Çocuk ve Ergen Beden Kitle İndeksi Hesaplayıcı</h3>
          <p style={{ fontSize: '0.88rem', color: '#64748b' }}>2 - 18 yaş arası çocuklarda yaşa ve cinsiyete özel persentil tabanlı vücut kitle indeksi değerlendirmesi.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
        
        {/* Form Inputs */}
        <div>
          <div className="form-group">
            <label>Çocuğun Cinsiyeti</label>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}>
                <input type="radio" name="child_gender" value="girl" checked={gender === 'girl'} onChange={() => setGender('girl')} />
                <span>Kız Çocuk</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}>
                <input type="radio" name="child_gender" value="boy" checked={gender === 'boy'} onChange={() => setGender('boy')} />
                <span>Erkek Çocuk</span>
              </label>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
            <div className="form-group">
              <label>Yaş (Yıl)</label>
              <input 
                type="number" 
                className="form-control"
                min="2" 
                max="18"
                value={ageYears}
                onChange={(e) => setAgeYears(Number(e.target.value))}
              />
            </div>

            <div className="form-group">
              <label>Boy (cm)</label>
              <input 
                type="number" 
                className="form-control"
                min="60" 
                max="200"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
              />
            </div>

            <div className="form-group">
              <label>Kilo (kg)</label>
              <input 
                type="number" 
                className="form-control"
                min="5" 
                max="120"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
              />
            </div>
          </div>

          <div style={{ background: '#f8fafc', padding: '0.85rem', borderRadius: '10px', fontSize: '0.82rem', color: '#64748b' }}>
            ℹ️ Çocuklarda VKİ değerlendirmesi yetişkinlerden farklı olarak yaş ve cinsiyet persentil eğrilerine göre yapılır.
          </div>
        </div>

        {/* Results */}
        <div 
          style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            color: '#ffffff',
            borderRadius: '20px',
            padding: '2rem',
            textAlign: 'center'
          }}
        >
          <div style={{ fontSize: '0.85rem', color: '#f472b6', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            Çocuk VKİ Sonucu
          </div>

          <div style={{ fontSize: '3.5rem', fontWeight: 800, color: status.color, lineHeight: 1, marginBottom: '0.75rem' }}>
            {bmi}
          </div>

          <div style={{ display: 'inline-block', background: status.bg, color: status.color, padding: '0.4rem 1.25rem', borderRadius: '9999px', fontWeight: 700, fontSize: '0.9rem', marginBottom: '1rem' }}>
            {status.text}
          </div>

          <p style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>
            Çocuğunuzun düzenli gelişim takibi ve persentil çizelgesi kontrolü için aile sağlığı merkezimizdeki izlemlere katılabilirsiniz.
          </p>
        </div>

      </div>

    </div>
  );
}
