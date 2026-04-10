import { useState, useEffect } from 'react'
import HeroBackground from './HeroBackground.jsx'

export default function Hero() {
  const [pastHero, setPastHero] = useState(false)

  useEffect(() => {
    const handler = () => setPastHero(window.scrollY > 80)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <section
      className="grain-overlay h-screen flex flex-col justify-center items-center text-center px-6 pt-16 relative overflow-hidden"
      style={{ background: '#080808' }}
    >
      {/* Animated colour blobs — depth layer */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-blob hero-blob-3" />
      <div className="hero-blob hero-blob-4" />

      {/* Shader background — MeshGradient wireframe + DotOrbit */}
      <HeroBackground />

      {/* Dot grid texture */}
      <div className="hero-grid" />

      {/* Central glow */}
      <div className="hero-glow" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Headline */}
        <h1
          className="text-chrome hero-animate hero-delay-1 font-black leading-[1.12] tracking-tight"
          style={{ fontSize: 'clamp(2.6rem, 7vw, 5.5rem)' }}
        >
          Grow Your Business
          <br />
          By Telling Your Story.
        </h1>

        {/* Sub-headline */}
        <p
          className="hero-animate hero-delay-2 leading-relaxed mx-auto mt-7"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', maxWidth: '540px', color: '#909090' }}
        >
          Authentic content that doesn&apos;t just get views. It converts. We help
          brands find their voice, own their story, and build audiences that
          actually buy.
        </p>

        {/* CTA row */}
        <div className="hero-animate hero-delay-3 mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#reach-out" className="btn-silver">
            Work With Us
          </a>
          <a href="#audit" className="btn-outline">
            Get Free Audit
          </a>
        </div>

        {/* Micro copy */}
        <p
          className="hero-animate hero-delay-4 mt-5"
          style={{ fontSize: '0.72rem', color: 'rgba(160,160,160,0.4)', letterSpacing: '0.04em' }}
        >
          No lock-in contracts. Real results.
        </p>
      </div>

      {/* Scroll indicator — absolute to section bottom, fades on scroll */}
      <div
        style={{
          position: 'absolute',
          bottom: '1.75rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          opacity: pastHero ? 0 : 1,
          pointerEvents: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          transition: 'opacity 0.5s ease',
        }}
      >
        <span className="hero-scroll-label">Scroll</span>
        <div className="hero-scroll-line" />
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '180px',
          background: 'linear-gradient(to bottom, transparent, #080808)',
          zIndex: 2,
        }}
      />
    </section>
  )
}
