import { cn } from '../../lib/utils'

export function Button({
  children,
  variant = 'default',
  size = 'default',
  className = '',
  ...props
}) {
  const variants = {
    // Темный неоморфизм в стиле Art-Kante (как на референсе)
    default:
      'bg-[#191919] text-[#e03122] tracking-[0.2em] uppercase font-semibold border border-white/[0.04] shadow-[8px_8px_20px_#060606,-6px_-6px_16px_rgba(255,255,255,0.02)] hover:text-[#ff4332] hover:shadow-[10px_10px_24px_#040404,-6px_-6px_18px_rgba(255,255,255,0.03)] active:shadow-[inset_3px_3px_8px_#070707,inset_-2px_-2px_6px_rgba(255,255,255,0.02)] active:scale-[0.99] transition-all duration-300',
    primary:
      'bg-accent-orange text-white hover:opacity-90 transition-opacity',
    outline:
      'border border-border-dark text-white hover:bg-bg-card transition-colors',
    ghost:
      'text-white hover:bg-bg-card transition-colors',
  }

  const sizes = {
    default: 'px-8 py-4 text-xs sm:text-sm',
    sm: 'px-5 py-2.5 text-xs',
    lg: 'px-10 py-5 text-sm md:text-base',
  }

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-none cursor-pointer select-none disabled:pointer-events-none disabled:opacity-50',
        variants[variant] || variants.default,
        sizes[size] || sizes.default,
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
