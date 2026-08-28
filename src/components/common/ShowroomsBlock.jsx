import { useState } from 'react'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { MapPin, Phone, Clock } from 'lucide-react'
import { ConsultationModal } from '../../pages/Home/components/ConsultationModal'
import showroom106 from '../../assets/images/common/showroom-106.png'
import showroom112 from '../../assets/images/common/showroom-112.png'

export function ShowroomsBlock({ onOpenModal, className = '' }) {
  const [internalModalOpen, setInternalModalOpen] = useState(false)

  const handleOpen = () => {
    if (onOpenModal) {
      onOpenModal({
        title: 'ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК',
        subtitle: 'Мы свяжемся с вами в течение 15 минут для консультации',
      })
    } else {
      setInternalModalOpen(true)
    }
  }

  const handleCloseInternal = () => {
    setInternalModalOpen(false)
  }

  return (
    <section className={`py-12 sm:py-16 md:py-24 bg-[#0e0e0e] relative ${className}`}>
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Главная карточка шоурумов */}
        <Card
          variant="inset"
          className="rounded-none p-6 sm:p-10 lg:p-14 relative overflow-hidden"
        >
          {/* Верхняя текстовая плашка */}
          <div className="text-center space-y-2 mb-10 sm:mb-14">
            <p className="text-xs sm:text-sm font-light tracking-[0.22em] sm:tracking-[0.28em] text-white/75 uppercase">
              Приглашаем посетить два действующих шоу-рума
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-[0.16em] sm:tracking-[0.22em] text-[#c58b41] uppercase">
              ЦЕНТР ДИЗАЙНА ARTPLAY
            </h2>
            <p className="text-xs sm:text-sm font-light tracking-[0.2em] text-white/60 uppercase">
              строение 12
            </p>
          </div>

          {/* Сетка шоурумов: Левое фото, Центральная информация, Правое фото */}
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
                <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#c58b41] uppercase">
                  Шоурум 106
                </span>
              </div>
            </div>

            {/* Центральная колонка с контактами */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center space-y-5 py-4 px-2 border-y lg:border-y-0 lg:border-x border-white/5">
              {/* Телефон */}
              <div className="space-y-1">
                <div className="flex items-center justify-center gap-2 text-white/50 text-xs uppercase tracking-wider">
                  <Phone className="w-3.5 h-3.5 text-[#b86326]" />
                  <span>Телефон</span>
                </div>
                <a
                  href="tel:+74951234567"
                  className="text-base sm:text-lg font-semibold tracking-wider text-white hover:text-[#b86326] transition-colors block"
                >
                  +7 (495) 123-45-67
                </a>
              </div>

              {/* Адрес */}
              <div className="space-y-1">
                <div className="flex items-center justify-center gap-2 text-white/50 text-xs uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5 text-[#b86326]" />
                  <span>Адрес</span>
                </div>
                <p className="text-xs sm:text-sm text-white/85 font-light leading-relaxed max-w-[240px]">
                  г. Москва, ул. Нижняя Сыромятническая, д. 10, стр. 12
                </p>
              </div>

              {/* Режим работы */}
              <div className="space-y-1">
                <div className="flex items-center justify-center gap-2 text-white/50 text-xs uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5 text-[#b86326]" />
                  <span>Режим работы</span>
                </div>
                <p className="text-xs sm:text-sm text-white/80 font-light">
                  Пн–Вс с 10:00 до 20:00
                </p>
              </div>

              {/* Ссылка на карту / маршрут */}
              <div className="pt-2">
                <a
                  href="https://yandex.ru/maps/-/CDuWvF9m"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#c58b41] hover:text-[#e0a458] tracking-widest uppercase border-b border-[#c58b41]/40 pb-0.5 transition-colors"
                >
                  Схема проезда на карте →
                </a>
              </div>
            </div>

            {/* Шоурум 112 */}
            <div className="lg:col-span-4 space-y-3 group">
              <div className="rounded-none overflow-hidden border border-white/10 shadow-2xl relative aspect-[4/3] bg-neutral-900">
                <img
                  src={showroom112}
                  alt="Шоурум 112 Artplay"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="text-center">
                <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#c58b41] uppercase">
                  Шоурум 112
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Кнопка снизу по центру */}
        <div className="mt-10 sm:mt-14 flex justify-center">
          <Button
            onClick={handleOpen}
            className="w-full sm:w-auto text-xs sm:text-sm tracking-[0.2em] font-semibold py-4 px-8 sm:px-14 rounded-none"
          >
            ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК
          </Button>
        </div>
      </div>

      {/* Встроенное модальное окно, если родитель не предоставил свой обработчик */}
      {!onOpenModal && (
        <ConsultationModal
          isOpen={internalModalOpen}
          onClose={handleCloseInternal}
          data={{
            title: 'ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК',
            subtitle: 'Мы свяжемся с вами в течение 15 минут для консультации',
          }}
        />
      )}
    </section>
  )
}

export default ShowroomsBlock
