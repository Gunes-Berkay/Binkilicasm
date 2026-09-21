import React, { useState, useEffect } from 'react';
import { FileText, Download, FileCheck, ShieldAlert, Heart } from 'lucide-react';
import { asmApi } from '../api/asmApi';

export default function DocumentsPage() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await asmApi.getDocuments();
      setDocuments(data);
    }
    load();
  }, []);

  return (
    <div style={{ padding: '3.5rem 0', background: '#f8fafc' }}>
      <div className="container">
        
        <div style={{ marginBottom: '2.5rem' }}>
          <span className="sub-badge">DOKÜMANLAR & FORMLAR</span>
          <h1 style={{ fontSize: '2.5rem', marginTop: '0.35rem', marginBottom: '0.75rem' }}>İndirilebilir Dosyalar ve Kılavuzlar</h1>
          <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: '750px' }}>
            Binkılıç Aile Sağlığı Merkezi talimatnameleri, anne sütü ve emzirme rehberi, gebelik kılavuzu ve ilk yardım dökümanları.
          </p>
        </div>

        <div className="grid-2">
          {documents.map((doc, idx) => (
            <div 
              key={idx}
              className="glass-card hover-lift"
              style={{
                padding: '1.75rem',
                background: '#ffffff',
                borderRadius: '18px',
                border: '1.5px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1.25rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284c7', flexShrink: 0 }}>
                  <FileText size={26} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', color: '#0f172a', marginBottom: '0.35rem' }}>{doc.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.5, marginBottom: '0.4rem' }}>{doc.description}</p>
                  <span style={{ fontSize: '0.75rem', color: '#0d9488', fontWeight: 700 }}>{doc.file_size}</span>
                </div>
              </div>

              <a 
                href={doc.file_path}
                download
                className="btn btn-outline"
                style={{ padding: '0.6rem 1rem', fontSize: '0.85rem', flexShrink: 0 }}
              >
                <Download size={15} />
                <span>İndir</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
