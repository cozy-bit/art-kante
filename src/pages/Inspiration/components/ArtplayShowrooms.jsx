import { Card } from '../../../components/ui/Card'
import showroom106 from '../../../assets/images/common/showroom-106.png'
import showroom112 from '../../../assets/images/common/showroom-112.png'

const SHOWROOMS = [
  { image: showroom106, label: 'Шоурум', number: '106' },
  { image: showroom112, label: 'Шоурум', number: '112' },
]

export function ArtplayShowrooms() {
  return (
    <section className='pb-14 sm:pb-20'>
      <Card
        variant='inset'
        className='mx-auto max-w-5xl rounded-xl p-6 sm:p-10 lg:p-12'
      >
        <div className='mb-8 text-center sm:mb-12'>
          <p className='mx-auto mb-3 max-w-md text-[11px] font-light leading-snug tracking-wide text-white/60 sm:text-[13px]'>
            Приглашаем в комфортные, удобные для встреч и презентаций шоурумы
          </p>
          <h2 className='text-base font-semibold uppercase tracking-[0.25em] text-[#df8f37] sm:text-2xl sm:tracking-[0.45em]'>
            Центр дизайна ARTPLAY
          </h2>
          <h3 className='mt-1 text-xs font-medium uppercase tracking-[0.3em] text-[#df8f37] sm:text-lg sm:tracking-[0.4em]'>
            строение 12
          </h3>
        </div>

        <div className='flex flex-col items-center gap-8 md:grid md:grid-cols-3 md:items-start lg:gap-10'>
          <figure className='order-1 flex w-full flex-col items-center md:order-1'>
            <div className='w-full overflow-hidden rounded-lg border border-white/10 shadow-lg'>
              <img
                src={SHOWROOMS[0].image}
                alt='Шоурум 106'
                className='h-48 w-full object-cover sm:h-52 md:h-44 lg:h-48'
              />
            </div>
            <figcaption className='mt-2.5 flex gap-3 text-xs font-medium uppercase tracking-[0.3em] text-[#df8f37] sm:text-sm'>
              <span>{SHOWROOMS[0].label}</span>
              <span>{SHOWROOMS[0].number}</span>
            </figcaption>
          </figure>

          <div className='order-3 flex w-full flex-col items-center gap-5 px-2 text-center md:order-2'>
            <div>
              <div className='mb-1 text-[11px] font-bold uppercase tracking-widest text-white sm:text-xs'>
                Часы работы:
              </div>
              <div className='space-y-0.5 text-xs font-light text-white/70'>
                <div>Пн–Пт: 11:00 – 20:00</div>
                <div>Сб: 12:00 – 20:00</div>
                <div>Вс: по согласованию</div>
              </div>
            </div>
            <div>
              <div className='mb-1 text-[11px] font-bold uppercase tracking-widest text-white sm:text-xs'>
                Адрес:
              </div>
              <div className='text-xs font-light leading-relaxed text-white/70'>
                105120, г. Москва, ул. Сыромятническая Нижняя, д.10, стр.12
                <br />
                (м. Курская, м. Чкаловская)
              </div>
            </div>
            <div className='flex flex-col gap-1.5'>
              <a
                href='https://yandex.ru/maps'
                target='_blank'
                rel='noreferrer'
                className='text-[11px] font-semibold uppercase tracking-[0.18em] text-[#df8f37] underline underline-offset-4 transition-colors hover:text-[#f3a44d]'
              >
                открыть схему проезда
              </a>
              <a
                href='https://yandex.ru/maps'
                target='_blank'
                rel='noreferrer'
                className='text-[11px] font-semibold uppercase tracking-[0.18em] text-[#df8f37] underline underline-offset-4 transition-colors hover:text-[#f3a44d]'
              >
                дорога от метро
              </a>
            </div>
          </div>

          <figure className='order-2 flex w-full flex-col items-center md:order-3'>
            <div className='w-full overflow-hidden rounded-lg border border-white/10 shadow-lg'>
              <img
                src={SHOWROOMS[1].image}
                alt='Шоурум 112'
                className='h-48 w-full object-cover sm:h-52 md:h-44 lg:h-48'
              />
            </div>
            <figcaption className='mt-2.5 flex gap-3 text-xs font-medium uppercase tracking-[0.3em] text-[#df8f37] sm:text-sm'>
              <span>{SHOWROOMS[1].label}</span>
              <span>{SHOWROOMS[1].number}</span>
            </figcaption>
          </figure>
        </div>
      </Card>
    </section>
  )
}
