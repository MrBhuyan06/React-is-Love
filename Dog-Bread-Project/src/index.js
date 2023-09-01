import React from "react";
import ReactDOM from "react-dom/client.js";
import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import Favorite from "./components/Favorite.js";

const APP = () => {
  return (
    <>
      <Header />
      <Hero />
      <Favorite />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<APP />);
