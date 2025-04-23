import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [color,setColor]=useState("olive")
 const button=document.getElementsByTagName("button");
  const colorchange=(color)=>{
  document.body.style.backgroundColor
  =color;
  }

  return (
  <>
  <button onClick={()=>colorchange("lightGreen")}>Green</button>
  <button onClick={()=>colorchange("red")}>red</button>
  <button onClick={()=>colorchange("blue")}>blue</button>
  <button onClick={()=>colorchange("#7D7ABC")}>lavender</button>
  <button onClick={()=>colorchange("#463239")}>brown</button>
  </>
  )
}

export default App
