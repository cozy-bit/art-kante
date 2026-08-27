import { Button } from '../../../components/ui/Button'
import designIdea1 from '../../../assets/images/home/design-idea-1.png'
import designIdea2 from '../../../assets/images/home/design-idea-2.png'
import designIdea3 from '../../../assets/images/home/design-idea-3.png'

// Иконка-треугольник Art-Kante для плашек
function ArtKanteTriangleIcon({ className = 'w-6 h-6' }) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
        {/* Внешний контур */}
        <polygon
          points="16,4 29,27 3,27"
          className="stroke-[#C06402] fill-[#181818]"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Внутренний акцент */}
        <polygon
          points="16,11 23,24 9,24"
          className="fill-[#C06402]/20 stroke-[#C06402]/60"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        {/* Центральная точка */}
        <circle cx="16" cy="19" r="1.5" className="fill-[#C06402]" />
      </svg>
    </div>
  )
}

export function DesignIdeasSection({ onOpenModal }) {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[#0e0e0e] relative overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-[0.22em] sm:tracking-[0.3em] text-white uppercase text-center mb-10 sm:mb-16 md:mb-20">
          ВОПЛОЩЕНИЕ ЛЮБОЙ ДИЗАЙНЕРСКОЙ ИДЕИ
        </h2>

        {/* Композиция / Коллаж интерьеров с плашками */}
        <div className="relative">
          {/* Десктопная сложная многослойная композиция */}
          <div className="hidden lg:block relative min-h-[920px]">
            {/* Картинка 1: Основное верхнее интерьерное фото */}
            <div className="w-[68%] h-[420px] rounded-none overflow-hidden border border-white/10 shadow-[15px_15px_35px_rgba(0,0,0,0.85)] relative group">
              <img
                src={designIdea1}
                alt="Дизайн камина в гостиной"
                className="w-full h-full object-cover brightness-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30 pointer-events-none" />
            </div>

            {/* Плашка 1: Правый верхний блок (перекрывает фото 1) */}
            <div className="absolute top-28 right-4 w-[420px] z-20">
              <div className="bg-[#121212]/92 backdrop-blur-xl border border-white/10 p-6 rounded-none shadow-[15px_15px_35px_rgba(0,0,0,0.9)] hover:border-[#b86326]/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <ArtKanteTriangleIcon className="w-8 h-8 mt-0.5" />
                  <div className="space-y-2">
                    <h3 className="text-xs sm:text-[13px] font-bold tracking-[0.18em] text-white uppercase leading-snug">
                      ОБЛЕКАЕМ ВАШУ ИДЕЮ В ВИЗУАЛЬНУЮ ФОРМУ
                    </h3>
                    <p className="text-xs text-white/70 font-light leading-relaxed">
                      Создаем детальные 3D-визуализации и планы привязки, которые на 100% соответствуют
                      будущему камину.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Картинка 2: Среднее интерьерное фото (сдвинуто вправо) */}
            <div className="absolute top-[280px] right-[60px] w-[62%] h-[380px] rounded-none overflow-hidden border border-white/10 shadow-[15px_15px_35px_rgba(0,0,0,0.85)] z-10 group">
              <img
                src={designIdea2}
                alt="Интерьер с изразцовой печью"
                className="w-full h-full object-cover brightness-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-black/30 pointer-events-none" />
            </div>

            {/* Плашка 2: Средний левый блок (перекрывает фото 2) */}
            <div className="absolute top-[380px] left-8 w-[440px] z-20">
              <div className="bg-[#121212]/92 backdrop-blur-xl border border-white/10 p-6 rounded-none shadow-[15px_15px_35px_rgba(0,0,0,0.9)] hover:border-[#b86326]/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <ArtKanteTriangleIcon className="w-8 h-8 mt-0.5" />
                  <div className="space-y-2">
                    <h3 className="text-xs sm:text-[13px] font-bold tracking-[0.18em] text-white uppercase leading-snug">
                      РАЗРАБАТЫВАЕМ ОПТИМАЛЬНУЮ ИНЖЕНЕРИЮ ПРОЕКТА
                    </h3>
                    <p className="text-xs text-white/70 font-light leading-relaxed">
                      Рассчитываем тепловую мощность, дымоходные каналы, узлы примыкания и системы
                      вентиляции для безупречной работы.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Картинка 3: Нижнее фото */}
            <div className="absolute top-[520px] left-0 w-[55%] h-[360px] rounded-none overflow-hidden border border-white/10 shadow-[15px_15px_35px_rgba(0,0,0,0.85)] z-10 group">
              <img
                src={designIdea3}
                alt="Монтаж и интеграция камина"
                className="w-full h-full object-cover brightness-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Плашка 3: Нижний правый блок */}
            <div className="absolute top-[620px] right-12 w-[480px] z-20">
              <div className="bg-[#121212]/95 backdrop-blur-xl border border-white/10 p-6 rounded-none shadow-[15px_15px_35px_rgba(0,0,0,0.9)] hover:border-[#b86326]/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <ArtKanteTriangleIcon className="w-8 h-8 mt-0.5" />
                  <div className="space-y-2.5">
                    <h3 className="text-xs sm:text-[13px] font-bold tracking-[0.18em] text-white uppercase leading-snug">
                      ПРЕДОСТАВЛЯЕМ РАЗРАБОТКИ ДЛЯ ИНТЕГРАЦИИ В АРХИТЕКТУРНЫЙ ПРОЕКТ
                    </h3>
                    <div className="pt-1">
                      <span className="text-[11px] text-[#c58b41] font-semibold uppercase tracking-wider block mb-1">
                        Работаем в программах:
                      </span>
                      <div className="flex flex-wrap gap-1.5 text-[11px] text-white/80 font-medium">
                        <span className="px-2 py-0.5 bg-white/5 border border-white/10">ArchiCad</span>
                        <span className="px-2 py-0.5 bg-white/5 border border-white/10">3Ds Max</span>
                        <span className="px-2 py-0.5 bg-white/5 border border-white/10">Revit</span>
                        <span className="px-2 py-0.5 bg-white/5 border border-white/10">Palette Cad</span>
                        <span className="px-2 py-0.5 bg-white/5 border border-white/10">Inventor</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Мобильная и планшетная адаптивная версия (аккуратный вертикальный стек) */}
          <div className="lg:hidden space-y-8">
            {/* Блок 1 */}
            <div className="space-y-4">
              <div className="overflow-hidden border border-white/10 shadow-xl aspect-[16/10] relative">
                <img
                  src={designIdea1}
                  alt="Дизайн камина"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#141414] border border-white/10 p-5 rounded-none shadow-lg">
                <div className="flex items-start gap-3">
                  <ArtKanteTriangleIcon className="w-7 h-7 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold tracking-[0.16em] text-white uppercase mb-1">
                      ОБЛЕКАЕМ ВАШУ ИДЕЮ В ВИЗУАЛЬНУЮ ФОРМУ
                    </h3>
                    <p className="text-xs text-white/70 font-light leading-relaxed">
                      Создаем детальные 3D-визуализации и планы привязки, которые на 100% соответствуют
                      будущему камину.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Блок 2 */}
            <div className="space-y-4">
              <div className="overflow-hidden border border-white/10 shadow-xl aspect-[16/10] relative">
                <img
                  src={designIdea2}
                  alt="Интерьер с изразцовой печью"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#141414] border border-white/10 p-5 rounded-none shadow-lg">
                <div className="flex items-start gap-3">
                  <ArtKanteTriangleIcon className="w-7 h-7 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold tracking-[0.16em] text-white uppercase mb-1">
                      РАЗРАБАТЫВАЕМ ОПТИМАЛЬНУЮ ИНЖЕНЕРИЮ ПРОЕКТА
                    </h3>
                    <p className="text-xs text-white/70 font-light leading-relaxed">
                      Рассчитываем тепловую мощность, дымоходные каналы, узлы примыкания и системы
                      вентиляции для безупречной работы.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Блок 3 */}
            <div className="space-y-4">
              <div className="overflow-hidden border border-white/10 shadow-xl aspect-[16/10] relative">
                <img
                  src={designIdea3}
                  alt="Монтаж и интеграция камина"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#141414] border border-white/10 p-5 rounded-none shadow-lg">
                <div className="flex items-start gap-3">
                  <ArtKanteTriangleIcon className="w-7 h-7 mt-0.5" />
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold tracking-[0.16em] text-white uppercase">
                      ПРЕДОСТАВЛЯЕМ РАЗРАБОТКИ ДЛЯ ИНТЕГРАЦИИ В АРХИТЕКТУРНЫЙ ПРОЕКТ
                    </h3>
                    <div>
                      <span className="text-[11px] text-[#c58b41] font-semibold uppercase tracking-wider block mb-1">
                        Работаем в программах:
                      </span>
                      <div className="flex flex-wrap gap-1.5 text-[10px] text-white/80 font-medium">
                        <span className="px-2 py-0.5 bg-white/5 border border-white/10">ArchiCad</span>
                        <span className="px-2 py-0.5 bg-white/5 border border-white/10">3Ds Max</span>
                        <span className="px-2 py-0.5 bg-white/5 border border-white/10">Revit</span>
                        <span className="px-2 py-0.5 bg-white/5 border border-white/10">Palette Cad</span>
                        <span className="px-2 py-0.5 bg-white/5 border border-white/10">Inventor</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Кнопка снизу по центру */}
        <div className="mt-12 sm:mt-16 md:mt-20 flex justify-center">
          <Button
            onClick={() =>
              onOpenModal &&
              onOpenModal({
                title: 'ПРЕДВАРИТЕЛЬНАЯ ОЦЕНКА ПРОЕКТА',
                subtitle: 'Рассчитаем стоимость и технические параметры вашего камина',
              })
            }
            className="w-full sm:w-auto text-xs sm:text-sm tracking-[0.2em] font-semibold py-4 px-6 sm:px-12 rounded-none"
          >
            ПОЛУЧИТЬ ПРЕДВАРИТЕЛЬНУЮ ОЦЕНКУ ПРОЕКТА
          </Button>
        </div>
      </div>
    </section>
  )
}
