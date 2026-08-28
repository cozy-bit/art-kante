import { Box, Check, ChevronDown, Heart, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { ShowroomsBlock } from '../../components/common/ShowroomsBlock'
import images from '../../data/project-page-datas/datas'
import {
	getFavorites,
	saveFavorites,
} from '../../features/project-page/add-to-favorites'

export function Concepts() {
	const [favorites, setFavorites] = useState(() => {
		const saved = getFavorites()
		if (saved && saved.length > 0) {
			return saved
		}
		return [
			{ id: 1 },
			{ id: 4 },
			{ id: 6 },
			{ id: 7 },
			{ id: 8 },
			{ id: 14 },
			{ id: 16 },
			{ id: 17 },
		]
	})

	useEffect(() => {
		saveFavorites(favorites)
	}, [favorites])

	const [activeDropdown, setActiveDropdown] = useState('style')
	const [selectedStyle, setSelectedStyle] = useState('КЛАССИЧЕСКИЕ')
	const [visibleCount, setVisibleCount] = useState(20)

	const toggleFavorite = item => {
		const exists = favorites.some(fav => fav.id === item.id)
		let updated
		if (exists) {
			updated = favorites.filter(fav => fav.id !== item.id)
		} else {
			updated = [...favorites, item]
		}
		setFavorites(updated)
	}

	const isLiked = id => favorites.some(fav => fav.id === id)

	const resetFilters = () => {
		setActiveDropdown(null)
		setSelectedStyle('')
	}

	const handleShowMore = () => {
		setVisibleCount(prev => prev + 8)
	}

	return (
		<div className='bg-[#0f0f0f] text-white min-h-screen pb-16 selection:bg-[#c58b41]/30'>
			<div className='max-w-7xl mx-auto px-3 sm:px-6 lg:px-8'>
				{/* Заголовок страницы и Хлебные крошки */}
				<div className='pt-5 sm:pt-8 pb-3 sm:pb-6'>
					{/* Хлебные крошки (для десктопа) */}
					<nav
						aria-label='Breadcrumb'
						className='hidden sm:flex items-center gap-2 text-xs text-[#737373] tracking-wide mb-3'
					>
						<Link
							to='/'
							className='hover:text-white transition-colors duration-200'
						>
							Главная
						</Link>
						<span className='text-[#444444]'>/</span>
						<span className='text-[#a3a3a3]'>Концепты</span>
					</nav>

					{/* Заголовок Концепты (как на мобильном макете) */}
					<h1 className='text-2xl sm:text-3xl font-light tracking-wide text-white'>
						Концепты
					</h1>
				</div>

				{/* Панель фильтров (2 колонки на мобилке, строка на десктопе) */}
				<section className='relative z-20 pb-5 sm:pb-8'>
					<div className='grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-2.5 text-[11px] sm:text-xs'>
						{/* 1. Классический стиль / Назначение */}
						<div className='relative'>
							<button
								type='button'
								onClick={() =>
									setActiveDropdown(
										activeDropdown === 'purpose' ? null : 'purpose',
									)
								}
								className='w-full flex items-center justify-between gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 bg-[#141414] hover:bg-[#1a1a1a] border border-white/[0.06] rounded-[4px] text-white/80 hover:text-white transition-all cursor-pointer shadow-[inset_2px_2px_6px_rgba(0,0,0,0.6),inset_-1px_-1px_4px_rgba(255,255,255,0.02)]'
							>
								<span className='truncate'>Классический стиль</span>
								<ChevronDown className='w-3 h-3 text-white/50 shrink-0' />
							</button>
							{activeDropdown === 'purpose' && (
								<div className='absolute top-full mt-1.5 left-0 z-30 bg-[#121212] border border-white/10 rounded-[4px] shadow-2xl py-2 min-w-[180px] sm:min-w-[200px] text-xs text-white/80 space-y-1 backdrop-blur-md'>
									<div className='px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors'>
										Для гостиной
									</div>
									<div className='px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors'>
										Для спальни
									</div>
									<div className='px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors'>
										Для террасы
									</div>
								</div>
							)}
						</div>

						{/* 2. Вид топлива */}
						<div className='relative'>
							<button
								type='button'
								onClick={() =>
									setActiveDropdown(activeDropdown === 'fuel' ? null : 'fuel')
								}
								className='w-full flex items-center justify-between gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 bg-[#141414] hover:bg-[#1a1a1a] border border-white/[0.06] rounded-[4px] text-white/80 hover:text-white transition-all cursor-pointer shadow-[inset_2px_2px_6px_rgba(0,0,0,0.6),inset_-1px_-1px_4px_rgba(255,255,255,0.02)]'
							>
								<span className='truncate'>Вид топлива</span>
								<ChevronDown className='w-3 h-3 text-white/50 shrink-0' />
							</button>
							{activeDropdown === 'fuel' && (
								<div className='absolute top-full mt-1.5 right-0 sm:left-0 z-30 bg-[#121212] border border-white/10 rounded-[4px] shadow-2xl py-2 min-w-[170px] text-xs text-white/80 space-y-1 backdrop-blur-md'>
									<div className='px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors'>
										Дровяные
									</div>
									<div className='px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors'>
										Газовые
									</div>
									<div className='px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors'>
										Биокамины
									</div>
									<div className='px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors'>
										Электрические
									</div>
								</div>
							)}
						</div>

						{/* 3. Стиль (Активный выпадающий список) */}
						<div className='relative'>
							<button
								type='button'
								onClick={() =>
									setActiveDropdown(activeDropdown === 'style' ? null : 'style')
								}
								className='w-full flex items-center justify-between gap-1.5 px-3 py-2 sm:px-4 sm:py-2.5 bg-[#0e0e0e] border border-white/15 rounded-[4px] text-white transition-all cursor-pointer shadow-[0_0_12px_rgba(0,0,0,0.9)]'
							>
								<span className='font-medium truncate'>Стиль</span>
								<ChevronDown className='w-3 h-3 text-white/80 shrink-0' />
							</button>

							{activeDropdown === 'style' && (
								<div className='absolute top-full mt-1.5 left-0 z-40 bg-[#080808] border border-white/10 rounded-[2px] shadow-[0_15px_30px_rgba(0,0,0,0.95)] py-2 min-w-[200px] text-[11px] uppercase tracking-wider text-white/90'>
									<div
										onClick={() => setSelectedStyle('КЛАССИЧЕСКИЕ')}
										className={`px-4 py-2 hover:bg-white/10 cursor-pointer transition-colors ${
											selectedStyle === 'КЛАССИЧЕСКИЕ'
												? 'text-white bg-white/5 font-semibold'
												: 'text-white/80'
										}`}
									>
										КЛАССИЧЕСКИЕ
									</div>
									<div
										onClick={() => setSelectedStyle('ЕВРОПЕЙСКАЯ КЛАССИКА')}
										className={`px-4 py-2 hover:bg-white/10 cursor-pointer transition-colors ${
											selectedStyle === 'ЕВРОПЕЙСКАЯ КЛАССИКА'
												? 'text-white bg-white/5 font-semibold'
												: 'text-white/80'
										}`}
									>
										ЕВРОПЕЙСКАЯ КЛАССИКА
									</div>
									<div
										onClick={() => setSelectedStyle('ТРАДИЦИОННЫЕ')}
										className={`px-4 py-2 hover:bg-white/10 cursor-pointer transition-colors ${
											selectedStyle === 'ТРАДИЦИОННЫЕ'
												? 'text-white bg-white/5 font-semibold'
												: 'text-white/80'
										}`}
									>
										ТРАДИЦИОННЫЕ
									</div>
								</div>
							)}
						</div>

						{/* 4. Выбор по стилю / Выход на улицу */}
						<div className='relative'>
							<button
								type='button'
								onClick={() =>
									setActiveDropdown(
										activeDropdown === 'outdoor' ? null : 'outdoor',
									)
								}
								className='w-full flex items-center justify-between gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 bg-[#141414] hover:bg-[#1a1a1a] border border-white/[0.06] rounded-[4px] text-white/80 hover:text-white transition-all cursor-pointer shadow-[inset_2px_2px_6px_rgba(0,0,0,0.6),inset_-1px_-1px_4px_rgba(255,255,255,0.02)]'
							>
								<span className='truncate'>Выбор по стилю</span>
								<ChevronDown className='w-3 h-3 text-white/50 shrink-0' />
							</button>
							{activeDropdown === 'outdoor' && (
								<div className='absolute top-full mt-1.5 right-0 sm:left-0 z-30 bg-[#121212] border border-white/10 rounded-[4px] shadow-2xl py-2 min-w-[170px] text-xs text-white/80 space-y-1 backdrop-blur-md'>
									<div className='px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors'>
										Современный
									</div>
									<div className='px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors'>
										Минимализм
									</div>
									<div className='px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors'>
										Лофт
									</div>
								</div>
							)}
						</div>

						{/* 5. Прочее */}
						<div className='relative'>
							<button
								type='button'
								onClick={() =>
									setActiveDropdown(activeDropdown === 'other' ? null : 'other')
								}
								className='w-full flex items-center justify-between gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 bg-[#141414] hover:bg-[#1a1a1a] border border-white/[0.06] rounded-[4px] text-white/80 hover:text-white transition-all cursor-pointer shadow-[inset_2px_2px_6px_rgba(0,0,0,0.6),inset_-1px_-1px_4px_rgba(255,255,255,0.02)]'
							>
								<span className='truncate'>Прочее</span>
								<ChevronDown className='w-3 h-3 text-white/50 shrink-0' />
							</button>
							{activeDropdown === 'other' && (
								<div className='absolute top-full mt-1.5 left-0 z-30 bg-[#121212] border border-white/10 rounded-[4px] shadow-2xl py-2 min-w-[170px] text-xs text-white/80 space-y-1 backdrop-blur-md'>
									<div className='px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors'>
										С водяным контуром
									</div>
									<div className='px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors'>
										С теплонакопителем
									</div>
								</div>
							)}
						</div>

						{/* 6. Материал облицовки */}
						<div className='relative'>
							<button
								type='button'
								onClick={() =>
									setActiveDropdown(
										activeDropdown === 'cladding' ? null : 'cladding',
									)
								}
								className='w-full flex items-center justify-between gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 bg-[#141414] hover:bg-[#1a1a1a] border border-white/[0.06] rounded-[4px] text-white/80 hover:text-white transition-all cursor-pointer shadow-[inset_2px_2px_6px_rgba(0,0,0,0.6),inset_-1px_-1px_4px_rgba(255,255,255,0.02)]'
							>
								<span className='truncate'>Материал облицовки</span>
								<ChevronDown className='w-3 h-3 text-white/50 shrink-0' />
							</button>
							{activeDropdown === 'cladding' && (
								<div className='absolute top-full mt-1.5 right-0 sm:left-0 z-30 bg-[#121212] border border-white/10 rounded-[4px] shadow-2xl py-2 min-w-[180px] text-xs text-white/80 space-y-1 backdrop-blur-md'>
									<div className='px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors'>
										Мрамор
									</div>
									<div className='px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors'>
										Изразец / Керамика
									</div>
									<div className='px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors'>
										Талькомагнезит
									</div>
								</div>
							)}
						</div>

						{/* 7. Кнопка сбросить */}
						<div className='col-span-2 sm:col-span-1 flex justify-center sm:justify-start sm:ml-auto pt-1 sm:pt-0'>
							<button
								type='button'
								onClick={resetFilters}
								className='flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2.5 text-white/60 hover:text-white transition-all cursor-pointer text-[11px] uppercase tracking-wider'
								title='Сбросить фильтры'
							>
								<X className='w-3.5 h-3.5 text-white/60' />
								<span>СБРОСИТЬ</span>
							</button>
						</div>
					</div>
				</section>

				{/* Сетка концептов (2 колонки на мобилке, 4 на десктопе) */}
				<section className='relative z-10'>
					<div className='grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-5'>
						{images.slice(0, visibleCount).map((item, index) => {
							const itemLiked = isLiked(item.id)
							// Карточки с бейджем 3D
							const has3DBadge = index === 2 || index === 6

							// Данные для оверлея при ховере (hover info overlay)
							const cardInfoList = [
								{
									title: 'БИОКАМИН QUADRA WALL',
									features: [
										'экологичное решение',
										'идеально для помещений со вторым светом',
										'идеально в доме из бруса',
									],
								},
								{
									title: 'КАМИН В СТИЛЕ ЛОФТ',
									features: [
										'эксклюзивные решения',
										'идеальные архитектурные решения под ключ',
										'камины в любом стиле',
									],
								},
								{
									title: 'ПОРТАЛ ИЗРАЗЦОВЫЙ',
									features: [
										'традиционная эстетика',
										'высокая теплоотдача',
										'аккумуляция тепла до 12 часов',
									],
								},
								{
									title: 'БИОКАМИН QUADRA WALL',
									features: [
										'экологичное решение',
										'идеально для помещений со вторым светом',
										'идеально в доме из бруса',
									],
								},
							]

							const details = cardInfoList[index % cardInfoList.length]

							return (
								<div
									key={item.id}
									className='relative rounded-xl sm:rounded-2xl p-1.5 sm:p-2 bg-[#141414] border border-white/5 shadow-[8px_8px_20px_rgba(0,0,0,0.8),-3px_-3px_10px_rgba(255,255,255,0.02)] flex flex-col h-[210px] xs:h-[240px] sm:h-[280px] md:h-[320px] lg:h-[350px] overflow-hidden group transition-transform duration-300 hover:-translate-y-1 cursor-pointer select-none'
								>
									<div className='relative w-full h-full rounded-[8px] sm:rounded-[10px] overflow-hidden bg-[#0d0d0d]'>
										{/* Кнопка "В избранное" (поверх оверлея) */}
										<button
											type='button'
											onClick={e => {
												e.stopPropagation()
												toggleFavorite(item)
											}}
											className='absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 z-30 p-1 sm:p-1.5 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-xs transition-colors cursor-pointer'
											aria-label='В избранное'
										>
											<Heart
												size={17}
												className={
													itemLiked
														? 'fill-[#f37021] text-[#f37021]'
														: 'text-white/70 hover:text-white'
												}
												strokeWidth={2}
											/>
										</button>

										{/* Бейдж 3D */}
										{has3DBadge && (
											<div className='absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5 z-30 bg-black/70 backdrop-blur-xs text-white text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 sm:px-2 rounded border border-white/20 flex items-center gap-1 shadow-md'>
												<Box className='w-2.5 h-2.5 sm:w-3 sm:h-3 text-white/90' />
												<span>3D</span>
											</div>
										)}

										{/* Изображение из datas.js */}
										<img
											src={item.image}
											alt={`Концепт камина ${item.id}`}
											className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
											loading='lazy'
										/>

										{/* Оверлей с надписями и галочками, появляющийся при ховере */}
										<div className='absolute inset-0 bg-[#0a0a0a]/88 backdrop-blur-[2px] p-3 sm:p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20'>
											{/* Название модели/концепта */}
											<div className='pt-1 sm:pt-2 pr-6'>
												<h3 className='text-white font-semibold tracking-wider text-[11px] sm:text-xs md:text-sm uppercase leading-snug'>
													{details.title}
												</h3>
											</div>

											{/* Список преимуществ с галочками */}
											<div className='space-y-1.5 sm:space-y-3 pb-1 sm:pb-2'>
												{details.features.map((feature, fIdx) => (
													<div
														key={fIdx}
														className='flex items-start gap-1.5 sm:gap-2'
													>
														<Check
															className='w-3.5 h-3.5 text-white shrink-0 mt-0.5'
															strokeWidth={2.5}
														/>
														<span className='text-[9px] sm:text-[11px] md:text-xs text-white/90 font-light leading-tight sm:leading-snug'>
															{feature}
														</span>
													</div>
												))}
											</div>
										</div>
									</div>
								</div>
							)
						})}
					</div>

					{/* Кнопка "ПОКАЗАТЬ ЕЩЕ" */}
					<div className='text-center my-8 sm:my-14'>
						<button
							type='button'
							onClick={handleShowMore}
							className='text-[11px] sm:text-sm font-semibold tracking-[0.25em] text-[#8c8c8c] hover:text-[#c58b41] uppercase transition-colors cursor-pointer py-2 px-6'
						>
							ПОКАЗАТЬ ЕЩЕ
						</button>
					</div>
				</section>

			</div>

			{/* Сквозной блок шоурумов Artplay */}
			<ShowroomsBlock />
		</div>
	)
}

export default Concepts
