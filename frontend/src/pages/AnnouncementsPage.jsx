import React, { useState, useEffect } from 'react';
import { Calendar, Bell, ExternalLink, ShieldAlert } from 'lucide-react';
import { asmApi } from '../api/asmApi';

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState([]);
  const [activeCat, setActiveCat] = useState('all');

  useEffect(() => {
    async function load() {
      const data = await asmApi.getAnnouncements();
      setAnnouncements(data);
    }
    load();
  }, []);

  const filtered = activeCat === 'all' 
    ? announcements 
    : announcements.filter(a => a.category === activeCat);

  return (
    <div style={{ padding: '3.5rem 0', background: '#f8fafc' }}>
      <div className="container">
        
        <div style={{ marginBottom: '2.5rem' }}>
          <span className="sub-badge">DUYURU ARŞİVİ</span>
          <h1 style={{ fontSize: '2.5rem', marginTop: '0.35rem', marginBottom: '0.75rem' }}>Duyurular ve Sağlık Haberleri</h1>
          <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: '750px' }}>
            Binkılıç Aile Sağlığı Merkezi güncel çalışma duyuruları, aşı kampanyaları ve T.C. Sağlık Bakanlığı duyuruları.
          </p>
        </div>

        {/* Filter Buttons */}
        <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          {[
            { id: 'all', label: 'Tüm Duyurular' },
            { id: 'asm', label: 'Binkılıç ASM Duyuruları' },
            { id: 'campaign', label: 'Aşı & Tarama Kampanyaları' },
            { id: 'ministry', label: 'Sağlık Bakanlığı Haberleri' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveCat(tab.id)}
              style={{
                padding: '0.6rem 1.25rem',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '0.9rem',
                background: activeCat === tab.id ? '#0284c7' : '#ffffff',
                color: activeCat === tab.id ? '#ffffff' : '#475569',
                border: '1px solid #e2e8f0',
                transition: 'var(--transition)'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Announcement List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {filtered.map((item, idx) => (
            <div 
              key={idx}
              className="glass-card hover-lift"
              style={{
                padding: '2rem',
                background: '#ffffff',
                borderRadius: '20px',
                border: '1.5px solid #e2e8f0',
                borderLeft: item.category === 'campaign' ? '6px solid #e11d48' : item.category === 'ministry' ? '6px solid #0284c7' : '6px solid #0d9488'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span className={`badge ${item.category === 'ministry' ? 'badge-primary' : item.category === 'campaign' ? 'badge-danger' : 'badge-secondary'}`}>
                  {item.category === 'ministry' ? 'T.C. Sağlık Bakanlığı' : item.category === 'campaign' ? 'Sağlık Taraması' : 'Binkılıç ASM'}
                </span>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#94a3b8', fontSize: '0.85rem' }}>
                  <Calendar size={14} />
                  <span>{item.published_date || "19.09.2026"}</span>
                </div>
              </div>

              <h2 style={{ fontSize: '1.4rem', color: '#0f172a', marginBottom: '0.75rem' }}>
                {item.title}
              </h2>

              <p style={{ color: '#334155', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                {item.content}
              </p>

              {item.external_link && (
                <a 
                  href={item.external_link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ display: 'inline-flex', padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                >
                  <span>Resmi Haberi Görüntüle</span>
                  <ExternalLink size={14} />
                </a>
              )}

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
