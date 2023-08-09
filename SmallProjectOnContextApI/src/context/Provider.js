import React, { createContext, useContext, useReducer, useState } from "react";

let ContextData = createContext();

const Provider = ({ children, reducer, iniState }) => {
  const [state, dispatch] = useReducer(reducer, iniState);
  return (
    <ContextData.Provider value={{ state, dispatch }}>
      {children}
    </ContextData.Provider>
  );
};

export default Provider;
export const useStateValue = () => useContext(ContextData);
