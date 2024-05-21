import React from 'react'
import Navbar from '../../navbar/Navbar'
import NavTeam from "../players/NavTeam"
import TeamPlayers from './Team'
import Footer from '../../navbar/Footer'
import af from "../stats/Country flags/AF.jpeg"

const Afghanistan = () => {
  return (
    <div>
    <Navbar/>
<div  style={{display:"flex"}}>
<div>
<NavTeam/>
</div>
<div className="table">
<h3><img src={af} height={"50px"} width={"75px"} />India Squard </h3>
<p> T-20 World Cup 2024(U.S.A)</p>

<table >
  <tr>
  <TeamPlayers number={"1"} name={"Rashid Khan(c)"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"2"} name={"Rahmanullah Gurbaz"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"3"} name={"Ibrahim Zadran"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"4"} name={"Azmatullah Omarzai"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"5"} name={"Najibullah Zadran"} role={"All-Rounder"}/>
  </tr>
  <tr>
   <TeamPlayers number={"6"} name={"Mohammad Ishaq(wk)"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"7"} name={"Gulbadin Naib"} role={"Batsmen"}/>
  </tr>
  <tr>
   <TeamPlayers number={"8"} name={"Mohammad Nabi"} role={"All-Rounder"}/>
  </tr>
  <tr>
   <TeamPlayers number={"9"} name={"Karim Janat"} role={"All-Rounder"}/>
  </tr>
  <tr>
   <TeamPlayers number={"10"} name={"Nangyal Kharoti"} role={"All-Rounder"}/>
  </tr>
  <tr>
   <TeamPlayers number={"11"} name={"Mujeeb Ur Rahman,"} role={"Spinner"}/>
  </tr>
  <tr>
   <TeamPlayers number={"12"} name={"Noor Ahmad"} role={"Spinner"}/>
  </tr>
  <tr>
   <TeamPlayers number={"13"} name={"Naveen-ul-Haq"} role={"Bowler"}/>
  </tr>
  <tr>
   <TeamPlayers number={"14"} name={"Fazalhaq Farooqi"} role={"Bowler"}/>
  </tr>
  <tr>
   <TeamPlayers number={"15"} name={"Fareed Ahmad Malik"} role={"Bowler"}/>
  </tr>
</table>
</div>

</div>
<Footer/>
    
  
</div>
  )
}

export default Afghanistan
