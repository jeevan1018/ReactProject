import React from 'react'
import Navbar from '../../navbar/Navbar'
import NavTeam from "./NavTeam"
import TeamPlayers from './Team'
import Footer from '../../navbar/Footer'
import eng from "../stats/Country flags/eng.jpeg"

const England = () => {
  return (
    <div>
    <Navbar/>
<div  style={{display:"flex"}}>
<div>
<NavTeam/>
</div>
<div className="table">
<h3><img src={eng} height={"50px"} width={"75px"} />England Squard </h3>
<p> T-20 World Cup 2024(U.S.A)</p>

<table >
  <tr>
  <TeamPlayers number={"1"} name={"Jos Buttler (c)"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"2"} name={"Jonathan Bairstow"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"3"} name={"Harry Brook"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"4"} name={"Ben Duckett"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"5"} name={"Moeen Ali"} role={"All-Rounder"}/>
  </tr>
  <tr>
   <TeamPlayers number={"6"} name={"Mark Wood"} role={"Bowler"}/>
  </tr>
  <tr>
   <TeamPlayers number={"7"} name={"Phil Salt(WK)"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"8"} name={"Sam Curran"} role={"All-Rounder"}/>
  </tr>
  <tr>
   <TeamPlayers number={"9"} name={"Will Jacks"} role={"All-Rounder"}/>
  </tr>
  <tr>
   <TeamPlayers number={"10"} name={"Liam Livingstone"} role={"All-Rounder"}/>
  </tr>
  <tr>
   <TeamPlayers number={"11"} name={"Tom Hartley"} role={"Spinner"}/>
  </tr>
  <tr>
   <TeamPlayers number={"12"} name={"Adil Rashid"} role={"Spinner"}/>
  </tr>
  <tr>
   <TeamPlayers number={"13"} name={"Jofra Archer"} role={"Bowler"}/>
  </tr>
  <tr>
   <TeamPlayers number={"14"} name={"Reece Topley"} role={"Bowler"}/>
  </tr>
  <tr>
   <TeamPlayers number={"15"} name={"Chris Jordan"} role={"Bowler"}/>
  </tr>
</table>
</div>

</div>
<Footer/>
    
  
</div>
  )
}

export default England
