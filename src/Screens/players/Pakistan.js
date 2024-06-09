import React from 'react'
import Navbar from '../../navbar/Navbar'
import NavTeam from "./NavTeam"
import TeamPlayers from './Team'
import Footer from '../../navbar/Footer'
import pak from "../stats/Country flags/pak.png"

const Pakistan = () => {
  return (
    <div>
    <Navbar/>
<div  style={{display:"flex"}}>
<div>
<NavTeam/>
</div>
<div className="table">
<h3><img src={pak} height={"50px"} width={"75px"} />Pakistan Squard </h3>
<p> T-20 World Cup 2024(U.S.A)</p>

<table >
  <tr>
  <TeamPlayers number={"1"} name={"Babar Azam(c)"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"2"} name={"Mohammad Rizwan(wk)"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"3"} name={"Usman Khan"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"4"} name={"Fakhar Zaman"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"5"} name={"Azam Khan(wk)"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"6"} name={"Iftikhar Ahmed"} role={"All-Rounder"}/>
  </tr>
  <tr>
   <TeamPlayers number={"7"} name={"Shadab Khan"} role={"All-Rounder"}/>
  </tr>
  <tr>
   <TeamPlayers number={"8"} name={"Shaheen Afridi"} role={"Bowler"}/>
  </tr>
  <tr>
   <TeamPlayers number={"9"} name={"Naseem Shah"} role={"Bowler"}/>
  </tr>
  <tr>
   <TeamPlayers number={"10"} name={"Mohammad Amir"} role={"Bowler"}/>
  </tr>
  <tr>
   <TeamPlayers number={"11"} name={"Haris Rauf"} role={"Bowler"}/>
  </tr>
  <tr>
   <TeamPlayers number={"12"} name={"Saim Ayub"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"13"} name={"Imad Wasim"} role={"All-Rounder"}/>
  </tr>
  <tr>
   <TeamPlayers number={"14"} name={"Abbas Afridi"} role={"Bowler"}/>
  </tr>
  <tr>
   <TeamPlayers number={"15"} name={"Abrar Ahmed"} role={"Bowler"}/>
  </tr>
</table>
</div>

</div>
<Footer/>
    
  
</div>
  )
}

export default Pakistan
