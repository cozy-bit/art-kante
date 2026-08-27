import { Button } from '../../../components/ui/Button'
import { Card } from '../../../components/ui/Card'
import founderIrina from '../../../assets/images/home/founder-irina.png'

export function FounderSection({ onOpenModal }) {
  return (
    <section className="py-8 sm:py-14 md:py-18 bg-[#0e0e0e]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <Card
          variant="inset"
          className="rounded-none p-6 sm:p-10 lg:p-14 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-10">
            {/* Левая колонка: Фото Ирины Новоселовой */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-none rounded-none overflow-hidden shadow-[12px_12px_30px_rgba(0,0,0,0.85)] border border-white/10 group">
                <img
                  src={founderIrina}
                  alt="Ирина Новоселова — основатель и руководитель Art-Kante"
                  className="w-full h-auto max-h-[460px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Правая колонка: Текст и кнопка */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-6 text-center lg:text-left">
              {/* Подзаголовок должности */}
              <div className="text-xs sm:text-sm font-medium tracking-[0.25em] sm:tracking-[0.3em] text-[#C06402] uppercase">
                основатель и руководитель
              </div>

              {/* Имя и Фамилия */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-extrabold tracking-[0.12em] sm:tracking-[0.16em] text-[#C06402] uppercase leading-tight">
                ИРИНА НОВОСЕЛОВА
              </h2>

              {/* Описание опыта и ценностей */}
              <div className="space-y-4 text-xs sm:text-sm md:text-[15px] leading-relaxed text-white/80 font-light tracking-wide max-w-2xl mx-auto lg:mx-0">
                <p>
                  «Более 10 лет мы проектируем и реализуем камины и барбекю любой сложности,
                  гармонично объединяя архитектурную эстетику, передовую инженерию и безупречную
                  безопасность.
                </p>
                <p>
                  Каждый проект для нас — это синергия искусства и инженерного мастерства. Мы берем на
                  себя полную ответственность за результат: от разработки эскиза до первого теплого
                  огня в вашем доме».
                </p>
              </div>

              {/* Кнопка действия */}
              <div className="pt-2 sm:pt-4 flex justify-center lg:justify-start">
                <Button
                  onClick={() =>
                    onOpenModal &&
                    onOpenModal({
                      title: 'КОНСУЛЬТАЦИЯ РУКОВОДИТЕЛЯ',
                      subtitle: 'Ирина Новоселова ответит на ваши вопросы лично',
                    })
                  }
                  className="w-full sm:w-auto text-xs sm:text-sm tracking-[0.2em] font-semibold py-4 px-6 sm:px-10 rounded-none"
                >
                  ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ РУКОВОДИТЕЛЯ
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
