import { Link } from 'react-router-dom'
import { Shield, Mail, Phone, MapPin } from 'lucide-react'

export function Privacy() {
  return (
    <div className='min-h-screen bg-[#0f0f0f] text-white selection:bg-[#c58b41]/30'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20'>
        {/* Хлебные крошки */}
        <nav
          aria-label='Breadcrumb'
          className='flex items-center gap-2 text-xs text-[#737373] tracking-wide mb-8'
        >
          <Link
            to='/'
            className='hover:text-white transition-colors duration-200'
          >
            Главная
          </Link>
          <span className='text-[#444444]'>/</span>
          <span className='text-[#a3a3a3]'>Политика конфиденциальности</span>
        </nav>

        {/* Шапка страницы */}
        <div className='border-b border-white/10 pb-8 mb-10'>
          <div className='inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-[#c58b41] text-xs uppercase tracking-widest mb-4'>
            <Shield className='w-3.5 h-3.5' />
            <span>Конфиденциальность и безопасность</span>
          </div>
          <h1 className='text-2xl sm:text-4xl font-light tracking-wide text-white leading-tight mb-4'>
            Политика в отношении обработки персональных данных
          </h1>
          <p className='text-sm text-white/50 font-light'>
            Дата последнего обновления: 2026 г. | Бюро каминов Art-Kante
          </p>
        </div>

        {/* Основной контент политики */}
        <div className='space-y-10 text-sm sm:text-base text-white/80 font-light leading-relaxed'>
          {/* 1. Общие положения */}
          <section className='space-y-3'>
            <h2 className='text-lg sm:text-xl font-medium text-white tracking-wide uppercase border-l-2 border-[#c58b41] pl-3'>
              1. Общие положения
            </h2>
            <p>
              Настоящая Политика обработки персональных данных (далее — «Политика») определяет порядок сбора, хранения, передачи и иных видов обработки персональных данных пользователей сайта{' '}
              <span className='text-white font-normal'>artkante.ru</span> (далее — «Сайт»), а также сведения о реализуемых требованиях к защите персональных данных в соответствии с действующим законодательством РФ.
            </p>
            <p>
              Использование сервисов Сайта означает безоговорочное согласие Пользователя с настоящей Политикой и указанными в ней условиями обработки его персональной информации.
            </p>
          </section>

          {/* 2. Цели обработки данных */}
          <section className='space-y-3'>
            <h2 className='text-lg sm:text-xl font-medium text-white tracking-wide uppercase border-l-2 border-[#c58b41] pl-3'>
              2. Цели обработки персональных данных
            </h2>
            <p>Мы собираем и обрабатываем персональные данные исключительно для следующих целей:</p>
            <ul className='list-disc list-inside space-y-2 text-white/70 pl-2'>
              <li>Предоставление консультаций по проектированию, производству и монтажу каминов;</li>
              <li>Расчет сметной стоимости и индивидуальных коммерческих предложений;</li>
              <li>Организация встреч в шоурумах компании (Artplay) и выездов инженеров на объект;</li>
              <li>Предоставление 3D-моделей (BIM, ArchiCad, Revit) архитекторам и дизайнерам;</li>
              <li>Улучшение качества обслуживания и аналитика посещаемости Сайта.</li>
            </ul>
          </section>

          {/* 3. Состав собираемых данных */}
          <section className='space-y-3'>
            <h2 className='text-lg sm:text-xl font-medium text-white tracking-wide uppercase border-l-2 border-[#c58b41] pl-3'>
              3. Состав собираемых персональных данных
            </h2>
            <p>Оператор обрабатывает следующие категории данных, предоставляемых Пользователем:</p>
            <ul className='list-disc list-inside space-y-2 text-white/70 pl-2'>
              <li>Имя, фамилия (при указании в формах обратной связи);</li>
              <li>Контактный номер телефона;</li>
              <li>Адрес электронной почты (E-mail);</li>
              <li>Сведения об объекте и комментарии к заказу (по желанию пользователя);</li>
              <li>Технические файлы cookie и обезличенные данные аналитики (Яндекс.Метрика).</li>
            </ul>
          </section>

          {/* 4. Защита и хранение информации */}
          <section className='space-y-3'>
            <h2 className='text-lg sm:text-xl font-medium text-white tracking-wide uppercase border-l-2 border-[#c58b41] pl-3'>
              4. Защита и хранение персональных данных
            </h2>
            <p>
              Оператор принимает необходимые правовые, организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий третьих лиц.
            </p>
            <p>
              Персональные данные никогда и ни при каких условиях не передаются третьим лицам, за исключением случаев, прямо предусмотренных действующим законодательством РФ.
            </p>
          </section>

          {/* 5. Права пользователя */}
          <section className='space-y-3'>
            <h2 className='text-lg sm:text-xl font-medium text-white tracking-wide uppercase border-l-2 border-[#c58b41] pl-3'>
              5. Права Пользователя
            </h2>
            <p>Пользователь имеет право:</p>
            <ul className='list-disc list-inside space-y-2 text-white/70 pl-2'>
              <li>Получать информацию, касающуюся обработки его персональных данных;</li>
              <li>Требовать уточнения, блокирования или уничтожения своих персональных данных;</li>
              <li>В любой момент отозвать свое согласие на обработку персональных данных, направив соответствующее уведомление Оператору.</li>
            </ul>
          </section>

          {/* 6. Контакты оператора */}
          <section className='space-y-4 pt-4 border-t border-white/10'>
            <h2 className='text-lg sm:text-xl font-medium text-white tracking-wide uppercase border-l-2 border-[#c58b41] pl-3'>
              6. Контакты оператора
            </h2>
            <p className='text-white/70'>
              По всем вопросам, связанным с обработкой персональных данных, вы можете связаться с нами удобным способом:
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2'>
              <div className='p-4 bg-[#141414] border border-white/10 flex items-center gap-3.5'>
                <Mail className='w-5 h-5 text-[#c58b41] shrink-0' />
                <div>
                  <div className='text-xs text-white/50 uppercase tracking-wider'>Электронная почта</div>
                  <a href='mailto:info@artkante.ru' className='text-sm text-white hover:text-[#c58b41] transition-colors'>
                    info@artkante.ru
                  </a>
                </div>
              </div>

              <div className='p-4 bg-[#141414] border border-white/10 flex items-center gap-3.5'>
                <Phone className='w-5 h-5 text-[#c58b41] shrink-0 -rotate-12' />
                <div>
                  <div className='text-xs text-white/50 uppercase tracking-wider'>Телефон</div>
                  <a href='tel:+74957008090' className='text-sm text-white hover:text-[#c58b41] transition-colors'>
                    +7 (495) 700 80 90
                  </a>
                </div>
              </div>

              <div className='sm:col-span-2 p-4 bg-[#141414] border border-white/10 flex items-start gap-3.5'>
                <MapPin className='w-5 h-5 text-[#c58b41] shrink-0 mt-0.5' />
                <div>
                  <div className='text-xs text-white/50 uppercase tracking-wider'>Адрес бюро и шоурумов</div>
                  <div className='text-sm text-white/90'>
                    105120, г. Москва, ул. Сыромятническая Нижняя, д.10, стр.12, Центр дизайна Artplay, офисы 106 и 112
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Privacy
