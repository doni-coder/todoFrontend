import React from "react";
import "../styles/SignUp.css";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="signup-body">
      <div className="signup-container">
        <h2>create account</h2>
        <form action="POST">
          <div className="username">
            <label htmlFor="username">username : </label>
            <input name="username" type="text" />
          </div>
          <div className="email">
            <label htmlFor="email">email : </label>
            <input name="email" type="email" />
          </div>
          <div className="password">
            <label htmlFor="password">password : </label>
            <input name="password" type="password" />
          </div>
          <button type="submit" className="btn">
            create account
          </button>
        </form>
        <p className="signup-p">
          If already account then{" "}
          <span>
            <Link to="/login">login</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
