import ScrollReveal from './ScrollReveal'

interface SectionHeadingProps {
  subtitle: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-3xl mb-16 lg:mb-20 ${alignment}`}>
      <ScrollReveal>
        <span className="inline-block text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4">
          {subtitle}
        </span>
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
          {title}
        </h2>
      </ScrollReveal>
      {description && (
        <ScrollReveal delay={200}>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        </ScrollReveal>
      )}
    </div>
  )
}
