import React, { useState } from 'react';
import { Flame, Activity, Scale, Heart, CheckCircle2 } from 'lucide-react';

export default function BmrCalculator() {
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState(30);
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(75);
  const [activityLevel, setActivityLevel] = useState(1.375); // Light active

  // Mifflin-St Jeor Equation (Gold Standard):
  // Men: (10 * weight) + (6.25 * height) - (5 * age) + 5
  // Women: (10 * weight) + (6.25 * height) - (5 * age) - 161
  const bmr = gender === 'male'
    ? Math.round((10 * weight) + (6.25 * height) - (5 * age) + 5)
    : Math.round((10 * weight) + (6.25 * height) - (5 * age) - 161);

  const maintenanceCalories = Math.round(bmr * activityLevel);
  const weightLossCalories = Math.max(1200, maintenanceCalories - 500);
  const weightGainCalories = maintenanceCalories + 400;

  return (
    <div className="glass-card" style={{ padding: '2.5rem', borderRadius: '24px', background: '#ffffff', border: '1.5px solid #e2e8f0' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#b45309' }}>
          <Flame size={26} />
        </div>
        <div>
          <h3 style={{ fontSize: '1.35rem', color: '#0f172a' }}>Bazal Metabolizma Hızı (BMR) ve Günlük Kalori İhtiyacı</h3>
          <p style={{ fontSize: '0.88rem', color: '#64748b' }}>Vücudunuzun dinlenme anında yaktığı kalori ve kilonuzu korumak/vermek için gereken günlük enerji miktarı.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
        
        <div>
          <div className="form-group">
            <label>Cinsiyet</label>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}>
                <input type="radio" name="bmr_gender" value="male" checked={gender === 'male'} onChange={() => setGender('male')} />
                <span>Erkek</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}>
                <input type="radio" name="bmr_gender" value="female" checked={gender === 'female'} onChange={() => setGender('female')} />
                <span>Kadın</span>
              </label>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
            <div className="form-group">
              <label>Yaş</label>
              <input type="number" className="form-control" min="15" max="100" value={age} onChange={(e) => setAge(Number(e.target.value))} />
            </div>
            <div className="form-group">
              <label>Boy (cm)</label>
              <input type="number" className="form-control" min="100" max="230" value={height} onChange={(e) => setHeight(Number(e.target.value))} />
            </div>
            <div className="form-group">
              <label>Kilo (kg)</label>
              <input type="number" className="form-control" min="30" max="250" value={weight} onChange={(e) => setWeight(Number(e.target.value))} />
            </div>
          </div>

          <div className="form-group">
            <label>Günlük Aktivite Düzeyi</label>
            <select className="form-control" value={activityLevel} onChange={(e) => setActivityLevel(Number(e.target.value))}>
              <option value={1.2}>Hareketsiz / Masa Başı İşi (Egzersiz Yok)</option>
              <option value={1.375}>Hafif Aktif (Haftada 1-3 Gün Hafif Egzersiz)</option>
              <option value={1.55}>Orta Aktif (Haftada 3-5 Gün Orta Düzey Egzersiz)</option>
              <option value={1.725}>Çok Aktif (Haftada 6-7 Gün Ağır Egzersiz)</option>
            </select>
          </div>
        </div>

        {/* Results */}
        <div 
          style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            color: '#ffffff',
            borderRadius: '20px',
            padding: '2rem'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
            <div style={{ fontSize: '0.8rem', color: '#38bdf8', fontWeight: 700, textTransform: 'uppercase' }}>Bazal Metabolizma Hızınız (BMR)</div>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#f59e0b' }}>{bmr} <span style={{ fontSize: '1rem' }}>kcal</span></div>
            <small style={{ color: '#94a3b8' }}>Hiç hareket etmeden sadece hayatta kalmak için harcanan kalori.</small>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', background: 'rgba(255,255,255,0.06)', padding: '0.5rem 0.75rem', borderRadius: '8px' }}>
              <span>⚖️ Kilo Korumak İçin:</span>
              <strong style={{ color: '#38bdf8' }}>{maintenanceCalories} kcal/gün</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', background: 'rgba(255,255,255,0.06)', padding: '0.5rem 0.75rem', borderRadius: '8px' }}>
              <span>📉 Sağlıklı Kilo Vermek İçin:</span>
              <strong style={{ color: '#4ade80' }}>{weightLossCalories} kcal/gün</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', background: 'rgba(255,255,255,0.06)', padding: '0.5rem 0.75rem', borderRadius: '8px' }}>
              <span>📈 Sağlıklı Kilo Almak İçin:</span>
              <strong style={{ color: '#f43f5e' }}>{weightGainCalories} kcal/gün</strong>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
