

import React from "react";
import Navbar from "../navbar/Navbar";
import "./Home.css";
import list from "../DataFiles/Matches_list";
import { Link } from "react-router-dom";
import Footer from "../navbar/Footer";

const Home = () => {
const MatchResult= list.map((val)=>{
  return val.typeMatches})
  // .map((val2)=>{
//    return val2.seriesMatches.map((val3)=>{
//      return val3.matches
//     })
//   })
// })
console.log(MatchResult)
  return (
    <div>
      <Navbar />
      
      {/* <MatchTypeNav /> */}
    {/*   {list.typeMatches.map((val, ind) => (
        <div key={ind}>
          <h3><Link to={`/${val.matchType}`}>{val.matchType}</Link></h3>
          {val.seriesMatches.map((match, index) => (
            <div key={index}>
            
              {match.seriesAdWrapper && (
                <p>{match.seriesAdWrapper.seriesName}</p>
              )}
            </div>
          ))} 
        </div>
      ))} 
    
 */}
 <div style={{display:"flex"}}>

 <div className="aside">
        <h3>Latest Updates</h3>
        {/* <h6>Who will make into Play-Offs in IPL?</h6> */}
      </div>


<div>
{list.map((val,ind)=>(
  
  <div key={ind}>
    {val.typeMatches.map((item,index)=>(
  /*     <Link to={`/${item.matchType}`} ><h3 key={item.matchType}>{item.matchType}</h3></Link> */

<div>

  {item.seriesMatches.map((valueArry,ind)=>(
    <div >
      {/* {valueArry.} */}
      </div>
  ))}
  </div>


    ))}



  </div>
  
))}
</div>

     
      </div>


      <Footer/>
    </div>
  );
};

export default Home;
