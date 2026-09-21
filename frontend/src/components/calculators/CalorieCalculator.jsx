import React, { useState } from 'react';
import { Flame, Activity, Clock, Weight, Sparkles } from 'lucide-react';
import { activitiesCalorieData } from '../../data/percentileData';

export default function CalorieCalculator() {
  const [selectedActivity, setSelectedActivity] = useState(activitiesCalorieData[1].id);
  const [weight, setWeight] = useState(70);
  const [duration, setDuration] = useState(30);

  const currentAct = activitiesCalorieData.find(a => a.id === selectedActivity) || activitiesCalorieData[0];
  
  // Formula: Calories = MET * Weight(kg) * (Duration(mins) / 60)
  const caloriesBurned = Math.round(currentAct.met * weight * (duration / 60));

  return (
    <div className="glass-card" style={{ padding: '2.5rem', borderRadius: '24px', background: '#ffffff', border: '1.5px solid #e2e8f0' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#ffe4e6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e11d48' }}>
          <Flame size={26} />
        </div>
        <div>
          <h3 style={{ fontSize: '1.35rem', color: '#0f172a' }}>Aktiviteye Göre Harcanan Kalori Hesaplama</h3>
          <p style={{ fontSize: '0.88rem', color: '#64748b' }}>Yaptığınız fiziksel aktivite, kilonuz ve sürenize göre tahmini yakılan kaloriyi hesaplayın.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
        
        {/* Form Inputs */}
        <div>
          <div className="form-group">
            <label>Fiziksel Aktivite Türü</label>
            <select 
              className="form-control"
              value={selectedActivity}
              onChange={(e) => setSelectedActivity(e.target.value)}
            >
              {activitiesCalorieData.map(act => (
                <option key={act.id} value={act.id}>
                  {act.name} (MET: {act.met})
                </option>
              ))}
            </select>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
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

            <div className="form-group">
              <label>Süre (Dakika)</label>
              <input 
                type="number" 
                className="form-control"
                min="5" 
                max="360"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
              />
            </div>
          </div>
        </div>

        {/* Output Box */}
        <div 
          style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            color: '#ffffff',
            borderRadius: '20px',
            padding: '2rem',
            textAlign: 'center',
            boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
          }}
        >
          <div style={{ fontSize: '0.85rem', color: '#38bdf8', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            Tahmini Yakılan Enerji
          </div>

          <div style={{ fontSize: '3.5rem', fontWeight: 800, color: '#f43f5e', lineHeight: 1, marginBottom: '0.5rem' }}>
            {caloriesBurned}
          </div>
          <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '1.25rem' }}>
            kcal (Kalori)
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.08)', padding: '0.75rem 1rem', borderRadius: '10px', fontSize: '0.85rem', color: '#cbd5e1' }}>
            💡 <strong>Sağlık Önerisi:</strong> Dünya Sağlık Örgütü, haftada en az 150 dakika orta tempolu fiziksel aktivite önermektedir.
          </div>
        </div>

      </div>

    </div>
  );
}
