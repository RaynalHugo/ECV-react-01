import {useState, useRef, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

//Création des composants compteurs
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

//Création composant Greetings (string)
const Greetings = ({highlighted, name, smiley, color}) => {
useEffect(() => console.log('Effect'), [highlighted]) 

    return (
        <div className={highlighted ? 'highlighted' : ''} style={{color}}>Hello {name} {smiley}</div>
    )
}

//Création composant bouton Log In 
function Login() {
    const [loggedIn, setLoggedIn] = useState(false)
    useEffect(() => console.log('Effect'), [loggedIn]) 

    if (loggedIn) {
        return <img className="profile-picture" src='https://cdn-icons-png.flaticon.com/512/5087/5087579.png'/>
    }

    return <button onClick={() => setLoggedIn(true)}>Log In</button>
}

//Création du composant App
function App() {
    const [highlighted, setHighlighted] = useState(false)

    return (
        <div className="App">
            <Login/>
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

//Exportation du composant App pour l'appeler dans main.jsx
export default App
