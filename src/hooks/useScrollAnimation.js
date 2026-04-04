import { useEffect, useRef } from 'react'

export function useScrollAnimation() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    const targets = node.querySelectorAll('.animate-on-scroll')
    if (targets.length > 0) {
      targets.forEach((el) => observer.observe(el))
    } else {
      observer.observe(node)
    }

    return () => observer.disconnect()
  }, [])

  return ref
}
