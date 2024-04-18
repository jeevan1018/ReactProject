import React from 'react'
import { useNavigate } from 'react-router-dom'

const Default = () => {
  const NavigateHome=useNavigate()
  const HandleHome=()=>{
    NavigateHome("/")

  }
  return (
    <div>
        <h1>Something went wrong im home page</h1>
        <button onClick={HandleHome}>Go to Home</button>
      
    </div>
  )
}

export default Default
