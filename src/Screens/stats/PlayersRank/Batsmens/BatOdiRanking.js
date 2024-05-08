import React from 'react'
import Navbar from '../../../../navbar/Navbar'
import StatsNav from '../../StatsNav'
import "../../CountryRank/CountryRank.css"


import nz from "../../Country flags/NZ.jpeg"
import eng from "../../Country flags/eng.jpeg"
import pak from "../../Country flags/pak.png"
import aus from "../../Country flags/aus.jpeg"
import sa from "../../Country flags/SA.jpeg"
import ind from "../../Country flags/ind.jpeg"
import sl from "../../Country flags/L.jpeg"

import CountryRank from '../../CountryRank/CountryRank'
import Footer from '../../../../navbar/Footer'

const BatOdiRanking = () => {
  return (
    <div>
    <Navbar/>
    <div style={{display:"flex"}}>
      <div>
    <StatsNav/>
    </div>
    <div className='table'>
      <h3>Men's ODI Bating Ranking</h3>
      <p>Last Update on 9<sup>th</sup> April</p>
   <table>
   <tr>
      <th>Rank</th>
      <th>Country </th>
      <th>Player Name</th>
      <th>Rating</th>
      </tr>
    <tr>
    <CountryRank RankNumber={"1"} countryImg={pak} name={"Babar Azam"} rating={"824"} />
    </tr>

<tr>
    <CountryRank RankNumber={"2"} countryImg={ind} name={"Shubman Gill"} rating={"801"} />
    </tr>
    <tr>
    <CountryRank RankNumber={"3"} countryImg={ind} name={"Virat Kohli"} rating={"768"} />
    </tr>
    <tr>
    <CountryRank RankNumber={"4"} countryImg={ind} name={"Rohit Sharma"} rating={"746"} />
    </tr>
    <tr>
    <CountryRank RankNumber={"5"} countryImg={"https://th.bing.com/th/id/OIP.1lPVP3f-9UOQ_C2AdG9aHQAAAA?w=189&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7"} name={"Harry Tector"} rating={"746"} />
    </tr>
    <tr>
    <CountryRank RankNumber={"6"} countryImg={nz} name={"Daryl Mitchell"} rating={"728"} />
    </tr>
    <tr>
    <CountryRank RankNumber={"7"} countryImg={aus} name={"David Warner"} rating={"723"} />
    </tr>
    <tr>
    <CountryRank RankNumber={"8"} countryImg={sl} name={"Pathum Nisanka"} rating={"711"} />
    </tr>
    <tr>
    <CountryRank RankNumber={"9"} countryImg={eng} name={"Dawid Malan"} rating={"707"} />
    </tr>
    <tr>
    <CountryRank RankNumber={"10"} countryImg={sa} name={"Rassie Van Der Dussen"} rating={"701"} />
    
    </tr>
   </table>
   </div>
  
    </div>

    <Footer/>
  
</div>
  )
}

export default BatOdiRanking
