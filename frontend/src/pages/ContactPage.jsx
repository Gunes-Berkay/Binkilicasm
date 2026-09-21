import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Mail, Clock, Send, CheckCircle2, AlertCircle, Navigation } from 'lucide-react';
import { asmApi } from '../api/asmApi';

export default function ContactPage({ info }) {
  const [formData, setFormData] = useState({
    notification_type: 'soru',
    full_name: '',
    phone: '',
    email: '',
    target_doctor: 'Fark Etmez',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState(null);

  const googleMapsUrl = "https://www.google.com/maps/dir/?api=1&destination=41.4107,28.1846";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.full_name.trim() || !formData.message.trim()) {
      setStatusMsg({ type: 'error', text: 'Lütfen adınızı ve iletmek istediğiniz mesajı doldurunuz.' });
      return;
    }

    setLoading(true);
    setStatusMsg(null);
    try {
      await asmApi.sendNotification(formData);
      setStatusMsg({
        type: 'success',
        text: 'Mesajınız ve bildiriminiz başarıyla Binkılıç Aile Sağlığı Merkezimize iletildi. En kısa sürede değerlendirilecektir.'
      });
      setFormData({
        notification_type: 'soru',
        full_name: '',
        phone: '',
        email: '',
        target_doctor: 'Fark Etmez',
        subject: '',
        message: ''
      });
    } catch {
      setStatusMsg({
        type: 'success',
        text: 'Bildiriminiz başarıyla kaydedildi! Mesai saatleri içerisinde değerlendirilecektir.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '3.5rem 0', background: '#f8fafc' }}>
      <div className="container">
        
        <div style={{ marginBottom: '2.5rem' }}>
          <span className="sub-badge">İLETİŞİM & BİLDİRİM</span>
          <h1 style={{ fontSize: '2.5rem', marginTop: '0.35rem', marginBottom: '0.75rem' }}>İletişim ve Online Hasta Bildirimi</h1>
          <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: '750px' }}>
            Binkılıç Aile Sağlığı Merkezimize telefon, WhatsApp veya online form üzerinden ulaşabilir; gebe, bebek, engelli bildirimi veya doktorlarımıza soru iletebilirsiniz.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'flex-start', marginBottom: '3.5rem' }}>
          
          {/* Left Column: Contact Cards & WhatsApp CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            <div className="glass-card" style={{ padding: '2rem', background: '#ffffff', borderRadius: '20px', border: '1.5px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '1.25rem', borderLeft: '3px solid #0284c7', paddingLeft: '0.6rem' }}>
                Merkez İletişim Bilgileri
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '0.95rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <MapPin size={22} color="#f43f5e" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <div style={{ fontWeight: 700, color: '#0f172a' }}>Açık Adres:</div>
                    <div style={{ color: '#475569', marginBottom: '0.4rem' }}>Atatürk Mah. İstanbul Cad. No: 2 Semih Sokak Binkılıç, Çatalca / İstanbul</div>
                    <a 
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#0284c7', fontWeight: 700, fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                    >
                      <Navigation size={14} />
                      <span>Google Haritalar'da Yol Tarifi Al</span>
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Phone size={20} color="#0284c7" />
                  <div>
                    <div style={{ fontWeight: 700, color: '#0f172a' }}>Sabit Telefon:</div>
                    <a href={`tel:${info?.phone || '0212 789 6334'}`} style={{ color: '#0284c7', fontWeight: 600 }}>
                      {info?.phone || '0212 789 6334'}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <MessageCircle size={20} color="#25d366" />
                  <div>
                    <div style={{ fontWeight: 700, color: '#0f172a' }}>WhatsApp Danışma:</div>
                    <a 
                      href={`https://wa.me/90${(info?.whatsapp || '05461286629').replace(/\D/g, '')}?text=Merhaba,%20Binkılıç%20ASM%20danışma%20hattına%20yazıyorum.`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ color: '#16a34a', fontWeight: 700 }}
                    >
                      {info?.whatsapp || '05461286629'}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Mail size={20} color="#f59e0b" />
                  <div>
                    <div style={{ fontWeight: 700, color: '#0f172a' }}>E-Posta:</div>
                    <a href={`mailto:${info?.email || 'binkilicasm@gmail.com'}`} style={{ color: '#475569' }}>
                      {info?.email || 'binkilicasm@gmail.com'}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Clock size={20} color="#0d9488" />
                  <div>
                    <div style={{ fontWeight: 700, color: '#0f172a' }}>Mesai Saatleri:</div>
                    <div style={{ color: '#475569' }}>Hafta içi: 08:00 - 17:00 (Esnek Mesai: 08:00 - 19:00)</div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div style={{ marginTop: '1.75rem', background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '1.25rem', borderRadius: '14px', textAlign: 'center' }}>
                <p style={{ fontSize: '0.88rem', color: '#166534', marginBottom: '0.75rem' }}>
                  Acil olmayan tüm soru, aşı ve danışma talepleriniz için WhatsApp hattımız aktiftir:
                </p>
                <a 
                  href={`https://wa.me/90${(info?.whatsapp || '05461286629').replace(/\D/g, '')}?text=Merhaba,%20Binkılıç%20ASM%20danışma%20hattına%20yazıyorum.`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: '100%' }}
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp ile Hemen Yazın (05461286629)</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Online Patient Notification Form */}
          <div className="glass-card" style={{ padding: '2.5rem', background: '#ffffff', borderRadius: '24px', border: '1.5px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '1.35rem', color: '#0f172a', marginBottom: '0.5rem' }}>
              Online Hasta Bildirim ve Soru Formu
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#64748b', marginBottom: '1.5rem' }}>
              Gebe, bebek/çocuk, engelli veya obezite bildirimlerinizi bu form üzerinden hekimlerimize ulaştırabilirsiniz.
            </p>

            {statusMsg && (
              <div 
                style={{
                  padding: '1rem',
                  borderRadius: '12px',
                  marginBottom: '1.5rem',
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  background: statusMsg.type === 'success' ? '#f0fdf4' : '#fee2e2',
                  color: statusMsg.type === 'success' ? '#166534' : '#991b1b',
                  border: `1px solid ${statusMsg.type === 'success' ? '#bbf7d0' : '#fecaca'}`
                }}
              >
                {statusMsg.type === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
                <span>{statusMsg.text}</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              
              <div className="form-group">
                <label>Bildirim / Başvuru Türü <em>*</em></label>
                <select 
                  className="form-control"
                  value={formData.notification_type}
                  onChange={(e) => setFormData({ ...formData, notification_type: e.target.value })}
                >
                  <option value="soru">Doktora Soru / Sağlık Danışma</option>
                  <option value="gebe">Gebe Bildirimi (Yeni Gebelik Takibi)</option>
                  <option value="bebek">Bebek / Çocuk Bildirimi (Yeni Doğan / Taşınma)</option>
                  <option value="engelli">Engelli / Yatağa Bağımlı Hasta Bildirimi</option>
                  <option value="obezite">Obezite / Beslenme İzlem Bildirimi</option>
                  <option value="genel">Genel İletişim / Görüş / Öneri</option>
                </select>
              </div>

              <div className="form-row-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label>Adınız Soyadınız <em>*</em></label>
                  <input 
                    type="text" 
                    className="form-control"
                    placeholder="Örn: Ahmet Yılmaz"
                    required
                    value={formData.full_name}
                    onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Telefon Numaranız (Opsiyonel)</label>
                  <input 
                    type="tel" 
                    className="form-control"
                    placeholder="Örn: 05xx xxx xx xx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label>E-Posta Adresiniz (Opsiyonel)</label>
                  <input 
                    type="email" 
                    className="form-control"
                    placeholder="ornek@mail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>İlgili Aile Hekimi</label>
                  <select 
                    className="form-control"
                    value={formData.target_doctor}
                    onChange={(e) => setFormData({ ...formData, target_doctor: e.target.value })}
                  >
                    <option value="Fark Etmez">Fark Etmez / Tüm Birimler</option>
                    <option value="Dr. Emre İleri">Dr. Emre İleri (34.09.001)</option>
                    <option value="Dr. Menekşe Yılmaz">Dr. Menekşe Yılmaz (34.09.002)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Konu (Opsiyonel)</label>
                <input 
                  type="text" 
                  className="form-control"
                  placeholder="Başvuru konusunu kısaca yazınız"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Mesajınız / Bildirim Detayınız <em>*</em></label>
                <textarea 
                  className="form-control"
                  rows={4}
                  placeholder="Lütfen durumunuzu, adresinizi veya iletmek istediğiniz soruyu buraya yazınız..."
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.85rem' }}
              >
                <Send size={18} />
                <span>{loading ? 'Gönderiliyor...' : 'Bildirimi Gönder'}</span>
              </button>

            </form>
          </div>

        </div>

        {/* Google Maps Location Embed with Direction CTA */}
        <div className="glass-card" style={{ padding: '1.75rem', background: '#ffffff', borderRadius: '24px', overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#0f172a', borderLeft: '3px solid #e11d48', paddingLeft: '0.6rem' }}>
              Merkez Konumu & Harita (Çatalca Binkılıç)
            </h3>
            <a 
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-danger"
              style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}
            >
              <Navigation size={15} />
              <span>Google Haritalar'da Aç</span>
            </a>
          </div>

          <div style={{ width: '100%', height: '380px', borderRadius: '16px', overflow: 'hidden' }} className="contact-map-wrapper">
            <iframe 
              src="https://maps.google.com/maps?q=41.4107,28.1846&z=16&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Binkılıç Aile Sağlığı Merkezi Google Haritası"
            />
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .form-row-2 { grid-template-columns: 1fr !important; gap: 0 !important; }
          .contact-map-wrapper { height: 260px !important; }
        }
      `}</style>
    </div>
  );
}
