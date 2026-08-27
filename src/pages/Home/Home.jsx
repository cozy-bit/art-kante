import { useState, useCallback, useRef, useEffect } from 'react'
import { LayoutGroup } from 'framer-motion'
import { ROTATING_ITEMS } from './data/homeSlides'
import { HeroSection } from './components/HeroSection'
import { CategoriesSection } from './components/CategoriesSection'
import { FounderSection } from './components/FounderSection'
import { DesignIdeasSection } from './components/DesignIdeasSection'
import { WorkflowSection } from './components/WorkflowSection'
import { PartnersSection } from './components/PartnersSection'
import { ShowroomsSection } from './components/ShowroomsSection'
import { ConsultationModal } from './components/ConsultationModal'

const ANIMATION_DURATION_MS = 900

export function Home() {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [resetTimerKey, setResetTimerKey] = useState(0)
  const animTimeoutRef = useRef(null)

  const [modalData, setModalData] = useState({
    isOpen: false,
    title: '',
    subtitle: '',
  })

  // Блокировка спам-кликов и запуск перехода
  const triggerTransition = useCallback(
    (targetIndex) => {
      if (isAnimating || targetIndex === currentHeroIndex) return

      setIsAnimating(true)
      setCurrentHeroIndex(targetIndex)
      setResetTimerKey((prev) => prev + 1)

      if (animTimeoutRef.current) {
        clearTimeout(animTimeoutRef.current)
      }

      animTimeoutRef.current = setTimeout(() => {
        setIsAnimating(false)
      }, ANIMATION_DURATION_MS)
    },
    [isAnimating, currentHeroIndex]
  )

  // Переход к следующему слайду
  const handleNext = useCallback(() => {
    const nextIndex = (currentHeroIndex + 1) % ROTATING_ITEMS.length
    triggerTransition(nextIndex)
  }, [currentHeroIndex, triggerTransition])

  // Переход к предыдущему слайду
  const handlePrev = useCallback(() => {
    const prevIndex =
      (currentHeroIndex - 1 + ROTATING_ITEMS.length) % ROTATING_ITEMS.length
    triggerTransition(prevIndex)
  }, [currentHeroIndex, triggerTransition])

  // Прямой выбор слайда по пагинации
  const handleSelectIndex = useCallback(
    (index) => {
      triggerTransition(index)
    },
    [triggerTransition]
  )

  // Клик по карточке категории плавно перемещает ее в Hero
  const handleSelectCard = useCallback(
    (card) => {
      const targetIndex = ROTATING_ITEMS.findIndex((item) => item.id === card.id)
      if (targetIndex !== -1) {
        triggerTransition(targetIndex)
      }
    },
    [triggerTransition]
  )

  // Очистка таймера анимации при размонтировании
  useEffect(() => {
    return () => {
      if (animTimeoutRef.current) {
        clearTimeout(animTimeoutRef.current)
      }
    }
  }, [])

  // 4 карточки категорий, циклически следующие за текущим активным слайдом в Hero
  const visibleCategoryCards = [1, 2, 3, 4].map(
    (offset) =>
      ROTATING_ITEMS[(currentHeroIndex + offset) % ROTATING_ITEMS.length]
  )

  const handleOpenModal = (data = {}) => {
    setModalData({
      isOpen: true,
      title: data.title || 'ЗАКАЗАТЬ КОНСУЛЬТАЦИЮ',
      subtitle:
        data.subtitle ||
        'Оставьте контакты и мы свяжемся с вами для детального расчета',
    })
  }

  const handleCloseModal = () => {
    setModalData((prev) => ({ ...prev, isOpen: false }))
  }

  return (
    <div className="w-full bg-[#0e0e0e] text-white min-h-screen">
      {/* Группа общей компоновки для кинематографического Shared Element Transition */}
      <LayoutGroup id="hero-carousel">
        {/* 1. Первый экран: Hero слайдер */}
        <HeroSection
          items={ROTATING_ITEMS}
          currentIndex={currentHeroIndex}
          isAnimating={isAnimating}
          resetTimerKey={resetTimerKey}
          onNext={handleNext}
          onPrev={handlePrev}
          onSelect={handleSelectIndex}
        />

        {/* 2. Сетка категорий: Карточки поднимаются в Hero без искажения пропорций */}
        <CategoriesSection
          cards={visibleCategoryCards}
          isAnimating={isAnimating}
          onSelectCard={handleSelectCard}
        />
      </LayoutGroup>

      {/* 3. Секция основателя: Ирина Новоселова */}
      <FounderSection onOpenModal={handleOpenModal} />

      {/* 4. Воплощение дизайнерской идеи: Коллаж и плашки */}
      <DesignIdeasSection onOpenModal={handleOpenModal} />

      {/* 5. Комплексная реализация проекта: 3 шага с тиснением */}
      <WorkflowSection />

      {/* 6. Слайдер партнеров: Нам доверяют */}
      <PartnersSection />

      {/* 7. Шоурумы Artplay: Фото и контакты */}
      <ShowroomsSection onOpenModal={handleOpenModal} />

      {/* Интерактивное модальное окно обратной связи */}
      <ConsultationModal
        isOpen={modalData.isOpen}
        onClose={handleCloseModal}
        data={modalData}
      />
    </div>
  )
}

export default Home
