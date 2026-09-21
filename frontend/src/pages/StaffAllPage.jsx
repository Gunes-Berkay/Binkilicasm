import React, { useState, useEffect } from 'react';
import { Stethoscope, HeartPulse, Sparkles, MapPin, Clock, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';
import { asmApi } from '../api/asmApi';

export default function StaffAllPage() {
  const [doctors, setDoctors] = useState([]);
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    async function load() {
      const [docs, stf] = await Promise.all([
        asmApi.getDoctors(),
        asmApi.getStaff()
      ]);
      setDoctors(docs);
      setStaff(stf);
    }
    load();
  }, []);

  const nursesAndMidwives = staff.filter(s => s.role_type === 'nurse' || s.role_type === 'midwife');
  const supportPersonnel = staff.filter(s => s.role_type === 'cleaning' || s.role_type === 'support');

  return (
    <div style={{ padding: '3.5rem 0', background: '#f8fafc' }}>
      <div className="container">
        
        {/* Page Header */}
        <div style={{ marginBottom: '3rem' }}>
          <span className="sub-badge">BİNKILIÇ ASM EKİBİ</span>
          <h1 style={{ fontSize: '2.5rem', marginTop: '0.35rem', marginBottom: '0.75rem' }}>Merkez Kadromuz</h1>
          <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: '780px' }}>
            Binkılıç Aile Sağlığı Merkezimizde ve Hallaçlı, Aydınlar, Yaylacık köylerimizde sizlere güler yüzle hizmet veren tüm hekim, hemşire, ebe ve personel kadromuz.
          </p>
        </div>

        {/* SECTION 1: AİLE HEKİMLERİMİZ */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.75rem' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284c7' }}>
              <Stethoscope size={20} />
            </div>
            <h2 style={{ fontSize: '1.75rem', color: '#0f172a' }}>Aile Hekimlerimiz</h2>
          </div>

          <div className="grid-2">
            {doctors.map((doc, idx) => (
              <div 
                key={idx}
                className="glass-card hover-lift"
                style={{
                  padding: '2.25rem',
                  background: '#ffffff',
                  borderRadius: '20px',
                  border: '1.5px solid #e2e8f0',
                  borderTop: `6px solid ${doc.avatar_color || (idx === 0 ? '#0284c7' : '#0d9488')}`
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div 
                    style={{
                      width: '68px',
                      height: '68px',
                      borderRadius: '20px',
                      background: `linear-gradient(135deg, ${doc.avatar_color || '#0284c7'} 0%, #0369a1 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      boxShadow: '0 8px 16px rgba(2, 132, 199, 0.25)'
                    }}
                  >
                    <Stethoscope size={34} />
                  </div>

                  <div>
                    <span className="badge badge-primary" style={{ marginBottom: '0.35rem' }}>
                      {doc.unit_no} Nolu Birim
                    </span>
                    <h3 style={{ fontSize: '1.4rem', color: '#0f172a' }}>
                      {doc.title} {doc.name}
                    </h3>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', background: '#f8fafc', padding: '1rem', borderRadius: '12px', marginBottom: '1.25rem', fontSize: '0.88rem' }}>
                  <div>
                    <span style={{ color: '#64748b', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase' }}>Oda No</span>
                    <div style={{ fontWeight: 600, color: '#0f172a' }}>{doc.room_no}</div>
                  </div>
                  <div>
                    <span style={{ color: '#64748b', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase' }}>Gezici Köyler</span>
                    <div style={{ fontWeight: 600, color: '#0d9488' }}>{doc.mobile_villages}</div>
                  </div>
                </div>

                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {doc.bio}
                </p>

                <div style={{ background: '#f0fdfa', border: '1px solid #ccfbf1', padding: '1rem', borderRadius: '12px', fontSize: '0.85rem', color: '#134e4a', whiteSpace: 'pre-line', lineHeight: 1.6 }}>
                  <strong>Mesai & Gezici Hizmet Çizelgesi:</strong>
                  {"\n" + doc.schedule}
                </div>

                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem' }}>
                  <a 
                    href="https://www.hastanerandevu.gov.tr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-danger"
                    style={{ flex: 1, padding: '0.65rem 1rem', fontSize: '0.88rem' }}
                  >
                    <Calendar size={16} />
                    <span>MHRS Randevu Al</span>
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: AİLE SAĞLIĞI ÇALIŞANLARIMIZ (HEMŞİRE & EBE) */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.75rem' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#ccfbf1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0d9488' }}>
              <HeartPulse size={20} />
            </div>
            <h2 style={{ fontSize: '1.75rem', color: '#0f172a' }}>Aile Sağlığı Çalışanlarımız (Hemşire & Ebe)</h2>
          </div>

          <div className="grid-3">
            {nursesAndMidwives.map((member, idx) => (
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
                      width: '56px',
                      height: '56px',
                      borderRadius: '16px',
                      background: member.role_type === 'midwife' ? '#fdf2f8' : '#ccfbf1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: member.role_type === 'midwife' ? '#db2777' : '#0d9488'
                    }}
                  >
                    <HeartPulse size={28} />
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

                <div style={{ background: '#f8fafc', padding: '0.75rem 1rem', borderRadius: '10px', fontSize: '0.85rem', color: '#0f766e', fontWeight: 600, marginBottom: '1rem' }}>
                  📍 {member.assigned_doctor}
                </div>

                <div>
                  <h4 style={{ fontSize: '0.9rem', color: '#0f172a', marginBottom: '0.4rem' }}>Görev ve Hizmet Alanları:</h4>
                  <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.6 }}>
                    {member.duties}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: YARDIMCI VE DESTEK PERSONELİ */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.75rem' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569' }}>
              <Sparkles size={20} />
            </div>
            <h2 style={{ fontSize: '1.75rem', color: '#0f172a' }}>Yardımcı & Destek Personelimiz</h2>
          </div>

          <div style={{ maxWidth: '650px' }}>
            {supportPersonnel.map((member, idx) => (
              <div 
                key={idx}
                className="glass-card hover-lift"
                style={{
                  padding: '2rem',
                  background: '#ffffff',
                  borderRadius: '20px',
                  border: '1.5px solid #e2e8f0',
                  borderTop: '5px solid #64748b'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569' }}>
                    <Sparkles size={28} />
                  </div>
                  <div>
                    <span className="badge badge-warning" style={{ marginBottom: '0.3rem' }}>
                      {member.title}
                    </span>
                    <h3 style={{ fontSize: '1.3rem', color: '#0f172a' }}>
                      {member.name}
                    </h3>
                  </div>
                </div>

                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '12px', fontSize: '0.88rem', color: '#475569', lineHeight: 1.6 }}>
                  {member.duties || "Merkez içi hijyen, sterilizasyon standartlarının sağlanması ve tıbbi atık yönetimi desteği."}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
