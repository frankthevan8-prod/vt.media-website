import { useScrollAnimation } from '../hooks/useScrollAnimation.js'

export default function OriginStory() {
  const ref = useScrollAnimation()

  return (
    <section id="about" className="py-12 px-6" style={{ background: '#0a0a0a' }} ref={ref}>
      <div className="metal-divider mb-20 animate-on-scroll" />

      <div className="max-w-2xl mx-auto text-center">
        {/* Label */}
        <p className="section-label animate-on-scroll" style={{ marginBottom: '1rem' }}>
          The Story
        </p>

        {/* Title */}
        <h2
          className="text-chrome font-black tracking-tight animate-on-scroll delay-1"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1, marginBottom: '2.5rem' }}
        >
          An Unlikely Duo.
        </h2>
      </div>

      {/* Body copy */}
      <div className="max-w-2xl mx-auto">
        <p
          className="text-chrome-subtle font-medium italic leading-relaxed animate-on-scroll delay-2"
          style={{ fontSize: 'clamp(1.05rem, 2vw, 1.2rem)', marginBottom: '1.75rem' }}
        >
          &ldquo;We didn&apos;t meet in a boardroom or a co-working space. We met
          training Muay Thai.&rdquo;
        </p>

        <p
          className="text-vt-silver leading-relaxed animate-on-scroll delay-3"
          style={{ fontSize: '1rem', marginBottom: '1.5rem' }}
        >
          Between rounds, we started talking. We quickly realised we were looking
          at the same problem from completely different angles. Andy brought a decade
          of platform mastery and a track record of viral growth. Frank brought the
          eye of a filmmaker and the instinct of a storyteller. Together, the picture
          was complete.
        </p>

        <p
          className="text-vt-silver leading-relaxed animate-on-scroll delay-4"
          style={{ fontSize: '1rem' }}
        >
          VT Media was built on one belief: that the most powerful thing a business
          can do is tell its story honestly. Not polished to perfection. Not
          manufactured for the algorithm. Real. Because real converts.
        </p>
      </div>

      <div className="metal-divider mt-20 animate-on-scroll" />
    </section>
  )
}
