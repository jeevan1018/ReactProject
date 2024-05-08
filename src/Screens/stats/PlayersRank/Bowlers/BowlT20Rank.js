import React from 'react'
import Navbar from '../../../../navbar/Navbar'
import StatsNav from '../../StatsNav'

import "../../CountryRank/CountryRank.css"



import eng from "../../Country flags/eng.jpeg"
import sa from "../../Country flags/SA.jpeg"
import aus from "../../Country flags/aus.jpeg"
import ind from "../../Country flags/ind.jpeg"
import sl from "../../Country flags/L.jpeg"
import wi from "../../Country flags/WI.jpeg"
import af from "../../Country flags/AF.jpeg"

import CountryRank from '../../CountryRank/CountryRank'
import Footer from '../../../../navbar/Footer'
const BowlT20Rank = () => {
  return (
    <div>
    <Navbar/>
    <div style={{display:"flex"}}>
      <div>
    <StatsNav/>
    </div>
    <div className='table'>
      <h3>Men's T-20 Bowling Ranking</h3>
      <p>Last Update on 9<sup>th</sup> April</p>
   <table>
   <tr>
      <th>Rank</th>
      <th>Country </th>
      <th>Player Name</th>
      <th>Rating</th>
      </tr>
    <tr>
    <CountryRank RankNumber={"1"} countryImg={eng} name={"Adil Rashid"} rating={"726"} />
    </tr>

<tr>
    <CountryRank RankNumber={"2"} countryImg={sl} name={"Wanindu Hasaranga"} rating={"687"} />
    </tr>
    <tr>
    <CountryRank RankNumber={"3"} countryImg={wi} name={"Akeal Hosien"} rating={"664"} />
    </tr>
    <tr>
    <CountryRank RankNumber={"4"} countryImg={ind} name={"Axar Patel"} rating={"660"} />
    </tr>
    <tr>
    <CountryRank RankNumber={"5"} countryImg={sl} name={"Maheesh Theekshana"} rating={"659"} />
    </tr>
    <tr>
    <CountryRank RankNumber={"6"} countryImg={ind} name={"Ravi Bishnoi"} rating={"659"} />
    </tr>
    <tr>
    <CountryRank RankNumber={"7"} countryImg={aus} name={"Josh Hazlewood"} rating={"654"} />
    </tr>
    <tr>
    <CountryRank RankNumber={"8"} countryImg={sa} name={"Tabraiz Shamsi"} rating={"654"} />
    </tr>
    <tr>
    <CountryRank RankNumber={"9"} countryImg={af} name={"Rashid Khan"} rating={"645"} />
    </tr>
    <tr>
    <CountryRank RankNumber={"10"} countryImg={eng} name={"Reece Topley"} rating={"643"} />
    
    </tr>
   </table>
   </div>
  
    </div>

    <Footer/>
  
</div>
  )
}

export default BowlT20Rank
