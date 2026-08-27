import { Heart, ChevronDown, Check, X, Box } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import images from '../../data/project-page-datas/datas'
import {
  getFavorites,
  saveFavorites,
} from '../../features/project-page/add-to-favorites'

export function Project() {
  const [favorites, setFavorites] = useState(() => {
    const saved = getFavorites()
    if (saved && saved.length > 0) {
      return saved
    }
    return [
      { id: 1 },
      { id: 4 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 14 },
      { id: 16 },
      { id: 17 },
    ]
  })

  useEffect(() => {
    saveFavorites(favorites)
  }, [favorites])

  
  const [activeDropdown, setActiveDropdown] = useState('style')
  const [selectedStyle, setSelectedStyle] = useState('КЛАССИЧЕСКИЕ')
  const [visibleCount, setVisibleCount] = useState(20)

  // Состояние модального окна "Заказать обратный звонок"
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    agree: true,
  })

  // Закрытие модального окна по Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false)
      }
    }
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isModalOpen])

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

  const resetFilters = () => {
    setActiveDropdown(null)
    setSelectedStyle('')
  }

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 8)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setIsModalOpen(false)
      setFormData({ name: '', phone: '', agree: true })
    }, 2000)
  }

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen pb-16 selection:bg-[#c58b41]/30">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Заголовок страницы и Хлебные крошки */}
        <div className="pt-5 sm:pt-8 pb-3 sm:pb-6">
          {/* Хлебные крошки (для десктопа) */}
          <nav
            aria-label="Breadcrumb"
            className="hidden sm:flex items-center gap-2 text-xs text-[#737373] tracking-wide mb-3"
          >
            <Link
              to="/"
              className="hover:text-white transition-colors duration-200"
            >
              Главная
            </Link>
            <span className="text-[#444444]">/</span>
            <span className="text-[#a3a3a3]">Концепты</span>
          </nav>

          {/* Заголовок Концепты (как на мобильном макете) */}
          <h1 className="text-2xl sm:text-3xl font-light tracking-wide text-white">
            Концепты
          </h1>
        </div>

        {/* Панель фильтров (2 колонки на мобилке, строка на десктопе) */}
        <section className="relative z-20 pb-5 sm:pb-8">
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-2.5 text-[11px] sm:text-xs">
            {/* 1. Классический стиль / Назначение */}
            <div className="relative">
              <button
                type="button"
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === 'purpose' ? null : 'purpose'
                  )
                }
                className="w-full flex items-center justify-between gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 bg-[#141414] hover:bg-[#1a1a1a] border border-white/[0.06] rounded-[4px] text-white/80 hover:text-white transition-all cursor-pointer shadow-[inset_2px_2px_6px_rgba(0,0,0,0.6),inset_-1px_-1px_4px_rgba(255,255,255,0.02)]"
              >
                <span className="truncate">Классический стиль</span>
                <ChevronDown className="w-3 h-3 text-white/50 shrink-0" />
              </button>
              {activeDropdown === 'purpose' && (
                <div className="absolute top-full mt-1.5 left-0 z-30 bg-[#121212] border border-white/10 rounded-[4px] shadow-2xl py-2 min-w-[180px] sm:min-w-[200px] text-xs text-white/80 space-y-1 backdrop-blur-md">
                  <div className="px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors">
                    Для гостиной
                  </div>
                  <div className="px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors">
                    Для спальни
                  </div>
                  <div className="px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors">
                    Для террасы
                  </div>
                </div>
              )}
            </div>

            {/* 2. Вид топлива */}
            <div className="relative">
              <button
                type="button"
                onClick={() =>
                  setActiveDropdown(activeDropdown === 'fuel' ? null : 'fuel')
                }
                className="w-full flex items-center justify-between gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 bg-[#141414] hover:bg-[#1a1a1a] border border-white/[0.06] rounded-[4px] text-white/80 hover:text-white transition-all cursor-pointer shadow-[inset_2px_2px_6px_rgba(0,0,0,0.6),inset_-1px_-1px_4px_rgba(255,255,255,0.02)]"
              >
                <span className="truncate">Вид топлива</span>
                <ChevronDown className="w-3 h-3 text-white/50 shrink-0" />
              </button>
              {activeDropdown === 'fuel' && (
                <div className="absolute top-full mt-1.5 right-0 sm:left-0 z-30 bg-[#121212] border border-white/10 rounded-[4px] shadow-2xl py-2 min-w-[170px] text-xs text-white/80 space-y-1 backdrop-blur-md">
                  <div className="px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors">
                    Дровяные
                  </div>
                  <div className="px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors">
                    Газовые
                  </div>
                  <div className="px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors">
                    Биокамины
                  </div>
                  <div className="px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors">
                    Электрические
                  </div>
                </div>
              )}
            </div>

            {/* 3. Стиль (Активный выпадающий список) */}
            <div className="relative">
              <button
                type="button"
                onClick={() =>
                  setActiveDropdown(activeDropdown === 'style' ? null : 'style')
                }
                className="w-full flex items-center justify-between gap-1.5 px-3 py-2 sm:px-4 sm:py-2.5 bg-[#0e0e0e] border border-white/15 rounded-[4px] text-white transition-all cursor-pointer shadow-[0_0_12px_rgba(0,0,0,0.9)]"
              >
                <span className="font-medium truncate">Стиль</span>
                <ChevronDown className="w-3 h-3 text-white/80 shrink-0" />
              </button>

              {activeDropdown === 'style' && (
                <div className="absolute top-full mt-1.5 left-0 z-40 bg-[#080808] border border-white/10 rounded-[2px] shadow-[0_15px_30px_rgba(0,0,0,0.95)] py-2 min-w-[200px] text-[11px] uppercase tracking-wider text-white/90">
                  <div
                    onClick={() => setSelectedStyle('КЛАССИЧЕСКИЕ')}
                    className={`px-4 py-2 hover:bg-white/10 cursor-pointer transition-colors ${
                      selectedStyle === 'КЛАССИЧЕСКИЕ'
                        ? 'text-white bg-white/5 font-semibold'
                        : 'text-white/80'
                    }`}
                  >
                    КЛАССИЧЕСКИЕ
                  </div>
                  <div
                    onClick={() => setSelectedStyle('ЕВРОПЕЙСКАЯ КЛАССИКА')}
                    className={`px-4 py-2 hover:bg-white/10 cursor-pointer transition-colors ${
                      selectedStyle === 'ЕВРОПЕЙСКАЯ КЛАССИКА'
                        ? 'text-white bg-white/5 font-semibold'
                        : 'text-white/80'
                    }`}
                  >
                    ЕВРОПЕЙСКАЯ КЛАССИКА
                  </div>
                  <div
                    onClick={() => setSelectedStyle('ТРАДИЦИОННЫЕ')}
                    className={`px-4 py-2 hover:bg-white/10 cursor-pointer transition-colors ${
                      selectedStyle === 'ТРАДИЦИОННЫЕ'
                        ? 'text-white bg-white/5 font-semibold'
                        : 'text-white/80'
                    }`}
                  >
                    ТРАДИЦИОННЫЕ
                  </div>
                </div>
              )}
            </div>

            {/* 4. Выбор по стилю / Выход на улицу */}
            <div className="relative">
              <button
                type="button"
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === 'outdoor' ? null : 'outdoor'
                  )
                }
                className="w-full flex items-center justify-between gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 bg-[#141414] hover:bg-[#1a1a1a] border border-white/[0.06] rounded-[4px] text-white/80 hover:text-white transition-all cursor-pointer shadow-[inset_2px_2px_6px_rgba(0,0,0,0.6),inset_-1px_-1px_4px_rgba(255,255,255,0.02)]"
              >
                <span className="truncate">Выбор по стилю</span>
                <ChevronDown className="w-3 h-3 text-white/50 shrink-0" />
              </button>
              {activeDropdown === 'outdoor' && (
                <div className="absolute top-full mt-1.5 right-0 sm:left-0 z-30 bg-[#121212] border border-white/10 rounded-[4px] shadow-2xl py-2 min-w-[170px] text-xs text-white/80 space-y-1 backdrop-blur-md">
                  <div className="px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors">
                    Современный
                  </div>
                  <div className="px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors">
                    Минимализм
                  </div>
                  <div className="px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors">
                    Лофт
                  </div>
                </div>
              )}
            </div>

            {/* 5. Прочее */}
            <div className="relative">
              <button
                type="button"
                onClick={() =>
                  setActiveDropdown(activeDropdown === 'other' ? null : 'other')
                }
                className="w-full flex items-center justify-between gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 bg-[#141414] hover:bg-[#1a1a1a] border border-white/[0.06] rounded-[4px] text-white/80 hover:text-white transition-all cursor-pointer shadow-[inset_2px_2px_6px_rgba(0,0,0,0.6),inset_-1px_-1px_4px_rgba(255,255,255,0.02)]"
              >
                <span className="truncate">Прочее</span>
                <ChevronDown className="w-3 h-3 text-white/50 shrink-0" />
              </button>
              {activeDropdown === 'other' && (
                <div className="absolute top-full mt-1.5 left-0 z-30 bg-[#121212] border border-white/10 rounded-[4px] shadow-2xl py-2 min-w-[170px] text-xs text-white/80 space-y-1 backdrop-blur-md">
                  <div className="px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors">
                    С водяным контуром
                  </div>
                  <div className="px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors">
                    С теплонакопителем
                  </div>
                </div>
              )}
            </div>

            {/* 6. Материал облицовки */}
            <div className="relative">
              <button
                type="button"
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === 'cladding' ? null : 'cladding'
                  )
                }
                className="w-full flex items-center justify-between gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 bg-[#141414] hover:bg-[#1a1a1a] border border-white/[0.06] rounded-[4px] text-white/80 hover:text-white transition-all cursor-pointer shadow-[inset_2px_2px_6px_rgba(0,0,0,0.6),inset_-1px_-1px_4px_rgba(255,255,255,0.02)]"
              >
                <span className="truncate">Материал облицовки</span>
                <ChevronDown className="w-3 h-3 text-white/50 shrink-0" />
              </button>
              {activeDropdown === 'cladding' && (
                <div className="absolute top-full mt-1.5 right-0 sm:left-0 z-30 bg-[#121212] border border-white/10 rounded-[4px] shadow-2xl py-2 min-w-[180px] text-xs text-white/80 space-y-1 backdrop-blur-md">
                  <div className="px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors">
                    Мрамор
                  </div>
                  <div className="px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors">
                    Изразец / Керамика
                  </div>
                  <div className="px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors">
                    Талькомагнезит
                  </div>
                </div>
              )}
            </div>

            {/* 7. Кнопка сбросить */}
            <div className="col-span-2 sm:col-span-1 flex justify-center sm:justify-start sm:ml-auto pt-1 sm:pt-0">
              <button
                type="button"
                onClick={resetFilters}
                className="flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2.5 text-white/60 hover:text-white transition-all cursor-pointer text-[11px] uppercase tracking-wider"
                title="Сбросить фильтры"
              >
                <X className="w-3.5 h-3.5 text-white/60" />
                <span>СБРОСИТЬ</span>
              </button>
            </div>
          </div>
        </section>

        {/* Сетка концептов (2 колонки на мобилке, 4 на десктопе) */}
        <section className="relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-5">
            {images.slice(0, visibleCount).map((item, index) => {
              const itemLiked = isLiked(item.id)
              // Карточки с бейджем 3D
              const has3DBadge = index === 2 || index === 6

              // Данные для оверлея при ховере (hover info overlay)
              const cardInfoList = [
                {
                  title: 'БИОКАМИН QUADRA WALL',
                  features: [
                    'экологичное решение',
                    'идеально для помещений со вторым светом',
                    'идеально в доме из бруса',
                  ],
                },
                {
                  title: 'КАМИН В СТИЛЕ ЛОФТ',
                  features: [
                    'эксклюзивные решения',
                    'идеальные архитектурные решения под ключ',
                    'камины в любом стиле',
                  ],
                },
                {
                  title: 'ПОРТАЛ ИЗРАЗЦОВЫЙ',
                  features: [
                    'традиционная эстетика',
                    'высокая теплоотдача',
                    'аккумуляция тепла до 12 часов',
                  ],
                },
                {
                  title: 'БИОКАМИН QUADRA WALL',
                  features: [
                    'экологичное решение',
                    'идеально для помещений со вторым светом',
                    'идеально в доме из бруса',
                  ],
                },
              ]

              const details = cardInfoList[index % cardInfoList.length]

              return (
                <div
                  key={item.id}
                  className="relative rounded-xl sm:rounded-2xl p-1.5 sm:p-2 bg-[#141414] border border-white/5 shadow-[8px_8px_20px_rgba(0,0,0,0.8),-3px_-3px_10px_rgba(255,255,255,0.02)] flex flex-col h-[210px] xs:h-[240px] sm:h-[280px] md:h-[320px] lg:h-[350px] overflow-hidden group transition-transform duration-300 hover:-translate-y-1 cursor-pointer select-none"
                >
                  <div className="relative w-full h-full rounded-[8px] sm:rounded-[10px] overflow-hidden bg-[#0d0d0d]">
                    {/* Кнопка "В избранное" (поверх оверлея) */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleFavorite(item)
                      }}
                      className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 z-30 p-1 sm:p-1.5 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-xs transition-colors cursor-pointer"
                      aria-label="В избранное"
                    >
                      <Heart
                        size={17}
                        className={
                          itemLiked
                            ? 'fill-[#f37021] text-[#f37021]'
                            : 'text-white/70 hover:text-white'
                        }
                        strokeWidth={2}
                      />
                    </button>

                    {/* Бейдж 3D */}
                    {has3DBadge && (
                      <div className="absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5 z-30 bg-black/70 backdrop-blur-xs text-white text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 sm:px-2 rounded border border-white/20 flex items-center gap-1 shadow-md">
                        <Box className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white/90" />
                        <span>3D</span>
                      </div>
                    )}

                    {/* Изображение из datas.js */}
                    <img
                      src={item.image}
                      alt={`Концепт камина ${item.id}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Оверлей с надписями и галочками, появляющийся при ховере */}
                    <div className="absolute inset-0 bg-[#0a0a0a]/88 backdrop-blur-[2px] p-3 sm:p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      {/* Название модели/концепта */}
                      <div className="pt-1 sm:pt-2 pr-6">
                        <h3 className="text-white font-semibold tracking-wider text-[11px] sm:text-xs md:text-sm uppercase leading-snug">
                          {details.title}
                        </h3>
                      </div>

                      {/* Список преимуществ с галочками */}
                      <div className="space-y-1.5 sm:space-y-3 pb-1 sm:pb-2">
                        {details.features.map((feature, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-start gap-1.5 sm:gap-2"
                          >
                            <Check
                              className="w-3.5 h-3.5 text-white shrink-0 mt-0.5"
                              strokeWidth={2.5}
                            />
                            <span className="text-[9px] sm:text-[11px] md:text-xs text-white/90 font-light leading-tight sm:leading-snug">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Кнопка "ПОКАЗАТЬ ЕЩЕ" */}
          <div className="text-center my-8 sm:my-14">
            <button
              type="button"
              onClick={handleShowMore}
              className="text-[11px] sm:text-sm font-semibold tracking-[0.25em] text-[#8c8c8c] hover:text-[#c58b41] uppercase transition-colors cursor-pointer py-2 px-6"
            >
              ПОКАЗАТЬ ЕЩЕ
            </button>
          </div>
        </section>

        {/* Блок Шоурума: ЦЕНТР ДИЗАЙНА ARTPLAY строение 12 */}
        <section className="mb-10 sm:mb-20">
          <div className="max-w-5xl mx-auto rounded-xl sm:rounded-2xl p-5 sm:p-10 lg:p-12 bg-[#121212] border border-white/5 shadow-[inset_10px_10px_30px_rgba(0,0,0,0.9),inset_-4px_-4px_16px_rgba(255,255,255,0.02)]">
            {/* Верхний текст и заголовки */}
            <div className="text-center mb-6 sm:mb-10">
              <p className="text-[11px] sm:text-[13px] text-white/70 tracking-wide mb-2 font-light leading-snug">
                Приглашаем: комфортно, удобно для встреч и переговоров шоурум:
              </p>
              <h2 className="text-[#df8f37] text-base sm:text-2xl font-semibold tracking-[0.25em] sm:tracking-[0.45em] uppercase">
                Ц Е Н Т Р &nbsp; Д И З А Й Н А
              </h2>
              <h2 className="text-[#df8f37] text-base sm:text-2xl font-semibold tracking-[0.25em] sm:tracking-[0.45em] uppercase mt-0.5 sm:mt-1">
                A R T P L A Y
              </h2>
              <h3 className="text-[#df8f37] text-xs sm:text-lg font-medium tracking-[0.3em] sm:tracking-[0.4em] uppercase mt-1">
                с т р о е н и е &nbsp; 1 2
              </h3>
            </div>

            {/* Контент шоурума (на мобилке последовательно фото1, фото2, инфо; на десктопе 3 колонки) */}
            <div className="flex flex-col md:grid md:grid-cols-3 gap-6 lg:gap-8 items-center">
              {/* Шоурум 106 */}
              <div className="w-full flex flex-col items-center order-1 md:order-1">
                <div className="w-full overflow-hidden rounded-lg border border-white/10 shadow-lg group">
                  <img
                    src={images[0]?.image}
                    alt="Шоурум 106"
                    className="w-full h-48 sm:h-52 md:h-44 lg:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-[#df8f37] text-xs sm:text-sm font-medium tracking-[0.3em] uppercase mt-2.5 text-center">
                  Ш о у р у м &nbsp; 1 0 6
                </div>
              </div>

              {/* Шоурум 112 (на мобилке идет вторым) */}
              <div className="w-full flex flex-col items-center order-2 md:order-3">
                <div className="w-full overflow-hidden rounded-lg border border-white/10 shadow-lg group">
                  <img
                    src={images[1]?.image || images[4]?.image}
                    alt="Шоурум 112"
                    className="w-full h-48 sm:h-52 md:h-44 lg:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-[#df8f37] text-xs sm:text-sm font-medium tracking-[0.3em] uppercase mt-2.5 text-center">
                  Ш о у р у м &nbsp; 1 1 2
                </div>
              </div>

              {/* Часы работы и адрес */}
              <div className="w-full flex flex-col items-center text-center space-y-4 sm:space-y-5 px-2 order-3 md:order-2">
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-white tracking-widest uppercase mb-1">
                    ЧАСЫ РАБОТЫ:
                  </div>
                  <div className="text-xs text-white/70 space-y-0.5 font-light">
                    <div>ПН-ПТ 11:00 - 20:00</div>
                    <div>СБ 12:00 - 18:00</div>
                    <div>ВС по согласованию</div>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-white tracking-widest uppercase mb-1">
                    АДРЕС:
                  </div>
                  <div className="text-xs text-white/70 leading-relaxed font-light">
                    105120, г. Москва, ул.
                    <br />
                    Сыромятническая Нижняя,
                    <br />
                    д.10, стр.12,
                    <br />
                    м. Курская, м. Чкаловская
                  </div>
                </div>
              </div>
            </div>

            {/* Нижняя ссылка на карту */}
            <div className="text-center mt-6 sm:mt-8">
              <a
                href="https://yandex.ru/maps"
                target="_blank"
                rel="noreferrer"
                className="text-[#df8f37] hover:text-[#f3a44d] text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] underline underline-offset-4 transition-colors inline-block leading-relaxed"
              >
                открыть на яндекс картах / прямо от метро
              </a>
            </div>
          </div>
        </section>

        {/* Большая кнопка "ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК" */}
        <section className="flex justify-center mb-10 sm:mb-16">
          <Button
            variant="default"
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto max-w-sm px-6 sm:px-16 py-3.5 sm:py-4.5 text-xs sm:text-sm"
          >
            ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК
          </Button>
        </section>
      </div>

      {/* Модальное окно "Заказать обратный звонок" */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsModalOpen(false)
          }}
        >
          <div className="relative w-full max-w-[580px] bg-[#0d0d0d] rounded-none sm:rounded-sm overflow-hidden border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.95)]">
            {/* Кнопка закрытия (X) */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20 text-white/70 hover:text-white transition-colors cursor-pointer p-1"
              aria-label="Закрыть"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
            </button>

            {/* Верхний баннер заголовка */}
            <div className="bg-[#171717] px-6 py-6 sm:py-8 text-center border-b border-white/5">
              <h2 className="text-lg sm:text-xl md:text-2xl font-normal tracking-wide text-white">
                <span className="sm:hidden block">Заказать обратный</span>
                <span className="sm:hidden block font-medium uppercase text-base mt-0.5">
                  ЗВОНОК
                </span>
                <span className="hidden sm:inline">
                  Заказать обратный звонок
                </span>
              </h2>
            </div>

            {/* Основное тело модалки с формой */}
            <div className="relative px-6 py-8 sm:py-10 bg-[#0c0c0c] overflow-hidden">
              {formSubmitted ? (
                <div className="text-center py-6 space-y-2 text-white">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#f37021]/20 flex items-center justify-center text-[#f37021] mb-3">
                    <Check className="w-6 h-6" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-base font-medium">Спасибо за заявку!</h3>
                  <p className="text-xs text-white/70">
                    Мы свяжемся с вами в ближайшее время.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleFormSubmit}
                  className="max-w-[340px] mx-auto space-y-4 relative z-10"
                >
                  {/* Поле "Ваше имя" */}
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 sm:py-3.5 bg-[#202020] border border-white/5 rounded-none text-xs sm:text-sm text-white placeholder:text-[#777777] focus:outline-none focus:border-[#f37021]/60 transition-colors"
                    />
                  </div>

                  {/* Поле "Ваш телефон" */}
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Ваш телефон"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 sm:py-3.5 bg-[#202020] border border-white/5 rounded-none text-xs sm:text-sm text-white placeholder:text-[#777777] focus:outline-none focus:border-[#f37021]/60 transition-colors"
                    />
                  </div>

                  {/* Чекбокс согласия */}
                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="agree"
                      required
                      checked={formData.agree}
                      onChange={(e) =>
                        setFormData({ ...formData, agree: e.target.checked })
                      }
                      className="mt-0.5 accent-[#f37021] cursor-pointer rounded-none"
                    />
                    <label
                      htmlFor="agree"
                      className="text-[10px] sm:text-[11px] text-[#737373] leading-snug cursor-pointer select-none"
                    >
                      Нажимая на кнопку я соглашаюсь с{' '}
                      <span className="underline hover:text-white/80 transition-colors">
                        политикой конфиденциальности
                      </span>
                    </label>
                  </div>

                  {/* Оранжевая кнопка "ОТПРАВИТЬ" */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 sm:py-4 bg-[#f37021] hover:bg-[#e05f13] active:bg-[#c9530e] text-white text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase transition-all duration-200 cursor-pointer shadow-[0_4px_15px_rgba(243,112,33,0.3)] hover:shadow-[0_6px_20px_rgba(243,112,33,0.45)]"
                    >
                      ОТПРАВИТЬ
                    </button>
                  </div>
                </form>
              )}

              {/* Декоративное свечение / искры камина внизу модалки */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-t from-[#f37021]/20 via-[#f37021]/5 to-transparent blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 inset-x-0 h-8 flex justify-around items-end opacity-20 pointer-events-none">
                <span className="w-1 h-1 bg-[#f37021] rounded-full blur-[0.5px] animate-pulse" />
                <span className="w-1.5 h-1.5 bg-[#f37021] rounded-full blur-[0.5px] animate-pulse delay-100" />
                <span className="w-1 h-1 bg-[#ff9248] rounded-full blur-[0.5px] animate-pulse delay-300" />
                <span className="w-1.5 h-1.5 bg-[#f37021] rounded-full blur-[0.5px] animate-pulse delay-200" />
                <span className="w-1 h-1 bg-[#ff9248] rounded-full blur-[0.5px] animate-pulse delay-500" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Project