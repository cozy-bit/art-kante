import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Card } from '../../../components/ui/Card'
import { PRESS_SPREADS } from '../data/pressSpreads'

export function FounderShowcase() {
  const [index, setIndex] = useState(0)
  const total = PRESS_SPREADS.length

  const goPrev = () => setIndex((i) => (i - 1 + total) % total)
  const goNext = () => setIndex((i) => (i + 1) % total)

  const visible = [PRESS_SPREADS[index], PRESS_SPREADS[(index + 1) % total]]

  return (
    <section className='py-14 sm:py-20'>
      <Card variant='inset' className='rounded-none p-6 sm:p-10 lg:p-14'>
        <h2 className='text-center text-2xl sm:text-3xl font-light tracking-wide text-white'>
          Об основателе
        </h2>

        <div className='mt-4 flex items-center justify-center gap-10'>
          <button
            type='button'
            onClick={goPrev}
            aria-label='Предыдущий разворот'
            className='text-white/50 hover:text-[#e03122] transition-colors cursor-pointer'
          >
            <ChevronLeft className='h-6 w-6' strokeWidth={1.5} />
          </button>
          <button
            type='button'
            onClick={goNext}
            aria-label='Следующий разворот'
            className='text-white/50 hover:text-[#e03122] transition-colors cursor-pointer'
          >
            <ChevronRight className='h-6 w-6' strokeWidth={1.5} />
          </button>
        </div>

        <div className='mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 justify-items-center'>
          {visible.map((spread, i) => (
            <figure
              key={`${spread.id}-${i}`}
              className={
                i === 1
                  ? 'hidden lg:flex flex-col items-center w-full max-w-[440px]'
                  : 'flex flex-col items-center w-full max-w-[440px]'
              }
            >
              <div className='w-full overflow-hidden rounded-sm border border-white/10 shadow-[10px_10px_28px_rgba(0,0,0,0.85)]'>
                <img
                  src={spread.image}
                  alt={spread.title}
                  className='h-52 sm:h-64 w-full object-cover'
                />
              </div>
              <figcaption className='mt-3 text-center'>
                <div className='text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#e03122]'>
                  {spread.title}
                </div>
                <div className='mt-1 text-[11px] text-white/40'>
                  {spread.edition}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className='mt-8 flex justify-center gap-2'>
          {PRESS_SPREADS.map((spread, i) => (
            <button
              type='button'
              key={spread.id}
              onClick={() => setIndex(i)}
              aria-label={`Разворот ${i + 1}`}
              className={
                i === index
                  ? 'h-1.5 w-6 bg-[#e03122] transition-all'
                  : 'h-1.5 w-2.5 bg-white/20 hover:bg-white/40 transition-all'
              }
            />
          ))}
        </div>
      </Card>
    </section>
  )
}
