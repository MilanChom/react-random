import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  let verschill = (count - count2)
  const resetKnop = () => {    setCount(0)
    setCount2(0)
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
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
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
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
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
