import React from 'react'
import Navbar from '../../navbar/Navbar'
import MatchTypeNav from './MatchTypeNav'
import Footer from '../../navbar/Footer'
import { MatchesListData } from '../../DataFiles/Matches_list'

const LeagueMatches = () => {
  return (
    <div>
        <Navbar/>
        <MatchTypeNav/>
        <div>
        <div className='cart'>
      {MatchesListData && MatchesListData?.typeMatches[1]?.seriesMatches?.map((serise)=>(
        <>
          <h4 className='heading'>{serise?.seriesAdWrapper?.seriesName}</h4>
        {serise?.seriesAdWrapper?.matches?.map((match)=>(
          <div className='matches' style={{margin:"10px"}}>
          <p style={{fontSize:"14px", margin:"25px 10px 10px 10px "}}><b> {match?.matchInfo?.matchDesc}</b>: {match?.matchInfo?.seriesName}</p>
               <p><span style={{margin:"10px 50px 10px 10px"}}><img src={match?.matchInfo?.team1?.imageId} height={"20px"} width={"35px"}/><b>{match?.matchInfo?.team1?.teamSName}</b></span> {  match?. matchScore?.team1Score?.inngs1?.runs}<span>-{match?. matchScore?.team1Score?.inngs1?.wickets}</span> <span>{match?. matchScore?.team1Score?.inngs1?.over}</span> {match?. matchScore?.team1Score?.inngs2?.slash} {match?. matchScore?.team1Score?.inngs2?.runs}{match?. matchScore?.team1Score?.inngs2?.flag} {match?. matchScore?.team1Score?.inngs2?.wickets}<span>({match?. matchScore?.team1Score?.inngs1?.overs})</span> </p>
               <p><span style={{margin:"10px 50px 10px 10px"}}><img src={match?.matchInfo?.team2?.imageId} height={"20px"} width={"35px"}/><b>{match?.matchInfo?.team2?.teamSName}</b></span>  {match?. matchScore?.team2Score?.inngs1?.runs}<span>-{match?. matchScore?.team2Score?.inngs1?.wickets}</span> <span> {match?. matchScore?.team2Score?.inngs2?.over}</span>{match?. matchScore?.team1Score?.inngs2?.slash} {match?. matchScore?.team2Score?.inngs2?.runs} {match?. matchScore?.team1Score?.inngs2?.flag}{match?. matchScore?.team2Score?.inngs2?.wickets}<span>({match?. matchScore?.team2Score?.inngs1?.overs})</span> </p>
               <div>  <b style={{margin:"5px"}}>  Match Result:</b> {match?.matchInfo?.status} </div>
          </div>
        ))}
          </>
      ))}
     </div>
        </div>
      <Footer/>
    </div>
  )
}

export default LeagueMatches
