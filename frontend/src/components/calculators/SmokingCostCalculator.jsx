import React, { useState } from 'react';
import { Ban, ShieldAlert, HeartPulse, Sparkles, TrendingUp } from 'lucide-react';

export default function SmokingCostCalculator() {
  const [packsPerDay, setPacksPerDay] = useState(1);
  const [pricePerPack, setPricePerPack] = useState(75);
  const [yearsSmoking, setYearsSmoking] = useState(10);

  const dailyCost = packsPerDay * pricePerPack;
  const monthlyCost = dailyCost * 30;
  const yearlyCost = dailyCost * 365;
  const totalCost = yearlyCost * yearsSmoking;
  const totalCigarettes = packsPerDay * 20 * 365 * yearsSmoking;

  const recoveryMilestones = [
    { time: "20 Dakika", effect: "Kalp atış hızı ve kan basıncı normale döner." },
    { time: "8 Saat", effect: "Kandaki karbonmonoksit seviyesi düşer, oksijen seviyesi normale döner." },
    { time: "48 Saat", effect: "Tat ve koku alma duyuları belirgin şekilde iyileşir." },
    { time: "2 - 12 Hafta", effect: "Dolaşım düzelir, akciğer fonksiyonları %30 oranında artar." },
    { time: "1 Yıl", effect: "Koroner kalp hastalığı riski sigara içen birinin yarısına iner." },
    { time: "10 Yıl", effect: "Akciğer kanserinden ölüm riski sigara içenlerin yarısına düşer." }
  ];

  return (
    <div className="glass-card" style={{ padding: '2.5rem', borderRadius: '24px', background: '#ffffff', border: '1.5px solid #e2e8f0' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#dc2626' }}>
          <Ban size={26} />
        </div>
        <div>
          <h3 style={{ fontSize: '1.35rem', color: '#0f172a' }}>Sigara Maliyeti ve Sağlık Kazanımı Hesaplayıcı</h3>
          <p style={{ fontSize: '0.88rem', color: '#64748b' }}>Sigaraya harcadığınız maddi tutarı ve bıraktığınız andan itibaren vücudunuzun kazanımlarını görün.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'flex-start' }}>
        
        <div>
          <div className="form-group">
            <label>Günde İçilen Paket Sayısı</label>
            <input type="number" step="0.5" className="form-control" min="0.5" max="10" value={packsPerDay} onChange={(e) => setPacksPerDay(Number(e.target.value))} />
          </div>

          <div className="form-group">
            <label>1 Paket Sigara Fiyatı (TL)</label>
            <input type="number" className="form-control" min="10" max="250" value={pricePerPack} onChange={(e) => setPricePerPack(Number(e.target.value))} />
          </div>

          <div className="form-group">
            <label>Kaç Yıldır İçiyorsunuz?</label>
            <input type="number" className="form-control" min="1" max="60" value={yearsSmoking} onChange={(e) => setYearsSmoking(Number(e.target.value))} />
          </div>

          <div style={{ background: '#fef2f2', border: '1px solid #fecaca', padding: '1rem', borderRadius: '12px', color: '#991b1b', fontSize: '0.88rem' }}>
            📞 <strong>Sigara Bırakma Danışma Hattı:</strong> ALO 171 hattını arayarak veya aile hekiminize danışarak ücretsiz bırakma desteği alabilirsiniz.
          </div>
        </div>

        {/* Results */}
        <div 
          style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            color: '#ffffff',
            borderRadius: '20px',
            padding: '2rem'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
            <div style={{ fontSize: '0.8rem', color: '#f87171', fontWeight: 700, textTransform: 'uppercase' }}>Bugüne Kadar Harcanan Para</div>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#f87171' }}>
              {totalCost.toLocaleString('tr-TR')} ₺
            </div>
            <small style={{ color: '#94a3b8' }}>Toplam içilen dal sayısı: {totalCigarettes.toLocaleString('tr-TR')} adet</small>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', background: 'rgba(255,255,255,0.06)', padding: '0.5rem 0.75rem', borderRadius: '8px' }}>
              <span>Aylık Masrafınız:</span>
              <strong style={{ color: '#fbbf24' }}>{monthlyCost.toLocaleString('tr-TR')} ₺</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', background: 'rgba(255,255,255,0.06)', padding: '0.5rem 0.75rem', borderRadius: '8px' }}>
              <span>Yıllık Masrafınız:</span>
              <strong style={{ color: '#f87171' }}>{yearlyCost.toLocaleString('tr-TR')} ₺</strong>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#4ade80', marginBottom: '0.5rem' }}>Bıraktığınızda Vücudun İyileşme Zamanı:</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.78rem', color: '#cbd5e1' }}>
              {recoveryMilestones.slice(0, 3).map((m, i) => (
                <div key={i}>• <strong>{m.time}:</strong> {m.effect}</div>
              ))}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
