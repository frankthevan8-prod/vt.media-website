import { useScrollAnimation } from '../hooks/useScrollAnimation.js'

const stats = [
  { value: '100M+', label: 'Views Generated' },
  { value: '10+ Yrs', label: 'Platform Experience' },
  { value: '0', label: 'Generic Templates' },
]

export default function WhyUs() {
  const ref = useScrollAnimation()

  return (
    <section id="contact" className="py-12 px-6" style={{ background: '#080808' }} ref={ref}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label animate-on-scroll" style={{ marginBottom: '1rem' }}>
            Why VT Media
          </p>
          <h2
            className="text-chrome font-black tracking-tight animate-on-scroll delay-1"
            style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', lineHeight: 1.1 }}
          >
            Views Are Vanity.
            <br />
            Conversion Is Reality.
          </h2>
        </div>

        {/* Copy */}
        <div className="space-y-5 mb-16">
          <p className="leading-relaxed text-base animate-on-scroll delay-2" style={{ color: '#888' }}>
            Anyone can chase follower counts. Anyone can optimise for reach. We&apos;ve
            done all that. We know it doesn&apos;t pay the bills.
          </p>
          <p className="leading-relaxed text-base animate-on-scroll delay-3" style={{ color: '#888' }}>
            What pays the bills is a brand that people trust. A story they remember.
            A product they genuinely want because they feel connected to the people
            behind it.
          </p>
          <p className="leading-relaxed text-base animate-on-scroll delay-4" style={{ color: '#888' }}>
            We grow your brand the way it deserves to grow: authentically,
            sustainably, and by telling the story only you can tell. Because story is
            the only marketing that never gets old.
          </p>
        </div>

        {/* Stats */}
        <div
          className="flex flex-col md:flex-row animate-on-scroll delay-2 mb-16"
          style={{
            borderTop: '1px solid rgba(180,180,180,0.1)',
            borderBottom: '1px solid rgba(180,180,180,0.1)',
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex-1 py-8 text-center"
              style={{
                borderRight:
                  i < stats.length - 1
                    ? '1px solid rgba(180,180,180,0.1)'
                    : 'none',
              }}
            >
              <div
                className="stat-glow font-black"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', lineHeight: 1 }}
              >
                {stat.value}
              </div>
              <div
                className="mt-2"
                style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: '#444', textTransform: 'uppercase' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-on-scroll delay-3">
          <a href="#reach-out" className="btn-silver">
            Start Your Story
          </a>
          <p
            className="mt-4"
            style={{ fontSize: '0.75rem', color: 'rgba(160,160,160,0.45)', letterSpacing: '0.04em' }}
          >
            It starts with a conversation.
          </p>
        </div>
      </div>
    </section>
  )
}
