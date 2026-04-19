import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageContext';

/* ─── Full circular logo (bike illustration + DALIL ⚡ BIKE text) ─── */
function FullLogo({ size = 220 }) {
  const navy  = "#1E3A5F";
  const amber = "#FFD100";
  const r     = size / 2;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 220 220"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Dalil Bike logo"
    >
      {/* Outer circle */}
      <circle cx="110" cy="110" r="106" fill="white" stroke={navy} strokeWidth="4.5" />

      {/* ── Bike illustration ── */}
      {/* Base platform */}
      <line x1="48" y1="148" x2="172" y2="148" stroke={navy} strokeWidth="3.5" strokeLinecap="round"/>

      {/* Right flywheel with location pin */}
      <circle cx="158" cy="118" r="30" fill="none" stroke={navy} strokeWidth="3"/>
      {/* pin head */}
      <circle cx="158" cy="111" r="9"  fill="none" stroke={navy} strokeWidth="2.5"/>
      {/* pin tail */}
      <line x1="158" y1="120" x2="158" y2="130" stroke={navy} strokeWidth="2.5" strokeLinecap="round"/>

      {/* Pedal hub */}
      <circle cx="95" cy="130" r="10" fill="none" stroke={navy} strokeWidth="3"/>
      {/* inner dot */}
      <circle cx="95" cy="130" r="3"  fill={navy}/>

      {/* Frame: pedal → handlebar area */}
      <line x1="95"  y1="120" x2="148" y2="93"  stroke={navy} strokeWidth="3" strokeLinecap="round"/>
      {/* Frame: seat → pedal */}
      <line x1="64"  y1="95"  x2="95"  y2="120" stroke={navy} strokeWidth="3" strokeLinecap="round"/>
      {/* Frame: top rail */}
      <line x1="64"  y1="95"  x2="135" y2="93"  stroke={navy} strokeWidth="3" strokeLinecap="round"/>

      {/* Seat post */}
      <line x1="64"  y1="95"  x2="64"  y2="148" stroke={navy} strokeWidth="3" strokeLinecap="round"/>
      {/* Saddle */}
      <path d="M50 93 Q64 85 78 93" fill="none" stroke={navy} strokeWidth="4" strokeLinecap="round"/>

      {/* Handlebar post */}
      <line x1="138" y1="74"  x2="138" y2="108" stroke={navy} strokeWidth="3" strokeLinecap="round"/>
      {/* Handlebars */}
      <path d="M127 75 C127 65 150 65 150 75" fill="none" stroke={navy} strokeWidth="3.5" strokeLinecap="round"/>

      {/* Divider line below bike */}
      <line x1="48" y1="163" x2="172" y2="163" stroke={navy} strokeWidth="2" strokeLinecap="round"/>

      {/* ── DALIL ⚡ BIKE text ── */}
      <text
        x="110" y="190"
        textAnchor="middle"
        fontFamily="'Cinzel', 'Trajan Pro', Georgia, serif"
        fontWeight="700"
        fontSize="20"
        fill={navy}
        letterSpacing="2"
      >
        DALIL
      </text>
      {/* Lightning bolt */}
      <polygon
        points="116,172 110,183 114,183 108,196 116,183 112,183"
        fill={amber}
      />
      <text
        x="125" y="190"
        textAnchor="start"
        fontFamily="'Cinzel', 'Trajan Pro', Georgia, serif"
        fontWeight="700"
        fontSize="20"
        fill={navy}
        letterSpacing="2"
      >
        BIKE
      </text>
    </svg>
  );
}

/* ─── Service card ─── */
function ServiceCard({ icon, title, subtitle, price, accent, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: 280,
        padding: '36px 28px 28px',
        borderRadius: 24,
        border: `2.5px solid ${hovered ? accent : '#e2e8f0'}`,
        background: hovered
          ? `linear-gradient(145deg, ${accent}10, white)`
          : 'white',
        boxShadow: hovered
          ? `0 20px 60px ${accent}30, 0 4px 16px rgba(0,0,0,0.08)`
          : '0 4px 24px rgba(0,0,0,0.07)',
        cursor: 'pointer',
        transition: 'all 0.25s cubic-bezier(0.4,0,0.2,1)',
        transform: hovered ? 'translateY(-6px) scale(1.02)' : 'translateY(0) scale(1)',
        textAlign: 'center',
        gap: 0,
      }}
      aria-label={title}
    >
      {/* Icon circle */}
      <div style={{
        width: 72,
        height: 72,
        borderRadius: '50%',
        background: `${accent}18`,
        border: `2px solid ${accent}40`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 34,
        marginBottom: 20,
        transition: 'background 0.25s',
      }}>
        {icon}
      </div>

      {/* Title */}
      <div style={{
        fontFamily: "'Cinzel', Georgia, serif",
        fontWeight: 700,
        fontSize: 15,
        color: '#1E3A5F',
        letterSpacing: '0.04em',
        lineHeight: 1.3,
        marginBottom: 10,
      }}>
        {title}
      </div>

      {/* Subtitle */}
      {subtitle && (
        <div style={{
          fontSize: 13,
          color: '#64748b',
          marginBottom: 24,
          lineHeight: 1.5,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}>
          {subtitle}
        </div>
      )}

      {/* Price badge */}
      <div style={{
        marginTop: 'auto',
        background: accent,
        color: accent === '#FFD100' ? '#1E3A5F' : 'white',
        borderRadius: 999,
        padding: '10px 28px',
        fontFamily: "'Cinzel', Georgia, serif",
        fontWeight: 700,
        fontSize: 18,
        letterSpacing: '0.05em',
        boxShadow: `0 4px 16px ${accent}50`,
        transition: 'transform 0.2s',
        transform: hovered ? 'scale(1.05)' : 'scale(1)',
      }}>
        {price}
      </div>
    </button>
  );
}

/* ─── Landing page ─── */
export default function Landing() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '100dvh',
      background: 'linear-gradient(160deg, #f0f4ff 0%, #fafafa 50%, #fff8e8 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 24px',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>

      {/* Logo */}
      <div style={{
        marginBottom: 12,
        filter: 'drop-shadow(0 8px 32px rgba(30,58,95,0.15))',
        animation: 'fadeUp 0.6s ease-out both',
      }}>
        <FullLogo size={200} />
      </div>

      {/* Tagline */}
      <p style={{
        color: '#64748b',
        fontSize: 15,
        marginBottom: 48,
        marginTop: 4,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        fontWeight: 500,
        animation: 'fadeUp 0.6s 0.1s ease-out both',
      }}>
        Marrakech · Explore &amp; Charge
      </p>

      {/* Cards row */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 20,
        justifyContent: 'center',
        width: '100%',
        maxWidth: 640,
        animation: 'fadeUp 0.6s 0.2s ease-out both',
      }}>

        <ServiceCard
          icon="🚴"
          title="Pédaler et Charger"
          subtitle="Explorez la ville en pédalant\net rechargez votre appareil"
          price="50 DH"
          accent="#1E3A5F"
          onClick={() => navigate('/explore')}
        />

        <ServiceCard
          icon="⚡"
          title="Charger Sans Pédaler"
          subtitle="Recharge rapide de votre\nappareil sans effort"
          price="100 DH"
          accent="#FFD100"
          onClick={() => navigate('/explore')}
        />
      </div>

      {/* Skip link */}
      <button
        onClick={() => navigate('/explore')}
        style={{
          marginTop: 40,
          background: 'none',
          border: 'none',
          color: '#94a3b8',
          fontSize: 13,
          cursor: 'pointer',
          letterSpacing: '0.06em',
          textDecoration: 'underline',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          animation: 'fadeUp 0.6s 0.35s ease-out both',
        }}
      >
        Continuer vers l'exploration →
      </button>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
