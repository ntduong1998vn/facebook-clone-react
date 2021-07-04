import React from "react";
import "./Login.css";
import { auth, provider } from "../firebase";
import { actionTypes } from "../reducers/reducer";
import { useAuth } from "../contexts/AuthContext";

function Login() {
  const { dispatch } = useAuth();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => console.error(err.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg"
          alt=""
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        />
      </div>
      <button type="submit" onClick={signIn}>
        Sign In
      </button>
    </div>
  );
}

export default Login;
