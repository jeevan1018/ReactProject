import React from 'react'

const VenuesProp = (props) => {
  return (
    <div>

<p><b>{props.stadium}</b><br/><i>{props.location}</i></p>


    <img src={props.image} height={"300px"} width={"600px"}/>




      
    </div>
  )
}

export default VenuesProp
