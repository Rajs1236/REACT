import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        {/* //outlet dene s hota y h ki upr header same rheg FOOTEER
        // SAME RHEGA PR BEECH M CONTENT CHANGE HOTA RHEGA */}
        <Footer/>
        
        </>

    )
}
export default Layout