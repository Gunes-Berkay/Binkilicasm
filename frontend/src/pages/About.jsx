import React from 'react';
import { ShieldCheck, Heart, Users, MapPin, CheckCircle2, Phone, MessageCircle } from 'lucide-react';

export default function About({ info }) {
  return (
    <div style={{ padding: '3.5rem 0', background: '#f8fafc' }}>
      <div className="container">
        
        {/* Breadcrumb Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <span className="sub-badge">KURUMSAL</span>
          <h1 style={{ fontSize: '2.5rem', marginTop: '0.35rem', marginBottom: '0.75rem' }}>Hakkımızda</h1>
          <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: '700px' }}>
            İstanbul Çatalca Binkılıç Aile Sağlığı Merkezi'nin kurumsal yapısı, hizmet ilkeleri ve birinci basamak sağlık vizyonu.
          </p>
        </div>

        {/* Main Content Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'flex-start', marginBottom: '3.5rem' }}>
          
          <div className="glass-card" style={{ padding: '2.5rem', background: '#ffffff' }}>
            <h2 style={{ fontSize: '1.6rem', color: '#0f172a', marginBottom: '1.25rem', borderLeft: '4px solid #0284c7', paddingLeft: '0.75rem' }}>
              Binkılıç Aile Sağlığı Merkezi
            </h2>

            <p style={{ color: '#334155', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Merkezimiz, T.C. Sağlık Bakanlığı ve İstanbul İl Sağlık Müdürlüğü koordinasyonunda, Çatalca Binkılıç Mahallesinde <strong>34.09.001</strong> ve <strong>34.09.002</strong> nolu 2 Aile Hekimliği Birimi ile hizmet vermektedir.
            </p>

            <p style={{ color: '#334155', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Aile hekimlerimiz <strong>Dr. Emre İleri</strong> ve <strong>Dr. Menekşe Yılmaz</strong>, aile sağlığı çalışanlarımız <strong>Hemşire Elif Alp</strong>, <strong>Ebe Elif Öncül</strong>, <strong>Hemşire Simge Ceryan</strong> ve destek personelimiz <strong>Nuray Demirel</strong> ile birlikte; koruyucu hekimlik, gebe-bebek-çocuk izlemleri, aşılama, kanser erken teşhis taramaları, kronik hastalık takibi ve poliklinik muayenesi alanlarında yüksek kalite standartlarında sağlık hizmeti sunmaktayız.
            </p>

            <h3 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '1rem' }}>Temel İlkelerimiz:</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#0f766e', fontWeight: 600 }}>
                <CheckCircle2 size={18} color="#0d9488" />
                <span>Erişilebilir ve Güler Yüzlü Birinci Basamak Sağlık Hizmeti</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#0f766e', fontWeight: 600 }}>
                <CheckCircle2 size={18} color="#0d9488" />
                <span>Köylerimize Kesintisiz Gezici (Mobil) Sağlık Hizmeti (Hallaçlı, Aydınlar, Yaylacık)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#0f766e', fontWeight: 600 }}>
                <CheckCircle2 size={18} color="#0d9488" />
                <span>Hasta Mahremiyetine ve Haklarına Tam Saygı</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#0f766e', fontWeight: 600 }}>
                <CheckCircle2 size={18} color="#0d9488" />
                <span>Koruyucu Hekimlik ve Erken Teşhis Önceliği</span>
              </div>
            </div>
          </div>

          {/* Building Photo & Info Box */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '2px solid #e2e8f0' }}>
              <img 
                src="/images/binkilic_asm.jpg" 
                alt="Binkılıç Aile Sağlığı Merkezi Binası"
                style={{ width: '100%', height: '320px', objectFit: 'cover' }}
              />
              <div style={{ background: '#0f172a', color: '#ffffff', padding: '1rem 1.25rem' }}>
                <div style={{ fontSize: '0.8rem', color: '#38bdf8', fontWeight: 700, textTransform: 'uppercase' }}>Hizmet Binamız</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>Atatürk Mah. İstanbul Cad. No: 2 Semih Sokak Binkılıç, Çatalca / İst.</div>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '1.75rem', background: '#f0fdfa', border: '1.5px solid #ccfbf1' }}>
              <h4 style={{ fontSize: '1.1rem', color: '#0f766e', marginBottom: '0.5rem' }}>Doğrudan İletişim</h4>
              <p style={{ fontSize: '0.88rem', color: '#475569', marginBottom: '1.25rem' }}>
                Merkezimize mesai saatleri içerisinde telefonla veya WhatsApp danışma hattımız üzerinden ulaşabilirsiniz.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={`tel:${info?.phone || '0212 789 6334'}`} className="btn btn-primary" style={{ fontSize: '0.88rem', padding: '0.5rem 1rem' }}>
                  <Phone size={14} />
                  <span>{info?.phone || '0212 789 6334'}</span>
                </a>
                <a 
                  href={`https://wa.me/90${(info?.whatsapp || '05461286629').replace(/\D/g, '')}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-whatsapp" 
                  style={{ fontSize: '0.88rem', padding: '0.5rem 1rem' }}
                >
                  <MessageCircle size={14} />
                  <span>WhatsApp: {info?.whatsapp || '05461286629'}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
