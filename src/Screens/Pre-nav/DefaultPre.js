import React from 'react'
import { useNavigate } from 'react-router-dom'

const DefaultPre = () => {
    const NavigateToLogin=useNavigate();

    const HandleLogin=()=>{
        NavigateToLogin("/")
    }
  return (
    <div>
      <button onClick={HandleLogin}>GO to login</button>
    </div>
  )
}

export default DefaultPre
