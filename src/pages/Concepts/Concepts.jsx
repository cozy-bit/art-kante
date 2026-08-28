import { Box, Check, ChevronDown, Heart, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { ShowroomsBlock } from '../../components/common/ShowroomsBlock'
import images from '../../data/project-page-datas/datas'
import {
	getFavorites,
	saveFavorites,
} from '../../features/project-page/add-to-favorites'

const CATEGORY_MAP = {
	country: 'Загородный дом',
	apartment: 'Городская квартира',
	public: 'Общественные пространства',
	cladding: 'Облицовка',
}

export function Concepts() {
	const [searchParams, setSearchParams] = useSearchParams()
	const categoryParam = searchParams.get('category')

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

	const [activeDropdown, setActiveDropdown] = useState(null)
	const [selectedStyle, setSelectedStyle] = useState('КЛАССИЧЕСКИЕ')
	const [visibleCount, setVisibleCount] = useState(20)

	// Фильтрация по категории из URL searchParams
	const filteredImages = images.filter(item => {
		if (!categoryParam || !CATEGORY_MAP[categoryParam]) return true
		const categoryKeys = ['country', 'apartment', 'public', 'cladding']
		const itemCategory = categoryKeys[(item.id - 1) % categoryKeys.length]
		return itemCategory === categoryParam
	})

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
		setSearchParams({})
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
						{categoryParam && CATEGORY_MAP[categoryParam] && (
							<>
								<span className='text-[#444444]'>/</span>
								<span className='text-[#c58b41]'>
									{CATEGORY_MAP[categoryParam]}
								</span>
							</>
						)}
					</nav>

					{/* Заголовок Концепты */}
					<div className='flex flex-wrap items-baseline justify-between gap-3'>
						<h1 className='text-2xl sm:text-3xl font-light tracking-wide text-white'>
							Концепты
						</h1>
						{categoryParam && CATEGORY_MAP[categoryParam] && (
							<div className='flex items-center gap-2'>
								<span className='text-xs text-white/50'>Категория:</span>
								<div className='inline-flex items-center gap-2 px-3 py-1 bg-[#b86326]/20 border border-[#b86326]/50 text-[#d69853] text-xs uppercase tracking-wider rounded-[3px] shadow-sm'>
									<span>{CATEGORY_MAP[categoryParam]}</span>
									<button
										type='button'
										onClick={() => {
											const next = new URLSearchParams(searchParams)
											next.delete('category')
											setSearchParams(next)
										}}
										className='hover:text-white transition-colors cursor-pointer'
										aria-label='Сбросить категорию'
									>
										<X className='w-3.5 h-3.5' />
									</button>
								</div>
							</div>
						)}
					</div>
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
									<div
										onClick={() => setActiveDropdown(null)}
										className='px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors'
									>
										Для гостиной
									</div>
									<div
										onClick={() => setActiveDropdown(null)}
										className='px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors'
									>
										Для спальни
									</div>
									<div
										onClick={() => setActiveDropdown(null)}
										className='px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors'
									>
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
									<div
										onClick={() => setActiveDropdown(null)}
										className='px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors'
									>
										Дровяные
									</div>
									<div
										onClick={() => setActiveDropdown(null)}
										className='px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors'
									>
										Газовые
									</div>
									<div
										onClick={() => setActiveDropdown(null)}
										className='px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors'
									>
										Биокамины
									</div>
									<div
										onClick={() => setActiveDropdown(null)}
										className='px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors'
									>
										Электрические
									</div>
								</div>
							)}
						</div>

						{/* 3. Стиль */}
						<div className='relative'>
							<button
								type='button'
								onClick={() =>
									setActiveDropdown(activeDropdown === 'style' ? null : 'style')
								}
								className='w-full flex items-center justify-between gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 bg-[#141414] hover:bg-[#1a1a1a] border border-white/[0.06] rounded-[4px] text-white/80 hover:text-white transition-all cursor-pointer shadow-[inset_2px_2px_6px_rgba(0,0,0,0.6),inset_-1px_-1px_4px_rgba(255,255,255,0.02)]'
							>
								<span className='truncate'>{selectedStyle || 'Стиль'}</span>
								<ChevronDown className='w-3 h-3 text-white/50 shrink-0' />
							</button>

							{activeDropdown === 'style' && (
								<div className='absolute top-full mt-1.5 left-0 z-40 bg-[#080808] border border-white/10 rounded-[2px] shadow-[0_15px_30px_rgba(0,0,0,0.95)] py-2 min-w-[200px] text-[11px] uppercase tracking-wider text-white/90'>
									<div
										onClick={() => {
											setSelectedStyle('КЛАССИЧЕСКИЕ')
											setActiveDropdown(null)
										}}
										className={`px-4 py-2 hover:bg-white/10 cursor-pointer transition-colors ${
											selectedStyle === 'КЛАССИЧЕСКИЕ'
												? 'text-white bg-white/5 font-semibold'
												: 'text-white/80'
										}`}
									>
										КЛАССИЧЕСКИЕ
									</div>
									<div
										onClick={() => {
											setSelectedStyle('ЕВРОПЕЙСКАЯ КЛАССИКА')
											setActiveDropdown(null)
										}}
										className={`px-4 py-2 hover:bg-white/10 cursor-pointer transition-colors ${
											selectedStyle === 'ЕВРОПЕЙСКАЯ КЛАССИКА'
												? 'text-white bg-white/5 font-semibold'
												: 'text-white/80'
										}`}
									>
										ЕВРОПЕЙСКАЯ КЛАССИКА
									</div>
									<div
										onClick={() => {
											setSelectedStyle('ТРАДИЦИОННЫЕ')
											setActiveDropdown(null)
										}}
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
									<div
										onClick={() => setActiveDropdown(null)}
										className='px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors'
									>
										Современный
									</div>
									<div
										onClick={() => setActiveDropdown(null)}
										className='px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors'
									>
										Минимализм
									</div>
									<div
										onClick={() => setActiveDropdown(null)}
										className='px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors'
									>
										Лофт
									</div>
								</div>
							)}
						</div>

						{/* 5. Дополнительные опции */}
						<div className='relative'>
							<button
								type='button'
								onClick={() =>
									setActiveDropdown(
										activeDropdown === 'options' ? null : 'options',
									)
								}
								className='w-full flex items-center justify-between gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 bg-[#141414] hover:bg-[#1a1a1a] border border-white/[0.06] rounded-[4px] text-white/80 hover:text-white transition-all cursor-pointer shadow-[inset_2px_2px_6px_rgba(0,0,0,0.6),inset_-1px_-1px_4px_rgba(255,255,255,0.02)]'
							>
								<span className='truncate'>Дополнительно</span>
								<ChevronDown className='w-3 h-3 text-white/50 shrink-0' />
							</button>
							{activeDropdown === 'options' && (
								<div className='absolute top-full mt-1.5 left-0 z-30 bg-[#121212] border border-white/10 rounded-[4px] shadow-2xl py-2 min-w-[180px] text-xs text-white/80 space-y-1 backdrop-blur-md'>
									<div
										onClick={() => setActiveDropdown(null)}
										className='px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors'
									>
										С водяным контуром
									</div>
									<div
										onClick={() => setActiveDropdown(null)}
										className='px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors'
									>
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
									<div
										onClick={() => setActiveDropdown(null)}
										className='px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors'
									>
										Мрамор
									</div>
									<div
										onClick={() => setActiveDropdown(null)}
										className='px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors'
									>
										Изразец / Керамика
									</div>
									<div
										onClick={() => setActiveDropdown(null)}
										className='px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors'
									>
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
					{filteredImages.length === 0 ? (
						<div className='text-center py-16 bg-[#141414] border border-white/10 p-8 space-y-4'>
							<p className='text-white/60 text-sm'>
								В выбранной категории пока нет позиций.
							</p>
							<Button onClick={resetFilters} className='py-2.5 px-6 text-xs'>
								СБРОСИТЬ ФИЛЬТРЫ
							</Button>
						</div>
					) : (
						<div className='grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-5'>
							{filteredImages.slice(0, visibleCount).map((item, index) => {
								const itemLiked = isLiked(item.id)
								// Карточки с бейджем 3D
								const has3DBadge = index === 2 || index === 6

								// Данные для оверлея при ховере
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
									<Link
										to={`/concepts/${item.id}`}
										key={item.id}
										className='relative rounded-xl sm:rounded-2xl p-1.5 sm:p-2 bg-[#141414] border border-white/5 shadow-[8px_8px_20px_rgba(0,0,0,0.8),-3px_-3px_10px_rgba(255,255,255,0.02)] flex flex-col h-[210px] xs:h-[240px] sm:h-[280px] md:h-[320px] lg:h-[350px] overflow-hidden group transition-transform duration-300 hover:-translate-y-1 cursor-pointer select-none block'
									>
										<div className='relative w-full h-full rounded-[8px] sm:rounded-[10px] overflow-hidden bg-[#0d0d0d]'>
											{/* Кнопка "В избранное" (с e.stopPropagation() и e.preventDefault()) */}
											<button
												type='button'
												onClick={e => {
													e.preventDefault()
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
											<div className='absolute inset-0 bg-[#0a0a0a]/88 backdrop-blur-[2px] p-3 sm:p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 rounded-[8px] sm:rounded-[10px] overflow-hidden'>
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
									</Link>
								)
							})}
						</div>
					)}

					{/* Кнопка "ПОКАЗАТЬ ЕЩЕ" */}
					{visibleCount < filteredImages.length && (
						<div className='mt-10 sm:mt-14 flex justify-center'>
							<Button
								onClick={handleShowMore}
								className='text-xs uppercase tracking-wider py-3 px-8'
							>
								ПОКАЗАТЬ ЕЩЕ
							</Button>
						</div>
					)}
				</section>

				{/* Блок шоурумов Artplay */}
				<div className='mt-16 sm:mt-24'>
					<ShowroomsBlock />
				</div>
			</div>
		</div>
	)
}

export default Concepts
