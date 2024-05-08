import React from 'react'
import Navbar from '../../../navbar/Navbar'
import StatsNav from '../StatsNav'
import NavCountryRank from './NavCountryRank'
import CountryRank from './CountryRank'
import Footer from '../../../navbar/Footer'
import "./CountryRank.css"
import ind from "../Country flags/ind.jpeg"
import aus from "../Country flags/aus.jpeg"
import sa from "../Country flags/SA.jpeg"
import pak from "../Country flags/pak.png"
import nz from "../Country flags/NZ.jpeg"
import eng from "../Country flags/eng.jpeg"
import sl from "../Country flags/L.jpeg"
import ban from "../Country flags/ban.jpeg"
import wi from "../Country flags/WI.jpeg"
import af from "../Country flags/AF.jpeg"

const T20CountryRank = () => {
  return (
    <>
    <Navbar/>
    <div style={{display:"flex"}}>
      <div>
        <StatsNav/>
      </div>
    <div className='table'>
      
      <NavCountryRank/>
      
        <div style={{marginTop:"20px"}}>
        <table>
          <tr>
          <th>Rank</th>
          <th>Flag</th>
          <th>Country Name</th>
          <th>Rating</th>
          </tr>
          <tr><CountryRank RankNumber={"1"} countryImg={ind} name={"India"} rating={"121"} /></tr>
          <tr><CountryRank RankNumber={"2"} countryImg={aus} name={"Australia"} rating={"118"} /></tr>
          <tr><CountryRank RankNumber={"3"} countryImg={sa} name={"South Africa"} rating={"110"} /></tr>
          <tr><CountryRank RankNumber={"4"} countryImg={pak} name={"Pakistan"} rating={"109"} /></tr>
          <tr><CountryRank RankNumber={"5"} countryImg={nz} name={"New Zealand"} rating={"102"} /></tr>
          <tr><CountryRank RankNumber={"6"} countryImg={eng} name={"England"} rating={"96"} /></tr>
          <tr><CountryRank RankNumber={"7"} countryImg={sl} name={"Sri Lanka"} rating={"90"} /></tr>
          <tr><CountryRank RankNumber={"8"} countryImg={ban} name={"Bangladesh"} rating={"88"} /></tr>
          <tr><CountryRank RankNumber={"9"} countryImg={wi} name={"West Indies"} rating={"81"} /></tr>
          <tr><CountryRank RankNumber={"10"} countryImg={af} name={"Afghanistan"} rating={"71"} /></tr>
          
        </table>
</div>
    
      
    </div>
    

    </div>
    <Footer/>
    </>
  )
}

export default T20CountryRank
