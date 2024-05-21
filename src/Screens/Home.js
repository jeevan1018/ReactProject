import React, { useEffect, useRef, useScroll,useState,useTransform } from "react";
import Navbar from "../navbar/Navbar";
import "./Home.css";
import { MatchesListData } from "../DataFiles/Matches_list";
import { Update_list } from "../DataFiles/Updates_list";

import Footer from "../navbar/Footer";

import HomeProps from "./HomeProps";
import add from "./aserts/add.png"
import remove from "./aserts/remove.png"


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

  // console.log(Update_list);
  const [remove,setRemove]=useState(true)
  const   HandleDelete=()=>{
    setRemove(false)

  }



  console.log(MatchesListData);
  return (
    <div>
      <Navbar />
      <div className="HomeMain" style={{ display: "flex" }}>
        <div className="aside">
          <h3 style={{margin:"10px",padding:"10px", width:"250px", color:"white", backgroundColor:"#2222"}}>Latest News:</h3>
          {Update_list &&
            Update_list?.storyList?.map((val, ind) => (
              <div key={ind}><p style={{margin:"10px"}}><b>{val?.story?.hline}</b> <br/> <span>{val?.story?.intro}</span> <br/> <i>{val?.story?.source}</i> </p></div>
            ))}
        </div>
        <div className="mainScore">
      
  <div>
    <div className="scoreContainer">
         <div className="scoreDiv">
          <div style={{display:"flex"}}>
            {MatchesListData.typeMatches[0]?.seriesMatches?.map((series) => (
              series?.seriesAdWrapper?.matches?.map((match)=>(
             <div className="scoreBar">
               <p style={{fontSize:"14px", margin:"25px 10px 10px 10px "}}><b> {match?.matchInfo?.matchDesc}</b>: {match?.matchInfo?.seriesName}</p>
               <p><span style={{margin:"10px 50px 10px 10px"}}><img src={match?.matchInfo?.team1?.imageId} height={"20px"} width={"35px"}/><b>{match?.matchInfo?.team1?.teamSName}</b></span> {  match?. matchScore?.team1Score?.inngs1?.runs}<span>-{match?. matchScore?.team1Score?.inngs1?.wickets}</span> <span>{match?. matchScore?.team1Score?.inngs1?.over}</span> {match?. matchScore?.team1Score?.inngs2?.slash} {match?. matchScore?.team1Score?.inngs2?.runs}{match?. matchScore?.team1Score?.inngs2?.flag} {match?. matchScore?.team1Score?.inngs2?.wickets}<span>({match?. matchScore?.team1Score?.inngs1?.overs})</span> </p>
               <p><span style={{margin:"10px 50px 10px 10px"}}><img src={match?.matchInfo?.team2?.imageId} height={"20px"} width={"35px"}/><b>{match?.matchInfo?.team2?.teamSName}</b></span>  {match?. matchScore?.team2Score?.inngs1?.runs}<span>-{match?. matchScore?.team2Score?.inngs1?.wickets}</span> <span> {match?. matchScore?.team2Score?.inngs2?.over}</span>{match?. matchScore?.team1Score?.inngs2?.slash} {match?. matchScore?.team2Score?.inngs2?.runs} {match?. matchScore?.team1Score?.inngs2?.flag}{match?. matchScore?.team2Score?.inngs2?.wickets}<span>({match?. matchScore?.team2Score?.inngs1?.overs})</span> </p>
               <div>  <b style={{margin:"5px"}}>  Match Result:</b> {match?.matchInfo?.status} </div>
                
                </div>

              ))
            ))}
            </div>
          
          
          </div>
          </div>
          
          
<div style={{display:"flex"}}>
          <div className="news">
            <div>
          <HomeProps text={"BCCI"} image={"https://static.cricbuzz.com/a/img/v1/420x235/i1/c471519/bcci-to-release-advertisement.jpg"} heading={"BCCI to release advertisement for new coach soon"} para={"The BCCI secretary was non-committal on the continuation of the Impact Player rule in the IPL, stating that it will be decided after consultation with captains and coaches"} link={"https://www.cricbuzz.com/cricket-news/130386/bcci-to-release-advertisement-for-new-coach-soon-reveals-jay-shah"} />
          </div>
          <div>
          <HomeProps text={"IPL 2024"} image={"https://static.cricbuzz.com/a/img/v1/420x235/i1/c472913/gill-sudharsan-centuries-keep.jpg"} heading={"Gill, Sudharsan centuries keep GT just about alive"} para={"CSK remain fourth but are now ahead of DC and LSG only on the basis of NRR"} link={"https://www.cricbuzz.com/cricket-news/130394/gill-sudharsan-centuries-keep-gt-just-about-alive"} />
         </div>
         <div>
          <HomeProps text={"IPL 2024"} image={"https://static.cricbuzz.com/a/img/v1/420x235/i1/c471523/kkr-eye-playoffs-ticket-with-a.jpg"} heading={"KKR eye playoffs ticket with a double over MI"} para={"A win at home over the already-eliminated side will confirm KKR's passage to the knockouts"} link={"https://www.cricbuzz.com/cricket-news/130389/kkr-eye-playoffs-ticket-with-a-double-over-mi"} />
         </div>
         </div>
         <div className="article">
          <div>
           
            
          {remove ?  (<div>
            <button  style={{border:"none" , height:"20px", width:"20px"}} onClick={HandleDelete}><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVstt89ghfkH86_QUXzBz9YvgB1iQxhqTJxg&s"} height={"20px"} width={"20px"}/></button>
            <img className="advertisement" src={add} height={"200px"} width={"340px"}/><br/>
            </div>):(<div></div>)}
            </div>
          
            
<div className="special">
  <div>
<h3 style={{color:" #009270"}}><b>Special</b></h3>
 <img src={"https://www.cricbuzz.com/a/img/v1/595x396/i1/c457589/aqib-ilyas-has-been-appointed.jpg"} height={"200px"} width={"300px"} /><br/>
 <a href="https://www.cricbuzz.com/cricket-news/130253/icc-mens-t20-world-cup-2024-news-digest"><h3>ICC Men's T20 World Cup 2024 - News Digest</h3></a>
 <p>All the news from the world of the ICC T20 World Cup 2024</p>
 </div>
 <div>
 <img src={"https://www.cricbuzz.com/a/img/v1/980x654/i1/c473150/if-it-is-indeed-the-last-dance.jpg"} height={"200px"} width={"300px"} /><br/>
 <a href="https://www.cricbuzz.com/cricket-news/130400/impassioned-in-yellow"><h3>Impassioned in yellow</h3></a>
 <p>MS Dhoni is not usually drawn to sentimentality, but there are deeper reasons behind his valedictory final lap and a desire to sign off in Chennai</p>
 </div>
 <div>
 <img src={"https://www.cricbuzz.com/a/img/v1/980x654/i1/c456794/rohit-kohli-or-rohit-jaiswal.jpg"} height={"200px"} width={"300px"} /><br/>
 <a href="https://www.cricbuzz.com/cricket-news/130293/breakdown-to-open-with-kohli-or-not-and-the-dube-flexibility"><h3>Breakdown: To open with Kohli or not and the Dube flexibility</h3></a>
 <p>The takeaways from the 15-member India squad announced for the 2024 T20 World Cup</p>
 </div>
 {/* <div>
 <img src={"https://static.cricbuzz.com/a/img/v1/300x170/i1/c457589/aqib-ilyas-has-been-appointed.jpg"} height={"200px"} width={"300px"} /><br/>
 <a href="https://www.cricbuzz.com/cricket-news/130253/icc-mens-t20-world-cup-2024-news-digest"><h3>ICC Men's T20 World Cup 2024 - News Digest</h3></a>
 <p>All the news from the world of the ICC T20 World Cup 2024</p>
 </div> */}
</div>
            

          </div>

        
         
         
          </div>

          
         
         
</div>

</div>


      
      </div>
      

      <Footer />
    </div>
  );
};

export default Home;
