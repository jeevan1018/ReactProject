import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../navbar/Footer";
import { Stats } from "../DataFiles/Stats_list";
import VenuesProp from "./Venues/VenuesProp";
import "./Venues.css";

const Venus = () => {
  // console.log(Stats);
  return (
    <>
      <Navbar />
      <h2>INDIAN Venues</h2>
      <div
        className="Venues-main"
        style={{
          display: "flex",
          margin: "10px",
          height: "auto",
          width: "auto",
        }}
      >
        <div>
          <VenuesProp
            stadium={"Narendra Modi Stadium"}
            location={"Ahemdabad"}
            image={
              "https://th.bing.com/th/id/OLC.zutCQfiMDOnudA480x360?&rs=1&pid=ImgDetMain"
            }
          />
          <VenuesProp
            stadium={"Wankhede"}
            location={"Mumbai"}
            image={
              "https://pitch-report.com/wp-content/uploads/2022/02/Wankhede-Stadium-Mumbai-Pitch-report-768x492.jpeg"
            }
          />
        </div>
        <div>
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
            <ul>
              {Stats.rank.map(v=> <li>{v.country}</li>)}
            </ul>
      <Footer />
    </>
  );
};

export default Venus;
