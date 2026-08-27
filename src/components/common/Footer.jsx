import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-[#0e0e0e] text-white border-t border-[#222222] pt-14 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          {/* Левая колонка: Логотип + Навигация + Политика */}
          <div className="md:col-span-4 lg:col-span-3 space-y-6">
            {/* Квадратный логотип из public/logo.png */}
            <Link
              to="/"
              className="bg-[#b86326] hover:bg-[#a6571e] inline-flex items-center justify-center w-28 h-28 transition-colors shadow-lg overflow-hidden p-2"
            >
              <img
                src="/logo.png"
                alt="Art-Kante — Бюро каминов"
                className="w-full h-full object-contain"
              />
            </Link>

            {/* Ссылки */}
            <nav className="flex flex-col space-y-2.5 text-sm font-normal text-white/90">
              <Link
                to="/philosophy"
                className="hover:text-[#b86326] transition-colors"
              >
                Философия
              </Link>
              <Link
                to="/design"
                className="hover:text-[#b86326] transition-colors"
              >
                Проектирование
              </Link>
              <Link
                to="/inspiration"
                className="hover:text-[#b86326] transition-colors"
              >
                Вдохновение
              </Link>
            </nav>

            {/* Политика конфиденциальности */}
            <div className="pt-2">
              <Link
                to="/privacy"
                className="text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                Политика конфиденциальности
              </Link>
            </div>
          </div>

          {/* Средняя колонка: Концепты */}
          <div className="md:col-span-4 lg:col-span-4 space-y-5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Концепты:
            </h3>

            <div className="space-y-4">
              {/* Загородный дом */}
              <Link
                to="/concepts"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-9 h-9 flex items-center justify-center shrink-0">
                  <svg
                    className="w-8 h-8 text-white/80 group-hover:text-[#b86326] transition-colors"
                    viewBox="0 0 28 28"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  >
                    <polygon points="14 3 3 13 25 13" />
                    <rect x="4" y="13" width="20" height="11" />
                    <line x1="4" y1="24" x2="24" y2="13" />
                  </svg>
                </div>
                <span className="text-xs font-medium uppercase tracking-wider text-white/90 group-hover:text-[#b86326] transition-colors">
                  Загородный дом
                </span>
              </Link>

              {/* Городская квартира */}
              <Link
                to="/concepts"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-9 h-9 flex items-center justify-center shrink-0">
                  <svg
                    className="w-8 h-8 text-white/80 group-hover:text-[#b86326] transition-colors"
                    viewBox="0 0 28 28"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  >
                    <line x1="2" y1="25" x2="26" y2="25" />
                    <path d="M5 25V11l4-3v17" />
                    <path d="M11 25V5l6-2v22" />
                    <path d="M19 25V14l4-2v13" />
                  </svg>
                </div>
                <span className="text-xs font-medium uppercase tracking-wider text-white/90 group-hover:text-[#b86326] transition-colors">
                  Городская квартира
                </span>
              </Link>

              {/* Общественные места */}
              <Link
                to="/concepts"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-9 h-9 flex items-center justify-center shrink-0">
                  <svg
                    className="w-8 h-8 text-white/80 group-hover:text-[#b86326] transition-colors"
                    viewBox="0 0 28 28"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  >
                    <line x1="2" y1="25" x2="26" y2="25" />
                    <polygon points="14 4 6 13 14 25 22 13" />
                    <line x1="14" y1="4" x2="14" y2="25" />
                    <line x1="6" y1="13" x2="22" y2="13" />
                    <line x1="3" y1="25" x2="10" y2="16" />
                    <line x1="25" y1="25" x2="18" y2="16" />
                  </svg>
                </div>
                <span className="text-xs font-medium uppercase tracking-wider text-white/90 group-hover:text-[#b86326] transition-colors">
                  Общественные места
                </span>
              </Link>

              {/* Облицовка */}
              <Link
                to="/concepts"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-9 h-9 flex items-center justify-center shrink-0">
                  <svg
                    className="w-8 h-8 text-white/80 group-hover:text-[#b86326] transition-colors"
                    viewBox="0 0 28 28"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  >
                    <rect x="3" y="6" width="22" height="16" />
                    <line x1="3" y1="14" x2="25" y2="14" />
                  </svg>
                </div>
                <span className="text-xs font-medium uppercase tracking-wider text-white/90 group-hover:text-[#b86326] transition-colors">
                  Облицовка
                </span>
              </Link>
            </div>
          </div>

          {/* Правая колонка: Контакты */}
          <div className="md:col-span-4 lg:col-span-5 space-y-5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Контакты:
            </h3>

            <div className="space-y-3.5 text-xs text-white/80">
              {/* Телефон */}
              <div className="flex items-center gap-3.5">
                <svg
                  className="w-4 h-4 text-white/70 -rotate-12 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a
                  href="tel:+74957008090"
                  className="hover:text-[#b86326] transition-colors"
                >
                  +7 (495) 700 80 90
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3.5">
                <svg
                  className="w-4 h-4 text-white/70 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a
                  href="mailto:info@artkante.ru"
                  className="hover:text-[#b86326] transition-colors"
                >
                  info@artkante.ru
                </a>
              </div>

              {/* Адрес */}
              <div className="flex items-start gap-3.5">
                <svg
                  className="w-4 h-4 text-white/70 shrink-0 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="leading-relaxed">
                  105120, г. Москва, ул. Сыромятническая Нижняя, д.10, стр.12, офисы 106 и 112
                </span>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-3.5 pt-1">
                <svg
                  className="w-4 h-4 text-white/70 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#b86326] transition-colors"
                >
                  artkante.ru
                </a>
              </div>

              {/* Facebook */}
              <div className="flex items-center gap-3.5">
                <svg
                  className="w-4 h-4 text-white/70 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#b86326] transition-colors"
                >
                  artkante.ru
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
