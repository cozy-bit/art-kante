import sofaChest from '../../../assets/images/inspiration/sofa-chest.png'
import diningRoom from '../../../assets/images/inspiration/dining-room.png'
import tealArt from '../../../assets/images/inspiration/teal-art.png'
import bananaPlant from '../../../assets/images/inspiration/banana-plant.png'
import whiteKitchen from '../../../assets/images/inspiration/white-kitchen.png'
import galleryWall from '../../../assets/images/inspiration/gallery-wall.png'
import glassRoom from '../../../assets/images/inspiration/glass-room.png'
import plantsRug from '../../../assets/images/inspiration/plants-rug.png'
import redRoom from '../../../assets/images/inspiration/red-room.png'

const SEQUENCE = [
  sofaChest,
  bananaPlant,
  glassRoom,
  tealArt,
  diningRoom,
  whiteKitchen,
  plantsRug,
  redRoom,
  sofaChest,
  galleryWall,
  redRoom,
  galleryWall,
  tealArt,
  whiteKitchen,
  glassRoom,
  bananaPlant,
  diningRoom,
  galleryWall,
  plantsRug,
  redRoom,
]

export const GALLERY_ITEMS = SEQUENCE.map((image, index) => ({
  id: index + 1,
  image,
}))
