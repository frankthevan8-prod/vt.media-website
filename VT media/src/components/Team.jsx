import { useScrollAnimation } from '../hooks/useScrollAnimation.js'

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

const members = [
  {
    photo: '/andy.png',
    objectPosition: 'center 18%',
    name: 'Andy',
    role: 'Co-Founder · Social Media Veteran',
    bio: '10+ years in the social media game. Hundreds of millions of views generated for himself and his clients. Andy has seen every trend, survived every algorithm change, and knows exactly what makes content spread.',
    handle: '@andytrancao_',
    url: 'https://www.instagram.com/andytrancao_/',
  },
  {
    photo: '/frank.png',
    objectPosition: 'center 22%',
    name: 'Frank',
    role: 'Co-Founder · Storyteller & Videographer',
    bio: '3 years of raw, relentless content creation. Millions of views built on authentic storytelling and cinematic video. Frank brings the hunger, the lens, and the instinct for what makes an audience feel something.',
    handle: '@frankthevan_',
    url: 'https://www.instagram.com/frankthevan_/',
  },
]

export default function Team() {
  const ref = useScrollAnimation()

  return (
    <section id="team" className="py-12 px-6" style={{ background: '#080808' }} ref={ref}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label animate-on-scroll" style={{ marginBottom: '1rem' }}>
            The Team
          </p>
          <h2
            className="text-chrome font-black tracking-tight animate-on-scroll delay-1"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}
          >
            Two Perspectives. One Obsession.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {members.map((m, i) => (
            <div
              key={m.name}
              className={`card-metal rounded-lg p-8 flex flex-col items-center text-center animate-on-scroll delay-${i + 2}`}
            >
              {/* Avatar */}
              <img
                src={m.photo}
                alt={m.name}
                loading="lazy"
                className="avatar-glow"
                style={{
                  width: 130,
                  height: 130,
                  objectFit: 'cover',
                  objectPosition: m.objectPosition,
                  borderRadius: '50%',
                  display: 'block',
                  marginBottom: '1.25rem',
                }}
              />

              {/* Name */}
              <h3 className="text-white font-bold text-xl tracking-tight">
                {m.name}
              </h3>

              {/* Role */}
              <span
                className="block mt-1 mb-5"
                style={{ fontSize: '0.68rem', letterSpacing: '0.12em', color: '#555', textTransform: 'uppercase' }}
              >
                {m.role}
              </span>

              {/* Bio */}
              <p className="text-vt-silver text-sm leading-relaxed text-left mb-6 flex-1">
                {m.bio}
              </p>

              {/* Instagram */}
              <a
                href={m.url}
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-link"
              >
                <InstagramIcon />
                {m.handle}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
