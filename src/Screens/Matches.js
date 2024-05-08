import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../navbar/Footer";
import { MatchesListData } from "../DataFiles/Matches_list";
import { Link } from "react-router-dom";

const Matches = () => {
  return (
    <div>
      <Navbar />
      <h1>Matches Component</h1>

      {/* <div>
        {list.map((val, ind) => (
          <div key={ind}>
            {val.typeMatches.map((item, index) => (
              <Link to={`/${item.matchType}`}>
                <h3 key={item.matchType}>{item.matchType}</h3>
              </Link>
            ))}
          </div>
        ))}
      </div> */}
      <Footer />
    </div>
  );
};

export default Matches;
