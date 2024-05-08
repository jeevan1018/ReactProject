import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import "./Home.css";
import { MatchesListData } from "../DataFiles/Matches_list";
import { Update_list } from "../DataFiles/Updates_list";

import Footer from "../navbar/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  /* const [data, setData] = useState(null); 

  useEffect(() => {
    axios
      .get("https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent", {
        headers: {
          "X-RapidAPI-Key": "f18702b8b8mshfe59bfd0f20b993p1cc1eajsnb6b6c2d6e22b",
        
        }
      })
      .then((response) => {
      
        setData(response.data);
        
        console.log(response.data,"api data");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [data]);  */

  // .map((val2)=>{
  //    return val2.seriesMatches.map((val3)=>{
  //      return val3.matches
  //     })
  //   })
  // })

  console.log(Update_list);

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <div className="aside">
          <h3>Latest Updates</h3>
          {Update_list && Update_list?.storyList?.map((val,ind)=>(
            <div key={ind}>
              {val?.story?.hline}
            </div>
          ))}
          {/* <h6>Who will make into Play-Offs in IPL?</h6> */}
        </div>
      </div>
      <div>
        {MatchesListData &&
          MatchesListData?.typeMatches?.map((match, index) => (
            <>
              <Link to={match.matchType}>{match.matchType} </Link>
              {match?.seriesMatches.map((series, index) => (
                <div>{series?.seriesAdWrapper?.seriesName}</div>
              ))}
             
            </>
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
