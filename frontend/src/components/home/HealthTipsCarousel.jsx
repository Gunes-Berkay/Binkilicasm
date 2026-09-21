import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Heart, 
  Baby, 
  HeartPulse, 
  ShieldCheck, 
  Pill, 
  Activity, 
  Smile, 
  Droplets,
  Quote
} from 'lucide-react';
import { healthTipsData } from '../../data/healthTipsData';

const iconMap = {
  Baby: Baby,
  HeartPulse: HeartPulse,
  Heart: Heart,
  ShieldCheck: ShieldCheck,
  Pill: Pill,
  Activity: Activity,
  Smile: Smile,
  Droplets: Droplets,
};

export default function HealthTipsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % healthTipsData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + healthTipsData.length) % healthTipsData.length);
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % healthTipsData.length);
  };

  const current = healthTipsData[currentIndex];
  const IconComp = iconMap[current.icon] || Heart;

  return (
    <section style={{ padding: '4.5rem 0', background: '#f8fafc', position: 'relative' }}>
      <div className="container">
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#0d9488', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
              <Sparkles size={16} />
              <span>AİLE SAĞLIĞI VE BESLENME REHBERİ</span>
            </div>
            <h2 style={{ fontSize: '2.1rem', color: '#0f172a' }}>Günün Sağlık ve Beslenme Tavsiyeleri</h2>
          </div>

          {/* Navigation controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button
              onClick={prevSlide}
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: '#ffffff',
                border: '1.5px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#334155',
                boxShadow: 'var(--shadow-sm)',
                transition: 'var(--transition)'
              }}
              aria-label="Önceki Tavsiye"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextSlide}
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: '#ffffff',
                border: '1.5px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#334155',
                boxShadow: 'var(--shadow-sm)',
                transition: 'var(--transition)'
              }}
              aria-label="Sonraki Tavsiye"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Dynamic Rotating Card Container */}
        <div 
          className="glass-card"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            padding: '2.75rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #f0fdfa 100%)',
            borderRadius: '24px',
            border: '2px solid #ccfbf1',
            boxShadow: '0 20px 35px -10px rgba(13, 148, 136, 0.12)',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '260px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          {/* Top category & Icon badge */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div 
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: current.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: current.color,
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <IconComp size={26} />
              </div>
              <div>
                <span className="badge" style={{ background: current.bg, color: current.color }}>
                  {current.category}
                </span>
                <h3 style={{ fontSize: '1.45rem', color: '#0f172a', marginTop: '0.25rem' }}>
                  {current.title}
                </h3>
              </div>
            </div>

            <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600 }}>
              {currentIndex + 1} / {healthTipsData.length}
            </span>
          </div>

          {/* Body Content */}
          <div style={{ marginBottom: '1.75rem' }}>
            <p style={{ fontSize: '1.05rem', color: '#1e293b', fontWeight: 600, lineHeight: 1.6, marginBottom: '0.75rem' }}>
              {current.summary}
            </p>
            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.7 }}>
              {current.details}
            </p>
          </div>

          {/* Doctor Quote Footer */}
          <div 
            style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              padding: '0.85rem 1.25rem',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              color: '#0f766e',
              fontSize: '0.88rem',
              fontWeight: 600
            }}
          >
            <Quote size={18} color="#0d9488" style={{ flexShrink: 0 }} />
            <span>{current.doctorQuote}</span>
          </div>

          {/* Rotation Progress Dots */}
          <div style={{ display: 'flex', gap: '6px', justifyContent: 'center', marginTop: '1.5rem' }}>
            {healthTipsData.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                style={{
                  width: i === currentIndex ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: i === currentIndex ? '#0d9488' : '#cbd5e1',
                  transition: 'all 0.3s ease'
                }}
                aria-label={`Tavsiye ${i + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
