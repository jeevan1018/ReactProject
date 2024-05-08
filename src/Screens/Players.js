import React from 'react'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../navbar/Footer'
import NavTeam from "./players/NavTeam"

const Players = () => {
  return (
    <div>
        <Navbar/>
        <div>
          <div>
            <NavTeam/>
          </div>
          
        </div>
        
    <Footer/>  
    </div>
  )
}

export default Players
