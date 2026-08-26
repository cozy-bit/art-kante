import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/common/Layout'
import { Home } from './pages/Home/Home'
import { Concepts } from './pages/Concepts/Concepts'
import { Project } from './pages/Project/Project'
import { Philosophy } from './pages/Philosophy/Philosophy'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="concepts" element={<Concepts />} />
          <Route path="concepts/:id" element={<Project />} />
          <Route path="philosophy" element={<Philosophy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
