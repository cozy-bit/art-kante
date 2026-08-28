import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import leftArrowIcon from '../../../assets/icons/left-arrow.png'
import rightArrowIcon from '../../../assets/icons/right-arrow.png'

const TRANSITION_CONFIG = {
  duration: 0.9,
  ease: [0.16, 1, 0.3, 1], // Премиальная плавная кинематографическая кривая
}

export function HeroSection({
  items,
  currentIndex,
  isAnimating,
  resetTimerKey,
  onNext,
  onPrev,
  onSelect,
}) {
  const currentSlide = items[currentIndex]
  const prevIndexRef = useRef(currentIndex)

  // Сохраняем предыдущий слайд как статичную подложку
  useEffect(() => {
    prevIndexRef.current = currentIndex
  }, [currentIndex])

  const prevSlide = items[prevIndexRef.current]

  // Автопереключение слайдов каждые 7 секунд с автосбросом при ручном переключении
  useEffect(() => {
    const timer = setInterval(() => {
      onNext()
    }, 7000)
    return () => clearInterval(timer)
  }, [onNext, resetTimerKey, currentIndex])

  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-4 sm:pt-6 pb-4 select-none">
      {/* Главный контейнер Hero баннера */}
      <div className="relative w-full min-h-[480px] sm:min-h-[540px] md:min-h-[620px] lg:min-h-[680px] overflow-hidden rounded-none shadow-[0_20px_50px_rgba(0,0,0,0.85)] bg-[#101010]">
        {/* 1. Базовый нижний слой: Предыдущий слайд (исключает мерцания) */}
        {prevSlide && (
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img
              src={prevSlide.image}
              alt={prevSlide.title}
              className="w-full h-full object-cover object-center brightness-[0.95] contrast-[1.03]"
            />
          </div>
        )}

        {/* 2. Поднимающаяся и расширяющаяся карточка (Shared Layout Morph без деформации пропорций) */}
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide.id}
            layoutId={`slide-card-${currentSlide.id}`}
            transition={TRANSITION_CONFIG}
            style={{ willChange: 'transform' }}
            className="absolute inset-0 z-[1] overflow-hidden transform-gpu"
          >
            <motion.img
              layout="position"
              transition={TRANSITION_CONFIG}
              src={currentSlide.image}
              alt={currentSlide.title}
              className="w-full h-full object-cover object-center brightness-[0.95] contrast-[1.03]"
            />
          </motion.div>
        </AnimatePresence>

        {/* Затемняющие градиенты для идеальной читаемости текста */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent z-[2] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e]/50 via-transparent to-black/30 z-[2] pointer-events-none" />

        {/* 3. Текстовый блок с кинематическим выездом снизу (y: 30 -> 0) с задержкой */}
        <div className="relative z-10 p-6 sm:p-10 md:p-14 lg:p-16 max-w-4xl min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.55, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: 'transform, opacity' }}
              className="space-y-3 sm:space-y-4 pt-2 sm:pt-4 transform-gpu"
            >
              {/* Заголовок: Цельные слова с правильными межсловными пробелами */}
              <div className="flex flex-wrap items-baseline gap-x-3 sm:gap-x-4 gap-y-1">
                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white uppercase tracking-[0.16em] sm:tracking-[0.24em] leading-tight font-sans">
                  {currentSlide.title}
                </h1>
                <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-light text-white/80 lowercase tracking-wider">
                  {currentSlide.badge}
                </span>
              </div>

              {/* Подзаголовок */}
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-light text-white/90 lowercase tracking-[0.12em] sm:tracking-[0.16em]">
                {currentSlide.subtitle}
              </p>

              {/* Слоган */}
              <div className="pt-6 sm:pt-10 md:pt-12">
                <p className="text-[11px] sm:text-xs md:text-sm lg:text-base font-normal text-white uppercase tracking-[0.24em] sm:tracking-[0.32em]">
                  {currentSlide.slogan}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 4. Статично закрепленная нижняя панель управления: Защита от спам-кликов и 7-секундная шкала */}
        <div
          className={`absolute bottom-8 sm:bottom-12 md:bottom-14 left-6 sm:left-10 md:left-14 lg:left-16 z-20 flex items-center gap-8 sm:gap-12 transition-opacity duration-300 ${isAnimating ? 'pointer-events-none' : 'pointer-events-auto'
            }`}
        >
          {/* Стрелки увеличенного размера чисто белого цвета */}
          <div className="flex items-center gap-6 sm:gap-8">
            <button
              type="button"
              onClick={onPrev}
              disabled={isAnimating}
              aria-label="Предыдущий слайд"
              className="group p-2 flex items-center justify-center cursor-pointer transition-transform active:scale-90 disabled:opacity-50"
            >
              <img
                src={leftArrowIcon}
                alt="Назад"
                className="w-7 sm:w-9 md:w-10 h-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 group-hover:-translate-x-1 transition-all filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]"
              />
            </button>

            <button
              type="button"
              onClick={onNext}
              disabled={isAnimating}
              aria-label="Следующий слайд"
              className="group p-2 flex items-center justify-center cursor-pointer transition-transform active:scale-90 disabled:opacity-50"
            >
              <img
                src={rightArrowIcon}
                alt="Вперед"
                className="w-7 sm:w-9 md:w-10 h-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 group-hover:translate-x-1 transition-all filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]"
              />
            </button>
          </div>

          {/* Индикаторы слайдов с плавно заполняющейся полосой Framer Motion */}
          <div className="flex items-center gap-2 sm:gap-3">
            {items.map((_, idx) => {
              const isActive = idx === currentIndex

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => onSelect(idx)}
                  disabled={isAnimating}
                  aria-label={`Слайд ${idx + 1}`}
                  className="cursor-pointer py-2 group flex items-center disabled:cursor-default"
                >
                  {isActive ? (
                    /* Активная полоса, которая плавно заполняется белым за 7 секунд */
                    <div className="w-8 sm:w-12 h-[2px] bg-white/25 overflow-hidden relative">
                      <motion.div
                        key={`${currentIndex}-${resetTimerKey}`}
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 7, ease: 'linear' }}
                        className="h-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                      />
                    </div>
                  ) : (
                    /* Неактивная полоса */
                    <div className="w-4 sm:w-6 h-[1.5px] bg-white/35 group-hover:bg-white/70 transition-colors" />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
