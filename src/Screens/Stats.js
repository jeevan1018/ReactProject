import React from 'react'
import Navbar from '../navbar/Navbar'
import StatsNav from './stats/StatsNav'
import Footer from '../navbar/Footer'
import NavCountryRank from './stats/CountryRank/NavCountryRank'
import TestCountry from './stats/CountryRank/TestCountry'

const Stats = () => {
  return (
    <div>
        <Navbar/>
        <div style={{display:"flex"}}>
          <div> <StatsNav/></div>
          <div>
          
            <NavCountryRank/>

          


          </div>

        </div>
    
       

        
      <Footer/>
    </div>
  )
}

export default Stats
