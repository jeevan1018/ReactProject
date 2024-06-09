import React from 'react'
import Navbar from '../../navbar/Navbar'
import NavTeam from "./NavTeam"
import TeamPlayers from './Team'
import Footer from '../../navbar/Footer'
import nz from "../stats/Country flags/NZ.jpeg"

const NewZealand = () => {
  return (
    <div>
        <Navbar/>
<div  style={{display:"flex"}}>
  <div>
    <NavTeam/>
  </div>
  <div className="table">
    <h3><img src={nz} height={"50px"} width={"75px"} />New-Zealand Squard </h3>
    <p> T-20 World Cup 2024(U.S.A)</p>

    <table >
      <tr>
      <TeamPlayers number={"1"} name={"Kane Williamson(c)"} role={"Batsmen"}/>
      </tr>
      <tr>
       <TeamPlayers number={"2"} name={"Finn Allen"} role={"Batsmen"}/>
      </tr>
      <tr>
       <TeamPlayers number={"3"} name={"Michael Bracewell"} role={"Batsmen"}/>
      </tr>
      <tr>
       <TeamPlayers number={"4"} name={"Mark Chapman"} role={"Batsmen"}/>
      </tr>
      <tr>
       <TeamPlayers number={"5"} name={"Daryl Mitchell"} role={"All-Rounder"}/>
      </tr>
      <tr>
       <TeamPlayers number={"6"} name={"Devon Conway(wk)"} role={"Batsmen"}/>
      </tr>
      <tr>
       <TeamPlayers number={"7"} name={"Rachin Ravindra"} role={"Batsmen"}/>
      </tr>
      <tr>
       <TeamPlayers number={"8"} name={"Jimmy Neesham"} role={"All-Rounder"}/>
      </tr>
      <tr>
       <TeamPlayers number={"9"} name={"Glenn Phillips"} role={"All-Rounder"}/>
      </tr>
      <tr>
       <TeamPlayers number={"10"} name={"Mitchell Santner"} role={"All-Rounder"}/>
      </tr>
      <tr>
       <TeamPlayers number={"11"} name={"Tim Southee"} role={"Bowler"}/>
      </tr>
      <tr>
       <TeamPlayers number={"12"} name={"Ish Sodhi"} role={"Spinner"}/>
      </tr>
      <tr>
       <TeamPlayers number={"13"} name={"Matt Henry"} role={"Bowler"}/>
      </tr>
      <tr>
       <TeamPlayers number={"14"} name={"Lockie Ferguson"} role={"Bowler"}/>
      </tr>
      <tr>
       <TeamPlayers number={"15"} name={"Trent Boult"} role={"Bowler"}/>
      </tr>
    </table>
  </div>

</div>
<Footer/>
        
      
    </div>
  )
}

export default NewZealand
