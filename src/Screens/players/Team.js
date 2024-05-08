import React from 'react'
import "../stats/CountryRank/CountryRank.css"

const TeamPlayers = (props) => {
  return (
    <>

                <td><b> {props.number}</b></td>
                <td><b>{props.name}</b></td>
                <td><b>{props.role}</b></td>
    </>
  )
}

export default TeamPlayers
