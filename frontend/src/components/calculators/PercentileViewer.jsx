import React, { useState } from 'react';
import { LineChart, Baby, CheckCircle2, User } from 'lucide-react';
import { girlsPercentiles, boysPercentiles } from '../../data/percentileData';

export default function PercentileViewer() {
  const [activeTab, setActiveTab] = useState('girls');

  const data = activeTab === 'girls' ? girlsPercentiles : boysPercentiles;

  return (
    <div className="glass-card" style={{ padding: '2.5rem', borderRadius: '24px', background: '#ffffff', border: '1.5px solid #e2e8f0' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: activeTab === 'girls' ? '#fdf2f8' : '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: activeTab === 'girls' ? '#db2777' : '#0284c7' }}>
            <LineChart size={26} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.35rem', color: '#0f172a' }}>0 - 3 Yaş Çocuk Persentil (Büyüme-Gelişme) Tablosu</h3>
            <p style={{ fontSize: '0.88rem', color: '#64748b' }}>Türk Çocukları Standart Büyüme ve Gelişme Eğrileri (Kilo, Boy ve Baş Çevresi).</p>
          </div>
        </div>

        {/* Gender Tabs */}
        <div style={{ display: 'flex', gap: '0.5rem', background: '#f1f5f9', padding: '0.35rem', borderRadius: '12px' }}>
          <button
            onClick={() => setActiveTab('girls')}
            style={{
              padding: '0.5rem 1.25rem',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.88rem',
              background: activeTab === 'girls' ? '#db2777' : 'transparent',
              color: activeTab === 'girls' ? '#ffffff' : '#64748b',
              transition: 'var(--transition)'
            }}
          >
            👧 Kız Çocuklar
          </button>
          <button
            onClick={() => setActiveTab('boys')}
            style={{
              padding: '0.5rem 1.25rem',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.88rem',
              background: activeTab === 'boys' ? '#0284c7' : 'transparent',
              color: activeTab === 'boys' ? '#ffffff' : '#64748b',
              transition: 'var(--transition)'
            }}
          >
            👦 Erkek Çocuklar
          </button>
        </div>
      </div>

      <div style={{ background: activeTab === 'girls' ? '#fdf2f8' : '#e0f2fe', color: activeTab === 'girls' ? '#9d174d' : '#075985', padding: '0.85rem 1.25rem', borderRadius: '12px', marginBottom: '1.5rem', fontSize: '0.88rem' }}>
        <strong>Persentil Rehberi:</strong> 50p (Persentil) ortalama standart değeri temsil eder. 3p altı veya 97p üstü değerler aile hekiminiz tarafından değerlendirilmelidir.
      </div>

      {/* Table */}
      <div className="table-responsive" style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', minWidth: '650px', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
          <thead>
            <tr style={{ background: activeTab === 'girls' ? '#9d174d' : '#0369a1', color: '#ffffff', textAlign: 'center' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Yaş (Ay)</th>
              <th style={{ padding: '0.75rem 1rem' }}>En Düşük Kilo (3p)</th>
              <th style={{ padding: '0.75rem 1rem' }}>Ortalama Kilo (50p)</th>
              <th style={{ padding: '0.75rem 1rem' }}>En Yüksek Kilo (97p)</th>
              <th style={{ padding: '0.75rem 1rem' }}>Ortalama Boy (50p)</th>
              <th style={{ padding: '0.75rem 1rem' }}>Ortalama Baş Çevresi (50p)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr 
                key={idx}
                style={{
                  borderBottom: '1px solid #e2e8f0',
                  background: idx % 2 === 0 ? '#ffffff' : '#f8fafc',
                  textAlign: 'center'
                }}
              >
                <td style={{ padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 700, color: activeTab === 'girls' ? '#db2777' : '#0284c7' }}>
                  {row.month === 0 ? 'Doğumda' : `${row.month}. Ay`}
                </td>
                <td style={{ padding: '0.75rem 1rem', color: '#64748b' }}>{row.p3_weight} kg</td>
                <td style={{ padding: '0.75rem 1rem', fontWeight: 700, color: '#0f172a' }}>{row.p50_weight} kg</td>
                <td style={{ padding: '0.75rem 1rem', color: '#64748b' }}>{row.p97_weight} kg</td>
                <td style={{ padding: '0.75rem 1rem', fontWeight: 700, color: '#0d9488' }}>{row.p50_height} cm</td>
                <td style={{ padding: '0.75rem 1rem', color: '#475569' }}>{row.p50_head} cm</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
