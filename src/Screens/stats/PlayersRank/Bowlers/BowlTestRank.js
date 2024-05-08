import React from 'react'
import Navbar from '../../../../navbar/Navbar'
import StatsNav from '../../StatsNav'

import "../../CountryRank/CountryRank.css"


import nz from "../../Country flags/NZ.jpeg"
import eng from "../../Country flags/eng.jpeg"
import pak from "../../Country flags/pak.png"
import aus from "../../Country flags/aus.jpeg"
import ind from "../../Country flags/ind.jpeg"
import sa from "../../Country flags/SA.jpeg"

import CountryRank from '../../CountryRank/CountryRank'
import Footer from '../../../../navbar/Footer'

const BowlTestRank = () => {
  return (
    <div>
        <Navbar/>
        <div style={{display:"flex"}}>
          <div>
        <StatsNav/>
        </div>
        <div className='table'>
          <h3>Men's Test Bowling Ranking</h3>
          <p>Last Update on 9<sup>th</sup> April</p>
       <table>
       <tr>
          <th>Rank</th>
          <th>Country </th>
          <th>Player Name</th>
          <th>Rating</th>
          </tr>
        <tr>
        <CountryRank RankNumber={"1"} countryImg={ind} name={"Ravichandran Ashwin"} rating={"870"} />
        </tr>

 <tr>
        <CountryRank RankNumber={"2"} countryImg={aus} name={"Josh Hazlewood"} rating={"847"} />
        </tr>
        <tr>
        <CountryRank RankNumber={"3"} countryImg={ind} name={"Jasprit Bumrah"} rating={"847"} />
        </tr>
        <tr>
        <CountryRank RankNumber={"4"} countryImg={sa} name={"Kagiso Rabada"} rating={"834"} />
        </tr>
        <tr>
        <CountryRank RankNumber={"5"} countryImg={aus} name={"Pat Cummins"} rating={"820"} />
        </tr>
        <tr>
        <CountryRank RankNumber={"6"} countryImg={aus} name={"Nathan Lyon"} rating={"801"} />
        </tr>
        <tr>
        <CountryRank RankNumber={"7"} countryImg={ind} name={"Ravindra Jadeja"} rating={"788"} />
        </tr>
        <tr>
        <CountryRank RankNumber={"8"} countryImg={eng} name={"James Anderson"} rating={"739"} />
        </tr>
        <tr>
        <CountryRank RankNumber={"9"} countryImg={pak} name={"Shaheen Afridi"} rating={"733"} />
        </tr>
        <tr>
        <CountryRank RankNumber={"10"} countryImg={nz} name={"Kyle Jamieson"} rating={"729"} />
        
        </tr>
       </table>
       </div>
      
        </div>

        <Footer/>
      
    </div>
  )
}

export default BowlTestRank
