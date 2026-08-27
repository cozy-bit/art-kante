import { PhilosophyIntro } from './components/PhilosophyIntro'
import { FounderShowcase } from './components/FounderShowcase'
import { AchievementsTimeline } from './components/AchievementsTimeline'

export function Philosophy() {
  return (
    <div className='min-h-screen bg-[#0e0e0e] text-white'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <PhilosophyIntro />
        <FounderShowcase />
        <AchievementsTimeline />
      </div>
    </div>
  )
}

export default Philosophy
