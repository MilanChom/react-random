import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import KnopCounterPagina from './pages/KnopCounterPagina'
import StartPagina from './pages/StartPagina'
import Pagina2 from './pages/Pagina2'


export function App() {
  return (
    <Router>
      <Routes>

        <Route path="/KnopCounterPagina" element={<KnopCounterPagina />} />
        <Route path="/" element={<StartPagina />} />
        <Route path="/pagina2" element={<Pagina2 />} />
      </Routes>
    </Router>
  )
}



export default App
