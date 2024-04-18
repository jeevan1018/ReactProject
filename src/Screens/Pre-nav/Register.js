import React, { useState } from "react";


function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();


        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {

           /*  const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password); */


      /*       await firebase.firestore().collection("users").doc(userCredential.user.uid).set({
                name,
                email,
                phoneNumber,
                dob,
                gender,
            }); */

            alert("User registered successfully!");
        } catch (error) {
            console.error("Error registering user:", error);
            alert("Registration failed. Please try again.");
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
                <div>
                    <label>Date of Birth:</label>
                    <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
                </div>
                <div>
                    <label>Gender:</label>
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
