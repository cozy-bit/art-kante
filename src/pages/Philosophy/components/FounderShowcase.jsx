import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Card } from '../../../components/ui/Card'
import { PRESS_SPREADS } from '../data/pressSpreads'

export function FounderShowcase() {
  const [index, setIndex] = useState(0)
  const total = PRESS_SPREADS.length

  const goPrev = () => setIndex((i) => (i - 1 + total) % total)
  const goNext = () => setIndex((i) => (i + 1) % total)

  const visible = [PRESS_SPREADS[index], PRESS_SPREADS[(index + 1) % total]]

  return (
    <section className='py-16 sm:py-24'>
      <Card variant='inset' className='rounded-none p-8 sm:p-12 lg:p-16'>
        <h2 className='text-center text-2xl font-light tracking-wide text-white sm:text-3xl'>
          Об основателе
        </h2>

        <div className='mt-5 flex items-center justify-center gap-12'>
          <button
            type='button'
            onClick={goPrev}
            aria-label='Предыдущий разворот'
            className='cursor-pointer text-white/55 transition-colors hover:text-white'
          >
            <ArrowLeft className='h-5 w-5' strokeWidth={1.5} />
          </button>
          <button
            type='button'
            onClick={goNext}
            aria-label='Следующий разворот'
            className='cursor-pointer text-white/55 transition-colors hover:text-white'
          >
            <ArrowRight className='h-5 w-5' strokeWidth={1.5} />
          </button>
        </div>

        <div className='mt-10 grid grid-cols-1 justify-items-center gap-6 lg:grid-cols-2 lg:gap-8'>
          {visible.map((spread, i) => (
            <img
              key={`${spread.id}-${i}`}
              src={spread.image}
              alt='Публикация об основателе бюро'
              className={
                i === 1
                  ? 'hidden w-full max-w-[500px] rounded-none border border-white/10 shadow-2xl lg:block'
                  : 'w-full max-w-[500px] rounded-none border border-white/10 shadow-2xl'
              }
            />
          ))}
        </div>
      </Card>
    </section>
  )
}
