import React, { createContext, useState } from 'react'
import PostNavigation from './PostNavigation'
import PreNavigation from './PreNavigation'
import { BrowserRouter } from 'react-router-dom'


export const LoginContext=createContext()

const Navigation = () => {

    const [login,setLogin]=useState(true)
    const HandleLogin=()=>{
        setLogin(true)
    }
  return (
    <>

    <LoginContext.Provider value={{login,HandleLogin}}>
    <BrowserRouter>



    {login ? <PostNavigation/>: <PreNavigation/>}
    
    
    
    </BrowserRouter>
    </LoginContext.Provider>


    </>
  )
}

export default Navigation
