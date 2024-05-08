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
import {MatchesListData} from "../../DataFiles/Matches_list";
import Footer from "../../navbar/Footer";

const InternationalMatches = () => {
  // const international = list.map((val, ind) => {
  //   return val.typeMatches.filter((item) => {
  //     return item.matchType === "International";
  //   });
  // });
  
  
  return (
    <div>
      <Navbar />
      <h1>InternationalMatches</h1>

      {/* {list.typeMatches.map((val, ind) => (
          <div key={ind}> */}
      {/* <h3><Link to={`/${val.matchType}`}>{val.matchType}</Link></h3> */}
      {/* {val.seriesMatches.map((match, index) => (
              <div key={index}>
                 {console.log("matchType:", match.matchType)}
                {(match.matchType === "International") ? (
                    <p>{match.seriesAdWrapper.seriesName}</p>
                ) : (
                    <p>kkjj</p>
                )}
              </div>
            ))} 
          </div>
        ))} */}
      <Footer />
    </div>
  );
};

export default InternationalMatches;
