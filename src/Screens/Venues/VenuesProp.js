import React from 'react'
import "./VenuesProps.css"
import logo from "./location-pin.svg"

const VenuesProp = (props) => {
  return (
      <div className='container'>
       <img className='image' src={props.image} height={"300px"} width={"600px"}/>
      

<p className="text"><b>{props.stadium}</b><br/><i><img src={logo} height={"20px"} width={"15px"}/>{props.location}</i></p>


   




      
    </div>
    
  )
}

export default VenuesProp
