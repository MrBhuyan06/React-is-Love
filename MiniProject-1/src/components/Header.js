import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [tittle, setTittle] = useState("Profile Finder");
  console.log(tittle);

  return (
    <header className="header">
      <div className="left-logo">
        <h2>Profile Finder</h2>
      </div>
      <h1>{tittle}</h1>
      <button
        onClick={() => {
          setTittle("profile1");
        }}
      >
        Change
      </button>
      <ul className="right-nav-list">
        <li>Home</li>
        <li>contact</li>
        <li>About us</li>
      </ul>
    </header>
  );
};

export default Header;
