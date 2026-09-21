import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, Calendar, ChevronRight, ExternalLink, ShieldAlert } from 'lucide-react';

export default function AnnouncementsSection({ announcements = [] }) {
  const defaultAnnouncements = [
    {
      id: 1,
      title: "Binkılıç ASM Gezici Sağlık Hizmetleri Ziyaret Takvimi",
      summary: "Hallaçlı, Aydınlar ve Yaylacık köylerimize yönelik haftalık hekim ziyaret günleri ve saatleri ilan edilmiştir.",
      content: "Binkılıç Aile Sağlığı Merkezi hekimlerimiz Dr. Emre İleri ve Dr. Menekşe Yılmaz tarafından yürütülen gezici sağlık hizmetleri kapsamında...",
      category: "asm",
      published_date: "2026-09-19",
      is_featured: true
    },
    {
      id: 2,
      title: "Kanser Erken Teşhis Taramaları Merkezimizde Ücretsiz Yapılmaktadır",
      summary: "50-70 yaş arası GGK ve 30-65 yaş arası HPV rahim ağzı kanser tarama kitlerinizi merkezimizden temin edebilirsiniz.",
      content: "Sağlık Bakanlığımızın kanserle mücadele programı kapsamında merkezimizde Kolorektal kanser ve Rahim Ağzı kanseri erken teşhis taramaları...",
      category: "campaign",
      published_date: "2026-09-15",
      is_featured: true
    },
    {
      id: 3,
      title: "T.C. Sağlık Bakanlığı: Akılcı İlaç ve Antibiyotik Kullanımı Duyurusu",
      summary: "Bilinçsiz antibiyotik kullanımı bakteriyel direnci artırıyor. Lütfen hekim önerisi olmadan antibiyotik kullanmayınız.",
      content: "Grip ve nezle gibi viral hastalıklarda antibiyotikler iyileşme sağlamaz. Aile hekiminizin reçete etmediği hiçbir ilacı kullanmayınız.",
      category: "ministry",
      published_date: "2026-09-10",
      external_link: "https://covid19.saglik.gov.tr/",
      is_featured: false
    }
  ];

  const list = announcements.length > 0 ? announcements : defaultAnnouncements;

  return (
    <section style={{ padding: '5rem 0', background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
      <div className="container">
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="sub-badge" style={{ color: '#e11d48' }}>GÜNCEL BİLGİLENDİRMELER</span>
            <h2>Duyurular ve Sağlık Haberleri</h2>
          </div>

          <Link to="/duyurular" className="btn btn-outline" style={{ fontSize: '0.9rem' }}>
            <span>Tüm Duyuruları Gör</span>
            <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid-3">
          {list.map((item, idx) => {
            const isMinistry = item.category === 'ministry';
            const isCampaign = item.category === 'campaign';
            
            return (
              <div 
                key={idx}
                className="glass-card hover-lift"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '18px',
                  border: isCampaign ? '1.5px solid #fda4af' : '1px solid #e2e8f0',
                  background: '#ffffff'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <span 
                      className={`badge ${isMinistry ? 'badge-primary' : isCampaign ? 'badge-danger' : 'badge-secondary'}`}
                    >
                      {isMinistry ? 'Sağlık Bakanlığı' : isCampaign ? 'Sağlık Kampanyası' : 'Binkılıç ASM'}
                    </span>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', color: '#94a3b8' }}>
                      <Calendar size={13} />
                      <span>{item.published_date || "19.09.2026"}</span>
                    </div>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', color: '#0f172a', marginBottom: '0.65rem', lineHeight: 1.4 }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {item.summary || item.content.slice(0, 140) + '...'}
                  </p>
                </div>

                {item.external_link ? (
                  <a 
                    href={item.external_link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: '#0284c7',
                      fontWeight: 700,
                      fontSize: '0.88rem'
                    }}
                  >
                    <span>Haberi Oku</span>
                    <ExternalLink size={14} />
                  </a>
                ) : (
                  <Link 
                    to="/duyurular"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: '#0284c7',
                      fontWeight: 700,
                      fontSize: '0.88rem'
                    }}
                  >
                    <span>Detayını Görüntüle</span>
                    <ChevronRight size={15} />
                  </Link>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
