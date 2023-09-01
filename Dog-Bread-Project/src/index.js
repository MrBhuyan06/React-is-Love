import React from "react";
import ReactDOM from "react-dom/client.js";

const APP = () => {
  return (
    <>
      <h1 className=" bg-red-400">REACT IS RUNNING</h1>
      <p className="text-center">HEllo</p>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<APP />);
