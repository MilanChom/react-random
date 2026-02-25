import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import KnopCounterPagina from './pages/KnopCounterPagina'
import StartPagina from './pages/StartPagina'
import Weer from './pages/WeerPagina'


export function App() {
  return (
    <Router>
      <Routes>

        <Route path="/KnopCounterPagina" element={<KnopCounterPagina />} />
        <Route path="/" element={<StartPagina />} />
        <Route path="/WeerPagina" element={<Weer />} />
      </Routes>
    </Router>
  )
}



export default App
