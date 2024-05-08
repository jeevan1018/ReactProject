import React from 'react'
import Navbar from '../../../../navbar/Navbar'
import StatsNav from '../../StatsNav'

import "../../CountryRank/CountryRank.css"


import nz from "../../Country flags/NZ.jpeg"
import sa from "../../Country flags/SA.jpeg"
import pak from "../../Country flags/pak.png"
import aus from "../../Country flags/aus.jpeg"
import ind from "../../Country flags/ind.jpeg"
import af from "../../Country flags/AF.jpeg"

import CountryRank from '../../CountryRank/CountryRank'
import Footer from '../../../../navbar/Footer'

const BowlOdiRank = () => {
  return (
    <div>
        <Navbar/>
        <div style={{display:"flex"}}>
          <div>
        <StatsNav/>
        </div>
        <div className='table'>
          <h3>Men's ODI Bowling Ranking</h3>
          <p>Last Update on 9<sup>th</sup> April</p>
       <table>
       <tr>
          <th>Rank</th>
          <th>Country </th>
          <th>Player Name</th>
          <th>Rating</th>
          </tr>
        <tr>
        <CountryRank RankNumber={"1"} countryImg={sa} name={"Keshav Maharaj"} rating={"716"} />
        </tr>

 <tr>
        <CountryRank RankNumber={"2"} countryImg={aus} name={"Josh Hazlewood"} rating={"688"} />
        </tr>
        <tr>
        <CountryRank RankNumber={"3"} countryImg={aus} name={"Adam Zampa"} rating={"686"} />
        </tr>
        <tr>
        <CountryRank RankNumber={"4"} countryImg={ind} name={"Mohammed Siraj"} rating={"678"} />
        </tr>
        <tr>
        <CountryRank RankNumber={"5"} countryImg={ind} name={"Jasprit Bumrah"} rating={"665"} />
        </tr>
        <tr>
        <CountryRank RankNumber={"6"} countryImg={af} name={"Mohammad Nabi"} rating={"656"} />
        </tr>
        <tr>
        <CountryRank RankNumber={"7"} countryImg={pak} name={"Shaheen Afridi"} rating={"650"} />
        </tr>
        <tr>
        <CountryRank RankNumber={"8"} countryImg={ind} name={"Kuldeep Yadav"} rating={"645"} />
        </tr>
        <tr>
        <CountryRank RankNumber={"9"} countryImg={nz} name={"Trent Boult"} rating={"643"} />
        </tr>
        <tr>
        <CountryRank RankNumber={"10"} countryImg={af} name={"Rashid Khan"} rating={"634"} />
        
        </tr>
       </table>
       </div>
      
        </div>

        <Footer/>
      
    </div>
  )
}

export default BowlOdiRank
