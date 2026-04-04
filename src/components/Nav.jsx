import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'nav-glass' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center group" aria-label="VT Media home">
          <img
            src="/vt_logo_v1.svg"
            alt="VT Media"
            style={{ height: 36, width: 'auto' }}
          />
        </a>

        {/* Nav Links — hidden on mobile */}
        <ul className="hidden md:flex items-center gap-7">
          {[
            { label: 'Services', href: '#services' },
            { label: 'Team', href: '#team' },
            { label: 'About', href: '#about' },
            { label: 'Contact', href: '#reach-out' },
          ].map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="transition-colors duration-200 whitespace-nowrap"
                style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#686868',
                  fontWeight: 500,
                  textDecoration: 'none',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#d0d0d0'}
                onMouseLeave={e => e.currentTarget.style.color = '#686868'}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA — visible on all sizes */}
        <a
          href="#reach-out"
          className="btn-silver hidden md:inline-block"
          style={{ padding: '0.55rem 1.4rem', fontSize: '0.65rem' }}
        >
          Work With Us
        </a>
      </div>
    </nav>
  )
}
