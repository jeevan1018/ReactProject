import React from 'react'
import Navbar from '../navbar/Navbar'
import list from '../DataFiles/Matches_list';
import { Link } from 'react-router-dom';
import Footer from '../navbar/Footer';

const Serise = () => {
  return (
    <div>
        <Navbar/>
      <h1>Serise Component</h1>
      {/* {list.map((value,index)=>value.typeMatches.map((val, ind) => (
        <div key={ind}>
          <h3><Link to={`/${val.matchType}`}>{val.matchType}</Link></h3>
          {val.seriesMatches.map((match, index) => (
            <div key={index}>
              {match.matches && (
                <p>{match.seriesAdWrapper.matches}</p>
              )}
            </div>
          ))} 
        </div>
      ))
    )} */}
    


      <Footer/>
    </div>
  );
};
  

export default Serise
