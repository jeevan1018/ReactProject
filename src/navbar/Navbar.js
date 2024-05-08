import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import icon from "./icon.jpeg";

const Navbar = () => {
  return (
    <div className="nav">
      <img src={icon} alt={"icon"} height={"50px"} width={"80px"}/>
      <Link to={"/"}>Home</Link>
      <Link to={"/matches"}>Matches</Link>
      <Link to={"/series"}>Series</Link>
      <Link to={"/testRank"}>Stats</Link>
      <Link to={"/schedules"}>Schedules</Link>
      <Link to={"/india"}>Players</Link>
      <Link to={"/venues"}>Venues</Link>
      
      
    </div>
  );
};

export default Navbar;
