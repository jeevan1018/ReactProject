import React from 'react'
import Navbar from '../../../../navbar/Navbar'
import StatsNav from '../../StatsNav'
import CountryRank from '../../CountryRank/CountryRank'

import ind from "../../Country flags/ind.jpeg"
import ban from "../../Country flags/ban.jpeg"
import eng from "../../Country flags/eng.jpeg"
import wi from "../../Country flags/WI.jpeg"
import aus from "../../Country flags/aus.jpeg"
import sa from "../../Country flags/SA.jpeg"
import Footer from '../../../../navbar/Footer'



const AllTestRank = () => {
  return (
    <div>
    <Navbar/>
    <div style={{display:"flex"}}>
      <div>
    <StatsNav/>
    </div>
    <div className='table'>
      <h3>Men's Test All-Rounder Ranking</h3>
      <p>Last Update on 9<sup>th</sup> April</p>
   <table>
   <tr>
      <th>Rank</th>
      <th>Country </th>
      <th>Player Name</th>
      <th>Rating</th>
      </tr>
    <tr>
    <CountryRank RankNumber={"1"} countryImg={ind} name={"Ravindra Jadeja"} rating={"444"} />
    </tr>

<tr>
    <CountryRank RankNumber={"2"} countryImg={ind} name={"RaviChandra Ashwin"} rating={"322"} />
    </tr>
    <tr>
    <CountryRank RankNumber={"3"} countryImg={ban} name={"Shakib Al Hasan"} rating={"310"} />
    </tr>
    <tr>
    <CountryRank RankNumber={"4"} countryImg={eng} name={"Joe Root"} rating={"282"} />
    </tr>
    <tr>
    <CountryRank RankNumber={"5"} countryImg={wi} name={"Jaon Holder"} rating={"270"} />
    </tr>
    <tr>
    <CountryRank RankNumber={"6"} countryImg={ind} name={"Axer Patel"} rating={"269"} />
    </tr>
    <tr>
    <CountryRank RankNumber={"7"} countryImg={eng} name={"Ben Stokes"} rating={"254"} />
    </tr>
    <tr>
    <CountryRank RankNumber={"8"} countryImg={aus} name={"Pat Cummins"} rating={"245"} />
    </tr>
    <tr>
    <CountryRank RankNumber={"9"} countryImg={sa} name={"Maeco Jansen"} rating={"235"} />
    </tr>
    <tr>
    <CountryRank RankNumber={"10"} countryImg={wi} name={"Kyle Mayers"} rating={"230"} />
    
    </tr>
   </table>
   </div>
  
    </div>

    <Footer/>
  
</div>
  )
}

export default AllTestRank
