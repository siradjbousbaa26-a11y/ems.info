import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  href?: string
  onClick?: () => void
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  size = 'md',
}: ButtonProps) {
  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-sm',
    lg: 'px-9 py-4 text-base',
  }

  const variants = {
    primary:
      'bg-accent hover:bg-accent-dark text-white shadow-lg shadow-accent/20 hover:shadow-accent/30',
    secondary:
      'bg-white/[0.07] hover:bg-white/[0.12] text-white border border-white/[0.08]',
    outline:
      'border border-accent/40 hover:bg-accent/10 text-accent-light hover:text-white',
  }

  const baseClasses = `group inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 cursor-pointer ${sizes[size]} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={baseClasses} onClick={onClick}>
        {children}
        {variant === 'primary' && (
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        )}
      </a>
    )
  }

  return (
    <button className={baseClasses} onClick={onClick} type="button">
      {children}
      {variant === 'primary' && (
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      )}
    </button>
  )
}
