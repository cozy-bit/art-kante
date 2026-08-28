import { Card } from '../../../components/ui/Card'
import showroom106 from '../../../assets/images/common/showroom-106.png'
import showroom112 from '../../../assets/images/common/showroom-112.png'

function Showroom({ image, number }) {
  return (
    <figure className='flex w-full flex-col items-center'>
      <div className='w-full overflow-hidden border border-white/10 shadow-lg'>
        <img
          src={image}
          alt={`Шоурум ${number}`}
          className='h-44 w-full object-cover sm:h-52 md:h-48'
        />
      </div>
      <figcaption className='mt-3 text-sm uppercase tracking-[0.35em] text-[#e07b2e] sm:text-base'>
        Шоурум&nbsp;&nbsp;{number}
      </figcaption>
    </figure>
  )
}

export function ArtplayShowrooms() {
  return (
    <section className='pb-14 sm:pb-20'>
      <Card variant='inset' className='rounded-2xl p-8 sm:p-12 lg:p-14'>
        <div className='text-center'>
          <p className='text-sm text-white/90 sm:text-[15px]'>
            Приглашаем в комфортные, удобные для встреч и презентаций шоурумы
          </p>
          <h2 className='mt-5 text-lg uppercase tracking-[0.3em] text-[#e07b2e] sm:text-2xl sm:tracking-[0.35em] lg:text-[28px]'>
            Центр дизайна ARTPLAY
          </h2>
          <p className='mt-2 text-sm tracking-[0.3em] text-[#e07b2e] sm:text-xl'>
            строение 12
          </p>
        </div>

        <div className='mt-10 flex flex-col items-center gap-8 md:grid md:grid-cols-3 md:items-start lg:gap-10'>
          <div className='order-1 w-full md:order-1'>
            <Showroom image={showroom106} number='106' />
          </div>

          <div className='order-3 flex flex-col items-center gap-6 text-center md:order-2'>
            <div>
              <div className='mb-1.5 text-xs font-bold uppercase tracking-widest text-white'>
                Часы работы:
              </div>
              <div className='space-y-0.5 text-sm text-white/65'>
                <div>Пн-Пт: 11:00 - 20:00</div>
                <div>Сб: 12:00 - 20:00</div>
                <div>Вс: по согласованию</div>
              </div>
            </div>
            <div>
              <div className='mb-1.5 text-xs font-bold uppercase tracking-widest text-white'>
                Адрес:
              </div>
              <div className='text-sm leading-relaxed text-white/65'>
                105120, г. Москва, ул. Сыромятническая Нижняя, д.10, стр.12,
                (м.Курская, м.Чкаловская)
              </div>
            </div>
            <div className='flex flex-col gap-1.5 pt-1'>
              <a
                href='https://yandex.ru/maps'
                target='_blank'
                rel='noreferrer'
                className='text-xs text-[#e07b2e] transition-colors hover:text-[#f3a44d]'
              >
                открыть схему проезда
              </a>
              <a
                href='https://yandex.ru/maps'
                target='_blank'
                rel='noreferrer'
                className='text-xs text-[#e07b2e] transition-colors hover:text-[#f3a44d]'
              >
                дорога от метро
              </a>
            </div>
          </div>

          <div className='order-2 w-full md:order-3'>
            <Showroom image={showroom112} number='112' />
          </div>
        </div>
      </Card>
    </section>
  )
}
