import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function Counter() {
    const [count, setCount] = useState(0)
    const ref = useRef()
    console.log(ref)

    return (
        <button ref={ref} onClick={() => setCount(count + 1)}>
            count is {count}
        </button>
    )

}
function App() {

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React !</h1>
      <div className="card">
        <Counter />
        <Counter />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
