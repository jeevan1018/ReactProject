import React from 'react'
import Navbar from '../../../../navbar/Navbar'
import StatsNav from '../../StatsNav'
import "../../CountryRank/CountryRank.css"


import nz from "../../Country flags/NZ.jpeg"
import eng from "../../Country flags/eng.jpeg"
import pak from "../../Country flags/pak.png"
import aus from "../../Country flags/aus.jpeg"
import ind from "../../Country flags/ind.jpeg"
import sl from "../../Country flags/L.jpeg"

import CountryRank from '../../CountryRank/CountryRank'
import Footer from '../../../../navbar/Footer'

const BatTestRanking = () => {
  return (
    <div>
        <Navbar/>
        <div style={{display:"flex"}}>
          <div>
        <StatsNav/>
        </div>
        <div className='table'>
          <h3>Men's Test Bating Ranking</h3>
          <p>Last Update on 9<sup>th</sup> April</p>
       <table>
       <tr>
          <th>Rank</th>
          <th>Country </th>
          <th>Player Name</th>
          <th>Rating</th>
          </tr>
        <tr>
        <CountryRank RankNumber={"1"} countryImg={nz} name={"Kane Williamson"} rating={"859"} />
        </tr>

 <tr>
        <CountryRank RankNumber={"2"} countryImg={eng} name={"Joe Root"} rating={"824"} />
        </tr>
        <tr>
        <CountryRank RankNumber={"3"} countryImg={pak} name={"Babar Azam"} rating={"768"} />
        </tr>
        <tr>
        <CountryRank RankNumber={"4"} countryImg={nz} name={"Daryl Mitchell"} rating={"757"} />
        </tr>
        <tr>
        <CountryRank RankNumber={"5"} countryImg={aus} name={"Steve Smith"} rating={"751"} />
        </tr>
        <tr>
        <CountryRank RankNumber={"6"} countryImg={ind} name={"Rohit Sharma"} rating={"740"} />
        </tr>
        <tr>
        <CountryRank RankNumber={"7"} countryImg={ind} name={"Yashasvi Jaiswal"} rating={"739"} />
        </tr>
        <tr>
        <CountryRank RankNumber={"8"} countryImg={sl} name={"Dimuth Karunaratne"} rating={"737"} />
        </tr>
        <tr>
        <CountryRank RankNumber={"9"} countryImg={ind} name={"Virat Kohli"} rating={"735"} />
        </tr>
        <tr>
        <CountryRank RankNumber={"10"} countryImg={eng} name={"Harry Brook"} rating={"896"} />
        
        </tr>
       </table>
       </div>
      
        </div>

        <Footer/>
      
    </div>
  )
}

export default BatTestRanking
