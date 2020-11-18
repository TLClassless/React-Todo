import React from "react";
import logo from "../../react.svg";

function Header() {
  return (
    <header style={headerStyle}>
      <span>
        <img style={logoStyle} src={logo} alt="React Logo" />
        <h1>React To Do List:</h1>
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

const logoStyle = {
  height: "40px",
  width: "auto",
};

export default Header;
