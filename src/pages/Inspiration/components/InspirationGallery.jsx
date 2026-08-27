import { useEffect, useState } from 'react'
import { Heart } from 'lucide-react'
import {
  getFavorites,
  saveFavorites,
} from '../../../features/project-page/add-to-favorites'
import { GALLERY_ITEMS } from '../data/gallery'

const STEP = 8
const INITIAL_VISIBLE = 12

export function InspirationGallery() {
  const [favorites, setFavorites] = useState(() => getFavorites())
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE)

  useEffect(() => {
    saveFavorites(favorites)
  }, [favorites])

  const isLiked = (id) => favorites.some((fav) => fav.id === id)

  const toggleFavorite = (item) => {
    setFavorites((prev) =>
      prev.some((fav) => fav.id === item.id)
        ? prev.filter((fav) => fav.id !== item.id)
        : [...prev, { id: item.id }]
    )
  }

  const visibleItems = GALLERY_ITEMS.slice(0, visibleCount)
  const hasMore = visibleCount < GALLERY_ITEMS.length

  return (
    <section className='pt-6 sm:pt-10'>
      <h1 className='mb-8 text-3xl font-light tracking-wide text-white sm:mb-12 sm:text-4xl lg:text-[42px]'>
        Вдохновение
      </h1>

      <div className='columns-2 gap-3 sm:gap-4 md:columns-3 lg:columns-4'>
        {visibleItems.map((item) => (
          <figure
            key={item.id}
            className='group relative mb-3 break-inside-avoid overflow-hidden rounded-lg border border-white/5 sm:mb-4'
          >
            <img
              src={item.image}
              alt={item.alt}
              loading='lazy'
              className='w-full object-cover transition-transform duration-500 group-hover:scale-105'
            />
            <button
              type='button'
              onClick={() => toggleFavorite(item)}
              aria-label='В избранное'
              aria-pressed={isLiked(item.id)}
              className='absolute top-2.5 right-2.5 z-10 grid h-8 w-8 place-items-center rounded-md bg-black/45 backdrop-blur-sm transition-colors hover:bg-black/70'
            >
              <Heart
                size={16}
                strokeWidth={2}
                className={
                  isLiked(item.id)
                    ? 'fill-[#e03122] text-[#e03122]'
                    : 'text-white/70'
                }
              />
            </button>
          </figure>
        ))}
      </div>

      {hasMore && (
        <div className='my-10 text-center sm:my-14'>
          <button
            type='button'
            onClick={() => setVisibleCount((count) => count + STEP)}
            className='cursor-pointer px-6 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/50 transition-colors hover:text-[#e03122] sm:text-sm'
          >
            Показать ещё
          </button>
        </div>
      )}
    </section>
  )
}
