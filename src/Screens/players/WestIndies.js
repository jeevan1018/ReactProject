import React from 'react'
import Navbar from '../../navbar/Navbar'
import NavTeam from "./NavTeam"
import TeamPlayers from './Team'
import Footer from '../../navbar/Footer'
import wi from "../stats/Country flags/WI.jpeg"

const WestIndies = () => {
  return (
    <div>
    <Navbar/>
<div  style={{display:"flex"}}>
<div>
<NavTeam/>
</div>
<div className="table">
<h3><img src={wi} height={"50px"} width={"75px"} />India Squard </h3>
<p> T-20 World Cup 2024(U.S.A)</p>

<table >
  <tr>
  <TeamPlayers number={"1"} name={"Rovman Powell(c)"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"2"} name={"Johnson Charles"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"3"} name={"Shai Hope"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"4"} name={"Sherfane Rutherford"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"5"} name={"Andre Russell"} role={"All-Rounder"}/>
  </tr>
  <tr>
   <TeamPlayers number={"6"} name={"Nicholas Pooran"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"7"} name={"Shimron Hetmyer"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"8"} name={"Roston Chase"} role={"All-Rounder"}/>
  </tr>
  <tr>
   <TeamPlayers number={"9"} name={"Jason Holder"} role={"All-Rounder"}/>
  </tr>
  <tr>
   <TeamPlayers number={"10"} name={"Gudakesh Motie"} role={"All-Rounder"}/>
  </tr>
  <tr>
   <TeamPlayers number={"11"} name={"Romario Shepherd"} role={"Spinner"}/>
  </tr>
  <tr>
   <TeamPlayers number={"12"} name={"Brandon King"} role={"Spinner"}/>
  </tr>
  <tr>
   <TeamPlayers number={"13"} name={"Shamar Joseph"} role={"Bowler"}/>
  </tr>
  <tr>
   <TeamPlayers number={"14"} name={"Akeal Hosein"} role={"Bowler"}/>
  </tr>
  <tr>
   <TeamPlayers number={"15"} name={"Alzarri Joseph"} role={"Bowler"}/>
  </tr>
</table>
</div>

</div>
<Footer/>
    
  
</div>
  )
}

export default WestIndies
