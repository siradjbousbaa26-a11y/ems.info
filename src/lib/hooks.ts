import { useEffect, useRef, useState } from 'react'

export function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

export function useScrolled(offset = 50) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > offset)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [offset])

  return scrolled
}
