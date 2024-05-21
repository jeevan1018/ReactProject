// import React from 'react'
// import Navbar from '../../navbar/Navbar'
// import list from '../../DataFiles/Matches_list'

// const InternationalMatches = () => {
//   return (
//     <div>
//         <Navbar/>
//         <h1>
//             InternationalMatches
//         </h1>
//         {list.typeMatches.map((val, ind) => (
//         <div key={ind}>
//           {/* <h3><Link to={`/${val.matchType}`}>{val.matchType}</Link></h3> */}
//           {val.seriesMatches.map((match, index) => (
//             <div key={index}>

//             {(match.matchType === "International") ? (
//                 <p>{match.seriesMatches}</p>

//               ) : (
//                 <p>kkjj</p>
//               )}

//             </div>
//           ))}
//         </div>
//       ))}

//     </div>
//   )
// }

// export default InternationalMatches

import React from "react";
import Navbar from "../../navbar/Navbar";
import { MatchesListData } from "../../DataFiles/Matches_list";
import Footer from "../../navbar/Footer";
import MatchTypeNav from "./MatchTypeNav";
import "./Matches.css"

const InternationalMatches = () => {
  console.log(MatchesListData, "data");

  return (
    <div>
      <Navbar />
      <MatchTypeNav />

      <>
        {MatchesListData &&
          MatchesListData?.typeMatches[0]?.seriesMatches?.map((serise) => (
            <div
            >
              {serise?.seriesAdWrapper?.seriesName === undefined ? (
                <></>
              ) : (
                <div className="cart">
                  <h4 className="heading">{serise?.seriesAdWrapper?.seriesName}</h4>
                  {serise?.seriesAdWrapper?.matches?.map((match) => (
                    <div className="matches" style={{ margin: "10px" }}>
                      <p
                        style={{
                          fontSize: "14px",
                          margin: "25px 10px 10px 10px ",
                        }}
                      >
                        <b> {match?.matchInfo?.matchDesc}</b>:{" "}
                        {match?.matchInfo?.seriesName}
                      </p>
                      <p>
                        <span style={{ margin: "10px 50px 10px 10px" }}>
                          <img
                            src={match?.matchInfo?.team1?.imageId}
                            height={"20px"}
                            width={"35px"}
                          />
                          <b>{match?.matchInfo?.team1?.teamSName}</b>
                        </span>{" "}
                        {match?.matchScore?.team1Score?.inngs1?.runs}
                        <span>
                          -{match?.matchScore?.team1Score?.inngs1?.wickets}
                        </span>{" "}
                        <span>
                          {match?.matchScore?.team1Score?.inngs1?.over}
                        </span>{" "}
                        {match?.matchScore?.team1Score?.inngs2?.slash}{" "}
                        {match?.matchScore?.team1Score?.inngs2?.runs}
                        {match?.matchScore?.team1Score?.inngs2?.flag}{" "}
                        {match?.matchScore?.team1Score?.inngs2?.wickets}
                        <span>
                          ({match?.matchScore?.team1Score?.inngs1?.overs})
                        </span>{" "}
                      </p>
                      <p>
                        <span style={{ margin: "10px 50px 10px 10px" }}>
                          <img
                            src={match?.matchInfo?.team2?.imageId}
                            height={"20px"}
                            width={"35px"}
                          />
                          <b>{match?.matchInfo?.team2?.teamSName}</b>
                        </span>{" "}
                        {match?.matchScore?.team2Score?.inngs1?.runs}
                        <span>
                          -{match?.matchScore?.team2Score?.inngs1?.wickets}
                        </span>{" "}
                        <span>
                          {" "}
                          {match?.matchScore?.team2Score?.inngs2?.over}
                        </span>
                        {match?.matchScore?.team1Score?.inngs2?.slash}{" "}
                        {match?.matchScore?.team2Score?.inngs2?.runs}{" "}
                        {match?.matchScore?.team1Score?.inngs2?.flag}
                        {match?.matchScore?.team2Score?.inngs2?.wickets}
                        <span>
                          ({match?.matchScore?.team2Score?.inngs1?.overs})
                        </span>{" "}
                      </p>
                      <div>
                        {" "}
                        <b style={{ margin: "5px" }}> Match Result:</b>{" "}
                        {match?.matchInfo?.status}{" "}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
      </>

      <Footer />
    </div>
  );
};

export default InternationalMatches;
