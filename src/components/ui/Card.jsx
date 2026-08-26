import { cn } from '../../lib/utils'

export function Card({
  children,
  className = '',
  variant = 'default',
  ...props
}) {
  const variants = {
    default:
      'bg-[#141414] border border-white/5 shadow-[15px_15px_35px_rgba(0,0,0,0.85),-6px_-6px_20px_rgba(255,255,255,0.02)]',
    inset:
      'bg-[#121212] border border-white/5 shadow-[inset_10px_10px_25px_rgba(0,0,0,0.85),inset_-5px_-5px_15px_rgba(255,255,255,0.02)]',
    flat:
      'bg-[#141414] border border-border-dark shadow-none',
  }

  return (
    <div
      className={cn(
        'rounded-2xl p-6 md:p-8 transition-all duration-300',
        variants[variant] || variants.default,
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
