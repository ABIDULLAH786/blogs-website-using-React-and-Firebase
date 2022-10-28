import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../Config/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  let navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
      updateProfile(auth.currentUser, { displayName: name });
      navigate("/");
    } catch (error) {
      console.log(error)
      toast(error.code, { type: "error" });
    }
  };
  return (
    <div className="border p-3 bg-light " style={{ marginTop: 70 }}>
      <h1>Register</h1>
      <div className="form-group">
        <label>Name: {name}</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label>Email: {email}</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter your email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div className="form-group">
        <label>Password: {password}</label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <br />
      <button className="btn btn-primary" onClick={handleSignup}>
        Register
      </button>
    </div>
  );
}
