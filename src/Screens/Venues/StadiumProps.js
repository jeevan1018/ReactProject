import React from 'react'

const StadiumProps = (props) => {
  return (
    <div>
      <div>
        <img src={props.img1} height={"200px"} width={"200px"}/>
        <img src={props.img2} height={"200px"} width={"200px"}/>
        <img src={props.img3} height={"200px"} width={"200px"}/>
        <img src={props.img4} height={"200px"} width={"200px"}/>
        <p>{props.about}</p>
      </div>
      <h3><b>Stadium:</b>{props.name}</h3>
      <p><b>City:</b>{props.city}</p>
      <p><b>Capacity:</b>{props.capacity}</p>


    </div>
  )
}

export default StadiumProps
