import React, { createContext, useState } from "react";
export const User = createContext();

export const StateProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Abhihshek",
    email: "abhihskeBhuyna",
  });
  return <User.Provider value={{ user, setUser }}>{children}</User.Provider>;
};

export default StateProvider;
