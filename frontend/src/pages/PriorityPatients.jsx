import React from 'react';
import { AlertCircle, Heart, ShieldCheck, CheckCircle2, UserCheck } from 'lucide-react';

export default function PriorityPatients() {
  const groups = [
    { title: "Acil Vakalar", desc: "Ani gelişen rahatsızlıklar, travmalar, solunum sıkıntısı ve bayılma gibi acil tıbbi müdahale gerektiren hastalar." },
    { title: "Engelli Vatandaşlarımız", desc: "Bedensel, zihinsel veya duyusal engeli bulunan vatandaşlarımız." },
    { title: "Hamile (Gebe) Kadınlar", desc: "Gebe takibi, NST ve muayeneye gelen anne adayları." },
    { title: "65 Yaş Üstü Yaşlılar", desc: "65 yaş ve üzeri kronik hastalık veya muayene ihtiyacı olan yaşlı vatandaşlarımız." },
    { title: "7 Yaşından Küçük Bebek ve Çocuklar", desc: "Aşı ve acil çocuk hastalıkları başvuruları." },
    { title: "Harp ve Vazife Malulleri, Şehit ve Gazi Yakınları", desc: "Vatan hizmeti gazileri ile şehit ve gazi birinci derece yakınları." },
  ];

  return (
    <div style={{ padding: '3.5rem 0', background: '#f8fafc' }}>
      <div className="container">
        
        <div style={{ marginBottom: '2.5rem' }}>
          <span className="sub-badge" style={{ color: '#e11d48' }}>HASTA TRİYAJ ESASLARI</span>
          <h1 style={{ fontSize: '2.5rem', marginTop: '0.35rem', marginBottom: '0.75rem' }}>Öncelikli Hasta Grupları</h1>
          <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: '750px' }}>
            Sağlık Bakanlığı genelgesi uyarınca merkezimizde poliklinik ve müdahale sırasındaki öncelik sırası ve esasları.
          </p>
        </div>

        <div className="grid-2" style={{ marginBottom: '3rem' }}>
          {groups.map((item, idx) => (
            <div 
              key={idx}
              className="glass-card hover-lift"
              style={{ padding: '1.75rem', background: '#ffffff', borderRadius: '16px', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}
            >
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#ffe4e6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e11d48', flexShrink: 0 }}>
                <UserCheck size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', color: '#0f172a', marginBottom: '0.4rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
