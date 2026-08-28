import { useState } from 'react'
import { Container } from '../../../components/ui/Container'
import projectSlide1 from '../../../assets/images/design/project-slide-1.png'
import projectSlide2 from '../../../assets/images/design/project-slide-2.png'
import projectSlide3 from '../../../assets/images/design/project-slide-3.png'
import projectSlide4 from '../../../assets/images/design/project-slide-4.png'

const PROJECTS = [
  { id: 1, image: projectSlide1, alt: 'Камин в интерьере загородного дома' },
  { id: 2, image: projectSlide2, alt: 'Облицовка камина талькомагнезитом' },
  { id: 3, image: projectSlide3, alt: 'Каминная топка с каменной кладкой' },
  { id: 4, image: projectSlide4, alt: 'Чугунная печь-камин в интерьере кухни-гостиной' },
  { id: 5, image: projectSlide1, alt: 'Проект камина в современном стиле' },
  { id: 6, image: projectSlide2, alt: 'Эксклюзивный каминный портал' },
  { id: 7, image: projectSlide3, alt: 'Дровяной камин с отделкой' },
  { id: 8, image: projectSlide4, alt: 'Классический камин в частном доме' },
  { id: 9, image: projectSlide2, alt: 'Дизайнерский камин с дровником' },
  { id: 10, image: projectSlide3, alt: 'Каминная зона премиум-класса' },
]

export default function ProjectsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const totalProjects = PROJECTS.length

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalProjects - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalProjects - 1 ? 0 : prev + 1))
  }

  // 3 карточки для десктопа
  const desktopSlides = [
    PROJECTS[currentIndex % totalProjects],
    PROJECTS[(currentIndex + 1) % totalProjects],
    PROJECTS[(currentIndex + 2) % totalProjects],
  ]

  // Первые 3 проекта для миниатюр на мобайле (или окно из 3 вокруг активного)
  const mobileThumbnails = PROJECTS.slice(0, 3)

  return (
    <section className="py-8 sm:py-12 md:py-16 text-white">
      <Container className="max-w-[1240px]">
        {/* Верхняя панель: Заголовок и Управление */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 sm:mb-8 md:mb-10">
          {/* Заголовок секции */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal tracking-normal text-white">
            Примеры наших проектов
          </h2>

          {/* Панель со стрелками и счетчиком */}
          <div className="flex items-center gap-4 sm:gap-6 self-start md:self-auto">
            {/* Стрелка влево */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Предыдущий проект"
              className="text-white/70 hover:text-[#f37021] transition-colors p-1.5 cursor-pointer disabled:opacity-30"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Счетчик слайдов */}
            <span className="text-xs sm:text-sm font-light tracking-widest text-white/90 select-none min-w-[36px] text-center">
              {currentIndex + 1}/{totalProjects}
            </span>

            {/* Стрелка вправо */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Следующий проект"
              className="text-white/70 hover:text-[#f37021] transition-colors p-1.5 cursor-pointer disabled:opacity-30"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* 1. Десктопная версия: 3 вертикальные карточки в ряд */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {desktopSlides.map((project, idx) => (
            <div
              key={`${project.id}-${idx}`}
              className="group relative overflow-hidden bg-neutral-900 border border-white/5 shadow-2xl aspect-[3/4] cursor-pointer"
              onClick={() => setCurrentIndex((prev) => (prev + idx) % totalProjects)}
            >
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* 2. Мобильная версия: 1 главное большое фото сверху + 3 миниатюры снизу */}
        <div className="md:hidden space-y-3">
          {/* Главное активное фото */}
          <div className="relative overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl aspect-[3/4] w-full">
            <img
              src={PROJECTS[currentIndex].image}
              alt={PROJECTS[currentIndex].alt}
              className="w-full h-full object-cover transition-all duration-500 brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Сетка из 3 миниатюр снизу */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
            {mobileThumbnails.map((thumb, idx) => {
              const isActive = (currentIndex % mobileThumbnails.length) === idx
              return (
                <button
                  key={thumb.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative overflow-hidden aspect-[4/3] bg-neutral-900 border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'border-[#f37021] ring-1 ring-[#f37021] opacity-100'
                      : 'border-white/10 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={thumb.image}
                    alt={thumb.alt}
                    className="w-full h-full object-cover"
                  />
                  {isActive && (
                    <div className="absolute inset-0 border border-[#f37021]/60 pointer-events-none" />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
