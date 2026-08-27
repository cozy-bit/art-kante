import heroSlide1 from '../../../assets/images/home/hero-slide-1.png'
import categoryCountryHouse from '../../../assets/images/home/category-country-house.png'
import categoryCityApartment from '../../../assets/images/home/category-city-apartment.png'
import categoryPublicSpaces from '../../../assets/images/home/category-public-spaces.png'
import categoryFacing from '../../../assets/images/home/category-facing.png'

export const ROTATING_ITEMS = [
  {
    id: 'hero-main',
    title: 'Печи Камины Барбекю',
    badge: 'под ключ',
    subtitle: 'проектирование архитектура инженерия монтаж',
    slogan: 'С НАМИ ЛЕГКО ВНЕДРЯЮТСЯ ПРОЕКТЫ',
    cardLabel: 'ПЕЧИ И КАМИНЫ ПОД КЛЮЧ',
    image: heroSlide1,
    isHeroDefault: true,
  },
  {
    id: 'country-house',
    title: 'Загородный дом',
    badge: 'под ключ',
    subtitle: 'дровяные камины, печи и барбекю-комплексы',
    slogan: 'С НАМИ ЛЕГКО ВНЕДРЯЮТСЯ ПРОЕКТЫ',
    cardLabel: 'ЗАГОРОДНЫЙ ДОМ',
    image: categoryCountryHouse,
    isHeroDefault: false,
  },
  {
    id: 'city-apartment',
    title: 'Городская квартира',
    badge: 'под ключ',
    subtitle: 'биокамины, паровые и электроочаги в интерьере',
    slogan: 'С НАМИ ЛЕГКО ВНЕДРЯЮТСЯ ПРОЕКТЫ',
    cardLabel: 'ГОРОДСКАЯ КВАРТИРА',
    image: categoryCityApartment,
    isHeroDefault: false,
  },
  {
    id: 'public-spaces',
    title: 'Общественные пространства',
    badge: 'под ключ',
    subtitle: 'камины для ресторанов, отелей, спа и лобби',
    slogan: 'С НАМИ ЛЕГКО ВНЕДРЯЮТСЯ ПРОЕКТЫ',
    cardLabel: 'ОБЩЕСТВЕННЫЕ ПРОСТРАНСТВА',
    image: categoryPublicSpaces,
    isHeroDefault: false,
  },
  {
    id: 'facing',
    title: 'Облицовка',
    badge: 'под ключ',
    subtitle: 'натуральный камень, мрамор, металл и керамика',
    slogan: 'С НАМИ ЛЕГКО ВНЕДРЯЮТСЯ ПРОЕКТЫ',
    cardLabel: 'ОБЛИЦОВКА',
    image: categoryFacing,
    isHeroDefault: false,
  },
]
