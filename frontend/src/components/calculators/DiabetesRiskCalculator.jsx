import React, { useState } from 'react';
import { Activity, AlertTriangle, ShieldCheck, HeartPulse, CheckCircle2 } from 'lucide-react';

export default function DiabetesRiskCalculator() {
  const [age, setAge] = useState(0); // 0: <45, 2: 45-54, 3: 55-64, 4: >64
  const [bmi, setBmi] = useState(0); // 0: <25, 1: 25-30, 3: >30
  const [waist, setWaist] = useState(0); // 0: normal, 3: moderate, 4: high
  const [exercise, setExercise] = useState(0); // 0: yes, 2: no
  const [vegetables, setVegetables] = useState(0); // 0: everyday, 1: not everyday
  const [bpMed, setBpMed] = useState(0); // 0: no, 2: yes
  const [highSugarHistory, setHighSugarHistory] = useState(0); // 0: no, 5: yes
  const [familyHistory, setFamilyHistory] = useState(0); // 0: no, 3: 2nd degree, 5: 1st degree

  const totalScore = age + bmi + waist + exercise + vegetables + bpMed + highSugarHistory + familyHistory;

  let risk = { text: "Düşük Risk (1/100)", color: "#10b981", bg: "#d1fae5", desc: "Önümüzdeki 10 yılda Tip 2 diyabet geliştirme riskiniz düşüktür (%1). Sağlıklı beslenme ve hareketli yaşam tarzınızı sürdürünüz." };
  if (totalScore >= 7 && totalScore <= 11) {
    risk = { text: "Hafif Artmış Risk (1/25)", color: "#f59e0b", bg: "#fef3c7", desc: "Önümüzdeki 10 yılda Tip 2 diyabet geliştirme riskiniz yaklaşık %4'tür. Kilonuzu kontrol altında tutarak riski azaltabilirsiniz." };
  } else if (totalScore >= 12 && totalScore <= 14) {
    risk = { text: "Orta Düzey Risk (1/6)", color: "#f97316", bg: "#ffedd5", desc: "Önümüzdeki 10 yılda Tip 2 diyabet geliştirme riskiniz %17 civarındadır. Beslenmenizi gözden geçirmeli ve fiziksel aktiviteyi artırmalısınız." };
  } else if (totalScore >= 15 && totalScore <= 20) {
    risk = { text: "Yüksek Risk (1/3)", color: "#ef4444", bg: "#fee2e2", desc: "Önümüzdeki 10 yılda Tip 2 diyabet geliştirme riskiniz %33'tür (3 kişiden biri). Aile hekiminize başvurarak açlık kan şekeri ve HbA1c testi yaptırmanız önerilir." };
  } else if (totalScore > 20) {
    risk = { text: "Çok Yüksek Risk (1/2)", color: "#b91c1c", bg: "#fee2e2", desc: "Önümüzdeki 10 yılda Tip 2 diyabet geliştirme riskiniz %50'dir (her 2 kişiden biri). Vakit kaybetmeden aile hekiminize başvurunuz." };
  }

  return (
    <div className="glass-card" style={{ padding: '2.5rem', borderRadius: '24px', background: '#ffffff', border: '1.5px solid #e2e8f0' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#ccfbf1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0d9488' }}>
          <Activity size={26} />
        </div>
        <div>
          <h3 style={{ fontSize: '1.35rem', color: '#0f172a' }}>10 Yıllık Tip 2 Diyabet Risk Testi (FINDRISC)</h3>
          <p style={{ fontSize: '0.88rem', color: '#64748b' }}>Dünya standartlarında FINDRISC skoru ile önümüzdeki 10 yıl içinde şeker hastalığı gelişme riskinizi test edin.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'flex-start' }}>
        
        {/* Questions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.88rem' }}>
          
          <div className="form-group">
            <label>1. Yaşınız</label>
            <select className="form-control" value={age} onChange={(e) => setAge(Number(e.target.value))}>
              <option value={0}>45 yaş altı</option>
              <option value={2}>45 - 54 yaş arası</option>
              <option value={3}>55 - 64 yaş arası</option>
              <option value={4}>65 yaş üstü</option>
            </select>
          </div>

          <div className="form-group">
            <label>2. Beden Kitle İndeksiniz (VKİ)</label>
            <select className="form-control" value={bmi} onChange={(e) => setBmi(Number(e.target.value))}>
              <option value={0}>Normal (25 kg/m² altı)</option>
              <option value={1}>Fazla Kilolu (25 - 30 kg/m²)</option>
              <option value={3}>Obez (30 kg/m² üstü)</option>
            </select>
          </div>

          <div className="form-group">
            <label>3. Bel Çevreniz (Erkek: 94cm / Kadın: 80cm)</label>
            <select className="form-control" value={waist} onChange={(e) => setWaist(Number(e.target.value))}>
              <option value={0}>Normal (Erkek &lt; 94cm / Kadın &lt; 80cm)</option>
              <option value={3}>Hafif Geniş (Erkek 94-102cm / Kadın 80-88cm)</option>
              <option value={4}>Geniş (Erkek &gt; 102cm / Kadın &gt; 88cm)</option>
            </select>
          </div>

          <div className="form-group">
            <label>4. Günde en az 30 dakika fiziksel aktivite yapıyor musunuz?</label>
            <select className="form-control" value={exercise} onChange={(e) => setExercise(Number(e.target.value))}>
              <option value={0}>Evet</option>
              <option value={2}>Hayır</option>
            </select>
          </div>

          <div className="form-group">
            <label>5. Düzenli tansiyon ilacı kullanıyor musunuz?</label>
            <select className="form-control" value={bpMed} onChange={(e) => setBpMed(Number(e.target.value))}>
              <option value={0}>Hayır</option>
              <option value={2}>Evet</option>
            </select>
          </div>

          <div className="form-group">
            <label>6. Ailenizde (1. veya 2. derece akraba) diyabet tanısı var mı?</label>
            <select className="form-control" value={familyHistory} onChange={(e) => setFamilyHistory(Number(e.target.value))}>
              <option value={0}>Hayır</option>
              <option value={3}>Evet: Dede, nine, teyze, amca, kuzen (2. derece)</option>
              <option value={5}>Evet: Anne, baba, kardeş veya çocuk (1. derece)</option>
            </select>
          </div>

        </div>

        {/* Results */}
        <div 
          style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            color: '#ffffff',
            borderRadius: '20px',
            padding: '2rem',
            textAlign: 'center',
            position: 'sticky',
            top: '100px'
          }}
        >
          <div style={{ fontSize: '0.85rem', color: '#38bdf8', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            Toplam FINDRISC Puanınız
          </div>

          <div style={{ fontSize: '3.5rem', fontWeight: 800, color: risk.color, lineHeight: 1, marginBottom: '0.75rem' }}>
            {totalScore} <span style={{ fontSize: '1.2rem', color: '#94a3b8' }}>/ 26</span>
          </div>

          <div style={{ display: 'inline-block', background: risk.bg, color: risk.color, padding: '0.4rem 1.25rem', borderRadius: '9999px', fontWeight: 700, fontSize: '0.9rem', marginBottom: '1.25rem' }}>
            {risk.text}
          </div>

          <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '1.25rem' }}>
            {risk.desc}
          </p>

          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '0.75rem', borderRadius: '10px', fontSize: '0.8rem', color: '#94a3b8' }}>
            Binkılıç Aile Sağlığı Merkezimizde ücretsiz açlık kan şekeri ve HbA1c tetkiklerinizi Salı ve Perşembe günleri yaptırabilirsiniz.
          </div>
        </div>

      </div>

    </div>
  );
}
