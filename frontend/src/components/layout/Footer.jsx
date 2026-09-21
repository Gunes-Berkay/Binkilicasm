import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Phone, MessageCircle, Mail, MapPin, Clock, ExternalLink, ShieldAlert } from 'lucide-react';

export default function Footer({ info }) {
  return (
    <footer style={{ background: '#0b1329', color: '#cbd5e1', paddingTop: '4.5rem', borderTop: '4px solid #0284c7' }}>
      <div className="container">
        
        {/* Main 4 Column Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2.5rem', marginBottom: '3.5rem' }}>
          
          {/* Column 1: Kurumsal & İletişim */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div 
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #0284c7 0%, #0d9488 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
              >
                <Heart size={22} fill="#ffffff" />
              </div>
              <div>
                <h3 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '0.1rem' }}>BİNKILIÇ</h3>
                <span style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: 700, letterSpacing: '0.04em' }}>AİLE SAĞLIĞI MERKEZİ</span>
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              İstanbul Çatalca Binkılıç Mahallesinde koruyucu ve tedavi edici birinci basamak sağlık hizmeti ve çevre köylerimize gezici sağlık hizmeti sunmaktayız.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <MapPin size={18} color="#f43f5e" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>Atatürk Mah. İstanbul Cad. No: 2 Semih Sokak Binkılıç, Çatalca / İstanbul</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Phone size={16} color="#38bdf8" />
                <a href={`tel:${info?.phone || '0212 789 6334'}`} style={{ color: '#ffffff', fontWeight: 600 }}>
                  {info?.phone || '0212 789 6334'}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <MessageCircle size={16} color="#4ade80" />
                <a 
                  href={`https://wa.me/90${(info?.whatsapp || '05461286629').replace(/\D/g, '')}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: '#4ade80', fontWeight: 600 }}
                >
                  WhatsApp: {info?.whatsapp || '05461286629'}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Mail size={16} color="#fbbf24" />
                <a href={`mailto:${info?.email || 'binkilicasm@gmail.com'}`} style={{ color: '#cbd5e1' }}>
                  {info?.email || 'binkilicasm@gmail.com'}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Gezici Sağlık & Kadromuz */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '1.25rem', borderLeft: '3px solid #0d9488', paddingLeft: '0.6rem' }}>
              Gezici Sağlık ve Kadromuz
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li>
                <Link to="/kurumsal/gezici-hizmetlerimiz" style={{ color: '#38bdf8', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span>📍 Hallaçlı Köyü (Dr. Emre İleri)</span>
                </Link>
              </li>
              <li>
                <Link to="/kurumsal/gezici-hizmetlerimiz" style={{ color: '#38bdf8', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span>📍 Aydınlar & Yaylacık (Dr. Menekşe Yılmaz)</span>
                </Link>
              </li>
              <li style={{ borderTop: '1px solid #1e293b', paddingTop: '0.6rem' }}>
                <Link to="/kadromuz/aile-hekimlerimiz" style={{ color: '#cbd5e1' }}>• Aile Hekimlerimiz</Link>
              </li>
              <li>
                <Link to="/kadromuz/aile-sagligi-elemanlarimiz" style={{ color: '#cbd5e1' }}>• Aile Sağlığı Çalışanlarımız</Link>
              </li>
              <li>
                <Link to="/kurumsal/hizmet-standartlari" style={{ color: '#cbd5e1' }}>• Hizmet Standartlarımız</Link>
              </li>
              <li>
                <Link to="/kurumsal/calisma-saatlerimiz" style={{ color: '#cbd5e1' }}>• Çalışma & Esnek Mesai Saatleri</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Sağlık Hesaplamaları */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '1.25rem', borderLeft: '3px solid #0284c7', paddingLeft: '0.6rem' }}>
              Sağlık Hesaplamaları
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem' }}>
              <li>
                <Link to="/saglik-hesaplamalari/kalori" style={{ color: '#cbd5e1' }}>• Aktiviteye Göre Harcanan Kalori</Link>
              </li>
              <li>
                <Link to="/saglik-hesaplamalari/yetiskin-vki" style={{ color: '#cbd5e1' }}>• Yetişkin Vücut Kitle İndeksi (VKİ)</Link>
              </li>
              <li>
                <Link to="/saglik-hesaplamalari/cocuk-vki" style={{ color: '#cbd5e1' }}>• Çocuk Beden Kitle İndeksi</Link>
              </li>
              <li>
                <Link to="/saglik-hesaplamalari/bel-cevresi" style={{ color: '#cbd5e1' }}>• Bel Çevresi Risk Hesaplama</Link>
              </li>
              <li>
                <Link to="/saglik-hesaplamalari/asi-takvimi" style={{ color: '#cbd5e1' }}>• Bebek Aşı Takvimi Hesaplayıcı</Link>
              </li>
              <li>
                <Link to="/saglik-hesaplamalari/persentil" style={{ color: '#cbd5e1' }}>• Kız & Erkek Çocuk Persentil Tablosu</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Önemli Bağlantılar & Acil */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '1.25rem', borderLeft: '3px solid #e11d48', paddingLeft: '0.6rem' }}>
              Resmi Bağlantılar & Acil
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <a 
                href="https://www.hastanerandevu.gov.tr" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#1e293b', padding: '0.6rem 0.85rem', borderRadius: '8px', color: '#ffffff', fontWeight: 600 }}
              >
                <span>MHRS Randevu Al</span>
                <ExternalLink size={14} />
              </a>

              <a 
                href="https://enabiz.gov.tr" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#1e293b', padding: '0.6rem 0.85rem', borderRadius: '8px', color: '#ffffff', fontWeight: 600 }}
              >
                <span>e-Nabız Tahlil Sonuçları</span>
                <ExternalLink size={14} />
              </a>

              <a 
                href="https://www.saglik.gov.tr" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#1e293b', padding: '0.6rem 0.85rem', borderRadius: '8px', color: '#cbd5e1' }}
              >
                <span>T.C. Sağlık Bakanlığı</span>
                <ExternalLink size={14} />
              </a>

              <div style={{ background: 'rgba(225, 29, 72, 0.15)', border: '1px solid rgba(225, 29, 72, 0.35)', padding: '0.75rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.6rem', marginTop: '0.5rem' }}>
                <ShieldAlert size={20} color="#f43f5e" />
                <div style={{ fontSize: '0.85rem' }}>
                  <span style={{ color: '#f43f5e', fontWeight: 700 }}>Acil Durumlarda:</span>
                  <div style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.1rem' }}>ALO 112</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Divider */}
        <div 
          style={{
            borderTop: '1px solid #1e293b',
            padding: '1.75rem 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.85rem',
            color: '#64748b'
          }}
        >
          <div>
            © {new Date().getFullYear()} T.C. Sağlık Bakanlığı İstanbul Çatalca Binkılıç Aile Sağlığı Merkezi. Tüm hakları saklıdır.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/kurumsal/hakkimizda" style={{ color: '#94a3b8' }}>Hakkımızda</Link>
            <Link to="/asm-rehberi/hasta-haklari" style={{ color: '#94a3b8' }}>Hasta Hakları</Link>
            <Link to="/iletisim" style={{ color: '#38bdf8', fontWeight: 600 }}>İletişim & Bildirim</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
