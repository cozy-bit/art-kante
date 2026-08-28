import React from 'react'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import showroom106 from '../../assets/images/common/showroom-106.png'
import showroom112 from '../../assets/images/common/showroom-112.png'

export function ShowroomsBlock({ onOpenModal, className = '' }) {
  return (
    <section className={`py-12 sm:py-16 md:py-24 bg-[#0e0e0e] relative ${className}`}>
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Главная карточка шоурумов */}
        <Card
          variant="inset"
          className="rounded-none p-6 sm:p-10 lg:p-14 relative overflow-hidden bg-[#111111] border border-white/[0.04] shadow-[inset_0_4px_30px_rgba(0,0,0,0.8)]"
        >
          {/* Верхняя текстовая плашка */}
          <div className="text-center space-y-2 mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm font-light tracking-[0.22em] sm:tracking-[0.28em] text-white/70 uppercase">
              Приглашаем в комфортные, удобные для встреч и презентаций шоурумы
            </p>
            <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold tracking-[0.22em] sm:tracking-[0.3em] text-[#f37021] uppercase">
              Ц Е Н Т Р &nbsp; Д И З А Й Н А &nbsp; A R T P L A Y
            </h2>
            <p className="text-xs sm:text-sm font-light tracking-[0.25em] sm:tracking-[0.3em] text-[#f37021]/90 uppercase">
              с т р о е н и е &nbsp; 1 2
            </p>
          </div>

          {/* Сетка шоурумов: Десктоп (3 колонки) / Мобайл (вертикально) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            {/* Шоурум 106 */}
            <div className="lg:col-span-4 space-y-3 group">
              <div className="rounded-none overflow-hidden border border-white/10 shadow-2xl relative aspect-[4/3] bg-neutral-900">
                <img
                  src={showroom106}
                  alt="Шоурум 106 Artplay"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="text-center">
                <span className="text-xs sm:text-sm font-bold tracking-[0.28em] text-[#f37021] uppercase">
                  Ш о у р у м &nbsp; 1 0 6
                </span>
              </div>
            </div>

            {/* Шоурум 112 на мобайле идет сразу после 106 (в десктопе он в 3-й колонке) */}
            <div className="lg:hidden space-y-3 group">
              <div className="rounded-none overflow-hidden border border-white/10 shadow-2xl relative aspect-[4/3] bg-neutral-900">
                <img
                  src={showroom112}
                  alt="Шоурум 112 Artplay"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="text-center">
                <span className="text-xs sm:text-sm font-bold tracking-[0.28em] text-[#f37021] uppercase">
                  Ш о у р у м &nbsp; 1 1 2
                </span>
              </div>
            </div>

            {/* Центральная колонка с контактами */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center space-y-6 py-2 px-2 border-t lg:border-t-0 border-white/5 pt-6 lg:pt-0">
              {/* Часы работы */}
              <div className="space-y-1.5">
                <div className="text-white/60 text-[11px] font-semibold uppercase tracking-[0.18em]">
                  ЧАСЫ РАБОТЫ:
                </div>
                <div className="text-xs sm:text-sm text-white/80 font-light space-y-0.5">
                  <p>Пн-Пт: 11:00 - 20:00</p>
                  <p>Сб: 12:00 - 20:00</p>
                  <p>Вс: по согласованию</p>
                </div>
              </div>

              {/* Адрес */}
              <div className="space-y-1.5">
                <div className="text-white/60 text-[11px] font-semibold uppercase tracking-[0.18em]">
                  АДРЕС:
                </div>
                <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed max-w-[280px]">
                  105120, г. Москва, ул. Сыромятническая Нижняя, д.10, стр.12,
                  <br />
                  <span className="text-white/60 text-xs">(м.Курская, м.Чкаловская)</span>
                </p>
              </div>

              {/* Ссылка на карту / маршрут */}
              <div className="pt-1">
                <a
                  href="https://yandex.ru/maps/-/CDuWvF9m"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#c58b41] hover:text-[#f37021] tracking-wider uppercase transition-colors block leading-relaxed hover:underline underline-offset-4"
                >
                  <div>открыть схему проезда</div>
                  <div className="text-[11px] text-white/50">дорога от метро</div>
                </a>
              </div>
            </div>

            {/* Шоурум 112 (Десктопная 3-я колонка) */}
            <div className="hidden lg:block lg:col-span-4 space-y-3 group">
              <div className="rounded-none overflow-hidden border border-white/10 shadow-2xl relative aspect-[4/3] bg-neutral-900">
                <img
                  src={showroom112}
                  alt="Шоурум 112 Artplay"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="text-center">
                <span className="text-xs sm:text-sm font-bold tracking-[0.28em] text-[#f37021] uppercase">
                  Ш о у р у м &nbsp; 1 1 2
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Кнопка снизу по центру */}
        <div className="mt-10 sm:mt-14 flex justify-center">
          <Button
            onClick={() =>
              onOpenModal &&
              onOpenModal({
                title: 'ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК',
                subtitle: 'Мы свяжемся с вами в течение 15 минут для консультации',
              })
            }
            className="w-full sm:w-auto text-xs sm:text-sm tracking-[0.2em] font-semibold py-4 px-8 sm:px-14 rounded-none"
          >
            ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ShowroomsBlock
