import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'

const capabilities = [
  {
    title: 'Industrial Installation',
    description: 'Professional installation of industrial equipment and systems.',
  },
  {
    title: 'Equipment Integration',
    description: 'Integration of machinery and control systems into existing operations.',
  },
  {
    title: 'Maintenance Programs',
    description: 'Structured maintenance solutions for operational continuity.',
  },
  {
    title: 'Automation Systems',
    description: 'Industrial automation and process control implementation.',
  },
  {
    title: 'Engineering Studies',
    description: 'Technical analysis, feasibility studies and solution design.',
  },
  {
    title: 'Commissioning',
    description: 'System testing, validation and operational handover.',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-800" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-accent/[0.02] rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeading
          subtitle="Our Work"
          title="Selected Capabilities"
          description="Explore the range of industrial capabilities EMS delivers across engineering, installation, automation and maintenance."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((cap, i) => (
            <ScrollReveal key={cap.title} delay={i * 100}>
              <div className="group relative overflow-hidden rounded-2xl bg-dark-700/40 border border-white/[0.06] hover:border-accent/25 transition-all duration-500 cursor-default">
                {/* Visual placeholder - gradient pattern */}
                <div className="relative h-48 bg-gradient-to-br from-dark-600 to-dark-700 overflow-hidden">
                  {/* Grid overlay */}
                  <div className="absolute inset-0 grid-pattern opacity-50" />
                  {/* Accent dot */}
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-accent/40 group-hover:bg-accent transition-colors duration-300" />
                  {/* Number */}
                  <div className="absolute bottom-4 left-5">
                    <span className="text-5xl font-black text-white/[0.04] group-hover:text-accent/10 transition-colors duration-500">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-accent/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-light transition-colors duration-300">
                    {cap.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
