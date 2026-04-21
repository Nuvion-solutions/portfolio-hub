import { ImageResponse } from 'next/og'

export const runtime     = 'edge'
export const size        = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0A0A',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px 96px',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Background grid pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(108,99,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.04) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Accent glow */}
        <div
          style={{
            position: 'absolute',
            top: '-200px',
            right: '-200px',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(108,99,255,0.15) 0%, transparent 70%)',
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '48px',
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #6C63FF, #5A52E8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 800,
              fontSize: '18px',
            }}
          >
            N
          </div>
          <span style={{ color: '#F8F8F8', fontWeight: 600, fontSize: '18px' }}>
            Nuvion Solutions
          </span>
        </div>

        {/* Accent bar */}
        <div
          style={{
            width: '56px',
            height: '4px',
            background: '#6C63FF',
            borderRadius: '2px',
            marginBottom: '28px',
          }}
        />

        {/* Headline */}
        <div
          style={{
            fontSize: '68px',
            fontWeight: 800,
            color: '#F8F8F8',
            lineHeight: 1.05,
            maxWidth: '860px',
            marginBottom: '28px',
          }}
        >
          AI-Powered Web Experiences
        </div>

        {/* Sub-line */}
        <div
          style={{
            fontSize: '24px',
            color: '#6B7280',
            maxWidth: '700px',
            lineHeight: 1.5,
            marginBottom: '48px',
          }}
        >
          High-converting digital experiences built for growth.
        </div>

        {/* Niche pills */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {['Med Spa', 'AI Startup', 'Restaurant', 'Law Firm', 'Home Services'].map((n) => (
            <div
              key={n}
              style={{
                background: 'rgba(108,99,255,0.12)',
                border: '1px solid rgba(108,99,255,0.25)',
                borderRadius: '100px',
                padding: '8px 18px',
                color: '#6C63FF',
                fontSize: '14px',
                fontWeight: 600,
              }}
            >
              {n}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
