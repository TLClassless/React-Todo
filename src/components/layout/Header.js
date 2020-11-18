import React from "react";
import { Link } from "react-router-dom";
import logo from "../../react.svg";

function Header() {
  return (
    <header style={headerStyle}>
      <img style={logoStyle} src={logo} alt="React Logo" />
      <h1>React To Do List:</h1>
      <span style={headerContainer}>
        <Link style={linkStyle} to="/">
          <p>Home </p>
        </Link>
        <p>|</p>
        <Link style={linkStyle} to="/about">
          <p> About</p>
        </Link>
      </span>
    </header>
  );
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};

const logoStyle = {
  height: "40px",
  width: "auto",
};

const headerContainer = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "center",
};

export default Header;
