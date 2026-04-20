import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

/* ─── Service card ─── */
function ServiceCard({ icon, title, subtitle, price, accent, onClick }) {
  const [hovered, setHovered] = useState(false);
  const { language } = useLanguage();
  const isRtl = language === 'ar';

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: 260,
        minHeight: 360,
        padding: '32px 24px',
        borderRadius: 32,
        border: `2px solid ${hovered ? accent : '#f1f5f9'}`,
        background: hovered ? 'white' : '#ffffff',
        boxShadow: hovered
          ? `0 24px 48px -12px ${accent}25, 0 8px 16px -4px rgba(0,0,0,0.05)`
          : '0 4px 12px rgba(0,0,0,0.03)',
        cursor: 'pointer',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        transform: hovered ? 'translateY(-12px)' : 'translateY(0)',
        textAlign: 'center',
        direction: isRtl ? 'rtl' : 'ltr'
      }}
    >
      <div style={{
        width: 80,
        height: 80,
        borderRadius: 24,
        background: hovered ? `${accent}15` : '#f8fafc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 36,
        marginBottom: 24,
        transition: 'all 0.4s',
        transform: hovered ? 'rotate(5deg) scale(1.1)' : 'rotate(0) scale(1)',
      }}>
        {icon}
      </div>

      <h3 style={{
        fontFamily: "'Cinzel', serif",
        fontWeight: 700,
        fontSize: 18,
        color: '#1E3A5F',
        marginBottom: 12,
        lineHeight: 1.2,
      }}>
        {title}
      </h3>

      <p style={{
        fontSize: 14,
        color: '#64748b',
        lineHeight: 1.5,
        marginBottom: 32,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}>
        {subtitle}
      </p>

      <div style={{
        marginTop: 'auto',
        background: accent,
        color: accent === '#FFD100' ? '#1E3A5F' : 'white',
        borderRadius: 16,
        padding: '12px 24px',
        fontFamily: "'Cinzel', serif",
        fontWeight: 700,
        fontSize: 20,
        width: '100%',
        boxShadow: hovered ? `0 12px 24px -6px ${accent}40` : 'none',
        transition: 'all 0.3s',
      }}>
        {price}
      </div>
    </button>
  );
}

export default function Landing() {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';

  return (
    <div style={{
      minHeight: '100dvh',
      background: '#fcfcfd',
      backgroundImage: 'radial-gradient(circle at 0% 0%, #f0f4ff 0%, transparent 40%), radial-gradient(circle at 100% 100%, #fff8e8 0%, transparent 40%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 24px 100px',
      position: 'relative'
    }}>

      {/* Language Switcher Positioned Top-End */}
      <div style={{
        position: 'absolute',
        top: 24,
        [isRtl ? 'left' : 'right']: 24,
        zIndex: 100
      }}>
        <LanguageSwitcher />
      </div>

      <div style={{
        marginTop: '8dvh',
        animation: 'fadeUp 0.8s ease-out',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: 800
      }}>
        {/* Brand Logo Image (Copied directly from assets) */}
        <div style={{ marginBottom: 24 }}>
          <img
            src="/src/assets/logo.jpeg"
            alt="Dalil Bike Logo"
            style={{ width: 220, height: 220, objectFit: 'contain' }}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          {/* Fallback if logo.png is missing */}
          <div style={{
            display: 'none',
            width: 220,
            height: 220,
            borderRadius: '50%',
            border: '2px dashed #cbd5e1',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#94a3b8',
            fontSize: 12,
            textAlign: 'center',
            padding: 20
          }}>
            Please upload your logo.png to src/assets/
          </div>
        </div>


        {/* Slogan */}
        <h2 style={{
          fontFamily: "'Cinzel', serif",
          fontWeight: 700,
          fontSize: '24px',
          color: '#1E3A5F',
          marginBottom: 64,
          textAlign: 'center',
          lineHeight: 1.4,
          maxWidth: 600
        }}>
          {t('landingSlogan')}
        </h2>

        <div style={{
          display: 'flex',
          gap: 16,
          flexWrap: 'nowrap',
          overflowX: 'auto',
          justifyContent: 'center',
          width: '100%',
          padding: '10px 0'
        }}>
          <ServiceCard
            icon="🚴"
            title={t('pedalChargeTitle')}
            subtitle={t('pedalChargeDesc')}
            price={language === 'ar' ? "5 درهم" : "5 DH"}
            accent="#1E3A5F"
            onClick={() => navigate('/explore')}
          />
          <ServiceCard
            icon="⚡"
            title={t('noPedalChargeTitle')}
            subtitle={t('noPedalChargeDesc')}
            price={language === 'ar' ? "10 درهم" : "10 DH"}
            accent="#FFD100"
            onClick={() => navigate('/explore')}
          />
        </div>

      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
