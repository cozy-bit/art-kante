import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Heart, Share2, Check } from 'lucide-react'
import { ArtplayShowrooms } from '../Inspiration/components/ArtplayShowrooms'
import img3 from '../../assets/images/project-images/img3.png'
import img6 from '../../assets/images/project-images/img6.png'
import {
  getFavorites,
  saveFavorites,
} from '../../features/project-page/add-to-favorites'

export function Portfolio() {
  const [favorites, setFavorites] = useState(() => {
    return getFavorites() || []
  })
  const [copiedId, setCopiedId] = useState(null)

  useEffect(() => {
    saveFavorites(favorites)
  }, [favorites])

  const toggleFavorite = (item) => {
    const exists = favorites.some((fav) => fav.id === item.id)
    let updated
    if (exists) {
      updated = favorites.filter((fav) => fav.id !== item.id)
    } else {
      updated = [...favorites, item]
    }
    setFavorites(updated)
  }

  const isLiked = (id) => favorites.some((fav) => fav.id === id)

  const handleShare = (id) => {
    navigator.clipboard?.writeText(window.location.href)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const portfolioItems = [
    {
      id: 101,
      title: 'КАМИН "БЕЛАЯ КОРОЛЕВА"',
      mainImage: img3,
      sideImage: img6,
      description:
        'Делаем визуализации и рабочие чертежи в программах: ArchiCad, 3Ds Max, Revit, Palette Cad, Inventor. Предоставляем 3д модель для интеграции в проект, работаем с BIM',
      hasFavoriteBtn: true,
    },
    {
      id: 102,
      title: 'КАМИН "БЕЛАЯ КОРОЛЕВА"',
      mainImage: img3,
      sideImage: img6,
      description:
        'Делаем визуализации и рабочие чертежи в программах: ArchiCad, 3Ds Max, Revit, Palette Cad, Inventor. Предоставляем 3д модель для интеграции в проект, работаем с BIM',
    },
    {
      id: 103,
      title: 'КАМИН "БЕЛАЯ КОРОЛЕВА"',
      mainImage: img3,
      sideImage: img6,
      description:
        'Делаем визуализации и рабочие чертежи в программах: ArchiCad, 3Ds Max, Revit, Palette Cad, Inventor. Предоставляем 3д модель для интеграции в проект, работаем с BIM',
    },
    {
      id: 104,
      title: 'КАМИН "БЕЛАЯ КОРОЛЕВА"',
      mainImage: img3,
      sideImage: img6,
      description:
        'Делаем визуализации и рабочие чертежи в программах: ArchiCad, 3Ds Max, Revit, Palette Cad, Inventor. Предоставляем 3д модель для интеграции в проект, работаем с BIM',
    },
    {
      id: 105,
      title: 'КАМИН "БЕЛАЯ КОРОЛЕВА"',
      mainImage: img3,
      sideImage: img6,
      description:
        'Делаем визуализации и рабочие чертежи в программах: ArchiCad, 3Ds Max, Revit, Palette Cad, Inventor. Предоставляем 3д модель для интеграции в проект, работаем с BIM',
    },
    {
      id: 106,
      title: 'КАМИН "БЕЛАЯ КОРОЛЕВА"',
      mainImage: img3,
      sideImage: img6,
      description:
        'Делаем визуализации и рабочие чертежи в программах: ArchiCad, 3Ds Max, Revit, Palette Cad, Inventor. Предоставляем 3д модель для интеграции в проект, работаем с BIM',
    },
    {
      id: 107,
      title: 'КАМИН "БЕЛАЯ КОРОЛЕВА"',
      mainImage: img3,
      sideImage: img6,
      description:
        'Делаем визуализации и рабочие чертежи в программах: ArchiCad, 3Ds Max, Revit, Palette Cad, Inventor. Предоставляем 3д модель для интеграции в проект, работаем с BIM',
    },
    {
      id: 108,
      title: 'КАМИН "БЕЛАЯ КОРОЛЕВА"',
      mainImage: img3,
      sideImage: img6,
      description:
        'Делаем визуализации и рабочие чертежи в программах: ArchiCad, 3Ds Max, Revit, Palette Cad, Inventor. Предоставляем 3д модель для интеграции в проект, работаем с BIM',
    },
  ]

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white pb-16 selection:bg-[#c58b41]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок страницы */}
        <div className="pt-6 sm:pt-10 pb-6 sm:pb-8">
          <h1 className="text-2xl sm:text-3xl font-light tracking-wide text-white">
            Портфолио
          </h1>
        </div>

        {/* Сетка проектов портфолио (2 колонки) */}
        <section className="pb-16 sm:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 lg:gap-x-12 lg:gap-y-14">
            {portfolioItems.map((item) => {
              const liked = isLiked(item.id)
              const isCopied = copiedId === item.id

              return (
                <article key={item.id} className="flex flex-col group">
                  <Link to={`/concepts/${item.id}`} className="block group/link cursor-pointer">
                    {/* Заголовок проекта */}
                    <h2 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-white mb-2.5 group-hover/link:text-[#c58b41] transition-colors">
                      {item.title}
                    </h2>

                    {/* Блок изображений (основное + боковой ракурс) с отступом */}
                    <div className="flex gap-2.5 sm:gap-3.5 md:gap-4 h-44 sm:h-56 md:h-60 lg:h-72 w-full overflow-hidden">
                      <div className="flex-1 h-full overflow-hidden bg-[#141414]">
                        <img
                          src={item.mainImage}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover/link:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div className="w-[20%] sm:w-[22%] h-full overflow-hidden bg-[#141414]">
                        <img
                          src={item.sideImage}
                          alt={`${item.title} деталь`}
                          className="w-full h-full object-cover group-hover/link:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </Link>

                  {/* Кнопки действий */}
                  <div className="flex items-center justify-between pt-3 text-xs text-[#8c8c8c]">
                    {item.hasFavoriteBtn ? (
                      <button
                        type="button"
                        onClick={() => toggleFavorite(item)}
                        className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer text-xs"
                      >
                        <Heart
                          size={15}
                          className={
                            liked
                              ? 'fill-[#f37021] text-[#f37021]'
                              : 'text-[#8c8c8c] hover:text-white'
                          }
                          strokeWidth={1.8}
                        />
                        <span>
                          {liked
                            ? 'ДОБАВЛЕН В ИЗБРАННОЕ'
                            : 'ДОБАВИТЬ В ИЗБРАННОЕ'}
                        </span>
                      </button>
                    ) : (
                      <div />
                    )}

                    <button
                      type="button"
                      onClick={() => handleShare(item.id)}
                      className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors cursor-pointer text-xs ml-auto"
                      title="Поделиться ссылкой"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#f37021]" />
                          <span className="text-[#f37021]">Скопировано</span>
                        </>
                      ) : (
                        <>
                          <Share2 className="w-3.5 h-3.5" strokeWidth={1.8} />
                          <span>Поделиться</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Описание проекта */}
                  <p className="text-[11px] sm:text-xs text-[#737373] leading-relaxed mt-2.5 font-light">
                    {item.description}
                  </p>
                </article>
              )
            })}
          </div>
        </section>

        {/* Блок шоурума ARTPLAY */}
        <ArtplayShowrooms />
      </div>
    </div>
  )
}

export default Portfolio

