import { useScrollAnimation } from '../hooks/useScrollAnimation.js'

export default function FreeAudit() {
  const ref = useScrollAnimation()

  return (
    <section id="audit" className="py-20 px-6" style={{ background: '#0a0a0a' }} ref={ref}>
      <div className="max-w-3xl mx-auto">
        <div className="audit-card rounded-lg p-12 md:p-20 text-center">

          {/* Animated glow */}
          <div className="audit-glow" />

          <div className="relative z-10">

            {/* Label */}
            <p className="section-label animate-on-scroll" style={{ marginBottom: '1.5rem' }}>
              Free Audit
            </p>

            {/* Headline */}
            <h2
              className="text-chrome font-black tracking-tight animate-on-scroll delay-1"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.1, marginBottom: '1.75rem' }}
            >
              Something Feels Off With
              <br />
              Your Marketing, Right?
            </h2>

            {/* Body */}
            <p
              className="leading-relaxed mx-auto animate-on-scroll delay-2"
              style={{ fontSize: '1rem', maxWidth: '480px', marginBottom: '2.75rem', color: '#888' }}
            >
              Traffic&apos;s decent. Your funnel looks okay. But sales just aren&apos;t
              where they should be. Sound familiar? We&apos;ll do a deep dive and
              show you what&apos;s broken and how to fix it.
            </p>

            {/* CTA */}
            <div className="animate-on-scroll delay-3">
              <a href="#reach-out" className="btn-silver">
                Get Your Free Audit
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
