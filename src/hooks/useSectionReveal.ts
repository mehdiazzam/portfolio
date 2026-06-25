import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

export function useSectionReveal() {
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return

    gsap.registerPlugin(ScrollTrigger)
    const sections = gsap.utils.toArray<HTMLElement>('.reveal-section')
    const layers = gsap.utils.toArray<HTMLElement>('[data-parallax]')

    const context = gsap.context(() => {
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
            },
          },
        )
      })

      layers.forEach((layer) => {
        const depth = Number(layer.dataset.parallax ?? '24')
        gsap.fromTo(
          layer,
          { y: -depth },
          {
            y: depth,
            ease: 'none',
            scrollTrigger: {
              trigger: layer,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
              invalidateOnRefresh: true,
            },
          },
        )
      })
    })

    return () => context.revert()
  }, [prefersReducedMotion])
}
