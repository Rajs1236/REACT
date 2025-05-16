import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Intro from './components/introduction/Intro'
import Education from './components/Education/Edu'
import Header from './components/header/Header'
function App() {
  const [count, setCount] = useState(0)
const [about,aboutactive]=useState(false)
  return (
    <>
    <Header/>
   <div>

    </div>
    </>
  )
}

export default App
