
const WORK_STEPS = [
  {
    number: '1',
    title: 'ОЗНАКОМЛЕНИЕ С ТЕХНИЧЕСКОЙ ДОКУМЕНТАЦИЕЙ',
  },
  {
    number: '2',
    title: 'ОБСУЖДЕНИЕ ЗАДАЧ И ЦЕЛЕЙ ПРОЕКТА',
  },
  {
    number: '3',
    title: 'BIM-ПРОЕКТИРОВАНИЕ',
  },
  {
    number: '4',
    title: 'СОГЛАСОВАНИЕ/ЗАВЕРШЕНИЕ',
  },
]

export default function DesignHero() {
  return (
    <section className="pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 text-white select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Главный заголовок страницы */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-white mb-10 sm:mb-14 md:mb-16">
          Проектирование
        </h1>

        {/* Сетка: левая колонка с описанием + правая с этапами работы */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-20 items-start">
          {/* Левая колонка: 3 описательных параграфа */}
          <div className="md:col-span-6 lg:col-span-6 space-y-6 sm:space-y-8 text-sm sm:text-base text-[#999999] font-light leading-[1.7] max-w-xl">
            <p>
              Делаем визуализации и рабочие чертежи в программах: ArchiCad, 3Ds Max, Revit,
              Palette Cad, Inventor
            </p>
            <p>
              Предоставляем 3d модель для интеграции в проект, работаем с BIM
            </p>
            <p>
              При помощи современных технологий у бюро есть возможность зайти в проект и
              подобрать вариант очага под интерьер на любом этапе строительства.
            </p>
          </div>

          {/* Правая колонка: Этапы работы с кастомными 3D-неоморфными цифрами */}
          <div className="hidden md:block md:col-span-6 lg:col-span-6 md:pl-4 lg:pl-10">
            <h2 className="text-xs font-normal text-white/70 tracking-[0.18em] uppercase mb-8 sm:mb-10">
              ЭТАПЫ РАБОТЫ:
            </h2>

            <div className="space-y-6 sm:space-y-7">
              {WORK_STEPS.map((step, idx) => (
                <div key={idx} className="flex items-center gap-5 sm:gap-6 group">
                  {/* Кастомная жирная неоморфная цифра */}
                  <div className="w-12 sm:w-14 lg:w-16 h-14 sm:h-16 shrink-0 flex items-center justify-center">
                    <span
                      className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tighter select-none leading-none transition-all duration-300 group-hover:scale-105"
                      style={{
                        color: '#141414',
                        fontFamily: '"Montserrat", "Inter", "Arial Black", system-ui, sans-serif',
                        fontWeight: 900,
                        textShadow:
                          '2px 2px 4px rgba(0, 0, 0, 0.95), -1px -1px 2px rgba(255, 255, 255, 0.08), 0 0 1px rgba(255, 255, 255, 0.04)',
                      }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Заголовок этапа */}
                  <span className="text-xs sm:text-[13px] md:text-sm font-bold text-white tracking-[0.06em] uppercase leading-snug max-w-[280px]">
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
