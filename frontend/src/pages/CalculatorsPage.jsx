import React, { useState } from 'react';
import CalorieCalculator from '../components/calculators/CalorieCalculator';
import WaterIntakeCalculator from '../components/calculators/WaterIntakeCalculator';
import BmiCalculator from '../components/calculators/BmiCalculator';
import ChildBmiCalculator from '../components/calculators/ChildBmiCalculator';
import BmrCalculator from '../components/calculators/BmrCalculator';
import WaistCalculator from '../components/calculators/WaistCalculator';
import DiabetesRiskCalculator from '../components/calculators/DiabetesRiskCalculator';
import PregnancyDueCalculator from '../components/calculators/PregnancyDueCalculator';
import VaccineSchedule from '../components/calculators/VaccineSchedule';
import PercentileViewer from '../components/calculators/PercentileViewer';
import SmokingCostCalculator from '../components/calculators/SmokingCostCalculator';

import { 
  Flame, 
  Droplets, 
  Scale, 
  Baby, 
  Heart, 
  Activity, 
  Syringe, 
  LineChart, 
  Ban, 
  Zap,
  Sparkles
} from 'lucide-react';

export default function CalculatorsPage({ defaultTab = 'kalori' }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const tabs = [
    { id: 'kalori', name: 'Aktivite & Kalori', icon: Flame, color: '#e11d48' },
    { id: 'su', name: 'Günlük Su İhtiyacı', icon: Droplets, color: '#0284c7' },
    { id: 'yetiskin-vki', name: 'Yetişkin VKİ', icon: Scale, color: '#0284c7' },
    { id: 'cocuk-vki', name: 'Çocuk VKİ', icon: Baby, color: '#db2777' },
    { id: 'bmr', name: 'Metabolizma (BMR)', icon: Zap, color: '#f59e0b' },
    { id: 'bel-cevresi', name: 'Bel Çevresi Riski', icon: Heart, color: '#059669' },
    { id: 'diyabet-riski', name: 'Diyabet Risk Testi', icon: Activity, color: '#0d9488' },
    { id: 'gebelik', name: 'Gebelik & Doğum', icon: Sparkles, color: '#db2777' },
    { id: 'asi-takvimi', name: 'Bebek Aşı Takvimi', icon: Syringe, color: '#0284c7' },
    { id: 'persentil', name: 'Persentil Tabloları', icon: LineChart, color: '#7c3aed' },
    { id: 'sigara', name: 'Sigara Maliyet/Kazanım', icon: Ban, color: '#dc2626' },
  ];

  return (
    <div style={{ padding: '3.5rem 0', background: '#f8fafc' }}>
      <div className="container">
        
        <div style={{ marginBottom: '2.5rem' }}>
          <span className="sub-badge">İNTERAKTİF SAĞLIK MERKEZİ</span>
          <h1 style={{ fontSize: '2.5rem', marginTop: '0.35rem', marginBottom: '0.75rem' }}>Sağlık Hesaplama Araçları</h1>
          <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: '780px' }}>
            Dünya Sağlık Örgütü ve T.C. Sağlık Bakanlığı standartlarında geliştirilmiş 11 farklı interaktif sağlık, beslenme, gebelik ve aşı hesaplayıcısı.
          </p>
        </div>

        {/* Mobile Quick Dropdown Selector */}
        <div className="calculator-mobile-select" style={{ display: 'none', marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', fontWeight: 700, fontSize: '0.88rem', color: '#0f172a', marginBottom: '0.5rem' }}>
            🧮 Hesaplama Aracını Seçiniz:
          </label>
          <select 
            className="form-control"
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
            style={{ fontSize: '1rem', padding: '0.85rem', fontWeight: 600, borderColor: '#0284c7' }}
          >
            {tabs.map(t => (
              <option key={t.id} value={t.id}>{t.name}</option>
            ))}
          </select>
        </div>

        {/* Tab Buttons Row (Horizontal Scroll on Mobile, Wrap on Desktop) */}
        <div className="calculator-tabs-row" style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {tabs.map(t => {
            const IconComp = t.icon;
            const isActive = activeTab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.15rem',
                  borderRadius: '12px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  background: isActive ? '#0f172a' : '#ffffff',
                  color: isActive ? '#ffffff' : '#334155',
                  boxShadow: isActive ? '0 8px 16px rgba(15, 23, 42, 0.2)' : '0 1px 3px rgba(0,0,0,0.05)',
                  border: isActive ? '1px solid #0f172a' : '1px solid #e2e8f0',
                  transition: 'var(--transition)',
                  whiteSpace: 'nowrap',
                  flexShrink: 0
                }}
              >
                <IconComp size={18} color={isActive ? '#38bdf8' : t.color} />
                <span>{t.name}</span>
              </button>
            );
          })}
        </div>

        <style>{`
          @media (max-width: 768px) {
            .calculator-mobile-select { display: block !important; }
            .calculator-tabs-row {
              flex-wrap: nowrap !important;
              overflow-x: auto !important;
              padding-bottom: 0.75rem !important;
              -webkit-overflow-scrolling: touch;
              margin-bottom: 1.5rem !important;
            }
          }
        `}</style>

        {/* Active Calculator Component */}
        <div>
          {activeTab === 'kalori' && <CalorieCalculator />}
          {activeTab === 'su' && <WaterIntakeCalculator />}
          {activeTab === 'yetiskin-vki' && <BmiCalculator />}
          {activeTab === 'cocuk-vki' && <ChildBmiCalculator />}
          {activeTab === 'bmr' && <BmrCalculator />}
          {activeTab === 'bel-cevresi' && <WaistCalculator />}
          {activeTab === 'diyabet-riski' && <DiabetesRiskCalculator />}
          {activeTab === 'gebelik' && <PregnancyDueCalculator />}
          {activeTab === 'asi-takvimi' && <VaccineSchedule />}
          {activeTab === 'persentil' && <PercentileViewer />}
          {activeTab === 'sigara' && <SmokingCostCalculator />}
        </div>

      </div>
    </div>
  );
}
