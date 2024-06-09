

import { signInWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useContext, useState } from "react";
import { Link, json, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
//import { LoginContext } from "../../Navigation/Navigation";
import  "./PreNav.css"


const Login = () => {

 // const LoginAuth=useContext(LoginContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigation=useNavigate()

  
  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      
     await signInWithEmailAndPassword(auth,email,password);
      
      alert("Login successful!");
      Navigation("/")

      
     // LoginAuth.HandleLogin()

    } catch (error) {
      console.error("Error logging in:", error);
      alert("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <>
    <div className="background">
    <div className="mainDiv">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      
    </div>
   <div style={{ color:"white", margin:"20px"}}>Don't have an Account? <Link   to={"/register"}>Sign Up</Link></div>
    <Link style={{color:"black" ,backgroundColor:"yellow",padding:"5px",textDecoration:"none", borderRadius:"2px"}} to={"/"} >Skip to Home</Link>
    </div>
    
    </>
  );
};

export default Login;
