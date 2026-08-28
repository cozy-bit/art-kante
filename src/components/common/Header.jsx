import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone, ChevronRight, ArrowRight } from 'lucide-react'

// Ассеты категорий
import countryHouseImg from '../../assets/images/home/category-country-house.png'
import cityApartmentImg from '../../assets/images/home/category-city-apartment.png'
import publicSpacesImg from '../../assets/images/home/category-public-spaces.png'
import facingImg from '../../assets/images/home/category-facing.png'

const CATEGORY_MENUS = [
  {
    id: 'country',
    title: 'ЗАГОРОДНЫЙ ДОМ',
    link: '/concepts?category=country',
    image: countryHouseImg,
    tag: 'ДЛЯ КОТТЕДЖЕЙ И УСАДЕБ',
    items: [
      { title: 'Дровяные камины', link: '/concepts?category=country' },
      { title: 'Печи и барбекю-комплексы', link: '/concepts?category=country' },
      { title: 'Камины со вторым светом', link: '/concepts?category=country' },
      { title: 'Очаги для террас и беседок', link: '/concepts?category=country' },
    ],
    allText: 'Смотреть все проекты',
  },
  {
    id: 'apartment',
    title: 'ГОРОДСКАЯ КВАРТИРА',
    link: '/concepts?category=apartment',
    image: cityApartmentImg,
    tag: 'ДЛЯ СОВРЕМЕННЫХ ИНТЕРЬЕРОВ',
    items: [
      { title: 'Автоматические биокамины', link: '/concepts?category=apartment' },
      { title: 'Электрокамины с 3D-пламенем', link: '/concepts?category=apartment' },
      { title: 'Встраиваемые и настенные очаги', link: '/concepts?category=apartment' },
      { title: 'Сквозные каминные решения', link: '/concepts?category=apartment' },
    ],
    allText: 'Смотреть все проекты',
  },
  {
    id: 'public',
    title: 'ОБЩЕСТВЕННЫЕ ПРОСТРАНСТВА',
    link: '/concepts?category=public',
    image: publicSpacesImg,
    tag: 'ДЛЯ РЕСТОРАНОВ И ОТЕЛЕЙ',
    items: [
      { title: 'Для ресторанов и лаунж-зон', link: '/concepts?category=public' },
      { title: 'Для лобби отелей и офисов', link: '/concepts?category=public' },
      { title: 'Островные и подвесные концепты', link: '/concepts?category=public' },
      { title: 'Индивидуальные арт-объекты', link: '/concepts?category=public' },
    ],
    allText: 'Смотреть все проекты',
  },
  {
    id: 'cladding',
    title: 'ОБЛИЦОВКА',
    link: '/concepts?category=cladding',
    image: facingImg,
    tag: 'АВТОРСКИЕ МАТЕРИАЛЫ',
    items: [
      { title: 'Авторские изразцы ручной работы', link: '/concepts?category=cladding' },
      { title: 'Натуральный камень и мрамор', link: '/concepts?category=cladding' },
      { title: 'Шамотная керамика', link: '/concepts?category=cladding' },
      { title: 'Металл, латунь и медь', link: '/concepts?category=cladding' },
    ],
    allText: 'Смотреть все проекты',
  },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState(null)
  const closeTimeoutRef = useRef(null)
  const location = useLocation()

  // Закрывать меню при переходе по ссылке
  useEffect(() => {
    setMobileMenuOpen(false)
    setActiveCategory(null)
  }, [location.pathname, location.search])

  // Безопасный ховер с задержкой 160мс для плавного перехода
  const handleCategoryMouseEnter = (id) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setActiveCategory(id)
  }

  const handleCategoryMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveCategory(null)
    }, 160)
  }

  // Блокировка скролла страницы при открытом мобильном меню
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setMobileMenuOpen(false)
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = 'unset'
        window.removeEventListener('keydown', handleKeyDown)
      }
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <header className="bg-[#0e0e0e] text-white border-b border-[#222222] select-none sticky top-0 z-40">
      <div className="w-full flex items-stretch min-h-[90px]">
        {/* Логотип с отступом слева */}
        <div className="flex items-center pl-6 lg:pl-8 xl:pl-12 shrink-0">
          <Link
            to="/"
            className="flex items-center justify-center hover:opacity-90 transition-opacity h-[90px] w-[90px] sm:h-[100px] sm:w-[100px] overflow-hidden shadow-lg"
          >
            <img
              src="/logo.png"
              alt="Art-Kante — Бюро каминов"
              className="w-full h-full object-contain"
            />
          </Link>
        </div>

        {/* Десктопное меню (двухуровневое) */}
        <div className="hidden lg:flex flex-1 flex-col justify-between py-2.5 px-8 xl:px-12 bg-[#0e0e0e]">
          {/* Верхняя строка: золотистые ссылки, Избранное и Телефон */}
          <div className="flex items-center justify-between text-[13px] font-medium text-[#c58b41] pb-1.5 border-b border-white/[0.04]">
            <nav className="flex items-center gap-6 xl:gap-9">
              <Link
                to="/philosophy"
                className="hover:text-[#e0a458] transition-colors"
              >
                Философия
              </Link>
              <Link
                to="/design"
                className="hover:text-[#e0a458] transition-colors"
              >
                Проектирование
              </Link>
              <Link
                to="/portfolio"
                className="hover:text-[#e0a458] transition-colors"
              >
                Портфолио
              </Link>
              <Link
                to="/inspiration"
                className="hover:text-[#e0a458] transition-colors"
              >
                Вдохновение
              </Link>
              <Link
                to="/concepts"
                className="hover:text-[#e0a458] transition-colors"
              >
                Каталог
              </Link>
            </nav>

            <div className="flex items-center gap-6 xl:gap-8">
              <Link
                to="/favorites"
                className="hover:text-[#e0a458] transition-colors"
              >
                Избранное
              </Link>
              <a
                href="tel:+74951234567"
                className="text-[#c58b41] hover:text-[#e0a458] transition-colors p-1"
                title="Позвонить"
              >
                <Phone className="w-5 h-5 -rotate-12" />
              </a>
            </div>
          </div>

          {/* Нижняя строка: Изолированные категории с собственным дропдауном (Ссылки + Фото) */}
          <div className="flex items-center justify-between pt-1.5">
            <nav className="flex items-center gap-6 xl:gap-9 text-xs xl:text-[13px] font-semibold tracking-wider text-white uppercase">
              {CATEGORY_MENUS.map((cat, idx) => {
                const isOpen = activeCategory === cat.id

                return (
                  <div
                    key={cat.id}
                    className="relative py-1"
                    onMouseEnter={() => handleCategoryMouseEnter(cat.id)}
                    onMouseLeave={handleCategoryMouseLeave}
                  >
                    {/* Кнопка категории с индивидуальной анимированной стрелкой */}
                    <Link
                      to={cat.link}
                      className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                        isOpen ? 'text-[#c58b41]' : 'hover:text-[#b86326] text-white'
                      }`}
                    >
                      <span>{cat.title}</span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="text-[8px] opacity-75 inline-block shrink-0"
                      >
                        ▼
                      </motion.span>
                    </Link>

                    {/* Изолированная выпадающая панель: Слева ссылки, Справа фото */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{
                            opacity: 0,
                            y: 4,
                            scale: 0.98,
                            transition: { duration: 0.16, ease: 'easeIn' },
                          }}
                          transition={{
                            duration: 0.24,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className={`absolute top-full pt-2 z-50 w-[520px] lg:w-[580px] ${
                            idx >= 2 ? 'right-0' : 'left-0'
                          }`}
                          onMouseEnter={() => handleCategoryMouseEnter(cat.id)}
                          onMouseLeave={handleCategoryMouseLeave}
                        >
                          <div className="bg-[#101010]/98 backdrop-blur-2xl border border-white/10 p-5 shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_20px_rgba(255,255,255,0.03)] grid grid-cols-12 gap-5 items-stretch overflow-hidden">
                            {/* Слева: Ссылки раздела (7 колонок) */}
                            <div className="col-span-7 flex flex-col justify-between space-y-3 pr-2 border-r border-white/10">
                              <div>
                                <Link
                                  to={cat.link}
                                  onClick={() => setActiveCategory(null)}
                                  className="group/title block mb-3"
                                >
                                  <h4 className="text-xs font-bold text-white uppercase tracking-[0.14em] group-hover/title:text-[#c58b41] transition-colors">
                                    {cat.title}
                                  </h4>
                                  <div className="h-[2px] w-6 bg-[#c58b41] mt-1.5 group-hover/title:w-20 transition-all duration-300" />
                                </Link>

                                <ul className="space-y-1.5">
                                  {cat.items.map((sub, sIdx) => (
                                    <li key={sIdx}>
                                      <Link
                                        to={sub.link}
                                        onClick={() => setActiveCategory(null)}
                                        className="group/item flex items-center justify-between py-1.5 px-2 hover:bg-white/[0.04] transition-colors rounded-none"
                                      >
                                        <span className="text-xs text-white/75 group-hover/item:text-[#c58b41] transition-colors font-light">
                                          {sub.title}
                                        </span>
                                        <span className="text-[10px] text-[#c58b41] opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200">
                                          →
                                        </span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="pt-2 border-t border-white/[0.08]">
                                <Link
                                  to={cat.link}
                                  onClick={() => setActiveCategory(null)}
                                  className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#c58b41] hover:text-[#e0a458] uppercase tracking-wider transition-colors group/all"
                                >
                                  <span>{cat.allText}</span>
                                  <ArrowRight className="w-3 h-3 group-hover/all:translate-x-1 transition-transform" />
                                </Link>
                              </div>
                            </div>

                            {/* Справа: Фото-превью раздела (5 колонок) */}
                            <div className="col-span-5 flex flex-col justify-between space-y-2.5">
                              <Link
                                to={cat.link}
                                onClick={() => setActiveCategory(null)}
                                className="relative aspect-[4/3] w-full overflow-hidden bg-[#161616] border border-white/10 group/img block shadow-lg"
                              >
                                <img
                                  src={cat.image}
                                  alt={cat.title}
                                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                                <div className="absolute bottom-2 left-2 right-2 text-[8px] sm:text-[9px] font-bold text-white uppercase tracking-wider bg-black/60 backdrop-blur-xs p-1.5 border border-white/10 text-center truncate">
                                  {cat.tag}
                                </div>
                              </Link>

                              <Link
                                to={cat.link}
                                onClick={() => setActiveCategory(null)}
                                className="w-full py-2 px-3 bg-[#181818] hover:bg-[#b86326] text-white/90 hover:text-white text-[10px] font-bold uppercase tracking-[0.14em] transition-all text-center border border-white/10 hover:border-transparent cursor-pointer"
                              >
                                СМОТРЕТЬ РЕШЕНИЯ
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </nav>

            <div className="flex items-center">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-white/80 hover:text-white transition-colors p-1"
                title="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Мобильная кнопка меню */}
        <div className="flex lg:hidden flex-1 items-center justify-end px-6 gap-4">
          <a
            href="tel:+74951234567"
            className="text-[#c58b41] hover:text-[#e0a458] transition-colors p-1"
            title="Позвонить"
          >
            <Phone className="w-5 h-5 -rotate-12" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="text-white p-2 hover:text-[#c58b41] transition-colors cursor-pointer"
            aria-label="Открыть меню"
          >
            <div className="w-6 h-4 flex flex-col justify-between items-end">
              <span className="w-6 h-0.5 bg-white rounded-full transition-transform duration-300" />
              <span className="w-4 h-0.5 bg-[#c58b41] rounded-full transition-transform duration-300" />
              <span className="w-6 h-0.5 bg-white rounded-full transition-transform duration-300" />
            </div>
          </button>
        </div>
      </div>

      {/* Полноэкранное модальное бургер-меню (мобайл) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* 1. Полноэкранный темный полупрозрачный фон */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 lg:hidden"
            />

            {/* 2. Модальная панель меню, выезжающая справа налево */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[380px] z-50 bg-[#111111] border-l border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.95)] flex flex-col justify-between overflow-y-auto lg:hidden"
            >
              <div>
                {/* Верхняя шапка модального меню */}
                <div className="flex items-center justify-between p-5 border-b border-white/10 bg-[#161616]">
                  <Link
                    to="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 shrink-0"
                  >
                    <img
                      src="/logo.png"
                      alt="Art-Kante"
                      className="w-10 h-10 object-contain"
                    />
                    <span className="text-xs sm:text-sm font-bold tracking-[0.18em] text-[#c58b41] uppercase">
                      ART-KANTE
                    </span>
                  </Link>

                  <div className="flex items-center gap-3">
                    <a
                      href="tel:+74951234567"
                      className="text-[#c58b41] hover:text-[#e0a458] transition-colors p-1.5"
                      title="Позвонить"
                    >
                      <Phone className="w-5 h-5 -rotate-12" />
                    </a>

                    {/* Анимированный крестик */}
                    <motion.button
                      type="button"
                      onClick={() => setMobileMenuOpen(false)}
                      whileHover={{ rotate: 90, scale: 1.1 }}
                      whileTap={{ scale: 0.9, rotate: -90 }}
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 text-white/80 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10"
                      aria-label="Закрыть меню"
                    >
                      <X className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>

                {/* Основные ссылки меню */}
                <div className="p-6 space-y-7">
                  {/* Разделы */}
                  <div className="space-y-3">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-[#c58b41] font-bold">
                      РАЗДЕЛЫ
                    </div>
                    <nav className="flex flex-col space-y-2.5 text-[15px] font-medium text-white/90">
                      <Link
                        to="/philosophy"
                        onClick={() => setMobileMenuOpen(false)}
                        className="hover:text-[#c58b41] transition-colors flex items-center justify-between py-1.5"
                      >
                        <span>Философия</span>
                        <ChevronRight className="w-4 h-4 text-white/30" />
                      </Link>
                      <Link
                        to="/design"
                        onClick={() => setMobileMenuOpen(false)}
                        className="hover:text-[#c58b41] transition-colors flex items-center justify-between py-1.5"
                      >
                        <span>Проектирование</span>
                        <ChevronRight className="w-4 h-4 text-white/30" />
                      </Link>
                      <Link
                        to="/portfolio"
                        onClick={() => setMobileMenuOpen(false)}
                        className="hover:text-[#c58b41] transition-colors flex items-center justify-between py-1.5"
                      >
                        <span>Портфолио</span>
                        <ChevronRight className="w-4 h-4 text-white/30" />
                      </Link>
                      <Link
                        to="/inspiration"
                        onClick={() => setMobileMenuOpen(false)}
                        className="hover:text-[#c58b41] transition-colors flex items-center justify-between py-1.5"
                      >
                        <span>Вдохновение</span>
                        <ChevronRight className="w-4 h-4 text-white/30" />
                      </Link>
                      <Link
                        to="/concepts"
                        onClick={() => setMobileMenuOpen(false)}
                        className="hover:text-[#c58b41] transition-colors flex items-center justify-between py-1.5"
                      >
                        <span>Каталог</span>
                        <ChevronRight className="w-4 h-4 text-white/30" />
                      </Link>
                      <Link
                        to="/favorites"
                        onClick={() => setMobileMenuOpen(false)}
                        className="hover:text-[#c58b41] transition-colors flex items-center justify-between py-1.5"
                      >
                        <span>Избранное</span>
                        <ChevronRight className="w-4 h-4 text-white/30" />
                      </Link>
                    </nav>
                  </div>

                  {/* Категории */}
                  <div className="space-y-3 pt-5 border-t border-white/10">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-bold">
                      КАТЕГОРИИ
                    </div>
                    <nav className="flex flex-col space-y-2.5 text-[14px] font-semibold text-white/80 uppercase">
                      {CATEGORY_MENUS.map((cat) => (
                        <Link
                          key={cat.id}
                          to={cat.link}
                          onClick={() => setMobileMenuOpen(false)}
                          className="hover:text-[#c58b41] transition-colors flex items-center justify-between py-1.5"
                        >
                          <span>{cat.title}</span>
                          <ChevronRight className="w-4 h-4 text-white/30" />
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>

              {/* Нижний блок контактов в меню */}
              <div className="p-6 border-t border-white/10 bg-[#0d0d0d] space-y-2">
                <div className="text-xs text-white/60 font-light">
                  г. Москва, Центр дизайна Artplay, стр. 12
                </div>
                <a
                  href="tel:+74951234567"
                  className="text-base font-bold text-white hover:text-[#c58b41] transition-colors block"
                >
                  +7 (495) 123-45-67
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
