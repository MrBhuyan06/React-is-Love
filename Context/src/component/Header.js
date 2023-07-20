import { useContext } from "react";
import { User } from "../context/stateProvider.js";
import React from "react";

const Header = () => {
  const { user, setUser } = useContext(User);
  return (
    <div>
      <h1>Hello</h1>
      <h2>{user.name}</h2>
      <h2>{user.email}</h2>
    </div>
  );
};

export default Header;
