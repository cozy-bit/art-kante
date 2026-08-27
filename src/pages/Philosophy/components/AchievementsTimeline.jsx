import { cn } from '../../../lib/utils'
import { ACHIEVEMENTS } from '../data/achievements'

export function AchievementsTimeline() {
  return (
    <section className='pb-16 sm:pb-24'>
      <div className='relative space-y-8 sm:space-y-10'>
        {ACHIEVEMENTS.map((group, groupIndex) => (
          <div
            key={group.year}
            className={cn(
              'relative',
              groupIndex % 2 === 0 ? 'lg:ml-[4%]' : 'lg:ml-[42%]'
            )}
          >
            <div className='flex items-center gap-4'>
              <span className='flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#4a4a4a] bg-[#0e0e0e]'>
                <span className='h-1.5 w-1.5 rotate-45 bg-[#e03122]/70' />
              </span>
              <span className='whitespace-nowrap text-2xl font-light text-white/70 sm:text-3xl lg:text-[32px]'>
                {group.year} <span className='text-white/30'>г</span>
              </span>
            </div>

            <ul className='mt-3 ml-3.5 space-y-2.5 border-l border-white/10 pt-3 pl-8'>
              {group.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className='relative text-[10px] uppercase tracking-[0.15em] text-white/40 sm:text-[11px]'
                >
                  <span className='absolute top-1/2 -left-8 h-px w-5 -translate-y-1/2 bg-white/10' />
                  <span className='absolute top-1/2 -left-[calc(2rem+3px)] h-1.5 w-1.5 -translate-y-1/2 rotate-45 bg-[#e03122]/60' />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
