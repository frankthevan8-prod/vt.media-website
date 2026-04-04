import { useScrollAnimation } from '../hooks/useScrollAnimation.js'

const services = [
  {
    num: '01',
    title: 'Content Creation',
    description:
      'Scroll-stopping video and photo content built for the platforms your audience actually uses. Shot with intention, edited to convert.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 10l4.553-2.069A1 1 0 0121 8.873v6.254a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Paid Ads',
    description:
      'Strategic paid campaigns that put your story in front of the right people at the right moment, with creative that never feels like an ad.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Content Strategy',
    description:
      'A clear roadmap for what to post, when to post it, and why it will work. No guesswork. Just a system that builds momentum.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Growth Optimisation',
    description:
      'We analyse what\'s working, cut what isn\'t, and double down on the content and channels delivering real business results.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
]

export default function Services() {
  const ref = useScrollAnimation()

  return (
    <section id="services" className="py-20 px-6" style={{ background: '#0a0a0a' }} ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label animate-on-scroll" style={{ marginBottom: '1rem' }}>
            What We Do
          </p>
          <h2
            className="text-chrome font-black tracking-tight animate-on-scroll delay-1"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}
          >
            Four Ways We Drive Your Growth.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`card-metal rounded-lg p-8 animate-on-scroll delay-${i + 1}`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="icon-circle">{service.icon}</div>
                <span className="service-number">{service.num}</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-3 tracking-tight">
                {service.title}
              </h3>
              <p className="text-vt-silver text-sm leading-relaxed" style={{ color: '#888' }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
