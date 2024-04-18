import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Screens/Home'
import Serise from '../Screens/Serise'
import Matches from '../Screens/Matches'
import Venus from '../Screens/Venus'
import Players from '../Screens/Players'
import Schedules from '../Screens/Schedules'
import Stats from '../Screens/Stats'
import Default from '../Screens/Default'
import InternationalMatches from '../Screens/MatchType/InternationalMatches'
import LeagueMatches from '../Screens/MatchType/LeagueMatches'
import DomesticMatches from '../Screens/MatchType/DomesticMatches'
import WomenMatches from '../Screens/MatchType/WomenMatches'
import StatsNav from '../Screens/stats/StatsNav'
import BatTestRanking from '../Screens/stats/PlayersRank/Batsmens/BatTestRanking'
import BatOdiRanking from '../Screens/stats/PlayersRank/Batsmens/BatOdiRanking'
import BatT20Ranking from '../Screens/stats/PlayersRank/Batsmens/BatT20Ranking'
import BowlTestRank from '../Screens/stats/PlayersRank/Bowlers/BowlTestRank'
import BowlOdiRank from '../Screens/stats/PlayersRank/Bowlers/BowlOdiRank'
import BowlT20Rank from '../Screens/stats/PlayersRank/Bowlers/BowlT20Rank'
import AllTestRank from '../Screens/stats/PlayersRank/AllRounder/AllTestRank'
import AllOdilRank from '../Screens/stats/PlayersRank/AllRounder/AllOdilRank'
import AllT20Rank from '../Screens/stats/PlayersRank/AllRounder/AllT20Rank'
import India from '../Players/India'


const PostNavigation = () => {
  return (
    <div>
      
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/series"} element={<Serise/>}/>
        <Route path={"/matches"} element={<Matches/>}/>
        <Route path={"/venues"} element={<Venus/>}/>
        <Route path={"/players"} element={<Players/>}>
          <Route path={"/players/india"} element={<India/>}/>
        </Route>
        <Route path={"/schedules"} element={<Schedules/>}/>
        <Route path={"/stats"} element={<Stats/>}/>

        <Route path={"/International"} element={<InternationalMatches/>} />
          <Route path={"/League"} element={<LeagueMatches/>} />
          <Route path={"/domestic"} element={<DomesticMatches/>} />
          <Route path={"/Women"} element={<WomenMatches/>} />
        <Route path={"/*"} element={<Default/>}/>
        

        
        <Route path={"/batsRankTest"} element={<BatTestRanking/>}/>
            <Route path={"/batsRankODI"} element={<BatOdiRanking/>}/>
            <Route path={"/batsRankT20"} element={<BatT20Ranking/>}/>

            <Route path={"/bowlRankTest"} element={<BowlTestRank/>}/>
            <Route path={"/bowlRankODI"} element={<BowlOdiRank/>}/>
            <Route path={"/bowlRankT20"} element={<BowlT20Rank/>}/>


            <Route path={"/allRankTest"} element={<AllTestRank/>}/>
            <Route path={"/allRankODI"} element={<AllOdilRank/>}/>
            <Route path={"/allRankT20"} element={<AllT20Rank/>}/>


      </Routes>
      
    
    </div>
  )
}

export default PostNavigation
