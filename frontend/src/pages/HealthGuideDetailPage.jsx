import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, ArrowLeft, CheckCircle2, FlaskConical, CalendarCheck, ShieldCheck, Pill, HeartPulse, Baby, Smile } from 'lucide-react';
import { asmApi } from '../api/asmApi';

const iconMap = {
  FlaskConical: FlaskConical,
  CalendarCheck: CalendarCheck,
  ShieldCheck: ShieldCheck,
  Pill: Pill,
  HeartPulse: HeartPulse,
  Baby: Baby,
  Smile: Smile,
};

export default function HealthGuideDetailPage() {
  const { slug } = useParams();
  const [guide, setGuide] = useState(null);
  const [allGuides, setAllGuides] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const [g, all] = await Promise.all([
        asmApi.getGuide(slug),
        asmApi.getGuides()
      ]);
      setGuide(g || all.find(item => item.slug === slug) || all[0]);
      setAllGuides(all);
      setLoading(false);
    }
    load();
  }, [slug]);

  if (loading || !guide) {
    return (
      <div style={{ padding: '5rem 0', textAlign: 'center' }}>
        <p>Rehber yükleniyor...</p>
      </div>
    );
  }

  const IconComp = iconMap[guide.icon] || BookOpen;

  return (
    <div style={{ padding: '3.5rem 0', background: '#f8fafc' }}>
      <div className="container">
        
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#0284c7', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          <ArrowLeft size={16} />
          <span>Ana Sayfaya Dön</span>
        </Link>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'flex-start' }}>
          
          {/* Main Article Content */}
          <div className="glass-card" style={{ padding: '2.5rem', background: '#ffffff', borderRadius: '24px', border: '1.5px solid #e2e8f0', gridColumn: 'span 2' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284c7' }}>
                <IconComp size={28} />
              </div>
              <div>
                <span className="badge badge-primary" style={{ marginBottom: '0.35rem' }}>
                  {guide.category === 'pregnancy' ? 'Gebelik Dönemi' : guide.category === 'newborn' ? 'Yenidoğan' : 'ASM ve Sağlık Rehberi'}
                </span>
                <h1 style={{ fontSize: '2rem', color: '#0f172a', lineHeight: 1.25 }}>
                  {guide.title}
                </h1>
              </div>
            </div>

            <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '14px', borderLeft: '4px solid #0284c7', color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              <strong>Özet:</strong> {guide.summary}
            </div>

            <div style={{ color: '#334155', lineHeight: 1.85, fontSize: '1rem', whiteSpace: 'pre-line' }}>
              {guide.content}
            </div>

          </div>

          {/* Sidebar Other Guides */}
          <div>
            <div className="glass-card" style={{ padding: '1.75rem', background: '#ffffff', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '1.15rem', color: '#0f172a', marginBottom: '1.25rem', borderLeft: '3px solid #0d9488', paddingLeft: '0.6rem' }}>
                Diğer Sağlık Rehberleri
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {allGuides.map((g, i) => (
                  <Link
                    key={i}
                    to={`/asm-rehberi/${g.slug}`}
                    style={{
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      background: g.slug === slug ? '#e0f2fe' : '#f8fafc',
                      color: g.slug === slug ? '#0369a1' : '#334155',
                      border: g.slug === slug ? '1px solid #bae6fd' : '1px solid #f1f5f9',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem'
                    }}
                  >
                    <span>• {g.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
