import { useEffect, useState } from 'react'
import { Check, X } from 'lucide-react'
import { Button } from '../../../components/ui/Button'

export function CallbackCta() {
  const [isOpen, setIsOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', agree: true })

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = ''
      return
    }
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen])

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setIsOpen(false)
      setForm({ name: '', phone: '', agree: true })
    }, 2000)
  }

  return (
    <section className='flex justify-center pb-16 sm:pb-20'>
      <Button
        onClick={() => setIsOpen(true)}
        className='w-full max-w-md px-6 py-4 text-xs sm:w-auto sm:px-16 sm:text-sm'
      >
        Заказать обратный звонок
      </Button>

      {isOpen && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm'
          onClick={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false)
          }}
        >
          <div className='relative w-full max-w-[560px] border border-white/10 bg-[#0d0d0d] shadow-[0_25px_60px_rgba(0,0,0,0.95)]'>
            <button
              type='button'
              onClick={() => setIsOpen(false)}
              aria-label='Закрыть'
              className='absolute top-4 right-4 z-10 cursor-pointer p-1 text-white/70 transition-colors hover:text-white'
            >
              <X className='h-5 w-5' strokeWidth={1.5} />
            </button>

            <div className='border-b border-white/5 bg-[#171717] px-6 py-7 text-center'>
              <h2 className='text-lg font-normal tracking-wide text-white sm:text-xl'>
                Заказать обратный звонок
              </h2>
            </div>

            <div className='bg-[#0c0c0c] px-6 py-9'>
              {submitted ? (
                <div className='space-y-2 py-6 text-center text-white'>
                  <div className='mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-[#e03122]/20 text-[#e03122]'>
                    <Check className='h-6 w-6' strokeWidth={2.5} />
                  </div>
                  <h3 className='text-base font-medium'>Спасибо за заявку!</h3>
                  <p className='text-xs text-white/70'>
                    Мы свяжемся с вами в ближайшее время.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className='mx-auto max-w-[340px] space-y-4'
                >
                  <input
                    type='text'
                    required
                    placeholder='Ваше имя'
                    value={form.name}
                    onChange={(event) =>
                      setForm({ ...form, name: event.target.value })
                    }
                    className='w-full border border-white/5 bg-[#202020] px-4 py-3.5 text-sm text-white placeholder:text-[#777777] focus:border-[#e03122]/60 focus:outline-none'
                  />
                  <input
                    type='tel'
                    required
                    placeholder='Ваш телефон'
                    value={form.phone}
                    onChange={(event) =>
                      setForm({ ...form, phone: event.target.value })
                    }
                    className='w-full border border-white/5 bg-[#202020] px-4 py-3.5 text-sm text-white placeholder:text-[#777777] focus:border-[#e03122]/60 focus:outline-none'
                  />
                  <label className='flex items-start gap-2.5 pt-1 text-[11px] leading-snug text-[#737373]'>
                    <input
                      type='checkbox'
                      required
                      checked={form.agree}
                      onChange={(event) =>
                        setForm({ ...form, agree: event.target.checked })
                      }
                      className='mt-0.5 accent-[#e03122]'
                    />
                    <span>
                      Нажимая на кнопку, я соглашаюсь с политикой
                      конфиденциальности
                    </span>
                  </label>
                  <button
                    type='submit'
                    className='w-full cursor-pointer bg-[#e03122] py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#c9271a] sm:text-sm'
                  >
                    Отправить
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
