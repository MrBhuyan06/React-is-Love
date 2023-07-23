import React from "react";
import { useContext } from "react";
import { User } from "../context/stateProvider.js";
import demoContext from "../context/democontext.js";
const Body = () => {
  const { user, setUser } = useContext(User);
  const [{ name }] = useContext(demoContext);
  console.log(name);

  console.log(user);
  return (
    <div>
      <h1>Hello</h1>
      <h2>{user.name}</h2>
      <input
        type="text"
        onChange={(e) => {
          setUser({
            ...user,
            name: e.target.value,
          });
        }}
      />
      <br />
      <input
        type="text"
        onChange={(e) => {
          setUser({
            ...user,
            email: e.target.value,
          });
        }}
      />
      <h2>{user.email}</h2>
    </div>
  );
};

export default Body;
