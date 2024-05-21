import React from 'react'

const HomeProps = (props) => {
  return (
    <div style={{margin:"20px" ,height:"550px", width:"750px"}}>
<span><b>{props.text}</b></span><br/>
      <img src={props.image} height={"400px"} width={"700px"}/>
      <h3><a href={props.link}>{props.heading}</a></h3>
      <p>{props.para}</p>
    </div>
  )
}

export default HomeProps
