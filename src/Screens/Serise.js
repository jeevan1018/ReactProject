import React from 'react'
import Navbar from '../navbar/Navbar'
import list, { MatchesListData } from '../DataFiles/Matches_list';
import { Link } from 'react-router-dom';
import Footer from '../navbar/Footer';
import "./Series.css"

const Serise = () => {
  return (
    <div>
        <Navbar/>
      

      <div>
        {MatchesListData &&
          MatchesListData?.typeMatches?.map((match, index) => (
            <div className="SeriesContainer">
              <h1 className="SeriesH1">{match.matchType}</h1> 
              {match?.seriesMatches.map((series, index) => (
              <>
              {series?.seriesAdWrapper?.seriesName=== undefined ?(<></>):(
             <Link to={`/series/${series?.seriesAdWrapper?.seriesId}`}><h3 className="SeriesH3" style={{margin:"10px", fontSize:"16px"}}>
              {series?.seriesAdWrapper?.seriesName}</h3></Link>)
}
             </>
              ))}
            
             
            </div>
          ))}
      </div>

    
    


      <Footer/>
    </div>
  );
};
  

export default Serise
