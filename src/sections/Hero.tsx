import { useEffect, useState } from 'react'
import Button from '../components/Button'
import emsLogo from '../assets/ems-logo.png'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-dark-800" />
      <div className="absolute inset-0 grid-pattern" />

      {/* Radial gradient overlays */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent/[0.04] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[100px]" />

      {/* Floating geometric elements */}
      <div className="absolute top-1/4 left-[10%] w-px h-32 bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
      <div className="absolute top-1/3 right-[15%] w-px h-24 bg-gradient-to-b from-transparent via-accent/15 to-transparent" />
      <div className="absolute bottom-1/4 left-[20%] w-16 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-24 pb-20">
        <div className="flex flex-col items-center text-center">
          {/* Logo badge */}
          <div
            className="mb-8"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
            }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm">
              <img src={emsLogo} alt="" className="h-5 w-auto brightness-0 invert" aria-hidden="true" />
              <span className="text-sm font-medium text-neutral-300 tracking-wide">
                Engineering Maintenance Services
              </span>
            </div>
          </div>

          {/* Main heading */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight max-w-5xl"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
            }}
          >
            <span className="text-white">Engineering Solutions</span>
            <br />
            <span className="text-gradient-accent">Built for Industry.</span>
          </h1>

          {/* Supporting text */}
          <p
            className="mt-7 text-lg md:text-xl text-neutral-400 leading-relaxed max-w-2xl"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s',
            }}
          >
            EMS delivers engineering, maintenance and industrial solutions designed
            to improve reliability, efficiency and performance.
          </p>

          {/* CTA Buttons */}
          <div
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s',
            }}
          >
            <Button href="#services" size="lg">
              Explore Our Services
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              Contact EMS
            </Button>
          </div>

          {/* Bottom accent line */}
          <div
            className="mt-20 flex items-center gap-4"
            style={{
              opacity: loaded ? 1 : 0,
              transition: 'opacity 1s ease-out 1.2s',
            }}
          >
            <div className="w-12 h-px bg-accent/30" />
            <span className="text-xs text-neutral-500 tracking-[0.25em] uppercase">
              Precision · Reliability · Performance
            </span>
            <div className="w-12 h-px bg-accent/30" />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-800 to-transparent" />
    </section>
  )
}
