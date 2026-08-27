import { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import partner1 from '../../../assets/images/home/partner-1.png'

import partner2 from '../../../assets/images/home/partner-2.png'
import partner3 from '../../../assets/images/home/partner-3.png'
import partner4 from '../../../assets/images/home/partner-4.png'
import partner5 from '../../../assets/images/home/partner-5.png'
import partner6 from '../../../assets/images/home/partner-6.png'

const partners = [
  {
    id: 1,
    name: 'АРХИТЕКТОР ИЛЬЯ М.',
    role: 'Архитектурное бюро',
    image: partner1,
  },
  {
    id: 2,
    name: 'СТУДИЯ ДИЗАЙНА DS',
    role: 'Премиум интерьеры',
    image: partner2,
  },
  {
    id: 3,
    name: 'МИХАИЛ ОРЛОВ',
    role: 'Частная практика',
    image: partner3,
  },
  {
    id: 4,
    name: 'АРТ-БЮРО ВЕКТОР',
    role: 'Жилые резиденции',
    image: partner4,
  },
  {
    id: 5,
    name: 'АНТОН КОВАЛЕВ',
    role: 'Архитектор-дизайнер',
    image: partner5,
  },
  {
    id: 6,
    name: 'DESIGN LAB MOSCOW',
    role: 'Архитектура и декор',
    image: partner6,
  },
]

export function PartnersSection() {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 10)
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10)
    }
  }

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current
      const scrollAmount = direction === 'left' ? -clientWidth * 0.75 : clientWidth * 0.75
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      setTimeout(checkScrollButtons, 350)
    }
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#0e0e0e] select-none">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок и стрелки переключения */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 sm:mb-12 gap-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light tracking-[0.2em] sm:tracking-[0.25em] text-white uppercase text-center sm:text-left">
            Нам доверяют
          </h2>

          {/* Стрелки слайдера */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              aria-label="Предыдущие партнеры"
              className="w-10 h-10 rounded-none bg-[#161616] border border-white/10 hover:border-[#b86326]/60 text-white/70 hover:text-white disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer group"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              aria-label="Следующие партнеры"
              className="w-10 h-10 rounded-none bg-[#161616] border border-white/10 hover:border-[#b86326]/60 text-white/70 hover:text-white disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer group"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Слайдер карточек партнеров */}
        <div
          ref={scrollRef}
          onScroll={checkScrollButtons}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="min-w-[180px] sm:min-w-[210px] md:min-w-[230px] lg:min-w-[250px] flex-1 shrink-0 snap-start group"
            >
              <div className="bg-[#141414] border border-white/[0.06] rounded-none overflow-hidden shadow-[8px_8px_20px_rgba(0,0,0,0.7)] group-hover:border-[#b86326]/40 transition-all duration-300">
                {/* Ч/Б фото с эффектом проявления цвета при наведении */}
                <div className="aspect-[4/5] overflow-hidden bg-neutral-900 relative">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-80 pointer-events-none" />
                </div>

                {/* Подпись снизу */}
                <div className="p-4 sm:p-5 text-center space-y-2">
                  <h3 className="text-xs sm:text-[13px] font-bold tracking-[0.14em] text-white uppercase group-hover:text-[#d69853] transition-colors leading-tight">
                    {partner.name}
                  </h3>
                  <p className="text-[11px] text-white/50 tracking-wider font-light">
                    {partner.role}
                  </p>

                  {/* Иконки соцсетей / ссылок */}
                  <div className="pt-2 flex items-center justify-center gap-3 text-white/40 group-hover:text-white/75 transition-colors">
                    <span className="p-1 hover:text-[#b86326] transition-colors cursor-pointer" title="Instagram">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </span>
                    <span className="p-1 hover:text-[#b86326] transition-colors cursor-pointer" title="Telegram">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 2L11 13" />
                        <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                      </svg>
                    </span>
                    <span className="p-1 hover:text-[#b86326] transition-colors cursor-pointer" title="Портфолио">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

