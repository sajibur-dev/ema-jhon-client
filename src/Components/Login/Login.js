import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (user) {
    navigate("/shop");
  }
  const handleLoginForm = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <div>
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleLoginForm}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
            />
          </div>
          <p>{loading && 'loading...'}</p>
          <p>{error && error.message}</p>
          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p>
          New To Ema Jhon ?
          <Link className="signup-link" to="/signup">
            create an account
          </Link>
        </p>
        <button className="google-button">sign with google</button>
      </div>
    </div>
  );
};

export default Login;
