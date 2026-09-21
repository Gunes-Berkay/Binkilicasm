import React, { useState, useEffect } from 'react';
import { Sparkles, User, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { asmApi } from '../api/asmApi';

export default function SupportStaffPage() {
  const [supportStaff, setSupportStaff] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await asmApi.getStaff();
      setSupportStaff(data.filter(s => s.role_type === 'cleaning' || s.role_type === 'support'));
    }
    load();
  }, []);

  return (
    <div style={{ padding: '3.5rem 0', background: '#f8fafc' }}>
      <div className="container">
        
        <div style={{ marginBottom: '2.5rem' }}>
          <span className="sub-badge">DESTEK KADROMUZ</span>
          <h1 style={{ fontSize: '2.5rem', marginTop: '0.35rem', marginBottom: '0.75rem' }}>Yardımcı & Destek Personelimiz</h1>
          <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: '750px' }}>
            Merkezimizin hijyen standartları, sterilizasyon, tıbbi atık yönetimi ve düzen süreçlerini yürüten personelimiz.
          </p>
        </div>

        <div style={{ maxWidth: '650px', margin: '0 auto' }}>
          {supportStaff.map((member, idx) => (
            <div 
              key={idx}
              className="glass-card hover-lift"
              style={{
                padding: '2.25rem',
                background: '#ffffff',
                borderRadius: '20px',
                border: '1.5px solid #e2e8f0',
                borderTop: '5px solid #64748b'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
                <div 
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '16px',
                    background: '#f1f5f9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#475569'
                  }}
                >
                  <Sparkles size={32} />
                </div>

                <div>
                  <span className="badge badge-warning" style={{ marginBottom: '0.35rem' }}>
                    {member.title}
                  </span>
                  <h3 style={{ fontSize: '1.35rem', color: '#0f172a' }}>
                    {member.name}
                  </h3>
                  <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Binkılıç Aile Sağlığı Merkezi</div>
                </div>
              </div>

              <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '12px' }}>
                <h4 style={{ fontSize: '0.95rem', color: '#0f172a', marginBottom: '0.5rem' }}>Görev Alanı ve Sorumlulukları:</h4>
                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6 }}>
                  {member.duties || "Merkez içi hijyen, sterilizasyon standartlarının sağlanması ve tıbbi atık yönetimi desteği."}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
