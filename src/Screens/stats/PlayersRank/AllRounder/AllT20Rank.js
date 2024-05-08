import React from 'react'
import Navbar from '../../../../navbar/Navbar'
import StatsNav from '../../StatsNav'
import CountryRank from '../../CountryRank/CountryRank'

import nz from "../../Country flags/NZ.jpeg"
import ban from "../../Country flags/ban.jpeg"
import ind from "../../Country flags/ind.jpeg"
import af from "../../Country flags/AF.jpeg"
import sl from "../../Country flags/L.jpeg"
import sa from "../../Country flags/SA.jpeg"
import pak from "../../Country flags/pak.png"
import eng from "../../Country flags/eng.jpeg"
import aus from "../../Country flags/aus.jpeg"

import Footer from '../../../../navbar/Footer'

const AllT20Rank = () => {
  return (
    <div>
    <Navbar/>
    <div style={{display:"flex"}}>
      <div>
    <StatsNav/>
    </div>
    <div className='table'>
      <h3>Men's T20 All-Rounder Ranking</h3>
      <p>Last Update on 9<sup>th</sup> April</p>
   <table>
   <tr>
      <th>Rank</th>
      <th>Country </th>
      <th>Player Name</th>
      <th>Rating</th>
      </tr>
    <tr>
    <CountryRank RankNumber={"1"} countryImg={ban} name={"Shakib Al Hasan"} rating={"240"} />
    </tr>

<tr>
    <CountryRank RankNumber={"2"} countryImg={sl} name={"Wanindu Hasaranga"} rating={"228"} />
    </tr>
    <tr>
    <CountryRank RankNumber={"3"} countryImg={af} name={"Mohammad Nabi"} rating={"218"} />
    </tr>
    <tr>
    <CountryRank RankNumber={"4"} countryImg={sa} name={"Aiden Markram"} rating={"205"} />
    </tr>
    <tr>
    <CountryRank RankNumber={"5"} countryImg={aus} name={"Marcus Stoinis"} rating={"204"} />
    </tr>
    <tr>
    <CountryRank RankNumber={"6"} countryImg={"https://th.bing.com/th/id/OIP.9CqolJYm9oWX7qpKENdf9gAAAA?w=167&h=129&c=7&r=0&o=5&dpr=1.3&pid=1.7"} name={"Sikandar Raza"} rating={"202"} />
    </tr>
    <tr>
    <CountryRank RankNumber={"7"} countryImg={ind} name={"Hardik Pandya"} rating={"185"} />
    </tr>
    <tr>
    <CountryRank RankNumber={"8"} countryImg={eng} name={"Liam Livingstone"} rating={"175"} />
    </tr>
    <tr>
    <CountryRank RankNumber={"9"} countryImg={eng} name={"Moeen Ali"} rating={"173"} />
    </tr>
    <tr>
    <CountryRank RankNumber={"10"} countryImg={pak} name={"Shadab Khan"} rating={"171"} />
    
    </tr>
   </table>
   </div>
  
    </div>

    <Footer/>
  
</div>
  )
}

export default AllT20Rank
