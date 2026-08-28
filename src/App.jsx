import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/common/Layout'
import { Home } from './pages/Home/Home'
import { Concepts } from './pages/Concepts/Concepts'
import { Project } from './pages/Project/Project'
import { Philosophy } from './pages/Philosophy/Philosophy'
import Design from './pages/Design/Design'
import Favorites from './pages/Favorites/Favorites'
import Portfolio from './pages/Portfolio/Portfolio'
import Inspiration from './pages/Inspiration/Inspiration'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="design" element={<Design />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="inspiration" element={<Inspiration />} />
          <Route path="concepts" element={<Concepts />} />
          <Route path="project" element={<Project />} />
          <Route path="philosophy" element={<Philosophy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
