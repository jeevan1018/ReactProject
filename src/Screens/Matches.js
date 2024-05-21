import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../navbar/Footer";
import { MatchesListData } from "../DataFiles/Matches_list";
import { Link } from "react-router-dom";
import MatchTypeNav from "../Screens/MatchType/MatchTypeNav";

const Matches = () => {
  console.log(MatchesListData)
  return (
    <div>
      <Navbar />
      <div>
        <MatchTypeNav />

       {/*  {MatchesListData &&
          MatchesListData?.typeMatches?.map((match, index) => (
            <div>
               <Link to={'/matches/'+match.matchTypeId}>  
           <Link to={`/matches/${match?.matchTypeId}`}>
                <h3>{match.matchType}</h3>
              </Link>
            </div>
          ))} */}
      </div>
      <div>
        {MatchesListData &&
          MatchesListData?.typeMatches?.map((details, index) => (
            <>
              <h1>{details?.matchType}</h1>

              {details?.seriesMatches?.map((series, index) => (
                <>
                  {series?.seriesAdWrapper?.matches?.map((match) => (
                    <div>
                      <h3>{match?.matchInfo?.seriesName}</h3>
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
                </>
              ))}
            </>
          ))}
      </div>

      <Footer />
    </div>
  );
};

export default Matches;
