import { InspirationGallery } from './components/InspirationGallery'
import { ArtplayShowrooms } from './components/ArtplayShowrooms'
import { CallbackCta } from './components/CallbackCta'

export default function Inspiration() {
  return (
    <div className='min-h-screen bg-[#0e0e0e] text-white'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <InspirationGallery />
        <ArtplayShowrooms />
        <CallbackCta />
      </div>
    </div>
  )
}
