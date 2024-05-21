import React from 'react'
import CountryRank from './CountryRank'
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
import Navbar from '../../../navbar/Navbar'
import StatsNav from '../StatsNav'
import Footer from '../../../navbar/Footer'
import NavCountryRank from './NavCountryRank'

const TestCountry = () => {
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
          <tr><CountryRank RankNumber={"1"} countryImg={aus} name={"Australia"} rating={"124"} /></tr>
          <tr><CountryRank RankNumber={"2"} countryImg={ind} name={"India"} rating={"120"} /></tr>
          <tr><CountryRank RankNumber={"3"} countryImg={eng} name={"England"} rating={"105"} /></tr>
          <tr><CountryRank RankNumber={"4"} countryImg={sa} name={"South Africa"} rating={"103"} /></tr>
          <tr><CountryRank RankNumber={"5"} countryImg={nz} name={"New Zealand"} rating={"96"} /></tr>
          <tr><CountryRank RankNumber={"6"} countryImg={pak} name={"Pakistan"} rating={"89"} /></tr>
          <tr><CountryRank RankNumber={"7"} countryImg={sl} name={"Sri Lanka"} rating={"83"} /></tr>
          <tr><CountryRank RankNumber={"8"} countryImg={wi} name={"West Indies"} rating={"82"} /></tr>
          <tr><CountryRank RankNumber={"9"} countryImg={ban} name={"Bangladesh"} rating={"53"} /></tr>
          <tr><CountryRank RankNumber={"10"} countryImg={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Flag_of_Zimbabwe.svg/125px-Flag_of_Zimbabwe.svg.png"} name={"Zimbabwe"} rating={"23"} /></tr>
          
        </table>
</div>
    
      
    </div>
    

    </div>
    <Footer/>
    </>
  )
}

export default TestCountry
