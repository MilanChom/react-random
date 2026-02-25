import { Link } from 'react-router-dom'
import './Pagina2.css'

export default function Pagina2() {
    return (
        <div>
            <title>Pagina 2</title>
            <div>
                <h1 className='titel'>Welkom op Pagina 2</h1>
                <p className='onderTitel'>Dit is de tweede pagina van ons project.</p>

                <div>
                    <button className='knop'>
                        <Link to="/" className='link'>
                            Start Pagina
                        </Link>
                    </button>
                    <button className='knop'>
                        <Link to="/KnopCounterPagina" className='link'>
                            Ga naar Knop Counter Pagina
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}
