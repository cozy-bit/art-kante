import React from 'react'
import DesignHero from './components/DesignHero'
import DesignBadges from './components/DesignBadges'
import ProjectsSlider from './components/ProjectsSlider'

export default function Design() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white pt-24 pb-16">
      <DesignHero />
      <DesignBadges />
      <ProjectsSlider />
    </div>
  )
}
