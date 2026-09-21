import React, { useState, useEffect } from 'react';
import { Image, X, ZoomIn, Eye } from 'lucide-react';
import { asmApi } from '../api/asmApi';

export default function GalleryPage() {
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImg, setLightboxImg] = useState(null);

  useEffect(() => {
    async function load() {
      const data = await asmApi.getGallery();
      setItems(data);
    }
    load();
  }, []);

  const filtered = selectedCategory === 'all' 
    ? items 
    : items.filter(i => i.category === selectedCategory);

  return (
    <div style={{ padding: '3.5rem 0', background: '#f8fafc' }}>
      <div className="container">
        
        <div style={{ marginBottom: '2.5rem' }}>
          <span className="sub-badge">FOTO GALERİ</span>
          <h1 style={{ fontSize: '2.5rem', marginTop: '0.35rem', marginBottom: '0.75rem' }}>Merkezimizden Fotoğraflar</h1>
          <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: '750px' }}>
            Binkılıç Aile Sağlığı Merkezi hizmet binamız, poliklinik odalarımız, aşılama ve laboratuvar alanlarımız.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          {['all', 'Merkezimiz', 'Hizmetlerimiz'].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '0.6rem 1.25rem',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '0.9rem',
                background: selectedCategory === cat ? '#0284c7' : '#ffffff',
                color: selectedCategory === cat ? '#ffffff' : '#475569',
                border: '1px solid #e2e8f0',
                transition: 'var(--transition)'
              }}
            >
              {cat === 'all' ? 'Tümü' : cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid-3">
          {filtered.map((item, idx) => (
            <div 
              key={idx}
              className="hover-lift"
              onClick={() => setLightboxImg(item)}
              style={{
                borderRadius: '18px',
                overflow: 'hidden',
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                boxShadow: 'var(--shadow-sm)',
                cursor: 'pointer',
                position: 'relative'
              }}
            >
              <img 
                src="/images/binkilic_asm.jpg" 
                alt={item.title}
                style={{ width: '100%', height: '240px', objectFit: 'cover' }}
              />
              <div style={{ padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ fontSize: '0.98rem', color: '#0f172a' }}>{item.title}</h4>
                  <span style={{ fontSize: '0.75rem', color: '#0284c7', fontWeight: 600 }}>{item.category}</span>
                </div>
                <ZoomIn size={18} color="#64748b" />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxImg && (
          <div 
            onClick={() => setLightboxImg(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(15, 23, 42, 0.92)',
              backdropFilter: 'blur(8px)',
              zIndex: 99999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                maxWidth: '850px',
                width: '100%',
                background: '#0f172a',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <button 
                onClick={() => setLightboxImg(null)}
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: 'rgba(0,0,0,0.6)',
                  color: '#ffffff',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10
                }}
              >
                <X size={20} />
              </button>

              <img 
                src="/images/binkilic_asm.jpg" 
                alt={lightboxImg.title}
                style={{ width: '100%', maxHeight: '550px', objectFit: 'contain' }}
              />

              <div style={{ padding: '1.25rem', color: '#ffffff' }}>
                <h3 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '0.2rem' }}>{lightboxImg.title}</h3>
                <span style={{ color: '#38bdf8', fontSize: '0.85rem' }}>Binkılıç Aile Sağlığı Merkezi</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
