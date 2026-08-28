const FAVORITES_STORAGE_KEY = 'favorites'

export function getFavorites() {
  try {
    const data = localStorage.getItem(FAVORITES_STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch (error) {
    console.error('Error reading favorites from localStorage:', error)
    return []
  }
}

export function saveFavorites(favorites) {
  try {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites))
  } catch (error) {
    console.error('Error saving favorites to localStorage:', error)
  }
}

export function toggleFavorite(item, favorites, setFavorites) {
  const isAlreadyFavorite = favorites.some((fav) => fav.id === item.id)
  let updated

  if (isAlreadyFavorite) {
    updated = favorites.filter((fav) => fav.id !== item.id)
  } else {
    updated = [...favorites, item]
  }

  if (setFavorites) {
    setFavorites(updated)
  }
  saveFavorites(updated)
  return updated
}

export function isItemFavorite(id, favorites) {
  return favorites.some((fav) => fav.id === id)
}

