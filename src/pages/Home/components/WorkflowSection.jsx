import { Card } from '../../../components/ui/Card'

const steps = [
  {
    number: '1',
    title: 'ПРОЕКТИРОВАНИЕ',
    description:
      'Анализ архитектурных чертежей, выезд на замер, разработка дизайн-концепции и детального инженерного проекта с 3D-визуализацией.',
  },
  {
    number: '2',
    title: 'КОМПЛЕКТАЦИЯ ПОД КЛЮЧ',
    description:
      'Прямой импорт премиальных европейских каминных топок, сертифицированных дымоходных систем и индивидуальный подбор отделочных материалов.',
  },
  {
    number: '3',
    title: 'МОНТАЖ',
    description:
      'Профессиональная установка сертифицированными инженерами, соблюдение всех норм пожарной безопасности, первый розжиг и гарантийное обслуживание.',
  },
]

export function WorkflowSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[#0e0e0e] relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <Card
          variant="inset"
          className="rounded-none p-6 sm:p-10 lg:p-16 relative overflow-hidden"
        >
          {/* Крупное 3D-тиснение логотипа Art-Kante на заднем плане справа */}
          <div className="absolute right-[-40px] md:right-4 lg:right-10 top-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] lg:w-[480px] h-[300px] sm:h-[400px] lg:h-[480px] pointer-events-none opacity-25 md:opacity-40 select-none">
            <svg
              viewBox="0 0 400 400"
              fill="none"
              className="w-full h-full filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.9)]"
            >
              {/* Внешний объемный треугольник */}
              <polygon
                points="200,30 370,350 30,350"
                stroke="url(#triangleGlow)"
                strokeWidth="18"
                fill="#101010"
                className="opacity-90"
              />
              {/* Внутренняя грань с тенью */}
              <polygon
                points="200,75 330,330 70,330"
                stroke="rgba(0,0,0,0.8)"
                strokeWidth="8"
                fill="#0d0d0d"
              />
              {/* Глубокий центр */}
              <polygon
                points="200,125 295,305 105,305"
                stroke="rgba(255,255,255,0.04)"
                strokeWidth="6"
                fill="#0a0a0a"
              />

              <defs>
                <linearGradient id="triangleGlow" x1="30" y1="30" x2="370" y2="350" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#ffffff" stopOpacity="0.12" />
                  <stop offset="0.5" stopColor="#C06402" stopOpacity="0.3" />
                  <stop offset="1" stopColor="#000000" stopOpacity="0.8" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="relative z-10">
            {/* Главный заголовок секции */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light tracking-[0.18em] sm:tracking-[0.25em] text-white uppercase max-w-2xl leading-snug mb-10 sm:mb-14">
              КОМПЛЕКСНАЯ РЕАЛИЗАЦИЯ ПРОЕКТА НА ЛЮБОМ ЭТАПЕ СТРОИТЕЛЬСТВА
            </h2>

            {/* Список из 3 шагов */}
            <div className="space-y-8 sm:space-y-12 max-w-xl">
              {steps.map((step) => (
                <div key={step.number} className="flex items-start gap-5 sm:gap-8 group">
                  {/* Крупная тонкая цифра шага */}
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-white/25 group-hover:text-[#C06402] transition-colors duration-300 shrink-0 w-10 sm:w-12 leading-none font-mono">
                    {step.number}
                  </div>

                  {/* Текст шага */}
                  <div className="space-y-2 pt-1">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold tracking-[0.2em] text-white uppercase group-hover:text-[#C06402] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-accent-orange font-normal leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
