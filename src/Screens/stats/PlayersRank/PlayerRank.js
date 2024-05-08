import React from 'react'


const PlayerRank = (props) => {
  return (
    
            <tr>
                <td><b> {props.number}</b></td>
                <td><img src={props.countryImg} height={"100px"} width={"150px"} /> <b>{props.countryName}</b></td>
                <td>  <b>{props.playerName}</b></td>
                <td><b>{props.rating}</b></td>
                
              
               
                
               </tr> 
            

      
    
  )
}

export default PlayerRank
