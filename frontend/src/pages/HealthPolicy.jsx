import React from 'react';
import { ShieldCheck, Award, Heart, CheckCircle2 } from 'lucide-react';

export default function HealthPolicy() {
  return (
    <div style={{ padding: '3.5rem 0', background: '#f8fafc' }}>
      <div className="container">
        
        <div style={{ marginBottom: '2.5rem' }}>
          <span className="sub-badge">KURUMSAL POLİTİKA</span>
          <h1 style={{ fontSize: '2.5rem', marginTop: '0.35rem', marginBottom: '0.75rem' }}>Hizmet ve Kalite Politikamız</h1>
          <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: '750px' }}>
            Binkılıç Aile Sağlığı Merkezi olarak hastalarımıza sunduğumuz hizmet standartları, etik kurallar ve kalite taahhütlerimiz.
          </p>
        </div>

        <div className="glass-card" style={{ padding: '2.5rem', background: '#ffffff', borderRadius: '20px', maxWidth: '860px', margin: '0 auto' }}>
          
          <h2 style={{ fontSize: '1.4rem', color: '#0f172a', marginBottom: '1.25rem', borderLeft: '4px solid #0d9488', paddingLeft: '0.75rem' }}>
            Kalite Taahhüdümüz
          </h2>

          <p style={{ color: '#334155', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Binkılıç Aile Sağlığı Merkezi, hizmet sunduğu Binkılıç halkına ve Hallaçlı, Aydınlar, Yaylacık köylerindeki vatandaşlarımıza, güncel tıp bilimi ve koruyucu hekimlik ilkeleri ışığında, eşit, tarafsız, güvenilir ve kaliteli sağlık hizmeti sunmayı temel politika olarak benimsemiştir.
          </p>

          <h3 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '1rem', marginTop: '1.5rem' }}>Kalite İlkelerimiz:</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: '#334155' }}>
              <CheckCircle2 size={18} color="#0d9488" style={{ flexShrink: 0, marginTop: '3px' }} />
              <span><strong>Hasta Odaklılık:</strong> Hasta haklarına ve mahremiyetine tam saygı göstererek güler yüzlü hizmet sunmak.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: '#334155' }}>
              <CheckCircle2 size={18} color="#0d9488" style={{ flexShrink: 0, marginTop: '3px' }} />
              <span><strong>Sürekli İyileştirme:</strong> Sağlık çalışanlarımızın mesleki gelişimlerini desteklemek ve merkez içi donanımı sürekli güncellemek.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: '#334155' }}>
              <CheckCircle2 size={18} color="#0d9488" style={{ flexShrink: 0, marginTop: '3px' }} />
              <span><strong>Koruyucu Hekimlik:</strong> Aşı, kanser taramaları ve bebek/gebe izlemleri ile hastalıklar oluşmadan önleyici tedbirler almak.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: '#334155' }}>
              <CheckCircle2 size={18} color="#0d9488" style={{ flexShrink: 0, marginTop: '3px' }} />
              <span><strong>Hijyen ve Güvenlik:</strong> Tıbbi atık yönetimi ve merkez içi sterilizasyon kurallarını eksiksiz uygulamak.</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
