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

const BatT20Ranking = () => {
  return (
    <div>
        <Navbar/>
        <div style={{display:"flex"}}>
          <div>
        <StatsNav/>
        </div>
        <div className='table'>
          <h3>Men's T-20 Bating Ranking</h3>
          <p>Last Update on 9<sup>th</sup> April</p>
       <table>
       <tr>
          <th>Rank</th>
          <th>Country </th>
          <th>Player Name</th>
          <th>Rating</th>
          </tr>
        <tr>
        <CountryRank RankNumber={"1"} countryImg={ind} name={"Surya Kumar Yadav "} rating={"861"} />
        </tr>

 <tr>
        <CountryRank RankNumber={"2"} countryImg={eng} name={"Phil Salt"} rating={"802"} />
        </tr>
        <tr>
        <CountryRank RankNumber={"3"} countryImg={pak} name={"Mohammad Rizwan"} rating={"784"} />
        </tr>
        <tr>
        <CountryRank RankNumber={"4"} countryImg={pak} name={"Babar Azam"} rating={"763"} />
        </tr>
        <tr>
        <CountryRank RankNumber={"5"} countryImg={sa} name={"Aiden Makram"} rating={"755"} />
        </tr>
        <tr>
        <CountryRank RankNumber={"6"} countryImg={ind} name={"Yashasvi Jaiwal"} rating={"714"} />
        </tr>
        <tr>
        <CountryRank RankNumber={"7"} countryImg={sa} name={"Rilee Rosouw"} rating={"689"} />
        </tr>
        <tr>
        <CountryRank RankNumber={"8"} countryImg={eng} name={"Jos Buttler"} rating={"680"} />
        </tr>
        <tr>
        <CountryRank RankNumber={"9"} countryImg={sa} name={"Reeza Hendricks"} rating={"660"} />
        </tr>
        <tr>
        <CountryRank RankNumber={"10"} countryImg={eng} name={"Dawid Malan"} rating={"657"} />
        
        </tr>
       </table>
       </div>
      
        </div>

        <Footer/>
      
    </div>
  )
}

export default BatT20Ranking
