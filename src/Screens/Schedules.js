import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../navbar/Footer';
import { UpCommingTour } from '../DataFiles/UpComming_Tour';
import "./Schedules.css"

const Schedules = () => {
  return (
    <div>
      <Navbar />
      <div >
        <div >
          {UpCommingTour && UpCommingTour.matchDetails?.map((time, index) => (
            <div className='SchedulesDiv' key={index}>
              <div>
              <div><b>{time?.matchDetailsMap?.key}</b></div>
              {time?.matchDetailsMap?.match?.map((name, idx) => (
                <div key={idx}>
                  <h3 className='heading' style={{background:"#333", color:"white", height:"50px"}}>{name?.matchInfo?.seriesName}</h3>
                  <div><b>Format:</b> {name?.matchInfo?.matchFormat}</div>
                  <h5><b>{name?.matchInfo?.state}</b></h5>
                  <p><img src={name?.matchInfo?.team1?.imageId} height={"40px"} width={"80px"}/><b>{name?.matchInfo?.team1?.teamName}</b> </p><p> <img src={name?.matchInfo?.team2?.imageId} height={"40px"} width={"80px"}/><b>{name?.matchInfo?.team2?.teamName}</b></p>
                  <p><b>Ground:</b> {name?.matchInfo?.venueInfo?.ground}</p>
                  <p><b>City:</b> {name?.matchInfo?.venueInfo?.city}</p>
                  <p><b>Time:</b> {name?.matchInfo?.venueInfo?.timezone}</p>
                </div>
              ))}
            </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Schedules;
