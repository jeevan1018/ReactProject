import React from 'react'
import Navbar from '../../navbar/Navbar'
import NavTeam from "../players/NavTeam"
import TeamPlayers from './Team'
import Footer from '../../navbar/Footer'
import aus from "../stats/Country flags/aus.jpeg"

const Australia = () => {
  return (
    <div>
    <Navbar/>
<div  style={{display:"flex"}}>
<div>
<NavTeam/>
</div>
<div className="table">
<h3><img src={aus} height={"50px"} width={"75px"} />Australia Squard </h3>
<p> T-20 World Cup 2024(U.S.A)</p>

<table >
  <tr>
  <TeamPlayers number={"1"} name={"Mitchell Marsh(C)"} role={"All-rounder"}/>
  </tr>
  <tr>
   <TeamPlayers number={"2"} name={"Ashton Agar"} role={"All-rounder"}/>
  </tr>
  <tr>
   <TeamPlayers number={"3"} name={"Pat Cummins(VC)"} role={"Bowler"}/>
  </tr>
  <tr>
   <TeamPlayers number={"4"} name={"Tim David"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"5"} name={"Glenn Maxwell"} role={"All-Rounder"}/>
  </tr>
  <tr>
   <TeamPlayers number={"6"} name={"Matthew Wade(wk)"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"7"} name={"Josh Inglis (wk)"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"8"} name={"Nathan Ellis"} role={"Bowler"}/>
  </tr>
  <tr>
   <TeamPlayers number={"9"} name={"Cameron Green"} role={"All-Rounder"}/>
  </tr>
  <tr>
   <TeamPlayers number={"10"} name={"Marcus Stoinis"} role={"All-Rounder"}/>
  </tr>
  <tr>
   <TeamPlayers number={"11"} name={"David Warner"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"12"} name={"Adam Zampa"} role={"Spinner"}/>
  </tr>
  <tr>
   <TeamPlayers number={"13"} name={"Josh Hazlewood"} role={"Bowler"}/>
  </tr>
  <tr>
   <TeamPlayers number={"14"} name={"Travis Head"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"15"} name={"Mitchell Starc"} role={"Bowler"}/>
  </tr>
</table>
</div>

</div>
<Footer/>
    
  
</div>
  )
}

export default Australia
