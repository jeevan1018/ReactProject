import React from 'react'
import "./CountryRank.css"

const CountryRank = (props) => {
  return (
    
        
            <>
          
                <td><b> {props.RankNumber}</b></td>
                <td><img src={props.countryImg} height={"50px"} width={"80px"} /></td>
                <td><b>{props.name}</b></td>
                <td><b>{props.rating}</b></td>

                </>
                
              
               
                
                
          
        

      
  
  )
}

export default CountryRank
