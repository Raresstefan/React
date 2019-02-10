import React from "react";

const Header = (props) => {
  return (
    <header>
      <h1>{props.head}</h1>
      <span className="stats">Players: 5</span>
    </header>
  );
};

export default Header;