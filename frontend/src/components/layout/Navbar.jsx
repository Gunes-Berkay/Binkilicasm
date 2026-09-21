import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Menu, 
  X, 
  MessageCircle, 
  Calendar,
  Sparkles
} from 'lucide-react';
import bakanlikLogo from '../../assets/bakanliklogo.png';

export default function Navbar({ info }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const kurumsalLinks = [
    { title: "Hakkımızda", path: "/kurumsal/hakkimizda" },
    { title: "Gezici Sağlık Hizmetlerimiz", path: "/kurumsal/gezici-hizmetlerimiz", highlight: true },
    { title: "Hizmet Standartlarımız", path: "/kurumsal/hizmet-standartlari" },
    { title: "Çalışma Saatlerimiz", path: "/kurumsal/calisma-saatlerimiz" },
    { title: "Öncelikli Hastalar", path: "/kurumsal/oncelikli-hastalar" },
    { title: "Hizmet Politikamız", path: "/kurumsal/hizmet-politikamiz" },
  ];

  const rehberLinks = [
    { title: "Tetkik ve Tahlil İşlemleri", path: "/asm-rehberi/tetkik-islemleri" },
    { title: "Muayene ve Randevu İşlemleri", path: "/asm-rehberi/muayene-islemleri" },
    { title: "Hasta Hakları ve Sorumlulukları", path: "/asm-rehberi/hasta-haklari" },
    { title: "Akılcı İlaç ve Antibiyotik Kullanımı", path: "/asm-rehberi/akilci-ilac-kullanimi" },
    { title: "Bağırsak Kanseri Erken Teşhisi", path: "/asm-rehberi/bagirsak-kanseri-taramasi" },
    { title: "Hafta Hafta Gebelik Rehberi", path: "/asm-rehberi/gebelik-donemi" },
    { title: "Yenidoğan Bebek Bakımı", path: "/asm-rehberi/yenidogan-bakimi" },
  ];

  const hesaplamaLinks = [
    { title: "Aktivite & Kalori Hesaplama", path: "/saglik-hesaplamalari/kalori" },
    { title: "Günlük Su İhtiyacı Hesaplayıcı", path: "/saglik-hesaplamalari/su", highlight: true },
    { title: "Yetişkin Vücut Kitle İndeksi (VKİ)", path: "/saglik-hesaplamalari/yetiskin-vki" },
    { title: "Çocuk & Ergen Beden Kitle İndeksi", path: "/saglik-hesaplamalari/cocuk-vki" },
    { title: "Metabolizma Hızı (BMR) & Kalori", path: "/saglik-hesaplamalari/bmr", highlight: true },
    { title: "Yetişkin Bel Çevresi Risk Hesaplama", path: "/saglik-hesaplamalari/bel-cevresi" },
    { title: "10 Yıllık Tip 2 Diyabet Risk Testi", path: "/saglik-hesaplamalari/diyabet-riski", highlight: true },
    { title: "Gebelik Haftası & Doğum Tarihi", path: "/saglik-hesaplamalari/gebelik", highlight: true },
    { title: "Bebek Aşı Takvimi Hesaplayıcı", path: "/saglik-hesaplamalari/asi-takvimi" },
    { title: "Kız & Erkek Çocuk Persentil Tabloları", path: "/saglik-hesaplamalari/persentil" },
    { title: "Sigara Maliyet & Sağlık Kazanımı", path: "/saglik-hesaplamalari/sigara", highlight: true },
  ];

  const [openMobileSection, setOpenMobileSection] = useState(null);

  const toggleMobileSection = (sec) => {
    setOpenMobileSection(prev => prev === sec ? null : sec);
  };

  return (
    <header 
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: isScrolled ? 'rgba(255, 255, 255, 0.98)' : '#ffffff',
        backdropFilter: 'blur(10px)',
        boxShadow: isScrolled ? '0 4px 20px -2px rgba(0,0,0,0.08)' : '0 1px 3px rgba(0,0,0,0.05)',
        transition: 'var(--transition)'
      }}
    >
      <div className="navbar-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '82px', width: '100%', maxWidth: '1560px', margin: '0 auto', padding: '0 2rem' }}>
        
        {/* Ministry Logo + Horizontal Brand Text */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginRight: '1rem', flexShrink: 0 }}>
          <img 
            src={bakanlikLogo} 
            alt="T.C. Sağlık Bakanlığı Logo" 
            className="nav-brand-logo"
            style={{ height: '52px', width: 'auto', objectFit: 'contain', transition: 'all 0.3s' }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span className="nav-brand-title" style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.02em', color: '#0f172a', lineHeight: 1.15, whiteSpace: 'nowrap' }}>
              Binkılıç Aile Sağlık Merkezi
            </span>
            <span className="nav-brand-subtitle" style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0284c7', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              T.C. Sağlık Bakanlığı • Çatalca / İstanbul
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="desktop-nav">
          
          <Link 
            to="/" 
            style={{ 
              padding: '0.5rem 0.65rem', 
              borderRadius: '8px', 
              fontWeight: 600, 
              fontSize: '0.88rem',
              color: location.pathname === '/' ? '#0284c7' : '#334155',
              background: location.pathname === '/' ? '#f0f9ff' : 'transparent'
            }}
          >
            Ana Sayfa
          </Link>

          {/* Kurumsal Dropdown */}
          <div 
            style={{ position: 'relative' }}
            onMouseEnter={() => setActiveDropdown('kurumsal')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                padding: '0.5rem 0.65rem',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '0.88rem',
                color: location.pathname.startsWith('/kurumsal') ? '#0284c7' : '#334155',
                background: location.pathname.startsWith('/kurumsal') ? '#f0f9ff' : 'transparent'
              }}
            >
              <span>KURUMSAL</span>
              <ChevronDown size={14} />
            </button>

            {activeDropdown === 'kurumsal' && (
              <div 
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  width: '260px',
                  background: '#ffffff',
                  borderRadius: '14px',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
                  border: '1px solid #e2e8f0',
                  padding: '0.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.2rem'
                }}
              >
                {kurumsalLinks.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.path}
                    style={{
                      padding: '0.6rem 0.85rem',
                      borderRadius: '8px',
                      fontSize: '0.88rem',
                      fontWeight: item.highlight ? 700 : 500,
                      color: item.highlight ? '#0d9488' : '#334155',
                      background: item.highlight ? '#f0fdfa' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span>{item.title}</span>
                    {item.highlight && <span style={{ fontSize: '0.65rem', background: '#0d9488', color: '#fff', padding: '1px 6px', borderRadius: '4px' }}>Önemli</span>}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* KADROMUZ (Tek sayfa doğrudan link) */}
          <Link 
            to="/kadromuz" 
            style={{ 
              padding: '0.5rem 0.65rem', 
              borderRadius: '8px', 
              fontWeight: 600, 
              fontSize: '0.88rem',
              color: location.pathname === '/kadromuz' ? '#0284c7' : '#334155',
              background: location.pathname === '/kadromuz' ? '#f0f9ff' : 'transparent'
            }}
          >
            KADROMUZ
          </Link>

          {/* ASM Rehberi Dropdown */}
          <div 
            style={{ position: 'relative' }}
            onMouseEnter={() => setActiveDropdown('rehber')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                padding: '0.5rem 0.65rem',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '0.88rem',
                color: location.pathname.startsWith('/asm-rehberi') ? '#0284c7' : '#334155'
              }}
            >
              <span>ASM REHBERİ</span>
              <ChevronDown size={14} />
            </button>

            {activeDropdown === 'rehber' && (
              <div 
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  width: '280px',
                  background: '#ffffff',
                  borderRadius: '14px',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
                  border: '1px solid #e2e8f0',
                  padding: '0.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.2rem'
                }}
              >
                {rehberLinks.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.path}
                    style={{
                      padding: '0.6rem 0.85rem',
                      borderRadius: '8px',
                      fontSize: '0.88rem',
                      fontWeight: 500,
                      color: '#334155'
                    }}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Sağlık Hesaplamaları Dropdown */}
          <div 
            style={{ position: 'relative' }}
            onMouseEnter={() => setActiveDropdown('hesaplamalar')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                padding: '0.5rem 0.65rem',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '0.88rem',
                color: location.pathname.startsWith('/saglik-hesaplamalari') ? '#0284c7' : '#334155'
              }}
            >
              <span>HESAPLAMALAR</span>
              <ChevronDown size={14} />
            </button>

            {activeDropdown === 'hesaplamalar' && (
              <div 
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '-60px',
                  width: '320px',
                  background: '#ffffff',
                  borderRadius: '14px',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
                  border: '1px solid #e2e8f0',
                  padding: '0.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.2rem',
                  maxHeight: '420px',
                  overflowY: 'auto'
                }}
              >
                {hesaplamaLinks.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.path}
                    style={{
                      padding: '0.55rem 0.85rem',
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      color: item.highlight ? '#0369a1' : '#334155',
                      background: item.highlight ? '#f0f9ff' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span>{item.title}</span>
                    {item.highlight && <span style={{ fontSize: '0.62rem', background: '#0284c7', color: '#fff', padding: '1px 5px', borderRadius: '4px' }}>Yeni</span>}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/duyurular" style={{ padding: '0.5rem 0.65rem', fontWeight: 600, fontSize: '0.88rem', color: location.pathname === '/duyurular' ? '#0284c7' : '#334155' }}>
            DUYURULAR
          </Link>

          <Link to="/dosyalar" style={{ padding: '0.5rem 0.65rem', fontWeight: 600, fontSize: '0.88rem', color: location.pathname === '/dosyalar' ? '#0284c7' : '#334155' }}>
            DOSYALAR
          </Link>

          <Link to="/galeri" style={{ padding: '0.5rem 0.65rem', fontWeight: 600, fontSize: '0.88rem', color: location.pathname === '/galeri' ? '#0284c7' : '#334155' }}>
            GALERİ
          </Link>

          <Link to="/iletisim" style={{ padding: '0.5rem 0.65rem', fontWeight: 600, fontSize: '0.88rem', color: location.pathname === '/iletisim' ? '#0284c7' : '#334155' }}>
            İLETİŞİM
          </Link>
        </nav>

        {/* Action Button: WhatsApp or Phone */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <a
            href={`https://wa.me/90${(info?.whatsapp || '05461286629').replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp desktop-nav"
            style={{ padding: '0.55rem 1.15rem', fontSize: '0.88rem' }}
          >
            <MessageCircle size={16} />
            <span>WhatsApp</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ 
              padding: '0.6rem', 
              color: '#0f172a', 
              display: 'none',
              borderRadius: '10px',
              background: '#f1f5f9',
              border: '1px solid #e2e8f0',
              cursor: 'pointer'
            }}
            className="mobile-menu-btn"
            aria-label="Menüyü Aç"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu (Interactive & Touch Friendly) */}
      {mobileMenuOpen && (
        <div 
          style={{
            background: '#ffffff',
            borderTop: '2px solid #e2e8f0',
            padding: '1.25rem',
            maxHeight: 'calc(100vh - 82px)',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            boxShadow: '0 15px 30px rgba(0,0,0,0.12)'
          }}
        >
          {/* Quick Mobile Action Buttons */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <a 
              href="https://www.hastanerandevu.gov.tr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-danger"
              style={{ fontSize: '0.82rem', padding: '0.6rem 0.5rem', justifyContent: 'center' }}
            >
              <Calendar size={15} />
              <span>MHRS Randevu</span>
            </a>

            <a 
              href={`https://wa.me/90${(info?.whatsapp || '05461286629').replace(/\D/g, '')}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ fontSize: '0.82rem', padding: '0.6rem 0.5rem', justifyContent: 'center' }}
            >
              <MessageCircle size={15} />
              <span>WhatsApp</span>
            </a>
          </div>

          <Link 
            to="/" 
            style={{ padding: '0.75rem', fontWeight: 700, borderRadius: '10px', background: location.pathname === '/' ? '#f0f9ff' : '#f8fafc', color: location.pathname === '/' ? '#0284c7' : '#0f172a' }}
          >
            🏠 Ana Sayfa
          </Link>
          
          {/* Mobile Accordion: KURUMSAL */}
          <div style={{ borderRadius: '10px', border: '1px solid #f1f5f9', overflow: 'hidden' }}>
            <button
              onClick={() => toggleMobileSection('kurumsal')}
              style={{
                width: '100%',
                padding: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: '#f8fafc',
                fontWeight: 700,
                fontSize: '0.9rem',
                color: '#0284c7'
              }}
            >
              <span>🏛️ KURUMSAL</span>
              <ChevronDown size={18} style={{ transform: openMobileSection === 'kurumsal' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </button>
            {openMobileSection === 'kurumsal' && (
              <div style={{ background: '#ffffff', padding: '0.5rem 0.75rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {kurumsalLinks.map((k, i) => (
                  <Link key={i} to={k.path} style={{ display: 'block', padding: '0.5rem 0.5rem', fontSize: '0.88rem', color: '#475569', borderRadius: '6px' }}>
                    • {k.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* KADROMUZ */}
          <Link 
            to="/kadromuz" 
            style={{ padding: '0.75rem', fontWeight: 700, borderRadius: '10px', background: location.pathname === '/kadromuz' ? '#f0f9ff' : '#f8fafc', color: location.pathname === '/kadromuz' ? '#0284c7' : '#0f172a' }}
          >
            👥 KADROMUZ (Tüm Personel)
          </Link>

          {/* Mobile Accordion: ASM REHBERİ */}
          <div style={{ borderRadius: '10px', border: '1px solid #f1f5f9', overflow: 'hidden' }}>
            <button
              onClick={() => toggleMobileSection('rehber')}
              style={{
                width: '100%',
                padding: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: '#f8fafc',
                fontWeight: 700,
                fontSize: '0.9rem',
                color: '#0284c7'
              }}
            >
              <span>📖 ASM REHBERİ</span>
              <ChevronDown size={18} style={{ transform: openMobileSection === 'rehber' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </button>
            {openMobileSection === 'rehber' && (
              <div style={{ background: '#ffffff', padding: '0.5rem 0.75rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {rehberLinks.map((k, i) => (
                  <Link key={i} to={k.path} style={{ display: 'block', padding: '0.5rem 0.5rem', fontSize: '0.88rem', color: '#475569', borderRadius: '6px' }}>
                    • {k.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Accordion: HESAPLAMALAR */}
          <div style={{ borderRadius: '10px', border: '1px solid #f1f5f9', overflow: 'hidden' }}>
            <button
              onClick={() => toggleMobileSection('hesaplamalar')}
              style={{
                width: '100%',
                padding: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: '#f8fafc',
                fontWeight: 700,
                fontSize: '0.9rem',
                color: '#0284c7'
              }}
            >
              <span>🧮 SAĞLIK HESAPLAMALARI (11 Araç)</span>
              <ChevronDown size={18} style={{ transform: openMobileSection === 'hesaplamalar' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </button>
            {openMobileSection === 'hesaplamalar' && (
              <div style={{ background: '#ffffff', padding: '0.5rem 0.75rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {hesaplamaLinks.map((k, i) => (
                  <Link key={i} to={k.path} style={{ display: 'block', padding: '0.5rem 0.5rem', fontSize: '0.88rem', color: '#475569', borderRadius: '6px' }}>
                    • {k.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/duyurular" style={{ padding: '0.75rem', fontWeight: 600, borderRadius: '10px', background: '#f8fafc' }}>📢 Duyurular</Link>
          <Link to="/dosyalar" style={{ padding: '0.75rem', fontWeight: 600, borderRadius: '10px', background: '#f8fafc' }}>📂 İndirilebilir Dosyalar</Link>
          <Link to="/galeri" style={{ padding: '0.75rem', fontWeight: 600, borderRadius: '10px', background: '#f8fafc' }}>🖼️ Foto Galeri</Link>
          <Link to="/iletisim" style={{ padding: '0.75rem', fontWeight: 700, borderRadius: '10px', background: '#f0fdf4', color: '#166534', border: '1px solid #bbf7d0' }}>
            ✉️ İletişim & Online Hasta Bildirimi
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .navbar-container { padding: 0 1.25rem !important; }
        }
        @media (max-width: 640px) {
          .nav-brand-logo { height: 42px !important; }
          .nav-brand-title { font-size: 1.05rem !important; }
          .nav-brand-subtitle { font-size: 0.65rem !important; }
          .navbar-container { padding: 0 0.85rem !important; height: 72px !important; }
        }
        @media (max-width: 380px) {
          .nav-brand-subtitle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
