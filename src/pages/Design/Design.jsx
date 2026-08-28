import React, { useState } from 'react'
import DesignHero from './components/DesignHero'
import DesignBadges from './components/DesignBadges'
import ProjectsSlider from './components/ProjectsSlider'
import { ShowroomsBlock } from '../../components/common/ShowroomsBlock'
import { ConsultationModal } from '../Home/components/ConsultationModal'

export function Design() {
  const [modalData, setModalData] = useState({
    isOpen: false,
    title: '',
    subtitle: '',
  })

  const handleOpenModal = (data = {}) => {
    setModalData({
      isOpen: true,
      title: data.title || 'ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК',
      subtitle:
        data.subtitle || 'Мы свяжемся с вами в течение 15 минут для консультации',
    })
  }

  const handleCloseModal = () => {
    setModalData((prev) => ({ ...prev, isOpen: false }))
  }

  return (
    <div className="w-full bg-[#0e0e0e] text-white min-h-screen">
      {/* 1. Верхний блок «Проектирование» */}
      <DesignHero />

      {/* 2. Полоса преимуществ с 3 плашками (скрыта на мобайле) */}
      <DesignBadges />

      {/* 3. Секция примеров проектов со слайдером */}
      <ProjectsSlider />

      {/* 4. Сквозной блок шоурумов Artplay */}
      <ShowroomsBlock onOpenModal={handleOpenModal} />

      {/* Интерактивное модальное окно обратной связи */}
      <ConsultationModal
        isOpen={modalData.isOpen}
        onClose={handleCloseModal}
        data={modalData}
      />
    </div>
  )
}

export default Design
