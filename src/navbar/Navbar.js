/* import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css";
import icon from "./icon.jpeg";
import pro_file from "../Screens/aserts/account.png"
 import { LoginContext } from '../Navigation/Navigation'; 

const Navbar = () => {
   const LogOut=useContext(LoginContext)
  const HandleLogOut=()=>{
    LogOut.HandleLogin()
  } 
  

  return (
    <div className="nav">
      <img src={icon} alt={"icon"} height={"50px"} width={"80px"}/>
      <NavLink activeClassName={"active"} to={"/"}>Home</NavLink>
      <NavLink activeClassName={"active"} to={"/international"}>Matches</NavLink>
      <NavLink activeClassName={"active"} to={"/series"}>Series</NavLink>
      <NavLink activeClassName={"active"} to={"/testRank"}>Stats</NavLink>
      <NavLink activeClassName={"active"} to={"/schedules"}>Schedules</NavLink>
      <NavLink activeClassName={"active"} to={"/india"}>Players</NavLink>
      <NavLink activeClassName={"active"} to={"/venues"}>Venues</NavLink>

      <NavLink className={"profile"} style={{marginLeft:"600px"}} to={"/register"}><img className='account'  src={pro_file} height={"35px"} width={"40px"} alt='profile'/></NavLink>




       <button className='button' onClick={HandleLogOut}><b>LOG OUT</b></button> 
      
      
    </div>
  );
};

export default Navbar; */

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css";
import icon from "./icon.jpeg";
import pro_file from "../Screens/aserts/account.png";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav">
        <img src={icon} alt="icon" height="50px" width="80px" />
        <NavLink exact to="/" className={({ isActive }) => isActive ? "active" : undefined}>Home</NavLink>
        <NavLink to="/international" className={({ isActive }) => isActive ? "active" : undefined}>Matches</NavLink>
        <NavLink to="/series" className={({ isActive }) => isActive ? "active" : undefined}>Series</NavLink>
        <NavLink to="/testRank" className={({ isActive }) => isActive ? "active" : undefined}>Stats</NavLink>
        <NavLink to="/schedules" className={({ isActive }) => isActive ? "active" : undefined}>Schedules</NavLink>
        <NavLink to="/india" className={({ isActive }) => isActive ? "active" : undefined}>Players</NavLink>
        <NavLink to="/venues" className={({ isActive }) => isActive ? "active" : undefined}>Venues</NavLink>

        <NavLink to="/register" className="profile" style={{ marginLeft: "auto" }}>
          <img className="account" src={pro_file} height="35px" width="40px" alt="profile" />
        </NavLink>

        {/* <button className="button" onClick={HandleLogOut}><b>LOG OUT</b></button> */}
      </div>
    </div>
  );
};

export default Navbar;

