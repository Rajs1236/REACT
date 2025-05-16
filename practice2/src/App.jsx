import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from './Mn'
import { Outlet } from 'react-router'
import Header from './Header'
import About from './About'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
   <nav>
<div className='bg-gray-400 text-xl'>

<Header/>
<Outlet/>


</div>

   </nav>
    </div>
  )
}

export default App
