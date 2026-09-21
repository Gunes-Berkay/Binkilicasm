import React, { useState, useEffect } from 'react';
import { HeartPulse, User, CheckCircle2, ShieldCheck } from 'lucide-react';
import { asmApi } from '../api/asmApi';

export default function StaffPage() {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await asmApi.getStaff();
      setStaff(data.filter(s => s.role_type === 'nurse' || s.role_type === 'midwife'));
    }
    load();
  }, []);

  return (
    <div style={{ padding: '3.5rem 0', background: '#f8fafc' }}>
      <div className="container">
        
        <div style={{ marginBottom: '2.5rem' }}>
          <span className="sub-badge">SAĞLIK ÇALIŞANLARIMIZ</span>
          <h1 style={{ fontSize: '2.5rem', marginTop: '0.35rem', marginBottom: '0.75rem' }}>Aile Sağlığı Çalışanlarımız</h1>
          <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: '750px' }}>
            Aşılama, gebe ve bebek izlemleri, pansuman, enjeksiyon ve laboratuvar süreçlerinde görevli hemşire ve ebelerimiz.
          </p>
        </div>

        <div className="grid-3">
          {staff.map((member, idx) => (
            <div 
              key={idx}
              className="glass-card hover-lift"
              style={{
                padding: '2rem',
                background: '#ffffff',
                borderRadius: '20px',
                border: '1.5px solid #e2e8f0',
                borderTop: member.role_type === 'midwife' ? '5px solid #db2777' : '5px solid #0d9488'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <div 
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '16px',
                    background: member.role_type === 'midwife' ? '#fdf2f8' : '#ccfbf1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: member.role_type === 'midwife' ? '#db2777' : '#0d9488'
                  }}
                >
                  <HeartPulse size={30} />
                </div>

                <div>
                  <span className={`badge ${member.role_type === 'midwife' ? 'badge-danger' : 'badge-secondary'}`} style={{ marginBottom: '0.3rem' }}>
                    {member.title}
                  </span>
                  <h3 style={{ fontSize: '1.25rem', color: '#0f172a' }}>
                    {member.name}
                  </h3>
                </div>
              </div>

              <div style={{ background: '#f8fafc', padding: '0.85rem 1rem', borderRadius: '10px', fontSize: '0.88rem', color: '#0f766e', fontWeight: 600, marginBottom: '1.25rem' }}>
                📍 {member.assigned_doctor}
              </div>

              <div>
                <h4 style={{ fontSize: '0.92rem', color: '#0f172a', marginBottom: '0.5rem' }}>Görev ve Hizmet Alanları:</h4>
                <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.6 }}>
                  {member.duties}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
