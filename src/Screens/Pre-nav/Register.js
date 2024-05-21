import React, { StrictMode, useState } from "react";
import { auth ,db} from "./firebase";
import {createUserWithEmailAndPassword} from "firebase/auth"
import { setDoc,doc } from "firebase/firestore";
import  "./PreNav.css" 

import { Link, json, useNavigate } from "react-router-dom";


function Register() {
    const [name, setName] = useState("");
    const [phone,setPhone]=useState("")
    const [gender,setGender]=useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const NavigateToLogin=useNavigate()

    const handleRegister = async (e) => {
        e.preventDefault();


    

        try {
           await createUserWithEmailAndPassword(auth,email,password);
            const User=auth.currentUser;
            console.log(User)

            if(User){
                await setDoc(doc(db,"User",User.uid),{
                    email:User.email,
                    name:name,
                    phone:phone,
                    gender:gender


                });

            }

             


        const DetailStore=localStorage.setItem("User" ,JSON.stringify(User))
        console.log(DetailStore)

            alert("User registered successfully!");
          NavigateToLogin("/")

        } catch (error) {
            console.error("Error registering user:", error);
            alert("Registration failed. Please try again.");
        }
    };

    return (
        <div className="background">
        <div className="mainDiv">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" required />
                </div>

                <div>
                    <label>Phone:</label>
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Phone Number" required />
                </div>

                <div>
                <label>
        Gender:
        <select value={gender} onChange={(e)=> setGender(e.target.value)} required>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>

                </div>
                
            
            
                <div>
                    <label>Password:</label>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" required />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Enter Confirm Password" required />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
        <Link  style={{ color:"white", margin:"20px"}} to={"/"}>Already Have an Account?</Link>

        </div>
        
    );
}

export default Register;
