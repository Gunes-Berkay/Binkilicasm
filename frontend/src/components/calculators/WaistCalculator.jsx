import React, { useState } from 'react';
import { Heart, Activity, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function WaistCalculator() {
  const [gender, setGender] = useState('male');
  const [waist, setWaist] = useState(88);

  let result = { level: "Düşük / Normal Risk", color: "#10b981", bg: "#d1fae5", desc: "Bel çevreniz ideal sınırlarda. Kardiyovasküler ve metabolik hastalık riski düşüktür." };

  if (gender === 'male') {
    if (waist >= 94 && waist < 102) {
      result = { level: "Artmış Risk (Dikkat)", color: "#f59e0b", bg: "#fef3c7", desc: "Bel çevreniz artmış risk sınırında. Kalp ve damar hastalıkları riskine karşı fiziksel aktiviteyi artırınız." };
    } else if (waist >= 102) {
      result = { level: "Yüksek Kardiyovasküler Risk", color: "#ef4444", bg: "#fee2e2", desc: "Bel çevreniz yüksek risk sınırında. Diyabet ve hipertansiyon taraması için aile hekiminize başvurunuz." };
    }
  } else {
    if (waist >= 80 && waist < 88) {
      result = { level: "Artmış Risk (Dikkat)", color: "#f59e0b", bg: "#fef3c7", desc: "Bel çevreniz artmış risk sınırında. Sağlıklı beslenme ve hareketli yaşam önerilir." };
    } else if (waist >= 88) {
      result = { level: "Yüksek Kardiyovasküler Risk", color: "#ef4444", bg: "#fee2e2", desc: "Bel çevreniz yüksek risk sınırında. Metabolik sendrom taraması için aile hekiminize danışınız." };
    }
  }

  return (
    <div className="glass-card" style={{ padding: '2.5rem', borderRadius: '24px', background: '#ffffff', border: '1.5px solid #e2e8f0' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#ecfdf5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#059669' }}>
          <Heart size={26} />
        </div>
        <div>
          <h3 style={{ fontSize: '1.35rem', color: '#0f172a' }}>Yetişkin Bel Çevresi ve Kardiyovasküler Risk Hesaplama</h3>
          <p style={{ fontSize: '0.88rem', color: '#64748b' }}>Karın bölgesi yağlanması kalp, diyabet ve tansiyon hastalıkları için doğrudan göstergedir.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
        
        {/* Form Inputs */}
        <div>
          <div className="form-group">
            <label>Cinsiyet</label>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}>
                <input type="radio" name="w_gender" value="male" checked={gender === 'male'} onChange={() => setGender('male')} />
                <span>Erkek (Normal &lt; 94 cm)</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}>
                <input type="radio" name="w_gender" value="female" checked={gender === 'female'} onChange={() => setGender('female')} />
                <span>Kadın (Normal &lt; 80 cm)</span>
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Bel Çevresi Ölçüsü (cm)</label>
            <input 
              type="number" 
              className="form-control"
              min="40" 
              max="200"
              value={waist}
              onChange={(e) => setWaist(Number(e.target.value))}
            />
            <small style={{ color: '#64748b', marginTop: '0.35rem', display: 'block' }}>
              💡 Ölçüm, en alt kaburga kemiği ile leğen kemiği arasındaki orta noktadan yapılmalıdır.
            </small>
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
          <div style={{ fontSize: '0.85rem', color: '#34d399', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            Kardiyovasküler Risk Durumu
          </div>

          <div style={{ fontSize: '3rem', fontWeight: 800, color: result.color, lineHeight: 1, marginBottom: '0.75rem' }}>
            {waist} cm
          </div>

          <div style={{ display: 'inline-block', background: result.bg, color: result.color, padding: '0.4rem 1.25rem', borderRadius: '9999px', fontWeight: 700, fontSize: '0.9rem', marginBottom: '1rem' }}>
            {result.level}
          </div>

          <p style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>
            {result.desc}
          </p>
        </div>

      </div>

    </div>
  );
}
