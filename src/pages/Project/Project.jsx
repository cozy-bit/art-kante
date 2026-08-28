import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Heart,
  Share2,
  Check,
  Box,
  Flame,
  Layers,
  ShieldCheck,
  FileText,
  ChevronLeft,
  ArrowRight,
  Maximize2,
} from 'lucide-react'
import { Button } from '../../components/ui/Button'
import { ShowroomsBlock } from '../../components/common/ShowroomsBlock'
import { ConsultationModal } from '../Home/components/ConsultationModal'

// Ассеты камина «Махаон»
import mahaonMain from '../../assets/images/project/mahaon-main.png'
import mahaonThumb1 from '../../assets/images/project/mahaon-thumb-1.png'
import mahaonThumb2 from '../../assets/images/project/mahaon-thumb-2.png'
import mahaonThumb3 from '../../assets/images/project/mahaon-thumb-3.png'
import mahaonThumb4 from '../../assets/images/project/mahaon-thumb-4.png'
import mahaonInterior from '../../assets/images/project/mahaon-interior.png'

import {
  getFavorites,
  saveFavorites,
} from '../../features/project-page/add-to-favorites'

export function Project() {
  const { id } = useParams()
  const projectId = parseInt(id, 10) || 1

  const thumbnails = [mahaonMain, mahaonThumb1, mahaonThumb2, mahaonThumb3, mahaonThumb4]
  const [activePhoto, setActivePhoto] = useState(mahaonMain)
  const [favorites, setFavorites] = useState(() => getFavorites() || [])
  const [copied, setCopied] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState('ЗАПРОСИТЬ РАСЧЕТ ПРОЕКТА')

  useEffect(() => {
    saveFavorites(favorites)
  }, [favorites])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [id])

  const liked = favorites.some((fav) => fav.id === projectId)

  const toggleFavorite = () => {
    if (liked) {
      setFavorites((prev) => prev.filter((fav) => fav.id !== projectId))
    } else {
      setFavorites((prev) => [...prev, { id: projectId, type: 'project' }])
    }
  }

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const openCalculateModal = () => {
    setModalTitle('ЗАПРОСИТЬ РАСЧЕТ ПРОЕКТА «МАХАОН»')
    setModalOpen(true)
  }

  const openBimModal = () => {
    setModalTitle('ПОЛУЧИТЬ 3D МОДЕЛЬ (BIM / ARCHICAD / REVIT)')
    setModalOpen(true)
  }

  return (
    <div className='min-h-screen bg-[#0f0f0f] text-white pb-16 selection:bg-[#c58b41]/30'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10'>
        {/* Хлебные крошки и навигация */}
        <div className='flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10'>
          <nav
            aria-label='Breadcrumb'
            className='flex items-center gap-2 text-xs text-[#737373] tracking-wide'
          >
            <Link
              to='/'
              className='hover:text-white transition-colors duration-200'
            >
              Главная
            </Link>
            <span className='text-[#444444]'>/</span>
            <Link
              to='/concepts'
              className='hover:text-white transition-colors duration-200'
            >
              Каталог
            </Link>
            <span className='text-[#444444]'>/</span>
            <span className='text-[#a3a3a3]'>Камин «Махаон»</span>
          </nav>

          <Link
            to='/concepts'
            className='inline-flex items-center gap-1.5 text-xs text-[#c58b41] hover:text-[#e0a458] transition-colors'
          >
            <ChevronLeft className='w-4 h-4' />
            <span>Вернуться в каталог</span>
          </Link>
        </div>

        {/* ПЕРВЫЙ ЭКРАН: Заголовок + Интерактивная галерея + Информационный блок */}
        <section className='pt-6 sm:pt-10'>
          {/* Заголовок раздела */}
          <div className='mb-6 sm:mb-8'>
            <span className='text-xs uppercase tracking-[0.24em] text-[#c58b41] font-semibold block mb-1'>
              КОНЦЕПТ
            </span>
            <h1 className='text-2xl sm:text-4xl lg:text-[42px] font-light text-white uppercase tracking-wide'>
              Камин «Махаон»
            </h1>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12'>
            {/* ГАЛЕРЕЯ РАКУРСОВ (слева) */}
            <div className='lg:col-span-7 flex flex-col-reverse sm:flex-row gap-4'>
              {/* Вертикальная полоса миниатюр (на мобилке - горизонтальная) */}
              <div className='flex sm:flex-col gap-3 shrink-0 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0'>
                {thumbnails.map((thumb, idx) => (
                  <button
                    key={idx}
                    type='button'
                    onClick={() => setActivePhoto(thumb)}
                    className={`relative w-16 h-16 sm:w-20 sm:h-20 bg-[#141414] overflow-hidden border transition-all cursor-pointer shrink-0 ${
                      activePhoto === thumb
                        ? 'border-[#c58b41] shadow-[0_0_12px_rgba(197,139,65,0.4)] ring-1 ring-[#c58b41]'
                        : 'border-white/10 hover:border-white/30 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={thumb}
                      alt={`Ракурс камина ${idx + 1}`}
                      className='w-full h-full object-cover'
                    />
                  </button>
                ))}
              </div>

              {/* Главное фото камина */}
              <div className='relative flex-1 aspect-[4/3] sm:aspect-[16/12] bg-[#121212] border border-white/10 overflow-hidden shadow-2xl group'>
                <AnimatePresence mode='wait'>
                  <motion.img
                    key={activePhoto}
                    src={activePhoto}
                    alt='Камин «Махаон»'
                    initial={{ opacity: 0.4, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0.4 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className='w-full h-full object-cover'
                  />
                </AnimatePresence>

                {/* Бейдж 3D BIM */}
                <div className='absolute top-3.5 left-3.5 z-20'>
                  <span className='px-3 py-1 bg-black/80 backdrop-blur-md text-[10px] uppercase font-bold tracking-wider text-white border border-white/20 flex items-center gap-1.5 shadow-lg'>
                    <Box className='w-3.5 h-3.5 text-[#c58b41]' />
                    3D BIM Модель
                  </span>
                </div>
              </div>
            </div>

            {/* ИНФОРМАЦИОННЫЙ БЛОК (справа) */}
            <div className='lg:col-span-5 flex flex-col justify-between space-y-6'>
              <div className='space-y-5'>
                {/* Спецификации */}
                <div className='border-t border-b border-white/10 py-5 space-y-3.5 text-xs sm:text-sm'>
                  <div className='flex justify-between items-start gap-4'>
                    <span className='text-white/50 font-light'>Возможные виды топлива:</span>
                    <span className='text-white font-medium text-right'>дрова, био и электро</span>
                  </div>
                  <div className='flex justify-between items-start gap-4'>
                    <span className='text-white/50 font-light'>Размеры (В×Ш×Г):</span>
                    <span className='text-white font-medium text-right'>2400 × 800 × 600 мм</span>
                  </div>
                  <div className='flex justify-between items-start gap-4'>
                    <span className='text-white/50 font-light'>Рекомендуемая площадь:</span>
                    <span className='text-white font-medium text-right'>40 – 60 м²</span>
                  </div>
                </div>

                {/* Описание архитектурных возможностей */}
                <div className='bg-[#141414] border border-white/10 p-4 space-y-2'>
                  <p className='text-xs text-white/80 font-light leading-relaxed'>
                    Идеально для второго света и акцентных интерьеров. Возможны любые цветовые решения и адаптация под планировку вашего дома.
                  </p>
                </div>

                {/* Быстрые действия: 3D модель, В избранное, Поделиться */}
                <div className='grid grid-cols-3 gap-2.5 pt-1'>
                  <button
                    type='button'
                    onClick={openBimModal}
                    className='flex flex-col sm:flex-row items-center justify-center gap-1.5 p-3 bg-[#161616] hover:bg-[#202020] border border-white/10 text-[10px] sm:text-xs uppercase tracking-wider text-white/80 hover:text-white transition-all cursor-pointer text-center'
                  >
                    <Box className='w-4 h-4 text-[#c58b41]' />
                    <span>3D модель</span>
                  </button>

                  <button
                    type='button'
                    onClick={toggleFavorite}
                    className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 p-3 border text-[10px] sm:text-xs uppercase tracking-wider transition-all cursor-pointer text-center ${
                      liked
                        ? 'border-[#f37021] bg-[#f37021]/15 text-[#f37021]'
                        : 'border-white/10 bg-[#161616] hover:bg-[#202020] text-white/80 hover:text-white'
                    }`}
                  >
                    <Heart
                      size={15}
                      className={liked ? 'fill-[#f37021] text-[#f37021]' : ''}
                    />
                    <span>{liked ? 'В избранном' : 'В избранное'}</span>
                  </button>

                  <button
                    type='button'
                    onClick={handleShare}
                    className='flex flex-col sm:flex-row items-center justify-center gap-1.5 p-3 bg-[#161616] hover:bg-[#202020] border border-white/10 text-[10px] sm:text-xs uppercase tracking-wider text-white/80 hover:text-white transition-all cursor-pointer text-center'
                  >
                    {copied ? (
                      <>
                        <Check className='w-4 h-4 text-[#f37021]' />
                        <span className='text-[#f37021]'>Скопировано</span>
                      </>
                    ) : (
                      <>
                        <Share2 size={15} />
                        <span>Поделиться</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Главная кнопка расчета со стрелкой */}
              <div className='pt-2'>
                <Button
                  onClick={openCalculateModal}
                  className='w-full py-4 text-xs sm:text-sm font-semibold tracking-[0.2em] rounded-none flex items-center justify-center gap-2 group'
                >
                  <span>ЗАПРОСИТЬ РАСЧЕТ ПРОЕКТА</span>
                  <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ВТОРОЙ ЭКРАН: ОПИСАНИЕ КОНЦЕПТА (Текст + Широкое фото интерьера) */}
        <section className='pt-20 sm:pt-28'>
          <div className='border-l-2 border-[#c58b41] pl-3.5 mb-8'>
            <h2 className='text-xl sm:text-2xl font-bold tracking-[0.2em] text-white uppercase'>
              ОПИСАНИЕ КОНЦЕПТА
            </h2>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center'>
            {/* Текстовое описание слева */}
            <div className='lg:col-span-6 space-y-6 text-sm sm:text-base text-white/80 font-light leading-relaxed'>
              <p>
                Камин <span className='text-white font-medium'>«Махаон»</span> — это утонченный союз традиционного изразцового мастерства и современных высокотехнологичных каминных топок. Шамотная теплоемкая конструкция аккумулирует тепло и мягко отдает его в помещение на протяжении 10-12 часов после угасания пламени.
              </p>
              <p>
                Матовая шелковистая поверхность авторских изразцов ручной работы придает порталу благородную глубину. Камин гармонично интегрируется как в ультрасовременный минималистичный интерьер, так и в классическую загородную усадьбу.
              </p>

              {/* Сводные характеристики */}
              <div className='grid grid-cols-2 gap-4 pt-2 border-t border-white/10'>
                <div className='p-3.5 bg-[#141414] border border-white/10'>
                  <div className='text-xs text-white/50 uppercase tracking-wider mb-1'>КПД системы</div>
                  <div className='text-lg font-bold text-[#c58b41]'>82%</div>
                </div>
                <div className='p-3.5 bg-[#141414] border border-white/10'>
                  <div className='text-xs text-white/50 uppercase tracking-wider mb-1'>Тепловая мощность</div>
                  <div className='text-lg font-bold text-white'>2.4 – 14 кВт</div>
                </div>
              </div>
            </div>

            {/* Широкое фото камина в интерьере гостиной справа */}
            <div className='lg:col-span-6'>
              <div className='relative w-full aspect-[4/3] sm:aspect-[16/11] bg-[#141414] border border-white/10 overflow-hidden shadow-2xl group'>
                <img
                  src={mahaonInterior}
                  alt='Камин «Махаон» в интерьере гостиной'
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700'
                  loading='lazy'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none' />
                <div className='absolute bottom-4 left-4 right-4 text-xs text-white/80 font-light backdrop-blur-sm bg-black/40 p-2.5 border border-white/10'>
                  Индивидуальный проект камина «Махаон» в загородном доме
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Сквозной блок шоурумов ARTPLAY */}
        <div className='mt-20 sm:mt-28'>
          <ShowroomsBlock />
        </div>
      </div>

      {/* Модальное окно заявки */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        data={{
          title: modalTitle,
          subtitle: 'Оставьте контакты и мы подготовим сметный расчет и 3D-визуализацию для вашего пространства',
        }}
      />
    </div>
  )
}

export default Project