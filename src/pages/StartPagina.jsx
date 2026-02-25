import { Link } from 'react-router-dom'
import './StartPagina.css'

export default function Pagina1() {
    return (
        <div className="pagina-container">
            <title>Startpagina</title>
            <div className="content">
                <h1 className='titel'>Start Pagina</h1>
                <p className='onderTitel'>Dit is de startpagina van ons project.</p>

                <div>
                    <button className="knop">
                        <Link to="/pagina2" className="link">
                            Ga naar Pagina 2
                        </Link>
                    </button>
                    <button className="knop">
                        <Link to="/KnopCounterPagina" className="link">
                            Ga naar Knop Counter Pagina
                        </Link>
                    </button>

                </div>
            </div>
        </div>
    )
}
