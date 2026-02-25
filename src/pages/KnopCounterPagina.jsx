import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import './KnopCounterPagina.css'
import { Header } from '../components/Header'

function KnopCounterPagina() {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    let verschill = (count - count2)
    const resetKnop = () => {
        setCount(0)
        setCount2(0)
    }

    return (
        <>
            <link rel="icon" type="image/svg+xml" href="./src/assets/red-button-icon-image-pixabay-25.png" />
            <title>Knop-counter</title>
            <Header />
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1 className='hoofdTekst'>Vite + React</h1>
            <div className="card">
                <button className='knoppen' onClick={() => setCount((count) => count + 1)}>
                    Count 1 is <p className='knopText'>{count}</p>
                </button>
                <button className='knoppen' onClick={() => setCount2((count2) => count2 + 1)}>
                    Count 2 is <p className='knopText'>{count2}</p>
                </button>
                <div>
                    <p>
                        Het verschill tussen de twee knoppen is
                    </p>
                    <h1 className='verchilKnop'>{verschill}</h1>
                </div>
                <h1></h1>
                <div>
                    <button className='resetKnop' onClick={resetKnop}>
                        Reset beide knoppen
                    </button>
                </div>


            </div>
        </>
    )
}

export default KnopCounterPagina
