




import React from 'react'
import Navbar from '../../../../navbar/Navbar'
import StatsNav from '../../StatsNav'
import CountryRank from '../../CountryRank/CountryRank'

import nz from "../../Country flags/NZ.jpeg"
import af from "../../Country flags/AF.jpeg"
import ban from "../../Country flags/ban.jpeg"
import aus from "../../Country flags/aus.jpeg"
import ind from "../../Country flags/ind.jpeg"
import sa from "../../Country flags/SA.jpeg"

import Footer from '../../../../navbar/Footer'

const AllOdilRank = () => {
  return (
    <div>
    <Navbar/>
    <div style={{display:"flex"}}>
      <div>
    <StatsNav/>
    </div>
    <div className='table'>
      <h3>Men's ODI All-Rounder Ranking</h3>
      <p>Last Update on 9<sup>th</sup> April</p>
   <table>
   <tr>
      <th>Rank</th>
      <th>Country </th>
      <th>Player Name</th>
      <th>Rating</th>
      </tr>
    <tr>
    <CountryRank RankNumber={"1"} countryImg={af} name={"Mohammad Nabi"} rating={"320"} />
    </tr>

<tr>
    <CountryRank RankNumber={"2"} countryImg={ban} name={"Shakib al Hasan"} rating={"292"} />
    </tr>
    <tr>
    <CountryRank RankNumber={"3"} countryImg={"https://th.bing.com/th/id/OIP.9CqolJYm9oWX7qpKENdf9gAAAA?w=167&h=129&c=7&r=0&o=5&dpr=1.3&pid=1.7"} name={"Skindar Raza"} rating={"288"} />
    </tr>
    <tr>
    <CountryRank RankNumber={"4"} countryImg={"https://th.bing.com/th/id/OIP.YViFu8Vhwy7B913Dzg8XrAHaEZ?w=171&h=101&c=7&r=0&o=5&pid=1.7"} name={"Assad Vala"} rating={"248"} />
    </tr>
    <tr>
    <CountryRank RankNumber={"5"} countryImg={af} name={"Rashid Khan"} rating={"239"} />
    </tr>
    <tr>
    <CountryRank RankNumber={"6"} countryImg={aus} name={"Glenn Maxwell"} rating={"237"} />
    </tr>
    <tr>
    <CountryRank RankNumber={"7"} countryImg={nz} name={"Mitchell Santner"} rating={"233"} />
    </tr>
    <tr>
    <CountryRank RankNumber={"8"} countryImg={ban} name={"Mehidy Hasan"} rating={"230"} />
    </tr>
    <tr>
    <CountryRank RankNumber={"9"} countryImg={ind} name={"Ravindra Jadeja"} rating={"209"} />
    </tr>
    <tr>
    <CountryRank RankNumber={"10"} countryImg={sa} name={"Marco Janen"} rating={"209"} />
    
    </tr>
   </table>
   </div>
  
    </div>

    <Footer/>
  
</div>
  )
}

export default AllOdilRank
