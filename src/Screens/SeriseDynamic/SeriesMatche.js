import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { seriesData } from "../../DataFiles/seriesData";
import { MatchesListData } from "../../DataFiles/Matches_list";
import Footer from "../../navbar/Footer";
import Navbar from "../../navbar/Navbar";

const SeriesMatche = () => {
  const { id } = useParams();
  const seriesId = Number(id);
  const Data = seriesData.filter(
    (series) => series?.seriesAdWrapper?.seriesId === seriesId
  );
  const UserData =
    MatchesListData &&
    MatchesListData?.typeMatches?.map((serise) =>
      serise?.seriesMatches?.find(
        (seriseID) => seriseID?.seriesAdWrapper?.seriesId == id
      )
    );
  console.log(UserData, "dynamic data");
  console.log(Data, "data");

  return (
    <div>
      <Navbar />
      <div>
        {UserData &&
          UserData?.map((value) => (
            <>
              <h3>{value?.seriesAdWrapper?.seriesName}</h3>
              {value?.seriesAdWrapper?.matches?.map((match) => (
                <div>
                  <p
                    style={{ fontSize: "14px", margin: "25px 10px 10px 10px " }}
                  >
                    <b> {match?.matchInfo?.matchDesc}</b>:
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
                    </span>
                    {match?.matchScore?.team1Score?.inngs1?.runs}
                    <span>
                      -{match?.matchScore?.team1Score?.inngs1?.wickets}
                    </span>
                    <span>{match?.matchScore?.team1Score?.inngs1?.over}</span>
                    {match?.matchScore?.team1Score?.inngs2?.slash}
                    {match?.matchScore?.team1Score?.inngs2?.runs}
                    {match?.matchScore?.team1Score?.inngs2?.flag}
                    {match?.matchScore?.team1Score?.inngs2?.wickets}
                    <span>
                      ({match?.matchScore?.team1Score?.inngs1?.overs})
                    </span>
                  </p>
                  <p>
                    <span style={{ margin: "10px 50px 10px 10px" }}>
                      <img
                        src={match?.matchInfo?.team2?.imageId}
                        height={"20px"}
                        width={"35px"}
                      />
                      <b>{match?.matchInfo?.team2?.teamSName}</b>
                    </span>
                    {match?.matchScore?.team2Score?.inngs1?.runs}
                    <span>
                      -{match?.matchScore?.team2Score?.inngs1?.wickets}
                    </span>
                    <span> {match?.matchScore?.team2Score?.inngs2?.over}</span>
                    {match?.matchScore?.team1Score?.inngs2?.slash}
                    {match?.matchScore?.team2Score?.inngs2?.runs}
                    {match?.matchScore?.team1Score?.inngs2?.flag}
                    {match?.matchScore?.team2Score?.inngs2?.wickets}
                    <span>
                      ({match?.matchScore?.team2Score?.inngs1?.overs})
                    </span>
                  </p>
                  <div>
                    
                    <b style={{ margin: "5px" }}> Match Result:</b>
                    {match?.matchInfo?.status}
                  </div>
                </div>
              ))}
            </>
          ))}
      </div>

      <Footer />
    </div>
  );
};

export default SeriesMatche;
