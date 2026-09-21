import React, { useState } from 'react';
import { Activity, HeartPulse, Scale, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function BmiCalculator() {
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(72);
  const [gender, setGender] = useState('male');

  const heightM = height / 100;
  const bmi = (weight / (heightM * heightM)).toFixed(1);

  // Ideal weight range for BMI 18.5 - 24.9
  const minIdeal = (18.5 * heightM * heightM).toFixed(1);
  const maxIdeal = (24.9 * heightM * heightM).toFixed(1);

  let status = { text: "Normal Kilolu", color: "#10b981", bg: "#d1fae5", desc: "Tebrikler! Vücut kitle indeksiniz ideal sağlık aralığında." };
  if (bmi < 18.5) {
    status = { text: "Zayıf", color: "#3b82f6", bg: "#dbeafe", desc: "İdeal kilonuzun altındasınız. Yeterli ve dengeli beslenmeye özen gösteriniz." };
  } else if (bmi >= 25 && bmi < 30) {
    status = { text: "Fazla Kilolu", color: "#f59e0b", bg: "#fef3c7", desc: "İdeal kilonuzun üzerindesiniz. Fiziksel aktiviteyi artırmanız ve porsiyon kontrolü önerilir." };
  } else if (bmi >= 30) {
    status = { text: "Obezite (1. Derece / İleri)", color: "#ef4444", bg: "#fee2e2", desc: "Sağlık riskleri açısından aile hekiminizden beslenme ve diyet danışmanlığı almanız önerilir." };
  }

  return (
    <div className="glass-card" style={{ padding: '2.5rem', borderRadius: '24px', background: '#ffffff', border: '1.5px solid #e2e8f0' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284c7' }}>
          <Scale size={26} />
        </div>
        <div>
          <h3 style={{ fontSize: '1.35rem', color: '#0f172a' }}>Yetişkin Beden Kitle İndeksi (VKİ) Hesaplayıcı</h3>
          <p style={{ fontSize: '0.88rem', color: '#64748b' }}>Boy ve kilo oranınıza göre Dünya Sağlık Örgütü standartlarında vücut kitle indeksinizi hesaplayın.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
        
        {/* Form Inputs */}
        <div>
          <div className="form-group">
            <label>Cinsiyet</label>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', fontWeight: 500 }}>
                <input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={() => setGender('male')} />
                <span>Erkek</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', fontWeight: 500 }}>
                <input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={() => setGender('female')} />
                <span>Kadın</span>
              </label>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label>Boyunuz (cm)</label>
              <input 
                type="number" 
                className="form-control"
                min="100" 
                max="230"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
              />
            </div>

            <div className="form-group">
              <label>Kilonuz (kg)</label>
              <input 
                type="number" 
                className="form-control"
                min="30" 
                max="250"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
              />
            </div>
          </div>

          <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '12px', border: '1px solid #e2e8f0', fontSize: '0.88rem', color: '#475569' }}>
            <strong>İdeal Kilo Aralığınız:</strong> {minIdeal} kg - {maxIdeal} kg
          </div>
        </div>

        {/* BMI Results Gauge */}
        <div 
          style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            color: '#ffffff',
            borderRadius: '20px',
            padding: '2rem',
            textAlign: 'center'
          }}
        >
          <div style={{ fontSize: '0.85rem', color: '#38bdf8', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            Vücut Kitle İndeksiniz (VKİ)
          </div>

          <div style={{ fontSize: '3.75rem', fontWeight: 800, color: status.color, lineHeight: 1, marginBottom: '0.75rem' }}>
            {bmi}
          </div>

          <div style={{ display: 'inline-block', background: status.bg, color: status.color, padding: '0.4rem 1.25rem', borderRadius: '9999px', fontWeight: 700, fontSize: '0.95rem', marginBottom: '1.25rem' }}>
            {status.text}
          </div>

          <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.5 }}>
            {status.desc}
          </p>
        </div>

      </div>

    </div>
  );
}
