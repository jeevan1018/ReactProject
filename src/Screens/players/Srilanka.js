import React from 'react'
import Navbar from '../../navbar/Navbar'
import NavTeam from "./NavTeam"
import TeamPlayers from './Team'
import Footer from '../../navbar/Footer'
import sl from "../stats/Country flags/L.jpeg"

const Srilanka = () => {
  return (
    <div>
    <Navbar/>
<div  style={{display:"flex"}}>
<div>
<NavTeam/>
</div>
<div className="table">
<h3><img src={sl} height={"50px"} width={"75px"} />India Squard </h3>
<p> T-20 World Cup 2024(U.S.A)</p>

<table >
  <tr>
  <TeamPlayers number={"1"} name={"Wanindu Hasaranga(c)"} role={"All-Rounder"}/>
  </tr>
  <tr>
   <TeamPlayers number={"2"} name={"Kusal Mendis(wk)"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"3"} name={"Pathum Nissanka"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"4"} name={"Sadeera Samarawickrama(wk)"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"5"} name={"Charith Asalanka(vc)"} role={"All-Rounder"}/>
  </tr>
  <tr>
   <TeamPlayers number={"6"} name={"Dhananjaya de Silva"} role={"All-Rounder"}/>
  </tr>
  <tr>
   <TeamPlayers number={"7"} name={"Angelo Mathews"} role={"All-Rounder"}/>
  </tr>
  <tr>
   <TeamPlayers number={"8"} name={"Kamindu Mendis"} role={"All-Rounder"}/>
  </tr>
  <tr>
   <TeamPlayers number={"9"} name={"Dasun Shanaka"} role={"All-Rounder"}/>
  </tr>
  <tr>
   <TeamPlayers number={"10"} name={"Dushmantha Chameera"} role={"All-Rounder"}/>
  </tr>
  <tr>
   <TeamPlayers number={"11"} name={"Dunith Wellalage"} role={"spinner"}/>
  </tr>
  <tr>
   <TeamPlayers number={"12"} name={"Maheesh Theekshana"} role={"Spinner"}/>
  </tr>
  <tr>
   <TeamPlayers number={"13"} name={"Matheesha Pathirana"} role={"Bowler"}/>
  </tr>
  <tr>
   <TeamPlayers number={"14"} name={"Nuwan Thushara"} role={"Bowler"}/>
  </tr>
  <tr>
   <TeamPlayers number={"15"} name={"Dilshan Madushanka"} role={"Bowler"}/>
  </tr>
</table>
</div>

</div>
<Footer/>
    
  
</div>
  )
}

export default Srilanka
