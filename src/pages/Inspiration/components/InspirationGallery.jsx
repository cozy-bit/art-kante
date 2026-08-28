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
    <section className='pt-4 sm:pt-8'>
      <h1 className='mb-8 text-3xl font-light tracking-wide text-white/90 sm:mb-12 sm:text-[32px]'>
        Вдохновение
      </h1>

      <div className='columns-2 gap-4 md:columns-3 lg:columns-4 lg:gap-5'>
        {visibleItems.map((item) => (
          <figure
            key={item.id}
            className='group relative mb-4 break-inside-avoid overflow-hidden rounded lg:mb-5'
          >
            <img
              src={item.image}
              alt=''
              loading='lazy'
              className='w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]'
            />
            <button
              type='button'
              onClick={() => toggleFavorite(item)}
              aria-label='В избранное'
              aria-pressed={isLiked(item.id)}
              className='absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-md bg-white/15 backdrop-blur-sm transition-colors hover:bg-white/25'
            >
              <Heart
                size={17}
                strokeWidth={1.8}
                className={
                  isLiked(item.id)
                    ? 'fill-[#e03122] text-[#e03122]'
                    : 'text-white'
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
            className='cursor-pointer px-6 py-2 text-[11px] uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white sm:text-xs'
          >
            Показать еще
          </button>
        </div>
      )}
    </section>
  )
}
