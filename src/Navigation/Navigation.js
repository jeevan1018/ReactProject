import React, { createContext, useEffect, useState } from 'react'
import PostNavigation from './PostNavigation'
import PreNavigation from './PreNavigation'
import { BrowserRouter } from 'react-router-dom'
import { auth } from '../Screens/Pre-nav/firebase'



export const LoginContext=createContext()

const Navigation = () => {
  const [login, setLogin] = useState(false);
  
  useEffect((()=>{
    auth.onAuthStateChanged((user)=>{
    
      setLogin(user)
    })
  }),[])

  

    
     

   
  
   
     const HandleLogin = () => {
       setLogin(!login);
     };

  return (
    <>

    <BrowserRouter>
    <LoginContext.Provider value={{login,HandleLogin}}>



    {login ? <PostNavigation/>: <PreNavigation/>}
    
    
    
    </LoginContext.Provider>
    </BrowserRouter>


    </>
  )
}

export default Navigation
