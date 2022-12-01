import {useState, useRef} from 'react'
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

const Greetings = ({highlighted, name, smiley, color}) => {
    return (
        <div className={highlighted ? 'highlighted' : ''} style={{color}}>Hello {name} {smiley}</div>
    )
}

function App() {
    const [highlighted, setHighlighted] = useState(false)
    return (
        <div className="App">
            <div className="card">
                <Counter/>
                <Counter/>
                <Greetings highlighted={highlighted} name={'Les M1'} smiley={'😁'}/>
                <Greetings color={'blue'} name={'La classe'} smiley={'😆'}/>
                <button onClick={() => setHighlighted(highlighted => !highlighted)}>toggle highlight</button>
            </div>
        </div>
    )
}

export default App
