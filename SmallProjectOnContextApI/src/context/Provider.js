import React, { createContext, useContext, useReducer, useState } from "react";

let ContextData = createContext();

const Provider = ({ children, reducer, iniState }) => {
  return (
    <ContextData.Provider value={useReducer(reducer, iniState)}>
      {children}
    </ContextData.Provider>
  );
};

export default Provider;
export const useStateValue = () => useContext(ContextData);
