import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Compass, FileCheck, MessageSquarePlus, ChevronRight } from 'lucide-react';

export default function QuickAccessCards() {
  const cards = [
    {
      title: "Çalışma Saatlerimiz",
      desc: "Hafta içi 08:00 - 17:00 ve hekimlerimizin esnek mesai çizelgesi hakkında bilgi alın.",
      icon: Clock,
      color: "#0284c7",
      bgColor: "#e0f2fe",
      link: "/kurumsal/calisma-saatlerimiz"
    },
    {
      title: "Gezici Sağlık Köyleri",
      desc: "Hallaçlı, Aydınlar ve Yaylacık köylerimize haftalık hekim ziyaret gün ve saatleri.",
      icon: Compass,
      color: "#0d9488",
      bgColor: "#ccfbf1",
      link: "/kurumsal/gezici-hizmetlerimiz",
      highlight: true
    },
    {
      title: "Hizmet Standartlarımız",
      desc: "Muayene, tahlil, aşı ve rapor işlemlerinin standart tamamlanma süreleri.",
      icon: FileCheck,
      color: "#7c3aed",
      bgColor: "#ede9fe",
      link: "/kurumsal/hizmet-standartlari"
    },
    {
      title: "Online Bildirim & Soru",
      desc: "Doktorlarımıza soru sorun; gebe, bebek, engelli veya obezite bildiriminde bulunun.",
      icon: MessageSquarePlus,
      color: "#e11d48",
      bgColor: "#ffe4e6",
      link: "/iletisim"
    }
  ];

  return (
    <section style={{ marginTop: '-2.5rem', position: 'relative', zIndex: 10 }}>
      <div className="container">
        <div className="grid-4">
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <Link 
                key={idx} 
                to={card.link}
                className="glass-card hover-lift"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: card.highlight ? `4px solid ${card.color}` : '1px solid #e2e8f0'
                }}
              >
                <div>
                  <div 
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      background: card.bgColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem'
                    }}
                  >
                    <IconComponent size={26} color={card.color} />
                  </div>

                  <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: '#0f172a' }}>
                    {card.title}
                  </h3>

                  <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                    {card.desc}
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: card.color, fontWeight: 700, fontSize: '0.85rem' }}>
                  <span>Detaylı İncele</span>
                  <ChevronRight size={15} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
