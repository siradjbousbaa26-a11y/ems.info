import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'
import { WORKFLOW_STEPS } from '../lib/constants'

export default function Expertise() {
  return (
    <section id="expertise" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-800" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.02] rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeading
          subtitle="Our Workflow"
          title="From Engineering to Execution."
          description="A structured approach that ensures quality, precision and operational continuity at every stage."
        />

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block">
          <ScrollReveal>
            <div className="relative">
              {/* Connection line */}
              <div className="absolute top-[38px] left-[10%] right-[10%] h-px bg-gradient-to-r from-accent/10 via-accent/30 to-accent/10" />

              <div className="grid grid-cols-5 gap-4">
                {WORKFLOW_STEPS.map((step, i) => (
                  <ScrollReveal key={step.number} delay={i * 150}>
                    <div className="flex flex-col items-center text-center group">
                      {/* Number circle */}
                      <div className="relative w-[76px] h-[76px] rounded-full bg-dark-700 border-2 border-accent/20 flex items-center justify-center mb-6 transition-all duration-500 group-hover:border-accent/60 group-hover:bg-accent/10">
                        <span className="text-2xl font-bold text-accent">{step.number}</span>
                        {/* Pulse ring on hover */}
                        <div className="absolute inset-0 rounded-full border border-accent/0 group-hover:border-accent/20 group-hover:scale-[1.3] transition-all duration-700" />
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-light transition-colors duration-300">
                        {step.title}
                      </h3>

                      {/* Subtle line */}
                      <div className="w-8 h-0.5 bg-accent/20 rounded group-hover:w-12 group-hover:bg-accent/40 transition-all duration-300" />
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden">
          <div className="relative pl-8">
            {/* Vertical line */}
            <div className="absolute top-0 bottom-0 left-[18px] w-px bg-gradient-to-b from-accent/30 via-accent/20 to-accent/10" />

            <div className="space-y-10">
              {WORKFLOW_STEPS.map((step, i) => (
                <ScrollReveal key={step.number} delay={i * 100}>
                  <div className="relative flex items-start gap-5">
                    {/* Dot */}
                    <div className="absolute -left-8 top-1 w-[14px] h-[14px] rounded-full bg-accent/30 border-2 border-accent flex-shrink-0">
                      <div className="absolute inset-1 rounded-full bg-accent" />
                    </div>

                    <div>
                      <span className="text-accent font-bold text-sm tracking-wider">{step.number}</span>
                      <h3 className="text-xl font-bold text-white mt-1">{step.title}</h3>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
