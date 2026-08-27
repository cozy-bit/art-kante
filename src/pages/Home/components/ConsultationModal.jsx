import { useState, useEffect } from 'react'
import { X, CheckCircle, Phone, User, MessageSquare } from 'lucide-react'
import { Button } from '../../../components/ui/Button'

export function ConsultationModal({ isOpen, onClose, data }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [comment, setComment] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setIsSubmitted(false)
      setError('')
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!phone.trim()) {
      setError('Пожалуйста, введите ваш номер телефона')
      return
    }
    setIsSubmitted(true)
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
    >
      <div className="relative w-full max-w-lg bg-[#141414] border border-white/10 rounded-none p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.95)] overflow-hidden">
        {/* Кнопка закрытия */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрыть модальное окно"
          className="absolute top-5 right-5 w-9 h-9 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white flex items-center justify-center transition-colors cursor-pointer rounded-none border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 mx-auto bg-[#b86326]/20 border border-[#b86326]/50 flex items-center justify-center text-[#d69853]">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold tracking-wider text-white uppercase">
              Заявка принята!
            </h3>
            <p className="text-sm text-white/75 font-light leading-relaxed max-w-xs mx-auto">
              Спасибо за обращение! Наш специалист свяжется с вами в ближайшее время.
            </p>
            <div className="pt-4">
              <Button onClick={onClose} className="py-3 px-8 text-xs rounded-none">
                ЗАКРЫТЬ
              </Button>
            </div>
          </div>
        ) : (
          <div>
            {/* Заголовок модального окна */}
            <div className="text-center space-y-2 mb-6">
              <h3 className="text-lg sm:text-xl font-bold tracking-[0.16em] text-white uppercase">
                {data?.title || 'ЗАКАЗАТЬ КОНСУЛЬТАЦИЮ'}
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-light">
                {data?.subtitle || 'Оставьте контакты и мы свяжемся с вами для детального расчета'}
              </p>
            </div>

            {/* Форма */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 bg-red-950/50 border border-red-800/50 text-xs text-red-300 text-center">
                  {error}
                </div>
              )}

              {/* Поле Имя */}
              <div className="space-y-1">
                <label className="text-[11px] uppercase tracking-wider text-white/60 font-medium block">
                  Ваше имя
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Иван"
                    className="w-full bg-[#1c1c1c] border border-white/10 rounded-none pl-10 pr-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#b86326] transition-colors"
                  />
                </div>
              </div>

              {/* Поле Телефон */}
              <div className="space-y-1">
                <label className="text-[11px] uppercase tracking-wider text-white/60 font-medium block">
                  Телефон *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value)
                      if (error) setError('')
                    }}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full bg-[#1c1c1c] border border-white/10 rounded-none pl-10 pr-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#b86326] transition-colors"
                  />
                </div>
              </div>

              {/* Поле Комментарий */}
              <div className="space-y-1">
                <label className="text-[11px] uppercase tracking-wider text-white/60 font-medium block">
                  Пожелания к проекту (опционально)
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-white/40" />
                  <textarea
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Например: камин в загородный дом, площадь гостиной 50 м²"
                    className="w-full bg-[#1c1c1c] border border-white/10 rounded-none pl-10 pr-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#b86326] transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Кнопка отправки */}
              <div className="pt-3">
                <Button
                  type="submit"
                  className="w-full py-4 text-xs sm:text-sm tracking-[0.2em] font-semibold rounded-none"
                >
                  ОТПРАВИТЬ ЗАЯВКУ
                </Button>
              </div>

              <p className="text-[10px] text-white/40 text-center leading-relaxed">
                Нажимая кнопку, вы соглашаетесь с условиями политики конфиденциальности и обработки
                персональных данных
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
