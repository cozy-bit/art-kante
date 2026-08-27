import { cn } from '../../../lib/utils'
import { ACHIEVEMENTS } from '../data/achievements'

function Node() {
  return (
    <span className='grid h-6 w-6 shrink-0 place-items-center rounded-full border border-white/35 bg-[#0e0e0e]'>
      <span className='h-1.5 w-1.5 rounded-full bg-white/40' />
    </span>
  )
}

function YearBlock({ group }) {
  const left = group.side === 'left'

  return (
    <li className='relative'>
      <div
        style={{ '--o': group.offset }}
        className={cn(
          'pb-12 lg:w-max lg:pb-20 lg:ml-[var(--o)]',
          left && 'lg:-translate-x-full'
        )}
      >
        <div
          className={cn(
            'flex items-center gap-4',
            left && 'lg:flex-row-reverse'
          )}
        >
          <Node />
          <span className='text-2xl font-light text-white/70 sm:text-[26px]'>
            {group.year} <span className='text-white/30'>г</span>
          </span>
        </div>

        <ul
          className={cn(
            'mt-4 ml-3 space-y-1.5 border-l border-dashed border-white/15 pt-1',
            left &&
              'lg:ml-0 lg:mr-3 lg:border-l-0 lg:border-r lg:border-dashed lg:border-white/15'
          )}
        >
          {group.items.map((item, index) => (
            <li
              key={index}
              className={cn(
                'flex items-center',
                left && 'lg:flex-row-reverse lg:text-right'
              )}
            >
              <span className='w-6 shrink-0 border-t border-dashed border-white/15' />
              <span className='h-2 w-2 shrink-0 rounded-full bg-white/30' />
              <span className='mx-4 text-[11px] uppercase tracking-wide text-white/85 sm:text-xs'>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export function AchievementsTimeline() {
  return (
    <section className='pb-16 sm:pb-24'>
      <ol className='relative'>
        {ACHIEVEMENTS.map((group) => (
          <YearBlock key={group.year} group={group} />
        ))}
      </ol>
    </section>
  )
}
