import React from 'react'
import { Link } from 'react-router-dom'
import "./NavCountryRank.css"

const NavCountryRank = () => {
  return (
    <div style={{position:"sticky"}}>
    <h3 style={{margin:"10px"}}>ICC Men's Team Standings</h3>
    <div className='ranknav'>

       <div> <Link to={"/testRank"}>Test</Link></div>
       <div> <Link to={"/odiRank"}>ODI</Link></div>
       <div> <Link to={"/t20Rank"}>T20</Link> </div>
        
        
    
      
    </div>
    </div>
  )
}

export default NavCountryRank
