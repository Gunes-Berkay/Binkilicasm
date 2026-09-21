import React, { useState } from 'react';
import { Baby, Calendar, Heart, Sparkles, CheckCircle2, Clock } from 'lucide-react';

export default function PregnancyDueCalculator() {
  const [lmpDate, setLmpDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() - 70); // default 10 weeks ago
    return d.toISOString().split('T')[0];
  });

  const lmp = new Date(lmpDate);
  const today = new Date();

  // Due Date: LMP + 280 days
  const dueDate = new Date(lmp);
  dueDate.setDate(dueDate.getDate() + 280);

  // Elapsed days
  const diffTime = today - lmp;
  const elapsedDays = Math.max(0, Math.floor(diffTime / (1000 * 60 * 60 * 24)));
  const currentWeek = Math.floor(elapsedDays / 7);
  const currentDaysInWeek = elapsedDays % 7;
  const remainingDays = Math.max(0, Math.floor((dueDate - today) / (1000 * 60 * 60 * 24)));

  let trimester = "1. Trimester (İlk 3 Ay)";
  if (currentWeek >= 13 && currentWeek < 27) {
    trimester = "2. Trimester (4-6. Aylar)";
  } else if (currentWeek >= 27) {
    trimester = "3. Trimester (7-9. Aylar)";
  }

  const babySizes = [
    { week: 4, size: "Haşhaş Tohumu (1 mm)", tip: "Folik asit takviyenizi aksatmayınız." },
    { week: 8, size: "Ahududu (1.6 cm)", tip: "İlk aile hekimliği gebe izleminizi yaptırınız." },
    { week: 12, size: "Erik (5.4 cm)", tip: "İkili tarama testi dönemi." },
    { week: 16, size: "Avokado (11.6 cm)", tip: "Bebek hareketleri yavaş yavaş hissedilebilir." },
    { week: 20, size: "Muz (25 cm / 300g)", tip: "Ayrıntılı ultrason ve tetanoz aşısı 1. dozu." },
    { week: 24, size: "Mısır Koçanı (30 cm / 600g)", tip: "Şeker yükleme (OGTT) testi dönemi." },
    { week: 28, size: "Patlıcan (37 cm / 1000g)", tip: "Tetanoz aşısı 2. dozu ve kan sayımı." },
    { week: 32, size: "Kavun (42 cm / 1700g)", tip: "Doğum hazırlık ve nefes egzersizleri." },
    { week: 36, size: "Marul (47 cm / 2600g)", tip: "Haftalık hekim kontrolleri başlangıcı." },
    { week: 40, size: "Karpuz (51 cm / 3400g)", tip: "Doğum için hastane çantanız hazır olmalı!" }
  ];

  const closestMilestone = babySizes.reduce((prev, curr) => 
    Math.abs(curr.week - currentWeek) < Math.abs(prev.week - currentWeek) ? curr : prev
  , babySizes[0]);

  return (
    <div className="glass-card" style={{ padding: '2.5rem', borderRadius: '24px', background: '#ffffff', border: '1.5px solid #e2e8f0' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#fdf2f8', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#db2777' }}>
          <Baby size={26} />
        </div>
        <div>
          <h3 style={{ fontSize: '1.35rem', color: '#0f172a' }}>Gebelik Haftası ve Tahmini Doğum Tarihi Hesaplayıcı</h3>
          <p style={{ fontSize: '0.88rem', color: '#64748b' }}>Son Adet Tarihinize (SAT) göre kaç haftalık hamile olduğunuzu ve tahmini doğum gününü hesaplayın.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
        
        <div>
          <div className="form-group">
            <label style={{ fontWeight: 700 }}>Son Adet Tarihinizin İlk Günü (SAT)</label>
            <input 
              type="date" 
              className="form-control"
              value={lmpDate}
              onChange={(e) => setLmpDate(e.target.value)}
            />
          </div>

          <div style={{ background: '#fdf2f8', border: '1px solid #fbcfe8', padding: '1.25rem', borderRadius: '14px', marginTop: '1.25rem' }}>
            <div style={{ fontWeight: 700, color: '#9d174d', marginBottom: '0.35rem' }}>Trimester Dönemi:</div>
            <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#db2777' }}>{trimester}</div>
            <div style={{ fontSize: '0.88rem', color: '#701a75', marginTop: '0.5rem' }}>
              🥑 <strong>Bebeğin Tahmini Boyutu:</strong> {closestMilestone.size}
            </div>
            <div style={{ fontSize: '0.82rem', color: '#831843', marginTop: '0.25rem' }}>
              💡 {closestMilestone.tip}
            </div>
          </div>
        </div>

        {/* Results Box */}
        <div 
          style={{
            background: 'linear-gradient(135deg, #831843 0%, #db2777 100%)',
            color: '#ffffff',
            borderRadius: '20px',
            padding: '2rem',
            textAlign: 'center'
          }}
        >
          <div style={{ fontSize: '0.85rem', color: '#fbcfe8', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            Mevcut Gebelik Haftası
          </div>

          <div style={{ fontSize: '3.25rem', fontWeight: 800, color: '#ffffff', lineHeight: 1, marginBottom: '0.35rem' }}>
            {currentWeek} Hafta {currentDaysInWeek > 0 ? `+ ${currentDaysInWeek} Gün` : ''}
          </div>

          <div style={{ background: 'rgba(255,255,255,0.2)', padding: '0.75rem 1rem', borderRadius: '12px', margin: '1rem 0' }}>
            <div style={{ fontSize: '0.8rem', color: '#fdf2f8', textTransform: 'uppercase' }}>Tahmini Doğum Tarihi (40. Hafta)</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>
              {dueDate.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </div>
          </div>

          <div style={{ fontSize: '0.85rem', color: '#fce7f3' }}>
            ⏳ Doğuma Kalan Süre: <strong>{remainingDays} Gün</strong>
          </div>
        </div>

      </div>

    </div>
  );
}
