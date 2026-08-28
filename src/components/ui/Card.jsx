import { cn } from '../../lib/utils'

export function Card({
  children,
  className = '',
  variant = 'default',
  ...props
}) {
  const variants = {
    // Вдавленная карточка в точности по макету с объемной нишей и нижней подсветкой
    default:
      'bg-[#121212] border-t border-l border-white/[0.03] border-b border-r border-white/[0.08] shadow-[inset_16px_16px_30px_rgba(0,0,0,0.95),inset_-10px_-10px_24px_rgba(255,255,255,0.04),0_1px_1px_rgba(255,255,255,0.06)]',
    
    // Глубокий inset для кнопок и полей
    inset:
      'bg-[#0c0c0c] border-b border-r border-white/[0.06] shadow-[inset_8px_8px_18px_rgba(0,0,0,0.9),inset_-12px_-12px_12px_rgba(255,255,255,0.05)]',
    
    // Выпуклая кнопка (как кнопка «ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ»)
    raised:
      'bg-[#141414] border-t border-l border-white/[0.06] border-b border-r border-black/80 shadow-[10px_10px_25px_rgba(0,0,0,0.9),-4px_-4px_12px_rgba(255,255,255,0.02)]',
    
    flat:
      'bg-[#141414] border border-[#262626] shadow-none',
  }

  return (
    <div
      className={cn(
        'rounded-none p-6 md:p-10 transition-all duration-300',
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