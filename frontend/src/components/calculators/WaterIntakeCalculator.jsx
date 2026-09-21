import React, { useState } from 'react';
import { Droplets, Sun, Activity, Info, CheckCircle2 } from 'lucide-react';

export default function WaterIntakeCalculator() {
  const [weight, setWeight] = useState(70);
  const [exerciseMinutes, setExerciseMinutes] = useState(30);
  const [weather, setWeather] = useState('moderate'); // 'cold', 'moderate', 'hot'

  // Baseline: 35 ml per kg
  let waterMl = weight * 35;
  // Exercise addition: 12 ml per minute of exercise
  waterMl += exerciseMinutes * 12;
  // Weather addition
  if (weather === 'hot') waterMl += 500;
  if (weather === 'cold') waterMl -= 200;

  const liters = (waterMl / 1000).toFixed(2);
  const glasses = Math.round(waterMl / 200); // standard 200ml glass

  return (
    <div className="glass-card" style={{ padding: '2.5rem', borderRadius: '24px', background: '#ffffff', border: '1.5px solid #e2e8f0' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284c7' }}>
          <Droplets size={26} />
        </div>
        <div>
          <h3 style={{ fontSize: '1.35rem', color: '#0f172a' }}>Günlük Su İhtiyacı Hesaplayıcı</h3>
          <p style={{ fontSize: '0.88rem', color: '#64748b' }}>Kilonuz, günlük fiziksel aktiviteniz ve hava şartlarına göre ideal sıvı tüketim miktarınızı öğrenin.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
        
        <div>
          <div className="form-group">
            <label>Vücut Ağırlığınız (kg)</label>
            <input 
              type="number" 
              className="form-control"
              min="30" 
              max="250"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
            />
          </div>

          <div className="form-group">
            <label>Günlük Egzersiz / Yürüyüş Süresi (Dakika)</label>
            <input 
              type="number" 
              className="form-control"
              min="0" 
              max="360"
              value={exerciseMinutes}
              onChange={(e) => setExerciseMinutes(Number(e.target.value))}
            />
          </div>

          <div className="form-group">
            <label>Hava Sıcaklığı / Ortam Durumu</label>
            <select 
              className="form-control"
              value={weather}
              onChange={(e) => setWeather(e.target.value)}
            >
              <option value="moderate">Ilıman / Normal Hava Şartları</option>
              <option value="hot">Sıcak / Yaz Mevsimi / Yoğun Terleme</option>
              <option value="cold">Soğuk / Kış Mevsimi</option>
            </select>
          </div>
        </div>

        {/* Results */}
        <div 
          style={{
            background: 'linear-gradient(135deg, #0369a1 0%, #0c4a6e 100%)',
            color: '#ffffff',
            borderRadius: '20px',
            padding: '2rem',
            textAlign: 'center'
          }}
        >
          <div style={{ fontSize: '0.85rem', color: '#38bdf8', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            Önerilen Günlük Su Miktarı
          </div>

          <div style={{ fontSize: '3.5rem', fontWeight: 800, color: '#38bdf8', lineHeight: 1, marginBottom: '0.35rem' }}>
            {liters}
          </div>
          <div style={{ fontSize: '1.2rem', fontWeight: 600, color: '#e0f2fe', marginBottom: '1rem' }}>
            Litre / Gün
          </div>

          <div style={{ background: 'rgba(255,255,255,0.12)', padding: '0.65rem 1rem', borderRadius: '12px', fontWeight: 700, fontSize: '0.95rem', display: 'inline-block', marginBottom: '1rem' }}>
            🥛 Yaklaşık {glasses} Su Bardağı (200 ml)
          </div>

          <p style={{ fontSize: '0.82rem', color: '#bae6fd', lineHeight: 1.5 }}>
            💧 Çay, kahve ve gazlı içecekler su yerine geçmez. Suyu gün içine yayarak tüketmeye özen gösteriniz.
          </p>
        </div>

      </div>

    </div>
  );
}
