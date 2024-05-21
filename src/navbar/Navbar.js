import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import icon from "./icon.jpeg";
import { LoginContext } from '../Navigation/Navigation';

const Navbar = () => {
  const LogOut=useContext(LoginContext)
  const HandleLogOut=()=>{
    LogOut.HandleLogin()
  }
  return (
    <div className="nav">
      <img src={icon} alt={"icon"} height={"50px"} width={"80px"}/>
      <Link to={"/"}>Home</Link>
      <Link to={"/international"}>Matches</Link>
      <Link to={"/series"}>Series</Link>
      <Link to={"/testRank"}>Stats</Link>
      <Link to={"/schedules"}>Schedules</Link>
      <Link to={"/india"}>Players</Link>
      <Link to={"/venues"}>Venues</Link>

      <button style={{border:"none", height:"40px" ,width:"100px",marginLeft:"750px"}} onClick={HandleLogOut}><b>LOG OUT</b></button>
      
      
    </div>
  );
};

export default Navbar;
