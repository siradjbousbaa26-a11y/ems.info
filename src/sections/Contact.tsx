import ScrollReveal from '../components/ScrollReveal'
import Button from '../components/Button'
import { PHONE_NUMBERS, PHONE_LINKS, EMAIL, EMAIL_LINK } from '../lib/constants'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-800" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent/[0.03] rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-5 lg:px-8 text-center">
        <ScrollReveal>
          <span className="inline-block text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Get In Touch
          </span>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Have an Industrial Project<br className="hidden sm:block" /> in Mind?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-lg text-neutral-400 leading-relaxed max-w-xl mx-auto mb-12">
            Let&apos;s engineer the right solution for your operation.
          </p>
        </ScrollReveal>

        {/* Contact info cards */}
        <ScrollReveal delay={300}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            {/* Phone card */}
            <div className="p-7 rounded-2xl bg-dark-700/50 border border-white/[0.06] text-left">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wide">Phone</h3>
              </div>
              <div className="space-y-2.5">
                {PHONE_NUMBERS.map((phone, i) => (
                  <a
                    key={phone}
                    href={PHONE_LINKS[i]}
                    className="block text-neutral-300 hover:text-accent-light transition-colors duration-300 text-sm"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>

            {/* Email card */}
            <div className="p-7 rounded-2xl bg-dark-700/50 border border-white/[0.06] text-left">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wide">Email</h3>
              </div>
              <a
                href={EMAIL_LINK}
                className="text-neutral-300 hover:text-accent-light transition-colors duration-300 text-sm"
              >
                {EMAIL}
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA buttons */}
        <ScrollReveal delay={400}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={PHONE_LINKS[0]} size="lg">
              Call EMS
            </Button>
            <Button href={EMAIL_LINK} variant="secondary" size="lg">
              Email EMS
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
