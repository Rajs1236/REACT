import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Menu from './Menu.jsx'
import Body from './Mn.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Login from './Login.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {path:"",
        element:<Body/>
      },{
        path:'menu',element:<Menu/>
      },{
        path:'about',element:<About/>
      },{
        path:'contact',element:<Contact/>
      },{
         path:'login',element:<Login/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
