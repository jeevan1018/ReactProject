import React from 'react'
import Navbar from '../../navbar/Navbar'
import NavTeam from "./NavTeam"
import TeamPlayers from './Team'
import Footer from '../../navbar/Footer'
import sa from "../stats/Country flags/SA.jpeg"

const SouthAfrica = () => {
  return (
    <div>
    <Navbar/>
<div  style={{display:"flex"}}>
<div>
<NavTeam/>
</div>
<div className="table">
<h3><img src={sa} height={"50px"} width={"75px"} />South-Africa Squard </h3>
<p> T-20 World Cup 2024(U.S.A)</p>

<table >
  <tr>
  <TeamPlayers number={"1"} name={"Aiden Markram(c)"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"2"} name={"Ottniel Baartman"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"3"} name={"David Miller"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"4"} name={"Tristan Stubbs"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"5"} name={"Reeza Hendricks"} role={"All-Rounder"}/>
  </tr>
  <tr>
   <TeamPlayers number={"6"} name={"Heinrich Klaasen(wk)"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"7"} name={"Quinton de Kock"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"8"} name={"Bjorn Fortuin"} role={"All-Rounder"}/>
  </tr>
  <tr>
   <TeamPlayers number={"9"} name={"Ryan Rickelton"} role={"All-Rounder"}/>
  </tr>
  <tr>
   <TeamPlayers number={"10"} name={"Marco Jansen"} role={"All-Rounder"}/>
  </tr>
  <tr>
   <TeamPlayers number={"11"} name={"Keshav Maharaj"} role={"Spinner"}/>
  </tr>
  <tr>
   <TeamPlayers number={"12"} name={" Tabraiz Shamsi"} role={"Spinner"}/>
  </tr>
  <tr>
   <TeamPlayers number={"13"} name={"Anrich Nortje"} role={"Bowler"}/>
  </tr>
  <tr>
   <TeamPlayers number={"14"} name={" Kagiso Rabada"} role={"Bowler"}/>
  </tr>
  <tr>
   <TeamPlayers number={"15"} name={"Gerald Coetzee"} role={"Bowler"}/>
  </tr>
</table>
</div>

</div>
<Footer/>
    
  
</div>
  )
}

export default SouthAfrica
