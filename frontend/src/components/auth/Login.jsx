import { Button } from "antd";

import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
// import { auth } from "../../Config/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { googleIcon } from "../../assets/index";

export default function Login() {
  const auth = getAuth();

  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const provider = new GoogleAuthProvider();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      toast(error.code, { type: "error" });
    }
  };
  return (
    <div
      className="border p-3 bg-light mx-auto"
      style={{ maxWidth: 400, marginTop: 60 }}
    >
      <h1>Login</h1>
      <div className="form-group">
        <label>Email</label>
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
        <label>Password</label>
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
      <div className="d-flex justify-content-evenly">
        <button className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
        <Button type="primary" shape="round" size={"large"}>
          Login
        </Button>

        <button
          className="btn btn-dark"
          onClick={() => {
            signInWithPopup(auth, provider)
              .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                // const credential =
                //   GoogleAuthProvider.credentialFromResult(result);

                // const token = credential.accessToken;

                // The signed-in user info.
                const user = result.user;
                console.log("User Data : ", user);
                navigate("/");
              })
              .catch((error) => {
                console.log(error);

                // Add Alert

                // Handle Errors here.
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // // The email of the user's account used.
                // const email = error.customData.email;
                // // The AuthCredential type that was used.
                // const credential =
                //   GoogleAuthProvider.credentialFromError(error);
                // ...
              });
          }}
        >
          <div className="d-flex justify-content-evenly ">
            <img src={googleIcon} height={"30px"} alt="google-icon" />
            <span>&nbsp; Google </span>
          </div>
        </button>
      </div>
    </div>
  );
}
