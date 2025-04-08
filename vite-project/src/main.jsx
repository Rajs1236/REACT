import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
function Myapp(){
   return (
      <div><h1>CUSTOM-APP!!</h1></div>
   )
}
<h1>hello</h1>

createRoot(document.getElementById('root')).render(
  Myapp()
)
