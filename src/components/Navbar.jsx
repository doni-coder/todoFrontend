import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <h2>Todo</h2>
      </div>
      <div className="actions">
        <span className="span">
          Tasks <div className="msg-dot">0</div>
        </span>
        <button className="btn">Login</button>
      </div>
    </div>
  );
}

export default Navbar;
