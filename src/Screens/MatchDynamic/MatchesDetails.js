import React from 'react'
import { useParams } from 'react-router-dom'
import { MatchesListData } from '../../DataFiles/Matches_list';

const MatchesDetails = () => {
    const {idNumber}=useParams();
 const  MatchId=Number(idNumber)
   const MatchData=MatchesListData && MatchesListData?.typeMatches?.filter((val)=>val?.matchTypeId==MatchId)
    console.log(MatchData,"hii")
  return (
    <div>
        <h1>Dynamic match MatchesDetails {MatchId}</h1>
      
    </div>
  )
}

export default MatchesDetails;
