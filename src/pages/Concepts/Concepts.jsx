import { Box, Check, ChevronDown, Heart, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { ShowroomsBlock } from '../../components/common/ShowroomsBlock'
import rawImages from '../../data/project-page-datas/datas'
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

// Присваиваем детерминированные атрибуты концептам для полной работы всех сортировок/фильтров
const images = rawImages.map((item) => {
	const id = item.id
	const fuelList = ['Дровяные', 'Газовые', 'Биокамины', 'Электрические']
	const purposeList = ['Для гостиной', 'Для спальни', 'Для террасы']
	const styleList = ['КЛАССИЧЕСКИЕ', 'ЕВРОПЕЙСКАЯ КЛАССИКА', 'ТРАДИЦИОННЫЕ']
	const modernList = ['Современный', 'Минимализм', 'Лофт']
	const optionList = ['С водяным контуром', 'С теплонакопителем', '3D модель']
	const claddingList = ['Мрамор', 'Изразец / Керамика', 'Талькомагнезит']

	return {
		...item,
		fuel: fuelList[id % fuelList.length],
		purpose: purposeList[id % purposeList.length],
		style: styleList[id % styleList.length],
		modernStyle: modernList[id % modernList.length],
		option: optionList[id % optionList.length],
		cladding: claddingList[id % claddingList.length],
	}
})

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

	// Состояния всех 6 фильтров (по умолчанию пустые)
	const [selectedPurpose, setSelectedPurpose] = useState('')
	const [selectedFuel, setSelectedFuel] = useState('')
	const [selectedStyle, setSelectedStyle] = useState('') // По умолчанию "Стиль"
	const [selectedModernStyle, setSelectedModernStyle] = useState('')
	const [selectedOption, setSelectedOption] = useState('')
	const [selectedCladding, setSelectedCladding] = useState('')

	const [visibleCount, setVisibleCount] = useState(20)

	// Комплексная фильтрация по всем активным селекторам
	const filteredImages = images.filter(item => {
		// 1. Категория из URL
		if (categoryParam && CATEGORY_MAP[categoryParam]) {
			const categoryKeys = ['country', 'apartment', 'public', 'cladding']
			const itemCategory = categoryKeys[(item.id - 1) % categoryKeys.length]
			if (itemCategory !== categoryParam) return false
		}
		// 2. Назначение (Классический стиль)
		if (selectedPurpose && item.purpose !== selectedPurpose) return false
		// 3. Вид топлива
		if (selectedFuel && item.fuel !== selectedFuel) return false
		// 4. Стиль
		if (selectedStyle && item.style !== selectedStyle) return false
		// 5. Современный стиль
		if (selectedModernStyle && item.modernStyle !== selectedModernStyle) return false
		// 6. Дополнительные опции
		if (selectedOption && item.option !== selectedOption) return false
		// 7. Материал облицовки
		if (selectedCladding && item.cladding !== selectedCladding) return false

		return true
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

	// Полный сброс всех фильтров
	const resetFilters = () => {
		setActiveDropdown(null)
		setSelectedPurpose('')
		setSelectedFuel('')
		setSelectedStyle('')
		setSelectedModernStyle('')
		setSelectedOption('')
		setSelectedCladding('')
		setSearchParams({})
	}

	const hasActiveFilters =
		Boolean(categoryParam) ||
		Boolean(selectedPurpose) ||
		Boolean(selectedFuel) ||
		Boolean(selectedStyle) ||
		Boolean(selectedModernStyle) ||
		Boolean(selectedOption) ||
		Boolean(selectedCladding)

	const handleShowMore = () => {
		setVisibleCount(prev => prev + 8)
	}

	return (
		<div className='bg-[#0f0f0f] text-white min-h-screen pb-16 selection:bg-[#c58b41]/30'>
			{/* Невидимая подложка для закрытия дропдауна при клике вне него */}
			{activeDropdown && (
				<div
					className='fixed inset-0 z-10'
					onClick={() => setActiveDropdown(null)}
				/>
			)}

			<div className='max-w-7xl mx-auto px-3 sm:px-6 lg:px-8'>
				{/* Заголовок страницы и Хлебные крошки */}
				<div className='pt-5 sm:pt-8 pb-3 sm:pb-6'>
					{/* Хлебные крошки */}
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
						<div className='flex items-center gap-3'>
							<h1 className='text-2xl sm:text-3xl font-light tracking-wide text-white'>
								Концепты
							</h1>
							<span className='text-xs px-2.5 py-0.5 bg-white/5 border border-white/10 text-white/60 font-mono'>
								{filteredImages.length}
							</span>
						</div>

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

				{/* Панель фильтров */}
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
								className={`w-full flex items-center justify-between gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 bg-[#141414] hover:bg-[#1a1a1a] border rounded-[4px] transition-all cursor-pointer shadow-[inset_2px_2px_6px_rgba(0,0,0,0.6),inset_-1px_-1px_4px_rgba(255,255,255,0.02)] ${
									selectedPurpose
										? 'border-[#c58b41]/60 text-[#c58b41]'
										: 'border-white/[0.06] text-white/80 hover:text-white'
								}`}
							>
								<span className='truncate'>{selectedPurpose || 'Классический стиль'}</span>
								<ChevronDown className='w-3 h-3 text-white/50 shrink-0' />
							</button>
							{activeDropdown === 'purpose' && (
								<div className='absolute top-full mt-1.5 left-0 z-30 bg-[#121212] border border-white/10 rounded-[4px] shadow-2xl py-2 min-w-[180px] sm:min-w-[200px] text-xs text-white/80 space-y-1 backdrop-blur-md'>
									{['Для гостиной', 'Для спальни', 'Для террасы'].map((opt) => (
										<div
											key={opt}
											onClick={() => {
												setSelectedPurpose(selectedPurpose === opt ? '' : opt)
												setActiveDropdown(null)
											}}
											className={`px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors flex items-center justify-between ${
												selectedPurpose === opt ? 'text-[#c58b41] font-semibold bg-white/5' : ''
											}`}
										>
											<span>{opt}</span>
											{selectedPurpose === opt && <Check className='w-3 h-3' />}
										</div>
									))}
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
								className={`w-full flex items-center justify-between gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 bg-[#141414] hover:bg-[#1a1a1a] border rounded-[4px] transition-all cursor-pointer shadow-[inset_2px_2px_6px_rgba(0,0,0,0.6),inset_-1px_-1px_4px_rgba(255,255,255,0.02)] ${
									selectedFuel
										? 'border-[#c58b41]/60 text-[#c58b41]'
										: 'border-white/[0.06] text-white/80 hover:text-white'
								}`}
							>
								<span className='truncate'>{selectedFuel || 'Вид топлива'}</span>
								<ChevronDown className='w-3 h-3 text-white/50 shrink-0' />
							</button>
							{activeDropdown === 'fuel' && (
								<div className='absolute top-full mt-1.5 right-0 sm:left-0 z-30 bg-[#121212] border border-white/10 rounded-[4px] shadow-2xl py-2 min-w-[170px] text-xs text-white/80 space-y-1 backdrop-blur-md'>
									{['Дровяные', 'Газовые', 'Биокамины', 'Электрические'].map((opt) => (
										<div
											key={opt}
											onClick={() => {
												setSelectedFuel(selectedFuel === opt ? '' : opt)
												setActiveDropdown(null)
											}}
											className={`px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors flex items-center justify-between ${
												selectedFuel === opt ? 'text-[#c58b41] font-semibold bg-white/5' : ''
											}`}
										>
											<span>{opt}</span>
											{selectedFuel === opt && <Check className='w-3 h-3' />}
										</div>
									))}
								</div>
							)}
						</div>

						{/* 3. Стиль (по умолчанию "Стиль") */}
						<div className='relative'>
							<button
								type='button'
								onClick={() =>
									setActiveDropdown(activeDropdown === 'style' ? null : 'style')
								}
								className={`w-full flex items-center justify-between gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 bg-[#141414] hover:bg-[#1a1a1a] border rounded-[4px] transition-all cursor-pointer shadow-[inset_2px_2px_6px_rgba(0,0,0,0.6),inset_-1px_-1px_4px_rgba(255,255,255,0.02)] ${
									selectedStyle
										? 'border-[#c58b41]/60 text-[#c58b41]'
										: 'border-white/[0.06] text-white/80 hover:text-white'
								}`}
							>
								<span className='truncate'>{selectedStyle || 'Стиль'}</span>
								<ChevronDown className='w-3 h-3 text-white/50 shrink-0' />
							</button>

							{activeDropdown === 'style' && (
								<div className='absolute top-full mt-1.5 left-0 z-40 bg-[#080808] border border-white/10 rounded-[2px] shadow-[0_15px_30px_rgba(0,0,0,0.95)] py-2 min-w-[200px] text-[11px] uppercase tracking-wider text-white/90'>
									{['КЛАССИЧЕСКИЕ', 'ЕВРОПЕЙСКАЯ КЛАССИКА', 'ТРАДИЦИОННЫЕ'].map((opt) => (
										<div
											key={opt}
											onClick={() => {
												setSelectedStyle(selectedStyle === opt ? '' : opt)
												setActiveDropdown(null)
											}}
											className={`px-4 py-2 hover:bg-white/10 cursor-pointer transition-colors flex items-center justify-between ${
												selectedStyle === opt
													? 'text-[#c58b41] bg-white/5 font-semibold'
													: 'text-white/80'
											}`}
										>
											<span>{opt}</span>
											{selectedStyle === opt && <Check className='w-3 h-3 text-[#c58b41]' />}
										</div>
									))}
								</div>
							)}
						</div>

						{/* 4. Выбор по стилю */}
						<div className='relative'>
							<button
								type='button'
								onClick={() =>
									setActiveDropdown(
										activeDropdown === 'modern' ? null : 'modern',
									)
								}
								className={`w-full flex items-center justify-between gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 bg-[#141414] hover:bg-[#1a1a1a] border rounded-[4px] transition-all cursor-pointer shadow-[inset_2px_2px_6px_rgba(0,0,0,0.6),inset_-1px_-1px_4px_rgba(255,255,255,0.02)] ${
									selectedModernStyle
										? 'border-[#c58b41]/60 text-[#c58b41]'
										: 'border-white/[0.06] text-white/80 hover:text-white'
								}`}
							>
								<span className='truncate'>{selectedModernStyle || 'Выбор по стилю'}</span>
								<ChevronDown className='w-3 h-3 text-white/50 shrink-0' />
							</button>
							{activeDropdown === 'modern' && (
								<div className='absolute top-full mt-1.5 right-0 sm:left-0 z-30 bg-[#121212] border border-white/10 rounded-[4px] shadow-2xl py-2 min-w-[170px] text-xs text-white/80 space-y-1 backdrop-blur-md'>
									{['Современный', 'Минимализм', 'Лофт'].map((opt) => (
										<div
											key={opt}
											onClick={() => {
												setSelectedModernStyle(selectedModernStyle === opt ? '' : opt)
												setActiveDropdown(null)
											}}
											className={`px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors flex items-center justify-between ${
												selectedModernStyle === opt ? 'text-[#c58b41] font-semibold bg-white/5' : ''
											}`}
										>
											<span>{opt}</span>
											{selectedModernStyle === opt && <Check className='w-3 h-3' />}
										</div>
									))}
								</div>
							)}
						</div>

						{/* 5. Дополнительно */}
						<div className='relative'>
							<button
								type='button'
								onClick={() =>
									setActiveDropdown(
										activeDropdown === 'options' ? null : 'options',
									)
								}
								className={`w-full flex items-center justify-between gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 bg-[#141414] hover:bg-[#1a1a1a] border rounded-[4px] transition-all cursor-pointer shadow-[inset_2px_2px_6px_rgba(0,0,0,0.6),inset_-1px_-1px_4px_rgba(255,255,255,0.02)] ${
									selectedOption
										? 'border-[#c58b41]/60 text-[#c58b41]'
										: 'border-white/[0.06] text-white/80 hover:text-white'
								}`}
							>
								<span className='truncate'>{selectedOption || 'Дополнительно'}</span>
								<ChevronDown className='w-3 h-3 text-white/50 shrink-0' />
							</button>
							{activeDropdown === 'options' && (
								<div className='absolute top-full mt-1.5 left-0 z-30 bg-[#121212] border border-white/10 rounded-[4px] shadow-2xl py-2 min-w-[180px] text-xs text-white/80 space-y-1 backdrop-blur-md'>
									{['С водяным контуром', 'С теплонакопителем', '3D модель'].map((opt) => (
										<div
											key={opt}
											onClick={() => {
												setSelectedOption(selectedOption === opt ? '' : opt)
												setActiveDropdown(null)
											}}
											className={`px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors flex items-center justify-between ${
												selectedOption === opt ? 'text-[#c58b41] font-semibold bg-white/5' : ''
											}`}
										>
											<span>{opt}</span>
											{selectedOption === opt && <Check className='w-3 h-3' />}
										</div>
									))}
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
								className={`w-full flex items-center justify-between gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 bg-[#141414] hover:bg-[#1a1a1a] border rounded-[4px] transition-all cursor-pointer shadow-[inset_2px_2px_6px_rgba(0,0,0,0.6),inset_-1px_-1px_4px_rgba(255,255,255,0.02)] ${
									selectedCladding
										? 'border-[#c58b41]/60 text-[#c58b41]'
										: 'border-white/[0.06] text-white/80 hover:text-white'
								}`}
							>
								<span className='truncate'>{selectedCladding || 'Материал облицовки'}</span>
								<ChevronDown className='w-3 h-3 text-white/50 shrink-0' />
							</button>
							{activeDropdown === 'cladding' && (
								<div className='absolute top-full mt-1.5 right-0 sm:left-0 z-30 bg-[#121212] border border-white/10 rounded-[4px] shadow-2xl py-2 min-w-[180px] text-xs text-white/80 space-y-1 backdrop-blur-md'>
									{['Мрамор', 'Изразец / Керамика', 'Талькомагнезит'].map((opt) => (
										<div
											key={opt}
											onClick={() => {
												setSelectedCladding(selectedCladding === opt ? '' : opt)
												setActiveDropdown(null)
											}}
											className={`px-4 py-2 hover:bg-white/5 hover:text-[#df8f37] cursor-pointer transition-colors flex items-center justify-between ${
												selectedCladding === opt ? 'text-[#c58b41] font-semibold bg-white/5' : ''
											}`}
										>
											<span>{opt}</span>
											{selectedCladding === opt && <Check className='w-3 h-3' />}
										</div>
									))}
								</div>
							)}
						</div>

						{/* 7. Кнопка сбросить */}
						<div className='col-span-2 sm:col-span-1 flex justify-center sm:justify-start sm:ml-auto pt-1 sm:pt-0'>
							<button
								type='button'
								onClick={resetFilters}
								disabled={!hasActiveFilters}
								className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2.5 transition-all text-[11px] uppercase tracking-wider ${
									hasActiveFilters
										? 'text-[#c58b41] hover:text-white cursor-pointer font-semibold'
										: 'text-white/30 cursor-default'
								}`}
								title='Сбросить фильтры'
							>
								<X className='w-3.5 h-3.5' />
								<span>СБРОСИТЬ</span>
							</button>
						</div>
					</div>
				</section>

				{/* Сетка концептов (2 колонки на мобилке, 4 на десктопе) */}
				<section className='relative z-10'>
					{filteredImages.length === 0 ? (
						<div className='text-center py-16 bg-[#141414] border border-white/10 p-8 space-y-4 shadow-xl'>
							<p className='text-white/70 text-sm'>
								По выбранным критериям ничего не найдено.
							</p>
							<Button onClick={resetFilters} className='py-2.5 px-6 text-xs rounded-none'>
								СБРОСИТЬ ВСЕ ФИЛЬТРЫ
							</Button>
						</div>
					) : (
						<div className='grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-5'>
							{filteredImages.slice(0, visibleCount).map((item, index) => {
								const itemLiked = isLiked(item.id)
								const has3DBadge = index % 3 === 0

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
								const info = cardInfoList[index % cardInfoList.length]

								return (
									<div
										key={item.id}
										className='group relative aspect-[3/4] bg-[#1a1a1a] rounded-[8px] sm:rounded-[10px] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform-gpu'
									>
										{/* Сердечко / Избранное */}
										<button
											type='button'
											onClick={e => {
												e.preventDefault()
												e.stopPropagation()
												toggleFavorite(item)
											}}
											className='absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 z-20 p-1.5 sm:p-2 rounded-full bg-black/40 hover:bg-black/80 backdrop-blur-xs transition-colors cursor-pointer'
											aria-label='Добавить в избранное'
										>
											<Heart
												size={16}
												className={
													itemLiked
														? 'fill-[#f37021] text-[#f37021]'
														: 'text-white/80 hover:text-white'
												}
												strokeWidth={itemLiked ? 0 : 2}
											/>
										</button>

										{/* Бейдж 3D */}
										{has3DBadge && (
											<div className='absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5 z-20 flex items-center gap-1 px-2 py-0.5 rounded-[4px] bg-black/60 backdrop-blur-xs border border-white/10 text-[9px] sm:text-[10px] font-bold text-white tracking-wider'>
												<Box size={10} className='text-white' />
												<span>3D</span>
											</div>
										)}

										{/* Изображение */}
										<Link
											to={`/concepts/${item.id}`}
											className='block w-full h-full'
										>
											<img
												src={item.image}
												alt={`Концепт ${item.id}`}
												className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700'
												loading='lazy'
											/>
										</Link>

										{/* Наложение с описанием и кнопкой при hover */}
										<div className='absolute inset-0 bg-[#000000]/75 backdrop-blur-[6px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 sm:p-5 z-10 pointer-events-none group-hover:pointer-events-auto rounded-[8px] sm:rounded-[10px] overflow-hidden'>
											<div>
												<h3 className='text-xs sm:text-sm font-bold uppercase tracking-wider text-white mb-2 sm:mb-3 leading-snug'>
													{info.title}
												</h3>
												<div className='w-8 h-[2px] bg-[#f37021] mb-3 sm:mb-4' />
												<ul className='space-y-1.5 sm:space-y-2 text-[10px] sm:text-xs text-white/80'>
													{info.features.map((feat, idx) => (
														<li
															key={idx}
															className='flex items-start gap-1.5 sm:gap-2 leading-relaxed'
														>
															<span className='text-[#f37021] mt-0.5 text-[10px]'>
																✦
															</span>
															<span>{feat}</span>
														</li>
													))}
												</ul>
											</div>

											<div className='pt-3'>
												<Link to={`/concepts/${item.id}`} className='block'>
													<Button className='w-full text-[10px] sm:text-xs py-2 sm:py-2.5 tracking-wider'>
														ПОДРОБНЕЕ
													</Button>
												</Link>
											</div>
										</div>
									</div>
								)
							})}
						</div>
					)}

					{/* Кнопка "ПОКАЗАТЬ ЕЩЕ" */}
					{filteredImages.length > visibleCount && (
						<div className='mt-8 sm:mt-12 flex justify-center'>
							<Button
								onClick={handleShowMore}
								className='py-3 sm:py-3.5 px-8 sm:px-12 text-xs sm:text-sm tracking-[0.2em] font-semibold'
							>
								ПОКАЗАТЬ ЕЩЕ
							</Button>
						</div>
					)}
				</section>

				{/* Блок шоурумов ARTPLAY */}
				<div className='mt-16 sm:mt-24'>
					<ShowroomsBlock />
				</div>
			</div>
		</div>
	)
}

export default Concepts
