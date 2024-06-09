/* import React, { createContext, useEffect, useState } from 'react'
import PostNavigation from './PostNavigation'
import PreNavigation from './PreNavigation'
import { BrowserRouter } from 'react-router-dom'
import { auth } from '../Screens/Pre-nav/firebase'



export const LoginContext=createContext()

const Navigation = () => {
  const [login, setLogin] = useState(true);
  
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

export default Navigation; */

import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from '../Screens/Pre-nav/Login'
import Register from '../Screens/Pre-nav/Register'


import Home from '../Screens/Home'
import Serise from '../Screens/Serise'
import Matches from '../Screens/Matches'
import Venus from '../Screens/Venus'
import Players from '../Screens/Players'
import Schedules from '../Screens/Schedules'

import Default from '../Screens/Default'
import InternationalMatches from '../Screens/MatchType/InternationalMatches'
import LeagueMatches from '../Screens/MatchType/LeagueMatches'
import DomesticMatches from '../Screens/MatchType/DomesticMatches'
import WomenMatches from '../Screens/MatchType/WomenMatches'

import BatTestRanking from '../Screens/stats/PlayersRank/Batsmens/BatTestRanking'
import BatOdiRanking from '../Screens/stats/PlayersRank/Batsmens/BatOdiRanking'
import BatT20Ranking from '../Screens/stats/PlayersRank/Batsmens/BatT20Ranking'
import BowlTestRank from '../Screens/stats/PlayersRank/Bowlers/BowlTestRank'
import BowlOdiRank from '../Screens/stats/PlayersRank/Bowlers/BowlOdiRank'
import BowlT20Rank from '../Screens/stats/PlayersRank/Bowlers/BowlT20Rank'
import AllTestRank from '../Screens/stats/PlayersRank/AllRounder/AllTestRank'
import AllOdilRank from '../Screens/stats/PlayersRank/AllRounder/AllOdilRank'
import AllT20Rank from '../Screens/stats/PlayersRank/AllRounder/AllT20Rank'


import India from '../Screens/players/India'
import Stats from '../Screens/Stats'
import TestCountry from '../Screens/stats/CountryRank/TestCountry'
import ODICountryRank from '../Screens/stats/CountryRank/ODICountryRank'
import T20CountryRank from '../Screens/stats/CountryRank/T20CountryRank'
import Afghanistan from '../Screens/players/Afghanistan'
import Australia from '../Screens/players/Australia'
import Bangladesh from '../Screens/players/Bangladesh'
import England from '../Screens/players/England'
import NewZealand from '../Screens/players/NewZealand'
import Pakistan from '../Screens/players/Pakistan'
import SouthAfrica from '../Screens/players/SouthAfrica'
import Srilanka from '../Screens/players/Srilanka'
import WestIndies from '../Screens/players/WestIndies'
import SeriesMatche from '../Screens/SeriseDynamic/SeriesMatche'
import MatchesDetails from '../Screens/MatchDynamic/MatchesDetails'
import Motera from '../Screens/Venues/Motera'

const Navigation=()=>{

  return(
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>


    <Route path={"/"} element={<Home/>}/>
        <Route path={"/series"} element={<Serise/>}/>
        <Route path={"/matches"} element={<Matches/>}/>
        <Route path={"/matches/:idNumber"} element={<MatchesDetails/>}/>
        <Route path={"/venues"} element={<Venus/>}/>
        <Route path={"/players"} element={<Players/>}>
          <Route path={"/players/india"} element={<India/>}/>
        </Route>
        <Route path={"/schedules"} element={<Schedules/>}/>
        <Route path={"/stats"} element={<Stats/>}/>
        <Route path={'/series/:id'} element={<SeriesMatche/>}/>


        <Route path={"/international"} element={<InternationalMatches/>} />
          <Route path={"/league"} element={<LeagueMatches/>} />
          <Route path={"/domestic"} element={<DomesticMatches/>} />
          <Route path={"/women"} element={<WomenMatches/>} />
        <Route path={"/*"} element={<Default/>}/>



        <Route path={"/testRank"} element={<TestCountry/>}/>
         <Route path={"/odiRank"} element={<ODICountryRank/>}/>
         <Route path={"/t20Rank"} element={<T20CountryRank/>}/>
        

        
        <Route path={"/batsRankTest"} element={<BatTestRanking/>}/>
            <Route path={"/batsRankODI"} element={<BatOdiRanking/>}/>
            <Route path={"/batsRankT20"} element={<BatT20Ranking/>}/>

            <Route path={"/bowlRankTest"} element={<BowlTestRank/>}/>
            <Route path={"/bowlRankODI"} element={<BowlOdiRank/>}/>
            <Route path={"/bowlRankT20"} element={<BowlT20Rank/>}/>


            <Route path={"/allRankTest"} element={<AllTestRank/>}/>
            <Route path={"/allRankODI"} element={<AllOdilRank/>}/>
            <Route path={"/allRankT20"} element={<AllT20Rank/>}/>



            <Route path={"/afghanistan"} element={<Afghanistan/>}/>
            <Route path={"/australia"} element={<Australia/>}/>
            <Route path={"/bangladesh"} element={<Bangladesh/>}/>
            <Route path={"/england"} element={<England/>}/>
            <Route path={"/india"} element={<India/>}/>
            <Route path={"/new-zealand"} element={<NewZealand/>}/>
            <Route path={"/pakistan"} element={<Pakistan/>}/>
            <Route path={"/south-africa"} element={<SouthAfrica/>}/>
            <Route path={"/sri-lanka"} element={<Srilanka/>}/>
            <Route path={"/west-indies"} element={<WestIndies/>}/>


<Route path={"/motera"} element={<Motera/>}/>
      
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default Navigation;



