import React from 'react'
import "./Team.css"

const TeamPlayers = (props) => {
  return (
    <>

                <td style={{textAlign:"center"}}><b> {props.number}</b></td>
                <td style={{textAlign:"center"}}><b>{props.name}</b></td>
                <td style={{textAlign:"center"}}><b>{props.role}</b></td>
    </>
  )
}

export default TeamPlayers
