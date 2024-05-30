import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../navbar/Footer";
import { Stats } from "../DataFiles/Stats_list";
import VenuesProp from "./Venues/VenuesProp";
import "./Venues.css";
import ind from "../Screens/stats/Country flags/ind.jpeg"
import aus from "../Screens/stats/Country flags/aus.jpeg"
import eng from "../Screens/stats/Country flags/eng.jpeg"
import { Link } from "react-router-dom";

const Venus = () => {
  
  return (
    <>
    
      <Navbar />
      <div>
    
      <h2 className="heading" ><img src={ind} height={"50px"} width={"100px"}/>INDIAN VENUES</h2>
     
    
    <div className="country">
      <div className="countryChild">
  
     <Link to={"/motera"} >
      
         <VenuesProp
            stadium={"Narendra Modi Stadium"}
            location={"Ahemdabad"}
            image={
              "https://www.liveenhanced.com/wp-content/uploads/2020/04/Motera-Cricket-Stadium-1.jpg"
            }
          />
       
         
          </Link>
    
         <VenuesProp
            stadium={"Wankhede Cricket Stadium"}
            location={"Mumbai"}
            image={
              "https://www.icccricketschedule.com/wp-content/uploads/2023/01/Wankhede-Stadium-Mumbait.jpg"
            }
          />
        </div>
      
        
      <div className="countryChild">
         <VenuesProp
            stadium={"Dharmashala Cricket Stadium"}
            location={"Dharmashala"}
            image={
              "https://www.exoticmiles.com/wp-content/uploads/2020/06/Dharamshala_Cricket_Stadium.jpg"
            }
          />
          


      
         <VenuesProp
            stadium={"Eden Gardens"}
            location={"Kolkata"}
            image={
              "https://assets.telegraphindia.com/telegraph/2023/Sep/1695703963_1-28.jpg"
            }
          />
          </div>
        
    </div>
      

      <h2 className="heading" ><img src={aus} height={"50px"} width={"100px"}/>Australia VENUES</h2>
      
    <div className="country">
      <div className="countryChild">

  
         <VenuesProp
         link={"https://en.wikipedia.org/wiki/Melbourne_Cricket_Ground"}
            stadium={"Melbourne Cricket Ground "}
            location={"Melbourne"}
            image={
              "https://mysportstourist.com/wp-content/uploads/2020/01/MCG.jpg"
            }
          />
        
         <VenuesProp
            stadium={"Sydney Cricket Ground"}
            location={"Sydney"}
            image={
              "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/4e/61/de/view-of-the-sydney-cricket.jpg?w=1200&h=1200&s=1"
            }
          />
        
        </div>
      
      <div className="countryChild">
         <VenuesProp
         
            stadium={"Adelaide Oval Cricket Ground"}
            location={"Adelaide Oval"}
            image={
              "https://www.internationalcrickettours.co.uk/wp-content/uploads/2019/06/631286-adelaide-oval-afp.jpg"
            }
          />
        
    
         <VenuesProp
            stadium={"Perth Stadium"}
            location={"Perth"}
            image={
              "https://th.bing.com/th/id/OIP.AIa1JgD54Tz-PYazj4_55wHaEK?rs=1&pid=ImgDetMain"
            }
          />
        
    </div>
        
</div>
        
      <h2 className="heading" ><img src={eng} height={"50px"} width={"100px"}/>England VENUES</h2>
      
      
      
    
  <div className="country">

  
     <div className="countryChild">
      
         <VenuesProp
            stadium={"Lords Cricket Ground"}
            location={"London"}
            image={
              "https://d2gjl3w70qc898.cloudfront.net/content/uploads/2017/07/05122344/1022.6666666666666x767__origin__0x0_Lords_Cricket_Ground.jpg"
            }
          />
          
      
         <VenuesProp
            stadium={"Trent Bridge Cricket Ground"}
            location={"West Bridgford"}
            image={
              "https://www.visit-nottinghamshire.co.uk/imageresizer/?image=%2Fdmsimgs%2FTrent_Bridge_Cricket_Ground_2_DMS_499506718.jpg&action=ProductDetailProFullWidth"
            }
          />
        
      </div>
      
      <div className="countryChild">
         <VenuesProp
            stadium={"The Oval Cricket Ground"}
            location={"Kennington"}
            image={
              "https://s3-eu-west-2.amazonaws.com/seatunique-ghost/2019/08/the-kia-oval-cricket-ground-london.jpg"
            }
          />
          
       
         <VenuesProp
            stadium={"Old Trafford Cricket Ground"}
            location={"Manchester"}
            image={
              "https://i.pinimg.com/originals/31/83/ce/3183ce91efffc6814835ceb6fcdc49cc.jpg"
            }
          />
          
        
      </div>
      </div>



     
    </div>
  
    <Footer />
    </>
  );
};

export default Venus;
