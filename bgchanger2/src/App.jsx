import { useState } from "react"
function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0
       px-5 ">
         <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-1.5 rounded-xl">
  <button onClick={(color)=>{setColor("red")}} className="outline-none px-4 rounded-full" style={{backgroundColor:"red"}}>Red</button>
  <button onClick={(color)=>{setColor("green")}} className="outline-none px-4 rounded-full" style={{backgroundColor:"green"}}>Green</button>
  <button onClick={(color)=>{setColor("yellow")}} className="outline-none px-4 rounded-full" style={{backgroundColor:"yellow"}}>yellow</button>
  <button onClick={(color)=>{setColor("blue")}} className="outline-none px-4 rounded-full" style={{backgroundColor:"blue"}}>blue</button>
  <button onClick={(color)=>{setColor("orange")}} className="outline-none px-4 rounded-full" style={{backgroundColor:"orange"}}>orange</button>
  <button onClick={(color)=>{setColor("olive")}} className="outline-none px-4 rounded-full" style={{backgroundColor:"olive"}}>default</button></div>
   </div> </div>
  )
}

export default App
