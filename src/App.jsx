import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/common/Layout'
import { Concepts } from './pages/Concepts/Concepts'
import { Home } from './pages/Home/Home'
import { Philosophy } from './pages/Philosophy/Philosophy'
import Project from './pages/Project/Project'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='concepts' element={<Concepts />} />
					<Route path='project' element={<Project />} />
					<Route path='philosophy' element={<Philosophy />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
