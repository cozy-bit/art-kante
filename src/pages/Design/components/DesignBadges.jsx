import { Container } from '../../../components/ui/Container'
import badgesBg from '../../../assets/images/design/design-badges-bg.png'

const BADGES = [
  {
    id: 1,
    text: 'ВКЛЮЧАЕМСЯ В ПРОЕКТ НА ЛЮБОМ ЭТАПЕ',
  },
  {
    id: 2,
    text: 'СОПРОВОЖДАЕМ ВСЕ ТЕКУЩИЕ ИЗМЕНЕНИЯ В ВАШЕМ ПРОЕКТЕ',
  },
  {
    id: 3,
    text: 'ГАРАНТИРУЕМ 100% СООТВЕТСТВИЕ ГОТОВОГО ИЗДЕЛИЯ УТВЕРЖДЕННОЙ ВИЗУАЛИЗАЦИИ',
  },
]

export default function DesignBadges() {
  return (
    <section className="hidden md:block my-10 lg:my-16 relative w-full overflow-hidden">
      {/* Фоновое изображение с оверлеем */}
      <div className="relative w-full py-12 lg:py-16">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-75 scale-100"
          style={{ backgroundImage: `url(${badgesBg})` }}
        />
        {/* Затемняющий градиент / оверлей */}
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[0.5px]" />

        {/* Содержимое с 3 плашками */}
        <Container className="relative z-10 max-w-[1240px]">
          <div className="grid grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {BADGES.map((badge) => (
              <div
                key={badge.id}
                className="bg-black/65 backdrop-blur-md border border-white/10 hover:border-[#f37021]/60 hover:bg-black/80 p-6 lg:p-8 flex flex-col items-center justify-center text-center transition-all duration-300 shadow-[0_12px_32px_rgba(0,0,0,0.6)] group"
              >
                {/* Оранжевый фирменный треугольник Art-Kante */}
                <div className="mb-4 text-[#f37021] transition-transform duration-300 group-hover:scale-110">
                  <svg
                    className="w-7 h-7 sm:w-8 sm:h-8"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Внешний контур треугольника */}
                    <polygon
                      points="20,4 37,34 3,34"
                      fill="#121212"
                      stroke="#f37021"
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                    />
                    {/* Внутренний акцент */}
                    <polygon
                      points="20,13 30,31 10,31"
                      fill="#f37021"
                    />
                    {/* Центральный вырез */}
                    <polygon
                      points="20,20 25,29 15,29"
                      fill="#121212"
                    />
                  </svg>
                </div>

                {/* Текст плашки */}
                <p className="text-xs sm:text-[13px] font-bold text-white uppercase tracking-[0.14em] leading-relaxed max-w-[270px]">
                  {badge.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  )
}
