import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,chaicounter]=useState(15)

const addvalue= ()=>{
  if(counter<40){
 console.log("clicked",counter);
  
  //counter=counter+1
  chaicounter(counter+1)   
  }
  else{
    alert("ruk ja bhai")
    console.log("no more clicking cntr is ",counter);
  }
 
}
const removevalue=()=>{
  if(counter>0){
     console.log("clicked",counter);
  chaicounter(counter-1) 
  }
  else{
    alert("ruk ja bhai")
    console.log("no more clicking cntr is ",counter);
  }

}
  return (
    <>
     <h1>chai aur react</h1>
     <h2>counter value: {counter}</h2>
    
     <br />
     <button
     onClick={addvalue}> ADD VALUE</button>
     <br></br>
     <button
     onClick={removevalue}>remove value</button>
    </>

  ) 
}

export default App
