import { motion } from 'framer-motion'

const TRANSITION_CONFIG = {
  duration: 0.9,
  ease: [0.16, 1, 0.3, 1], // Премиальная плавная кинематографическая кривая
}

const slotOffsets = [
  'lg:mt-0',
  'lg:mt-12 xl:mt-14',
  'lg:mt-0',
  'lg:mt-16 xl:mt-20',
]

export function CategoriesSection({ cards, isAnimating, onSelectCard }) {
  return (
    <section className="py-6 sm:py-10 md:py-16 bg-[#0e0e0e] select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Сетка из 4 вытянутых вертикальных карточек со смещением по высоте */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 items-start">
          {cards.map((card, index) => {
            const offsetClass = slotOffsets[index] || 'lg:mt-0'

            return (
              /* Статичная подложка слота (исключает пустые дыры при отрыве карточки) */
              <div
                key={`slot-${index}`}
                className={`relative w-full h-[440px] sm:h-[480px] md:h-[520px] lg:h-[560px] xl:h-[600px] bg-[#121212] border border-white/[0.04] shadow-[10px_10px_30px_rgba(0,0,0,0.85)] overflow-hidden ${offsetClass}`}
              >
                <motion.button
                  key={card.id}
                  type="button"
                  layout
                  layoutId={`slide-card-${card.id}`}
                  transition={TRANSITION_CONFIG}
                  onClick={() => onSelectCard(card)}
                  disabled={isAnimating}
                  style={{ willChange: 'transform' }}
                  className={`group relative block w-full h-full text-left rounded-none overflow-hidden bg-[#121212] border border-white/[0.04] hover:border-white/25 shadow-[10px_10px_30px_rgba(0,0,0,0.85)] cursor-pointer transform-gpu ${
                    isAnimating ? 'pointer-events-none' : 'pointer-events-auto'
                  }`}
                  title={`Показать "${card.cardLabel || card.title}" в главном экране`}
                >
                  {/* Фотография карточки с layout="position" для сохранения правильных пропорций */}
                  <div className="absolute inset-0 overflow-hidden bg-[#101010]">
                    <motion.img
                      layout="position"
                      transition={TRANSITION_CONFIG}
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105 brightness-[0.85] group-hover:brightness-100"
                    />
                  </div>

                  {/* Затемнение снизу для читаемости надписи */}
                  <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none z-10" />

                  {/* Тонкий акцентный световой индикатор сверху при hover */}
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#b86326] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                  {/* Название категории */}
                  <div className="absolute inset-x-0 bottom-6 z-20 px-4 text-center pointer-events-none">
                    <span className="text-xs sm:text-[13px] font-normal tracking-[0.18em] sm:tracking-[0.22em] text-white uppercase group-hover:text-white transition-colors drop-shadow-md inline-block">
                      {card.cardLabel || card.title}
                    </span>
                  </div>
                </motion.button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
