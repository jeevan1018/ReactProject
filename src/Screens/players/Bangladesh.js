import React from 'react'
import Navbar from '../../navbar/Navbar'
import NavTeam from "./NavTeam"
import TeamPlayers from './Team'
import Footer from '../../navbar/Footer'
import ban from "../stats/Country flags/ban.jpeg"

const Bangladesh = () => {
  return (
    <div>
    <Navbar/>
<div  style={{display:"flex"}}>
<div>
<NavTeam/>
</div>
<div className="table">
<h3><img src={ban} height={"50px"} width={"75px"} />Bangladesh Squard </h3>
<p> T-20 World Cup 2024(U.S.A)</p>

<table >
  <tr>
  <TeamPlayers number={"1"} name={"Najmul Hosain Shanto(c)"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"2"} name={"Soumya Sarkar"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"3"} name={"Towhid Hridoy"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"4"} name={"Tanzid Hasan"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"5"} name={"Mahmudullah"} role={"All-Rounder"}/>
  </tr>
  <tr>
   <TeamPlayers number={"6"} name={"Litton Das(wk)"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"7"} name={"Jaker Ali(wk)"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"8"} name={"Mahendi Hasan"} role={"All-Rounder"}/>
  </tr>
  <tr>
   <TeamPlayers number={"9"} name={"Shakib Al Hasan"} role={"All-Rounder"}/>
  </tr>
  <tr>
   <TeamPlayers number={"10"} name={"Mahmudullah"} role={"All-Rounder"}/>
  </tr>
  <tr>
   <TeamPlayers number={"11"} name={"Rishad Hossain"} role={"Spinner"}/>
  </tr>
  <tr>
   <TeamPlayers number={"12"} name={"Shoriful Islam"} role={"Spinner"}/>
  </tr>
  <tr>
   <TeamPlayers number={"13"} name={"Tanzim Haan Sakib"} role={"Bowler"}/>
  </tr>
  <tr>
   <TeamPlayers number={"14"} name={"Taskin Ahmed"} role={"Bowler"}/>
  </tr>
  <tr>
   <TeamPlayers number={"15"} name={"Tanvir Islam"} role={"Bowler"}/>
  </tr>
</table>
</div>

</div>
<Footer/>
    
  
</div>
  )
}

export default Bangladesh
