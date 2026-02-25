import './StartPagina.css'
import { Header } from '../components/Header'

export default function Pagina1() {
    return (
        <>
            <link rel="icon" type="image/svg+xml" href="./src/assets/home-favicon.png" />
            <title>Startpagina</title>
            <Header />
            <div className="pagina-container">

                <div className="datum-container">
                    <p className="datum">{new Date().toLocaleDateString('nl-NL', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
            </div>
        </>
    )
}
