import React from 'react'
import { Container } from '../../../components/ui/Container'

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
    <section className="pt-6 sm:pt-10 md:pt-14 pb-8 sm:pb-12 text-white">
      <Container className="max-w-[1240px]">
        {/* Главный заголовок страницы */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal tracking-normal text-white mb-8 sm:mb-10 md:mb-12">
          Проектирование
        </h1>

        {/* Сетка: левая колонка с описанием + правая с этапами работы */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Левая колонка: 3 описательных параграфа */}
          <div className="md:col-span-7 lg:col-span-7 space-y-4 sm:space-y-6 text-sm sm:text-[15px] md:text-[16px] text-white/80 font-light leading-[1.65]">
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

          {/* Правая колонка: Этапы работы (скрыта на мобильных устройствах) */}
          <div className="hidden md:block md:col-span-5 lg:col-span-5 md:pl-4 lg:pl-8">
            <h2 className="text-xs sm:text-[13px] font-bold text-white/80 tracking-[0.18em] uppercase mb-6 sm:mb-8">
              ЭТАПЫ РАБОТЫ:
            </h2>

            <div className="space-y-4 sm:space-y-6">
              {WORK_STEPS.map((step) => (
                <div key={step.number} className="flex items-center gap-4 sm:gap-6 group">
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-white/20 select-none w-8 sm:w-10 leading-none shrink-0 transition-colors duration-300 group-hover:text-white/40">
                    {step.number}
                  </span>
                  <span className="text-xs sm:text-[13px] font-bold text-white tracking-[0.12em] uppercase leading-snug">
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
