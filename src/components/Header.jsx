import { Link } from 'react-router-dom'
import './Header.css'

export function Header() {

    return (
        <div className='pagina-header-content'>
            <Link to="/" className='titel'>Start Pagina</Link>
            <div className='header-knoppen'>
                <button className="knop">
                    <Link to="/pagina2" className="link">
                        Pagina 2
                    </Link>
                </button>
                <button className="knop">
                    <Link to="/KnopCounterPagina" className="link">
                        Knop Counter Pagina
                    </Link>
                </button>
            </div>
        </div>
    )
}