import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'

const steps = [
  { label: 'Engineering', icon: '⚙️' },
  { label: 'Installation', icon: '🔧' },
  { label: 'Commissioning', icon: '✓' },
  { label: 'Maintenance', icon: '🛠️' },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-800" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeading
          subtitle="About EMS"
          title="Engineering With Purpose. Built for Industry."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div>
            <ScrollReveal>
              <div className="line-accent mb-6" />
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-lg text-neutral-300 leading-relaxed mb-6">
                EMS focuses on engineering, industrial maintenance and technical solutions. 
                Our approach combines technical expertise with practical execution to deliver 
                results that improve reliability and operational efficiency.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-neutral-400 leading-relaxed mb-8">
                From initial engineering studies through to installation, commissioning and 
                ongoing maintenance, EMS provides comprehensive support for industrial operations. 
                Every solution is designed around the specific requirements of each project.
              </p>
            </ScrollReveal>

            {/* Stats-style info blocks */}
            <ScrollReveal delay={300}>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-accent font-bold text-lg mb-1">Full-Cycle</div>
                  <div className="text-neutral-400 text-sm">Engineering to Maintenance</div>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-accent font-bold text-lg mb-1">Industrial</div>
                  <div className="text-neutral-400 text-sm">Focused Solutions</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Visual process element */}
          <ScrollReveal delay={200} direction="right">
            <div className="relative p-8 lg:p-10 rounded-2xl bg-dark-700/50 border border-white/[0.06]">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-accent/20 rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-accent/20 rounded-bl-2xl" />

              <h3 className="text-sm font-semibold text-accent tracking-[0.15em] uppercase mb-8">
                Our Process
              </h3>

              <div className="space-y-6">
                {steps.map((step, i) => (
                  <div key={step.label} className="flex items-center gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-lg transition-all duration-300 group-hover:bg-accent/20 group-hover:border-accent/40">
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold text-base">{step.label}</div>
                    </div>
                    {i < steps.length - 1 && (
                      <div className="hidden sm:block w-6 text-neutral-600">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                          <path d="M12 5v14m0 0l-4-4m4 4l4-4" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom accent */}
              <div className="mt-8 pt-6 border-t border-white/[0.06]">
                <p className="text-neutral-500 text-sm">
                  Integrated approach from concept to operational support
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
