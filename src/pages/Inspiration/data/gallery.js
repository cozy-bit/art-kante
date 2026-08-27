import img1 from '../../../assets/images/project-images/img1.png'
import img2 from '../../../assets/images/project-images/img2.png'
import img3 from '../../../assets/images/project-images/img3.png'
import img4 from '../../../assets/images/project-images/img4.png'
import img5 from '../../../assets/images/project-images/img5.png'
import img6 from '../../../assets/images/project-images/img6.png'
import designIdea1 from '../../../assets/images/home/design-idea-1.png'
import designIdea2 from '../../../assets/images/home/design-idea-2.png'
import designIdea3 from '../../../assets/images/home/design-idea-3.png'
import categoryCountryHouse from '../../../assets/images/home/category-country-house.png'
import categoryCityApartment from '../../../assets/images/home/category-city-apartment.png'
import categoryPublicSpaces from '../../../assets/images/home/category-public-spaces.png'
import categoryFacing from '../../../assets/images/home/category-facing.png'

const SOURCE_IMAGES = [
  img1,
  designIdea1,
  img3,
  categoryCityApartment,
  img2,
  img4,
  designIdea2,
  categoryPublicSpaces,
  img5,
  img6,
  designIdea3,
  categoryCountryHouse,
  img3,
  categoryFacing,
  img1,
  img2,
]

export const GALLERY_ITEMS = SOURCE_IMAGES.map((image, index) => ({
  id: index + 1,
  image,
  alt: `Интерьер с камином — вдохновение ${index + 1}`,
}))
