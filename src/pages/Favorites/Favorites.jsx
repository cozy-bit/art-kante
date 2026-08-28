import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Share2, Check, ArrowRight, BookmarkX } from 'lucide-react'
import { Button } from '../../components/ui/Button'
import { ShowroomsBlock } from '../../components/common/ShowroomsBlock'
import images from '../../data/project-page-datas/datas'
import { GALLERY_ITEMS } from '../Inspiration/data/gallery'
import {
  getFavorites,
  saveFavorites,
} from '../../features/project-page/add-to-favorites'

export function Favorites() {
  const [favorites, setFavorites] = useState(() => {
    const saved = getFavorites()
    if (saved && saved.length > 0) return saved
    return [
      { id: 1, type: 'project' },
      { id: 2, type: 'project' },
      { id: 3, type: 'project' },
      { id: 4, type: 'project' },
      { id: 1, type: 'inspiration' },
      { id: 2, type: 'inspiration' },
      { id: 3, type: 'inspiration' },
      { id: 4, type: 'inspiration' },
    ]
  })

  const [copied, setCopied] = useState(false)

  useEffect(() => {
    saveFavorites(favorites)
  }, [favorites])

  const removeFavorite = (id, type) => {
    setFavorites((prev) =>
      prev.filter((item) => !(item.id === id && (item.type === type || (!item.type && type === 'project'))))
    )
  }

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  // Разделение на проекты и вдохновение
  const projectItems = images.filter((img) =>
    favorites.some((fav) => fav.id === img.id && fav.type !== 'inspiration')
  )

  const inspirationItems = GALLERY_ITEMS.filter((item) =>
    favorites.some((fav) => fav.id === item.id && fav.type === 'inspiration')
  )

  const isTotallyEmpty = projectItems.length === 0 && inspirationItems.length === 0

  return (
    <div className='min-h-screen bg-[#0f0f0f] text-white pb-16 selection:bg-[#c58b41]/30'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
        {/* Хлебные крошки и шапка */}
        <div className='flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10'>
          <div>
            <nav
              aria-label='Breadcrumb'
              className='flex items-center gap-2 text-xs text-[#737373] tracking-wide mb-2'
            >
              <Link
                to='/'
                className='hover:text-white transition-colors duration-200'
              >
                Главная
              </Link>
              <span className='text-[#444444]'>/</span>
              <span className='text-[#a3a3a3]'>Избранное</span>
            </nav>
            <h1 className='text-2xl sm:text-4xl font-light tracking-wide text-white'>
              Избранное
            </h1>
          </div>

          {/* Кнопка поделиться подборкой */}
          {!isTotallyEmpty && (
            <button
              type='button'
              onClick={handleShare}
              className='inline-flex items-center gap-2 px-4 py-2.5 bg-[#161616] hover:bg-[#202020] border border-white/10 text-xs uppercase tracking-wider text-white/80 hover:text-white transition-all cursor-pointer shadow-md'
            >
              {copied ? (
                <>
                  <Check className='w-4 h-4 text-[#f37021]' />
                  <span className='text-[#f37021]'>Ссылка скопирована!</span>
                </>
              ) : (
                <>
                  <Share2 className='w-4 h-4 text-[#c58b41]' />
                  <span>Поделиться этой подборкой</span>
                </>
              )}
            </button>
          )}
        </div>

        {/* Пустое состояние (Empty State) */}
        {isTotallyEmpty ? (
          <div className='py-20 sm:py-28 flex flex-col items-center justify-center text-center px-4'>
            <div className='w-20 h-20 bg-[#141414] border border-white/10 flex items-center justify-center text-white/30 shadow-2xl mb-6'>
              <BookmarkX className='w-10 h-10' />
            </div>
            <h2 className='text-xl sm:text-2xl font-light text-white uppercase tracking-wider mb-3'>
              В вашей подборке пока нет сохраненных проектов
            </h2>
            <p className='text-xs sm:text-sm text-white/60 font-light max-w-md mb-8 leading-relaxed'>
              Добавляйте понравившиеся камины из каталога и фотографии из раздела вдохновения, нажимая на иконку сердечка.
            </p>
            <Link to='/concepts'>
              <Button className='py-4 px-10 text-xs tracking-[0.2em] font-semibold rounded-none'>
                ПЕРЕЙТИ В КАТАЛОГ
              </Button>
            </Link>
          </div>
        ) : (
          <div className='space-y-16 pt-8 sm:pt-12'>
            {/* СЕКЦИЯ 1: ПРОЕКТЫ (Стилизована чисто, как в Портфолио) */}
            {projectItems.length > 0 && (
              <section className='space-y-6'>
                <div className='flex items-center justify-between border-l-2 border-[#c58b41] pl-3.5'>
                  <div className='flex items-center gap-3'>
                    <h2 className='text-base sm:text-lg font-bold tracking-[0.2em] text-white uppercase'>
                      ПРОЕКТЫ
                    </h2>
                    <span className='text-xs px-2 py-0.5 bg-white/5 border border-white/10 text-white/60'>
                      {projectItems.length}
                    </span>
                  </div>
                  <Link
                    to='/concepts'
                    className='text-xs text-[#c58b41] hover:text-[#e0a458] transition-colors flex items-center gap-1 uppercase tracking-wider'
                  >
                    <span>В каталог</span>
                    <ArrowRight className='w-3.5 h-3.5' />
                  </Link>
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6'>
                  <AnimatePresence>
                    {projectItems.map((item) => (
                      <motion.div
                        key={`project-${item.id}`}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.25 } }}
                        className='flex flex-col group select-none'
                      >
                        <Link to={`/concepts/${item.id}`} className='block group/link cursor-pointer'>
                          {/* Фотография камина без искажающих наложений */}
                          <div className='relative w-full h-[200px] sm:h-[240px] lg:h-[270px] overflow-hidden bg-[#141414] border border-white/10 shadow-[0_10px_25px_rgba(0,0,0,0.85)]'>
                            {/* Кнопка удаления из избранного */}
                            <button
                              type='button'
                              onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                removeFavorite(item.id, 'project')
                              }}
                              className='absolute top-2.5 right-2.5 z-30 p-1.5 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md transition-colors cursor-pointer border border-white/10'
                              aria-label='Удалить из избранного'
                              title='Удалить'
                            >
                              <Heart
                                size={16}
                                className='fill-[#f37021] text-[#f37021]'
                                strokeWidth={2}
                              />
                            </button>

                            <img
                              src={item.image}
                              alt={`Проект камина ${item.id}`}
                              className='w-full h-full object-cover group-hover/link:scale-105 transition-transform duration-500 will-change-transform'
                              loading='lazy'
                            />
                          </div>

                          {/* Текстовая подпись под фото (как в Портфолио) */}
                          <div className='pt-3 space-y-1'>
                            <h3 className='text-xs sm:text-[13px] font-bold text-white uppercase tracking-wider group-hover/link:text-[#c58b41] transition-colors truncate'>
                              Камин «Махаон» #{item.id}
                            </h3>
                            <p className='text-[11px] text-[#737373] font-light'>
                              Индивидуальный расчет под ключ
                            </p>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </section>
            )}

            {/* СЕКЦИЯ 2: ВДОХНОВЕНИЕ */}
            {inspirationItems.length > 0 && (
              <section className='space-y-6 pt-6 border-t border-white/10'>
                <div className='flex items-center justify-between border-l-2 border-[#c58b41] pl-3.5'>
                  <div className='flex items-center gap-3'>
                    <h2 className='text-base sm:text-lg font-bold tracking-[0.2em] text-white uppercase'>
                      ВДОХНОВЕНИЕ
                    </h2>
                    <span className='text-xs px-2 py-0.5 bg-white/5 border border-white/10 text-white/60'>
                      {inspirationItems.length}
                    </span>
                  </div>
                  <Link
                    to='/inspiration'
                    className='text-xs text-[#c58b41] hover:text-[#e0a458] transition-colors flex items-center gap-1 uppercase tracking-wider'
                  >
                    <span>В галерею</span>
                    <ArrowRight className='w-3.5 h-3.5' />
                  </Link>
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6'>
                  <AnimatePresence>
                    {inspirationItems.map((item) => (
                      <motion.div
                        key={`inspiration-${item.id}`}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.25 } }}
                        className='flex flex-col group select-none'
                      >
                        <div className='relative w-full h-[200px] sm:h-[240px] lg:h-[270px] overflow-hidden bg-[#141414] border border-white/10 shadow-[0_10px_25px_rgba(0,0,0,0.85)]'>
                          {/* Кнопка удаления */}
                          <button
                            type='button'
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              removeFavorite(item.id, 'inspiration')
                            }}
                            className='absolute top-2.5 right-2.5 z-30 p-1.5 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md transition-colors cursor-pointer border border-white/10'
                            aria-label='Удалить из избранного'
                            title='Удалить'
                          >
                            <Heart
                              size={16}
                              className='fill-[#f37021] text-[#f37021]'
                              strokeWidth={2}
                            />
                          </button>

                          <img
                            src={item.image}
                            alt={`Вдохновение ${item.id}`}
                            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform'
                            loading='lazy'
                          />
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </section>
            )}
          </div>
        )}

        {/* Сквозной блок шоурумов ARTPLAY */}
        <div className='mt-20 sm:mt-28'>
          <ShowroomsBlock />
        </div>
      </div>
    </div>
  )
}

export default Favorites
