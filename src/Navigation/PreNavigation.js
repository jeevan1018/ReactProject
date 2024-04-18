import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from '../Screens/Pre-nav/Login'
import Register from '../Screens/Pre-nav/Register'
import DefaultPre from '../Screens/Pre-nav/DefaultPre'

const PreNavigation = () => {
  return (
    <div>
        
        <Routes>
            <Route path="/" Component={Login}/>
            <Route path="/register" Component={Register}/>
            <Route path="/*" Component={DefaultPre}/>

        </Routes>
        
      
    </div>
  )
}

export default PreNavigation
