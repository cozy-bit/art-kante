import { useState } from 'react'
import { Link } from 'react-router-dom'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-[#0e0e0e] text-white border-b border-[#222222] select-none sticky top-0 z-50">
      <div className="w-full flex items-stretch min-h-[90px]">
        {/* Логотип из public/logo.png */}
        <Link
          to="/"
          className="flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity  h-[90px] w-[90px] sm:w-[100px] overflow-hidden shadow-lg"
        >
          <img
            src="/logo.png"
            alt="Art-Kante — Бюро каминов"
            className="w-full h-full object-contain "
          />
        </Link>

        {/* Десктопное меню (двухуровневое) */}
        <div className="hidden lg:flex flex-1 flex-col justify-between py-2.5 px-8 xl:px-12 bg-[#0e0e0e]">
          {/* Верхняя строка: золотистые ссылки, Избранное и Телефон */}
          <div className="flex items-center justify-between text-[13px] font-medium text-[#c58b41] pb-1.5 border-b border-white/[0.04]">
            <nav className="flex items-center gap-6 xl:gap-9">
              <Link
                to="/philosophy"
                className="hover:text-[#e0a458] transition-colors"
              >
                Философия
              </Link>
              <Link
                to="/concepts"
                className="hover:text-[#e0a458] transition-colors"
              >
                Проектирование
              </Link>
              <Link
                to="/concepts"
                className="hover:text-[#e0a458] transition-colors"
              >
                Портфолио
              </Link>
              <Link
                to="/concepts"
                className="hover:text-[#e0a458] transition-colors"
              >
                Вдохновение
              </Link>
              <Link
                to="/philosophy"
                className="hover:text-[#e0a458] transition-colors"
              >
                Контакты
              </Link>
            </nav>

            <div className="flex items-center gap-6 xl:gap-8">
              <Link
                to="/concepts"
                className="hover:text-[#e0a458] transition-colors"
              >
                Избранное
              </Link>
              <a
                href="tel:+78000000000"
                className="text-[#c58b41] hover:text-[#e0a458] transition-colors p-1"
                title="Позвонить"
              >
                {/* Иконка телефона под углом как на референсе */}
                <svg
                  className="w-5 h-5 -rotate-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Нижняя строка: белые категории с выпадающим списком и Instagram */}
          <div className="flex items-center justify-between pt-1.5">
            <nav className="flex items-center gap-6 xl:gap-9 text-xs xl:text-[13px] font-semibold tracking-wider text-white uppercase">
              <button
                type="button"
                className="flex items-center gap-1.5 hover:text-[#b86326] transition-colors cursor-pointer"
              >
                <span>ЗАГОРОДНЫЙ ДОМ</span>
                <span className="text-[8px] opacity-70">▼</span>
              </button>
              <button
                type="button"
                className="flex items-center gap-1.5 hover:text-[#b86326] transition-colors cursor-pointer"
              >
                <span>ГОРОДСКАЯ КВАРТИРА</span>
                <span className="text-[8px] opacity-70">▼</span>
              </button>
              <button
                type="button"
                className="flex items-center gap-1.5 hover:text-[#b86326] transition-colors cursor-pointer"
              >
                <span>ОБЩЕСТВЕННЫЕ ПРОСТРАНСТВА</span>
                <span className="text-[8px] opacity-70">▼</span>
              </button>
              <button
                type="button"
                className="flex items-center gap-1.5 hover:text-[#b86326] transition-colors cursor-pointer"
              >
                <span>ОБЛИЦОВКА</span>
                <span className="text-[8px] opacity-70">▼</span>
              </button>
            </nav>

            <div className="flex items-center">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-white/80 hover:text-white transition-colors p-1"
                title="Instagram"
              >
                {/* Иконка Instagram */}
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Мобильная кнопка меню */}
        <div className="flex lg:hidden flex-1 items-center justify-end px-6 gap-4">
          <a
            href="tel:+78000000000"
            className="text-[#c58b41] hover:text-[#e0a458] transition-colors"
          >
            <svg
              className="w-5 h-5 -rotate-12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 hover:text-[#b86326] transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Выпадающее мобильное меню */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#121212] px-6 py-6 space-y-6">
          <div className="space-y-3">
            <div className="text-[11px] uppercase tracking-widest text-[#c58b41] font-semibold">
              Разделы
            </div>
            <nav className="flex flex-col space-y-2 text-sm text-[#c58b41]">
              <Link
                to="/philosophy"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-white transition-colors"
              >
                Философия
              </Link>
              <Link
                to="/concepts"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-white transition-colors"
              >
                Проектирование
              </Link>
              <Link
                to="/concepts"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-white transition-colors"
              >
                Портфолио
              </Link>
              <Link
                to="/concepts"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-white transition-colors"
              >
                Вдохновение
              </Link>
              <Link
                to="/philosophy"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-white transition-colors"
              >
                Контакты
              </Link>
              <Link
                to="/concepts"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-white transition-colors"
              >
                Избранное
              </Link>
            </nav>
          </div>

          <div className="space-y-3 pt-4 border-t border-white/5">
            <div className="text-[11px] uppercase tracking-widest text-white/50 font-semibold">
              Категории
            </div>
            <nav className="flex flex-col space-y-2 text-sm font-medium text-white uppercase">
              <button
                type="button"
                className="text-left hover:text-[#b86326] transition-colors"
              >
                Загородный дом
              </button>
              <button
                type="button"
                className="text-left hover:text-[#b86326] transition-colors"
              >
                Городская квартира
              </button>
              <button
                type="button"
                className="text-left hover:text-[#b86326] transition-colors"
              >
                Общественные пространства
              </button>
              <button
                type="button"
                className="text-left hover:text-[#b86326] transition-colors"
              >
                Облицовка
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
